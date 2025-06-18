// Membres équipe (6 profils, sans photo/mail)
const teamMembers = [
  {
    key: 'samuel',
    nom: 'Samuel TURLE',
    role: 'Directeur Général',
    parcours: 'Ingénieur géotechnicien, expérience internationale, fondateur de GÉOTERRIA.',
    missions: 'Direction générale, pilotage des projets, relation clients stratégiques.'
  },
  {
    key: 'pierre',
    nom: 'Pierre BARNEOUT-ROUSSET',
    role: 'Directeur Technique Groupe',
    parcours: 'Expert en ingénierie, responsable R&D, passionné par l’innovation géotechnique.',
    missions: 'Supervision technique, formation, développement de méthodes avancées.'
  },
  {
    key: 'stephane',
    nom: 'Stéphane CASTELLS',
    role: 'Responsable Région Sud',
    parcours: 'Chef de projet expérimenté, spécialisé en suivi de chantier.',
    missions: 'Gestion de projet, accompagnement client, optimisation qualité.'
  },
  {
    key: 'sarah',
    nom: 'Sarah TEXIER',
    role: 'Responsable La Garde & Ingénieure géotechnicienne',
    parcours: 'Responsable d’agence, forte expérience en gestion d’équipe.',
    missions: 'Gestion de l’agence Toulon, développement commercial, relation client.'
  },
  {
    key: 'zayad',
    nom: 'Zayad KADDOURI',
    role: 'Responsable Éguilles & Ingénieur géotechnicien',
    parcours: 'Spécialisé en études de sol et suivi d’exécution.',
    missions: 'Études techniques, analyse des sols, participation aux projets.'
  },
  {
    key: 'kevin',
    nom: 'Kévin FAGOT',
    role: 'Ingénieur géotechnicien',
    parcours: 'Technicien de terrain, expert en reconnaissances géotechniques.',
    missions: 'Réalisation des essais in situ, mesures, appui technique.'
  }
];

const services = [
  {
    icon: "🧭",
    title: "Études de sol",
    desc: "Diagnostic, conception et suivi d’exécution G1 à G5. Sécurisez vos travaux dès la conception."
  },
  {
    icon: "🔬",
    title: "Essais in situ",
    desc: "Sondages, essais pénétrométriques, essais plaque : données fiables pour des fondations sûres."
  },
  {
    icon: "🏗️",
    title: "Suivi de chantier",
    desc: "Contrôle qualité, gestion des aléas géotechniques, accompagnement technique continu."
  },
  {
    icon: "💡",
    title: "Conseil ingénierie",
    desc: "Optimisation de fondations, analyse de risques, solutions innovantes pour chaque projet."
  }
];

const mainContent = document.getElementById('main-content');
const navLinks = document.querySelectorAll('.nav-links a');

function setActiveLink(page) {
  navLinks.forEach(link => {
    if (link.dataset.page === page) link.classList.add('active');
    else link.classList.remove('active');
  });
}

