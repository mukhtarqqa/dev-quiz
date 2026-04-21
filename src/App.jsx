import React, { useState, useEffect, useRef } from 'react';
import { database } from './questions';
import { auth, googleProvider, db } from './firebase';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, addDoc, getDocs, query, orderBy, deleteDoc, doc } from 'firebase/firestore';

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E'];
const TIME_LIMIT = 20;
const ADMIN_EMAIL = 'minamuha2020@gmail.com';

const IconCode = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const IconDB = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);
const IconAlert = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconSettings = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6"/>
  </svg>
);
const IconBack = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);
const IconClose = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconCheck = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const SUBJECTS = [
  { key: 'python',    name: 'Python',   lang: 'KZ', icon: <IconCode /> },
  { key: 'db',        name: 'Database', lang: 'KZ', icon: <IconDB /> },
  { key: 'python_ru', name: 'Python',   lang: 'RU', icon: <IconCode /> },
  { key: 'db_ru',     name: 'Database', lang: 'RU', icon: <IconDB /> },
];

const i18n = {
  EN: {
    authSubtitle: "IT Assessment Platform",
    authDesc: "Sign in to access technical assessments, track your performance, and compete across Python and Database topics.",
    authBtn: "Continue with Google",
    authTag: "Secured · Academic Use Only",
    greeting: "Welcome back",
    selectAssesment: "Select Assessment",
    chooseTopic: "Choose a topic",
    availSubjects: "Available Subjects",
    reportIssue: "Report Issue",
    adminPanel: "Admin Panel",
    profile: "Profile",
    lang: "Language",
    theme: "Theme Color",
    support: "TG Support",
    signOut: "Sign Out",
    solvedQ: "Questions",
    correctQ: "Correct",
    selectVariant: "Select Variant",
    variants: "variants",
    nextQ: "Next Question →",
    viewResults: "View Results →",
    retake: "Retake",
    dashboard: "Dashboard",
    reviewWrong: "Review Incorrect Answers",
    flawless: "// Flawless execution — all answers correct.",
    timeUp: "Time's up.",
    correct: "Correct.",
    incorrect: "Incorrect.",
  },
  RU: {
    authSubtitle: "Платформа IT-Тестирования",
    authDesc: "Войдите, чтобы получить доступ к тестам по Python и БД, а также отслеживать свой прогресс.",
    authBtn: "Войти через Google",
    authTag: "Безопасно · Только для обучения",
    greeting: "С возвращением",
    selectAssesment: "Выбор теста",
    chooseTopic: "Выберите предмет",
    availSubjects: "Доступные предметы",
    reportIssue: "Сообщить об ошибке",
    adminPanel: "Панель админа",
    profile: "Профиль",
    lang: "Язык",
    theme: "Цвет темы",
    support: "Поддержка TG",
    signOut: "Выйти",
    solvedQ: "Вопросов",
    correctQ: "Верных",
    selectVariant: "Выберите вариант",
    variants: "вариантов",
    nextQ: "Следующий вопрос →",
    viewResults: "Результаты →",
    retake: "Перепройти",
    dashboard: "В меню",
    reviewWrong: "Разбор ошибок",
    flawless: "// Идеальное выполнение — все ответы верны.",
    timeUp: "Время вышло.",
    correct: "Верно.",
    incorrect: "Неверно.",
  },
  KZ: {
    authSubtitle: "IT-Тесттеу Платформасы",
    authDesc: "Python және деректер қоры бойынша тесттерге қол жеткізу, прогресті бақылау үшін кіріңіз.",
    authBtn: "Google арқылы кіру",
    authTag: "Қауіпсіз · Тек оқу үшін",
    greeting: "Қайта оралуыңызбен",
    selectAssesment: "Тестті таңдау",
    chooseTopic: "Пәнді таңдаңыз",
    availSubjects: "Қолжетімді пәндер",
    reportIssue: "Ақаулық туралы хабарлау",
    adminPanel: "Әкімші панелі",
    profile: "Профиль",
    lang: "Тіл",
    theme: "Тақырып түсі",
    support: "TG Қолдау",
    signOut: "Шығу",
    solvedQ: "Сұрақтар",
    correctQ: "Дұрыс",
    selectVariant: "Нұсқаны таңдаңыз",
    variants: "нұсқа",
    nextQ: "Келесі сұрақ →",
    viewResults: "Нәтижелер →",
    retake: "Қайталау",
    dashboard: "Мәзірге",
    reviewWrong: "Қателерді талдау",
    flawless: "// Керемет нәтиже — барлық жауаптар дұрыс.",
    timeUp: "Уақыт бітті.",
    correct: "Дұрыс.",
    incorrect: "Қате.",
  }
};

