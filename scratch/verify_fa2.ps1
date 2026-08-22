$js = Get-Content "data/resources.js" -Raw

$expected = @(
  # Class 1
  @{ Class="1"; Subject="english"; QP="https://drive.google.com/file/d/1_zUpOQ8TjsJV0gpJc0_1LEUOb9XHPGK7/view"; AK="https://drive.google.com/file/d/1plTwD8MaMoMXYB1c18l67IdhmjMLlZqn/view" },
  @{ Class="1"; Subject="kannada"; QP="https://drive.google.com/file/d/1uG1PS_Ydd19nEErbSSEg5ygOqNxIpcyq/view"; AK="https://drive.google.com/file/d/14szH9rMjEKelvUxcjwKVe_qtJgJC-EhL/view" },
  @{ Class="1"; Subject="evs"; QP="https://drive.google.com/file/d/13qVV2s5JcQdHOZgvpJlEvbQUdvBTlgOh/view"; AK="https://drive.google.com/file/d/18Vd-r1hvH9eXg-EMxFi9Fyn6NvaQmTBW/view" },
  @{ Class="1"; Subject="mathematics"; QP="https://drive.google.com/file/d/1T-t16q2XkGwsaJMB6MT1WG-A7c4Gg6Q3/view"; AK="https://drive.google.com/file/d/1e1Z-5TqlEiI7wl57DUo-Y0MpLL6loz51/view" },

  # Class 2
  @{ Class="2"; Subject="english"; QP="https://drive.google.com/file/d/1TkWJrlzmo_p2HxgKKMzUQARBDeAQxuhs/view"; AK="https://drive.google.com/file/d/1PzIVA8kxqPLfL4nbQCdKDUyNR4OKXm6s/view" },
  @{ Class="2"; Subject="kannada"; QP="https://drive.google.com/file/d/1Yg1jlPmCUXa--07oYdq-DvcdESKxCIXi/view"; AK="https://drive.google.com/file/d/1N8eHkpriGplVZ3YkGRKmpcfMyDyCcjLR/view" },
  @{ Class="2"; Subject="evs"; QP="https://drive.google.com/file/d/1aWccHaoaYpOToYBH9j8-4IXj_7lpyrFr/view"; AK="https://drive.google.com/file/d/1GTxsB9Z_EQzAWc4tfvVyhQfCrXg-nRSF/view" },
  @{ Class="2"; Subject="mathematics"; QP="https://drive.google.com/file/d/1WO55ghNggtMNC_9CHUcHdZW0WvRsCROU/view"; AK="https://drive.google.com/file/d/1v2tRaO0dwgQtPyapefcGeCADGlWRyBnH/view" },

  # Class 3
  @{ Class="3"; Subject="english"; QP="https://drive.google.com/file/d/1wf1krWF_4IbKiTyshexY5RGMkzoKkuaJ/view"; AK="https://drive.google.com/file/d/1wk79mFm_72TVuXzMOoAgh0OYVKBNQiiI/view" },
  @{ Class="3"; Subject="kannada"; QP="https://drive.google.com/file/d/1zRY45ZMPQLtplmXNrugxcQXlZrDqECeX/view"; AK="https://drive.google.com/file/d/1qqEHtCdjJUNFtTFW54FgQVL04lpwlZAu/view" },
  @{ Class="3"; Subject="evs"; QP="https://drive.google.com/file/d/1JJxearsjfttodfjuqWni4MtQkM8moZuM/view"; AK="https://drive.google.com/file/d/1PuGoksDpOAsvxzJ2UZ5rRppFRlzAE2Vd/view" },
  @{ Class="3"; Subject="mathematics"; QP="https://drive.google.com/file/d/1VBFNv0HkJ2vJAbi4Sk7HZcttYuA4Pnfh/view"; AK="https://drive.google.com/file/d/1in9zJO3Y9SLBdlsMAkg27ATVFJ_N23V0/view" },

  # Class 4
  @{ Class="4"; Subject="english"; QP="https://drive.google.com/file/d/1oWFsiKmQggG3_KWJ7AnJ5QL4NOX-_83Z/view"; AK="https://drive.google.com/file/d/1l9G8yEUWD2o3ek8Vt_zywmxqTo-756Hy/view" },
  @{ Class="4"; Subject="kannada"; QP="https://drive.google.com/file/d/1j4NnFy1GgkSRqp29vSG4YCw3pke91uS3/view"; AK="https://drive.google.com/file/d/1S_hLsgDE8k-zjU1HMSDkRWPjdMuOOLZ_/view" },
  @{ Class="4"; Subject="evs"; QP="https://drive.google.com/file/d/18BKRfWQtbUHPc2ese4NSEMD-2hPO7a48/view"; AK="https://drive.google.com/file/d/1j0nlPkOiwzwEpocOxcYkb0p2hG1LWF2f/view" },
  @{ Class="4"; Subject="mathematics"; QP="https://drive.google.com/file/d/11Ky9XV2nbm-7clIn91hJ7fBOO6yh7hCq/view"; AK="https://drive.google.com/file/d/1m9Ec5vG4JnUq77k_T6UwYeFpIi7OV2fd/view" },

  # Class 5
  @{ Class="5"; Subject="english"; QP="https://drive.google.com/file/d/1623VVrhnEEeX0zIZ-GtKBzaBFlg3Xucx/view"; AK="https://drive.google.com/file/d/15gxPCZ4T3uzn10xYf_49d4DvOIMvAlyk/view" },
  @{ Class="5"; Subject="kannada"; QP="https://drive.google.com/file/d/1vOmkjF03MRiehHWgy8Oz9Lyr4EeVI8jQ/view"; AK="https://drive.google.com/file/d/1Amjozjs2NBsmkF7xMXAxpZmRMhdriTtS/view" },
  @{ Class="5"; Subject="evs"; QP="https://drive.google.com/file/d/1FtkLf2Lo8G4b34I8coUzbJnarwqLY8hZ/view"; AK="https://drive.google.com/file/d/1w9BVaSwghHM3j1sC1c9u2UcgpD10pD6n/view" },
  @{ Class="5"; Subject="mathematics"; QP="https://drive.google.com/file/d/1cIiq24-GC0N6n1LPGeoEhpnm125DK_fa/view"; AK="https://drive.google.com/file/d/1jVEe7ibFibwWBgg8azuem1f6IUv3Tn1N/view" }
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
  Write-Host "[SUCCESS] All 20 FA-2 Model Question Papers and 20 FA-2 Answer Keys (40 total links) verified in data/resources.js!"
} else {
  Write-Host "[FAILURE] Found $errors missing links."
}
