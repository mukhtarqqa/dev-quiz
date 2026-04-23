import React from 'react';

export default function AppHeader({ currentUser, scrolled, lang, setLang, onLogoClick, onAvatarClick }) {
  return (
    <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <button className="app-title" onClick={onLogoClick} style={{ color: 'inherit' }}>
          DEV<span>QUIZ</span>
        </button>

        <div className="header-right">
          <div className="lang-segment">
            <button className={lang === 'EN' ? 'active' : ''} onClick={() => setLang('EN')}>EN</button>
            <button className={lang === 'KZ' ? 'active' : ''} onClick={() => setLang('KZ')}>KZ</button>
            <button className={lang === 'RU' ? 'active' : ''} onClick={() => setLang('RU')}>RU</button>
          </div>

          <div className="user-profile" onClick={onAvatarClick}>
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
