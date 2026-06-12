/* ============================================================
   ANIMATED BACKGROUND — particles + neural network lines
   ============================================================ */
(function initBackground() {
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");
  let w, h, particles;
  const mouse = { x: -9999, y: -9999 };

  const PARTICLE_COUNT = window.innerWidth < 768 ? 45 : 90;
  const MAX_DIST = window.innerWidth < 768 ? 110 : 150;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.6
    }));
  }

  function step() {
    ctx.clearRect(0, 0, w, h);

    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      // gentle pull toward mouse
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 180) {
        p.x -= dx * 0.0015;
        p.y -= dy * 0.0015;
      }
    }

    // draw connecting lines (neural network effect)
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < MAX_DIST) {
          const opacity = (1 - d / MAX_DIST) * 0.18;
          ctx.strokeStyle = `rgba(139, 140, 248, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // draw particles
    for (let p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(94, 234, 212, 0.55)";
      ctx.fill();
    }

    requestAnimationFrame(step);
  }

  window.addEventListener("resize", () => {
    resize();
    createParticles();
  });
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener("mouseout", () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  resize();
  createParticles();
  step();

  // glow orbs follow mouse subtly
  const orbs = document.querySelectorAll(".glow-orb");
  window.addEventListener("mousemove", (e) => {
    const xPct = (e.clientX / window.innerWidth - 0.5) * 2;
    const yPct = (e.clientY / window.innerHeight - 0.5) * 2;
    orbs.forEach((orb, i) => {
      const factor = (i + 1) * 14;
      orb.style.transform = `translate(${xPct * factor}px, ${yPct * factor}px)`;
    });
  });
})();

/* ============================================================
   SCROLL PROGRESS BAR
   ============================================================ */
(function scrollProgress() {
  const bar = document.getElementById("scroll-progress");
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = scrolled + "%";
  });
})();

/* ============================================================
   NAVBAR — sticky + active section + mobile toggle
   ============================================================ */
(function navbar() {
  const nav = document.getElementById("navbar");
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 30);
  });

  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );

  const sections = document.querySelectorAll("section[id]");
  const navAnchors = links.querySelectorAll("a");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => {
          a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(s => observer.observe(s));
})();

/* ============================================================
   BACK TO TOP
   ============================================================ */
(function backToTop() {
  const btn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 600);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
(function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  const skillCards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        if (entry.target.classList.contains("skill-card")) {
          entry.target.classList.add("in-view");
        }
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(i => observer.observe(i));
  skillCards.forEach(i => observer.observe(i));
})();

/* ============================================================
   HERO TYPING EFFECT
   ============================================================ */
(function typingEffect() {
  const el = document.getElementById("typing-text");
  const words = portfolioData.personalInfo.taglineWords;
  let wordIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const word = words[wordIndex];

    if (!deleting) {
      el.textContent = word.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === word.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      el.textContent = word.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 80);
  }
  tick();
})();

/* ============================================================
   RENDER: DYNAMIC CONTENT FROM portfolioData
   ============================================================ */
(function render() {
  const { personalInfo, socialLinks, skills, projects, hackathons,
          certificates, experience, genAIFocus, resumeLink,
          resumeLastUpdated, resumeVersions } = portfolioData;

  // ---- Hero ----
  document.getElementById("hero-name").textContent = personalInfo.name;
  document.getElementById("hero-intro").textContent = personalInfo.intro;
  document.querySelectorAll(".js-resume-link").forEach(el => el.href = resumeLink);

  // ---- About ----
  document.getElementById("about-summary").textContent = personalInfo.about.summary;
  document.getElementById("about-journey").textContent = personalInfo.about.journey;
  document.getElementById("about-passion").textContent = personalInfo.about.passion;

  const eduWrap = document.getElementById("education-list");
  personalInfo.about.education.forEach(ed => {
    eduWrap.insertAdjacentHTML("beforeend", `
      <div class="timeline-item">
        <h4>${ed.degree}</h4>
        <div class="meta">${ed.institute} · ${ed.year}</div>
        <div class="detail">${ed.detail}</div>
      </div>
    `);
  });

  // ---- Skills ----
  const skillsGrid = document.getElementById("skills-grid");
  skills.forEach(skill => {
    skillsGrid.insertAdjacentHTML("beforeend", `
      <div class="skill-card glass reveal" style="--target-width:${skill.level}%">
        <span class="skill-icon">${skill.icon}</span>
        <div class="skill-name">${skill.name}</div>
        <div class="skill-cat">${skill.category}</div>
        <div class="skill-bar"><div class="skill-bar-fill"></div></div>
        <div class="skill-level">${skill.level}%</div>
      </div>
    `);
  });

  // ---- Projects ----
  const projectsGrid = document.getElementById("projects-grid");
  projects.forEach(proj => {
    projectsGrid.insertAdjacentHTML("beforeend", `
      <div class="project-card glass reveal">
        <div class="project-icon">${proj.image}</div>
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <div class="tech-tags">
          ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="${proj.github}" target="_blank" rel="noopener">⌗ GitHub</a>
          <a href="${proj.demo}" target="_blank" rel="noopener">↗ Live Demo</a>
        </div>
      </div>
    `);
  });

  // ---- Hackathons ----
  const hackTimeline = document.getElementById("hack-timeline");
  hackathons.forEach(h => {
    hackTimeline.insertAdjacentHTML("beforeend", `
      <div class="hack-item reveal">
        <div class="hack-card glass">
          <div class="year">${h.year}</div>
          <h4>${h.title}</h4>
          <div class="role">${h.role}</div>
          <span class="achievement">${h.achievement}</span>
          <div class="learning">${h.learning}</div>
          <div class="tech-tags">
            ${h.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    `);
  });

  // ---- Certificates ----
  const certGrid = document.getElementById("cert-grid");
  certificates.forEach((c, idx) => {
    certGrid.insertAdjacentHTML("beforeend", `
      <div class="cert-card glass reveal" data-idx="${idx}">
        <div class="cert-emoji">${c.image}</div>
        <h4>${c.title}</h4>
        <div class="issuer">${c.issuer}</div>
        <div class="date">${c.date}</div>
      </div>
    `);
  });

  // certificate modal
  const overlay = document.getElementById("cert-modal");
  const modalBox = overlay.querySelector(".modal-box");
  certGrid.querySelectorAll(".cert-card").forEach(card => {
    card.addEventListener("click", () => {
      const c = certificates[card.dataset.idx];
      modalBox.querySelector(".cert-emoji").textContent = c.image;
      modalBox.querySelector("h3").textContent = c.title;
      modalBox.querySelector(".issuer").textContent = c.issuer;
      modalBox.querySelector(".date").textContent = c.date;
      overlay.classList.add("open");
    });
  });
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target.classList.contains("modal-close")) {
      overlay.classList.remove("open");
    }
  });

  // ---- Experience ----
  const expList = document.getElementById("exp-list");
  experience.forEach(exp => {
    expList.insertAdjacentHTML("beforeend", `
      <div class="exp-card glass reveal">
        <div class="exp-head">
          <div>
            <h4>${exp.role}</h4>
            <div class="company">${exp.company}</div>
          </div>
          <div class="duration">${exp.duration}</div>
        </div>
        <ul>${exp.points.map(p => `<li>${p}</li>`).join("")}</ul>
      </div>
    `);
  });

  // ---- Gen AI Focus ----
  const genaiGrid = document.getElementById("genai-grid");
  genAIFocus.forEach(g => {
    genaiGrid.insertAdjacentHTML("beforeend", `
      <div class="genai-card glass reveal">
        <span class="genai-icon">${g.icon}</span>
        <h4>${g.title}</h4>
        <p>${g.desc}</p>
      </div>
    `);
  });

  // ---- Coding Profiles ----
  const profileGrid = document.getElementById("profile-grid");
  const profileData = [
    { key: "github", icon: "⌗", label1: "Repos", val1: "28", label2: "Stars", val2: "120+",
      journey: "Active open-source contributor — sharing ML utilities, notebooks and project templates." },
    { key: "linkedin", icon: "in", label1: "Connections", val1: "500+", label2: "Posts", val2: "30+",
      journey: "Sharing learnings from projects, hackathons and the AI research I follow." },
    { key: "leetcode", icon: "⌬", label1: "Solved", val1: "450+", label2: "Contest", val2: "Top 15%",
      journey: "Consistent DSA practice — from arrays to graphs, sharpening problem-solving daily." }
  ];
  profileData.forEach(p => {
    const social = socialLinks[p.key];
    profileGrid.insertAdjacentHTML("beforeend", `
      <a href="${social.url}" target="_blank" rel="noopener" class="profile-card glass reveal">
        <div class="profile-head">
          <div class="profile-icon">${p.icon}</div>
          <div>
            <h4>${p.key.charAt(0).toUpperCase() + p.key.slice(1)}</h4>
            <div class="username">@${social.username}</div>
          </div>
        </div>
        <div class="profile-stats">
          <div><div class="num">${p.val1}</div><div class="label">${p.label1}</div></div>
          <div><div class="num">${p.val2}</div><div class="label">${p.label2}</div></div>
        </div>
        <p class="profile-journey">${p.journey}</p>
        <span class="visit">Visit profile →</span>
      </a>
    `);
  });

  // ---- Resume ----
  document.getElementById("resume-updated").textContent = `Last updated · ${resumeLastUpdated}`;
  const versionsList = document.getElementById("resume-versions-list");
  resumeVersions.forEach(v => {
    versionsList.insertAdjacentHTML("beforeend", `
      <li>
        <span>${v.version} — ${v.date}</span>
        <a href="${v.link}" download>Download</a>
      </li>
    `);
  });

  // ---- Contact ----
  const contactLinks = document.getElementById("contact-links");
  const contactData = [
    { icon: "✉️", label: personalInfo.email, url: socialLinks.email },
    { icon: "⌗", label: `github.com/${socialLinks.github.username}`, url: socialLinks.github.url },
    { icon: "in", label: `linkedin.com/in/${socialLinks.linkedin.username}`, url: socialLinks.linkedin.url },
    { icon: "⌬", label: `leetcode.com/${socialLinks.leetcode.username}`, url: socialLinks.leetcode.url }
  ];
  contactData.forEach(c => {
    contactLinks.insertAdjacentHTML("beforeend", `
      <a href="${c.url}" target="_blank" rel="noopener" class="contact-link glass">
        <span class="ic">${c.icon}</span><span>${c.label}</span>
      </a>
    `);
  });

  // ---- Footer ----
  document.getElementById("footer-name").textContent = personalInfo.name;
  document.getElementById("footer-year").textContent = new Date().getFullYear();
})();

/* ============================================================
   CONTACT FORM (front-end only demo)
   ============================================================ */
(function contactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "✓ Message captured locally — connect a backend (e.g. Formspree, EmailJS) to deliver it to your inbox.";
    form.reset();
  });
})();
