import React from 'react';
import { IconBack, IconArrow } from '../icons';

// Shuffle/dice icon
const IconShuffle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 3 21 3 21 8" />
    <line x1="4" y1="20" x2="21" y2="3" />
    <polyline points="21 16 21 21 16 21" />
    <line x1="15" y1="15" x2="21" y2="21" />
    <line x1="4" y1="4" x2="9" y2="9" />
  </svg>
);

export default function VariantsScreen({ text, isActive, isLoading, subjectLabel, currentSubject, mergedDatabase, onBack, onStartQuiz, onStartRandomQuiz }) {
  if (isLoading && isActive) {
    return (
      <div className="loader-container">
        <div className="loader" />
        <div className="loader-text">Loading Variants...</div>
      </div>
    );
  }

  const variants = mergedDatabase[currentSubject]
    ? Object.keys(mergedDatabase[currentSubject]).sort((a, b) => {
        const numA = parseInt(a.replace(/\D/g, ''));
        const numB = parseInt(b.replace(/\D/g, ''));
        if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
        return a.localeCompare(b);
      })
    : [];

  const formatVariantName = (key, index) => {
    if (key.startsWith('Variant') || key.startsWith('variant'))
      return key.replace('variant', 'Variant ');
    return `Variant ${index + 1} · ${key}`;
  };

  return (
    <div className={`screen ${isActive ? 'active' : ''}`}>
      <div className="screen-header">
        <button className="btn-icon" onClick={onBack}><IconBack /></button>
        <div className="screen-title">{subjectLabel(currentSubject)}</div>
        <div className="screen-badge">{variants.length} {text.variants}</div>
      </div>

      {/* Random Questions card */}
      {variants.length > 0 && onStartRandomQuiz && (
        <div className="random-quiz-section">
          <button className="random-quiz-card" onClick={onStartRandomQuiz}>
            <div className="random-quiz-icon">
              <IconShuffle />
            </div>
            <div className="random-quiz-info">
              <div className="random-quiz-title">{text.randomTest || 'Random Questions'}</div>
              <div className="random-quiz-desc">{text.randomTestDesc || `One random question from each of the ${variants.length} variants`}</div>
            </div>
            <div className="random-quiz-count">40q</div>
          </button>
        </div>
      )}

      <div className="section-title">{text.selectVariant}</div>
      <div className="list-container">
        {variants.map((key, i) => (
          <button key={key} className="list-item" onClick={() => onStartQuiz(key)}>
            <div className="item-left">
              <div className="item-index">{String(i + 1).padStart(2, '0')}</div>
              <div className="item-name">{formatVariantName(key, i)}</div>
            </div>
            <IconArrow />
          </button>
        ))}
      </div>
    </div>
  );
}
