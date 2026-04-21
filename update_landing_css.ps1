$cssPath = "src\index.css"
$content = Get-Content -Raw $cssPath

$newThemes = @"
body.theme-pink {
  --accent:       #ff33a1;
  --accent-dim:   rgba(255, 51, 161, 0.10);
  --accent-glow:  rgba(255, 51, 161, 0.35);
  --accent-hover: #ff66b8;
}
body.theme-blue {
  --accent:       #3388ff;
  --accent-dim:   rgba(51, 136, 255, 0.10);
  --accent-glow:  rgba(51, 136, 255, 0.35);
  --accent-hover: #66a3ff;
}
body.theme-yellow {
  --accent:       #ffc107;
  --accent-dim:   rgba(255, 193, 7, 0.10);
  --accent-glow:  rgba(255, 193, 7, 0.35);
  --accent-hover: #ffd54f;
}

/* ─── Landing Page ───────────────────────────────────── */
.landing-hero {
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  text-align:center; padding: 60px 20px 40px; position:relative; overflow:hidden;
}
.landing-hero::before {
  content:''; position:absolute; inset:0; z-index:-1; pointer-events:none;
  background: radial-gradient(circle at center, var(--accent-dim) 0%, transparent 60%);
}
.landing-title {
  font-size: 2.4rem; font-weight:800; letter-spacing:-.03em; line-height:1.1; margin-bottom:12px;
}
.landing-title span { color:var(--accent); text-shadow:0 0 20px var(--accent-glow); }
.landing-subtitle {
  font-size:.88rem; color:var(--text-sub); margin-bottom:30px; max-width:400px; line-height:1.6;
}
.features-row {
  display:flex; gap:16px; margin-bottom:36px; justify-content:center; flex-wrap:wrap;
}
.feature-badge {
  display:flex; align-items:center; gap:8px; padding:8px 14px;
  background:var(--bg-panel); border:1px solid var(--border-mid); border-radius:30px;
  font-size:.7rem; font-weight:600; color:var(--text-sub);
}
.feature-badge svg { color:var(--accent); }

.lang-selector {
  display:flex; gap:8px; margin-bottom:24px; width:100%; justify-content:center;
}
.lang-btn {
  padding:8px 16px; border:1px solid var(--border); border-radius:6px;
  background:var(--bg-panel); color:var(--text-muted); font-size:.75rem; font-weight:700;
  cursor:pointer; transition:var(--t);
}
.lang-btn.active {
  border-color:var(--accent); color:var(--accent); background:var(--accent-dim);
}
"@

$content = $content + "`n" + $newThemes
$content | Set-Content $cssPath
