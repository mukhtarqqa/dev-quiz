import React from 'react';
import { IconBack, IconArrow } from '../icons';

export default function VariantsScreen({ text, isActive, subjectLabel, currentSubject, mergedDatabase, onBack, onStartQuiz }) {
  const variants = mergedDatabase[currentSubject]
    ? Object.keys(mergedDatabase[currentSubject])
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
