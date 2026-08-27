import { initialProjectId, projects } from './projects.js';

const pad = (value) => String(value).padStart(2, '0');

const coverTemplate = (project) => `
  <div class="closed-book">
    <div class="closed-book__pages"></div>
    <div class="closed-book__cover">
      <div class="cover-monogram" aria-hidden="true"><span>T</span><span>B</span></div>
      <div class="cover-copy">
        <p>Ontwerpboek · ${project.year}</p>
        <h3>${project.title}</h3>
        <span aria-hidden="true"></span>
        <p>${project.descriptor}</p>
      </div>
      <p class="cover-folio">Technisch Bouwadvies</p>
    </div>
  </div>
`;

export const createProjectSelector = ({ onOpen } = {}) => {
  const books = document.querySelector('#project-books');
  const stage = document.querySelector('#project-selector-stage');
  const title = document.querySelector('#selector-title');
  const summary = document.querySelector('#project-summary');
  const position = document.querySelector('#project-position');
  const live = document.querySelector('#project-selector-live');
  const openButton = document.querySelector('#open-book');
  const previousButton = document.querySelector('#previous-project');
  const nextButton = document.querySelector('#next-project');
  const initialIndex = Math.max(0, projects.findIndex(({ id }) => id === initialProjectId));
  let activeIndex = initialIndex;
  let pointerStart = null;

  books.innerHTML = projects.map((project, index) => `
    <button
      class="project-book project-book--${project.coverTone}"
      type="button"
      data-project-index="${index}"
      aria-label="Selecteer ontwerpboek ${project.title}"
    >
      ${coverTemplate(project)}
    </button>
  `).join('');

  const bookButtons = [...books.querySelectorAll('.project-book')];

  const relativePosition = (index) => {
    const difference = (index - activeIndex + projects.length) % projects.length;
    if (difference === 0) return 'active';
    if (difference === 1) return 'next';
    if (difference === projects.length - 1) return 'previous';
    return 'hidden';
  };

  const render = ({ announce = true } = {}) => {
    const project = projects[activeIndex];

    bookButtons.forEach((button, index) => {
      const placement = relativePosition(index);
      button.classList.toggle('is-active', placement === 'active');
      button.classList.toggle('is-previous', placement === 'previous');
      button.classList.toggle('is-next', placement === 'next');
      button.classList.toggle('is-hidden', placement === 'hidden');
      button.setAttribute('aria-current', placement === 'active' ? 'true' : 'false');
      button.setAttribute('aria-hidden', String(placement === 'hidden'));
      button.tabIndex = placement === 'active' ? 0 : -1;
    });

    title.textContent = project.title;
    summary.textContent = project.summary;
    position.textContent = `${pad(activeIndex + 1)} / ${pad(projects.length)}`;
    openButton.dataset.projectId = project.id;
    openButton.classList.toggle('is-unavailable', !project.available);
    openButton.setAttribute('aria-disabled', String(!project.available));
    openButton.querySelector('span').textContent = project.available ? 'Open ontwerpboek' : 'Ontwerpboek volgt binnenkort';
    document.documentElement.dataset.activeProject = project.id;

    if (announce) {
      live.textContent = `${project.title}, project ${activeIndex + 1} van ${projects.length}${project.available ? ', ontwerpboek beschikbaar' : ', binnenpagina’s volgen later'}.`;
    }
  };

  const select = (index, { announce = true, focus = false } = {}) => {
    activeIndex = (index + projects.length) % projects.length;
    render({ announce });
    if (focus) bookButtons[activeIndex].focus({ preventScroll: true });
  };

  bookButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (index === activeIndex) {
        const project = projects[activeIndex];
        if (project.available) onOpen?.(project);
        return;
      }
      select(index);
    });
  });

  previousButton.addEventListener('click', () => select(activeIndex - 1));
  nextButton.addEventListener('click', () => select(activeIndex + 1));

  openButton.addEventListener('click', () => {
    const project = projects[activeIndex];
    if (project.available) onOpen?.(project);
  });

  stage.addEventListener('pointerdown', (event) => {
    if (event.target.closest('button') && !event.target.closest('.project-book')) return;
    pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
    if (stage.setPointerCapture) {
      try {
        stage.setPointerCapture(event.pointerId);
      } catch {
        // Een systeemgebaar kan pointer capture in Safari overnemen.
      }
    }
  });

  stage.addEventListener('pointerup', (event) => {
    if (!pointerStart || pointerStart.id !== event.pointerId) return;
    const horizontal = event.clientX - pointerStart.x;
    const vertical = event.clientY - pointerStart.y;
    if (stage.hasPointerCapture?.(event.pointerId)) stage.releasePointerCapture(event.pointerId);
    pointerStart = null;
    if (Math.abs(horizontal) > 52 && Math.abs(horizontal) > Math.abs(vertical) * 1.25) {
      select(activeIndex + (horizontal < 0 ? 1 : -1));
    }
  });

  stage.addEventListener('pointercancel', (event) => {
    if (stage.hasPointerCapture?.(event.pointerId)) stage.releasePointerCapture(event.pointerId);
    pointerStart = null;
  });

  const handleKeydown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      select(activeIndex - 1, { focus: true });
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      select(activeIndex + 1, { focus: true });
    }
  };

  stage.addEventListener('keydown', handleKeydown);
  previousButton.addEventListener('keydown', handleKeydown);
  nextButton.addEventListener('keydown', handleKeydown);

  render({ announce: false });

  return {
    getActiveProject: () => projects[activeIndex],
    getActiveCover: () => bookButtons[activeIndex]?.querySelector('.closed-book'),
    selectProject: (projectId, options = {}) => {
      const index = projects.findIndex(({ id }) => id === projectId);
      if (index >= 0) select(index, options);
    }
  };
};
