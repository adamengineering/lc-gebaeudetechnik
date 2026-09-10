const brandStyles = document.createElement("link");
brandStyles.rel = "stylesheet";
brandStyles.href = "/css/brand.css";
document.head.append(brandStyles);

const foundationStyles = document.createElement("link");
foundationStyles.rel = "stylesheet";
foundationStyles.href = "/css/foundation.css";
document.head.append(foundationStyles);

const paletteStyles = document.createElement("link");
paletteStyles.rel = "stylesheet";
paletteStyles.href = "/css/palette.css";
document.head.append(paletteStyles);

const accentStyles = document.createElement("link");
accentStyles.rel = "stylesheet";
accentStyles.href = "/css/accents.css";
document.head.append(accentStyles);

const projectImageStyles = document.createElement("link");
projectImageStyles.rel = "stylesheet";
projectImageStyles.href = "/css/project-images.css";
document.head.append(projectImageStyles);

const teamImageStyles = document.createElement("link");
teamImageStyles.rel = "stylesheet";
teamImageStyles.href = "/css/team-images.css";
document.head.append(teamImageStyles);

const teamAccentStyles = document.createElement("link");
teamAccentStyles.rel = "stylesheet";
teamAccentStyles.href = "/css/team-accents.css";
document.head.append(teamAccentStyles);

const legalStyles = document.createElement("link");
legalStyles.rel = "stylesheet";
legalStyles.href = "/css/legal.css";
document.head.append(legalStyles);

const footerNavigationStyles = document.createElement("link");
footerNavigationStyles.rel = "stylesheet";
footerNavigationStyles.href = "/css/footer-navigation.css";
document.head.append(footerNavigationStyles);

const routeDirectories = new Set([
  "leistungen",
  "projekte",
  "ueber-uns",
  "kontakt",
  "impressum",
  "datenschutz",
]);
const pathSegments = location.pathname.split("/");
const routeDirectoryIndex = pathSegments.findIndex((segment) =>
  routeDirectories.has(segment),
);
const routeBase =
  routeDirectoryIndex >= 0
    ? pathSegments.slice(0, routeDirectoryIndex).join("/") + "/"
    : location.pathname.slice(0, location.pathname.lastIndexOf("/") + 1);
const routes = {
  "index.html": "",
  "leistungen.html": "leistungen/",
  "heizung.html": "leistungen/heizung/",
  "waermepumpen.html": "leistungen/waermepumpen/",
  "sanitaer.html": "leistungen/sanitaer/",
  "badsanierung.html": "leistungen/badsanierung/",
  "klima.html": "leistungen/klima/",
  "solar.html": "leistungen/solar/",
  "photovoltaik.html": "leistungen/photovoltaik/",
  "projekte.html": "projekte/",
  "projekt-degersheim.html": "projekte/heizungssanierung-degersheim/",
  "projekt-ziegelei.html": "projekte/ziegelei-quartier/",
  "projekt-aadorf.html": "projekte/friedauweg-aadorf/",
  "projekt-kornhausstrasse.html": "projekte/kornhausstrasse-st-gallen/",
  "projekt-kaehbachstrasse.html": "projekte/kaehbachstrasse-degersheim/",
  "projekt-windeggstrasse.html": "projekte/windeggstrasse-degersheim/",
  "ueber-uns.html": "ueber-uns/",
  "kontakt.html": "kontakt/",
  "impressum.html": "impressum/",
  "datenschutz.html": "datenschutz/",
};

const routeTarget = (target) =>
  location.protocol === "file:" ? `${target}index.html` : target;

