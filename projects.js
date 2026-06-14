const projects = [
  {
    id: "ai-earnings-reader",
    title: "AI Earnings Reader",
    year: "2026",
    status: "building",
    statusLabel: "In Progress",
    category: "AI Product",
    visualTone: "cool",
    visualLabel: "Financial AI",
    summary:
      "A product-style financial reading platform that helps users discover companies, import public filings, and read clearer earnings briefs instead of raw disclosure text.",
    tags: ["FastAPI", "Product Design", "Financial Data", "SEC Workflow"],
    links: {
      primary: { label: "Live Demo Soon", href: "#" },
      secondary: { label: "Repository Soon", href: "#" }
    },
    notes: [
      "Built around discovery, workflow, company context, and reader-view layers.",
      "Designed for a future public launch instead of an internal tools interface."
    ]
  },
  {
    id: "next-project-placeholder",
    title: "Next Project",
    year: "TBD",
    status: "building",
    statusLabel: "Add Next",
    category: "Next Build",
    visualTone: "warm",
    visualLabel: "Portfolio Slot",
    summary:
      "A placeholder slot for your next project. Replace this with a real app, dashboard, research tool, or another product you want to showcase publicly.",
    tags: ["Template", "Portfolio", "GitHub Pages"],
    links: {
      primary: { label: "Add Demo Link", href: "#" },
      secondary: { label: "Add Repo Link", href: "#" }
    },
    notes: [
      "Keep the title short and outcome-focused.",
      "Add a public link as soon as the project is ready to share."
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
