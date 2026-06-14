const projects = [
  {
    id: "ai-earnings-reader",
    title: "AI Earnings Reader",
    year: "2026",
    status: "building",
    statusLabel: "Building",
    category: "Product",
    visualTone: "cool",
    visualLabel: "Finance",
    summary:
      "A financial reading product that helps users discover companies, fetch public filings, and read cleaner summaries instead of dense raw disclosures.",
    tags: ["FastAPI", "Next.js", "Financial Data", "UX"],
    links: {
      primary: { label: "View Repo", href: "https://github.com/GAcamellia/ai-earnings-reader" },
      secondary: { label: "Live Demo Later", href: "#" }
    },
    notes: [
      "Focused on making earnings material easier to approach for regular users, not just finance professionals.",
      "Still evolving toward a more public-facing product experience and clearer reading workflow."
    ]
  },
  {
    id: "ai-stock-analyzer",
    title: "AI Stock Analyzer",
    year: "2026",
    status: "building",
    statusLabel: "Building",
    category: "Web App",
    visualTone: "cool",
    visualLabel: "Research",
    summary:
      "A stock research tool for retail investors with single-name analysis, stock comparison, ETF research, and lightweight backtesting workflows.",
    tags: ["Next.js", "Python", "Yahoo Finance", "Charts"],
    links: {
      primary: { label: "View Repo", href: "https://github.com/GAcamellia/ai-stock-analyzer" },
      secondary: { label: "Live Demo Later", href: "#" }
    },
    notes: [
      "Built around practical research tasks such as comparison, valuation checks, ETF review, and simple strategy tests.",
      "Designed to be readable and exploratory instead of feeling like a spreadsheet dump."
    ]
  },
  {
    id: "desktop-pet-platform",
    title: "Desktop Pet Platform",
    year: "2026",
    status: "building",
    statusLabel: "Building",
    category: "Desktop App",
    visualTone: "warm",
    visualLabel: "Interactive",
    summary:
      "An Electron-based desktop pet platform with custom pet creation, state-driven behavior, dialogue systems, and marketplace-style pet pack management.",
    tags: ["Electron", "React", "TypeScript", "Animation"],
    links: {
      primary: { label: "View Repo", href: "https://github.com/GAcamellia/desktop-pet-platform" },
      secondary: { label: "Preview Build Later", href: "#" }
    },
    notes: [
      "Explores character interaction, desktop presence, and playful tool design in a more visual product format.",
      "Includes pet creation, emotion systems, dialogue, import and export, and local marketplace features."
    ]
  }
];

const filters = ["All", ...new Set(projects.map((project) => project.category))];
let activeFilter = "All";

function renderFilters() {
  const filterRow = document.getElementById("filterRow");
  filterRow.innerHTML = "";

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-button${filter === activeFilter ? " active" : ""}`;
    button.textContent = filter;
    button.addEventListener("click", () => {
      activeFilter = filter;
      renderFilters();
      renderProjects();
    });
    filterRow.appendChild(button);
  });
}

function renderProjects() {
  const projectGrid = document.getElementById("projectGrid");
  const visibleProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  projectGrid.innerHTML = visibleProjects.map((project) => {
    const statusClass = project.status === "live" ? "status-live" : "status-building";
    const notes = project.notes.map((note) => `<li>${note}</li>`).join("");
    const tags = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
    const visualClass = project.visualTone === "warm" ? "project-visual warm" : "project-visual";
    const primaryAttrs = project.links.primary.href === "#"
      ? 'aria-disabled="true"'
      : 'target="_blank" rel="noreferrer"';
    const secondaryAttrs = project.links.secondary.href === "#"
      ? 'aria-disabled="true"'
      : 'target="_blank" rel="noreferrer"';

    return `
      <article class="project-card">
        <div class="${visualClass}">
          <span class="visual-label">${project.visualLabel}</span>
          <div class="visual-title">${project.title}</div>
        </div>
        <div class="card-body">
          <div class="card-top">
            <div>
              <div class="eyebrow">${project.category}</div>
              <h3>${project.title}</h3>
            </div>
            <div class="stack-row">
              <span class="project-year">${project.year}</span>
              <span class="status-badge ${statusClass}">${project.statusLabel}</span>
            </div>
          </div>
          <p class="card-description">${project.summary}</p>
          <div class="tag-row">${tags}</div>
        </div>
        <div class="card-footer">
          <ul>${notes}</ul>
          <div class="card-actions">
            <a class="card-link primary" href="${project.links.primary.href}" ${primaryAttrs}>${project.links.primary.label}</a>
            <a class="card-link secondary" href="${project.links.secondary.href}" ${secondaryAttrs}>${project.links.secondary.label}</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

renderFilters();
renderProjects();
