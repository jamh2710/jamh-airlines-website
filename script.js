"use strict";

/* =========================================================
   JAMH AIRLINES
   Complete website script
   - Flight search and demo bookings
   - Discover city buttons
   - Language selector with flags
   - Navigation and mobile menu
   - Newsletter form
   Currency: EUR
   ========================================================= */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const AIRPORTS = [
  ["Ethanburgh Cranwick (EHC)", "EHC"],
  ["Dublin (DUB)", "DUB"],
  ["Dubai (DXB)", "DXB"],
  ["London Heathrow (LHR)", "LHR"],
  ["London Gatwick (LGW)", "LGW"],
  ["Manchester (MAN)", "MAN"],
  ["Paris Charles de Gaulle (CDG)", "CDG"],
  ["Amsterdam Schiphol (AMS)", "AMS"],
  ["Frankfurt (FRA)", "FRA"],
  ["Munich (MUC)", "MUC"],
  ["Madrid (MAD)", "MAD"],
  ["Barcelona (BCN)", "BCN"],
  ["Rome Fiumicino (FCO)", "FCO"],
  ["Milan Malpensa (MXP)", "MXP"],
  ["Zurich (ZRH)", "ZRH"],
  ["Geneva (GVA)", "GVA"],
  ["Istanbul (IST)", "IST"],
  ["Doha (DOH)", "DOH"],
  ["Abu Dhabi (AUH)", "AUH"],
  ["Riyadh (RUH)", "RUH"],
  ["Jeddah (JED)", "JED"],
  ["Singapore Changi (SIN)", "SIN"],
  ["Tokyo Haneda (HND)", "HND"],
  ["Tokyo Narita (NRT)", "NRT"],
  ["Hong Kong (HKG)", "HKG"],
  ["Bangkok Suvarnabhumi (BKK)", "BKK"],
  ["Seoul Incheon (ICN)", "ICN"],
  ["Kuala Lumpur (KUL)", "KUL"],
  ["Delhi (DEL)", "DEL"],
  ["Mumbai (BOM)", "BOM"],
  ["Beijing Capital (PEK)", "PEK"],
  ["Shanghai Pudong (PVG)", "PVG"],
  ["Sydney (SYD)", "SYD"],
  ["Melbourne (MEL)", "MEL"],
  ["Auckland (AKL)", "AKL"],
  ["Johannesburg (JNB)", "JNB"],
  ["Cape Town (CPT)", "CPT"],
  ["New York JFK (JFK)", "JFK"],
  ["New York Newark (EWR)", "EWR"],
  ["Los Angeles (LAX)", "LAX"],
  ["San Francisco (SFO)", "SFO"],
  ["Chicago O'Hare (ORD)", "ORD"],
  ["Toronto Pearson (YYZ)", "YYZ"],
  ["Vancouver (YVR)", "YVR"],
  ["São Paulo (GRU)", "GRU"],
  ["Mexico City (MEX)", "MEX"],
  ["Istanbul Sabiha Gökçen (SAW)", "SAW"],
  ["Lisbon (LIS)", "LIS"],
  ["Copenhagen (CPH)", "CPH"],
  ["Stockholm Arlanda (ARN)", "ARN"],
  ["Oslo (OSL)", "OSL"],
  ["Athens (ATH)", "ATH"],
  ["Vienna (VIE)", "VIE"]
];

