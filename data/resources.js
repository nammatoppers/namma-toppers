/**
 * Namma Toppers - Centralized Resource & Socials Data Store
 */

window.NAMMA_TOPPERS_SOCIALS = {
  instagram: "https://www.instagram.com/nammatoppers/?hl=en",
  youtube: "https://www.youtube.com/channel/UCP9PEs2L57E9FH17pQrsmVQ",
  whatsapp: "https://whatsapp.com/channel/0029VbDWNuQ72WTnxq19Qu02",
  telegram: "https://t.me/+SdyXuYvxviU1YTE1"
};

const defaultPrimarySubjects = {
  kannada: { name: "Kannada", code: "KAN", questionPaper: "", answerKey: "" },
  english: { name: "English", code: "ENG", questionPaper: "", answerKey: "" },
  mathematics: { name: "Mathematics", code: "MATH", questionPaper: "", answerKey: "" },
  evs: { name: "EVS", code: "EVS", questionPaper: "", answerKey: "" }
};

const defaultHigherSubjects = {
  kannada: { name: "Kannada", code: "KAN", questionPaper: "", answerKey: "" },
  english: { name: "English", code: "ENG", questionPaper: "", answerKey: "" },
  hindi: { name: "Hindi", code: "HIN", questionPaper: "", answerKey: "" },
  mathematics: { name: "Mathematics", code: "MATH", questionPaper: "", answerKey: "" },
  science: { name: "Science", code: "SCI", questionPaper: "", answerKey: "" },
  socialScience: { name: "Social Science", code: "SS", questionPaper: "", answerKey: "" }
};

const defaultHigherNotesSubjects = {
  kannada: { name: "Kannada", code: "KAN", notesUrl: "" },
  english: { name: "English", code: "ENG", notesUrl: "" },
  hindi: { name: "Hindi", code: "HIN", notesUrl: "" },
  mathematics: { name: "Mathematics", code: "MATH", notesUrl: "" },
  science: { name: "Science", code: "SCI", notesUrl: "" },
  socialScience: { name: "Social Science", code: "SS", notesUrl: "" }
};

const defaultBoardPrepCategorySubjects = {
  kannada: { name: "Kannada", code: "KAN", pdfUrl: "" },
  english: { name: "English", code: "ENG", pdfUrl: "" },
  hindi: { name: "Hindi", code: "HIN", pdfUrl: "" },
  mathematics: { name: "Mathematics", code: "MATH", pdfUrl: "" },
  science: { name: "Science", code: "SCI", pdfUrl: "" },
  socialScience: { name: "Social Science", code: "SS", pdfUrl: "" }
};

function createPrimaryClass(name, fa1Config = null) {
  return {
    name: name,
    fa1: fa1Config || JSON.parse(JSON.stringify(defaultPrimarySubjects)),
    fa2: JSON.parse(JSON.stringify(defaultPrimarySubjects)),
    sa1: JSON.parse(JSON.stringify(defaultPrimarySubjects)),
    sa2: JSON.parse(JSON.stringify(defaultPrimarySubjects)),
    unitTests: {
      unit1: JSON.parse(JSON.stringify(defaultPrimarySubjects))
    }
  };
}

function createHigherClass(name, fa1Config = null) {
  return {
    name: name,
    fa1: fa1Config || JSON.parse(JSON.stringify(defaultHigherSubjects)),
    fa2: JSON.parse(JSON.stringify(defaultHigherSubjects)),
    sa1: JSON.parse(JSON.stringify(defaultHigherSubjects)),
    sa2: JSON.parse(JSON.stringify(defaultHigherSubjects)),
    unitTests: {
      unit1: JSON.parse(JSON.stringify(defaultHigherSubjects))
    },
    notes: JSON.parse(JSON.stringify(defaultHigherNotesSubjects))
  };
}

