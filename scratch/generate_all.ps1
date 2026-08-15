# Script to generate all Unit Test Model Question Papers HTML pages and site integration

$jsonContent = Get-Content "scratch/parsed_data.json" -Raw
$data = $jsonContent | ConvertTo-Json -Depth 10 | ConvertFrom-Json

# Helper for HTML header
function Get-Header {
    param(
        [string]$title,
        [string]$desc,
        [string]$canonicalUrl
    )

    return @"
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-W2W9Q8HR1C"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-W2W9Q8HR1C');
  </script>
  <!-- Google AdSense -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1429015299962353" crossorigin="anonymous"></script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="google-site-verification" content="i7t5uNFZub8hB3Q6433dMuYQDuxTAdR8xU16OU6VwgA" />
  <title>$title</title>
  <meta name="description" content="$desc">
  <link rel="canonical" href="$canonicalUrl">

  <!-- Open Graph -->
  <meta property="og:site_name" content="Namma Toppers">
  <meta property="og:title" content="$title">
  <meta property="og:type" content="article">
  <meta property="og:url" content="$canonicalUrl">
  <meta property="og:image" content="https://nammatoppers.in/assets/namma-toppers-logo.png">
  <meta property="og:description" content="$desc">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="/assets/style.css">
  <link rel="icon" type="image/png" href="/assets/namma-toppers-logo.png">
</head>
<body>

  <!-- BRAND HEADER -->
  <header class="site-header" id="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="/" aria-label="Namma Toppers Homepage">
        <img src="/assets/namma-toppers-logo.png" alt="Namma Toppers Logo">
        <div>
          <strong>Namma Toppers</strong>
          <span>Study Smart. Score Big.</span>
        </div>
      </a>

      <button class="menu-btn" id="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">☰</button>

      <nav class="nav" id="main-nav" aria-label="Main navigation">
        <a href="/">Home</a>
        <a class="active" href="/unit-test-model-question-papers/">Unit Test Model QPs</a>
        <a href="/#bilingual-resources">Bilingual</a>
        <a href="/#kannada-medium">Kannada Medium</a>
        <a href="/#english-medium">English Medium</a>
        <a href="/#sslc-zone">SSLC Zone</a>
        
        <div class="header-socials" id="header-socials"></div>
      </nav>
    </div>
  </header>
"@
}

function Get-Footer {
    return @"
  <!-- BRAND FOOTER -->
  <footer>
    <div class="container footer-grid">
      <div class="footer-brand">
        <img src="/assets/namma-toppers-logo.png" alt="Namma Toppers Logo">
        <div>
          <strong>Namma Toppers</strong>
          <span>Study Smart. Score Big.</span>
        </div>
      </div>
      
      <div class="footer-links">
        <a href="/unit-test-model-question-papers/">Unit Test Model QPs</a>
        <a href="/#bilingual-resources">Bilingual Resources</a>
        <a href="/#kannada-medium">Kannada Medium</a>
        <a href="/#english-medium">English Medium</a>
        <a href="/#sslc-zone">SSLC Zone</a>
      </div>

      <div class="footer-legal-links">
        <a href="/about.html">About</a>
        <a href="/contact.html">Contact</a>
        <a href="/privacy-policy.html">Privacy Policy</a>
        <a href="/terms.html">Terms</a>
        <a href="/disclaimer.html">Disclaimer</a>
        <a href="/copyright.html">Copyright</a>
      </div>

      <div class="footer-social-section">
        <div class="footer-social-heading">Follow Namma Toppers</div>
        <div class="footer-links" id="footer-social-links"></div>
      </div>
      
      <div class="copyright">© <span id="year">2026</span> Namma Toppers. All rights reserved. Namma Toppers is an independent educational platform.</div>
    </div>
  </footer>

  <script src="/data/resources.js"></script>
  <script src="/assets/app.js"></script>
</body>
</html>
"@
}

Write-Host "Generator script initialized."
