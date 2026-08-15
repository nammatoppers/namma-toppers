$jsonStr = Get-Content "scratch/parsed_data.json" -Raw
$data = $jsonStr | ConvertFrom-Json

$sitemapUrls = [System.Collections.Generic.List[string]]::new()
$sitemapUrls.Add("https://nammatoppers.in/")
$sitemapUrls.Add("https://nammatoppers.in/resources.html")
$sitemapUrls.Add("https://nammatoppers.in/unit-test-model-question-papers/")

$headerTpl = @'
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
  <title>__TITLE__</title>
  <meta name="description" content="__DESC__">
  <link rel="canonical" href="__CANONICAL__">

  <!-- Open Graph -->
  <meta property="og:site_name" content="Namma Toppers">
  <meta property="og:title" content="__TITLE__">
  <meta property="og:type" content="article">
  <meta property="og:url" content="__CANONICAL__">
  <meta property="og:image" content="https://nammatoppers.in/assets/namma-toppers-logo.png">
  <meta property="og:description" content="__DESC__">

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
'@

$footerTpl = @'
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
'@

function Render-Page($title, $desc, $canonical, $bodyContent) {
    $h = $headerTpl.Replace("__TITLE__", $title).Replace("__DESC__", $desc).Replace("__CANONICAL__", $canonical)
    return $h + "`n" + $bodyContent + "`n" + $footerTpl
}

# 1. MAIN HUB PAGE
$hubTitle = "Unit Test Model Question Papers 2026–27 | Namma Toppers"
$hubDesc = "Access Karnataka State Board unit-wise Model Question Papers with Answer Keys and Oral Assessment resources for Classes 1, 2, and 3 on Namma Toppers."
$hubUrl = "https://nammatoppers.in/unit-test-model-question-papers/"

