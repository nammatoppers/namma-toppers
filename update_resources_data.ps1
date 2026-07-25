$pdfFiles = Get-ChildItem -Recurse -Path "resources" -Filter "*.pdf" -ErrorAction SilentlyContinue

$linkTree = @{}

# Pre-populate empty structure for Classes 1-6
$c1to5Subjects = @("kannada", "english", "mathematics", "evs")
$c6Subjects = @("kannada", "english", "hindi", "mathematics", "science", "social-science")

for ($c = 1; $c -le 5; $c++) {
    $linkTree["$c"] = @{}
    foreach ($s in $c1to5Subjects) {
        $linkTree["$c"][$s] = @{
            "questionPaper" = "#"
            "answerKey" = "#"
        }
    }
}

$linkTree["6"] = @{}
foreach ($s in $c6Subjects) {
    $linkTree["6"][$s] = @{
        "questionPaper" = "#"
        "answerKey" = "#"
    }
}

# Populate detected files
foreach ($file in $pdfFiles) {
    $relPath = ($file.FullName.Replace((Get-Location).Path, "") -replace "\\", "/").TrimStart('/')
    
    # Class detection
    $classId = $null
    if ($relPath -match "class[_-]?([1-6])") {
        $classId = $Matches[1]
    }

    # Subject detection
    $subjectId = $null
    if ($relPath -match "kannada") { $subjectId = "kannada" }
    elseif ($relPath -match "english") { $subjectId = "english" }
    elseif ($relPath -match "hindi") { $subjectId = "hindi" }
    elseif ($relPath -match "mathematics|maths|math") { $subjectId = "mathematics" }
    elseif ($relPath -match "social[_-]?science|social") { $subjectId = "social-science" }
    elseif ($relPath -match "science") { $subjectId = "science" }
    elseif ($relPath -match "evs") { $subjectId = "evs" }

    # Type detection
    $typeId = $null
    $filename = $file.Name.ToLower()
    
    if ($filename -match "answer[_-]?key|key[_-]?answers|fa1[_-]?key|\bkey\b|\bka\b") {
        $typeId = "answerKey"
    }
    elseif ($filename -match "question[_-]?paper|fa1[_-]?qp|\bqp\b") {
        $typeId = "questionPaper"
    }

    if ($classId -and $subjectId -and $typeId) {
        if ($linkTree.ContainsKey($classId) -and $linkTree[$classId].ContainsKey($subjectId)) {
            $linkTree[$classId][$subjectId][$typeId] = $relPath
            Write-Host "[MATCHED] Class $classId | $subjectId | $typeId => $relPath" -ForegroundColor Green
        }
    }
}

# Generate JS Content
$jsHeader = @"
/**
 * Namma Toppers - Resource Data Store
 * FA-1 2026–27 Question Papers & Answer Keys
 * Automatically synchronized with repository PDF resources.
 */

window.NammaResources = {
  exam: "FA-1",
  academicYear: "2026–27",
  telegramUrl: "https://t.me/+SdyXuYvxviU1YTE1",
  instagramUrl: "https://instagram.com/nammatoppers",
  
  classes: {
    1: {
      id: 1,
      name: "Class 1",
      resourceTypeLabel: "Bilingual Resources",
      medium: "Bilingual Resources",
      subjects: [
        { id: "kannada", name: "Kannada", code: "KAN" },
        { id: "english", name: "English", code: "ENG" },
        { id: "mathematics", name: "Mathematics", code: "MATH" },
        { id: "evs", name: "EVS", code: "EVS" }
      ]
    },
    2: {
      id: 2,
      name: "Class 2",
      resourceTypeLabel: "Bilingual Resources",
      medium: "Bilingual Resources",
      subjects: [
        { id: "kannada", name: "Kannada", code: "KAN" },
        { id: "english", name: "English", code: "ENG" },
        { id: "mathematics", name: "Mathematics", code: "MATH" },
        { id: "evs", name: "EVS", code: "EVS" }
      ]
    },
    3: {
      id: 3,
      name: "Class 3",
      resourceTypeLabel: "Bilingual Resources",
      medium: "Bilingual Resources",
      subjects: [
        { id: "kannada", name: "Kannada", code: "KAN" },
        { id: "english", name: "English", code: "ENG" },
        { id: "mathematics", name: "Mathematics", code: "MATH" },
        { id: "evs", name: "EVS", code: "EVS" }
      ]
    },
    4: {
      id: 4,
      name: "Class 4",
      resourceTypeLabel: "Bilingual Resources",
      medium: "Bilingual Resources",
      subjects: [
        { id: "kannada", name: "Kannada", code: "KAN" },
        { id: "english", name: "English", code: "ENG" },
        { id: "mathematics", name: "Mathematics", code: "MATH" },
        { id: "evs", name: "EVS", code: "EVS" }
      ]
    },
    5: {
      id: 5,
      name: "Class 5",
      resourceTypeLabel: "Bilingual Resources",
      medium: "Bilingual Resources",
      subjects: [
        { id: "kannada", name: "Kannada", code: "KAN" },
        { id: "english", name: "English", code: "ENG" },
        { id: "mathematics", name: "Mathematics", code: "MATH" },
        { id: "evs", name: "EVS", code: "EVS" }
      ]
    },
    6: {
      id: 6,
      name: "Class 6",
      resourceTypeLabel: "Kannada Medium",
      medium: "Kannada Medium",
      subjects: [
        { id: "kannada", name: "Kannada", code: "KAN" },
        { id: "english", name: "English", code: "ENG" },
        { id: "hindi", name: "Hindi", code: "HIN" },
        { id: "mathematics", name: "Mathematics", code: "MATH" },
        { id: "science", name: "Science", code: "SCI" },
        { id: "social-science", name: "Social Science", code: "SS" }
      ]
    }
  },

  links: {
"@

$linksJs = @()
foreach ($cKey in (1..6)) {
    $cStr = "$cKey"
    $subjLines = @()
    foreach ($sKey in $linkTree[$cStr].Keys) {
        $qp = $linkTree[$cStr][$sKey]["questionPaper"]
        $ak = $linkTree[$cStr][$sKey]["answerKey"]
        
        $qpVal = if ($qp -eq "#" -or [string]::IsNullOrWhiteSpace($qp)) { '"#"' } else { "`"$qp`"" }
        $akVal = if ($ak -eq "#" -or [string]::IsNullOrWhiteSpace($ak)) { '"#"' } else { "`"$ak`"" }
        
        $subjLines += "      `"$sKey`": { questionPaper: $qpVal, answerKey: $akVal }"
    }
    $block = "    ${cKey}: `{\n" + ($subjLines -join ",\n") + "\n    `}"
    $linksJs += $block
}

$jsFooter = "  }`n};`n"

$fullJs = $jsHeader + ($linksJs -join ",\n") + "`n" + $jsFooter

[System.IO.File]::WriteAllText("data/resources.js", $fullJs)
Write-Host "data/resources.js generated successfully." -ForegroundColor Green
