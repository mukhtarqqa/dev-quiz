import React from 'react';

export default function BuyAccessScreen({ onLogout }) {
  const whatsappNumber = "77771234567"; // You can replace this with your actual number
  const message = "Здравствуйте! Хочу купить доступ к платформе DevQuiz.";
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="screen active" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center', padding: '20px' }}>
      <div className="auth-card">
        <div className="auth-logo"><span>DEV</span>QUIZ</div>
        <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>Доступ ограничен</h2>
        <p className="auth-desc" style={{ margin: '5px 0' }}>
          Для прохождения тестов необходимо приобрести подписку.
        </p>
        
        <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent)', margin: '15px 0', textShadow: '0 0 14px var(--accent-glow)' }}>
          5000 KZT
        </div>
        
        <div style={{ textAlign: 'left', background: 'var(--bg-panel)', border: '1px solid var(--border)', padding: '20px', borderRadius: 'var(--radius)', marginBottom: '20px', fontSize: '0.85rem', color: 'var(--text-sub)' }}>
          <p style={{ fontWeight: '600', color: 'var(--text-main)', marginBottom: '10px' }}>Как получить доступ:</p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Нажмите на кнопку ниже, чтобы перейти в WhatsApp.</li>
            <li>Отправьте скриншот оплаты и ваш email от Google-аккаунта.</li>
            <li>Администратор активирует ваш аккаунт в течение 10 минут.</li>
          </ol>
        </div>

        <a href={waLink} target="_blank" rel="noreferrer" className="btn-primary full-width" style={{ textDecoration: 'none', textAlign: 'center', display: 'block', marginBottom: '15px' }}>
          Написать в WhatsApp
        </a>
        
        <button className="btn-text-danger" onClick={onLogout} style={{ fontSize: '0.75rem', background: 'transparent', border: 'none', cursor: 'pointer' }}>
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
}
