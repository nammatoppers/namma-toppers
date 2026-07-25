$classes = 1..6
$pdfFiles = Get-ChildItem -Recurse -Path "resources" -Filter "*.pdf"

Write-Host "Found $($pdfFiles.Count) total PDF files in repository."

# Build mapping dictionary
# key: "class-subject-type" -> relative path
$pdfMap = @{}

foreach ($file in $pdfFiles) {
    # Forward slash path
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

    # Resource Type detection (Answer Key vs Question Paper)
    $typeId = $null
    $filename = $file.Name.ToLower()
    
    if ($filename -match "answer[_-]?key|key[_-]?answers|fa1[_-]?key|\bkey\b|\bka\b") {
        $typeId = "answerKey"
    }
    elseif ($filename -match "question[_-]?paper|fa1[_-]?qp|\bqp\b") {
        $typeId = "questionPaper"
    }

    if ($classId -and $subjectId -and $typeId) {
        $key = "$classId-$subjectId-$typeId"
        $pdfMap[$key] = $relPath
        Write-Host "[MAPPED] Class $classId | $subjectId | $typeId => $relPath" -ForegroundColor Green
    } else {
        Write-Host "[UNMAPPED] $relPath (Class: $classId, Subject: $subjectId, Type: $typeId)" -ForegroundColor Yellow
    }
}

Write-Host "Total mapped items: $($pdfMap.Count)"
