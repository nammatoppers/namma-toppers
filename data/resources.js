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
        kannada: { name: "Kannada", code: "KAN", questionPaper: "", answerKey: "" },
        english: { name: "English", code: "ENG", questionPaper: "", answerKey: "" },
        hindi: { name: "Hindi", code: "HIN", questionPaper: "", answerKey: "" },
        mathematics: { name: "Mathematics", code: "MATH", questionPaper: "", answerKey: "" },
        science: { name: "Science", code: "SCI", questionPaper: "", answerKey: "" },
        socialScience: { name: "Social Science", code: "SS", questionPaper: "", answerKey: "" }
      }),
      "8": createHigherClass("Class 8", {
        kannada: { name: "Kannada", code: "KAN", questionPaper: "", answerKey: "" },
        english: { name: "English", code: "ENG", questionPaper: "", answerKey: "" },
        hindi: { name: "Hindi", code: "HIN", questionPaper: "", answerKey: "" },
        mathematics: { name: "Mathematics", code: "MATH", questionPaper: "", answerKey: "" },
        science: { name: "Science", code: "SCI", questionPaper: "", answerKey: "" },
        socialScience: { name: "Social Science", code: "SS", questionPaper: "", answerKey: "" }
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
  }

};

window.NammaResources = window.NAMMA_TOPPERS_RESOURCES;
