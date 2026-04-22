import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import {
  IconBack, IconArrow,
  IconActivity, IconCheck,
  IconMoon, IconSun,
  IconPalette, IconGlobe,
  IconTelegram, IconLogOut,
} from '../icons';

const THEME_COLORS = {
  cyan:   '#00e5ff',
  purple: '#b620e0',
  green:  '#39ff7e',
  orange: '#ff6a00',
  pink:   '#ff33a1',
  blue:   '#3388ff',
  yellow: '#ffc107',
};

export default function ProfileScreen({ text, isActive, currentUser, stats, mode, setMode, theme, setTheme, lang, setLang, onBack }) {
  return (
    <div className={`screen ${isActive ? 'active' : ''}`}>
      {/* Header */}
      <div className="screen-header" style={{ marginBottom: '24px' }}>
        <button className="btn-icon" onClick={onBack}><IconBack /></button>
        <div className="screen-title">{text.profile}</div>
      </div>

      <div className="settings-container">
        {/* Account hero */}
        <div className="profile-hero">
          {currentUser.picture && (
            <img src={currentUser.picture} className="user-avatar" style={{ width: '56px', height: '56px' }} alt="" />
          )}
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)' }}>{currentUser.name}</div>
            <div style={{ color: 'var(--text-sub)', fontSize: '.85rem' }}>{currentUser.email}</div>
          </div>
        </div>

        {/* ── Statistics ── */}
        <div className="settings-group-label">{text.grpStats}</div>
        <div className="settings-group">
          <div className="settings-row">
            <div className="settings-row-title"><IconActivity /> {text.solvedQ}</div>
            <div style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--accent)' }}>{stats.solved}</div>
          </div>
          <div className="settings-row">
            <div className="settings-row-title"><IconCheck /> {text.correctQ}</div>
            <div style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--accent)' }}>{stats.score}</div>
          </div>
        </div>

        {/* ── Appearance ── */}
        <div className="settings-group-label">{text.grpAppearance}</div>
        <div className="settings-group">
          {/* Light / Dark mode */}
          <div className="settings-row">
            <div className="settings-row-title">
              {mode === 'dark' ? <IconMoon /> : <IconSun />} {text.mode}
            </div>
            <div className="lang-segment">
              <button className={mode === 'light' ? 'active' : ''} onClick={() => setMode('light')}>{text.light}</button>
              <button className={mode === 'dark'  ? 'active' : ''} onClick={() => setMode('dark')}>{text.dark}</button>
            </div>
          </div>

          {/* Accent theme picker */}
          <div className="settings-row">
            <div className="settings-row-title"><IconPalette /> {text.theme}</div>
            <div className="theme-picker">
              {Object.entries(THEME_COLORS).map(([name, color]) => (
                <button
                  key={name}
                  onClick={() => setTheme(name)}
                  className="theme-swatch"
                  style={{
                    background: color,
                    border:    theme === name ? '2px solid var(--text-main)' : '1px solid var(--border)',
                    boxShadow: theme === name ? '0 0 10px var(--accent-glow)' : 'none',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── System ── */}
        <div className="settings-group-label">{text.grpSystem}</div>
        <div className="settings-group">
          <div className="settings-row">
            <div className="settings-row-title"><IconGlobe /> {text.lang}</div>
            <div className="lang-segment">
              {['EN', 'KZ', 'RU'].map(l => (
                <button key={l} className={lang === l ? 'active' : ''} onClick={() => setLang(l)}>{l}</button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Actions ── */}
        <div className="settings-group">
          <a
            href="https://t.me/zhumabekov047"
            target="_blank"
            rel="noopener noreferrer"
            className="settings-row"
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <div className="settings-row-title" style={{ color: 'var(--text-main)' }}>
              <IconTelegram /> {text.support}
            </div>
            <IconArrow />
          </a>

          <button
            className="settings-row"
            style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => signOut(auth)}
          >
            <div className="settings-row-title" style={{ color: 'var(--red)' }}>
              <IconLogOut /> {text.signOut}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
