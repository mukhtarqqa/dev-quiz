import React, { useState, useEffect, useRef } from 'react';
import { auth, googleProvider, db } from './firebase';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, getDocs, query, orderBy, deleteDoc, doc } from 'firebase/firestore';

// ── Constants & i18n ────────────────────────────────────────────────────────
import { ADMIN_EMAILS, TIME_LIMIT, SUBJECT_KEYS, i18n } from './constants';
import { IconCode }  from './icons';

// ── Screen components ────────────────────────────────────────────────────────
import AuthOverlay    from './components/AuthOverlay';
import AppHeader      from './components/AppHeader';
import ReportModal    from './components/ReportModal';
import MenuScreen     from './components/MenuScreen';
import VariantsScreen from './components/VariantsScreen';
import QuizScreen     from './components/QuizScreen';
import ResultScreen   from './components/ResultScreen';
import ProfileScreen  from './components/ProfileScreen';
import AdminDashboard from './components/AdminDashboard';

// Inject icon into SUBJECTS (icons live in icons.jsx, not constants.js)
const SUBJECTS = SUBJECT_KEYS.map(s => ({ ...s, icon: <IconCode /> }));

// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  // ── Auth ──
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser,     setCurrentUser]     = useState(null);
  const [isAdmin,         setIsAdmin]         = useState(false);

  // ── Navigation ──
  const [activeScreen,    setActiveScreen]    = useState('menu');

  // ── Loading state ──
  const [isLoading,       setIsLoading]       = useState(true);

  // ── Report modal ──
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportText,      setReportText]      = useState('');

  // ── Database (cloud only) ──
  const [mergedDatabase,  setMergedDatabase]  = useState({});
  const [dynamicTests,    setDynamicTests]    = useState([]);
  const [reports,         setReports]         = useState([]);

  // ── Quiz state ──
  const [currentSubject,  setCurrentSubject]  = useState('');
  const [questions,       setQuestions]       = useState([]);
  const [qIndex,          setQIndex]          = useState(0);
  const [score,           setScore]           = useState(0);
  const [userAnswers,     setUserAnswers]     = useState([]);
  const [timeLeft,        setTimeLeft]        = useState(TIME_LIMIT);
  const [isAnswered,      setIsAnswered]      = useState(false);
  const [timerRunning,    setTimerRunning]    = useState(false);
  const [feedbackMsg,     setFeedbackMsg]     = useState({ text: '', type: '' });
  const timerRef = useRef(null);

  // ── Appearance / i18n ──
  const [theme, setTheme] = useState(localStorage.getItem('devquiz_theme') || 'cyan');
  const [lang,  setLang]  = useState(localStorage.getItem('devquiz_lang')  || 'EN');
  const [mode,  setMode]  = useState(localStorage.getItem('devquiz_mode')  || 'dark');
  const [stats, setStats] = useState(
    () => JSON.parse(localStorage.getItem('devquiz_stats')) || { solved: 0, score: 0 }
  );
  const [scrolled, setScrolled] = useState(false);

  const text = i18n[lang] || i18n['EN'];

  // ─────────────────────────────────────────────────────────────────────────
  // Effects
  // ─────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    document.body.className = `theme-${theme}`;
    if (mode === 'light') document.body.classList.add('mode-light');
    localStorage.setItem('devquiz_theme', theme);
  }, [theme, mode]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { localStorage.setItem('devquiz_mode', mode); }, [mode]);
  useEffect(() => { localStorage.setItem('devquiz_lang',  lang); }, [lang]);

  useEffect(() => {
    fetchDynamicTests();
    const unsub = onAuthStateChanged(auth, user => {
      if (user) {
        setIsAuthenticated(true);
        setCurrentUser({
          name:    user.displayName || user.email.split('@')[0],
          email:   user.email,
          picture: user.photoURL || '',
        });
        setIsAdmin(ADMIN_EMAILS.includes(user.email));
      } else {
        setIsAuthenticated(false); setCurrentUser(null); setIsAdmin(false);
      }
    });
    return () => unsub();
  }, []);

  // Timer countdown
  useEffect(() => {
    if (timerRunning && timeLeft > 0) {
      timerRef.current = setTimeout(() => setTimeLeft(p => p - 1), 1000);
    } else if (timerRunning && timeLeft <= 0) {
      handleTimeout();
    }
    return () => clearTimeout(timerRef.current);
  }, [timeLeft, timerRunning]);

  // ─────────────────────────────────────────────────────────────────────────
  // Firebase helpers
  // ─────────────────────────────────────────────────────────────────────────
  const fetchDynamicTests = async () => {
    setIsLoading(true);
    try {
      const snap = await getDocs(collection(db, 'dynamic_tests'));
      const newDB = {};
      const dynList = [];
      snap.forEach(d => {
        const data = d.data();
        dynList.push({ id: d.id, ...data });
        if (data.subject && data.variantName && data.questions) {
          if (!newDB[data.subject]) newDB[data.subject] = {};
          newDB[data.subject][data.variantName] = data.questions;
        }
      });
      setMergedDatabase(newDB);
      setDynamicTests(dynList);
    } catch (e) {
      console.error("Fetch failed:", e);
    } finally {
      setIsLoading(false);
    }
  };

  const openAdmin = async () => {
    if (!isAdmin) return;
    setActiveScreen('admin');
    try {
      const snap = await getDocs(query(collection(db, 'reports'), orderBy('timestamp', 'desc')));
      const reps = []; snap.forEach(d => reps.push({ id: d.id, ...d.data() }));
      setReports(reps);
    } catch (e) { console.error('Failed to load reports', e); }
  };

  const deleteReport = async (id) => {
    try {
      await deleteDoc(doc(db, 'reports', id));
      setReports(prev => prev.filter(r => r.id !== id));
    } catch (e) { console.error('Failed to delete report', e); }
  };

  const submitReport = async () => {
    if (!reportText.trim()) return;
    try {
      await addDoc(collection(db, 'reports'), {
        text:      reportText,
        userEmail: currentUser.email,
        userName:  currentUser.name,
        timestamp: new Date().toISOString(),
        screen:    activeScreen,
        qIndex:    activeScreen === 'quiz' ? qIndex : null,
      });
      setShowReportModal(false); setReportText('');
    } catch { alert('Failed to send report.'); }
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Auth
  // ─────────────────────────────────────────────────────────────────────────
  const handleSignIn = async () => {
    try { await signInWithPopup(auth, googleProvider); }
    catch (err) { console.error(err); alert('Authentication failed.'); }
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Quiz logic
  // ─────────────────────────────────────────────────────────────────────────
  const selectSubject = (subj) => {
    if (!isAuthenticated) return;
    setCurrentSubject(subj);
    setActiveScreen('variants');
  };

  const subjectLabel = (key) => {
    const found = SUBJECTS.find(s => s.key === key);
    return found ? `${found.name} · ${found.lang}` : key.replace('_ru', '').toUpperCase();
  };

  const startQuiz = (key) => {
    setQuestions(mergedDatabase[currentSubject][key]);
    setQIndex(0); setScore(0); setUserAnswers([]);
    setIsAnswered(false); setFeedbackMsg({ text: '', type: '' });
    setTimeLeft(TIME_LIMIT); setTimerRunning(true);
    setActiveScreen('quiz');
  };

  const handleTimeout = () => {
    if (isAnswered) return;
    setFeedbackMsg({ text: text.timeUp, type: 'error' });
    setTimerRunning(false);
    recordAnswer(-1, false);
    setIsAnswered(true);
  };

  const checkAnswer = (idx) => {
    if (isAnswered) return;
    setIsAnswered(true); setTimerRunning(false);
    const correct = questions[qIndex].correct;
    const ok = idx === correct;
    if (ok) { setScore(s => s + 1); setFeedbackMsg({ text: text.correct, type: 'success' }); }
    else    { setFeedbackMsg({ text: text.incorrect, type: 'error' }); }
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

  // ─────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="app-container">

      {/* Auth overlay (shown when not signed in) */}
      {!isAuthenticated && (
        <AuthOverlay text={text} lang={lang} setLang={setLang} onSignIn={handleSignIn} />
      )}

      {/* Bug-report modal */}
      {showReportModal && (
        <ReportModal
          reportText={reportText}
          setReportText={setReportText}
          onSubmit={submitReport}
          onClose={() => setShowReportModal(false)}
        />
      )}

      {/* Persistent header */}
      {isAuthenticated && currentUser && activeScreen !== 'admin' && (
        <AppHeader
          currentUser={currentUser}
          scrolled={scrolled}
          lang={lang}
          setLang={setLang}
          onLogoClick={() => setActiveScreen('menu')}
          onAvatarClick={() => setActiveScreen('profile')}
        />
      )}

      {/* All screens */}
      {isAuthenticated && (
        <div className="main-layout">

          <MenuScreen
            text={text}
            currentUser={currentUser}
            subjects={SUBJECTS}
            isAdmin={isAdmin}
            isLoading={isLoading}
            isActive={activeScreen === 'menu'}
            onSelectSubject={selectSubject}
            onOpenAdmin={openAdmin}
            onOpenReport={() => setShowReportModal(true)}
          />

          <VariantsScreen
            text={text}
            isActive={activeScreen === 'variants'}
            subjectLabel={subjectLabel}
            currentSubject={currentSubject}
            mergedDatabase={mergedDatabase}
            onBack={() => setActiveScreen('menu')}
            onStartQuiz={startQuiz}
          />

          <QuizScreen
            text={text}
            isActive={activeScreen === 'quiz'}
            questions={questions}
            qIndex={qIndex}
            timeLeft={timeLeft}
            isAnswered={isAnswered}
            feedbackMsg={feedbackMsg}
            userAnswers={userAnswers}
            onAnswer={checkAnswer}
            onNext={nextQuestion}
            onQuit={quitQuiz}
          />

          <ResultScreen
            text={text}
            isActive={activeScreen === 'result'}
            score={score}
            questions={questions}
            userAnswers={userAnswers}
            onRetake={restartQuiz}
            onDashboard={quitQuiz}
          />

          <ProfileScreen
            text={text}
            isActive={activeScreen === 'profile'}
            currentUser={currentUser}
            stats={stats}
            mode={mode}   setMode={setMode}
            theme={theme} setTheme={setTheme}
            lang={lang}   setLang={setLang}
            onBack={() => setActiveScreen('menu')}
          />

          {activeScreen === 'admin' && isAdmin && (
            <div className="screen admin-screen active">
              <AdminDashboard
                goBack={() => setActiveScreen('menu')}
                reports={reports}
                onTestAdded={fetchDynamicTests}
                deleteReport={deleteReport}
                dynamicTests={dynamicTests}
              />
            </div>
          )}

        </div>
      )}
    </div>
  );
}
