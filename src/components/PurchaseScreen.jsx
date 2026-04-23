import React from 'react';
import { CONTACT_WHATSAPP, CONTACT_TELEGRAM } from '../constants';
import { IconTelegram, IconWhatsApp, IconClose } from '../icons';

export default function PurchaseScreen({ text, currentUser, isActive, onBack }) {
  if (!isActive) return null;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(text.purchaseMessage + currentUser.email);
    window.open(`https://wa.me/${CONTACT_WHATSAPP}?text=${message}`, '_blank');
  };

  const handleTelegram = () => {
    const message = encodeURIComponent(text.purchaseMessage + currentUser.email);
    window.open(`https://t.me/${CONTACT_TELEGRAM}?text=${message}`, '_blank');
  };

  return (
    <div className={`screen purchase-screen ${isActive ? 'active' : ''}`}>
      <div className="purchase-card">
        <button className="purchase-close-btn" onClick={onBack}>
          <IconClose />
        </button>
        <h2>{text.purchaseTitle}</h2>
        <p className="purchase-desc">{text.purchaseDesc}</p>
        
        <div className="price-box">
          <span className="price-label">{text.priceLabel}</span>
          <span className="price-value">{text.priceValue}</span>
        </div>

        <p className="contact-us-text">{text.contactUs}</p>

        <div className="contact-buttons">
          <button className="btn primary whatsapp-btn" onClick={handleWhatsApp}>
            <IconWhatsApp />
            <span>{text.buyWhatsApp}</span>
          </button>
          <button className="btn primary telegram-btn" onClick={handleTelegram}>
            <IconTelegram />
            <span>{text.buyTelegram}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
