/* ══════════════════════════════════════════════════════════════
   app.js — Logique principale
   Dépend de : data.js (variable globale PROGRAM)
══════════════════════════════════════════════════════════════ */

'use strict';

/* ── Service Worker (PWA hors-ligne) ────────────────────────── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () =>
    navigator.serviceWorker.register('sw.js').catch(() => {})
  );
}

/* ── State ──────────────────────────────────────────────────── */
const state = {
  view:           'home',     // 'home' | 'session'
  activeSession:  null,
  expandedNotes:  {},         // { exId: bool }
  substitutions:  {},         // { exId: substituteObj }
  sheetOpen:      false,
};

/* ── Persistence (localStorage) ─────────────────────────────── */
const LS_KEY = 'gym_completed_v1';

function loadCompleted() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; }
  catch { return {}; }
}

function saveCompleted(data) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(data)); }
  catch { /* quota dépassé — on ignore */ }
}

let completed = loadCompleted();
// Structure : { 'session_1': ['ex_1_1', 'ex_1_3', ...], ... }

function isExDone(sessionId, exId) {
  return (completed[sessionId] || []).includes(exId);
}

function toggleExDone(sessionId, exId) {
  if (!completed[sessionId]) completed[sessionId] = [];
  const idx = completed[sessionId].indexOf(exId);
  if (idx === -1) completed[sessionId].push(exId);
  else completed[sessionId].splice(idx, 1);
  saveCompleted(completed);
}

function resetSession(sessionId) {
  completed[sessionId] = [];
  state.substitutions  = {};
  state.expandedNotes  = {};
  saveCompleted(completed);
}

function getProgress(sessionId, total) {
  const done = (completed[sessionId] || []).length;
  const pct  = total ? Math.round(done / total * 100) : 0;
  return { done, total, pct };
}

/* ── Accent color helper ─────────────────────────────────────── */
function setAccent(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const root = document.documentElement;
  root.style.setProperty('--accent', hex);
  root.style.setProperty('--accent-rgb', `${r},${g},${b}`);
}

