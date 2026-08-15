$raw = Get-Content "scratch/raw_data.csv" -Raw
$blocks = $raw -split "--- CLASS "

$data = [ordered]@{}

foreach ($block in $blocks) {
    if ([string]::IsNullOrWhiteSpace($block)) { continue }
    $lines = $block.Trim().Split("`n")
    $classNum = $lines[0].Trim().Split()[0]
    $data[$classNum] = [ordered]@{}

    for ($i = 1; $i -lt $lines.Length; $i++) {
        $line = $lines[$i].Trim()
        if ([string]::IsNullOrWhiteSpace($line) -or $line.StartsWith("subject,") -or $line.StartsWith("---")) { continue }
        $parts = $line.Split(",")
        if ($parts.Length -lt 4) { continue }
        
        $subj = $parts[0].Trim().ToLower()
        if ($subj -eq "maths") { $subj = "mathematics" }
        $cat = $parts[1].Trim()
        $unit = $parts[2].Trim()
        $url = $parts[3].Trim()

        if (-not $data[$classNum].Contains($subj)) {
            $data[$classNum][$subj] = [ordered]@{}
        }
        if (-not $data[$classNum][$subj].Contains($cat)) {
            $data[$classNum][$subj][$cat] = [ordered]@{}
        }
        $data[$classNum][$subj][$cat][$unit] = $url
    }
}

$json = $data | ConvertTo-Json -Depth 10
Set-Content "scratch/parsed_data.json" $json
Write-Host "Parsed successfully. Classes found: $($data.Keys -join ', ')"

# Stats
$totalQPs = 0
$totalAKs = 0
$totalOrals = 0
$totalOralKeys = 0
$totalUnits = 0

foreach ($c in $data.Keys) {
    Write-Host "`n=== CLASS $c ==="
    foreach ($s in $data[$c].Keys) {
        $qps = $data[$c][$s]["question_paper"]
        $aks = $data[$c][$s]["written_answer_key"]
        $orals = $data[$c][$s]["oral_sheet"]
        $okeys = $data[$c][$s]["oral_answer_key"]
        
        $qpCount = if ($qps) { $qps.Count } else { 0 }
        $akCount = if ($aks) { $aks.Count } else { 0 }
        $oralCount = if ($orals) { $orals.Count } else { 0 }
        $okCount = if ($okeys) { $okeys.Count } else { 0 }

        $totalQPs += $qpCount
        $totalAKs += $akCount
        $totalOrals += $oralCount
        $totalOralKeys += $okCount
        $totalUnits += $qpCount

        Write-Host "  Subject: $s | QPs: $qpCount | AKs: $akCount | Orals: $oralCount | OralKeys: $okCount"
    }
}

Write-Host "`n==============================="
Write-Host "TOTAL SUMMARY STATS:"
Write-Host "Classes Added: $($data.Keys.Count)"
Write-Host "Subjects Added: 4 (English, EVS, Kannada, Mathematics)"
Write-Host "Total Unit Pages/Units Added: $totalUnits"
Write-Host "Total Model QPs Added: $totalQPs"
Write-Host "Total Written Answer Keys Added: $totalAKs"
Write-Host "Total Oral Assessments Added: $totalOrals"
Write-Host "Total Oral Keys Added: $totalOralKeys"
Write-Host "==============================="
