import React from 'react';

export default function AppHeader({ currentUser, scrolled, lang, setLang, onLogoClick, onAvatarClick }) {
  return (
    <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <button className="app-title" onClick={onLogoClick} style={{ color: 'inherit' }}>
          DEV<span>QUIZ</span>
        </button>

        <div className="header-right">
          <div className="lang-segment" style={{ background: 'var(--bg-active)', padding: '2px' }}>
            <button className={lang === 'EN' ? 'active' : ''} onClick={() => setLang('EN')} style={{ padding: '4px 8px', fontSize: '0.65rem' }}>EN</button>
            <button className={lang === 'KZ' ? 'active' : ''} onClick={() => setLang('KZ')} style={{ padding: '4px 8px', fontSize: '0.65rem' }}>KZ</button>
            <button className={lang === 'RU' ? 'active' : ''} onClick={() => setLang('RU')} style={{ padding: '4px 8px', fontSize: '0.65rem' }}>RU</button>
          </div>

          <div
            className="user-profile"
            onClick={onAvatarClick}
            style={{
              cursor: 'pointer',
              border: '1px solid var(--glass-border)',
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
        </div>
      </div>
    </header>
  );
}
