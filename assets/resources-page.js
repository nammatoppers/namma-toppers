/**
 * Namma Toppers - Resource Page Logic (resources-page.js)
 * Clean, SEO-Friendly Wording & Transparent Resource Labels:
 * - Dynamic intro: "Karnataka State Board Class X Medium FA-1 Model Question Papers with Answer Keys for the 2026–27 academic year."
 * - SEO Titles: "Class X Medium FA-1 Model Question Papers & Answer Keys 2026–27 | Namma Toppers"
 * - GA4 Event Tracking & Clean Disclaimer Placement
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.NAMMA_TOPPERS_RESOURCES;
  const socials = window.NAMMA_TOPPERS_SOCIALS;

  // Helper GA4 tracking function
  function trackGAEvent(eventName, params = {}) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  }

  // Render Social Links & Track Clicks
  function renderSocialLinks() {
    if (!socials) return;

    const headerSocialsEl = document.getElementById('header-socials');
    if (headerSocialsEl) {
      headerSocialsEl.innerHTML = '';

      const iconMap = {
        instagram: {
          label: 'Instagram',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`
        },
        youtube: {
          label: 'YouTube',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>`
        },
        whatsapp: {
          label: 'WhatsApp',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`
        }
      };

      ['instagram', 'youtube', 'whatsapp'].forEach((key) => {
        const url = socials[key];
        if (url && typeof url === 'string' && url.trim() !== '') {
          const a = document.createElement('a');
          a.href = url.trim();
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.className = 'social-icon-btn';
          a.setAttribute('aria-label', `Visit Namma Toppers on ${iconMap[key].label}`);
          a.innerHTML = iconMap[key].svg;

          a.addEventListener('click', () => {
            trackGAEvent('social_click', { platform: key });
          });

          headerSocialsEl.appendChild(a);
        }
      });

      if (socials.telegram && typeof socials.telegram === 'string' && socials.telegram.trim() !== '') {
        const tgBtn = document.createElement('a');
        tgBtn.href = socials.telegram.trim();
        tgBtn.target = '_blank';
        tgBtn.rel = 'noopener noreferrer';
        tgBtn.className = 'nav-cta';
        tgBtn.setAttribute('aria-label', 'Join Telegram Channel');
        tgBtn.textContent = 'Join Telegram';

        tgBtn.addEventListener('click', () => {
          trackGAEvent('social_click', { platform: 'telegram' });
        });

        headerSocialsEl.appendChild(tgBtn);
      }
    }

    const footerSocialsEl = document.getElementById('footer-social-links');
    if (footerSocialsEl) {
      footerSocialsEl.innerHTML = '';
      const footerMap = [
        { key: 'instagram', label: 'Instagram' },
        { key: 'youtube', label: 'YouTube' },
        { key: 'telegram', label: 'Telegram' },
        { key: 'whatsapp', label: 'WhatsApp' }
      ];

      footerMap.forEach((item) => {
        const url = socials[item.key];
        if (url && typeof url === 'string' && url.trim() !== '') {
          const a = document.createElement('a');
          a.href = url.trim();
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.setAttribute('aria-label', `Follow Namma Toppers on ${item.label}`);
          a.textContent = item.label;

          a.addEventListener('click', () => {
            trackGAEvent('social_click', { platform: item.key });
          });

          footerSocialsEl.appendChild(a);
        }
      });
    }
  }

  renderSocialLinks();

  if (!data) return;

  // DOM Elements
  const breadcrumbsEl = document.getElementById('breadcrumbs-display');
  const pageTitleEl = document.getElementById('page-title-display');
  const classSelectorContainer = document.getElementById('class-selector-row');
  const assessmentSelectorContainer = document.getElementById('assessment-selector-row');
  const unitSelectorContainer = document.getElementById('unit-selector-row');
  const unitGroupEl = document.getElementById('unit-control-group');
  const typeSelectorContainer = document.getElementById('type-selector-row');
  const typeGroupEl = document.getElementById('type-control-group');
  const subjectsContainer = document.getElementById('subjects-container');

  // URL Parameter Parsing
  const urlParams = new URLSearchParams(window.location.search);
  
  let section = (urlParams.get('section') || 'bilingual').toLowerCase();
  let isSSLC = section === 'sslc';

  let sslcMedium = (urlParams.get('medium') || 'kannada').toLowerCase();
  let sslcResource = (urlParams.get('resource') || 'fa1').toLowerCase();
  let sslcCategory = (urlParams.get('category') || 'previous-year-papers').toLowerCase();

  const categoryMap = {
    'previous-year-papers': 'previousYearPapers',
    'model-question-papers': 'modelQuestionPapers',
    'blueprint': 'blueprint',
    'important-questions': 'importantQuestions',
    'predicted-questions': 'predictedQuestions',
    'answer-writing': 'answerWriting',
    'revision': 'revision'
  };

  let sectionDataKey = 'bilingual';
  let minClass = 1;
  let maxClass = 5;

  if (section === 'kannada-medium') {
    sectionDataKey = 'kannadaMedium';
    maxClass = 9;
  } else if (section === 'english-medium') {
    sectionDataKey = 'englishMedium';
    maxClass = 9;
  } else if (isSSLC) {
    sectionDataKey = 'sslc';
  } else {
    section = 'bilingual';
    sectionDataKey = 'bilingual';
    maxClass = 5;
  }

  let currentClassId = parseInt(urlParams.get('class')) || 1;
  if (currentClassId < minClass || currentClassId > maxClass) {
    currentClassId = minClass;
  }

  let assessment = (urlParams.get('assessment') || 'fa1').toLowerCase();
  if (assessment === 'notes' && (section === 'bilingual' || currentClassId < 6)) {
    assessment = 'fa1';
  }

  let unit = urlParams.get('unit') || '1';
  let unitKey = `unit${unit}`;

  let currentType = (urlParams.get('type') || 'question-paper').toLowerCase();
  if (currentType.includes('answer')) {
    currentType = 'answer-key';
  } else {
    currentType = 'question-paper';
  }

  function updateUrlParams() {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('section', section);

    if (isSSLC) {
      newUrl.searchParams.delete('class');
      newUrl.searchParams.delete('assessment');
      newUrl.searchParams.delete('unit');
      newUrl.searchParams.set('medium', sslcMedium);
      newUrl.searchParams.set('resource', sslcResource);

      if (sslcResource === 'board-preparation') {
        newUrl.searchParams.set('category', sslcCategory);
        newUrl.searchParams.delete('type');
      } else if (sslcResource === 'notes') {
        newUrl.searchParams.delete('category');
        newUrl.searchParams.delete('type');
      } else {
        newUrl.searchParams.delete('category');
        newUrl.searchParams.set('type', currentType);
      }
    } else {
      newUrl.searchParams.delete('medium');
      newUrl.searchParams.delete('resource');
      newUrl.searchParams.delete('category');
      newUrl.searchParams.set('class', currentClassId);
      newUrl.searchParams.set('assessment', assessment);

      if (assessment === 'unit-test') {
        newUrl.searchParams.set('unit', unit);
      } else {
        newUrl.searchParams.delete('unit');
      }

      if (assessment === 'notes') {
        newUrl.searchParams.delete('type');
      } else {
        newUrl.searchParams.set('type', currentType);
      }
    }

    window.history.replaceState({}, '', newUrl);
  }

  window.addEventListener('popstate', () => {
    const freshParams = new URLSearchParams(window.location.search);
    section = (freshParams.get('section') || 'bilingual').toLowerCase();
    isSSLC = section === 'sslc';

    sslcMedium = (freshParams.get('medium') || 'kannada').toLowerCase();
    sslcResource = (freshParams.get('resource') || 'fa1').toLowerCase();
    sslcCategory = (freshParams.get('category') || 'previous-year-papers').toLowerCase();

    if (section === 'kannada-medium') {
      sectionDataKey = 'kannadaMedium';
      maxClass = 9;
    } else if (section === 'english-medium') {
      sectionDataKey = 'englishMedium';
      maxClass = 9;
    } else if (isSSLC) {
      sectionDataKey = 'sslc';
    } else {
      section = 'bilingual';
      sectionDataKey = 'bilingual';
      maxClass = 5;
    }

    currentClassId = parseInt(freshParams.get('class')) || 1;
    assessment = (freshParams.get('assessment') || 'fa1').toLowerCase();
    unit = freshParams.get('unit') || '1';
    unitKey = `unit${unit}`;
    currentType = (freshParams.get('type') || 'question-paper').toLowerCase();

    updateUI();
  });

  // Render Class Selector Tabs
  function renderClassSelector() {
    if (!classSelectorContainer) return;
    classSelectorContainer.innerHTML = '';

    if (isSSLC) {
      const mediums = [
        { id: 'kannada', label: 'Kannada Medium' },
        { id: 'english', label: 'English Medium' }
      ];
      mediums.forEach((m) => {
        const btn = document.createElement('button');
        btn.className = `class-num-btn ${m.id === sslcMedium ? 'active' : ''}`;
        btn.textContent = m.label;
        btn.setAttribute('type', 'button');
        btn.addEventListener('click', () => {
          sslcMedium = m.id;
          updateUrlParams();
          updateUI();
        });
        classSelectorContainer.appendChild(btn);
      });
    } else {
      for (let c = minClass; c <= maxClass; c++) {
        const btn = document.createElement('button');
        btn.className = `class-num-btn ${c === currentClassId ? 'active' : ''}`;
        btn.textContent = `Class ${c}`;
        btn.setAttribute('type', 'button');
        btn.addEventListener('click', () => {
          currentClassId = c;
          if (c < 6 && assessment === 'notes') assessment = 'fa1';
          trackGAEvent('class_select', { section: sectionDataKey, class: c.toString() });
          updateUrlParams();
          updateUI();
        });
        classSelectorContainer.appendChild(btn);
      }
    }
  }

  // Render Assessment Toggle
  function renderAssessmentSelector() {
    if (!assessmentSelectorContainer) return;
    assessmentSelectorContainer.innerHTML = '';

    if (isSSLC) {
      const sslcOptions = [
        { id: 'fa1', label: 'FA-1' },
        { id: 'fa2', label: 'FA-2' },
        { id: 'sa1', label: 'SA-1' },
        { id: 'sa2', label: 'SA-2' },
        { id: 'notes', label: 'Notes' },
        { id: 'board-prep', label: 'Board Preparation' }
      ];

      sslcOptions.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = `type-toggle-btn ${opt.id === sslcResource ? 'active' : ''}`;
        btn.textContent = opt.label;
        btn.setAttribute('type', 'button');
        btn.addEventListener('click', () => {
          sslcResource = opt.id;
          trackGAEvent('assessment_select', { section: 'sslc', class: '10', assessment: opt.id });
          updateUrlParams();
          updateUI();
        });
        assessmentSelectorContainer.appendChild(btn);
      });
    } else {
      let options = [
        { id: 'fa1', label: 'FA-1' },
        { id: 'fa2', label: 'FA-2' },
        { id: 'sa1', label: 'SA-1' },
        { id: 'sa2', label: 'SA-2' },
        { id: 'unit-test', label: 'Unit Tests' }
      ];

      if (section !== 'bilingual' && currentClassId >= 6) {
        options.push({ id: 'notes', label: 'Notes' });
      }

      options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = `type-toggle-btn ${opt.id === assessment ? 'active' : ''}`;
        btn.textContent = opt.label;
        btn.setAttribute('type', 'button');
        btn.addEventListener('click', () => {
          assessment = opt.id;
          trackGAEvent('assessment_select', { section: sectionDataKey, class: currentClassId.toString(), assessment: opt.id });
          updateUrlParams();
          updateUI();
        });
        assessmentSelectorContainer.appendChild(btn);
      });
    }
  }

  // Render Unit Selector
  function renderUnitSelector() {
    if (!unitGroupEl || !unitSelectorContainer) return;

    if (isSSLC) {
      if (sslcResource !== 'board-prep') {
        unitGroupEl.style.display = 'none';
        return;
      }

      unitGroupEl.style.display = 'flex';
      const labelEl = unitGroupEl.querySelector('.control-label');
      if (labelEl) labelEl.textContent = 'Board Category';

      unitSelectorContainer.innerHTML = '';
      const bpCategories = [
        { id: 'previous-year-papers', label: 'Previous Year Papers' },
        { id: 'model-question-papers', label: 'Model Question Papers' },
        { id: 'blueprint', label: 'Blueprint' },
        { id: 'important-questions', label: 'Important Questions' },
        { id: 'predicted-questions', label: 'Predicted Questions' },
        { id: 'answer-writing', label: 'Answer Writing' },
        { id: 'revision', label: 'Revision' }
      ];

      bpCategories.forEach((cat) => {
        const btn = document.createElement('button');
        btn.className = `class-num-btn ${cat.id === sslcCategory ? 'active' : ''}`;
        btn.textContent = cat.label;
        btn.setAttribute('type', 'button');
        btn.addEventListener('click', () => {
          sslcCategory = cat.id;
          updateUrlParams();
          updateUI();
        });
        unitSelectorContainer.appendChild(btn);
      });

    } else {
      if (assessment !== 'unit-test') {
        unitGroupEl.style.display = 'none';
        return;
      }

      unitGroupEl.style.display = 'flex';
      const labelEl = unitGroupEl.querySelector('.control-label');
      if (labelEl) labelEl.textContent = 'Unit';

      unitSelectorContainer.innerHTML = '';
      const sectionObj = data[sectionDataKey];
      const classData = sectionObj && sectionObj.classes ? sectionObj.classes[currentClassId.toString()] : null;
      if (!classData || !classData.unitTests) return;

      const availableUnits = Object.keys(classData.unitTests);
      availableUnits.forEach((uK, idx) => {
        const uNum = (idx + 1).toString();
        const btn = document.createElement('button');
        btn.className = `class-num-btn ${uK === unitKey ? 'active' : ''}`;
        btn.textContent = `Unit ${uNum}`;
        btn.setAttribute('type', 'button');
        btn.addEventListener('click', () => {
          unit = uNum;
          unitKey = uK;
          updateUrlParams();
          updateUI();
        });
        unitSelectorContainer.appendChild(btn);
      });
    }
  }

  // Render Resource Type Toggle (Supporting Model / Official / Previous distinctions)
  function renderTypeSelector() {
    if (!typeGroupEl || !typeSelectorContainer) return;

    if ((isSSLC && (sslcResource === 'notes' || sslcResource === 'board-prep')) || (!isSSLC && assessment === 'notes')) {
      typeGroupEl.style.display = 'none';
      return;
    }

    typeGroupEl.style.display = 'flex';
    typeSelectorContainer.innerHTML = '';

    let qpLabel = 'Model Question Paper';
    let akLabel = 'Model Answer Key';

    if (isSSLC && sslcResource === 'board-prep' && sslcCategory === 'previous-year-papers') {
      qpLabel = 'Previous Question Paper';
      akLabel = 'Answer Key';
    } else if (isSSLC && sslcResource === 'board-prep' && sslcCategory === 'official-model-papers') {
      qpLabel = 'Official Model Question Paper';
      akLabel = 'Official Answer Key';
    }

    const types = [
      { id: 'question-paper', label: qpLabel },
      { id: 'answer-key', label: akLabel }
    ];

    types.forEach((item) => {
      const btn = document.createElement('button');
      btn.className = `type-toggle-btn ${item.id === currentType ? 'active' : ''}`;
      btn.textContent = item.label;
      btn.setAttribute('type', 'button');
      btn.addEventListener('click', () => {
        currentType = item.id;
        updateUrlParams();
        updateUI();
      });
      typeSelectorContainer.appendChild(btn);
    });
  }

  // Render Subject Rows + GA4 Event Tracking on Open PDF / Open Notes
  function renderSubjects() {
    if (!subjectsContainer) return;
    subjectsContainer.innerHTML = '';

    let targetSubjects = null;
    let isNotesMode = false;

    if (isSSLC) {
      const mediumKey = sslcMedium === 'kannada' ? 'kannadaMedium' : 'englishMedium';
      const sslcData = data.sslc ? data.sslc[mediumKey] : null;

      if (!sslcData) return;

      if (sslcResource === 'notes') {
        targetSubjects = sslcData.notes;
        isNotesMode = true;
      } else if (sslcResource === 'board-prep') {
        const catKey = categoryMap[sslcCategory] || 'previousYearPapers';
        targetSubjects = sslcData.boardPreparation ? sslcData.boardPreparation[catKey] : null;
        isNotesMode = false;
      } else {
        targetSubjects = sslcData[sslcResource];
        isNotesMode = false;
      }

    } else {
      const sectionObj = data[sectionDataKey];
      const classData = sectionObj && sectionObj.classes ? sectionObj.classes[currentClassId.toString()] : null;
      if (!classData) return;

      if (assessment === 'notes') {
        targetSubjects = classData.notes;
        isNotesMode = true;
      } else if (assessment === 'unit-test') {
        targetSubjects = classData.unitTests ? classData.unitTests[unitKey] : null;
        isNotesMode = false;
      } else {
        targetSubjects = classData[assessment];
        isNotesMode = false;
      }
    }

    if (!targetSubjects) return;

    const isAnswerKey = currentType === 'answer-key';
    const keyType = isAnswerKey ? 'answerKey' : 'questionPaper';

    const subjKeys = Object.keys(targetSubjects);

    subjKeys.forEach((subjKey, idx) => {
      const subjectObj = targetSubjects[subjKey];
      if (!subjectObj) return;

      const card = document.createElement('div');
      card.className = 'subject-item-card staggered-fade';
      card.style.animationDelay = `${idx * 40}ms`;

      const iconCode = subjectObj.code || subjectObj.name.substring(0, 3).toUpperCase();
      let pdfUrl = '';

      if (isNotesMode) {
        pdfUrl = subjectObj.notesUrl;
      } else if (isSSLC && sslcResource === 'board-prep') {
        pdfUrl = subjectObj.pdfUrl;
      } else {
        pdfUrl = subjectObj[keyType];
      }

      let actionButtonHtml = '';

      if (pdfUrl && typeof pdfUrl === 'string' && pdfUrl.trim() !== '' && pdfUrl.trim() !== '#') {
        const btnText = isNotesMode ? 'Open Notes' : 'Open PDF';
        const ariaLabelText = isNotesMode ? `Open Notes for ${subjectObj.name}` : (isAnswerKey ? `Open Model Answer Key for ${subjectObj.name}` : `Open Model Question Paper for ${subjectObj.name}`);
        actionButtonHtml = `
          <a href="${pdfUrl.trim()}" target="_blank" rel="noopener noreferrer" class="btn-open-pdf" aria-label="${ariaLabelText}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="12" y1="18" x2="12" y2="12"></line>
              <polyline points="9 15 12 18 15 15"></polyline>
            </svg>
            ${btnText}
          </a>
        `;
      } else {
        actionButtonHtml = `
          <button class="badge-coming-soon" disabled aria-label="Coming Soon for ${subjectObj.name}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Coming Soon
          </button>
        `;
      }

      card.innerHTML = `
        <div class="subject-info">
          <div class="subject-icon-box">${iconCode}</div>
          <div class="subject-name">${subjectObj.name}</div>
        </div>
        ${actionButtonHtml}
      `;

      // Attach GA4 event listener on click
      const openAnchor = card.querySelector('.btn-open-pdf');
      if (openAnchor && pdfUrl) {
        openAnchor.addEventListener('click', () => {
          trackGAEvent('resource_open', {
            medium: isSSLC ? `${sslcMedium}-medium` : section,
            class: isSSLC ? '10' : currentClassId.toString(),
            assessment: isSSLC ? sslcResource : assessment,
            unit: assessment === 'unit-test' ? unit : '',
            subject: subjKey,
            resource_type: isNotesMode ? 'notes' : (isSSLC && sslcResource === 'board-prep' ? sslcCategory : currentType),
            resource_url: pdfUrl.trim()
          });
        });
      }

      subjectsContainer.appendChild(card);
    });
  }

  // Update Breadcrumbs, Dynamic Intro & Document Titles
  function updateBreadcrumbs() {
    let seoTitle = "";
    let seoDesc = "";

    if (isSSLC) {
      const medStr = sslcMedium === 'kannada' ? 'Kannada Medium' : 'English Medium';
      let resStr = sslcResource.toUpperCase();

      if (sslcResource === 'board-prep') {
        const catClean = sslcCategory.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        resStr = `Board Prep › ${catClean}`;
        seoTitle = `Class 10 SSLC ${medStr} ${catClean} 2026–27 | Namma Toppers`;
        seoDesc = `Access Karnataka SSLC Class 10 ${medStr} ${catClean} resources for the 2026–27 academic year.`;
      } else if (sslcResource === 'notes') {
        resStr = 'Notes';
        seoTitle = `Class 10 SSLC ${medStr} Notes 2026–27 | Namma Toppers`;
        seoDesc = `Access Karnataka SSLC Class 10 ${medStr} Notes for the 2026–27 academic year.`;
      } else {
        seoTitle = `Class 10 SSLC ${medStr} ${resStr} Model Question Papers & Answer Keys 2026–27 | Namma Toppers`;
        seoDesc = `Access Karnataka SSLC Class 10 ${medStr} ${resStr} Model Question Papers and Answer Keys for the 2026–27 academic year.`;
      }

      const typeStr = (sslcResource === 'notes' || sslcResource === 'board-prep') ? '' : (currentType === 'answer-key' ? 'Model Answer Key' : 'Model Question Paper');

      if (breadcrumbsEl) {
        breadcrumbsEl.innerHTML = `SSLC Zone &rsaquo; ${medStr} &rsaquo; ${resStr} ${typeStr ? '&rsaquo; <strong>' + typeStr + '</strong>' : ''}`;
      }

      if (pageTitleEl) {
        pageTitleEl.textContent = `SSLC Class 10 ${medStr} ${resStr} ${typeStr}`.trim();
      }

    } else {
      let secTitle = 'Bilingual';
      if (section === 'kannada-medium') secTitle = 'Kannada Medium';
      if (section === 'english-medium') secTitle = 'English Medium';

      const classStr = `Class ${currentClassId}`;
      let assessTag = assessment.toUpperCase();
      if (assessment === 'unit-test') {
        assessTag = `Unit Test Unit ${unit}`;
      } else if (assessment === 'notes') {
        assessTag = 'Notes';
      }

      if (section === 'kannada-medium') {
        if (assessment === 'notes') {
          seoTitle = `Class ${currentClassId} Kannada Medium Notes 2026–27 | Namma Toppers`;
          seoDesc = `Access Karnataka State Board Class ${currentClassId} Kannada Medium Notes for the 2026–27 academic year.`;
        } else {
          seoTitle = `Class ${currentClassId} Kannada Medium ${assessTag} Model Question Papers & Answer Keys 2026–27 | Namma Toppers`;
          seoDesc = `Access Karnataka State Board Class ${currentClassId} Kannada Medium ${assessTag} Model Question Papers and Answer Keys for the 2026–27 academic year.`;
        }
      } else if (section === 'english-medium') {
        if (assessment === 'notes') {
          seoTitle = `Class ${currentClassId} English Medium Notes 2026–27 | Namma Toppers`;
          seoDesc = `Access Karnataka State Board Class ${currentClassId} English Medium Notes for the 2026–27 academic year.`;
        } else {
          seoTitle = `Class ${currentClassId} English Medium ${assessTag} Model Question Papers & Answer Keys 2026–27 | Namma Toppers`;
          seoDesc = `Access Karnataka State Board Class ${currentClassId} English Medium ${assessTag} Model Question Papers and Answer Keys for the 2026–27 academic year.`;
        }
      } else {
        seoTitle = `Class ${currentClassId} Bilingual ${assessTag} Model Question Papers & Answer Keys 2026–27 | Namma Toppers`;
        seoDesc = `Access Karnataka State Board Bilingual Class ${currentClassId} ${assessTag} Model Question Papers and Answer Keys for the 2026–27 academic year.`;
      }

      if (breadcrumbsEl) {
        const typeLabel = currentType === 'answer-key' ? 'Model Answer Key' : 'Model Question Paper';
        const displayAssess = assessment === 'unit-test' ? `Unit Test &rsaquo; Unit ${unit}` : (assessment === 'notes' ? 'Notes' : assessment.toUpperCase());
        if (assessment === 'notes') {
          breadcrumbsEl.innerHTML = `${secTitle} Resources &rsaquo; ${classStr} &rsaquo; <strong>${displayAssess}</strong>`;
        } else {
          breadcrumbsEl.innerHTML = `${secTitle} Resources &rsaquo; ${classStr} &rsaquo; ${displayAssess} &rsaquo; <strong>${typeLabel}</strong>`;
        }
      }

      if (pageTitleEl) {
        const typeLabel = currentType === 'answer-key' ? 'Model Answer Key' : 'Model Question Paper';
        const displayAssess = assessment === 'unit-test' ? `Unit Test Unit ${unit}` : (assessment === 'notes' ? 'Notes' : assessment.toUpperCase());
        pageTitleEl.textContent = `${classStr} ${displayAssess} ${assessment === 'notes' ? '' : typeLabel}`.trim();
      }
    }

    if (seoTitle) document.title = seoTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && seoDesc) {
      metaDesc.setAttribute('content', seoDesc);
    }

    // Dynamic Intro Line according to exact formula
    const introEl = document.getElementById('resource-dynamic-intro');
    if (introEl) {
      if (isSSLC) {
        const medStr = sslcMedium === 'kannada' ? 'Kannada Medium' : 'English Medium';
        if (sslcResource === 'board-prep') {
          const catClean = sslcCategory.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
          introEl.textContent = `Karnataka SSLC Class 10 ${medStr} ${catClean} for the 2026–27 academic year.`;
        } else if (sslcResource === 'notes') {
          introEl.textContent = `Karnataka SSLC Class 10 ${medStr} Notes for the 2026–27 academic year.`;
        } else {
          introEl.textContent = `Karnataka SSLC Class 10 ${medStr} ${sslcResource.toUpperCase()} Model Question Papers with Answer Keys for the 2026–27 academic year.`;
        }
      } else {
        const classStr = `Class ${currentClassId}`;
        const assessTag = assessment === 'unit-test' ? `Unit Test Unit ${unit}` : (assessment === 'notes' ? 'Notes' : assessment.toUpperCase());
        
        if (section === 'kannada-medium') {
          if (assessment === 'notes') {
            introEl.textContent = `Karnataka State Board Class ${currentClassId} Kannada Medium Notes for the 2026–27 academic year.`;
          } else {
            introEl.textContent = `Karnataka State Board Class ${currentClassId} Kannada Medium ${assessTag} Model Question Papers with Answer Keys for the 2026–27 academic year.`;
          }
        } else if (section === 'english-medium') {
          if (assessment === 'notes') {
            introEl.textContent = `Karnataka State Board Class ${currentClassId} English Medium Notes for the 2026–27 academic year.`;
          } else {
            introEl.textContent = `Karnataka State Board Class ${currentClassId} English Medium ${assessTag} Model Question Papers with Answer Keys for the 2026–27 academic year.`;
          }
        } else {
          introEl.textContent = `Karnataka State Board Bilingual Class ${currentClassId} ${assessTag} Model Question Papers with Answer Keys for the 2026–27 academic year.`;
        }
      }
    }
  }

  // Refresh UI
  function updateUI() {
    renderClassSelector();
    renderAssessmentSelector();
    renderUnitSelector();
    renderTypeSelector();
    renderSubjects();
    updateBreadcrumbs();
  }

  // Initial Run
  updateUrlParams();
  updateUI();
});
