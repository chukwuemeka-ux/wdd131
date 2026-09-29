
const services = [
  {
    id: 1,
    name: "Solar Installation",
    category: "solar",
    image: "solar-installation.webp",
    alt: "Solar panels installed on a residential rooftop",
    width: 1200,
    height: 800,
    description: "Solar power systems for homes and businesses."
  },
  {
    id: 2,
    name: "Electrical Wiring",
    category: "electrical",
    image: "electrical-wiring.webp",
    alt: "Electrician working on an electrical distribution board",
    width: 800,
    height: 533,
    description: "Electrical wiring, installations and maintenance."
  },
  {
    id: 3,
    name: "CCTV Installation",
    category: "security",
    image: "cctv-installation.webp",
    alt: "Technician installing an outdoor security camera",
    width: 800,
    height: 535,
    description: "Security camera installation for property monitoring."
  },
  {
    id: 4,
    name: "Solar Maintenance",
    category: "solar",
    image: "solar-maintenance.webp",
    alt: "Technician inspecting a solar inverter and battery",
    width: 640,
    height: 427,
    description: "Inspection, troubleshooting and servicing of solar equipment."
  }
];

const grid = document.querySelector("#services-grid");
const status = document.querySelector("#filter-status");
const buttons = document.querySelectorAll(".filter-button");
const storageKey = "princeMotherlandServiceFilter";

function renderServices(category) {
  const matches = category === "all"
    ? services
    : services.filter((service) => service.category === category);

  grid.innerHTML = matches.map((service) => `
    <article class="service-card">
      <img
        src="images/${service.image}"
        alt="${service.alt}"
        width="${service.width}"
        height="${service.height}"
        loading="lazy"
        decoding="async"
      >
      <div class="card-content">
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <a class="text-link" href="contact.html">
          Ask about ${service.name}
        </a>
      </div>
    </article>
  `).join("");

  status.textContent =
    `Showing ${matches.length} ${matches.length === 1
      ? "service"
      : "services"}.`;

  buttons.forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      `${button.dataset.filter === category}`
    );
  });
}

function setFilter(category) {
  const validCategories = [
    "all",
    "solar",
    "electrical",
    "security"
  ];

  const selected = validCategories.includes(category)
    ? category
    : "all";

  renderServices(selected);

  try {
    localStorage.setItem(storageKey, selected);
  } catch (error) {
    // Filtering still works if storage is unavailable.
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.filter);
  });
});

let savedFilter = "all";

try {
  savedFilter = localStorage.getItem(storageKey) ?? "all";
} catch (error) {
  // Use the default filter if storage is unavailable.
}

setFilter(savedFilter);