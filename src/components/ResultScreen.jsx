import React from 'react';
import { IconCheck, IconClose } from '../icons';

export default function ResultScreen({ text, isActive, score, questions, userAnswers, onRetake, onDashboard }) {
  const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  const allCorrect = userAnswers.every(a => a.isCorrect);

  return (
    <div className={`screen ${isActive ? 'active' : ''}`}>
      {/* Score hero */}
      <div className="result-hero">
        <div className="result-score-wrap">
          <div className="result-score">{pct}%</div>
          <div className="result-meta">{score} / {questions.length} correct</div>
        </div>
        {userAnswers.some(a => !a.isCorrect) && (
          <div className="result-label">{text.reviewWrong}</div>
        )}
      </div>

      {/* Review list */}
      <div className="review-list">
        {allCorrect ? (
          <div className="empty-state">{text.flawless}</div>
        ) : (
          userAnswers.map((a, i) => !a.isCorrect && (
            <div className="review-item" key={i}>
              <div className="review-q">{a.q}</div>
              <div className="review-ans correct">
                <IconCheck /> {a.opts[a.correct]}
              </div>
              <div className="review-ans wrong">
                <IconClose /> {a.selected === -1 ? 'Timeout' : a.opts[a.selected]}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Actions */}
      <div className="result-actions">
        <button className="btn-primary" onClick={onRetake}>{text.retake}</button>
        <button className="btn-secondary" onClick={onDashboard}>{text.dashboard}</button>
      </div>
    </div>
  );
}