$hubBody = @'
  <main class="section" style="padding-top: 40px; min-height: 80vh;">
    <div class="container">
      
      <div class="content-page-card">
        <!-- BREADCRUMB -->
        <nav class="breadcrumbs" aria-label="Breadcrumb Context" style="margin-bottom: 16px;">
          <a href="/" style="color: var(--teal-dark); text-decoration: none;">Home</a> &rsaquo; 
          <a href="/#bilingual-resources" style="color: var(--teal-dark); text-decoration: none;">Bilingual</a> &rsaquo; 
          <strong>Unit Test Model Question Papers</strong>
        </nav>

        <!-- H1 TITLE -->
        <h1>Unit Test Model Question Papers 2026–27</h1>
        
        <!-- INTRO -->
        <p class="trust-callout">Practice unit-wise model question papers for Primary Classes (Classes 1–3) based on the prescribed academic curriculum. Each unit test written model paper is structured for <strong>10 Marks</strong>, accompanied by official answer keys and separate oral assessment sheets where available.</p>

        <!-- CLASS GRID -->
        <div class="class-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-top: 24px;">
          
          <!-- CLASS 1 CARD -->
          <div class="resource-card" style="background: #fff; border: 1px solid var(--line); border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
              <h2 style="font-size: 20px; color: var(--navy); margin: 0;">Class 1</h2>
              <span style="background: var(--teal-light); color: var(--teal-dark); font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 20px;">Bilingual</span>
            </div>
            <p style="color: #64748b; font-size: 14px; margin-bottom: 20px; line-height: 1.5;">Unit-wise 10-Mark Model Question Papers, Answer Keys & Oral Sheets for Class 1.</p>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <a href="/bilingual/class-1/unit-test-model-question-papers/english/" class="btn-download-notes" style="justify-content: space-between; font-size: 14px; padding: 10px 16px;">
                <span>English (Units 1–9)</span> &rarr;
              </a>
              <a href="/bilingual/class-1/unit-test-model-question-papers/evs/" class="btn-download-notes" style="justify-content: space-between; font-size: 14px; padding: 10px 16px;">
                <span>EVS (Units 1–5)</span> &rarr;
              </a>
              <a href="/bilingual/class-1/unit-test-model-question-papers/kannada/" class="btn-download-notes" style="justify-content: space-between; font-size: 14px; padding: 10px 16px;">
                <span>Kannada (Units 1–8)</span> &rarr;
              </a>
              <a href="/bilingual/class-1/unit-test-model-question-papers/mathematics/" class="btn-download-notes" style="justify-content: space-between; font-size: 14px; padding: 10px 16px;">
                <span>Mathematics (Units 2–9)</span> &rarr;
              </a>
            </div>
            <div style="margin-top: 16px; text-align: center;">
              <a href="/bilingual/class-1/unit-test-model-question-papers/" class="chapter-nav-btn" style="display: block; width: 100%;">View All Class 1 Resources</a>
            </div>
          </div>

          <!-- CLASS 2 CARD -->
          <div class="resource-card" style="background: #fff; border: 1px solid var(--line); border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
              <h2 style="font-size: 20px; color: var(--navy); margin: 0;">Class 2</h2>
              <span style="background: var(--teal-light); color: var(--teal-dark); font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 20px;">Bilingual</span>
            </div>
            <p style="color: #64748b; font-size: 14px; margin-bottom: 20px; line-height: 1.5;">Unit-wise 10-Mark Model Question Papers, Answer Keys & Oral Sheets for Class 2.</p>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <a href="/bilingual/class-2/unit-test-model-question-papers/english/" class="btn-download-notes" style="justify-content: space-between; font-size: 14px; padding: 10px 16px;">
                <span>English (Units 1–6)</span> &rarr;
              </a>
              <a href="/bilingual/class-2/unit-test-model-question-papers/evs/" class="btn-download-notes" style="justify-content: space-between; font-size: 14px; padding: 10px 16px;">
                <span>EVS (Units 1–5)</span> &rarr;
              </a>
              <a href="/bilingual/class-2/unit-test-model-question-papers/kannada/" class="btn-download-notes" style="justify-content: space-between; font-size: 14px; padding: 10px 16px;">
                <span>Kannada (Units 1–8)</span> &rarr;
              </a>
              <a href="/bilingual/class-2/unit-test-model-question-papers/mathematics/" class="btn-download-notes" style="justify-content: space-between; font-size: 14px; padding: 10px 16px;">
                <span>Mathematics (Units 1–6)</span> &rarr;
              </a>
            </div>
            <div style="margin-top: 16px; text-align: center;">
              <a href="/bilingual/class-2/unit-test-model-question-papers/" class="chapter-nav-btn" style="display: block; width: 100%;">View All Class 2 Resources</a>
            </div>
          </div>

          <!-- CLASS 3 CARD -->
          <div class="resource-card" style="background: #fff; border: 1px solid var(--line); border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
              <h2 style="font-size: 20px; color: var(--navy); margin: 0;">Class 3</h2>
              <span style="background: var(--teal-light); color: var(--teal-dark); font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 20px;">Bilingual</span>
            </div>
            <p style="color: #64748b; font-size: 14px; margin-bottom: 20px; line-height: 1.5;">Unit-wise 10-Mark Model Question Papers, Answer Keys & Oral Sheets for Class 3.</p>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <a href="/bilingual/class-3/unit-test-model-question-papers/english/" class="btn-download-notes" style="justify-content: space-between; font-size: 14px; padding: 10px 16px;">
                <span>English (Units 1–6)</span> &rarr;
              </a>
              <a href="/bilingual/class-3/unit-test-model-question-papers/evs/" class="btn-download-notes" style="justify-content: space-between; font-size: 14px; padding: 10px 16px;">
                <span>EVS (Units 1–11)</span> &rarr;
              </a>
              <a href="/bilingual/class-3/unit-test-model-question-papers/kannada/" class="btn-download-notes" style="justify-content: space-between; font-size: 14px; padding: 10px 16px;">
                <span>Kannada (Units 1–8)</span> &rarr;
              </a>
              <a href="/bilingual/class-3/unit-test-model-question-papers/mathematics/" class="btn-download-notes" style="justify-content: space-between; font-size: 14px; padding: 10px 16px;">
                <span>Mathematics (Units 1–7)</span> &rarr;
              </a>
            </div>
            <div style="margin-top: 16px; text-align: center;">
              <a href="/bilingual/class-3/unit-test-model-question-papers/" class="chapter-nav-btn" style="display: block; width: 100%;">View All Class 3 Resources</a>
            </div>
          </div>

        </div>

      </div>

    </div>
  </main>
