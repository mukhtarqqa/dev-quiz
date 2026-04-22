import React from 'react';

export default function AppHeader({ currentUser, onLogoClick, onAvatarClick }) {
  return (
    <header className="app-header">
      <button className="app-title" onClick={onLogoClick} style={{ color: 'inherit' }}>
        DEV<span>QUIZ</span>
      </button>
      <div
        className="user-profile"
        onClick={onAvatarClick}
        style={{
          cursor: 'pointer',
          border: '1px solid var(--border-mid)',
          padding: '4px 8px',
          borderRadius: '20px',
          background: 'var(--bg-panel)',
          transition: 'var(--t)',
        }}
      >
        <div className="user-info">
          <span className="user-name">{currentUser.name}</span>
        </div>
        {currentUser.picture && (
          <img src={currentUser.picture} className="user-avatar" alt="" />
        )}
      </div>
    </header>
  );
}