function createSSLCConfig() {
  return {
    fa1: JSON.parse(JSON.stringify(defaultHigherSubjects)),
    fa2: JSON.parse(JSON.stringify(defaultHigherSubjects)),
    sa1: JSON.parse(JSON.stringify(defaultHigherSubjects)),
    sa2: JSON.parse(JSON.stringify(defaultHigherSubjects)),
    notes: JSON.parse(JSON.stringify(defaultHigherNotesSubjects)),
    boardPreparation: {
      previousYearPapers: JSON.parse(JSON.stringify(defaultBoardPrepCategorySubjects)),
      modelQuestionPapers: JSON.parse(JSON.stringify(defaultBoardPrepCategorySubjects)),
      blueprint: JSON.parse(JSON.stringify(defaultBoardPrepCategorySubjects)),
      importantQuestions: JSON.parse(JSON.stringify(defaultBoardPrepCategorySubjects)),
      predictedQuestions: JSON.parse(JSON.stringify(defaultBoardPrepCategorySubjects)),
      answerWriting: JSON.parse(JSON.stringify(defaultBoardPrepCategorySubjects)),
      revision: JSON.parse(JSON.stringify(defaultBoardPrepCategorySubjects))
    }
  };
}

window.NAMMA_TOPPERS_RESOURCES = {

  // SECTION 1: BILINGUAL RESOURCES (CLASSES 1–5)
  bilingual: {
    title: "Bilingual Resources",
    subtitle: "Classes 1–5",
    classes: {
      "1": createPrimaryClass("Class 1", {
        kannada: { name: "Kannada", code: "KAN", questionPaper: "https://drive.google.com/file/d/18WGGVf8kltON7Xr9OwF01cufIYaJre5v/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1KHAVxAMVZggFld-0OkRQh3aalFCMnI7m/view?usp=drive_link" },
        english: { name: "English", code: "ENG", questionPaper: "https://drive.google.com/file/d/1o5o7cmqOJakmsI3sIBQfVFzzBggeeObQ/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1QQT1HHql-hy4LqjjvXWY0M1g2-3bpAgd/view?usp=drive_link" },
        mathematics: { name: "Mathematics", code: "MATH", questionPaper: "https://drive.google.com/file/d/1NjCiIzptACzYrWCrIAV40RbGxTjYI7cB/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1mhNeXZv2OQAGQslwUhXWxETRq32AznD_/view?usp=drive_link" },
        evs: { name: "EVS", code: "EVS", questionPaper: "https://drive.google.com/file/d/1BLrU7VqjldzpjBWkbnks3AQX2dtR4nqq/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1JNePigCmJfzBXX0fRkZ7SbFdEGGpyMn6/view?usp=drive_link" }
      }),
      "2": createPrimaryClass("Class 2", {
        kannada: { name: "Kannada", code: "KAN", questionPaper: "https://drive.google.com/file/d/1a7nbElJ6-pjMsE8K_JWuHiO8lrt6bc8T/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/15yfWVRtGGff1Fup1wxCoX1Rn-9YdNsXr/view?usp=drive_link" },
        english: { name: "English", code: "ENG", questionPaper: "https://drive.google.com/file/d/1qqog8L22kncUHYbvovAPKh3XNDt84Wfp/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1dpwsOFM64FI9Enc5LbasxFYJunAAxuLX/view?usp=drive_link" },
        mathematics: { name: "Mathematics", code: "MATH", questionPaper: "https://drive.google.com/file/d/1OBZ4hV820WsL8wiS9dZmwjGa-T2eYJom/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1tNSDWk_mLfYXra379PzV20-VVX6oSLg1/view?usp=drive_link" },
        evs: { name: "EVS", code: "EVS", questionPaper: "https://drive.google.com/file/d/1kg_j19u9Xq_k4SgY7PlpcHd9P9VqtRbv/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1_Rf-gShEu3dS3iJ1oR6ccRLutdZHCjOc/view?usp=drive_link" }
      }),
      "3": createPrimaryClass("Class 3", {
        kannada: { name: "Kannada", code: "KAN", questionPaper: "https://drive.google.com/file/d/1hTVigRVaYkXBZqPubbP7hbAm0_54CYju/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1ynqAhr12lPjL75wH9WPNnz8ncSeaSZiv/view?usp=drive_link" },
        english: { name: "English", code: "ENG", questionPaper: "https://drive.google.com/file/d/1lZE5A_Aaeg0-5E5CKsK8DbBDBB2g2me_/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1OTuhxThJuijNGYkukUHzev6D2XawjefP/view?usp=drive_link" },
        mathematics: { name: "Mathematics", code: "MATH", questionPaper: "https://drive.google.com/file/d/1YNkVkd5tMt9e_MYEBHm7zWfciZ1qpWzb/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1ppUs6OaGADIvc1e-kTz4CFMfIMmBaWgN/view?usp=drive_link" },
        evs: { name: "EVS", code: "EVS", questionPaper: "https://drive.google.com/file/d/1uFxreD9bN8hC6sLHUnkyiOBMEn_uCSQc/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1305-txtIdL33veeNePohBtBIWoqL9DCp/view?usp=drive_link" }
      }),
      "4": createPrimaryClass("Class 4", {
        kannada: { name: "Kannada", code: "KAN", questionPaper: "https://drive.google.com/file/d/10NVkbI9rGdMrlM6R05f9L3K69jTbc6fp/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/12k-JYtqIM_ZjD5xgqC3LIMr2slqT2idF/view?usp=drive_link" },
        english: { name: "English", code: "ENG", questionPaper: "https://drive.google.com/file/d/1BjiWb9OiYTikvcaKI5mCOR2Fc5VfA30o/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1keDEKfvtKQeqV5a2R1mLdK8E0y4dn2E6/view?usp=drive_link" },
        mathematics: { name: "Mathematics", code: "MATH", questionPaper: "https://drive.google.com/file/d/1mGTAiLwEg5beKrgeiErC5DAQqPXyrA4v/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1c-RhVqxjXFFb4DYblic7RdATKARaxt5Y/view?usp=drive_link" },
        evs: { name: "EVS", code: "EVS", questionPaper: "https://drive.google.com/file/d/1V3Jb5kkz4Hc7nkt9yP8Jp3Y6GwoYSETJ/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/12W-42yBgQRY0Q9OhnJYZOmpD_vFyGO22/view?usp=drive_link" }
      }),
      "5": createPrimaryClass("Class 5", {
        kannada: { name: "Kannada", code: "KAN", questionPaper: "https://drive.google.com/file/d/1DpEpOWZSGuvy-6Y2HvGqj6rXixWHyOty/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1j3xTFxhxyimf5bCQx4nn8I13c4BUHyk7/view?usp=drive_link" },
        english: { name: "English", code: "ENG", questionPaper: "https://drive.google.com/file/d/1ph7dC0yNpHMYnIrhoA97sTaoXkc_MzYh/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1FXYARb8L1u2rLJjnNfTEEM6P8a4wLID6/view?usp=drive_link" },
        mathematics: { name: "Mathematics", code: "MATH", questionPaper: "https://drive.google.com/file/d/1rXNNcbU8z-Pme9wBZIM7ro3lzXL9Wuqw/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1ZxFcT68jF7-Ah2nPlWGxUmfHsTUy2W6T/view?usp=drive_link" },
        evs: { name: "EVS", code: "EVS", questionPaper: "https://drive.google.com/file/d/1-7_GhOzturNOGpzhqgpX8KDW7Zf4UsF-/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1LQ4yD4sj_bXPR2PaoZ1IxFPJWg9adw6C/view?usp=drive_link" }
      })
    }
  },

  // SECTION 2: KANNADA MEDIUM (CLASSES 1–9)
  kannadaMedium: {
    title: "Kannada Medium",
    subtitle: "Classes 1–9",
    classes: {
      "1": createPrimaryClass("Class 1"),
      "2": createPrimaryClass("Class 2"),
      "3": createPrimaryClass("Class 3"),
      "4": createPrimaryClass("Class 4"),
      "5": createPrimaryClass("Class 5"),
      "6": createHigherClass("Class 6", {
        kannada: { name: "Kannada", code: "KAN", questionPaper: "https://drive.google.com/file/d/1HDoZHWh6A-V590unrY54vVtFsh0vAQsB/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/18yGLpRziPLuW_pAzk50JvcVQia7_2_EL/view?usp=drive_link" },
        english: { name: "English", code: "ENG", questionPaper: "https://drive.google.com/file/d/1b8DnaHIrdBKRCeB0ADxgE2d1d3um5n1l/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1sp-J9WepOurx7R1iHuY64hLvY7rFmCQK/view?usp=drive_link" },
        hindi: { name: "Hindi", code: "HIN", questionPaper: "https://drive.google.com/file/d/1vkuafX4-vM3FUpSeZ2hgdyQYki-IVv5E/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1qVHgMGjIr8K4weQwKGxLF5vw2bqOdkn6/view?usp=drive_link" },
        mathematics: { name: "Mathematics", code: "MATH", questionPaper: "https://drive.google.com/file/d/1D1Wn4NWTQ-ewpQ_CcjiFp2qaG4qELJG2/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1YUxqtrLAnw_pZy2Gdyq5Tamg83mSf_uL/view?usp=sharing" },
        science: { name: "Science", code: "SCI", questionPaper: "https://drive.google.com/file/d/1vQyzxNjvUjZKAPAmi0OCIgA1N3VEKzBY/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1wKytygBgQa3-tHPaJ2WJLd7dFGD6i1T9/view?usp=drive_link" },
        socialScience: { name: "Social Science", code: "SS", questionPaper: "https://drive.google.com/file/d/1BriYbTf4XAyTg3Vm8hMuNJfRWMfbBhqw/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1-M7Q-V948HvjpXBAsreLSnBM-F2dKADu/view?usp=drive_link" }
      }),
      "7": createHigherClass("Class 7", {
        kannada: { name: "Kannada", code: "KAN", questionPaper: "https://drive.google.com/file/d/1GQYZItCEYrdAUK52714VjdmYgtSscb06/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1FJygXzD99nAHjfbR28VdvxtIe3WQbxeI/view?usp=drive_link" },
        english: { name: "English", code: "ENG", questionPaper: "https://drive.google.com/file/d/1k0m3iUBP3HTa-xfqWDHnMl_Op_Y3mvsI/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1y8yuIELcd1kWXZmhT9IVWSMGj5ZZsJGH/view?usp=drive_link" },
        hindi: { name: "Hindi", code: "HIN", questionPaper: "https://drive.google.com/file/d/1wt313NNiid8hPlPjzwIM4QE0EyISTa2A/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1SWK3o8xRvpi5CDcNW0JnWxIZklM5bJUl/view?usp=drive_link" },
        mathematics: { name: "Mathematics", code: "MATH", questionPaper: "https://drive.google.com/file/d/1Q3Vu4N1hT99TuMxKUh-51U2JGrB_A6mf/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1e_mh2x7gbFGZPhit83Q0v9Lb3LDnqokX/view?usp=drive_link" },
        science: { name: "Science", code: "SCI", questionPaper: "https://drive.google.com/file/d/1JX1JWPCrfTY_gBLDHLIiOsxq4xgpMYx3/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1F-7jgxpK6i5pijayNyxrm0uxPGP61q2R/view?usp=drive_link" },
        socialScience: { name: "Social Science", code: "SS", questionPaper: "https://drive.google.com/file/d/1Lf_PWBngkLuQgII4loDXZ9JV0NMd3X50/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1fvg7EvHZqIL0zbYkPlZ5dbIyS4-GBOyF/view?usp=drive_link" }
      }),
      "8": createHigherClass("Class 8", {
        kannada: { name: "Kannada", code: "KAN", questionPaper: "https://drive.google.com/file/d/1Qx3x9ZEMblda6V_WDghXws7P-T5cwdjd/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/13OVBATufPaAycXskB6CqJqoAegJhfYBP/view?usp=drive_link" },
        english: { name: "English", code: "ENG", questionPaper: "https://drive.google.com/file/d/1ptiY-XFplQzk-rSPsm_uppol29TO2cgY/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1M9JC9E_BE2KIc3Rwfj6z1qQq8Dcsaj3y/view?usp=drive_link" },
        hindi: { name: "Hindi", code: "HIN", questionPaper: "https://drive.google.com/file/d/1F9MDuEKVviMxdEdwEsKJ4hGCWtVhacWJ/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1GQzAIhrXw68UXuLKhK9K91IZc0Nscy88/view?usp=drive_link" },
        mathematics: { name: "Mathematics", code: "MATH", questionPaper: "https://drive.google.com/file/d/1Rgk_9EnxFTP2B9f_IxUzeWcaX4dXgllI/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1dBE6K8CAbUQBIMSGQaRgpSAQOckglC3q/view?usp=drive_link" },
        science: { name: "Science", code: "SCI", questionPaper: "https://drive.google.com/file/d/15Rp3VrkPo3K5Fi472G73KK5kS25gwq5r/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1ZZRTrdu-mvcTAz1vtU2yM4NTMqiC9gwA/view?usp=drive_link" },
        socialScience: { name: "Social Science", code: "SS", questionPaper: "https://drive.google.com/file/d/1DHbvwCIjKYlibugf-Mzm7xT7lspP9uE3/view?usp=drive_link", answerKey: "https://drive.google.com/file/d/1vQqWbiDXI_zkEoMyeOA8TtjzTAOXbVw-/view?usp=drive_link" }
      }),
      "9": createHigherClass("Class 9")
    }
  },

  // SECTION 3: ENGLISH MEDIUM (CLASSES 1–9)
  englishMedium: {
    title: "English Medium",
    subtitle: "Classes 1–9",
    classes: {
      "1": createPrimaryClass("Class 1"),
      "2": createPrimaryClass("Class 2"),
      "3": createPrimaryClass("Class 3"),
      "4": createPrimaryClass("Class 4"),
      "5": createPrimaryClass("Class 5"),
      "6": createHigherClass("Class 6"),
      "7": createHigherClass("Class 7"),
      "8": createHigherClass("Class 8"),
      "9": createHigherClass("Class 9")
    }
  },

  // SECTION 4: SSLC ZONE (CLASS 10 BOARD RESOURCES)
  sslc: {
    title: "SSLC Zone",
    subtitle: "Class 10 Board Resources",
    kannadaMedium: createSSLCConfig(),
    englishMedium: createSSLCConfig()
  },

  // SSLC FIRST LANGUAGE ENGLISH (2026–27)
  sslcFirstLanguageEnglish: {
    title: "SSLC First Language English",
    academicYear: "2026–27",
    notes: {
      prose: [
        {
          id: "a-wrong-man-in-workers-paradise",
          title: "A Wrong Man in Workers’ Paradise",
          category: "prose",
          url: "/sslc/first-language-english/prose/a-wrong-man-in-workers-paradise/",
          pdfUrl: "https://drive.google.com/file/d/1ouMAaHvJtoa6ukuXdwPEqjUXGELX65te/view?usp=drive_link",
          summary: "Rabindranath Tagore's satirical story contrasts a paradise of endless utility with an artist who creates purposeless art. When an idler painter enters Workers' Paradise, his artistic drawings on a girl's pitcher inspire her to appreciate beauty over sheer utility, leading to an awakening among the inhabitants about the value of art and emotions in human life."
        },
        {
          id: "the-elixir-of-life",
          title: "The Elixir of Life",
          category: "prose",
          url: "/sslc/first-language-english/prose/the-elixir-of-life/",
          pdfUrl: "https://drive.google.com/file/d/1yOKmNl5FF2Ln1FP_HKipafm4SeEOah4P/view?usp=drive_link",
          summary: "Sir C.V. Raman highlights water as the true elixir of life, far superior to any imaginary divine potion. He describes how water shapes landscapes, sustains agriculture, enables human civilization, and prevents soil erosion, emphasizing the critical need for water conservation, afforestation, and systematic river water management."
        },
        {
          id: "the-gift-of-the-magi",
          title: "The Gift of the Magi",
          category: "prose",
          url: "/sslc/first-language-english/prose/the-gift-of-the-magi/",
          pdfUrl: "https://drive.google.com/file/d/1Fnzl0vGqqnJeBdifSzF9tHfsqThcNSvG/view?usp=drive_link",
          summary: "O. Henry's heartwarming classic tells the story of Jim and Della, a young impoverished couple who sell their most prized possessions—Della's beautiful hair and Jim's gold watch—to buy Christmas gifts for each other. Their selfless sacrifices demonstrate that true love and generosity are the greatest gifts of all."
        },
        {
          id: "louis-pasteur-conqueror-of-disease",
          title: "Louis Pasteur, Conqueror of Disease",
          category: "prose",
          url: "/sslc/first-language-english/prose/louis-pasteur-conqueror-of-disease/",
          pdfUrl: "https://drive.google.com/file/d/1pbxR9wJc4w3cEUJ70rtiYPPKhWm5113i/view?usp=drive_link",
          summary: "E.H. Carter portrays the life and scientific breakthroughs of French scientist Louis Pasteur. From discovering germ theory and pasteurization to developing vaccines against anthrax and rabies, Pasteur devoted his life to curing diseases, saving millions of lives, and advancing modern medicine."
        },
        {
          id: "what-is-moral-action",
          title: "What is Moral Action?",
          category: "prose",
          url: "/sslc/first-language-english/prose/what-is-moral-action/",
          pdfUrl: "https://drive.google.com/file/d/1cS4Fwc9XxK5ETzIvXE_H0jRCD3wOn6iP/view?usp=drive_link",
          summary: "Mahatma Gandhi explores the true nature of morality, arguing that an action is truly moral only when performed intentionally out of free will, without fear, compulsion, or expectation of personal gain. Moral actions stem from good motives, selflessness, and devotion to duty rather than societal approval."
        }
      ],
      poetry: [
        {
          id: "to-a-pair-of-sarus-cranes",
          title: "To a Pair of Sarus Cranes",
          category: "poetry",
          url: "/sslc/first-language-english/poetry/to-a-pair-of-sarus-cranes/",
          pdfUrl: "https://drive.google.com/file/d/1QypjiYUZGn9w4sddUeOwjRreJhtoyXPL/view?usp=drive_link",
          summary: "Manmohan Singh's poignant poem depicts the tragic killing of a male Sarus crane by an unfeeling hunter. The female crane grieves deeply over the dead bird's remains, carrying a feather in sorrow until she dies of heart-wrenching grief, highlighting the emotional depth of nature compared to human cruelty."
        },
        {
          id: "abraham-lincolns-letter",
          title: "Abraham Lincoln’s Letter",
          category: "poetry",
          url: "/sslc/first-language-english/poetry/abraham-lincolns-letter/",
          pdfUrl: "https://drive.google.com/file/d/17xEQXjDL5mLdfIewDH2t1tD0g_IbKWsP/view?usp=drive_link",
          summary: "In this inspiring poem, Abraham Lincoln writes to his son's teacher, requesting that the boy be taught the value of honesty, courage, faith, and independent thinking. Lincoln emphasizes learning to win gracefully, lose without bitterness, stand by one's convictions, and trust oneself over the crowd."
        },
        {
          id: "vachana",
          title: "Vachana",
          category: "poetry",
          url: "/sslc/first-language-english/poetry/vachana/",
          pdfUrl: "https://drive.google.com/file/d/1sYeCuOJhie73nBnJ59qhC3Zxr2bcRUhp/view?usp=drive_link",
          summary: "Basavanna contrasts rich people who build physical stone temples for Lord Shiva with poor devotees whose own bodies serve as living temples. He reflects that physical structures may perish over time, but the spiritual devotion of the soul (the moving) remains eternal and indestructible."
        },
        {
          id: "lochinvar",
          title: "Lochinvar",
          category: "poetry",
          url: "/sslc/first-language-english/poetry/lochinvar/",
          pdfUrl: "https://drive.google.com/file/d/1zVSZOb6cjhE4tmh46KHyy4T96fypYHQX/view?usp=drive_link",
          summary: "Sir Walter Scott's romantic ballad narrates the story of the brave knight Lochinvar, who rides swiftly to Netherby Hall on Ellen's wedding day. Daringly rescuing his beloved from an arranged marriage to a laggard groom, Lochinvar dances Ellen out the door, leaps onto his horse, and rides away victorious."
        },
        {
          id: "a-poison-tree",
          title: "A Poison Tree",
          category: "poetry",
          url: "/sslc/first-language-english/poetry/a-poison-tree/",
          pdfUrl: "https://drive.google.com/file/d/1Y8WxTrPBtLqhcC3_c7GY-95Rzp7EWJLi/view?usp=drive_link",
          summary: "William Blake explores the destructive nature of suppressed anger. While speaking one's wrath to a friend dissipates it, nurturing hidden hatred towards a foe causes it to grow into a poisonous tree. The foe eats the shiny apple from the tree and falls dead, illustrating the fatal consequences of harbored malice."
        }
      ],
      supplementary: [
        {
          id: "treasure-island",
          title: "Treasure Island",
          category: "supplementary",
          url: "/sslc/first-language-english/supplementary/treasure-island/",
          pdfUrl: "https://drive.google.com/file/d/1CkDaMmTBdX2Db3-1l-SlegGDEaNo5uSg/view?usp=drive_link",
          summary: "Robert Louis Stevenson's classic adventure follows young Jim Hawkins after he discovers a treasure map belonging to Captain Flint. Joining Squire Trelawney and Dr. Livesey aboard the Hispaniola, Jim faces treacherous mutiny led by the pirate Long John Silver and courageously helps secure the hidden island treasure."
        },
        {
          id: "karna",
          title: "Karna",
          category: "supplementary",
          url: "/sslc/first-language-english/supplementary/karna/",
          pdfUrl: "https://drive.google.com/file/d/1wm6JG6yLFN6ie2QqemswRkUWFVFuWXz_/view?usp=drive_link",
          summary: "Adapted from C. Rajagopalachari's Mahabharata, this narrative details the noble yet tragic life of Karna. Despite possessing unmatched archery skills and steadfast loyalty to Duryodhana, Karna faces social rejection, curses from his gurus, and moral dilemmas, remaining an emblem of generosity, honor, and courage."
        }
      ]
    },
    midterm: [
      {
        set: 1,
        setName: "Set 1",
        questionPaper: "https://drive.google.com/file/d/188uOhpkLJPs4Vpk3_S59hL6qAs5hG0c7/view?usp=drive_link",
        answerKey: "https://drive.google.com/file/d/12dO0q-Q8nvcrtllluX1lWE3NMlgK5RrY/view?usp=drive_link"
      },
      {
        set: 2,
        setName: "Set 2",
        questionPaper: "https://drive.google.com/file/d/1kHs6ngvSsI3w0ILCzTBn5l3tY621bV-P/view?usp=drive_link",
        answerKey: "https://drive.google.com/file/d/1pkYo2bbwd2yFNoKLGHUw9f1eXxX9npeG/view?usp=drive_link"
      },
      {
        set: 3,
        setName: "Set 3",
        questionPaper: "https://drive.google.com/file/d/1sMk27kwKeb2y8V1J9LIZSbEV0W4si3lP/view?usp=drive_link",
        answerKey: "https://drive.google.com/file/d/1Qy_hudKmxG4vQeNEORoTsAxoVnIu1NUr/view?usp=drive_link"
      }
    ]
  }

};

window.NammaResources = window.NAMMA_TOPPERS_RESOURCES;
