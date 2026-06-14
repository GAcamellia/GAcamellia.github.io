const projects = [
  {
    id: "ai-earnings-reader",
    title: "AI Earnings Reader",
    status: "building",
    statusLabel: "Building",
    category: "AI Product",
    summary:
      "A product-style financial reading tool that helps users discover companies, fetch public filings, and read cleaner earnings briefs instead of raw filing text.",
    tags: ["FastAPI", "Financial Data", "UI/UX", "SEC Filings"],
    links: {
      primary: { label: "Demo Coming Soon", href: "#" },
      secondary: { label: "Repository Link", href: "#" }
    },
    notes: [
      "Live company discovery and filing workflow are already designed.",
      "Reader experience is being refined for public launch quality."
    ]
  },
  {
    id: "next-project-placeholder",
    title: "Next Project Slot",
    status: "building",
    statusLabel: "Add Next",
    category: "Placeholder",
    summary:
      "Use this card as a template for your next project. Replace the title, summary, tags, and links after you launch a new piece of work.",
    tags: ["Template", "Portfolio", "GitHub Pages"],
    links: {
      primary: { label: "Project Demo", href: "#" },
      secondary: { label: "GitHub Repo", href: "#" }
    },
    notes: [
      "Every project should have a one-line outcome.",
      "If there is no live demo yet, keep the repository link visible."
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

    return `
      <article class="project-card">
        <div class="card-top">
          <div>
            <div class="eyebrow">${project.category}</div>
            <h3>${project.title}</h3>
          </div>
          <span class="status-badge ${statusClass}">${project.statusLabel}</span>
        </div>
        <p class="card-description">${project.summary}</p>
        <div class="tag-row">${tags}</div>
        <div class="card-footer">
          <ul>${notes}</ul>
          <div class="card-actions">
            <a class="card-link primary" href="${project.links.primary.href}" ${project.links.primary.href === "#" ? 'aria-disabled="true"' : 'target="_blank" rel="noreferrer"'}>${project.links.primary.label}</a>
            <a class="card-link secondary" href="${project.links.secondary.href}" ${project.links.secondary.href === "#" ? 'aria-disabled="true"' : 'target="_blank" rel="noreferrer"'}>${project.links.secondary.label}</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

renderFilters();
renderProjects();
