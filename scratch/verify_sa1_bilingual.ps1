$js = Get-Content "data/resources.js" -Raw

$expected = @(
  # Class 1
  @{ Class="1"; Subject="english"; URL="https://drive.google.com/file/d/19-j2KF5Wg0HrV43X7sXmSlO0oM8tUQg2/view" },
  @{ Class="1"; Subject="kannada"; URL="https://drive.google.com/file/d/1AluQcozMzhMdioQTY-5pIbTM_BmTl7RD/view" },
  @{ Class="1"; Subject="evs"; URL="https://drive.google.com/file/d/1KYKFg1CAJ4qzSbKT0Bk_Al9npNCSbfJ6/view" },
  @{ Class="1"; Subject="mathematics"; URL="https://drive.google.com/file/d/175bDB3YmvmPnxyqJEKFqyd5V0lWSWCB5/view" },

  # Class 2
  @{ Class="2"; Subject="english"; URL="https://drive.google.com/file/d/16bVCAqOIzC9HCbwI0_BqxDMqmGIs5i3q/view" },
  @{ Class="2"; Subject="kannada"; URL="https://drive.google.com/file/d/1izkupp5vEyN_k7WCV_OLSaXopWJQv-OF/view" },
  @{ Class="2"; Subject="evs"; URL="https://drive.google.com/file/d/1ss23S4Z0xAIdmB2U2H4lDIKXvN4EfZAW/view" },
  @{ Class="2"; Subject="mathematics"; URL="https://drive.google.com/file/d/1BJINn_a6vLZk2SHISlhUFO7JG3iKmhjw/view" },

  # Class 3
  @{ Class="3"; Subject="english"; URL="https://drive.google.com/file/d/16xa2ON_ffJ2TzYMKHLJjoPijPmlOI3MI/view" },
  @{ Class="3"; Subject="kannada"; URL="https://drive.google.com/file/d/1dapiRMX7hVTP3Lbs-0MTUtdQhOoKmYAw/view" },
  @{ Class="3"; Subject="evs"; URL="https://drive.google.com/file/d/18pArWGCQQ4SwKiUqE0bFxkBUx2-yURZJ/view" },
  @{ Class="3"; Subject="mathematics"; URL="https://drive.google.com/file/d/16Zd74r-SgBLyAiwwGxYVhIUGPERil73S/view" },

  # Class 4
  @{ Class="4"; Subject="english"; URL="https://drive.google.com/file/d/12vpdMA2TE5DRuF-R3ZvzEyWqs0nVYFKW/view" },
  @{ Class="4"; Subject="kannada"; URL="https://drive.google.com/file/d/1lnyNQoInzMuxfxsIVuvyhiMZJH9y3RNx/view" },
  @{ Class="4"; Subject="evs"; URL="https://drive.google.com/file/d/168eNN5IBb-NplmpPAAirWFvgTDSv_6YG/view" },
  @{ Class="4"; Subject="mathematics"; URL="https://drive.google.com/file/d/1oghbsHVZFXQrxgqrV2z-_iCikeMtapTx/view" },

  # Class 5
  @{ Class="5"; Subject="english"; URL="https://drive.google.com/file/d/1tNqlhaXvZwa8YRWLb9IKO49tdd2NkulB/view" },
  @{ Class="5"; Subject="kannada"; URL="https://drive.google.com/file/d/1cSZTWFeKCqVVsgbbprW-EUj_JWa_iDng/view" },
  @{ Class="5"; Subject="evs"; URL="https://drive.google.com/file/d/1h7UeQc59VhWnlUqWvwmmAEY84B5eZztL/view" },
  @{ Class="5"; Subject="mathematics"; URL="https://drive.google.com/file/d/1jYLZaLHWwXx3dhMxwUk9jr9m4kopcF2e/view" }
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
  Write-Host "[SUCCESS] All 20 SA-1 Complete Packages (Classes 1-5 Bilingual across English, Kannada, EVS, Mathematics) verified in data/resources.js!"
} else {
  Write-Host "[FAILURE] Found $errors missing links."
}
