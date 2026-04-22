import React from 'react';
import { IconClose } from '../icons';
import { OPTION_LETTERS } from '../constants';

export default function QuizScreen({ text, isActive, questions, qIndex, timeLeft, isAnswered, feedbackMsg, userAnswers, onAnswer, onNext, onQuit }) {
  const timerDanger  = timeLeft <= 5;
  const progressPct  = questions.length > 0 ? (qIndex / questions.length) * 100 : 0;
  const timerDisplay = timeLeft < 10 ? `0:0${timeLeft}` : `0:${timeLeft}`;

  const getOptClass = (i) => {
    if (!isAnswered) return 'opt-btn';
    const q = questions[qIndex];
    if (i === q.correct) return 'opt-btn correct';
    const last = userAnswers[userAnswers.length - 1];
    if (last && last.selected === i) return 'opt-btn wrong';
    return 'opt-btn';
  };

  const isLastQuestion = qIndex + 1 >= questions.length;

  return (
    <div className={`screen quiz-screen ${isActive ? 'active' : ''}`}>
      {/* Header row */}
      <div className="quiz-header">
        <div className="quiz-progress-text">
          {String(qIndex + 1).padStart(2, '0')} / {String(questions.length).padStart(2, '0')}
        </div>
        <div className={`quiz-timer ${timerDanger ? 'danger' : ''}`}>{timerDisplay}</div>
        <button className="btn-icon" onClick={onQuit}><IconClose /></button>
      </div>

      {/* Progress bar */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      {/* Question */}
      <div className="question-text">{questions[qIndex]?.q}</div>

      {/* Options */}
      <div className="options-container">
        {questions[qIndex]?.options.map((opt, i) => (
          <button
            key={i}
            className={getOptClass(i)}
            disabled={isAnswered}
            onClick={() => onAnswer(i)}
          >
            <div className="opt-letter">{OPTION_LETTERS[i]}</div>
            <div className="opt-text">{opt}</div>
          </button>
        ))}
      </div>

      {/* Feedback */}
      {feedbackMsg.text && (
        <div className={`feedback-indicator ${feedbackMsg.type}`}>{feedbackMsg.text}</div>
      )}

      {/* Next button */}
      {isAnswered && (
        <div className="quiz-footer">
          <button className="btn-primary full-width" onClick={onNext}>
            {isLastQuestion ? text.viewResults : text.nextQ}
          </button>
        </div>
      )}
    </div>
  );
}
