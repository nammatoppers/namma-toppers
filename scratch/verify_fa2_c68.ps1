$js = Get-Content "data/resources.js" -Raw

$expected = @(
  # Class 6
  @{ Class="6"; Subject="kannada"; QP="https://drive.google.com/file/d/1uDjoVvkcABSwKn0-1UHLioUPVxJZ5GX9/view"; AK="https://drive.google.com/file/d/1zPUxLrc_bjK93Mn3H5_WwqVBx5QYocI0/view" },
  @{ Class="6"; Subject="english"; QP="https://drive.google.com/file/d/1MXFzXU0Y9p2BFimr3JmrtrtE4PM1iZQv/view"; AK="https://drive.google.com/file/d/11qIOLm3oSBp4cWsBHoGf7e3Ubv4-dCro/view" },
  @{ Class="6"; Subject="hindi"; QP="https://drive.google.com/file/d/1urF53JriH0hl3ahJwYM0-0fUrhV0vZB8/view"; AK="https://drive.google.com/file/d/1PsDtXbUVesYYe5CrfbqLBs7YSC-nO_6X/view" },
  @{ Class="6"; Subject="mathematics"; QP="https://drive.google.com/file/d/1ZeW-niuxUC7Ch6d7YpOXdoh9jbPUhTEP/view"; AK="https://drive.google.com/file/d/1ykYlQRwasTNkiN6mTzdngXo2MO_eTKM4/view" },
  @{ Class="6"; Subject="science"; QP="https://drive.google.com/file/d/16mxtcMLtPMPrDCJpBS3njqzL3DMhZWaU/view"; AK="https://drive.google.com/file/d/1rT_1uisIuYeBEYQFF_JFhvnbQkhBNfxb/view" },
  @{ Class="6"; Subject="socialScience"; QP="https://drive.google.com/file/d/10TmOSDKpRXsaSbaAqNkBbMgSneegtmhB/view"; AK="https://drive.google.com/file/d/1dNPNkJ6C9Yv1YtUCWZB6Tyq2vo6wTFRA/view" },

  # Class 7
  @{ Class="7"; Subject="kannada"; QP="https://drive.google.com/file/d/1jl4eUQv0l0ebWI5AwDAsudHlK4I1XzFP/view"; AK="https://drive.google.com/file/d/1FB-lcxL4Hp2BQXtE_vb7FcOySVJELniZ/view" },
  @{ Class="7"; Subject="english"; QP="https://drive.google.com/file/d/1gCf6AWaNdPziXJidPmfIOQ5Dv20VT3aN/view"; AK="https://drive.google.com/file/d/1S8ZZglZzFZl3s281arcZ41kzw2jkz9hr/view" },
  @{ Class="7"; Subject="hindi"; QP="https://drive.google.com/file/d/1Kc11NT6rmsVGueVRzfCCodc4xzK2YNHc/view"; AK="https://drive.google.com/file/d/1yvBVGtXBdAjEmqKFxJLPujpbNmLBxkQc/view" },
  @{ Class="7"; Subject="mathematics"; QP="https://drive.google.com/file/d/1bUxmcNOZtlempkAnftt-nCdxOCaGnKuh/view"; AK="https://drive.google.com/file/d/1lxD54f6M-gvBhfpTbbITNzheMLQyW4w1/view" },
  @{ Class="7"; Subject="science"; QP="https://drive.google.com/file/d/18TCrju2JDWuSI3iaSMkzaCxOnQXcbCC2/view"; AK="https://drive.google.com/file/d/15kxzeaH0AFwQ4Wu8OilB-ENUenu-SFsA/view" },
  @{ Class="7"; Subject="socialScience"; QP="https://drive.google.com/file/d/1NnXgDa-NeQ92RZkaLj3bM--jS-3bGrIq/view"; AK="https://drive.google.com/file/d/1Wmvx32N8H_26ItE9ar_wMc5vhFAhdfA2/view" },

  # Class 8
  @{ Class="8"; Subject="kannada"; QP="https://drive.google.com/file/d/18DpDFm-gWNbn_muTpudSaPnmLOqqtTwD/view"; AK="https://drive.google.com/file/d/1kJ2MxxozK7zQ7p9REHstGIwCDqvhQj1c/view" },
  @{ Class="8"; Subject="english"; QP="https://drive.google.com/file/d/14Y8cx9xqTi6EOMB6Q5zlxoX10RRvGXMg/view"; AK="https://drive.google.com/file/d/1an01_U231JRHM-u6fTpvhABSOl4H8vqL/view" },
  @{ Class="8"; Subject="hindi"; QP="https://drive.google.com/file/d/1D1wwiKcCcT2rppLs_DrIGv8Jys4A35Y0/view"; AK="https://drive.google.com/file/d/12RguPlEH2VhHAaFwCJr4s-euPyCUNvR5/view" },
  @{ Class="8"; Subject="mathematics"; QP="https://drive.google.com/file/d/1I4LGPiGBwhpIRYzTjDkG0GgS0Fk8hine/view"; AK="https://drive.google.com/file/d/1smPfi2f0dUittakQFni9BNXlxKQBHaW0/view" },
  @{ Class="8"; Subject="science"; QP="https://drive.google.com/file/d/1AmWHkAjGTxQzvD25uPZXWRqkziR1yJS8/view"; AK="https://drive.google.com/file/d/1a8MKuvN6T-LM55K74Ljm2B6k8VhI59bI/view" },
  @{ Class="8"; Subject="socialScience"; QP="https://drive.google.com/file/d/15kfQzmjxUit0YCWWhOjIqmjg9PGCfc4U/view"; AK="https://drive.google.com/file/d/1NuHUPkRLWtN5-cmRUVNwUixKnks6NUP6/view" }
)

$errors = 0
foreach ($item in $expected) {
  $qp = $item.QP
  $ak = $item.AK
  
  if (-not ($js.Contains($qp))) {
    Write-Host "[ERROR] Missing QP for Class $($item.Class) $($item.Subject): $qp"
    $errors++
  }
  if (-not ($js.Contains($ak))) {
    Write-Host "[ERROR] Missing AK for Class $($item.Class) $($item.Subject): $ak"
    $errors++
  }
}

if ($errors -eq 0) {
  Write-Host "[SUCCESS] All 18 Classes 6-8 Kannada Medium FA-2 Model Question Papers and 18 Answer Keys (36 total links) verified in data/resources.js!"
} else {
  Write-Host "[FAILURE] Found $errors missing links."
}
