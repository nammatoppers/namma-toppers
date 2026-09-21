$js = Get-Content "data/resources.js" -Raw

$expected = @(
  # Class 6
  @{ Class="6"; Subject="kannada"; URL="https://drive.google.com/file/d/1Op-O9-RpIcdx0hTWYrtEkJbSiQ_0D48l/view" },
  @{ Class="6"; Subject="english"; URL="https://drive.google.com/file/d/15e4hDjVsoUGCJiBTE0P1dbg0obpTvHrD/view" },
  @{ Class="6"; Subject="hindi"; URL="https://drive.google.com/file/d/177CTwlh4mlDy0SruoN6RicpTfapOVcUk/view" },
  @{ Class="6"; Subject="mathematics"; URL="https://drive.google.com/file/d/17YUme4WSxteNY3XdYXLfsEZ-I6an_KOS/view" },
  @{ Class="6"; Subject="science"; URL="https://drive.google.com/file/d/16HjL7UjYUW99hsq8BYgZsIsY0Gtl0Fz7/view" },
  @{ Class="6"; Subject="socialScience"; URL="https://drive.google.com/file/d/1T86G-Gtic_yh2EtWZ01PfjKwaEKisW7r/view" },

  # Class 7
  @{ Class="7"; Subject="kannada"; URL="https://drive.google.com/file/d/1beErloKuR3iIPPRlLPe4e1Siz1GDQQms/view" },
  @{ Class="7"; Subject="english"; URL="https://drive.google.com/file/d/11XSc79Zloz9V9qDbZpCU7b4QxN8hbLH_/view" },
  @{ Class="7"; Subject="hindi"; URL="https://drive.google.com/file/d/1xtkVaAp3VsnXsnRjj3pn08A-EYACtbjj/view" },
  @{ Class="7"; Subject="mathematics"; URL="https://drive.google.com/file/d/1c8PV_BA5H-6CiJXPE8qAm5rzCMo7c0yd/view" },
  @{ Class="7"; Subject="science"; URL="https://drive.google.com/file/d/1Dq90zfSNDtXV5k4vc99PJga5QRZ1fniK/view" },
  @{ Class="7"; Subject="socialScience"; URL="https://drive.google.com/file/d/1VhRQjwI479FrbUbTcHv_oEfJFOZGE5g2/view" }
)

$errors = 0
foreach ($item in $expected) {
  $url = $item.URL
  if (-not ($js.Contains($url))) {
    Write-Host "[ERROR] Missing SA-1 URL for Class $($item.Class) $($item.Subject): $url"
    $errors++
  }
}

if ($errors -eq 0) {
  Write-Host "[SUCCESS] All 12 SA-1 Complete Packages (Classes 6-7 Kannada Medium across 6 subjects) verified in data/resources.js!"
} else {
  Write-Host "[FAILURE] Found $errors missing links."
}
