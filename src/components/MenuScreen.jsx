import React from 'react';
import { IconAlert, IconSettings, IconArrow } from '../icons';

export default function MenuScreen({ text, currentUser, subjects, isAdmin, isLoading, isActive, onSelectSubject, onOpenAdmin, onOpenReport }) {
  if (isLoading && isActive) {
    return (
      <div className="loader-container">
        <div className="loader" />
        <div className="loader-text">Loading Subjects...</div>
      </div>
    );
  }

  return (
    <div className={`screen ${isActive ? 'active' : ''}`}>
      <div className="menu-header">
        <div className="menu-greeting">{text.greeting}, {currentUser.name}!</div>
        <div className="menu-title">{text.selectAssesment}</div>
      </div>

      <div className="section-title">{text.availSubjects}</div>
      <div className="subject-grid">
        {subjects.map(s => (
          <button key={s.key} className="subject-card" onClick={() => onSelectSubject(s.key)}>
            <div className="subject-icon">{s.icon}</div>
            <div className="subject-details">
              <div className="subject-name">{s.name}</div>
              <span className="subject-lang">{s.lang}</span>
            </div>
            <div className="subject-arrow"><IconArrow /></div>
          </button>
        ))}
      </div>

      <div className="action-panel">
        <button className="btn-action" onClick={onOpenReport}>
          <IconAlert /> {text.reportIssue}
        </button>
        {isAdmin && (
          <button className="btn-action primary" onClick={onOpenAdmin}>
            <IconSettings /> {text.adminPanel}
          </button>
        )}
      </div>
    </div>
  );
}