const LANGUAGES = {
  en: {
    name: "English",
    flag: "🇬🇧",
    translations: {
      "Book flights": "Book flights",
      "Book a flight": "Book a flight",
      "Discover": "Discover",
      "Discover destinations": "Discover destinations",
      "Destinations": "Destinations",
      "Manage booking": "Manage booking",
      "Check-in": "Check-in",
      "About us": "About us",
      "Contact us": "Contact us",
      "From": "From",
      "To": "To",
      "Departure": "Departure",
      "Return": "Return",
      "Passengers": "Passengers",
      "Cabin": "Cabin",
      "Search flights": "Search flights",
      "Search": "Search",
      "One way": "One way",
      "Return flight": "Return flight",
      "Economy": "Economy",
      "Premium Economy": "Premium Economy",
      "Business": "Business",
      "First Class": "First Class",
      "Select flight": "Select flight",
      "Available flights": "Available flights",
      "Non-stop": "Non-stop",
      "Discover city": "Discover city",
      "Explore destination": "Explore destination",
      "Subscribe": "Subscribe",
      "Newsletter": "Newsletter",
      "Email address": "Email address",
      "Learn more": "Learn more",
      "Welcome aboard": "Welcome aboard"
    }
  },

  ga: {
    name: "Gaeilge",
    flag: "🇮🇪",
    translations: {
      "Book flights": "Cuir eitiltí in áirithe",
      "Book a flight": "Cuir eitilt in áirithe",
      "Discover": "Faigh amach",
      "Discover destinations": "Faigh amach cinn scríbe",
      "Destinations": "Cinn scríbe",
      "Manage booking": "Bainistigh áirithint",
      "Check-in": "Seiceáil isteach",
      "About us": "Fúinn",
      "Contact us": "Déan teagmháil linn",
      "From": "Ó",
      "To": "Go",
      "Departure": "Imeacht",
      "Return": "Fill ar ais",
      "Passengers": "Paisinéirí",
      "Cabin": "Aicme",
      "Search flights": "Cuardaigh eitiltí",
      "Search": "Cuardaigh",
      "One way": "Aon bhealach",
      "Return flight": "Eitilt fillte",
      "Economy": "Geilleagar",
      "Premium Economy": "Geilleagar Préimhe",
      "Business": "Gnó",
      "First Class": "An Chéad Rang",
      "Select flight": "Roghnaigh eitilt",
      "Available flights": "Eitiltí atá ar fáil",
      "Non-stop": "Gan stad",
      "Discover city": "Faigh amach faoin gcathair",
      "Explore destination": "Déan iniúchadh ar an gceann scríbe",
      "Subscribe": "Liostáil",
      "Newsletter": "Nuachtlitir",
      "Email address": "Seoladh ríomhphoist",
      "Learn more": "Tuilleadh eolais",
      "Welcome aboard": "Fáilte ar bord"
    }
  },

  fr: {
    name: "Français",
    flag: "🇫🇷",
    translations: {
      "Book flights": "Réserver des vols",
      "Book a flight": "Réserver un vol",
      "Discover": "Découvrir",
      "Discover destinations": "Découvrir les destinations",
      "Destinations": "Destinations",
      "Manage booking": "Gérer ma réservation",
      "Check-in": "Enregistrement",
      "About us": "À propos",
      "Contact us": "Nous contacter",
      "From": "Départ",
      "To": "Destination",
      "Departure": "Départ",
      "Return": "Retour",
      "Passengers": "Passagers",
      "Cabin": "Classe",
      "Search flights": "Rechercher des vols",
      "Search": "Rechercher",
      "One way": "Aller simple",
      "Return flight": "Aller-retour",
      "Economy": "Économique",
      "Premium Economy": "Économique Premium",
      "Business": "Affaires",
      "First Class": "Première classe",
      "Select flight": "Sélectionner le vol",
      "Available flights": "Vols disponibles",
      "Non-stop": "Sans escale",
      "Discover city": "Découvrir la ville",
      "Explore destination": "Explorer la destination",
      "Subscribe": "S'abonner",
      "Newsletter": "Newsletter",
      "Email address": "Adresse e-mail",
      "Learn more": "En savoir plus",
      "Welcome aboard": "Bienvenue à bord"
    }
  },

  de: {
    name: "Deutsch",
    flag: "🇩🇪",
    translations: {
      "Book flights": "Flüge buchen",
      "Book a flight": "Einen Flug buchen",
      "Discover": "Entdecken",
      "Discover destinations": "Reiseziele entdecken",
      "Destinations": "Reiseziele",
      "Manage booking": "Buchung verwalten",
      "Check-in": "Check-in",
      "About us": "Über uns",
      "Contact us": "Kontakt",
      "From": "Von",
      "To": "Nach",
      "Departure": "Abflug",
      "Return": "Rückflug",
      "Passengers": "Passagiere",
      "Cabin": "Reiseklasse",
      "Search flights": "Flüge suchen",
      "Search": "Suchen",
      "One way": "Einfache Strecke",
      "Return flight": "Hin- und Rückflug",
      "Economy": "Economy",
      "Premium Economy": "Premium Economy",
      "Business": "Business",
      "First Class": "Erste Klasse",
      "Select flight": "Flug auswählen",
      "Available flights": "Verfügbare Flüge",
      "Non-stop": "Direktflug",
      "Discover city": "Stadt entdecken",
      "Explore destination": "Reiseziel erkunden",
      "Subscribe": "Abonnieren",
      "Newsletter": "Newsletter",
      "Email address": "E-Mail-Adresse",
      "Learn more": "Mehr erfahren",
      "Welcome aboard": "Willkommen an Bord"
    }
  },

  es: {
    name: "Español",
    flag: "🇪🇸",
    translations: {
      "Book flights": "Reservar vuelos",
      "Book a flight": "Reservar un vuelo",
      "Discover": "Descubrir",
      "Discover destinations": "Descubre destinos",
      "Destinations": "Destinos",
      "Manage booking": "Gestionar reserva",
      "Check-in": "Facturación",
      "About us": "Sobre nosotros",
      "Contact us": "Contacto",
      "From": "Desde",
      "To": "Hasta",
      "Departure": "Salida",
      "Return": "Regreso",
      "Passengers": "Pasajeros",
      "Cabin": "Clase",
      "Search flights": "Buscar vuelos",
      "Search": "Buscar",
      "One way": "Solo ida",
      "Return flight": "Ida y vuelta",
      "Economy": "Turista",
      "Premium Economy": "Turista Premium",
      "Business": "Business",
      "First Class": "Primera clase",
      "Select flight": "Seleccionar vuelo",
      "Available flights": "Vuelos disponibles",
      "Non-stop": "Sin escalas",
      "Discover city": "Descubrir ciudad",
      "Explore destination": "Explorar destino",
      "Subscribe": "Suscribirse",
      "Newsletter": "Boletín",
      "Email address": "Correo electrónico",
      "Learn more": "Más información",
      "Welcome aboard": "Bienvenido a bordo"
    }
  },

  it: {
    name: "Italiano",
    flag: "🇮🇹",
    translations: {
      "Book flights": "Prenota voli",
      "Book a flight": "Prenota un volo",
      "Discover": "Scopri",
      "Discover destinations": "Scopri le destinazioni",
      "Destinations": "Destinazioni",
      "Manage booking": "Gestisci prenotazione",
      "Check-in": "Check-in",
      "About us": "Chi siamo",
      "Contact us": "Contattaci",
      "From": "Da",
      "To": "A",
      "Departure": "Partenza",
      "Return": "Ritorno",
      "Passengers": "Passeggeri",
      "Cabin": "Classe",
      "Search flights": "Cerca voli",
      "Search": "Cerca",
      "One way": "Solo andata",
      "Return flight": "Andata e ritorno",
      "Economy": "Economy",
      "Premium Economy": "Premium Economy",
      "Business": "Business",
      "First Class": "Prima classe",
      "Select flight": "Seleziona volo",
      "Available flights": "Voli disponibili",
      "Non-stop": "Diretto",
      "Discover city": "Scopri la città",
      "Explore destination": "Esplora la destinazione",
      "Subscribe": "Iscriviti",
      "Newsletter": "Newsletter",
      "Email address": "Indirizzo email",
      "Learn more": "Scopri di più",
      "Welcome aboard": "Benvenuto a bordo"
    }
  }
};