const normalizeRoutes = () => document.querySelectorAll("a[href]").forEach((link) => {
  const current = link.getAttribute("href").replace(/^\.\//, "");
  if (Object.hasOwn(routes, current)) {
    link.setAttribute("href", routeBase + routeTarget(routes[current]));
  }
});

const isProjectsOverview =
  location.pathname.includes("/projekte/") &&
  (location.pathname.endsWith("/projekte/") ||
    location.pathname.endsWith("/projekte/index.html"));

const isServicesOverview =
  location.pathname.includes("/leistungen/") &&
  (location.pathname.endsWith("/leistungen/") ||
    location.pathname.endsWith("/leistungen/index.html"));

if (isServicesOverview) {
  document
    .querySelector(".content-grid")
    ?.classList.add("services-overview-grid");
}

const servicesOverviewStyles = document.createElement("link");
servicesOverviewStyles.rel = "stylesheet";
servicesOverviewStyles.href = "/css/services-overview.css";
document.head.append(servicesOverviewStyles);

const projectDetailStyles = document.createElement("link");
projectDetailStyles.rel = "stylesheet";
projectDetailStyles.href = "/css/project-details.css";
document.head.append(projectDetailStyles);

const projectCardUniformStyles = document.createElement("link");
projectCardUniformStyles.rel = "stylesheet";
projectCardUniformStyles.href = "/css/project-card-uniform.css";
document.head.append(projectCardUniformStyles);

const darkModeStyles = document.createElement("link");
darkModeStyles.rel = "stylesheet";
darkModeStyles.href = "/css/dark-mode.css";
document.head.append(darkModeStyles);

const mobileNavigationStyles = document.createElement("link");
mobileNavigationStyles.rel = "stylesheet";
mobileNavigationStyles.href = "/css/mobile-navigation.css";
document.head.append(mobileNavigationStyles);

const pageHeroImageStyles = document.createElement("link");
pageHeroImageStyles.rel = "stylesheet";
pageHeroImageStyles.href = "/css/page-hero-images.css";
document.head.append(pageHeroImageStyles);

const pageHero = document.querySelector(".page-hero");
const pageHeroVariant = [
  ["/leistungen/waermepumpen/", "heating"],
  ["/leistungen/heizung/", "heating"],
  ["/leistungen/badsanierung/", "sanitary"],
  ["/leistungen/sanitaer/", "sanitary"],
  ["/leistungen/klima/", "climate"],
  ["/leistungen/photovoltaik/", "solar"],
  ["/leistungen/solar/", "solar"],
  ["/leistungen/", "services"],
  ["/ueber-uns/", "about"],
  ["/kontakt/", "contact"],
  ["/projekte/", "projects"],
].find(([path]) => location.pathname.includes(path))?.[1];

if (pageHero && pageHeroVariant) {
  pageHero.classList.add("has-image", `page-hero--${pageHeroVariant}`);
}

const addBrandLogo = () => document.querySelectorAll(".brand").forEach((brand) => {
  if (brand.querySelector(".brand-logo")) return;
  const logo = document.createElement("img");
  logo.src = "/assets/lc-logo.svg";
  logo.alt = "";
  logo.className = "brand-logo";
  logo.setAttribute("aria-hidden", "true");
  logo.width = 42;
  logo.height = 42;
  logo.style.cssText = "flex:none";
  brand.style.display = "flex";
  brand.style.alignItems = "center";
  brand.prepend(logo);
  const wordmark = document.createElement("span");
  wordmark.className = "brand-wordmark";
  wordmark.style.cssText = "display:grid;gap:.12rem;line-height:1";
  wordmark.innerHTML =
    '<strong style="font-size:1rem;color:inherit">LC Gebäudetechnik</strong><small style="display:block;font-size:.66rem;letter-spacing:.12em;color:#64748b;text-transform:uppercase">St. Gallen</small>';
  brand.replaceChildren(logo, wordmark);
  if (brand.closest(".site-footer")) {
    wordmark.querySelector("small").style.color = "#a9c2d7";
  }
});

const button = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");

if (button && nav) {
  const menuLabel = button.querySelector(".sr-only");
  const setMenuOpen = (open) => {
    nav.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    button.setAttribute("aria-expanded", String(open));
    menuLabel.textContent = open ? "Menü schliessen" : "Menü öffnen";
  };

  button.addEventListener("click", () => {
    setMenuOpen(!nav.classList.contains("open"));
  });

  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      setMenuOpen(false);
    }),
  );

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("open")) {
      setMenuOpen(false);
      button.focus();
    }
  });
}

if (!document.querySelector(".site-footer")) {
  document.body.insertAdjacentHTML(
    "beforeend",
    '<footer class="site-footer"><div class="shell footer-grid"><div><a class="brand" href="index.html"><span>L&amp;C</span> Gebäudetechnik<small>St. Gallen</small></a><p>Heizung, Sanitär, Klima &amp; Solar aus einer Hand.</p></div><div><h2>Kontakt</h2><a href="tel:+41712525545">071 252 55 45</a><a href="mailto:info@lc-gebaeudetechnik.ch">info@lc-gebaeudetechnik.ch</a><p>Industriestrasse 15<br>9015 St. Gallen</p></div><div><h2>Navigation</h2><a href="leistungen.html">Leistungen</a><a href="projekte.html">Projekte</a><a href="ueber-uns.html">Über uns</a><a href="kontakt.html">Kontakt</a></div></div><div class="shell footer-bottom">© <span data-year></span> L&amp;C Gebäudetechnik GmbH</div></footer>',
  );
}
normalizeRoutes();
addBrandLogo();

const footerNavigation = document.querySelector(
  ".site-footer .footer-grid > div:last-child",
);
if (footerNavigation && !footerNavigation.querySelector(".legal-links")) {
  footerNavigation.insertAdjacentHTML(
    "beforeend",
    '<nav class="legal-links" aria-label="Rechtliche Hinweise"><a href="./impressum.html">Impressum</a><a href="./datenschutz.html">Datenschutz</a></nav>',
  );
}
normalizeRoutes();

