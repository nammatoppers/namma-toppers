$dataJs = Get-Content "data/resources.js" -Raw

# Extract all PDF path references inside quotes
$regex = 'resources/class-[1-6]/[a-z0-9_-]+/[A-Za-z0-9_-]+\.pdf'
$matches = [regex]::Matches($dataJs, $regex)

Write-Host "Found $($matches.Count) total PDF paths declared in data/resources.js." -ForegroundColor Cyan

$missingCount = 0
$validCount = 0

foreach ($m in $matches) {
    $relativePath = $m.Value
    if (Test-Path $relativePath) {
        $validCount++
    } else {
        Write-Host "[MISSING FILE] $relativePath" -ForegroundColor Red
        $missingCount++
    }
}

Write-Host "[RESULT] Valid PDF paths: $validCount, Missing: $missingCount" -ForegroundColor Green

# Check HTML relative script includes
$indexHtml = Get-Content "index.html" -Raw
$resourcesHtml = Get-Content "resources.html" -Raw

if ($indexHtml -match 'data/resources.js' -and $indexHtml -match 'assets/app.js') {
    Write-Host "[OK] index.html correctly includes data/resources.js and assets/app.js" -ForegroundColor Green
} else {
    Write-Host "[ERROR] index.html script tags invalid" -ForegroundColor Red
}

if ($resourcesHtml -match 'data/resources.js' -and $resourcesHtml -match 'assets/resources-page.js') {
    Write-Host "[OK] resources.html correctly includes data/resources.js and assets/resources-page.js" -ForegroundColor Green
} else {
    Write-Host "[ERROR] resources.html script tags invalid" -ForegroundColor Red
}