/* =========================================================
   HELPERS
   ========================================================= */

function airportCode(value) {
  if (!value) return null;

  const match = String(value).match(/\(([A-Z]{3})\)/);

  if (match) return match[1];

  const trimmed = String(value).trim().toUpperCase();

  return /^[A-Z]{3}$/.test(trimmed) ? trimmed : null;
}

function airportName(code) {
  const found = AIRPORTS.find(([, c]) => c === code);

  if (!found) return code;

  return found[0].replace(/\s*\([A-Z]{3}\)$/, "");
}

function euro(amount) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR"
  }).format(amount);
}

function makeId(prefix = "ID") {
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${prefix}-${random}`;
}

function toast(message) {
  let el = document.getElementById("jamh-toast");

  if (!el) {
    el = document.createElement("div");
    el.id = "jamh-toast";
    el.style.cssText = [
      "position:fixed",
      "bottom:20px",
      "left:50%",
      "transform:translateX(-50%)",
      "background:#111",
      "color:#fff",
      "padding:12px 18px",
      "border-radius:8px",
      "z-index:9999",
      "font-family:sans-serif",
      "font-size:14px",
      "max-width:90%",
      "text-align:center",
      "box-shadow:0 4px 12px rgba(0,0,0,0.25)",
      "display:none"
    ].join(";");
    document.body.appendChild(el);
  }

  el.textContent = message;
  el.style.display = "block";

  clearTimeout(el._timer);
  el._timer = setTimeout(() => {
    el.style.display = "none";
  }, 4000);
}

/* =========================================================
   LANGUAGE SELECTOR
   ========================================================= */

let currentLanguage = "en";

function normalizeLanguage(value) {
  const input = String(value || "").trim().toLowerCase();

  const aliases = {
    english: "en",
    uk: "en",
    british: "en",
    gaeilge: "ga",
    irish: "ga",
    french: "fr",
    german: "de",
    spanish: "es",
    italian: "it"
  };

  const code = aliases[input] || input;

  return LANGUAGES[code] ? code : null;
}

function getLanguageButtonCode(button) {
  return normalizeLanguage(
    button.dataset.language ||
    button.dataset.lang ||
    button.dataset.locale ||
    button.getAttribute("lang") ||
    button.value ||
    button.textContent
  );
}

function getOriginalText(element) {
  if (!element.dataset.originalText) {
    element.dataset.originalText = element.textContent.trim();
  }

  return element.dataset.originalText;
}

function translatePage(languageCode) {
  const language = LANGUAGES[languageCode];

  if (!language) return;

  currentLanguage = languageCode;

  document.documentElement.lang = languageCode;

  try {
    localStorage.setItem("jamhLanguage", languageCode);
  } catch (error) {
    // ignore
  }

  $$("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const translation = language.translations[key];

    if (translation) {
      if (!element.dataset.originalText) {
        element.dataset.originalText = element.textContent;
      }

      if (element.children.length === 0) {
        element.textContent = translation;
      } else {
        [...element.childNodes].forEach(node => {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            node.textContent = translation;
          }
        });
      }
    }
  });

  const translatableElements = $$(
    "button, a, h1, h2, h3, h4, label, .section-title, .eyebrow"
  );

  translatableElements.forEach(element => {
    if (element.closest(".language-selector, .language-menu, .lang-menu")) {
      return;
    }

    const original = getOriginalText(element);
    const key = original.trim();

    if (language.translations[key]) {
      if (element.children.length === 0) {
        element.textContent = language.translations[key];
      } else {
        [...element.childNodes].forEach(node => {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            node.textContent = language.translations[key];
          }
        });
      }
    } else if (languageCode === "en") {
      if (element.children.length === 0) {
        element.textContent = original;
      } else {
        [...element.childNodes].forEach(node => {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            node.textContent = original;
          }
        });
      }
    }
  });

  $$("[placeholder]").forEach(element => {
    if (!element.dataset.originalPlaceholder) {
      element.dataset.originalPlaceholder = element.placeholder;
    }

    const original = element.dataset.originalPlaceholder;

    if (language.translations[original]) {
      element.placeholder = language.translations[original];
    } else if (languageCode === "en") {
      element.placeholder = original;
    }
  });

  $$("[aria-label]").forEach(element => {
    if (!element.dataset.originalAriaLabel) {
      element.dataset.originalAriaLabel = element.getAttribute("aria-label");
    }

    const original = element.dataset.originalAriaLabel;

    if (language.translations[original]) {
      element.setAttribute("aria-label", language.translations[original]);
    } else if (languageCode === "en") {
      element.setAttribute("aria-label", original);
    }
  });

  $$(
    "[data-language], [data-lang], [data-locale], .language-btn, .lang-btn"
  ).forEach(button => {
    const code = getLanguageButtonCode(button);

    if (!code) return;

    const selected = code === languageCode;

    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));

    const flag = LANGUAGES[code].flag;

    let flagElement = $(".language-flag, .lang-flag", button);

    if (!flagElement) {
      flagElement = document.createElement("span");
      flagElement.className = "language-flag";
      flagElement.setAttribute("aria-hidden", "true");
      button.prepend(flagElement);
    }

    flagElement.textContent = flag;
  });

  const currentLanguageDisplay =
    $("#current-language") ||
    $(".current-language") ||
    $("[data-current-language]");

  if (currentLanguageDisplay) {
    const flag = LANGUAGES[languageCode].flag;
    const name = LANGUAGES[languageCode].name;

    currentLanguageDisplay.textContent = `${flag} ${name}`;
  }

  $$("[data-language-flag], #language-flag, .current-language-flag")
    .forEach(element => {
      element.textContent = language.flag;
    });

  document.title = "Jamh Airlines";
}

document.addEventListener("click", event => {
  const button = event.target.closest(
    "[data-language], [data-lang], [data-locale], .language-btn, .lang-btn"
  );

  if (!button) return;

  const code = getLanguageButtonCode(button);

  if (!code) return;

  event.preventDefault();
  translatePage(code);
});

let savedLanguage = "en";

try {
  savedLanguage = normalizeLanguage(
    localStorage.getItem("jamhLanguage")
  ) || "en";
} catch (error) {
  savedLanguage = "en";
}

translatePage(savedLanguage);

/* =========================================================
   AIRPORT DATALISTS
   Builds a <datalist> for every hub airport input.
   Supports:
     - #origin / #destination
     - #from / #to
     - [data-airport-input]
     - [list] pointing to an existing <datalist>
   ========================================================= */

const AIRPORT_LABELS = AIRPORTS.map(([label]) => label);

function buildAirportDatalist(id) {
  let list = document.getElementById(id);

  if (!list) {
    list = document.createElement("datalist");
    list.id = id;
    document.body.appendChild(list);
  } else {
    // Clear existing options so we don't duplicate on re-run.
    list.innerHTML = "";
  }

  AIRPORT_LABELS.forEach(label => {
    const option = document.createElement("option");
    option.value = label;
    list.appendChild(option);
  });

  return list;
}

const airportInputs = $$(
  "#origin, #destination, #from, #to, [data-airport-input], " +
  "input[list='airport-options'], input[list='airports']"
);

airportInputs.forEach(input => {
  // Determine which datalist this input should use.
  let listId = input.getAttribute("list");

  if (!listId) {
    listId = input.id ? `${input.id}-options` : "airport-options";
    input.setAttribute("list", listId);
  }

  buildAirportDatalist(listId);

  // Helpful defaults so the browser shows the full list on focus.
  input.setAttribute("autocomplete", "off");
  input.setAttribute("spellcheck", "false");
  input.setAttribute("placeholder", input.placeholder || "City or airport");

  // If empty, seed with the Jamh Airlines hub.
  if (!input.value) {
    input.value = input.id === "destination"
      ? "Dubai (DXB)"
      : "Dublin (DUB)";
  }
});

/* =========================================================
   AIRPORT DIRECTORY AND DATE SETUP
   ========================================================= */

const airportOptions = $("#airport-options");

if (airportOptions && airportOptions.tagName === "DATALIST") {
  // Already handled above.
} else if (airportOptions && airportOptions.tagName === "SELECT") {
  AIRPORTS.forEach(([label]) => {
    if (
      [...airportOptions.options].some(option => option.value === label)
    ) {
      return;
    }

    const option = document.createElement("option");
    option.value = label;
    airportOptions.appendChild(option);
  });
}

const toISO = date =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

const today = new Date();
today.setHours(0, 0, 0, 0);

const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const nextWeek = new Date(today);
nextWeek.setDate(nextWeek.getDate() + 8);

const depart = $("#depart-date");
const returnDate = $("#return-date");

if (depart) {
  depart.min = toISO(today);

  if (!depart.value || depart.value < toISO(today)) {
    depart.value = toISO(tomorrow);
  }
}

if (returnDate) {
  returnDate.min = depart?.value || toISO(today);

  if (!returnDate.value || returnDate.value < returnDate.min) {
    returnDate.value = toISO(nextWeek);
  }
}

if (depart && returnDate) {
  depart.addEventListener("change", () => {
    returnDate.min = depart.value;

    if (returnDate.value < depart.value) {
      returnDate.value = depart.value;
    }
  });
}

/* =========================================================
   TRIP TYPE AND AIRPORT SWAP
   ========================================================= */

let tripType = "return";

$$(".trip-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    tripType = tab.dataset.trip || "return";

    $$(".trip-tab").forEach(item => {
      const active = item === tab;

      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });

    const returnField = $(".return-date-field");

    if (returnField) {
      returnField.style.display =
        tripType === "oneway" ? "none" : "";
    }

    if (returnDate) {
      returnDate.required = tripType !== "oneway";
    }
  });
});

$(".swap-airports")?.addEventListener("click", () => {
  const origin = $("#origin");
  const destination = $("#destination");

  if (!origin || !destination) return;

  const previousOrigin = origin.value;

  origin.value = destination.value;
  destination.value = previousOrigin;
});

/* =========================================================
   DISCOVER CITY BUTTONS
   ========================================================= */

function findAirportFromDestination(value) {
  const input = String(value || "").trim().toLowerCase();

  if (!input) return null;

  const byCode = AIRPORTS.find(([, code]) => code.toLowerCase() === input);

  if (byCode) return byCode;

  const byLabel = AIRPORTS.find(([label]) => label.toLowerCase() === input);

  if (byLabel) return byLabel;

  const byName = AIRPORTS.find(([label]) =>
    label.replace(/\s*\([A-Z]{3}\)$/, "").toLowerCase() === input
  );

  if (byName) return byName;

  const aliases = {
    "new york": "JFK",
    "new york city": "JFK",
    "istanbul": "IST",
    "tokyo": "HND",
    "sao paulo": "GRU",
    "são paulo": "GRU",
    "seoul": "ICN",
    "bangkok": "BKK",
    "singapore": "SIN",
    "dubai": "DXB",
    "paris": "CDG",
    "london": "LHR",
    "rome": "FCO",
    "milan": "MXP",
    "amsterdam": "AMS",
    "frankfurt": "FRA",
    "madrid": "MAD",
    "barcelona": "BCN",
    "sydney": "SYD",
    "melbourne": "MEL",
    "auckland": "AKL",
    "dublin": "DUB",
    "ethanburgh": "EHC",
    "cranwick": "EHC",
    "los angeles": "LAX",
    "san francisco": "SFO",
    "chicago": "ORD",
    "toronto": "YYZ",
    "vancouver": "YVR",
    "lisbon": "LIS",
    "doha": "DOH",
    "hong kong": "HKG",
    "copenhagen": "CPH",
    "stockholm": "ARN",
    "oslo": "OSL",
    "athens": "ATH",
    "vienna": "VIE",
    "zurich": "ZRH",
    "geneva": "GVA",
    "johannesburg": "JNB",
    "cape town": "CPT",
    "mexico city": "MEX",
    "delhi": "DEL",
    "mumbai": "BOM",
    "beijing": "PEK",
    "shanghai": "PVG",
    "kuala lumpur": "KUL",
    "abu dhabi": "AUH",
    "riyadh": "RUH",
    "jeddah": "JED",
    "munich": "MUC",
    "istanbul sabiha gokcen": "SAW",
    "istanbul sabiha gökçen": "SAW"
  };

  const aliasCode = aliases[input];

  return aliasCode
    ? AIRPORTS.find(([, code]) => code === aliasCode) || null
    : null;
}

function scrollToBooking() {
  const bookingSection =
    $("#booking-form") ||
    $("#flight-search-form") ||
    $(".booking-form") ||
    $("#booking") ||
    $("#book-flights");

  if (bookingSection) {
    bookingSection.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}

document.addEventListener("click", event => {
  const button = event.target.closest(
    "[data-destination], [data-city], [data-airport], .discover-city, .discover-button"
  );

  if (!button) return;

  const destinationValue =
    button.dataset.destination ||
    button.dataset.city ||
    button.dataset.airport;

  if (!destinationValue) return;

  const found = findAirportFromDestination(destinationValue);

  if (!found) {
    toast(`Sorry, we couldn't find an airport for "${destinationValue}".`);
    return;
  }

  const destinationInput = $("#destination");
  const originInput = $("#origin");

  if (!destinationInput) {
    toast(`Destination selected: ${found[0]}. Add an element with id="destination" to enable booking.`);
    return;
  }

  destinationInput.value = found[0];

  if (originInput && airportCode(originInput.value) === found[1]) {
    originInput.value = found[1] === "DUB"
      ? "Ethanburgh Cranwick (EHC)"
      : "Dublin (DUB)";
  }

  scrollToBooking();

  toast(`Destination set to ${found[0]}. Choose your dates and search flights.`);
});

