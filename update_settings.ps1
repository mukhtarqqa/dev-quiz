$cssPath = "src\index.css"
$content = Get-Content -Raw $cssPath

$lightModeCSS = @"

/* ─── Light Mode ─────────────────────────────────────────── */
body.mode-light {
  --bg:          #f4f5f7;
  --bg-panel:    #ffffff;
  --bg-hover:    #f0f0f4;
  --bg-active:   #e8e8ed;
  --border:      #e2e2ea;
  --border-mid:  #d0d0dc;
  --border-hi:   #b0b0c0;
  --text-main:   #111118;
  --text-sub:    #505068;
  --text-muted:  #8b8b9e;
}

/* ─── Settings Profile Styles ─────────────────────────────────────────── */
.profile-hero {
  display:flex; align-items:center; gap:16px; padding:20px 16px;
  background: var(--bg-panel); border-radius:12px; border:1px solid var(--border);
  margin-bottom: 24px;
}
.settings-group-label {
  font-size: .75rem; text-transform: uppercase; color: var(--text-muted);
  font-weight: 700; margin-bottom: 8px; margin-left: 12px; letter-spacing: .05em;
}
.settings-group {
  background: var(--bg-panel); border-radius: 12px; border: 1px solid var(--border);
  margin-bottom: 24px; overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.02);
}
body:not(.mode-light) .settings-group { box-shadow: 0 4px 16px rgba(0,0,0,0.2); }
.settings-row {
  display: flex; justify-content: space-between; align-items: center;
  padding: 14px 16px; border-bottom: 1px solid var(--border);
}
.settings-row:last-child { border-bottom: none; }
.settings-row-title {
  font-size: .9rem; font-weight: 600; color: var(--text-main);
  display: flex; align-items: center; gap: 12px;
}
.settings-row-title svg { color: var(--text-sub); }

.theme-swatch {
  width: 24px; height: 24px; border-radius: 50%;
  cursor: pointer; transition: transform 0.2s;
}
.theme-swatch:hover { transform: scale(1.1); }

.lang-segment {
  display: flex; background: var(--bg); border-radius: 8px; padding: 4px;
}
.lang-segment button {
  padding: 6px 12px; font-size: .75rem; font-weight: 600; border-radius: 6px;
  border: none; background: transparent; color: var(--text-sub); cursor: pointer; transition: var(--t);
}
.lang-segment button.active {
  background: var(--bg-panel); box-shadow: 0 1px 3px rgba(0,0,0,0.1); color: var(--text-main);
}
body:not(.mode-light) .lang-segment button.active { background: var(--border); }
"@

$content = $content + "`n" + $lightModeCSS
$content | Set-Content $cssPath