'@

New-Item -ItemType Directory -Force -Path "unit-test-model-question-papers" | Out-Null
Set-Content "unit-test-model-question-papers/index.html" (Render-Page $hubTitle $hubDesc $hubUrl $hubBody) -Encoding UTF8
Write-Host "Created Main Hub Page."

# 2. LOOP OVER CLASSES & SUBJECTS
$subjectsNameMap = @{
    "english" = "English"
    "evs" = "EVS"
    "kannada" = "Kannada"
    "mathematics" = "Mathematics"
}

foreach ($cKey in $data.psobject.Properties.Name) {
    $cVal = $data.$cKey
    $classDir = "bilingual/class-$cKey/unit-test-model-question-papers"
    $classUrl = "https://nammatoppers.in/bilingual/class-$cKey/unit-test-model-question-papers/"
    $sitemapUrls.Add($classUrl)

    $cTitle = "Class $cKey Unit Test Model Question Papers 2026–27 | Namma Toppers"
    $cDesc = "Download Class $cKey Unit-wise 10-Mark Model Question Papers, Answer Keys, and Oral Assessment sheets for English, EVS, Kannada, and Mathematics."

    $cCards = ""
    foreach ($sKey in $cVal.psobject.Properties.Name) {
        $sVal = $cVal.$sKey
        $sName = $subjectsNameMap[$sKey]
        $qpsObj = $sVal.question_paper
        $qpCount = 0
        if ($qpsObj) { $qpCount = $qpsObj.psobject.Properties.Name.Count }

        $cCards += @"
          <div style="background: #fff; border: 1px solid var(--line); border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            <h2 style="font-size: 18px; color: var(--navy); margin-top: 0; margin-bottom: 8px;">$sName</h2>
            <p style="font-size: 13px; color: #64748b; margin-bottom: 16px;">$qpCount Unit Model Question Papers (Written: 10 Marks)</p>
            <a href="/bilingual/class-$cKey/unit-test-model-question-papers/$sKey/" class="btn-download-notes" style="width: 100%; justify-content: center; font-size: 14px;">
              View $sName Papers &rarr;
            </a>
          </div>
"@
    }

    $cBody = @"
  <main class="section" style="padding-top: 40px; min-height: 80vh;">
    <div class="container">
      
      <div class="content-page-card">
        <!-- BREADCRUMB -->
        <nav class="breadcrumbs" aria-label="Breadcrumb Context" style="margin-bottom: 16px;">
          <a href="/" style="color: var(--teal-dark); text-decoration: none;">Home</a> &rsaquo; 
          <a href="/#bilingual-resources" style="color: var(--teal-dark); text-decoration: none;">Bilingual</a> &rsaquo; 
          <a href="/unit-test-model-question-papers/" style="color: var(--teal-dark); text-decoration: none;">Unit Test Model Question Papers</a> &rsaquo; 
          <strong>Class $cKey</strong>
        </nav>

        <!-- H1 TITLE -->
        <h1>Class $cKey Unit Test Model Question Papers 2026–27</h1>
        
        <!-- INTRO -->
        <p class="trust-callout">Select a subject below to view and download unit-wise Model Question Papers prepared for Class $cKey. Each written model test paper is formatted for <strong>10 Marks</strong>, alongside subject answer keys and separate oral assessment sheets.</p>

        <!-- SUBJECT GRID -->
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; margin-top: 24px;">
$cCards
        </div>

        <div class="chapter-nav-bar" style="margin-top: 32px;">
          <a href="/unit-test-model-question-papers/" class="chapter-nav-btn">&larr; Back to All Classes</a>
        </div>

      </div>

    </div>
  </main>
"@

    New-Item -ItemType Directory -Force -Path $classDir | Out-Null
    Set-Content "$classDir/index.html" (Render-Page $cTitle $cDesc $classUrl $cBody) -Encoding UTF8

    # LOOP SUBJECTS
    foreach ($sKey in $cVal.psobject.Properties.Name) {
        $sVal = $cVal.$sKey
        $sName = $subjectsNameMap[$sKey]
        $subjDir = "$classDir/$sKey"
        $subjUrl = "https://nammatoppers.in/bilingual/class-$cKey/unit-test-model-question-papers/$sKey/"
        $sitemapUrls.Add($subjUrl)

        $qpsObj = $sVal.question_paper
        $aksObj = $sVal.written_answer_key
        $oralsObj = $sVal.oral_sheet

        $masterAkUrl = $null
        if ($aksObj -and $aksObj.psobject.Properties.Name -contains "all") {
            $masterAkUrl = $aksObj.all
        }

        $unitKeys = @()
        if ($qpsObj) {
            $unitKeys = $qpsObj.psobject.Properties.Name | Sort-Object { [int]$_ }
        }

        $sTitle = "Class $cKey $sName Unit Test Model Question Papers 2026–27 | Namma Toppers"
        $sDesc = "Download Class $cKey $sName Unit Test Model Question Papers (10 Marks each), official Answer Keys, and Oral Assessment sheets."

        $masterBanner = ""
        if ($masterAkUrl) {
            $masterBanner = @"
        <!-- MASTER ANSWER KEY BANNER -->
        <div style="background: var(--teal-light); border: 1px solid var(--teal-dark); border-radius: 8px; padding: 16px 20px; margin: 20px 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <div>
            <strong style="color: var(--teal-dark); font-size: 15px;">Complete Written Answer Key (All Units)</strong>
            <div style="font-size: 13px; color: #475569;">Download the consolidated written answer key covering all unit model papers.</div>
          </div>
          <a href="$masterAkUrl" target="_blank" rel="noopener noreferrer" class="btn-download-notes" style="padding: 8px 16px; font-size: 13px;">
            Download Master Answer Key
          </a>
        </div>
"@
        }

        $sUnitCards = ""
        foreach ($u in $unitKeys) {
            $qpUrl = $qpsObj.$u
            
            $akUrl = $null
            if ($aksObj) {
                if ($aksObj.psobject.Properties.Name -contains $u) {
                    $akUrl = $aksObj.$u
                } elseif ($masterAkUrl) {
                    $akUrl = $masterAkUrl
                }
            }

            $oralUrl = $null
            if ($oralsObj -and $oralsObj.psobject.Properties.Name -contains $u) {
                $oralUrl = $oralsObj.$u
            }

            $akBtnHtml = ""
            if ($akUrl) {
                $akBtnHtml = @"
              <a href="$akUrl" target="_blank" rel="noopener noreferrer" class="action-btn action-ak" style="font-size: 13px; padding: 8px 12px; justify-content: center; text-decoration: none;">
                View Answer Key
              </a>
"@
            }

            $oralBtnHtml = ""
            if ($oralUrl) {
                $oralBtnHtml = @"
              <a href="$oralUrl" target="_blank" rel="noopener noreferrer" class="chapter-nav-btn" style="font-size: 12px; padding: 6px 10px; text-align: center;">
                Oral Assessment
              </a>
"@
            }

            $sUnitCards += @"
          <div style="background: #fff; border: 1px solid var(--line); border-radius: 10px; padding: 18px; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <h3 style="font-size: 16px; color: var(--navy); margin: 0;">Unit $u</h3>
                <span style="font-size: 11px; font-weight: 700; background: #e2e8f0; color: #334155; padding: 2px 8px; border-radius: 12px;">Written: 10 Marks</span>
              </div>
              <div style="font-size: 13px; color: #64748b; margin-bottom: 14px;">Class $cKey $sName Unit $u Model QP</div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 6px; margin-top: auto;">
              <a href="$qpUrl" target="_blank" rel="noopener noreferrer" class="btn-download-notes" style="font-size: 13px; padding: 8px 12px; justify-content: center;">
                View Model Question Paper
              </a>
$akBtnHtml
$oralBtnHtml
              <a href="/bilingual/class-$cKey/unit-test-model-question-papers/$sKey/unit-$u/" style="font-size: 12px; color: var(--teal-dark); text-align: center; margin-top: 4px; text-decoration: underline;">
                View Unit $u Page &rarr;
              </a>
            </div>
          </div>
"@
        }

        $sBody = @"
  <main class="section" style="padding-top: 40px; min-height: 80vh;">
    <div class="container">
      
      <div class="content-page-card">
        <!-- BREADCRUMB -->
        <nav class="breadcrumbs" aria-label="Breadcrumb Context" style="margin-bottom: 16px;">
          <a href="/" style="color: var(--teal-dark); text-decoration: none;">Home</a> &rsaquo; 
          <a href="/#bilingual-resources" style="color: var(--teal-dark); text-decoration: none;">Bilingual</a> &rsaquo; 
          <a href="/unit-test-model-question-papers/" style="color: var(--teal-dark); text-decoration: none;">Unit Test Model Question Papers</a> &rsaquo; 
          <a href="/bilingual/class-$cKey/unit-test-model-question-papers/" style="color: var(--teal-dark); text-decoration: none;">Class $cKey</a> &rsaquo; 
          <strong>$sName</strong>
        </nav>

        <!-- H1 TITLE -->
        <h1>Class $cKey $sName Unit Test Model Question Papers 2026–27</h1>
        
        <!-- INTRO -->
        <p class="trust-callout">Access unit-wise model practice question papers for Class $cKey $sName. Written model test papers carry <strong>10 Marks</strong> each. Download question papers, solution keys, and separate oral assessment sheets below.</p>
$masterBanner
        <!-- UNITS LISTING -->
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; margin-top: 24px;">
$sUnitCards
        </div>

        <div class="chapter-nav-bar" style="margin-top: 32px;">
          <a href="/bilingual/class-$cKey/unit-test-model-question-papers/" class="chapter-nav-btn">&larr; Back to Class $cKey Subjects</a>
        </div>

      </div>

    </div>
  </main>
"@

        New-Item -ItemType Directory -Force -Path $subjDir | Out-Null
        Set-Content "$subjDir/index.html" (Render-Page $sTitle $sDesc $subjUrl $sBody) -Encoding UTF8

        # LOOP INDIVIDUAL UNITS
        for ($idx = 0; $idx -lt $unitKeys.Count; $idx++) {
            $u = $unitKeys[$idx]
            $uDir = "$subjDir/unit-$u"
            $uUrl = "https://nammatoppers.in/bilingual/class-$cKey/unit-test-model-question-papers/$sKey/unit-$u/"
            $sitemapUrls.Add($uUrl)

            $qpUrl = $qpsObj.$u
            
            $akUrl = $null
            $akLabel = "Answer Key"
            if ($aksObj) {
                if ($aksObj.psobject.Properties.Name -contains $u) {
                    $akUrl = $aksObj.$u
                    $akLabel = "Unit $u Answer Key"
                } elseif ($masterAkUrl) {
                    $akUrl = $masterAkUrl
                    $akLabel = "Master Answer Key (All Units)"
                }
            }

            $oralUrl = $null
            if ($oralsObj -and $oralsObj.psobject.Properties.Name -contains $u) {
                $oralUrl = $oralsObj.$u
            }

            $prevHtml = ""
            if ($idx -gt 0) {
                $pU = $unitKeys[$idx - 1]
                $prevHtml = "<a href=`"/bilingual/class-$cKey/unit-test-model-question-papers/$sKey/unit-$pU/`" class=`"chapter-nav-btn`">&larr; Previous: Unit $pU</a>"
            }
            $nextHtml = ""
            if ($idx -lt ($unitKeys.Count - 1)) {
                $nU = $unitKeys[$idx + 1]
                $nextHtml = "<a href=`"/bilingual/class-$cKey/unit-test-model-question-papers/$sKey/unit-$nU/`" class=`"chapter-nav-btn`">Next: Unit $nU &rarr;</a>"
            }

            $uTitle = "Unit $u Unit Test Model Question Paper – Class $cKey $sName | Namma Toppers"
            $uDesc = "Download Class $cKey $sName Unit $u 10-Mark Model Question Paper, Answer Key, and Oral Assessment sheet from Namma Toppers."

            $uAkBtn = ""
            if ($akUrl) {
                $uAkBtn = @"
            <a href="$akUrl" target="_blank" rel="noopener noreferrer" class="action-btn action-ak" id="download-ak-btn" style="text-decoration: none;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              View $akLabel
            </a>
"@
            }

            $uOralBox = ""
            if ($oralUrl) {
                $uOralBox = @"
        <!-- ORAL ASSESSMENT SECTION -->
        <div style="background: #f8fafc; border: 1px solid var(--line); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
          <h2 style="font-size: 18px; color: var(--navy); margin-top: 0; margin-bottom: 8px;">Oral Assessment Resource</h2>
          <p style="font-size: 14px; color: #64748b; margin-bottom: 16px;">Separate oral assessment sheet for Unit $u practice.</p>
          <div>
            <a href="$oralUrl" target="_blank" rel="noopener noreferrer" class="chapter-nav-btn" style="display: inline-flex; align-items: center; gap: 8px;">
              View Oral Assessment Sheet &rarr;
            </a>
          </div>
        </div>
"@
            }

            $uBody = @"
  <main class="section" style="padding-top: 40px; min-height: 80vh;">
    <div class="container">
      
      <div class="content-page-card">
        <!-- BREADCRUMB -->
        <nav class="breadcrumbs" aria-label="Breadcrumb Context" style="margin-bottom: 16px;">
          <a href="/" style="color: var(--teal-dark); text-decoration: none;">Home</a> &rsaquo; 
          <a href="/#bilingual-resources" style="color: var(--teal-dark); text-decoration: none;">Bilingual</a> &rsaquo; 
          <a href="/unit-test-model-question-papers/" style="color: var(--teal-dark); text-decoration: none;">Unit Test Model Question Papers</a> &rsaquo; 
          <a href="/bilingual/class-$cKey/unit-test-model-question-papers/" style="color: var(--teal-dark); text-decoration: none;">Class $cKey</a> &rsaquo; 
          <a href="/bilingual/class-$cKey/unit-test-model-question-papers/$sKey/" style="color: var(--teal-dark); text-decoration: none;">$sName</a> &rsaquo; 
          <strong>Unit $u</strong>
        </nav>

        <!-- H1 TITLE -->
        <h1>Unit $u Unit Test Model Question Paper</h1>
        
        <!-- SUMMARY INFO BOX -->
        <div class="chapter-summary-box" style="margin-bottom: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 6px 12px; font-weight: 700; color: var(--navy); width: 140px;">Class:</td>
              <td style="padding: 6px 12px;">Class $cKey</td>
            </tr>
            <tr>
              <td style="padding: 6px 12px; font-weight: 700; color: var(--navy);">Subject:</td>
              <td style="padding: 6px 12px;">$sName</td>
            </tr>
            <tr>
              <td style="padding: 6px 12px; font-weight: 700; color: var(--navy);">Assessment:</td>
              <td style="padding: 6px 12px;">Unit Test Model Question Paper</td>
            </tr>
            <tr>
              <td style="padding: 6px 12px; font-weight: 700; color: var(--navy);">Written Marks:</td>
              <td style="padding: 6px 12px;"><span style="background: #e2e8f0; color: #1e293b; font-weight: 700; padding: 2px 8px; border-radius: 4px;">10 Marks</span></td>
            </tr>
          </table>
        </div>

        <!-- WRITTEN MODEL QUESTION PAPER SECTION -->
        <div style="background: #fff; border: 1px solid var(--line); border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
          <h2 style="font-size: 18px; color: var(--navy); margin-top: 0; margin-bottom: 12px;">Written Model Question Paper & Answer Key</h2>
          <p style="font-size: 14px; color: #64748b; margin-bottom: 20px;">Access the official 10-mark practice question paper and solution key for Unit $u.</p>
          
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="$qpUrl" target="_blank" rel="noopener noreferrer" class="btn-download-notes" id="download-qp-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              View Model Question Paper
            </a>
$uAkBtn
          </div>
        </div>

$uOralBox

        <!-- BOTTOM NAVIGATION -->
        <div style="margin-top: 32px; border-top: 1px solid var(--line); padding-top: 20px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <div>$prevHtml</div>
          <div>$nextHtml</div>
        </div>

        <div class="chapter-nav-bar" style="margin-top: 20px;">
          <a href="/bilingual/class-$cKey/unit-test-model-question-papers/$sKey/" class="chapter-nav-btn">&larr; Back to Class $cKey $sName Units</a>
        </div>
      </div>

    </div>
  </main>
"@

            New-Item -ItemType Directory -Force -Path $uDir | Out-Null
            Set-Content "$uDir/index.html" (Render-Page $uTitle $uDesc $uUrl $uBody) -Encoding UTF8
        }
    }
}

