$content = Get-Content -Raw src\index.css

$content = $content -replace '--cyan', '--accent'
$content = $content -replace 'cyan-dim', 'accent-dim'
$content = $content -replace 'cyan-glow', 'accent-glow'
$content = $content -replace '#33eeff', 'var(--accent-hover)'

$themes = @"

/* ─── Themes ─────────────────────────────────────────── */
body.theme-cyan {
  --accent:       #00e5ff;
  --accent-dim:   rgba(0, 229, 255, 0.10);
  --accent-glow:  rgba(0, 229, 255, 0.35);
  --accent-hover: #33eeff;
}
body.theme-purple {
  --accent:       #b620e0;
  --accent-dim:   rgba(182, 32, 224, 0.10);
  --accent-glow:  rgba(182, 32, 224, 0.35);
  --accent-hover: #d240fc;
}
body.theme-green {
  --accent:       #39ff7e;
  --accent-dim:   rgba(57, 255, 126, 0.10);
  --accent-glow:  rgba(57, 255, 126, 0.35);
  --accent-hover: #6aff9a;
}
body.theme-orange {
  --accent:       #ff6a00;
  --accent-dim:   rgba(255, 106, 0, 0.10);
  --accent-glow:  rgba(255, 106, 0, 0.35);
  --accent-hover: #ff8b33;
}
"@

$content = $content -replace '(:root\s*\{[^}]+\})', "`$1$themes"

$content | Set-Content src\index.css

$appContent = Get-Content -Raw src\App.jsx
$appContent = $appContent -replace '--cyan', '--accent'
$appContent = $appContent -replace 'cyan-dim', 'accent-dim'
$appContent = $appContent -replace 'cyan-glow', 'accent-glow'
$appContent | Set-Content src\App.jsx