/* ── SVG Icons ──────────────────────────────────────────────── */
const ICONS = {
  arrow:  `<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5h9M8 3l4.5 4.5L8 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  back:   `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  check:  `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6.5l3 3 5-5.5" stroke="white" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  notes:  `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.5 2h9M1.5 5.5h6M1.5 9h4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  swap:   `<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 4h8.5M9 1.5l3 2.5-3 2.5M4 9H1M4 9l-2 2 2 2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  flame:  `🔥`,
  trophy: `🏆`,
  clock:  `⏱`,
};

/* ════════════════════════════════════════════════════════════
   HOME VIEW
════════════════════════════════════════════════════════════ */
function renderHome() {
  state.view          = 'home';
  state.activeSession = null;
  setAccent('#6C63FF');

  const html = `
    <div class="home">
      <header class="home-header">
        <p class="home-eyebrow">Programme de</p>
        <h1 class="home-title">${PROGRAM.meta.athlete}<span class="accent">.</span></h1>
        <p class="home-subtitle">${PROGRAM.meta.objective}</p>
      </header>

      <div class="session-cards" role="list">
        ${PROGRAM.sessions.map(s => sessionCardHTML(s)).join('')}
      </div>
    </div>
  `;

  document.getElementById('app').innerHTML = html;

  document.querySelectorAll('.session-card').forEach(card => {
    card.addEventListener('click', () => {
      const session = PROGRAM.sessions.find(s => s.id === card.dataset.id);
      if (session) openSession(session);
    });
  });
}

function sessionCardHTML(session) {
  const { done, total, pct } = getProgress(session.id, session.exercises.length);
  const hasProgress = done > 0;
  const countLabel  = hasProgress
    ? `${done}/${total} terminés`
    : `${total} exercices`;

  /* Chaque carte définit ses propres variables CSS --accent / --accent-rgb
     via un attribut style inline, ce qui scope les couleurs à la carte. */
  const r = parseInt(session.color.slice(1, 3), 16);
  const g = parseInt(session.color.slice(3, 5), 16);
  const b = parseInt(session.color.slice(5, 7), 16);

  return `
    <article
      class="session-card"
      data-id="${session.id}"
      role="listitem"
      style="--accent:${session.color};--accent-rgb:${r},${g},${b}"
    >
      <div class="card-top">
        <span class="session-tag">${session.tag}</span>
        <span class="card-duration">${ICONS.clock} ${session.estimatedDuration} min</span>
      </div>

      <h2 class="card-name">${session.name}</h2>
      <p class="card-subtitle">${session.subtitle}</p>

      <div class="card-footer">
        <span class="card-count">${countLabel}</span>
        <div class="card-progress-track ${hasProgress ? 'visible' : ''}">
          <div class="card-progress-fill" style="width:${pct}%"></div>
        </div>
        <div class="card-arrow">${ICONS.arrow}</div>
      </div>
    </article>
  `;
}

/* ════════════════════════════════════════════════════════════
   SESSION VIEW
════════════════════════════════════════════════════════════ */
function openSession(session) {
  state.view          = 'session';
  state.activeSession = session;
  state.expandedNotes = {};
  state.substitutions = {};
  setAccent(session.color);
  renderSession();
}

function renderSession() {
  const session = state.activeSession;
  const { done, total, pct } = getProgress(session.id, session.exercises.length);
  const allDone = done === total && total > 0;

  const html = `
    <div class="session-view">

      <!-- En-tête sticky -->
      <header class="session-header">
        <div class="header-row">
          <button class="btn-back" id="btn-back" aria-label="Retour">
            ${ICONS.back}
          </button>
          <div class="header-info">
            <div class="header-name">${session.name} · ${session.subtitle}</div>
            <div class="header-sub" id="header-sub">${done}/${total} exercices · ${pct}%</div>
          </div>
          <button class="btn-reset" id="btn-reset">Réinitialiser</button>
        </div>
        <div class="progress-strip">
          <div class="progress-fill" id="progress-fill" style="width:${pct}%"></div>
        </div>
      </header>

      <!-- Échauffement (masqué si absent) -->
      ${session.warmup ? `
      <div class="warmup-banner">
        <span class="warmup-icon">${ICONS.flame}</span>
        <div>
          <div class="warmup-label">Échauffement</div>
          <div class="warmup-text">${session.warmup}</div>
        </div>
      </div>` : ''}

      <!-- Bannière de fin de séance -->
      <div class="completion-banner ${allDone ? 'visible' : ''}" id="completion-banner">
        <div class="completion-emoji">${ICONS.trophy}</div>
        <div class="completion-title">Séance terminée !</div>
        <div class="completion-sub">Excellent travail — repose-toi bien.</div>
      </div>

      <!-- Liste d'exercices -->
      <div class="exercises-list" id="exercises-list">
        ${session.exercises.map(ex => exerciseCardHTML(session.id, ex)).join('')}

        <!-- Cardio finisher -->
        ${session.cardioFinisher ? `
        <div class="cardio-finisher-banner">
          <span class="warmup-icon">🏃</span>
          <div>
            <div class="warmup-label">Cardio finisher</div>
            <div class="warmup-text">${session.cardioFinisher}</div>
          </div>
        </div>` : ''}
      </div>

    </div>

    <!-- Bottom sheet overlay -->
    <div class="sheet-backdrop" id="sheet-backdrop"></div>
    <div class="bottom-sheet" id="bottom-sheet" role="dialog" aria-modal="true">
      <div class="sheet-handle"></div>
      <div id="sheet-content"></div>
    </div>
  `;

  document.getElementById('app').innerHTML = html;
  bindSessionEvents();
}

/* ── HTML d'une carte exercice ──────────────────────────────── */
function exerciseCardHTML(sessionId, ex) {
  const done        = isExDone(sessionId, ex.id);
  const sub         = state.substitutions[ex.id];
  const display     = sub || ex;
  const isSubbed    = !!sub;
  const notesOpen   = !!state.expandedNotes[ex.id];
  const hasNotes    = !!(display.notes);
  const muscleGroup = display.muscleGroup || ex.muscleGroup;
  const rest        = display.rest !== undefined ? display.rest : ex.rest;
  const hasSubs     = ex.substitutes && ex.substitutes.length > 0;

  // Ajuste la taille de police des reps selon la longueur
  const repsFontSize = String(display.reps).length > 5 ? '14px' : '18px';

  return `
    <div
      class="exercise-card${done ? ' is-done' : ''}"
      id="card-${ex.id}"
    >
      <!-- Ligne haute : checkbox + nom -->
      <div class="ex-top">
        <div
          class="ex-checkbox${done ? ' checked' : ''}"
          data-action="check"
          data-ex-id="${ex.id}"
          role="checkbox"
          aria-checked="${done}"
          aria-label="Marquer comme terminé"
        >
          ${ICONS.check}
        </div>
        <div class="ex-info">
          <div class="ex-name">
            ${display.name}
            ${isSubbed ? '<span class="sub-badge">remplacé</span>' : ''}
          </div>
          <div class="ex-muscle">${muscleGroup}</div>
        </div>
      </div>

      <!-- Statistiques : séries / reps / récup -->
      <div class="ex-stats">
        <div class="ex-stat">
          <div class="ex-stat-val">${display.sets}</div>
          <div class="ex-stat-label">Séries</div>
        </div>
        <div class="ex-stat">
          <div class="ex-stat-val" style="font-size:${repsFontSize}">${display.reps}</div>
          <div class="ex-stat-label">Reps</div>
        </div>
        <div class="ex-stat">
          <div class="ex-stat-val">${rest}<span class="unit">s</span></div>
          <div class="ex-stat-label">Récup</div>
        </div>
      </div>

      <!-- Boutons d'action -->
      <div class="ex-actions">
        <button
          class="btn-notes${hasNotes ? '' : ' disabled'}"
          data-action="notes"
          data-ex-id="${ex.id}"
          ${!hasNotes ? 'disabled' : ''}
        >
          ${ICONS.notes}
          <span class="notes-label">${notesOpen ? 'Masquer les notes' : (hasNotes ? 'Voir les notes' : 'Aucune note')}</span>
        </button>

        ${hasSubs ? `
          <button class="btn-sub" data-action="sub" data-ex-id="${ex.id}">
            ${ICONS.swap}
            Substitut
          </button>
        ` : ''}
      </div>

      <!-- Zone de notes (masquée par défaut) -->
      ${hasNotes ? `
        <div class="ex-notes${notesOpen ? ' visible' : ''}" id="notes-${ex.id}">
          ${display.notes}
        </div>
      ` : ''}

    </div>
  `;
}

/* ════════════════════════════════════════════════════════════
   ÉVÉNEMENTS — SESSION
════════════════════════════════════════════════════════════ */
function bindSessionEvents() {
  const session = state.activeSession;

  /* Retour */
  document.getElementById('btn-back')
    .addEventListener('click', renderHome);

  /* Réinitialiser */
  document.getElementById('btn-reset')
    .addEventListener('click', () => {
      if (confirm('Réinitialiser la progression de cette séance ?')) {
        resetSession(session.id);
        renderSession();
      }
    });

  /* Fermer le sheet en cliquant sur le fond */
  document.getElementById('sheet-backdrop')
    .addEventListener('click', closeSheet);

  /* Délégation d'événements sur la liste d'exercices */
  document.getElementById('exercises-list')
    .addEventListener('click', e => {
      const el     = e.target.closest('[data-action]');
      if (!el) return;
      const action = el.dataset.action;
      const exId   = el.dataset.exId;
      if (!action || !exId) return;

      if (action === 'check') handleCheck(exId);
      if (action === 'notes') handleNotes(exId);
      if (action === 'sub')   handleSub(exId);
    });
}

/* ── Cocher / décocher un exercice ──────────────────────────── */
function handleCheck(exId) {
  const session = state.activeSession;
  toggleExDone(session.id, exId);

  const done    = isExDone(session.id, exId);
  const cardEl  = document.getElementById(`card-${exId}`);
  const cbEl    = cardEl.querySelector('.ex-checkbox');

  /* Mise à jour visuelle de la carte */
  cardEl.classList.toggle('is-done', done);
  cbEl.classList.toggle('checked', done);
  cbEl.setAttribute('aria-checked', String(done));

  /* Mise à jour de l'en-tête */
  const { done: d, total: t, pct } = getProgress(session.id, session.exercises.length);
  document.getElementById('header-sub').textContent  = `${d}/${t} exercices · ${pct}%`;
  document.getElementById('progress-fill').style.width = `${pct}%`;

  /* Bannière de fin de séance */
  const banner = document.getElementById('completion-banner');
  if (d === t && t > 0) {
    banner.classList.add('visible');
    setTimeout(() => banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
  } else {
    banner.classList.remove('visible');
  }
}

/* ── Afficher / masquer les notes ───────────────────────────── */
function handleNotes(exId) {
  state.expandedNotes[exId] = !state.expandedNotes[exId];
  const isOpen = !!state.expandedNotes[exId];

  const notesEl = document.getElementById(`notes-${exId}`);
  if (notesEl) notesEl.classList.toggle('visible', isOpen);

  const labelEl = document.querySelector(`[data-action="notes"][data-ex-id="${exId}"] .notes-label`);
  if (labelEl) labelEl.textContent = isOpen ? 'Masquer les notes' : 'Voir les notes';
}

/* ── Ouvrir le sheet de substitution ────────────────────────── */
function handleSub(exId) {
  const ex = state.activeSession.exercises.find(e => e.id === exId);
  if (!ex?.substitutes?.length) return;
  openSheet(ex);
}

/* ════════════════════════════════════════════════════════════
   BOTTOM SHEET
════════════════════════════════════════════════════════════ */
function openSheet(ex) {
  state.sheetOpen = true;

  const content = document.getElementById('sheet-content');
  content.innerHTML = `
    <p class="sheet-eyebrow">Substitution</p>
    <h3 class="sheet-ex-name">${ex.name}</h3>
    <p class="sheet-section">Choisir un exercice de remplacement</p>

    ${ex.substitutes.map(sub => `
      <div class="sub-card" data-sub-id="${sub.id}" data-ex-id="${ex.id}">
        <div class="sub-card-top">
          <div class="sub-card-name">${sub.name}</div>
          <div class="sub-card-stats">
            <span>${sub.sets} séries</span>
            <span>${sub.reps}</span>
          </div>
        </div>
        ${sub.notes ? `<p class="sub-card-notes">${sub.notes}</p>` : ''}
      </div>
    `).join('')}

    <button class="btn-sheet-cancel" id="btn-sheet-cancel">Annuler</button>
  `;

  document.getElementById('sheet-backdrop').classList.add('open');
  document.getElementById('bottom-sheet').classList.add('open');

  /* Sélectionner une substitution */
  content.querySelectorAll('.sub-card').forEach(card => {
    card.addEventListener('click', () => {
      const exId  = card.dataset.exId;
      const subId = card.dataset.subId;
      const origEx = state.activeSession.exercises.find(e => e.id === exId);
      const chosen = origEx.substitutes.find(s => s.id === subId);

      state.substitutions[exId] = chosen;
      closeSheet();
      refreshExerciseCard(exId);
    });
  });

  document.getElementById('btn-sheet-cancel')
    .addEventListener('click', closeSheet);
}

function closeSheet() {
  state.sheetOpen = false;
  document.getElementById('sheet-backdrop').classList.remove('open');
  document.getElementById('bottom-sheet').classList.remove('open');
}

/* ── Rafraîchir une seule carte après substitution ──────────── */
function refreshExerciseCard(exId) {
  const session = state.activeSession;
  const ex      = session.exercises.find(e => e.id === exId);
  const cardEl  = document.getElementById(`card-${exId}`);
  if (!cardEl || !ex) return;

  const temp = document.createElement('div');
  temp.innerHTML = exerciseCardHTML(session.id, ex);
  cardEl.replaceWith(temp.firstElementChild);
  /* L'événement délégué sur #exercises-list reste actif. */
}

/* ════════════════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════════════════ */
renderHome();