// --- Pages dynamiques ---
function getAccueilHTML() {
  return `
    <section class="page-section hero" id="hero-section">
      <h1>GÉOTERRIA</h1>
      <div class="typing" id="typing-text"></div>
    </section>
  `;
}
function getAproposHTML() {
  return `
    <section class="page-section section-scroll">
      <h2 class="section-title">À propos de GÉOTERRIA</h2>
      <p style="font-size:1.14em;line-height:1.6">
        Bureau d’études géologiques et géotechniques, spécialisé dans les études préalables à la construction de bâtiments et d’ouvrages de génie civil.<br>
        <ul class="custom-list">
          <li>Expertise reconnue en ingénierie géotechnique</li>
          <li>Accompagnement personnalisé de l’étude à la réalisation</li>
          <li>Équipe pluridisciplinaire à la pointe de la technologie</li>
        </ul>
      </p>
      <div class="contact-multi-agency" style="margin-top:2em;">
        <div class="agency-block">
          <h3>TOULON (83)</h3>
          <p>42 av Irène et Jean Frédéric Joliot Curie<br>
          83130 LA GARDE<br>
          Tel : 04 94 27 87 40</p>
        </div>
        <div class="agency-block">
          <h3>AIX-EN-PROVENCE (13)</h3>
          <p>Z.I Les Jalassières - 320 rue Topaze<br>
          13510 ÉGUILLES<br>
          Tel : 04 42 26 14 15</p>
        </div>
        <div class="agency-block">
          <h3>TOULOUSE (31)</h3>
          <p>24 bd Libre Échange<br>
          31650 - SAINT-ORENS-DE-GAMEVILLE<br>
          Tel : 05 62 27 12 82</p>
        </div>
      </div>
      <div style="margin:2em 0;">
        <img src="images/adresses-agences.png" alt="Adresses agences Géoterria" style="width:100%;max-width:800px;border-radius:6px;border:1px solid #ccc;">
      </div>
    </section>
  `;
}
function getPrestationsHTML() {
  return `
    <section class="page-section section-scroll">
      <h2 class="section-title">Nos prestations</h2>
      <div class="services-grid">
        ${services.map(s => `
          <div class="service-card">
            <div class="icon">${s.icon}</div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}
function getEquipeHTML() {
  return `
    <section class="page-section section-scroll">
      <h2 class="section-title">Notre équipe</h2>
      <div class="team-grid">
        ${teamMembers.map(member => `
          <div class="team-card" data-key="${member.key}" tabindex="0">
            <h3>${member.nom}</h3>
            <p>${member.role}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}
function getContactHTML() {
  return `
    <section class="page-section section-scroll">
      <h2 class="section-title">Contact</h2>
      <div class="contact-info">
        <p><strong>Adresse :</strong> 42 Avenue Irène et Jean Frédéric Joliot Curie, 83130 La Garde</p>
        <p><strong>Téléphone :</strong> 04 94 27 87 40.</p>
        <p><strong>Email :</strong> contact@geoterria.com</p>
      </div>
      <div class="contact-info" style="margin-top:1em;">
        <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=6.0192%2C43.1243%2C6.0260%2C43.1271&amp;layer=mapnik&amp;marker=43.1257,6.0226"
          style="border:1px solid #ccc; width:100%; max-width:450px; height:200px; border-radius:8px;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </section>
  `;
}

// --- Page rendering + effets ---
function renderPage(page) {
  setActiveLink(page);
  mainContent.classList.remove('parallax');
  switch (page) {
    case 'accueil':
      mainContent.innerHTML = getAccueilHTML();
      setTimeout(() => {
        const heroSection = document.getElementById('hero-section');
        if(heroSection) heroSection.classList.add('visible');
        startTypingEffect();
      }, 60);
      mainContent.classList.add('parallax');
      break;
    case 'apropos':
      mainContent.innerHTML = getAproposHTML();
      revealOnScroll();
      break;
    case 'prestations':
      mainContent.innerHTML = getPrestationsHTML();
      revealOnScroll();
      setTimeout(() => animateServices(), 100);
      break;
    case 'equipe':
      mainContent.innerHTML = getEquipeHTML();
      bindTeamCards();
      revealOnScroll();
      setTimeout(() => animateTeam(), 140);
      break;
    case 'contact':
      mainContent.innerHTML = getContactHTML();
      revealOnScroll();
      break;
    default:
      renderPage('accueil');
      break;
  }
}

