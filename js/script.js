// portfolio-website — shared vanilla JS across all pages
// Every block below checks the DOM before wiring up, so this one file is safe to include on every page.

// Single source of truth for the project-details modal (see projectModal below).
// Cards on any page just need data-project="<key>" — no HTML duplication needed.
const PROJECTS = {
  // ── Featured — primary, current full-stack + automation work ──────────
  "service-ticketing": {
    title: "Service Ticketing System",
    image: "assets/images/projects/service-ticketing-system.svg",
    description:
      "A full-stack service ticketing platform designed to streamline issue reporting, ticket management, assignment, tracking, and resolution.",
    features: [
      "Centralized issue reporting and ticket intake",
      "Assignment and status tracking across the full ticket lifecycle",
      "Built as a full-stack, database-driven web application",
    ],
    tags: ["Full-Stack Development", "Database-Driven", "Ticket Management"],
    featured: true,
    categories: ["featured", "fullstack"],
  },
  "patient-portal": {
    title: "Patient Portal",
    image: "assets/images/projects/patient-portal.png",
    description:
      "A patient-focused web application for managing healthcare-related information, workflows, and interactions through a centralized digital portal.",
    features: [
      "Centralized portal for healthcare-related information",
      "Streamlined patient workflows and interactions",
      "Built as a full-stack, database-driven web application",
    ],
    tags: ["Full-Stack Development", "Healthcare Workflows", "Database-Driven"],
    featured: true,
    categories: ["featured", "fullstack"],
  },
  "hr-management-system": {
    title: "HR Management System",
    image: "assets/images/projects/hr-management-system.svg",
    description:
      "A full-stack HR platform designed to organize employee information, HR workflows, and internal management processes.",
    features: [
      "Centralized employee information management",
      "Structured HR workflows and internal processes",
      "Built as a full-stack, database-driven web application",
    ],
    tags: ["Full-Stack Development", "HR Workflows", "Database-Driven"],
    featured: true,
    categories: ["featured", "fullstack"],
  },

  // ── Other projects — earlier full-stack / UI builds ────────────────────
  "component-library": {
    title: "Component Library",
    image: "assets/images/projects/component-library.png",
    description:
      "A living reference of 12 component categories — buttons, cards, modals, tabs, toasts, and more — each variant paired with a click-to-copy Tailwind class string, built to be dropped into other projects without a framework.",
    features: [
      "12 component categories with multiple variants each",
      "Click-to-copy class strings for fast reuse",
      "Full keyboard support and ARIA roles throughout",
      "Consistent design tokens shared across every component",
    ],
    tags: ["Accessibility", "Tailwind", "Design tokens"],
    categories: ["design"],
  },
  "saas-landing-page": {
    title: "Streamline — SaaS Landing Page",
    image: "assets/images/projects/saas-landing-page.png",
    description:
      "A conversion-focused marketing site for a fictional automation SaaS, built to demonstrate landing-page fundamentals: a clear value proposition, social proof, and pricing that adapts to billing cycle.",
    features: [
      "Monthly/annual pricing toggle with live price updates",
      "Testimonial carousel and FAQ accordion",
      "Sticky nav with an accessible mobile menu",
      "Scroll-triggered entrance animations",
    ],
    tags: ["Conversion UX", "Tailwind", "Vanilla JS"],
    categories: ["fullstack", "design"],
  },
  "admin-dashboard": {
    title: "Enterprise Admin Dashboard",
    image: "assets/images/projects/admin-dashboard.png",
    description:
      "An enterprise admin dashboard for a fictional SaaS product: revenue and team metrics, live Chart.js visualizations, and an activity feed, all wrapped in a polished dark-mode-first interface.",
    features: [
      "Live Chart.js revenue and team-progress visualizations",
      "Dark mode with a persisted preference",
      "Responsive, collapsible sidebar navigation",
      "Notification and activity feed panels",
    ],
    tags: ["Chart.js", "Dark mode", "Tailwind"],
    categories: ["fullstack", "design"],
  },
  "expense-tracker": {
    title: "ExpenseFlow — Finance Tracker",
    image: "assets/images/projects/expense-tracker.png",
    description:
      "An 8-page personal finance tracker — dashboard, transactions, budgets, wallets, categories, reports, analytics, and settings — sharing a single design system and JS-rendered navigation.",
    features: [
      "8 interconnected pages sharing one design system",
      "Chart.js budget and spending visualizations",
      "Dark/light theme toggle",
      "Responsive off-canvas mobile navigation",
    ],
    tags: ["Chart.js", "Tailwind", "Multi-page"],
    categories: ["fullstack"],
  },
  "animation-showcase": {
    title: "Animation Showcase",
    image: "assets/images/projects/animation-showcase.png",
    description:
      "A hands-on gallery of thirteen animation techniques, each isolated in its own demo with an inline code snippet — from CSS-only tricks to Web Animations API-driven progress rings.",
    features: [
      "13 self-contained animation techniques with visible source",
      "Magnetic buttons, WAAPI progress rings, and split-text reveals",
      "Full prefers-reduced-motion support throughout",
      "Click-to-copy code snippets for every demo",
    ],
    tags: ["WAAPI", "CSS Animation", "Accessibility"],
    categories: ["design"],
  },

  // ── Other projects — imported from the previous portfolio (automation) ─
  "prev-calculator": {
    title: "Calculator Web Application",
    image: "assets/images/projects/previous-portfolio/prev-calculator.png",
    description: "A calculator web application built with HTML, CSS, and vanilla JavaScript.",
    features: [
      "Client-side calculation logic in vanilla JavaScript",
      "Responsive layout styled with HTML & CSS",
      "Lightweight, dependency-free web app",
    ],
    tags: ["HTML", "JavaScript", "CSS"],
    categories: ["fullstack"],
  },
  "prev-make-drive-sort": {
    title: "Auto Sort Attachment to Google Drive",
    image:
      "assets/images/projects/previous-portfolio/prev-make-drive-sort.png",
    description:
      "An automated workflow in Make.com that intelligently processes incoming email attachments, analyzes their contents, and dynamically renames and sorts files into organized Google Drive folders. Content-based logic identifies key details such as document type, sender, or date, ensuring accurate naming and storage — significantly reducing manual file handling and improving data organization.",
    features: [
      "Content-based logic to identify document type, sender, and date",
      "Dynamic file renaming and automatic Google Drive folder sorting",
      "Reduced manual file handling and improved data organization",
    ],
    tags: ["Make", "JavaScript"],
    categories: ["automation"],
  },
  "prev-make-xero-sheets": {
    title: "Xero-to-Google Sheets Financial Data Automation",
    image:
      "assets/images/projects/previous-portfolio/prev-make-xero-sheets.png",
    description:
      "An automated workflow that exports account transactions from Xero, syncs the data in real time to Google Sheets for tracking and analysis, and simultaneously saves a CSV copy to Asana for team reference and task management — streamlining financial reporting and eliminating repetitive manual exports.",
    features: [
      "Real-time export of Xero account transactions to Google Sheets",
      "Automatic CSV copy saved to Asana for team reference",
      "Eliminated repetitive manual financial exports",
    ],
    tags: ["Make", "Xero", "Google Sheets"],
    categories: ["automation"],
  },
  "prev-zapier-video-blog": {
    title: "AI-Powered Video-to-Blog Content Automation",
    image:
      "assets/images/projects/previous-portfolio/prev-zapier-video-blog.png",
    description:
      "A Zapier automation that generates social media blog posts directly from MP4 files stored in Google Drive. The workflow leverages Zapier AI to transcribe video content, then automatically creates an engaging blog title and post based on the extracted text — enabling consistent, AI-driven publishing across social platforms.",
    features: [
      "AI transcription of MP4 video files from Google Drive",
      "Automatic blog title and post generation from transcripts",
      "End-to-end automation for consistent AI-driven publishing",
    ],
    tags: ["Zapier", "Google Drive", "Artificial Intelligence", "Social Media"],
    categories: ["automation"],
  },
  "prev-zapier-asana-gmail": {
    title: "Automated Customer Status and Payment Notification System",
    image:
      "assets/images/projects/previous-portfolio/prev-zapier-asana-gmail.png",
    description:
      "A Zapier automation connecting Asana with Gmail to automate customer status and payment notifications. The workflow tracks each customer's journey in Asana — from initial engagement through payment and closure — using conditional logic to trigger personalized email updates whenever a status changes, minimizing manual follow-ups.",
    features: [
      "Tracks the customer journey in Asana from engagement to closure",
      "Conditional logic triggers personalized Gmail notifications",
      "Reduced manual follow-ups throughout the sales process",
    ],
    tags: ["Asana", "Zapier", "Google Mail"],
    categories: ["automation"],
  },
  "prev-n8n-forms-archive": {
    title: "Google Forms Data Integration and Archiving Automation",
    image:
      "assets/images/projects/previous-portfolio/prev-n8n-forms-archive.png",
    description:
      "An automated data pipeline connecting Google Forms, Google Sheets, Airtable, and a MySQL database using n8n. On submission, responses are recorded in Google Sheets, processed through n8n, added to Airtable for active tracking, and archived in MySQL for long-term storage — improving data consistency and eliminating manual entry.",
    features: [
      "Automated data pipeline from Google Forms through n8n",
      "Live tracking in Airtable with long-term archiving in MySQL",
      "Eliminated manual data entry and improved consistency",
    ],
    tags: ["n8n", "Airtable", "Google Sheets", "Google Forms", "MySQL"],
    categories: ["automation"],
  },
  "prev-n8n-weather": {
    title: "AI-Powered Daily Weather Forecast Content Automation",
    image: "assets/images/projects/previous-portfolio/prev-n8n-weather.png",
    description:
      "An AI-driven automation that generates and publishes daily weather forecast content for social media. The workflow retrieves weather data, uses AI to create engaging captions paired with unique daily quotes and images, checks whether content was previously used to avoid repetition, then composes the final post ready for publication.",
    features: [
      "AI-generated captions paired with daily quotes and images",
      "Duplicate-check logic to avoid repeating quotes or images",
      "Automated, consistent daily social-media publishing pipeline",
    ],
    tags: ["OpenWeatherMap API", "Artificial Intelligence", "n8n"],
    categories: ["automation"],
  },
};

