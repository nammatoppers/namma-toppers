/**
 * Namma Toppers - Resource Page Logic (resources-page.js)
 * Supports 4 Top-Level Sections:
 * 1. Bilingual Resources (Classes 1–5)
 * 2. Kannada Medium (Classes 1–9)
 * 3. English Medium (Classes 1–9)
 * 4. SSLC Zone (Class 10 Board Resources)
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.NAMMA_TOPPERS_RESOURCES;
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

  // Map kebab-case category to camelCase key
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

  // Update URL parameters
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

  // Popstate event
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

  // Render Class or SSLC Medium Selector
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
          updateUrlParams();
          updateUI();
        });
        classSelectorContainer.appendChild(btn);
      }
    }
  }

  // Render Assessment or SSLC Resource Selector
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
          updateUrlParams();
          updateUI();
        });
        assessmentSelectorContainer.appendChild(btn);
      });
    }
  }

  // Render Unit or Board Prep Subcategory Selector
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

  // Render Resource Type Toggle (Question Paper | Answer Key)
  function renderTypeSelector() {
    if (!typeGroupEl || !typeSelectorContainer) return;

    if ((isSSLC && (sslcResource === 'notes' || sslcResource === 'board-prep')) || (!isSSLC && assessment === 'notes')) {
      typeGroupEl.style.display = 'none';
      return;
    }

    typeGroupEl.style.display = 'flex';
    typeSelectorContainer.innerHTML = '';

    const types = [
      { id: 'question-paper', label: 'Question Paper' },
      { id: 'answer-key', label: 'Answer Key' }
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

  // Render Subject Rows
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
        actionButtonHtml = `
          <a href="${pdfUrl.trim()}" target="_blank" rel="noopener noreferrer" class="btn-open-pdf" aria-label="${btnText} for ${subjectObj.name}">
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

      subjectsContainer.appendChild(card);
    });
  }

  // Update Breadcrumbs & Titles
  function updateBreadcrumbs() {
    if (isSSLC) {
      const medStr = sslcMedium === 'kannada' ? 'Kannada Medium' : 'English Medium';
      let resStr = sslcResource.toUpperCase();
      if (sslcResource === 'board-prep') {
        const catClean = sslcCategory.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        resStr = `Board Prep › ${catClean}`;
      } else if (sslcResource === 'notes') {
        resStr = 'Notes';
      }

      const typeStr = (sslcResource === 'notes' || sslcResource === 'board-prep') ? '' : (currentType === 'answer-key' ? 'Answer Key' : 'Question Paper');

      if (breadcrumbsEl) {
        breadcrumbsEl.innerHTML = `SSLC Zone &rsaquo; ${medStr} &rsaquo; ${resStr} ${typeStr ? '&rsaquo; <strong>' + typeStr + '</strong>' : ''}`;
      }

      if (pageTitleEl) {
        pageTitleEl.textContent = `SSLC Class 10 ${medStr} ${resStr} ${typeStr}`.trim();
      }

    } else {
      let secTitle = 'Bilingual Resources';
      if (section === 'kannada-medium') secTitle = 'Kannada Medium';
      if (section === 'english-medium') secTitle = 'English Medium';

      const classStr = `Class ${currentClassId}`;
      let assessStr = assessment.toUpperCase();
      if (assessment === 'unit-test') {
        assessStr = `Unit Test › Unit ${unit}`;
      } else if (assessment === 'notes') {
        assessStr = 'Notes';
      }

      const typeStr = assessment === 'notes' ? '' : (currentType === 'answer-key' ? 'Answer Key' : 'Question Paper');

      if (breadcrumbsEl) {
        if (typeStr) {
          breadcrumbsEl.innerHTML = `${secTitle} &rsaquo; ${classStr} &rsaquo; ${assessStr} &rsaquo; <strong>${typeStr}</strong>`;
        } else {
          breadcrumbsEl.innerHTML = `${secTitle} &rsaquo; ${classStr} &rsaquo; <strong>${assessStr}</strong>`;
        }
      }

      if (pageTitleEl) {
        pageTitleEl.textContent = `${classStr} ${assessStr} ${typeStr}`.trim();
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