function AdminDashboard({ goBack, reports, onTestAdded, deleteReport, dynamicTests }) {
  const [tab, setTab] = useState('reports');
  const [subject, setSubject] = useState('python');

  const deleteTest = async (id) => {
    if (!window.confirm("Удалить этот вариант?")) return;
    try {
      await deleteDoc(doc(db, "dynamic_tests", id));
      onTestAdded();
    } catch(e) { alert("Ошибка удаления: " + e.message); }
  };
  const [variantName, setVariantName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addQuestion = () => setQuestions([...questions, { q: '', options: ['','','','',''], correct: 0 }]);

  const updateQuestion = (index, field, value) => {
    const n = [...questions]; n[index][field] = value; setQuestions(n);
  };
  const updateOption = (qi, oi, value) => {
    const n = [...questions]; n[qi].options[oi] = value; setQuestions(n);
  };
  const removeQuestion = (index) => {
    const n = [...questions]; n.splice(index, 1); setQuestions(n);
  };

  const submitTest = async () => {
    if (!variantName.trim()) return alert('Введите название варианта');
    if (questions.length === 0) return alert('Добавьте хотя бы один вопрос');
    for (let i = 0; i < questions.length; i++) {
      if (!questions[i].q.trim()) return alert(`Заполните текст вопроса ${i+1}`);
      for (let j = 0; j < 5; j++) {
        if (!questions[i].options[j].trim()) return alert(`Заполните вариант ответа ${j+1} в вопросе ${i+1}`);
      }
    }
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "dynamic_tests"), { subject, variantName, questions });
      alert('Тест успешно добавлен!');
      onTestAdded();
      setVariantName(''); setQuestions([]); setTab('reports');
    } catch(e) {
      alert('Ошибка: ' + e.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>Admin Panel</h2>
        <button className="btn-icon" onClick={goBack}><IconClose /></button>
      </div>
      <div className="admin-tabs">
        <button className={`admin-tab ${tab==='reports'?'active':''}`} onClick={() => setTab('reports')}>
          Reports ({reports.length})
        </button>
        <button className={`admin-tab ${tab==='add_test'?'active':''}`} onClick={() => setTab('add_test')}>
          Create Test
        </button>
        <button className={`admin-tab ${tab==='manage_tests'?'active':''}`} onClick={() => setTab('manage_tests')}>
          Manage Tests
        </button>
      </div>
      <div className="admin-content">
        {tab === 'reports' && (
          <div className="reports-list">
            {reports.length === 0 && <p style={{fontSize:'.8rem',color:'var(--text-muted)',padding:'20px 0'}}>No reports found.</p>}
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
                  ) : <div/>}
                  <button className="btn-text-danger" onClick={() => deleteReport(r.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === 'manage_tests' && (
          <div className="reports-list">
            {dynamicTests.length === 0 && <p style={{fontSize:'.8rem',color:'var(--text-muted)'}}>Динамические тесты не найдены.</p>}
            {dynamicTests.map(t => (
              <div key={t.id} className="report-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{color:'var(--accent)', fontWeight:'bold', fontSize:'.85rem'}}>{t.variantName}</div>
                  <div style={{fontSize:'.7rem', color:'var(--text-sub)', marginTop:'4px'}}>Предмет: {t.subject} | Вопросов: {t.questions?.length}</div>
                </div>
                <button className="btn-text-danger" onClick={() => deleteTest(t.id)}>Delete</button>
              </div>
            ))}
          </div>
        )}
        {tab === 'add_test' && (
          <div className="add-test-form">
            <div className="form-group">
              <label>Subject</label>
              <div className="select-wrapper">
                <select value={subject} onChange={e => setSubject(e.target.value)} className="input-field">
                  <option value="python">Python (KZ)</option>
                  <option value="db">Database (KZ)</option>
                  <option value="python_ru">Python (RU)</option>
                  <option value="db_ru">Database (RU)</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Variant Name</label>
              <input type="text" className="input-field" value={variantName} onChange={e => setVariantName(e.target.value)} placeholder="e.g. Variant 15" />
            </div>
            <div className="form-divider"/>
            <div className="section-title">Questions ({questions.length})</div>
            {questions.map((q, qi) => (
              <div key={qi} className="q-builder-card">
                <div className="q-builder-header">
                  <span>Question {qi + 1}</span>
                  <button className="btn-text-danger" onClick={() => removeQuestion(qi)}>Remove</button>
                </div>
                <textarea className="input-field textarea" placeholder="Question text" value={q.q} onChange={e => updateQuestion(qi, 'q', e.target.value)} rows="3"/>
                <div className="options-builder">
                  {q.options.map((opt, oi) => (
                    <div key={oi} className="option-row">
                      <label className="radio-label">
                        <input type="radio" name={`c-${qi}`} checked={q.correct===oi} onChange={() => updateQuestion(qi,'correct',oi)} />
                        <span className="radio-custom"/>
                      </label>
                      <input type="text" className="input-field" placeholder={`Option ${OPTION_LETTERS[oi]}`} value={opt} onChange={e => updateOption(qi, oi, e.target.value)} />
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

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser]         = useState(null);
  const [isAdmin, setIsAdmin]                 = useState(false);
  const [activeScreen, setActiveScreen]       = useState('menu');
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportText, setReportText]           = useState('');
  const [mergedDatabase, setMergedDatabase]   = useState(database);
  const [currentSubject, setCurrentSubject]   = useState('');
  const [questions, setQuestions]             = useState([]);
  const [qIndex, setQIndex]                   = useState(0);
  const [score, setScore]                     = useState(0);
  const [userAnswers, setUserAnswers]         = useState([]);
  const [timeLeft, setTimeLeft]               = useState(TIME_LIMIT);
  const [isAnswered, setIsAnswered]           = useState(false);
  const [timerRunning, setTimerRunning]       = useState(false);
  const [feedbackMsg, setFeedbackMsg]         = useState({ text: '', type: '' });
  const [reports, setReports]                 = useState([]);
  const [dynamicTests, setDynamicTests]       = useState([]);
  const [theme, setTheme]                     = useState(localStorage.getItem('devquiz_theme') || 'cyan');
  const [lang, setLang]                       = useState(localStorage.getItem('devquiz_lang') || 'EN');
  const [stats, setStats]                     = useState(() => JSON.parse(localStorage.getItem('devquiz_stats')) || { solved: 0, score: 0 });
  const timerRef = useRef(null);
  
  const text = i18n[lang] || i18n['EN'];

  useEffect(() => {
    document.body.className = `theme-${theme}`;
    localStorage.setItem('devquiz_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('devquiz_lang', lang);
  }, [lang]);

  const fetchDynamicTests = async () => {
    try {
      const snap = await getDocs(collection(db, "dynamic_tests"));
      const ddb = JSON.parse(JSON.stringify(database));
      const dynList = [];
      snap.forEach(doc => {
        const d = doc.data();
        dynList.push({ id: doc.id, ...d });
        if (d.subject && d.variantName && d.questions) {
          if (!ddb[d.subject]) ddb[d.subject] = {};
          ddb[d.subject][d.variantName] = d.questions;
        }
      });
      setMergedDatabase(ddb);
      setDynamicTests(dynList);
    } catch(e) { console.error(e); }
  };

  useEffect(() => {
    fetchDynamicTests();
    const unsub = onAuthStateChanged(auth, user => {
      if (user) {
        setIsAuthenticated(true);
        setCurrentUser({ name: user.displayName || user.email.split('@')[0], email: user.email, picture: user.photoURL || '' });
        setIsAdmin(user.email === ADMIN_EMAIL);
      } else {
        setIsAuthenticated(false); setCurrentUser(null); setIsAdmin(false);
      }
    });
    return () => unsub();
  }, []);

  const handleSignIn = async () => {
    try { await signInWithPopup(auth, googleProvider); }
    catch(err) { console.error(err); alert('Authentication failed.'); }
  };

  useEffect(() => {
    if (timerRunning && timeLeft > 0) {
      timerRef.current = setTimeout(() => setTimeLeft(p => p - 1), 1000);
    } else if (timerRunning && timeLeft <= 0) {
      handleTimeout();
    }
    return () => clearTimeout(timerRef.current);
  }, [timeLeft, timerRunning]);

  const handleTimeout = () => {
    if (isAnswered) return;
    setFeedbackMsg({ text: text.timeUp, type: 'error' });
    setTimerRunning(false);
    recordAnswer(-1, false);
    setIsAnswered(true);
  };

  const selectSubject = (subj) => { if (!isAuthenticated) return; setCurrentSubject(subj); setActiveScreen('variants'); };

  const startQuiz = (key) => {
    setQuestions(mergedDatabase[currentSubject][key]);
    setQIndex(0); setScore(0); setUserAnswers([]);
    setIsAnswered(false); setFeedbackMsg({ text: '', type: '' });
    setTimeLeft(TIME_LIMIT); setTimerRunning(true);
    setActiveScreen('quiz');
  };

  const checkAnswer = (idx) => {
    if (isAnswered) return;
    setIsAnswered(true); setTimerRunning(false);
    const correct = questions[qIndex].correct;
    const ok = idx === correct;
    if (ok) { setScore(s => s + 1); setFeedbackMsg({ text: text.correct, type: 'success' }); }
    else { setFeedbackMsg({ text: text.incorrect, type: 'error' }); }
    recordAnswer(idx, ok);
  };

  const recordAnswer = (idx, isCorrect) => {
    setUserAnswers(prev => {
      const q = questions[qIndex];
      return [...prev, { q: q.q, opts: q.options, correct: q.correct, selected: idx, isCorrect }];
    });
    if (idx !== -1) {
      setStats(prev => {
        const n = { solved: prev.solved + 1, score: prev.score + (isCorrect ? 1 : 0) };
        localStorage.setItem('devquiz_stats', JSON.stringify(n));
        return n;
      });
    }
  };

  const nextQuestion = () => {
    const next = qIndex + 1;
    if (next < questions.length) {
      setQIndex(next); setIsAnswered(false); setFeedbackMsg({ text: '', type: '' });
      setTimeLeft(TIME_LIMIT); setTimerRunning(true);
    } else {
      setTimerRunning(false); setActiveScreen('result');
    }
  };

  const restartQuiz = () => {
    setQIndex(0); setScore(0); setUserAnswers([]);
    setIsAnswered(false); setFeedbackMsg({ text: '', type: '' });
    setTimeLeft(TIME_LIMIT); setTimerRunning(true);
    setActiveScreen('quiz');
  };

  const quitQuiz = () => { setTimerRunning(false); setActiveScreen('menu'); };

  const openAdmin = async () => {
    if (!isAdmin) return;
    setActiveScreen('admin');
    try {
      const snap = await getDocs(query(collection(db, "reports"), orderBy("timestamp", "desc")));
      const reps = []; snap.forEach(doc => reps.push({ id: doc.id, ...doc.data() }));
      setReports(reps);
    } catch(e) { console.error('Failed to load reports', e); }
  };

  const deleteReport = async (id) => {
    try {
      await deleteDoc(doc(db, "reports", id));
      setReports(prev => prev.filter(r => r.id !== id));
    } catch(e) { console.error('Failed to delete report', e); }
  };

  const submitReport = async () => {
    if (!reportText.trim()) return;
    try {
      await addDoc(collection(db, "reports"), {
        text: reportText, userEmail: currentUser.email, userName: currentUser.name,
        timestamp: new Date().toISOString(), screen: activeScreen,
        qIndex: activeScreen === 'quiz' ? qIndex : null
      });
      setShowReportModal(false); setReportText('');
    } catch(e) { alert('Failed to send report.'); }
  };

  const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  const timerDanger = timeLeft <= 5;
  const progressPct = questions.length > 0 ? (qIndex / questions.length) * 100 : 0;

  const getOptClass = (i) => {
    if (!isAnswered) return 'opt-btn';
    const q = questions[qIndex];
    if (i === q.correct) return 'opt-btn correct';
    const last = userAnswers[userAnswers.length - 1];
    if (last && last.selected === i) return 'opt-btn wrong';
    return 'opt-btn';
  };

  const subjectLabel = (key) => {
    const found = SUBJECTS.find(s => s.key === key);
    return found ? `${found.name} · ${found.lang}` : key.replace('_ru','').toUpperCase();
  };

  const timerDisplay = timeLeft < 10 ? `0:0${timeLeft}` : `0:${timeLeft}`;

  return (
    <div id="root">

      {/* ── AUTH ── */}
      {!isAuthenticated && (
        <div id="auth-overlay">
          <div className="auth-card">
            <div className="auth-eyebrow">{text.authSubtitle}</div>
            <div className="auth-logo">DEV<span>QUIZ</span></div>
            <div className="auth-desc">
              {text.authDesc}
            </div>
            
            <button id="auth-btn" onClick={handleSignIn}>
              <svg width="17" height="17" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              {text.authBtn}
            </button>
            <div className="auth-tag" style={{marginTop:'4px'}}>{text.authTag}</div>

            <div className="lang-selector" style={{marginTop:'12px', marginBottom:0}}>
              <button className={`lang-btn ${lang==='EN'?'active':''}`} onClick={() => setLang('EN')}>EN</button>
              <button className={`lang-btn ${lang==='KZ'?'active':''}`} onClick={() => setLang('KZ')}>KZ</button>
              <button className={`lang-btn ${lang==='RU'?'active':''}`} onClick={() => setLang('RU')}>RU</button>
            </div>
          </div>
        </div>
      )}

      {/* ── REPORT MODAL ── */}
      {showReportModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">Report Issue</div>
            <div className="modal-body">
              <textarea className="input-field textarea" rows="4" value={reportText}
                onChange={e => setReportText(e.target.value)} placeholder="Describe the issue in detail..."/>
            </div>
            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => setShowReportModal(false)}>Cancel</button>
              <button className="btn-primary" onClick={submitReport}>Submit</button>
            </div>
          </div>
        </div>
      )}

      {/* ── HEADER ── */}
      {isAuthenticated && currentUser && activeScreen !== 'admin' && (
        <header className="app-header">
          <button className="app-title" onClick={() => setActiveScreen('menu')} style={{color:'inherit'}}>
            DEV<span>QUIZ</span>
          </button>
          <div className="user-profile" style={{
            cursor:'pointer', 
            border: '1px solid var(--border-mid)', 
            padding: '4px 8px', 
            borderRadius: '20px',
            background: 'var(--bg-panel)',
            transition: 'var(--t)'
          }} onClick={() => setActiveScreen('profile')}>
            <div className="user-info">
              <span className="user-name">{currentUser.name}</span>
            </div>
            {currentUser.picture && <img src={currentUser.picture} className="user-avatar" alt=""/>}
          </div>
        </header>
      )}

      {/* ── SCREENS ── */}
      {isAuthenticated && (
        <div className="main-layout">

          {/* MENU */}
          <div className={`screen ${activeScreen==='menu'?'active':''}`}>
            <div className="menu-header">
              <div className="menu-greeting">{text.greeting}, {currentUser.name}!</div>
              <div className="menu-title">{text.selectAssesment}</div>
            </div>
            <div className="section-title">{text.availSubjects}</div>
            <div className="subject-grid">
              {SUBJECTS.map(s => (
                <button key={s.key} className="subject-card" onClick={() => selectSubject(s.key)}>
                  <div className="subject-icon">{s.icon}</div>
                  <div className="subject-details">
                    <div className="subject-name">{s.name}</div>
                    <span className="subject-lang">{s.lang}</span>
                  </div>
                  <div className="subject-arrow"><IconArrow /></div>
                </button>
              ))}
            </div>
            <div className="action-panel">
              <button className="btn-action" onClick={() => setShowReportModal(true)}>
                <IconAlert /> {text.reportIssue}
              </button>
              {isAdmin && (
                <button className="btn-action primary" onClick={openAdmin}>
                  <IconSettings /> {text.adminPanel}
                </button>
              )}
            </div>
          </div>

          {/* VARIANTS */}
          <div className={`screen ${activeScreen==='variants'?'active':''}`}>
            <div className="screen-header">
              <button className="btn-icon" onClick={() => setActiveScreen('menu')}><IconBack /></button>
              <div className="screen-title">{subjectLabel(currentSubject)}</div>
              <div className="screen-badge">
                {mergedDatabase[currentSubject] ? Object.keys(mergedDatabase[currentSubject]).length : 0} {text.variants}
              </div>
            </div>
            <div className="section-title">{text.selectVariant}</div>
            <div className="list-container">
              {mergedDatabase[currentSubject] && Object.keys(mergedDatabase[currentSubject]).map((key, i) => (
                <button key={key} className="list-item" onClick={() => startQuiz(key)}>
                  <div className="item-left">
                    <div className="item-index">{String(i+1).padStart(2,'0')}</div>
                    <div className="item-name">{key.startsWith('Variant') || key.startsWith('variant') ? key.replace('variant','Variant ') : `Variant ${i+1} · ${key}`}</div>
                  </div>
                  <IconArrow />
                </button>
              ))}
            </div>
          </div>

          {/* QUIZ */}
          <div className={`screen quiz-screen ${activeScreen==='quiz'?'active':''}`}>
            <div className="quiz-header">
              <div className="quiz-progress-text">
                {String(qIndex+1).padStart(2,'0')} / {String(questions.length).padStart(2,'0')}
              </div>
              <div className={`quiz-timer ${timerDanger?'danger':''}`}>{timerDisplay}</div>
              <button className="btn-icon" onClick={quitQuiz}><IconClose /></button>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progressPct}%` }}/>
            </div>
            <div className="question-text">{questions[qIndex]?.q}</div>
            <div className="options-container">
              {questions[qIndex]?.options.map((opt, i) => (
                <button key={i} className={getOptClass(i)} disabled={isAnswered} onClick={() => checkAnswer(i)}>
                  <div className="opt-letter">{OPTION_LETTERS[i]}</div>
                  <div className="opt-text">{opt}</div>
                </button>
              ))}
            </div>
            {feedbackMsg.text && (
              <div className={`feedback-indicator ${feedbackMsg.type}`}>{feedbackMsg.text}</div>
            )}
            {isAnswered && (
              <div className="quiz-footer">
                <button className="btn-primary full-width" onClick={nextQuestion}>
                  {qIndex + 1 < questions.length ? text.nextQ : text.viewResults}
                </button>
              </div>
            )}
          </div>

          {/* RESULT */}
          <div className={`screen ${activeScreen==='result'?'active':''}`}>
            <div className="result-hero">
              <div className="result-score-wrap">
                <div className="result-score">{pct}%</div>
                <div className="result-meta">{score} / {questions.length} correct</div>
              </div>
              {userAnswers.some(a => !a.isCorrect) && (
                <div className="result-label">{text.reviewWrong}</div>
              )}
            </div>

            <div className="review-list">
              {userAnswers.every(a => a.isCorrect) ? (
                <div className="empty-state">{text.flawless}</div>
              ) : (
                userAnswers.map((a, i) => !a.isCorrect && (
                  <div className="review-item" key={i}>
                    <div className="review-q">{a.q}</div>
                    <div className="review-ans correct">
                      <IconCheck /> {a.opts[a.correct]}
                    </div>
                    <div className="review-ans wrong">
                      <IconClose /> {a.selected === -1 ? 'Timeout' : a.opts[a.selected]}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="result-actions">
              <button className="btn-primary" onClick={restartQuiz}>{text.retake}</button>
              <button className="btn-secondary" onClick={quitQuiz}>{text.dashboard}</button>
            </div>
          </div>

          {/* PROFILE */}
          <div className={`screen ${activeScreen==='profile'?'active':''}`}>
            <div className="screen-header">
              <button className="btn-icon" onClick={() => setActiveScreen('menu')}><IconBack /></button>
              <div className="screen-title">{text.profile}</div>
            </div>
            
            <div className="auth-card" style={{margin:'20px auto', width:'100%', padding:'38px 20px', alignItems:'center'}}>
              {currentUser.picture && <img src={currentUser.picture} className="user-avatar" style={{width:'64px', height:'64px', marginBottom:'10px'}} alt=""/>}
              <div style={{fontSize:'1.2rem', fontWeight:'700'}}>{currentUser.name}</div>
              <div style={{color:'var(--text-sub)', fontSize:'.8rem', marginBottom:'24px'}}>{currentUser.email}</div>

              <div style={{display:'flex', gap:'20px', width:'100%', justifyContent:'center', marginBottom:'34px'}}>
                <div style={{textAlign:'center'}}>
                  <div style={{fontSize:'1.4rem', fontWeight:'bold', color:'var(--accent)'}}>{stats.solved}</div>
                  <div style={{fontSize:'.6rem', textTransform:'uppercase', color:'var(--text-muted)', letterSpacing:'.1em'}}>{text.solvedQ}</div>
                </div>
                <div style={{width:'1px', background:'var(--border)'}}></div>
                <div style={{textAlign:'center'}}>
                  <div style={{fontSize:'1.4rem', fontWeight:'bold', color:'var(--accent)'}}>{stats.score}</div>
                  <div style={{fontSize:'.6rem', textTransform:'uppercase', color:'var(--text-muted)', letterSpacing:'.1em'}}>{text.correctQ}</div>
                </div>
              </div>

              <div className="section-title" style={{width:'100%'}}>{text.lang}</div>
              <div className="lang-selector">
                <button className={`lang-btn ${lang==='EN'?'active':''}`} onClick={() => setLang('EN')}>EN</button>
                <button className={`lang-btn ${lang==='KZ'?'active':''}`} onClick={() => setLang('KZ')}>Қазақша</button>
                <button className={`lang-btn ${lang==='RU'?'active':''}`} onClick={() => setLang('RU')}>Русский</button>
              </div>

              <div className="section-title" style={{width:'100%'}}>{text.theme}</div>
              <div style={{display:'flex', gap:'12px', marginBottom:'34px', flexWrap:'wrap', justifyContent:'center'}}>
                {['cyan', 'purple', 'green', 'orange', 'pink', 'blue', 'yellow'].map(c => (
                  <button key={c} onClick={() => setTheme(c)} style={{
                    width:'34px', height:'34px', borderRadius:'50%', 
                    background: c === 'cyan' ? '#00e5ff' : c === 'purple' ? '#b620e0' : c === 'green' ? '#39ff7e' : c === 'orange' ? '#ff6a00' : c === 'pink' ? '#ff33a1' : c === 'blue' ? '#3388ff' : '#ffc107',
                    border: theme === c ? '2px solid var(--text-main)' : '2px solid var(--border)',
                    boxShadow: theme === c ? `0 0 12px var(--accent-glow)` : 'none',
                    opacity: theme === c ? 1 : 0.6,
                    transition:'all .2s'
                  }} />
                ))}
              </div>

              <a href="https://t.me/047rw" target="_blank" rel="noopener noreferrer" className="btn-action" style={{textDecoration:'none'}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                {text.support}: @047rw
              </a>
              <button className="btn-action" style={{marginTop:'12px', color:'var(--red)'}} onClick={() => signOut(auth)}>
                {text.signOut}
              </button>
            </div>
          </div>

          {/* ADMIN */}
          {activeScreen === 'admin' && isAdmin && (
            <div className="screen admin-screen active">
              <AdminDashboard goBack={() => setActiveScreen('menu')} reports={reports} onTestAdded={fetchDynamicTests} deleteReport={deleteReport} dynamicTests={dynamicTests} />
            </div>
          )}

        </div>
      )}
    </div>
  );
}