(function themeToggle() {
  const root = document.documentElement;
  const toggles = document.querySelectorAll("[data-theme-toggle]");
  const stored = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (stored === "dark" || (!stored && prefersDark)) {
    root.classList.add("dark");
  }
  updateToggleLabels();

  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      root.classList.toggle("dark");
      localStorage.setItem(
        "portfolio-theme",
        root.classList.contains("dark") ? "dark" : "light",
      );
      updateToggleLabels();
    });
  });

  function updateToggleLabels() {
    const isDark = root.classList.contains("dark");
    toggles.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(isDark));
      btn.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme",
      );
    });
  }
})();

(function mobileMenu() {
  const menuButton = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!menuButton || !menu) return;

  const closeMenu = () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  menu
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();

(function activeNavLink() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current || (current === "" && href === "index.html")) {
      link.setAttribute("aria-current", "page");
      link.classList.add("text-accent-600", "dark:text-accent-400");
    }
  });
})();

(function scrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  items.forEach((el) => observer.observe(el));
})();

(function projectFilter() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll("[data-tags]");
  if (!buttons.length || !cards.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");

      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        const tags = card.dataset.tags.split(",");
        const show = filter === "all" || tags.includes(filter);
        card.style.display = show ? "" : "none";
      });
    });
  });
})();

