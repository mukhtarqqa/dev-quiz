import React from 'react';

export default function ReportModal({ text, reportText, setReportText, onSubmit, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">{text.reportModalTitle}</div>
        <div className="modal-body">
          <textarea
            className="input-field textarea"
            rows="4"
            value={reportText}
            onChange={e => setReportText(e.target.value)}
            placeholder={text.reportPlaceholder}
          />
        </div>
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>{text.cancel}</button>
          <button className="btn-primary" onClick={onSubmit}>{text.submit}</button>
        </div>
      </div>
    </div>
  );
}
