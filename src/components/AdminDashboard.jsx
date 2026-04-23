import React, { useState } from 'react';
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { IconClose } from '../icons';
import { OPTION_LETTERS } from '../constants';

export default function AdminDashboard({ goBack, reports, onTestAdded, deleteReport, dynamicTests }) {
  const [tab,          setTab]          = useState('reports');
  const [users,        setUsers]        = useState([]);
  const [searchQuery,  setSearchQuery]  = useState('');
  const [subject,      setSubject]      = useState('web');
  const [variantName,  setVariantName]  = useState('');
  const [questions,    setQuestions]    = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [userFilter,     setUserFilter]     = useState('all'); // all, access, no_access

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

  /* ── User management ── */
  const fetchUsers = async () => {
    setIsLoadingUsers(true);
    try {
      const q = query(collection(db, 'users'), orderBy('createdAt', 'desc'));
      const snap = await getDocs(q);
      const list = [];
      snap.forEach(d => list.push({ id: d.id, ...d.data() }));
      setUsers(list);
    } catch (e) {
      console.error("Failed to fetch users:", e);
    } finally {
      setIsLoadingUsers(false);
    }
  };

  const toggleAccess = async (user) => {
    try {
      const userRef = doc(db, 'users', user.id);
      const newStatus = !user.hasAccess;
      await updateDoc(userRef, { hasAccess: newStatus });
      setUsers(prev => prev.map(u => u.id === user.id ? { ...u, hasAccess: newStatus } : u));
    } catch (e) {
      alert("Error updating access: " + e.message);
    }
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(u => {
    const matchesSearch = u.email?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          u.name?.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (userFilter === 'access')    return matchesSearch && u.hasAccess === true;
    if (userFilter === 'no_access') return matchesSearch && u.hasAccess !== true;
    return matchesSearch;
  });

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
          { id: 'users',        label: `Users (${users.length})` },
          { id: 'add_test',     label: 'Create Test' },
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


        {/* ── Users tab ── */}
        {tab === 'users' && (
          <div className="users-management">
            <div className="admin-stats-bar">
              <div className="stat-item">
                <span className="stat-label">Total Users</span>
                <span className="stat-value">{users.length}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">With Access</span>
                <span className="stat-value">{users.filter(u => u.hasAccess).length}</span>
              </div>
            </div>

            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search by email or name..." 
                className="input-field"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="filter-chips">
              {[
                { id: 'all',       label: 'All' },
                { id: 'access',    label: 'With Access' },
                { id: 'no_access', label: 'No Access' },
              ].map(f => (
                <button
                  key={f.id}
                  className={`chip ${userFilter === f.id ? 'active' : ''}`}
                  onClick={() => setUserFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {isLoadingUsers ? (
              <p style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>Loading users...</p>
            ) : (
              <div className="users-list">
                {filteredUsers.length === 0 && <p style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>No users found.</p>}
                {filteredUsers.map(u => (
                  <div key={u.id} className="user-mgmt-card">
                    <div className="user-mgmt-info">
                      <div className="user-mgmt-main-row">
                        {u.picture && <img src={u.picture} alt="" className="user-mgmt-avatar" />}
                        <div className="user-mgmt-main">
                          <span className="user-mgmt-name">{u.name}</span>
                          <span className="user-mgmt-email">{u.email}</span>
                        </div>
                      </div>
                      <div className="user-mgmt-meta">
                        <span className="user-mgmt-date">Joined: {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : 'N/A'}</span>
                        <span className="user-mgmt-date">Last login: {u.lastLogin ? new Date(u.lastLogin).toLocaleDateString() : 'N/A'}</span>
                      </div>
                    </div>
                    <div className="user-mgmt-actions">
                      <button 
                        className={`btn-access ${u.hasAccess ? 'active' : ''}`}
                        onClick={() => toggleAccess(u)}
                      >
                        {u.hasAccess ? 'Revoke Access' : 'Grant Access'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