(function contactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = document.getElementById("form-status");
  const fields = {
    name: {
      el: form.querySelector("#name"),
      validate: (v) => v.trim().length > 1,
    },
    email: {
      el: form.querySelector("#email"),
      validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    },
    message: {
      el: form.querySelector("#message"),
      validate: (v) => v.trim().length > 9,
    },
  };

  Object.values(fields).forEach(({ el }) => {
    el.addEventListener("blur", () => validateField(el, fields));
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const allValid = Object.values(fields).every(({ el }) =>
      validateField(el, fields),
    );
    if (!allValid) {
      status.textContent = "Please fix the highlighted fields before sending.";
      status.className = "text-sm mt-4 text-red-600 dark:text-red-400";
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
    status.textContent = "";

    // Simulated network round-trip — no backend in this template.
    await new Promise((resolve) => setTimeout(resolve, 900));

    status.textContent =
      "Thanks for reaching out — I'll get back to you as soon as possible.";
    status.className = "text-sm mt-4 text-emerald-600 dark:text-emerald-400";
    form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = originalLabel;
  });

  function validateField(el, allFields) {
    const key = el.id;
    const isValid = allFields[key].validate(el.value);
    const wrapper = el.closest("[data-field]");
    if (wrapper) wrapper.classList.toggle("field-invalid", !isValid);
    el.setAttribute("aria-invalid", String(!isValid));
    return isValid;
  }
})();

