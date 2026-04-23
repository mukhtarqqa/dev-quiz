import React from 'react';
import {
  IconBack, IconArrow,
  IconActivity, IconCheck,
  IconMoon, IconSun,
  IconPalette, IconGlobe,
  IconTelegram, IconLogOut,
} from '../icons';
import { CONTACT_TELEGRAM } from '../constants';

const THEME_COLORS = {
  cyan:   '#00e5ff',
  purple: '#b620e0',
  green:  '#39ff7e',
  orange: '#ff6a00',
  pink:   '#ff33a1',
  blue:   '#3388ff',
  yellow: '#ffc107',
};

function DeviceIcon({ isMobile }) {
  if (isMobile) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
    </svg>
  );
}

export default function ProfileScreen({
  text, isActive, currentUser, stats,
  mode, setMode, theme, setTheme, lang, setLang,
  onBack, onSignOut,
  registeredDevices = [], currentDeviceId,
}) {

  const formatDate = (iso) => {
    if (!iso) return '—';
    try {
      return new Date(iso).toLocaleString(
        lang === 'RU' ? 'ru-RU' : lang === 'KZ' ? 'kk-KZ' : 'en-US',
        { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }
      );
    } catch { return iso; }
  };

  return (
    <div className={`screen ${isActive ? 'active' : ''}`}>
      {/* Header */}
      <div className="screen-header" style={{ marginBottom: '24px' }}>
        <button className="btn-icon" onClick={onBack}><IconBack /></button>
        <div className="screen-title">{text.profile}</div>
      </div>

      <div className="settings-container">

        {/* ── Account hero ── */}
        <div className="profile-hero">
          {currentUser.picture && (
            <img src={currentUser.picture} className="user-avatar"
              style={{ width: '56px', height: '56px' }} alt="" />
          )}
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)' }}>
              {currentUser.name}
            </div>
            <div style={{ color: 'var(--text-sub)', fontSize: '.85rem' }}>
              {currentUser.email}
            </div>
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

        {/* ── Registered Devices (read-only) ── */}
        <div className="settings-group-label">{text.grpDevices}</div>
        <div className="settings-group">
          {registeredDevices.length === 0 ? (
            <div className="settings-row" style={{ color: 'var(--text-sub)', fontSize: '.85rem' }}>—</div>
          ) : (
            registeredDevices.map((device, idx) => {
              const isThis = device.id === currentDeviceId;
              return (
                <div key={device.id} className={`device-item${isThis ? ' device-item--current' : ''}`}>
                  <div className="device-item__info">
                    <div className="device-item__icon"><DeviceIcon isMobile={device.isMobile} /></div>
                    <div className="device-item__meta">
                      <div className="device-item__name">
                        {device.os ? `${device.browser} on ${device.os}` : `${text.deviceLabel} ${idx + 1}`}
                        {isThis && <span className="device-item__badge">{text.deviceThis}</span>}
                      </div>
                      <div className="device-item__time">
                        {text.deviceRegisteredAt}: {formatDate(device.registeredAt)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* ── Appearance ── */}
        <div className="settings-group-label">{text.grpAppearance}</div>
        <div className="settings-group">
          <div className="settings-row">
            <div className="settings-row-title">
              {mode === 'dark' ? <IconMoon /> : <IconSun />} {text.mode}
            </div>
            <div className="lang-segment">
              <button className={mode === 'light' ? 'active' : ''} onClick={() => setMode('light')}>{text.light}</button>
              <button className={mode === 'dark'  ? 'active' : ''} onClick={() => setMode('dark')}>{text.dark}</button>
            </div>
          </div>

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
          <button
            onClick={() => {
              const message = encodeURIComponent(`Здравствуйте! Нужна помощь по аккаунту: ${currentUser.email}`);
              window.open(`https://t.me/${CONTACT_TELEGRAM}?text=${message}`, '_blank');
            }}
            className="settings-row"
            style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'none' }}
          >
            <div className="settings-row-title" style={{ color: 'var(--text-main)' }}>
              <IconTelegram /> {text.support}
            </div>
            <IconArrow />
          </button>

          <button
            className="settings-row"
            style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={onSignOut}
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
