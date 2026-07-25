/**
 * Namma Toppers - Homepage Interactive Logic (app.js)
 * Manages Progressive Disclosure Controls for 4 Main Sections:
 * 1. Bilingual Resources (Classes 1–5)
 * 2. Kannada Medium (Classes 1–9)
 * 3. English Medium (Classes 1–9)
 * 4. SSLC Zone (Class 10 Board Resources)
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.NAMMA_TOPPERS_RESOURCES;

  // 1. Dynamic Footer Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Mobile Nav Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.textContent = isOpen ? '✕' : '☰';
    });
  }

  // 3. Header Scroll Effect
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // 4. Scroll Reveal Animations
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      el.classList.add('revealed');
    });
  }

  if (!data) return;

  /**
   * Helper function for Sections 1, 2, 3 (Bilingual, Kannada, English)
   */
  function initStandardSectionController(config) {
    const {
      secKey,          
      sectionDataKey,  
      minClass,
      maxClass,
      classTabsId,
      assessTabsId,
      unitWrapperId,
      unitTabsId,
      titleElId,
      tagElId,
      buttonsContainerId
    } = config;

    let state = {
      classId: minClass,
      assessment: 'fa1',
      unit: 'unit1'
    };

    const classTabsEl = document.getElementById(classTabsId);
    const assessTabsEl = document.getElementById(assessTabsId);
    const unitWrapperEl = document.getElementById(unitWrapperId);
    const unitTabsEl = document.getElementById(unitTabsId);
    const titleEl = document.getElementById(titleElId);
    const tagEl = document.getElementById(tagElId);
    const buttonsContainer = document.getElementById(buttonsContainerId);

    function renderClassTabs() {
      if (!classTabsEl) return;
      classTabsEl.innerHTML = '';

      for (let c = minClass; c <= maxClass; c++) {
        const btn = document.createElement('button');
        btn.className = `class-tab-btn ${c === state.classId ? 'active' : ''}`;
        btn.textContent = `Class ${c}`;
        btn.setAttribute('type', 'button');

        btn.addEventListener('click', () => {
          state.classId = c;
          if (c < 6 && state.assessment === 'notes') {
            state.assessment = 'fa1';
          }
          updateUI();
        });

        classTabsEl.appendChild(btn);
      }
    }

    function renderAssessTabs() {
      if (!assessTabsEl) return;
      assessTabsEl.innerHTML = '';

      let options = [
        { id: 'fa1', label: 'FA-1' },
        { id: 'fa2', label: 'FA-2' },
        { id: 'sa1', label: 'SA-1' },
        { id: 'sa2', label: 'SA-2' },
        { id: 'unit-test', label: 'Unit Tests' }
      ];

      if (secKey !== 'bilingual' && state.classId >= 6) {
        options.push({ id: 'notes', label: 'Notes' });
      }

      options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = `segmented-btn ${opt.id === state.assessment ? 'active' : ''}`;
        btn.textContent = opt.label;
        btn.setAttribute('type', 'button');

        btn.addEventListener('click', () => {
          state.assessment = opt.id;
          updateUI();
        });

        assessTabsEl.appendChild(btn);
      });
    }

    function renderUnitTabs() {
      if (!unitTabsEl) return;
      unitTabsEl.innerHTML = '';

      const sectionObj = data[sectionDataKey];
      const classData = sectionObj && sectionObj.classes ? sectionObj.classes[state.classId.toString()] : null;
      if (!classData || !classData.unitTests) return;

      const units = Object.keys(classData.unitTests);
      units.forEach((uKey, idx) => {
        const uNum = idx + 1;
        const btn = document.createElement('button');
        btn.className = `unit-tab-btn ${uKey === state.unit ? 'active' : ''}`;
        btn.textContent = `Unit ${uNum}`;
        btn.setAttribute('type', 'button');

        btn.addEventListener('click', () => {
          state.unit = uKey;
          updateUI();
        });

        unitTabsEl.appendChild(btn);
      });
    }

    function renderActionButtons() {
      if (!buttonsContainer) return;
      buttonsContainer.innerHTML = '';

      const sectionParam = sectionDataKey === 'bilingual' ? 'bilingual' : (sectionDataKey === 'kannadaMedium' ? 'kannada-medium' : 'english-medium');

      if (state.assessment === 'notes') {
        const notesHref = `resources.html?section=${sectionParam}&class=${state.classId}&assessment=notes`;
        const aBtn = document.createElement('a');
        aBtn.className = 'action-btn action-ak';
        aBtn.style.maxWidth = '340px';
        aBtn.style.margin = '0 auto';
        aBtn.href = notesHref;
        aBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          Open Notes
        `;
        buttonsContainer.appendChild(aBtn);
      } else {
        let qpHref = '';
        let akHref = '';

        if (state.assessment === 'unit-test') {
          const uNum = state.unit.replace('unit', '');
          qpHref = `resources.html?section=${sectionParam}&class=${state.classId}&assessment=unit-test&unit=${uNum}&type=question-paper`;
          akHref = `resources.html?section=${sectionParam}&class=${state.classId}&assessment=unit-test&unit=${uNum}&type=answer-key`;
        } else {
          qpHref = `resources.html?section=${sectionParam}&class=${state.classId}&assessment=${state.assessment}&type=question-paper`;
          akHref = `resources.html?section=${sectionParam}&class=${state.classId}&assessment=${state.assessment}&type=answer-key`;
        }

        const qpBtn = document.createElement('a');
        qpBtn.className = 'action-btn action-qp';
        qpBtn.href = qpHref;
        qpBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
          </svg>
          Question Paper
        `;

        const akBtn = document.createElement('a');
        akBtn.className = 'action-btn action-ak';
        akBtn.href = akHref;
        akBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
          </svg>
          Answer Key
        `;

        buttonsContainer.appendChild(qpBtn);
        buttonsContainer.appendChild(akBtn);
      }
    }

    function updateUI() {
      renderClassTabs();
      renderAssessTabs();

      if (titleEl) titleEl.textContent = `Class ${state.classId}`;

      let tagLabel = state.assessment.toUpperCase();
      if (state.assessment === 'unit-test') {
        const uNum = state.unit.replace('unit', '');
        tagLabel = `Unit ${uNum}`;
        if (unitWrapperEl) {
          unitWrapperEl.style.display = 'block';
          requestAnimationFrame(() => unitWrapperEl.classList.add('animate-in'));
        }
        renderUnitTabs();
      } else {
        if (unitWrapperEl) {
          unitWrapperEl.style.display = 'none';
          unitWrapperEl.classList.remove('animate-in');
        }
        if (state.assessment === 'notes') tagLabel = 'Notes';
      }

      if (tagEl) tagEl.textContent = tagLabel;

      renderActionButtons();
    }

    updateUI();
  }

  /**
   * Controller for Section 4: SSLC Zone
   */
  function initSSLCController() {
    let sslcState = {
      medium: 'kannada', // 'kannada' or 'english'
      resource: 'fa1',  // 'fa1', 'fa2', 'sa1', 'sa2', 'notes', 'board-prep'
      category: 'previousYearPapers'
    };

    const mediumTabsEl = document.getElementById('sslc-medium-tabs');
    const resourceTabsEl = document.getElementById('sslc-resource-tabs');
    const boardPrepWrapperEl = document.getElementById('sslc-board-prep-wrapper');
    const boardPrepTabsEl = document.getElementById('sslc-board-prep-tabs');
    const mediumTitleEl = document.getElementById('sslc-selected-medium-title');
    const resourceTagEl = document.getElementById('sslc-selected-resource-tag');
    const buttonsContainer = document.getElementById('sslc-buttons-container');

    // 1. Render Medium Tabs
    function renderMediumTabs() {
      if (!mediumTabsEl) return;
      mediumTabsEl.innerHTML = '';

      const mediums = [
        { id: 'kannada', label: 'Kannada Medium' },
        { id: 'english', label: 'English Medium' }
      ];

      mediums.forEach((m) => {
        const btn = document.createElement('button');
        btn.className = `segmented-btn ${m.id === sslcState.medium ? 'active' : ''}`;
        btn.textContent = m.label;
        btn.setAttribute('type', 'button');

        btn.addEventListener('click', () => {
          sslcState.medium = m.id;
          updateSSLCUI();
        });

        mediumTabsEl.appendChild(btn);
      });
    }

    // 2. Render Resource Type Tabs
    function renderResourceTabs() {
      if (!resourceTabsEl) return;
      resourceTabsEl.innerHTML = '';

      const resources = [
        { id: 'fa1', label: 'FA-1' },
        { id: 'fa2', label: 'FA-2' },
        { id: 'sa1', label: 'SA-1' },
        { id: 'sa2', label: 'SA-2' },
        { id: 'notes', label: 'Notes' },
        { id: 'board-prep', label: 'Board Preparation' }
      ];

      resources.forEach((r) => {
        const btn = document.createElement('button');
        btn.className = `segmented-btn ${r.id === sslcState.resource ? 'active' : ''}`;
        btn.textContent = r.label;
        btn.setAttribute('type', 'button');

        btn.addEventListener('click', () => {
          sslcState.resource = r.id;
          updateSSLCUI();
        });

        resourceTabsEl.appendChild(btn);
      });
    }

    // 3. Render Board Preparation Subcategories
    function renderBoardPrepTabs() {
      if (!boardPrepTabsEl) return;
      boardPrepTabsEl.innerHTML = '';

      const categories = [
        { id: 'previousYearPapers', label: 'Previous Year Papers' },
        { id: 'modelQuestionPapers', label: 'Model Question Papers' },
        { id: 'blueprint', label: 'Blueprint' },
        { id: 'importantQuestions', label: 'Important Questions' },
        { id: 'predictedQuestions', label: 'Predicted Questions' },
        { id: 'answerWriting', label: 'Answer Writing' },
        { id: 'revision', label: 'Revision' }
      ];

      categories.forEach((cat) => {
        const btn = document.createElement('button');
        btn.className = `unit-tab-btn ${cat.id === sslcState.category ? 'active' : ''}`;
        btn.textContent = cat.label;
        btn.setAttribute('type', 'button');

        btn.addEventListener('click', () => {
          sslcState.category = cat.id;
          updateSSLCUI();
        });

        boardPrepTabsEl.appendChild(btn);
      });
    }

    // 4. Render Action Buttons
    function renderActionButtons() {
      if (!buttonsContainer) return;
      buttonsContainer.innerHTML = '';

      if (sslcState.resource === 'notes') {
        const notesHref = `resources.html?section=sslc&medium=${sslcState.medium}&resource=notes`;
        const aBtn = document.createElement('a');
        aBtn.className = 'action-btn action-ak';
        aBtn.style.maxWidth = '340px';
        aBtn.style.margin = '0 auto';
        aBtn.href = notesHref;
        aBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          Open Notes
        `;
        buttonsContainer.appendChild(aBtn);
      } else if (sslcState.resource === 'board-prep') {
        const catKebab = sslcState.category.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        const bpHref = `resources.html?section=sslc&medium=${sslcState.medium}&resource=board-preparation&category=${catKebab}`;
        const bpBtn = document.createElement('a');
        bpBtn.className = 'action-btn action-qp';
        bpBtn.style.maxWidth = '340px';
        bpBtn.style.margin = '0 auto';
        bpBtn.href = bpHref;
        bpBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          Browse Board Resources
        `;
        buttonsContainer.appendChild(bpBtn);
      } else {
        const qpHref = `resources.html?section=sslc&medium=${sslcState.medium}&resource=${sslcState.resource}&type=question-paper`;
        const akHref = `resources.html?section=sslc&medium=${sslcState.medium}&resource=${sslcState.resource}&type=answer-key`;

        const qpBtn = document.createElement('a');
        qpBtn.className = 'action-btn action-qp';
        qpBtn.href = qpHref;
        qpBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          Question Paper
        `;

        const akBtn = document.createElement('a');
        akBtn.className = 'action-btn action-ak';
        akBtn.href = akHref;
        akBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
          </svg>
          Answer Key
        `;

        buttonsContainer.appendChild(qpBtn);
        buttonsContainer.appendChild(akBtn);
      }
    }

    function updateSSLCUI() {
      renderMediumTabs();
      renderResourceTabs();

      if (mediumTitleEl) {
        mediumTitleEl.textContent = sslcState.medium === 'kannada' ? 'Kannada Medium' : 'English Medium';
      }

      let tagLabel = sslcState.resource.toUpperCase();
      if (sslcState.resource === 'board-prep') {
        tagLabel = 'Board Prep';
        if (boardPrepWrapperEl) {
          boardPrepWrapperEl.style.display = 'block';
          requestAnimationFrame(() => boardPrepWrapperEl.classList.add('animate-in'));
        }
        renderBoardPrepTabs();
      } else {
        if (boardPrepWrapperEl) {
          boardPrepWrapperEl.style.display = 'none';
          boardPrepWrapperEl.classList.remove('animate-in');
        }
        if (sslcState.resource === 'notes') tagLabel = 'Notes';
      }

      if (resourceTagEl) resourceTagEl.textContent = tagLabel;

      renderActionButtons();
    }

    updateSSLCUI();
  }

  // Initialize All 4 Section Controllers
  initStandardSectionController({
    secKey: 'bilingual',
    sectionDataKey: 'bilingual',
    minClass: 1,
    maxClass: 5,
    classTabsId: 'bilingual-class-tabs',
    assessTabsId: 'bilingual-assessment-tabs',
    unitWrapperId: 'bilingual-unit-wrapper',
    unitTabsId: 'bilingual-unit-tabs',
    titleElId: 'bilingual-selected-class-title',
    tagElId: 'bilingual-selected-assessment-tag',
    buttonsContainerId: 'bilingual-buttons-container'
  });

  initStandardSectionController({
    secKey: 'kannada',
    sectionDataKey: 'kannadaMedium',
    minClass: 1,
    maxClass: 9,
    classTabsId: 'kannada-class-tabs',
    assessTabsId: 'kannada-assessment-tabs',
    unitWrapperId: 'kannada-unit-wrapper',
    unitTabsId: 'kannada-unit-tabs',
    titleElId: 'kannada-selected-class-title',
    tagElId: 'kannada-selected-assessment-tag',
    buttonsContainerId: 'kannada-buttons-container'
  });

  initStandardSectionController({
    secKey: 'english',
    sectionDataKey: 'englishMedium',
    minClass: 1,
    maxClass: 9,
    classTabsId: 'english-class-tabs',
    assessTabsId: 'english-assessment-tabs',
    unitWrapperId: 'english-unit-wrapper',
    unitTabsId: 'english-unit-tabs',
    titleElId: 'english-selected-class-title',
    tagElId: 'english-selected-assessment-tag',
    buttonsContainerId: 'english-buttons-container'
  });

  initSSLCController();

});