(function projectModal() {
  const triggers = document.querySelectorAll("[data-project]");
  if (!triggers.length) return;

  const modal = document.createElement("div");
  modal.id = "project-modal";
  modal.className = "fixed inset-0 z-50 hidden items-center justify-center p-4";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "project-modal-title");
  modal.innerHTML = `
    <div class="absolute inset-0 bg-ink/60 dark:bg-black/70 backdrop-blur-sm" data-modal-backdrop></div>
    <div class="relative bg-paper dark:bg-paper-dark rounded-2xl shadow-2xl max-w-2xl w-full">
      <button type="button" data-modal-close aria-label="Close" class="absolute top-3 right-3 z-10 p-2 rounded-full bg-paper/90 dark:bg-paper-dark/90 shadow hover:bg-ink/10 dark:hover:bg-ink-dark/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-500 focus-visible:outline-offset-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <div class="rounded-t-2xl overflow-hidden border-b border-ink/10 dark:border-ink-dark/10">
        <div class="flex items-center gap-1.5 px-4 py-2 bg-ink/5 dark:bg-ink-dark/10">
          <span class="w-2.5 h-2.5 rounded-full bg-red-400"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
        </div>
        <img id="project-modal-image" src="" alt="" class="w-full h-40 sm:h-52 object-cover object-top">
      </div>
      <div class="p-5 sm:p-6">
        <h2 id="project-modal-title" class="font-display text-xl sm:text-2xl font-semibold mb-2"></h2>
        <p id="project-modal-description" class="text-sm text-ink/70 dark:text-ink-dark/70 mb-4 leading-relaxed"></p>
        <ul id="project-modal-features" class="space-y-1.5 mb-4 text-sm"></ul>
        <div id="project-modal-tags" class="flex flex-wrap gap-1.5 text-xs"></div>
      </div>
    </div>`;
  document.body.appendChild(modal);

  const imageEl = modal.querySelector("#project-modal-image");
  const titleEl = modal.querySelector("#project-modal-title");
  const descEl = modal.querySelector("#project-modal-description");
  const featuresEl = modal.querySelector("#project-modal-features");
  const tagsEl = modal.querySelector("#project-modal-tags");
  const closeBtn = modal.querySelector("[data-modal-close]");
  let lastFocused = null;

  const checkIcon =
    '<svg class="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>';

  function openModal(key) {
    const data = PROJECTS[key];
    if (!data) return;

    lastFocused = document.activeElement;
    imageEl.src = data.image;
    imageEl.alt = `${data.title} screenshot`;
    titleEl.textContent = data.title;
    descEl.textContent = data.description;
    featuresEl.innerHTML = (data.features || [])
      .map(
        (f) =>
          `<li class="flex items-start gap-2">${checkIcon}<span>${f}</span></li>`,
      )
      .join("");
    tagsEl.innerHTML = (data.tags || [])
      .map(
        (t) =>
          `<span class="px-2 py-0.5 rounded-full bg-ink/5 dark:bg-ink-dark/10">${t}</span>`,
      )
      .join("");

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => openModal(trigger.dataset.project));
  });

  modal
    .querySelector("[data-modal-backdrop]")
    .addEventListener("click", closeModal);
  closeBtn.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (modal.classList.contains("hidden")) return;
    if (e.key === "Escape") {
      closeModal();
      return;
    }
    if (e.key !== "Tab") return;
    const focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
})();

(function footerYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
