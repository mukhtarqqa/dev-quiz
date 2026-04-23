import React from 'react';
import { CONTACT_TELEGRAM } from '../constants';

function ShieldIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  );
}

export default function DeviceBlockedScreen({ text, currentUser, onSignOut }) {
  const handleSupport = () => {
    const message = encodeURIComponent(`${text.supportMessage}${currentUser?.email}`);
    window.open(`https://t.me/${CONTACT_TELEGRAM}?text=${message}`, '_blank');
  };

  return (
    <div className="device-blocked-screen">
      <div className="device-blocked-screen__card">
        <div className="device-blocked-screen__icon">
          <ShieldIcon />
        </div>
        <h2 className="device-blocked-screen__title">{text.deviceBlockedTitle}</h2>
        <p className="device-blocked-screen__desc">{text.deviceBlockedDesc}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', marginTop: '8px' }}>
          <button
            onClick={handleSupport}
            className="btn secondary"
            style={{ width: '100%' }}
          >
            {text.supportBtn}
          </button>
          
          <button
            onClick={onSignOut}
            className="btn-text"
            style={{ color: 'var(--text-sub)', fontSize: '0.85rem', cursor: 'pointer', background: 'none', border: 'none' }}
          >
            {text.signOut}
          </button>
        </div>
      </div>
    </div>
  );
}
