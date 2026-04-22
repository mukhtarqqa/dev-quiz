import React from 'react';

export default function ReportModal({ reportText, setReportText, onSubmit, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">Report Issue</div>
        <div className="modal-body">
          <textarea
            className="input-field textarea"
            rows="4"
            value={reportText}
            onChange={e => setReportText(e.target.value)}
            placeholder="Describe the issue in detail..."
          />
        </div>
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
