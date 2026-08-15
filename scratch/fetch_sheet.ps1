$id = "1IXl1zteHUWmxkPjyYMEbgSt7D875PmuS-6BXPo_ZavQ"
$urls = @(
    "https://docs.google.com/spreadsheets/d/$id/gviz/tq?tqx=out:csv",
    "https://docs.google.com/spreadsheets/d/$id/gviz/tq?tqx=out:csv&sheet=Class%201",
    "https://docs.google.com/spreadsheets/d/$id/gviz/tq?tqx=out:csv&sheet=Class1",
    "https://docs.google.com/spreadsheets/d/$id/export?format=csv",
    "https://docs.google.com/spreadsheets/d/$id/export?format=csv&gid=0"
)

foreach ($u in $urls) {
    Write-Host "Trying URL: $u"
    try {
        $r = Invoke-WebRequest -Uri $u -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" -UseBasicParsing
        Write-Host "SUCCESS! Length: $($r.Content.Length)"
        Write-Host $r.Content.Substring(0, [Math]::Min(1000, $r.Content.Length))
    } catch {
        Write-Host "Failed: $_"
    }
}