/* =========================================================
   FLIGHT SEARCH
   ========================================================= */

const DURATIONS = {
  "EHC-DUB": 100,
  "EHC-LHR": 105,
  "EHC-MAN": 115,
  "EHC-CDG": 115,
  "EHC-AMS": 105,
  "DUB-LHR": 80,
  "DUB-MAN": 65,
  "DUB-CDG": 100,
  "DUB-AMS": 95,
  "DUB-DXB": 435,
  "DUB-JFK": 420,
  "DUB-EWR": 430,
  "DUB-DOH": 430,
  "DUB-SIN": 800,
  "DUB-HND": 825,
  "DUB-NRT": 825,
  "DUB-SYD": 1260,
  "DUB-MEL": 1260,
  "DUB-LAX": 660,
  "DUB-SFO": 660,
  "DUB-GRU": 660,
  "DUB-JNB": 680,
  "DUB-CPT": 700,
  "EHC-DXB": 420,
  "EHC-JFK": 450,
  "EHC-EWR": 450,
  "EHC-DOH": 390,
  "EHC-SIN": 780,
  "EHC-HND": 780,
  "EHC-NRT": 780,
  "EHC-SYD": 1200
};

function durationBetween(from, to) {
  if (from === to) return 0;

  return DURATIONS[`${from}-${to}`] ||
    DURATIONS[`${to}-${from}`] ||
    (120);
}

