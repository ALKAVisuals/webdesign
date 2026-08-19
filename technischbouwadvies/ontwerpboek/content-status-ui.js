import { pages } from './book-data.js';
import { getContentStatus, getStatusSummary } from './content-status.js';

const leftPage = document.getElementById('leftPage');
const rightPage = document.getElementById('rightPage');
const dotsHost = document.getElementById('pageDots');
const statusOverview = document.getElementById('statusOverview');
const statusCounts = document.getElementById('statusCounts');
const statusTrack = document.getElementById('statusTrack');

const isMobile = () => window.matchMedia('(max-width: 760px)').matches;

function pageByNumber(value) {
  const number = Number.parseInt(value, 10);
  if (!Number.isFinite(number) || number < 1) return null;
  return pages[number - 1] || null;
}

function decorateBookPage(host) {
  if (!host) return;
  const page = pageByNumber(host.dataset.page);
  const heading = host.querySelector('.page-heading');
  if (!page || !heading) return;

  const status = getContentStatus(page.id);
  host.dataset.contentStatus = status.key;

  heading.querySelector('.content-status')?.remove();
  const badge = document.createElement('span');
  badge.className = `content-status status-${status.key}`;
  badge.textContent = status.label;
  badge.title = status.description;
  heading.appendChild(badge);
}

function decorateVisiblePages() {
  decorateBookPage(leftPage);
  decorateBookPage(rightPage);
}

function decorateDots() {
  if (!dotsHost) return;
  [...dotsHost.children].forEach((dot, index) => {
    dot.classList.remove('status-demo', 'status-progress', 'status-final');
    const pageIndex = isMobile() ? index : index * 2;
    const page = pages[pageIndex];
    if (!page) return;
    const status = getContentStatus(page.id);
    dot.classList.add(`status-${status.key}`);
    dot.title = `${page.title} · ${status.label}`;
  });
}

function renderOverview() {
  if (!statusOverview || !statusCounts || !statusTrack) return;
  const summary = getStatusSummary(pages);
  const percent = (value) => summary.total ? `${(value / summary.total) * 100}%` : '0%';

  statusOverview.querySelector('strong').textContent = `${summary.total} hoofdstukken · contentstatus`;
  statusCounts.innerHTML = `
    <span class="demo"><i></i>${summary.demo} demo</span>
    <span class="progress"><i></i>${summary.progress} in uitwerking</span>
    <span class="final"><i></i>${summary.final} definitief</span>`;
  statusTrack.innerHTML = `
    <span class="demo" style="flex-basis:${percent(summary.demo)}"></span>
    <span class="progress" style="flex-basis:${percent(summary.progress)}"></span>
    <span class="final" style="flex-basis:${percent(summary.final)}"></span>`;
}

const pageObserver = new MutationObserver(decorateVisiblePages);
[leftPage, rightPage].filter(Boolean).forEach((host) => {
  pageObserver.observe(host, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-page'] });
});

if (dotsHost) {
  const dotsObserver = new MutationObserver(decorateDots);
  dotsObserver.observe(dotsHost, { childList: true });
}

window.addEventListener('resize', decorateDots);

renderOverview();
decorateVisiblePages();
decorateDots();