Write-Host "Generated all HTML pages successfully."

# 3. BUILD SITEMAP XML
$prevSitemap = Get-Content "sitemap.xml" -Raw
$matches = [regex]::Matches($prevSitemap, "<loc>(.*?)</loc>")

foreach ($m in $matches) {
    $u = $m.Groups[1].Value
    if ($u -match "assessment=unit-test") { continue }
    if (-not $sitemapUrls.Contains($u)) {
        $sitemapUrls.Add($u)
    }
}

$sitemapXml = @'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
'@

foreach ($u in $sitemapUrls) {
    $p = "0.8"
    if ($u -eq "https://nammatoppers.in/") { $p = "1.0" }
    elseif ($u -match "unit-test-model-question-papers/`$") { $p = "0.9" }
    elseif ($u -match "/class-[1-3]/unit-test-model-question-papers/`$") { $p = "0.85" }
    
    $sitemapXml += @"

  <url>
    <loc>$u</loc>
    <lastmod>2026-08-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>$p</priority>
  </url>
"@
}

$sitemapXml += "`n</urlset>`n"
Set-Content "sitemap.xml" $sitemapXml -Encoding UTF8
Write-Host "Updated sitemap.xml with $($sitemapUrls.Count) URLs."

# 4. BUILD NETLIFY _REDIRECTS FILE
$redirectsContent = @'
# 301 Redirects for Obsolete Unit Test URLs
/resources.html?section=bilingual&class=1&assessment=unit-test /bilingual/class-1/unit-test-model-question-papers/ 301!
/resources.html?section=bilingual&class=2&assessment=unit-test /bilingual/class-2/unit-test-model-question-papers/ 301!
/resources.html?section=bilingual&class=3&assessment=unit-test /bilingual/class-3/unit-test-model-question-papers/ 301!
/resources.html?section=bilingual&class=4&assessment=unit-test /unit-test-model-question-papers/ 301!
/resources.html?section=bilingual&class=5&assessment=unit-test /unit-test-model-question-papers/ 301!
/resources.html?section=kannada-medium&class=6&assessment=unit-test /unit-test-model-question-papers/ 301!
/resources.html?assessment=unit-test /unit-test-model-question-papers/ 301!
'@
Set-Content "_redirects" $redirectsContent -Encoding UTF8
Write-Host "Created _redirects file."
