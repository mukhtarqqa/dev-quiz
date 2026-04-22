import React, { useState } from 'react';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { IconClose } from '../icons';
import { OPTION_LETTERS } from '../constants';

export default function AdminDashboard({ goBack, reports, onTestAdded, deleteReport, dynamicTests }) {
  const [tab,          setTab]          = useState('reports');
  const [subject,      setSubject]      = useState('web');
  const [variantName,  setVariantName]  = useState('');
  const [questions,    setQuestions]    = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ── Test management ── */
  const deleteTest = async (id) => {
    if (!window.confirm('Удалить этот вариант?')) return;
    try {
      await deleteDoc(doc(db, 'dynamic_tests', id));
      onTestAdded();
    } catch (e) { alert('Ошибка удаления: ' + e.message); }
  };

  /* ── Question builder helpers ── */
  const addQuestion = () =>
    setQuestions([...questions, { q: '', options: ['', '', '', '', ''], correct: 0 }]);

  const updateQuestion = (index, field, value) => {
    const n = [...questions]; n[index][field] = value; setQuestions(n);
  };
  const updateOption = (qi, oi, value) => {
    const n = [...questions]; n[qi].options[oi] = value; setQuestions(n);
  };
  const removeQuestion = (index) => {
    const n = [...questions]; n.splice(index, 1); setQuestions(n);
  };

  /* ── Submit ── */
  const submitTest = async () => {
    if (!variantName.trim())     return alert('Введите название варианта');
    if (questions.length === 0)  return alert('Добавьте хотя бы один вопрос');
    for (let i = 0; i < questions.length; i++) {
      if (!questions[i].q.trim()) return alert(`Заполните текст вопроса ${i + 1}`);
      for (let j = 0; j < 5; j++)
        if (!questions[i].options[j].trim()) return alert(`Заполните вариант ответа ${j + 1} в вопросе ${i + 1}`);
    }
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'dynamic_tests'), { subject, variantName, questions });
      alert('Тест успешно добавлен!');
      onTestAdded();
      setVariantName(''); setQuestions([]); setTab('reports');
    } catch (e) {
      alert('Ошибка: ' + e.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="admin-container">
      {/* Header */}
      <div className="admin-header">
        <h2>Admin Panel</h2>
        <button className="btn-icon" onClick={goBack}><IconClose /></button>
      </div>

      {/* Tabs */}
      <div className="admin-tabs">
        {[
          { id: 'reports',      label: `Reports (${reports.length})` },
          { id: 'add_test',     label: 'Create Test' },
          { id: 'manage_tests', label: 'Manage Tests' },
        ].map(t => (
          <button
            key={t.id}
            className={`admin-tab ${tab === t.id ? 'active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="admin-content">
        {/* ── Reports tab ── */}
        {tab === 'reports' && (
          <div className="reports-list">
            {reports.length === 0 && (
              <p style={{ fontSize: '.8rem', color: 'var(--text-muted)', padding: '20px 0' }}>No reports found.</p>
            )}
            {reports.map((r, i) => (
              <div key={i} className="report-card">
                <div className="report-meta">
                  <span>{new Date(r.timestamp).toLocaleString()}</span>
                  <span>{r.userEmail}</span>
                </div>
                <div className="report-text">{r.text}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                  {r.screen === 'quiz' ? (
                    <div className="report-info">
                      <span className="badge">Screen</span> Quiz &nbsp;
                      <span className="badge">Q</span> {r.qIndex + 1}
                    </div>
                  ) : <div />}
                  <button className="btn-text-danger" onClick={() => deleteReport(r.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Manage tests tab ── */}
        {tab === 'manage_tests' && (
          <div className="reports-list">
            {dynamicTests.length === 0 && (
              <p style={{ fontSize: '.8rem', color: 'var(--text-muted)' }}>Динамические тесты не найдены.</p>
            )}
            {dynamicTests.map(t => (
              <div key={t.id} className="report-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '.85rem' }}>{t.variantName}</div>
                  <div style={{ fontSize: '.7rem', color: 'var(--text-sub)', marginTop: '4px' }}>
                    Предмет: {t.subject} | Вопросов: {t.questions?.length}
                  </div>
                </div>
                <button className="btn-text-danger" onClick={() => deleteTest(t.id)}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {/* ── Create test tab ── */}
        {tab === 'add_test' && (
          <div className="add-test-form">
            {/* Subject select */}
            <div className="form-group">
              <label>Subject</label>
              <div className="select-wrapper">
                <select value={subject} onChange={e => setSubject(e.target.value)} className="input-field">
                  <option value="web">Web (KZ)</option>
                  <option value="java">Java (KZ)</option>
                  <option value="web_ru">Web (RU)</option>
                  <option value="java_ru">Java (RU)</option>
                </select>
              </div>
            </div>

            {/* Variant name */}
            <div className="form-group">
              <label>Variant Name</label>
              <input
                type="text"
                className="input-field"
                value={variantName}
                onChange={e => setVariantName(e.target.value)}
                placeholder="e.g. Variant 15"
              />
            </div>

            <div className="form-divider" />
            <div className="section-title">Questions ({questions.length})</div>

            {/* Question cards */}
            {questions.map((q, qi) => (
              <div key={qi} className="q-builder-card">
                <div className="q-builder-header">
                  <span>Question {qi + 1}</span>
                  <button className="btn-text-danger" onClick={() => removeQuestion(qi)}>Remove</button>
                </div>
                <textarea
                  className="input-field textarea"
                  placeholder="Question text"
                  value={q.q}
                  onChange={e => updateQuestion(qi, 'q', e.target.value)}
                  rows="3"
                />
                <div className="options-builder">
                  {q.options.map((opt, oi) => (
                    <div key={oi} className="option-row">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name={`c-${qi}`}
                          checked={q.correct === oi}
                          onChange={() => updateQuestion(qi, 'correct', oi)}
                        />
                        <span className="radio-custom" />
                      </label>
                      <input
                        type="text"
                        className="input-field"
                        placeholder={`Option ${OPTION_LETTERS[oi]}`}
                        value={opt}
                        onChange={e => updateOption(qi, oi, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <button className="btn-secondary" onClick={addQuestion}>+ Add Question</button>
            <button className="btn-primary" onClick={submitTest} disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Deploy Test'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