if (location.pathname.includes("/ueber-uns/")) {
  [
    [
      "/assets/leonardo_salvatore.png",
      "Leonardo Salvatore",
      "l.salvatore@lc-gebaeudetechnik.ch",
    ],
    [
      "/assets/cosimo_ardito.png",
      "Cosimo Ardito",
      "c.ardito@lc-gebaeudetechnik.ch",
    ],
  ].forEach(([src, alt, email], index) => {
    const card = document.querySelectorAll(".section-dark .content-card")[index];
    if (!card || card.querySelector("img")) return;
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    const content = document.createElement("div");
    while (card.firstChild) content.append(card.firstChild);
    const emailLink = document.createElement("a");
    emailLink.className = "team-email";
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
    content.append(emailLink);
    card.classList.add("team-card");
    card.append(image, content);
  });
}

const projectDetails = [
  "projekt-degersheim.html",
  "projekt-ziegelei.html",
  "projekt-aadorf.html",
  "projekt-kornhausstrasse.html",
];
document.querySelectorAll(".project-grid .project-card").forEach((card, index) => {
  if (!projectDetails[index] || card.querySelector(".project-detail-link")) return;
  const link = document.createElement("a");
  link.className = "text-link project-detail-link";
  link.href = projectDetails[index];
  link.textContent = "Projekt ansehen →";
  card.append(link);
});

if (isProjectsOverview) {
  const grid = document.querySelector(".project-grid");
  [
    {
      page: "projekt-kaehbachstrasse.html",
      image: "/assets/project_degersheim_kähbachstrasse_11.png",
      alt: "Waschtisch-Umbau in Degersheim",
      place: "Degersheim",
      title: "Kähbachstrasse 11",
      description: "Waschtisch-Umbau",
    },
    {
      page: "projekt-windeggstrasse.html",
      image: "/assets/project_windeggstrasse_12.png",
      alt: "Heizungsanlage in Degersheim",
      place: "Degersheim",
      title: "Windeggstrasse 12",
      description: "Heizungssanierung Gas zu Gas",
    },
  ].forEach((project) => {
    if (!grid || grid.querySelector(`a[href="${project.page}"]`)) return;
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `<img class="project-card-image" src="${project.image}" alt="${project.alt}"><p class="eyebrow">${project.place}</p><h2>${project.title}</h2><p>${project.description}</p><a class="text-link project-detail-link" href="${project.page}">Projekt ansehen →</a>`;
    grid.append(card);
  });
}

if (isProjectsOverview) {
  const grid = document.querySelector(".project-grid");
  const projects = [
    ["projekt-degersheim.html", "/assets/project_degersheim_bergstrasse_29.png", "Heizungsanlage in Degersheim", "Degersheim", "Heizungssanierung Einfamilienhaus", "Heizungssanierung"],
    ["projekt-ziegelei.html", "/assets/project_ziegelei_quartier.jpg", "Ziegelei Quartier in Berg TG", "Berg TG", "Ziegelei Quartier", "Gebäudetechnik im Quartier"],
    ["projekt-aadorf.html", "/assets/project_aadorf_friedauweg.png", "Sonnenkollektoren in Aadorf", "Aadorf", "Friedauweg 2+4", "Installation von Sonnenkollektoren"],
    ["projekt-kornhausstrasse.html", "/assets/project_kornhausstrasse_25.png", "Projekt Kornhausstrasse 25 in St. Gallen", "St. Gallen", "Kornhausstrasse 25", "Energieagentur St. Gallen"],
    ["projekt-kaehbachstrasse.html", "/assets/project_degersheim_kähbachstrasse_11.png", "Waschtisch-Umbau in Degersheim", "Degersheim", "Kähbachstrasse 11", "Waschtisch-Umbau"],
    ["projekt-windeggstrasse.html", "/assets/project_windeggstrasse_12.png", "Heizungsanlage in Degersheim", "Degersheim", "Windeggstrasse 12", "Heizungssanierung Gas zu Gas"],
  ];

  if (grid) {
    grid.replaceChildren(
      ...projects.map(([page, image, alt, place, title, work]) => {
        const card = document.createElement("article");
        card.className = "project-card project-card-uniform";
        card.innerHTML = `<img src="${image}" alt="${alt}"><div class="project-card-body"><p class="eyebrow">${place}</p><h2>${title}</h2><p class="project-work">${work}</p><a class="text-link project-detail-link" href="${page}">Projekt ansehen →</a></div>`;
        return card;
      }),
    );
    normalizeRoutes();
  }
}

document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = new Date().getFullYear();
});

document.querySelectorAll("[data-contact-form]").forEach((form) =>
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.querySelector("[data-form-message]");
    message.hidden = false;
    message.textContent =
      "Vielen Dank. Ihre Anfrage ist vorbereitet; für den Versand braucht die Website noch einen angebundenen Formular-Dienst.";
  }),
);