// --- Typing effect accueil ---
function startTypingEffect() {
  const texts = [
    "Accompagnement sur-mesure",
    "Expertise géotechnique avancée",
    "Innovation au service de vos projets",
    "Votre sol, notre passion."
  ];
  const el = document.getElementById('typing-text');
  let i = 0, txt = '', isDel = false, textIdx = 0;
  function type() {
    if (!el) return;
    const full = texts[textIdx];
    if (!isDel) {
      txt = full.slice(0, i++);
      el.innerHTML = txt + '<span style="opacity:.4;">|</span>';
      if (i > full.length) { isDel = true; setTimeout(type, 1400); return; }
    } else {
      txt = full.slice(0, --i);
      el.innerHTML = txt + '<span style="opacity:.2;">|</span>';
      if (i === 0) { isDel = false; textIdx = (textIdx+1)%texts.length; setTimeout(type, 600); return; }
    }
    setTimeout(type, isDel ? 27 : 43 + Math.random()*25);
  }
  type();
}

// --- Animation services ---
function animateServices() {
  document.querySelectorAll('.service-card').forEach((c,i) => {
    setTimeout(() => c.classList.add('visible'), 60 + 70*i);
  });
}
function animateTeam() {
  document.querySelectorAll('.team-card').forEach((c,i) => {
    setTimeout(() => c.classList.add('visible'), 50 + 80*i);
  });
}

// --- Reveal on scroll ---
function revealOnScroll() {
  const sections = document.querySelectorAll('.section-scroll, .page-section');
  const reveal = () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) sec.classList.add('visible');
    });
  };
  window.removeEventListener('scroll', reveal);
  window.addEventListener('scroll', reveal);
  setTimeout(reveal, 60);
}

// --- Parallax accueil (léger) ---
window.addEventListener('scroll', () => {
  if (mainContent.classList.contains('parallax')) {
    const sc = window.scrollY;
    mainContent.style.backgroundPosition = `center ${sc/4}px`;
  }
});

// --- Modale équipe ---
function showMemberModal(memberKey) {
  const member = teamMembers.find(m => m.key === memberKey);
  if (!member) return;
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalContent = document.getElementById('modal-content');
  if (modalContent && modalBackdrop) {
    modalContent.innerHTML = `
      <h3>${member.nom}</h3>
      <p style="color:#19507a;font-size:1.07em;margin-bottom:.7em;">${member.role}</p>
      <p><strong>Parcours :</strong> ${member.parcours}</p>
      <p><strong>Missions :</strong> ${member.missions}</p>
    `;
    modalBackdrop.style.display = 'flex';
  }
}
function closeMemberModal() {
  const modalBackdrop = document.getElementById('modal-backdrop');
  if (modalBackdrop) modalBackdrop.style.display = 'none';
}
function bindTeamCards() {
  document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', () => showMemberModal(card.dataset.key));
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        showMemberModal(card.dataset.key);
      }
    });
  });
  animateTeam();
}

// --- Routing ---
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const page = this.dataset.page;
    window.location.hash = page;
    renderPage(page);
    closeMemberModal();
    closeMobileMenu();
  });
});
function initFromHash() {
  const page = window.location.hash.replace('#', '') || 'accueil';
  renderPage(page);
  closeMemberModal();
  closeMobileMenu();
}
window.addEventListener('DOMContentLoaded', initFromHash);
window.addEventListener('hashchange', initFromHash);

// --- Menu burger responsive ---
const burgerMenu = document.getElementById('burger-menu');
const navLinksDiv = document.getElementById('nav-links');
if(burgerMenu && navLinksDiv) {
  burgerMenu.addEventListener('click', function () {
    navLinksDiv.classList.toggle('open');
  });
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && navLinksDiv.classList.contains('open')) {
      if (!navLinksDiv.contains(e.target) && e.target !== burgerMenu) {
        closeMobileMenu();
      }
    }
  });
}
function closeMobileMenu() {
  if(navLinksDiv) navLinksDiv.classList.remove('open');
}

// --- Modale équipe fermeture ---
const modalCloseBtn = document.getElementById('modal-close');
const modalBackdrop = document.getElementById('modal-backdrop');
if(modalCloseBtn) modalCloseBtn.addEventListener('click', closeMemberModal);
if(modalBackdrop) modalBackdrop.addEventListener('click', function(e) {
  if (e.target === this) closeMemberModal();
});
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") closeMemberModal();
});