function getRoute(origin, destination) {
  if (!origin || !destination || origin === destination) return null;

  if (origin === "DUB" || origin === "EHC" ||
      destination === "DUB" || destination === "EHC") {
    return [origin, destination];
  }

  return [origin, "DUB", destination];
}

function getPassengers() {
  const input =
    $("#passengers") ||
    $("#passenger-count") ||
    $('[name="passengers"]');

  return Math.max(1, Math.min(9, Number(input?.value || 1)));
}

function getCabin() {
  const input =
    $("#cabin") ||
    $("#travel-class") ||
    $('[name="cabin"]') ||
    $('[name="travel-class"]');

  const value = input?.value || "Economy";

  return [
    "Economy",
    "Premium Economy",
    "Business",
    "First Class"
  ].includes(value) ? value : "Economy";
}

function farePerLeg(from, to, cabin) {
  const duration = durationBetween(from, to);

  let base = 75;

  if (duration > 120) base = 125;
  if (duration > 300) base = 240;
  if (duration > 480) base = 390;
  if (duration > 720) base = 570;
  if (duration > 1000) base = 790;

  const multipliers = {
    "Economy": 1,
    "Premium Economy": 1.65,
    "Business": 3.4,
    "First Class": 6.2
  };

  return Math.round(base * (multipliers[cabin] || 1));
}

function getAircraft(duration) {
  if (duration >= 900) return "Airbus A350-1000";
  if (duration >= 650) return "Airbus A350-900";
  if (duration >= 400) return "Boeing 777";
  return "Airbus A321";
}

function formatDuration(minutes) {
  return `${Math.floor(minutes / 60)}h ${String(minutes % 60).padStart(2, "0")}m`;
}

function formatTime(date) {
  return date.toLocaleTimeString("en-IE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
}

function formatDate(date) {
  return date.toLocaleDateString("en-IE", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

function buildFlight(route, departureDate, cabin, index) {
  const legs = [];

  for (let i = 0; i < route.length - 1; i++) {
    legs.push({
      from: route[i],
      to: route[i + 1],
      duration: durationBetween(route[i], route[i + 1])
    });
  }

  const flyingTime = legs.reduce((sum, leg) => sum + leg.duration, 0);
  const layoverTime = Math.max(0, legs.length - 1) * 100;
  const totalTime = flyingTime + layoverTime;

  const departure = new Date(`${departureDate}T08:00:00`);
  departure.setMinutes(departure.getMinutes() + index * 180);

  const arrival = new Date(departure.getTime() + totalTime * 60000);
  const aircraft = getAircraft(flyingTime);

  const fare = legs.reduce(
    (sum, leg) => sum + farePerLeg(leg.from, leg.to, cabin),
    0
  );

  return {
    id: makeId("JH"),
    route,
    legs,
    departure,
    arrival,
    aircraft,
    cabin,
    fare,
    stops: Math.max(0, legs.length - 1),
    duration: totalTime
  };
}

let currentFlights = [];
let selectedFlight = null;
let currentSearch = null;

const results = $("#flight-results");

function renderFlight(flight, passengers) {
  return `
    <article class="flight-card" data-flight-id="${flight.id}">
      <div class="flight-card-header">
        <div>
          <span>Jamh Airlines</span>
          <h3>${flight.route.join(" → ")}</h3>
          <p>${flight.stops === 0 ? "Non-stop" : `${flight.stops} connection(s)`}</p>
        </div>
        <div class="flight-price">
          <strong>${euro(flight.fare * passengers)}</strong>
          <small>${euro(flight.fare)} per passenger</small>
        </div>
      </div>

      <div class="flight-times">
        <div>
          <strong>${formatTime(flight.departure)}</strong>
          <span>${flight.route[0]}</span>
          <small>${formatDate(flight.departure)}</small>
        </div>

        <div>
          <span>${formatDuration(flight.duration)}</span>
          <hr>
          <span>${flight.stops === 0 ? "Direct flight" : "Connecting flight"}</span>
        </div>

        <div>
          <strong>${formatTime(flight.arrival)}</strong>
          <span>${flight.route[flight.route.length - 1]}</span>
          <small>${formatDate(flight.arrival)}</small>
        </div>
      </div>

      <p>${flight.aircraft} · ${flight.cabin}</p>

      <button type="button" data-select-flight="${flight.id}">
        Select flight
      </button>
    </article>
  `;
}

function searchFlights(event) {
  event?.preventDefault();

  const origin = airportCode($("#origin")?.value);
  const destination = airportCode($("#destination")?.value);

  if (!origin || !destination) {
    toast("Please select your departure and destination airports.");
    return;
  }

  if (origin === destination) {
    toast("Your departure and destination must be different.");
    return;
  }

  const departureDate = depart?.value || toISO(tomorrow);
  const returnValue = returnDate?.value || departureDate;

  if (departureDate < toISO(today)) {
    toast("Please choose a valid departure date.");
    return;
  }

  if (tripType === "return" && returnValue < departureDate) {
    toast("Your return date must be on or after your departure date.");
    return;
  }

  const passengers = getPassengers();
  const cabin = getCabin();
  const route = getRoute(origin, destination);

  currentSearch = {
    origin,
    destination,
    departureDate,
    returnDate: returnValue,
    tripType,
    passengers,
    cabin,
    route
  };

  selectedFlight = null;

  currentFlights = [
    buildFlight(route, departureDate, cabin, 0),
    buildFlight(route, departureDate, cabin, 1),
    buildFlight(route, departureDate, cabin, 2)
  ];

  if (!results) {
    toast("The flight-results element is missing from your HTML.");
    console.table(currentFlights);
    return;
  }

  results.innerHTML = `
    <section class="flight-search-summary">
      <h2>Available flights</h2>
      <p>${airportName(origin)} (${origin}) → ${airportName(destination)} (${destination})</p>
      <p>${departureDate} · ${passengers} passenger(s) · ${cabin}</p>
      ${tripType === "return" ? `<p>Return: ${returnValue}</p>` : ""}
    </section>
    ${currentFlights.map(flight => renderFlight(flight, passengers)).join("")}
  `;

  results.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

const bookingForm =
  $("#booking-form") ||
  $("#flight-search-form") ||
  $(".booking-form");

bookingForm?.addEventListener("submit", searchFlights);

const searchButton =
  $("#search-flights") ||
  $("#search-button") ||
  $(".search-flights");

if (searchButton && searchButton.type !== "submit") {
  searchButton.addEventListener("click", searchFlights);
}

/* =========================================================
   SELECT FLIGHT AND CREATE DEMO BOOKING
   ========================================================= */

document.addEventListener("click", event => {
  const button = event.target.closest("[data-select-flight]");

  if (!button) return;

  selectedFlight = currentFlights.find(
    flight => flight.id === button.dataset.selectFlight
  );

  if (!selectedFlight || !currentSearch) {
    toast("Please search for flights first.");
    return;
  }

  const total = selectedFlight.fare * currentSearch.passengers;

  let summary = $("#booking-summary");

  if (!summary) {
    summary = document.createElement("section");
    summary.id = "booking-summary";
    (results || document.body).appendChild(summary);
  }

  summary.innerHTML = `
    <h2>Review your flight</h2>
    <p><strong>Route:</strong> ${selectedFlight.route.join(" → ")}</p>
    <p><strong>Departure:</strong> ${formatDate(selectedFlight.departure)} at ${formatTime(selectedFlight.departure)}</p>
    <p><strong>Aircraft:</strong> ${selectedFlight.aircraft}</p>
    <p><strong>Cabin:</strong> ${selectedFlight.cabin}</p>
    <p><strong>Passengers:</strong> ${currentSearch.passengers}</p>
    <p><strong>Price per passenger:</strong> ${euro(selectedFlight.fare)}</p>
    <p><strong>Total:</strong> ${euro(total)}</p>
    <button type="button" id="confirm-demo-booking">Confirm demo booking</button>
    <p>This is a demo only. No payment is taken.</p>
  `;

  summary.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.addEventListener("click", event => {
  if (event.target.id !== "confirm-demo-booking") return;

  if (!selectedFlight || !currentSearch) {
    toast("Select a flight first.");
    return;
  }

  const reference = makeId("JH");

  const booking = {
    reference,
    origin: currentSearch.origin,
    destination: currentSearch.destination,
    departureDate: currentSearch.departureDate,
    returnDate: currentSearch.returnDate,
    tripType: currentSearch.tripType,
    passengers: currentSearch.passengers,
    cabin: selectedFlight.cabin,
    aircraft: selectedFlight.aircraft,
    fare: selectedFlight.fare,
    total: selectedFlight.fare * currentSearch.passengers
  };

  try {
    const bookings = JSON.parse(
      localStorage.getItem("jamhDemoBookings") || "[]"
    );

    bookings.push(booking);

    localStorage.setItem(
      "jamhDemoBookings",
      JSON.stringify(bookings)
    );
  } catch (error) {
    console.warn("Unable to save local demo booking.", error);
  }

  const summary = $("#booking-summary");

  if (summary) {
    summary.innerHTML = `
      <h2>Demo booking confirmed</h2>
      <p>Your demo reference:</p>
      <h3>${reference}</h3>
      <p><strong>Route:</strong> ${booking.origin} → ${booking.destination}</p>
      <p><strong>Departure:</strong> ${booking.departureDate}</p>
      <p><strong>Passengers:</strong> ${booking.passengers}</p>
      <p><strong>Total:</strong> ${euro(booking.total)}</p>
      <p>This is not a real ticket. No payment was taken.</p>
      <button type="button" id="copy-booking-reference" data-reference="${reference}">
        Copy reference
      </button>
    `;
  }

  toast(`Demo booking created: ${reference}`);
});

document.addEventListener("click", async event => {
  const button = event.target.closest("#copy-booking-reference");

  if (!button) return;

  try {
    await navigator.clipboard.writeText(button.dataset.reference);
    toast("Booking reference copied.");
  } catch (error) {
    window.prompt("Copy your booking reference:", button.dataset.reference);
  }
});

/* =========================================================
   MANAGE BOOKING
   ========================================================= */

const manageForm =
  $("#manage-booking-form") ||
  $("#manage-booking");

manageForm?.addEventListener("submit", event => {
  event.preventDefault();

  const referenceInput =
    $("#booking-reference", manageForm) ||
    $('[name="booking-reference"]', manageForm);

  const reference = String(referenceInput?.value || "")
    .trim()
    .toUpperCase();

  if (!reference) {
    toast("Enter your booking reference.");
    return;
  }

  let bookings = [];

  try {
    bookings = JSON.parse(
      localStorage.getItem("jamhDemoBookings") || "[]"
    );
  } catch (error) {
    bookings = [];
  }

  const booking = bookings.find(
    item => item.reference.toUpperCase() === reference
  );

  let output = $("#manage-booking-result");

  if (!output) {
    output = document.createElement("div");
    output.id = "manage-booking-result";
    manageForm.insertAdjacentElement("afterend", output);
  }

  if (!booking) {
    output.textContent =
      "No matching demo booking was found in this browser.";
    return;
  }

  output.innerHTML = `
    <h3>Booking found</h3>
    <p>Reference: ${booking.reference}</p>
    <p>Route: ${booking.origin} → ${booking.destination}</p>
    <p>Departure: ${booking.departureDate}</p>
    <p>Passengers: ${booking.passengers}</p>
    <p>Total: ${euro(booking.total)}</p>
  `;
});

/* =========================================================
   NEWSLETTER
   ========================================================= */

const newsletterForm =
  $("#newsletter-form") ||
  $(".newsletter-form");

newsletterForm?.addEventListener("submit", event => {
  event.preventDefault();

  const email = $('input[type="email"]', newsletterForm);

  if (!email || !email.checkValidity()) {
    toast("Please enter a valid email address.");
    email?.focus();
    return;
  }

  toast("Thanks for your interest in Jamh Airlines!");
  newsletterForm.reset();
});

/* =========================================================
   SMOOTH SCROLLING
   ========================================================= */

$$('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const href = link.getAttribute("href");

    if (!href || href === "#") return;

    const target = $(href);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

console.info("Jamh Airlines script loaded successfully.");
