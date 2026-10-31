/**
 * ChronosSites — Historical Sites Info & Age Tracker
 * Tech Stack: HTML5, CSS3, Vanilla JavaScript (ES6+)
 * Multi-Agent Production Architecture
 */

(function () {
  'use strict';

  // --- Embedded Fallback Dataset (ensures 100% offline & file:// compatibility) ---
  const FALLBACK_SITES = [
    {
      "id": "giza-pyramids",
      "name": "Great Pyramid of Giza",
      "city": "Giza",
      "country": "Egypt",
      "year_built": -2560,
      "historical_era": "Ancient History",
      "opening_time": "08:00",
      "closing_time": "17:00",
      "timezone": "Africa/Cairo",
      "ticket_price": "$18 / 900 EGP",
      "description": "The oldest and only substantially intact monument of the Seven Wonders of the Ancient World, constructed as a monumental tomb for Pharaoh Khufu.",
      "architectural_style": "Ancient Egyptian Monumental",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1000&q=80"
    },
    {
      "id": "hagia-sophia",
      "name": "Hagia Sophia",
      "city": "Istanbul",
      "country": "Türkiye",
      "year_built": 537,
      "historical_era": "Early Medieval",
      "opening_time": "09:00",
      "closing_time": "19:30",
      "timezone": "Europe/Istanbul",
      "ticket_price": "$25 / 25 EUR",
      "description": "A masterpiece of Byzantine architecture featuring a colossal dome, intricate Christian mosaics, and majestic Islamic calligraphy.",
      "architectural_style": "Byzantine / Ottoman Imperial",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1000&q=80"
    },
    {
      "id": "colosseum",
      "name": "The Colosseum",
      "city": "Rome",
      "country": "Italy",
      "year_built": 80,
      "historical_era": "Classical Antiquity",
      "opening_time": "08:30",
      "closing_time": "19:15",
      "timezone": "Europe/Rome",
      "ticket_price": "$19 / 18 EUR",
      "description": "The largest ancient amphitheatre ever built, hosting gladiatorial contests and public spectacles under the Flavian emperors.",
      "architectural_style": "Classical Roman Imperial",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80"
    },
    {
      "id": "petra",
      "name": "Petra (Al-Khazneh)",
      "city": "Ma'an",
      "country": "Jordan",
      "year_built": -312,
      "historical_era": "Classical Antiquity",
      "opening_time": "06:00",
      "closing_time": "18:00",
      "timezone": "Asia/Amman",
      "ticket_price": "$70 / 50 JOD",
      "description": "Famed rock-cut architecture carved into vibrant red sandstone cliffs by the Nabataean Kingdom, also known as the Rose City.",
      "architectural_style": "Nabataean Rock-Cut Hellenistic",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1579606032822-7f7f0e74f179?auto=format&fit=crop&w=1000&q=80"
    },
    {
      "id": "taj-mahal",
      "name": "Taj Mahal",
      "city": "Agra",
      "country": "India",
      "year_built": 1648,
      "historical_era": "Early Modern",
      "opening_time": "06:00",
      "closing_time": "18:30",
      "timezone": "Asia/Kolkata",
      "ticket_price": "$14 / 1100 INR",
      "description": "An ivory-white marble mausoleum commissioned by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal.",
      "architectural_style": "Mughal Architecture",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80"
    },
    {
      "id": "machu-picchu",
      "name": "Machu Picchu",
      "city": "Cusco Region",
      "country": "Peru",
      "year_built": 1450,
      "historical_era": "Pre-Columbian",
      "opening_time": "06:00",
      "closing_time": "17:30",
      "timezone": "America/Lima",
      "ticket_price": "$45 / 152 PEN",
      "description": "A 15th-century Inca citadel situated on an Andean mountain ridge 2,430 meters above sea level, showcasing dry-stone masonry.",
      "architectural_style": "Classical Inca Masonry",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1000&q=80"
    },
    {
      "id": "stonehenge",
      "name": "Stonehenge",
      "city": "Wiltshire",
      "country": "United Kingdom",
      "year_built": -3000,
      "historical_era": "Ancient History",
      "opening_time": "09:30",
      "closing_time": "17:00",
      "timezone": "Europe/London",
      "ticket_price": "$28 / 23 GBP",
      "description": "A prehistoric megalithic stone circle standing within a dense complex of Neolithic and Bronze Age monuments.",
      "architectural_style": "Megalithic Post-and-Lintel",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1599833975787-5c143f373c30?auto=format&fit=crop&w=1000&q=80"
    },
    {
      "id": "acropolis-athens",
      "name": "The Acropolis & Parthenon",
      "city": "Athens",
      "country": "Greece",
      "year_built": -447,
      "historical_era": "Classical Antiquity",
      "opening_time": "08:00",
      "closing_time": "20:00",
      "timezone": "Europe/Athens",
      "ticket_price": "$22 / 20 EUR",
      "description": "An ancient citadel located on a rocky outcrop above Athens containing the remains of several ancient buildings of great architectural significance.",
      "architectural_style": "Classical Greek Doric & Ionic",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1000&q=80"
    },
    {
      "id": "angkor-wat",
      "name": "Angkor Wat",
      "city": "Siem Reap",
      "country": "Cambodia",
      "year_built": 1150,
      "historical_era": "High Medieval",
      "opening_time": "05:00",
      "closing_time": "17:30",
      "timezone": "Asia/Phnom_Penh",
      "ticket_price": "$37 / 37 USD",
      "description": "The largest religious monument in the world by land area, originally constructed as a Hindu temple for the Khmer Empire and later transformed into a Buddhist temple.",
      "architectural_style": "Khmer Temple Mountain",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1000&q=80"
    },
    {
      "id": "alhambra",
      "name": "The Alhambra",
      "city": "Granada",
      "country": "Spain",
      "year_built": 1238,
      "historical_era": "High Medieval",
      "opening_time": "08:30",
      "closing_time": "20:00",
      "timezone": "Europe/Madrid",
      "ticket_price": "$20 / 19 EUR",
      "description": "A palace and fortress complex constructed during the Nasrid dynasty, renowned for its intricate arabesques, courtyards, and gardens.",
      "architectural_style": "Moorish / Islamic Mudéjar",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1568285563390-1c5c464c8d5a?auto=format&fit=crop&w=1000&q=80"
    },
    {
      "id": "chichen-itza",
      "name": "Chichen Itza (El Castillo)",
      "city": "Yucatán",
      "country": "Mexico",
      "year_built": 600,
      "historical_era": "Early Medieval",
      "opening_time": "08:00",
      "closing_time": "16:30",
      "timezone": "America/Cancun",
      "ticket_price": "$35 / 614 MXN",
      "description": "A major pre-Columbian city built by the Maya people, highlighted by the step-pyramid temple of Kukulkan with astronomical alignments.",
      "architectural_style": "Maya-Toltec Monumental",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1000&q=80"
    },
    {
      "id": "eiffel-tower",
      "name": "Eiffel Tower",
      "city": "Paris",
      "country": "France",
      "year_built": 1889,
      "historical_era": "Modern Era",
      "opening_time": "09:30",
      "closing_time": "22:45",
      "timezone": "Europe/Paris",
      "ticket_price": "$31 / 29 EUR",
      "description": "A wrought-iron lattice tower designed by Gustave Eiffel for the 1889 World's Fair, an emblem of 19th-century industrial progress.",
      "architectural_style": "19th Century Structural Iron",
      "unesco_world_heritage": false,
      "image_url": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  // --- State Management ---
  const state = {
    allSites: [],
    filteredSites: [],
    searchQuery: '',
    selectedEra: 'all',
    selectedCountry: 'all',
    selectedSort: 'oldest',
    onlyOpenNow: false,
    activeSite: null
  };

  // --- DOM Element References ---
  const elements = {
    sitesGrid: document.getElementById('sitesGrid'),
    emptyState: document.getElementById('emptyState'),
    emptyResetBtn: document.getElementById('emptyResetBtn'),
    searchInput: document.getElementById('searchInput'),
    searchForm: document.getElementById('searchForm'),
    searchBtn: document.getElementById('searchBtn'),
    eraFilter: document.getElementById('eraFilter'),
    countryFilter: document.getElementById('countryFilter'),
    sortSelect: document.getElementById('sortSelect'),
    openNowToggle: document.getElementById('openNowToggle'),
    resultsCount: document.getElementById('resultsCount'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    siteDetailModal: document.getElementById('siteDetailModal'),
    modalBackdrop: document.getElementById('modalBackdrop'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalBody: document.getElementById('modalBody'),
    statTotalSites: document.getElementById('statTotalSites'),
    statOldestSite: document.getElementById('statOldestSite'),
    statOpenSites: document.getElementById('statOpenSites'),
    currentYear: document.getElementById('currentYear')
  };

  // --- Core Calculations: Age & Antiquity ---

  /**
   * Calculates the antiquity of a landmark relative to current year.
   * Handles BCE (negative values) and CE correctly.
   * @param {number} yearBuilt
   * @returns {Object} { ageYears, formattedAge, formattedBuiltYear, eraCentury }
   */
  function calculateAntiquity(yearBuilt) {
    const currentYear = new Date().getFullYear();
    let ageYears = 0;
    let formattedBuiltYear = '';

    if (yearBuilt < 0) {
      // Astronomical year 0 doesn't exist in standard history (-1 is 1 BCE)
      // Duration from 1 BCE to 1 CE is 1 year.
      const bceYear = Math.abs(yearBuilt);
      ageYears = currentYear + bceYear - 1;
      formattedBuiltYear = `${bceYear.toLocaleString()} BCE`;
    } else {
      ageYears = currentYear - yearBuilt;
      formattedBuiltYear = `${yearBuilt} CE`;
    }

    // Convert to centuries description
    const centuries = Math.ceil(Math.abs(yearBuilt) / 100);
    const eraCentury = yearBuilt < 0 
      ? `Approx. ${centuries}th Century BCE` 
      : `${centuries}th Century CE`;

    return {
      ageYears,
      formattedAge: `~${ageYears.toLocaleString()} years old`,
      formattedBuiltYear,
      eraCentury
    };
  }

  // --- Core Calculations: Visiting Hours & Live Status ---

  /**
   * Evaluates if a site is currently open based on site timezone and hours.
   * @param {string} openingTime - "HH:MM" (24h)
   * @param {string} closingTime - "HH:MM" (24h)
   * @param {string} timezone - e.g. "Europe/Istanbul"
   * @returns {Object} { status: 'open'|'closed'|'closing-soon', label: string, timeRemaining: string }
   */
  function evaluateVisitingStatus(openingTime, closingTime, timezone) {
    try {
      // Obtain current time in the site's local timezone
      const now = new Date();
      let siteTimeString = '';

      try {
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: timezone,
          hour: '2-digit',
          minute: '2-digit',
          hourCycle: 'h23'
        });
        siteTimeString = formatter.format(now);
      } catch (tzError) {
        // Fallback to client local time if timezone string is unknown
        const hours = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        siteTimeString = `${hours}:${mins}`;
      }

      const [currentHour, currentMin] = siteTimeString.split(':').map(Number);
      const currentTotalMins = currentHour * 60 + currentMin;

      const [openH, openM] = openingTime.split(':').map(Number);
      const openTotalMins = openH * 60 + openM;

      const [closeH, closeM] = closingTime.split(':').map(Number);
      const closeTotalMins = closeH * 60 + closeM;

      // Handle normal operational hours (e.g. 09:00 to 19:00)
      const isOpen = currentTotalMins >= openTotalMins && currentTotalMins < closeTotalMins;

      if (isOpen) {
        const minutesToClose = closeTotalMins - currentTotalMins;
        if (minutesToClose <= 60 && minutesToClose > 0) {
          return {
            status: 'closing',
            cssClass: 'status-closing',
            label: `Closing in ${minutesToClose}m`,
            detail: `Open now until ${closingTime} (Local site time: ${siteTimeString})`
          };
        }
        return {
          status: 'open',
          cssClass: 'status-open',
          label: 'Open Now',
          detail: `Open until ${closingTime} (Local site time: ${siteTimeString})`
        };
      } else {
        return {
          status: 'closed',
          cssClass: 'status-closed',
          label: 'Closed',
          detail: `Opens at ${openingTime} (Local site time: ${siteTimeString})`
        };
      }
    } catch (err) {
      console.warn('Error evaluating site status, falling back to static times', err);
      return {
        status: 'unknown',
        cssClass: 'status-closed',
        label: `${openingTime} - ${closingTime}`,
        detail: `Operating hours: ${openingTime} to ${closingTime}`
      };
    }
  }

  // --- Data Loading & Initialization ---

  async function loadData() {
    try {
      const response = await fetch('data/sites.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      state.allSites = Array.isArray(data) && data.length > 0 ? data : FALLBACK_SITES;
    } catch (error) {
      console.info('Direct fetch unavailable (likely file:// protocol), using embedded dataset.', error.message);
      state.allSites = FALLBACK_SITES;
    }

    populateCountryFilter();
    updateLiveMetrics();
    applyFiltersAndRender();
  }

  function populateCountryFilter() {
    const countries = Array.from(new Set(state.allSites.map(s => s.country))).sort();
    
    // Clear existing options except 'all'
    elements.countryFilter.innerHTML = '<option value="all">All Locations</option>';
    
    countries.forEach(country => {
      const opt = document.createElement('option');
      opt.value = country;
      opt.textContent = country;
      elements.countryFilter.appendChild(opt);
    });
  }

  function updateLiveMetrics() {
    const total = state.allSites.length;
    elements.statTotalSites.textContent = total;

    // Find oldest site
    const oldest = [...state.allSites].sort((a, b) => a.year_built - b.year_built)[0];
    if (oldest) {
      const { ageYears } = calculateAntiquity(oldest.year_built);
      elements.statOldestSite.textContent = `~${ageYears.toLocaleString()} yrs`;
      elements.statOldestSite.title = `${oldest.name} (${calculateAntiquity(oldest.year_built).formattedBuiltYear})`;
    }

    // Count open sites currently
    const openCount = state.allSites.filter(site => {
      const status = evaluateVisitingStatus(site.opening_time, site.closing_time, site.timezone);
      return status.status === 'open' || status.status === 'closing';
    }).length;
    elements.statOpenSites.textContent = openCount;

    // Set copyright year in footer
    if (elements.currentYear) {
      elements.currentYear.textContent = new Date().getFullYear();
    }
  }

  // --- Filtering & Sorting Engine ---

  function applyFiltersAndRender() {
    let result = [...state.allSites];

    // 1. Text Search Query
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase().trim();
      result = result.filter(site => 
        site.name.toLowerCase().includes(q) ||
        site.city.toLowerCase().includes(q) ||
        site.country.toLowerCase().includes(q) ||
        site.historical_era.toLowerCase().includes(q) ||
        site.description.toLowerCase().includes(q)
      );
    }

    // 2. Era Filter
    if (state.selectedEra !== 'all') {
      result = result.filter(site => site.historical_era === state.selectedEra);
    }

    // 3. Country Filter
    if (state.selectedCountry !== 'all') {
      result = result.filter(site => site.country === state.selectedCountry);
    }

    // 4. Open Now Toggle
    if (state.onlyOpenNow) {
      result = result.filter(site => {
        const { status } = evaluateVisitingStatus(site.opening_time, site.closing_time, site.timezone);
        return status === 'open' || status === 'closing';
      });
    }

    // 5. Sorting
    result.sort((a, b) => {
      switch (state.selectedSort) {
        case 'oldest':
          return a.year_built - b.year_built;
        case 'newest':
          return b.year_built - a.year_built;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'status': {
          const statusOrder = { 'open': 1, 'closing': 2, 'closed': 3, 'unknown': 4 };
          const statA = evaluateVisitingStatus(a.opening_time, a.closing_time, a.timezone).status;
          const statB = evaluateVisitingStatus(b.opening_time, b.closing_time, b.timezone).status;
          return (statusOrder[statA] || 4) - (statusOrder[statB] || 4);
        }
        default:
          return 0;
      }
    });

    state.filteredSites = result;
    renderSites(result);
    updateFilterMeta(result.length);
  }

  function updateFilterMeta(count) {
    const isFiltered = state.searchQuery || state.selectedEra !== 'all' || 
                       state.selectedCountry !== 'all' || state.onlyOpenNow;

    elements.resultsCount.textContent = `Showing ${count} of ${state.allSites.length} historical sites`;
    elements.resetFiltersBtn.style.display = isFiltered ? 'inline-block' : 'none';
  }

  // --- Rendering Functions ---

  function renderSites(sites) {
    elements.sitesGrid.innerHTML = '';
    elements.sitesGrid.removeAttribute('aria-busy');

    if (sites.length === 0) {
      elements.sitesGrid.style.display = 'none';
      elements.emptyState.style.display = 'block';
      return;
    }

    elements.sitesGrid.style.display = 'grid';
    elements.emptyState.style.display = 'none';

    const fragment = document.createDocumentFragment();

    sites.forEach(site => {
      const card = createSiteCard(site);
      fragment.appendChild(card);
    });

    elements.sitesGrid.appendChild(fragment);
  }

  function createSiteCard(site) {
    const card = document.createElement('article');
    card.className = 'site-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${site.name}, located in ${site.city}, ${site.country}. Click to open full details page.`);

    const antiquity = calculateAntiquity(site.year_built);
    const visiting = evaluateVisitingStatus(site.opening_time, site.closing_time, site.timezone);

    card.innerHTML = `
      <a href="detail.html?id=${encodeURIComponent(site.id)}" class="card-media" aria-label="View detailed page for ${escapeHTML(site.name)}" style="text-decoration:none; display:block;">
        <img 
          src="${escapeHTML(site.image_url)}" 
          alt="Exterior photography of ${escapeHTML(site.name)}" 
          class="card-img" 
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1000&q=80'"
        >
        <div class="card-badges">
          <span class="badge-status ${visiting.cssClass}">
            <span class="status-pulse" aria-hidden="true"></span>
            ${visiting.label}
          </span>
          ${site.unesco_world_heritage ? '<span class="badge-unesco">UNESCO Heritage</span>' : ''}
        </div>
      </a>

      <div class="card-body">
        <div class="card-location">
          <span>📍</span>
          <span>${escapeHTML(site.city)}, ${escapeHTML(site.country)}</span>
        </div>
        
        <h3 class="card-title">
          <a href="detail.html?id=${encodeURIComponent(site.id)}" style="color: inherit; text-decoration: none;">
            ${escapeHTML(site.name)}
          </a>
        </h3>
        <p class="card-description">${escapeHTML(site.description)}</p>

        <div class="antiquity-box">
          <div class="antiquity-header">
            <span class="antiquity-age">${antiquity.formattedAge}</span>
            <span class="antiquity-year">Built ${antiquity.formattedBuiltYear}</span>
          </div>
          <span class="antiquity-era">${escapeHTML(site.historical_era)} • ${antiquity.eraCentury}</span>
        </div>

        <div class="hours-preview">
          <div class="hours-times">
            <span>🕒</span>
            <span>Daily: ${escapeHTML(site.opening_time)} – ${escapeHTML(site.closing_time)}</span>
          </div>
          <a href="detail.html?id=${encodeURIComponent(site.id)}" class="hours-status-text" style="color: var(--accent-gold); text-decoration: none; font-weight: 700;">
            Full Details →
          </a>
        </div>
      </div>
    `;

    // Keyboard and click listener navigating to the dedicated detail page
    const openHandler = () => {
      window.location.href = `detail.html?id=${encodeURIComponent(site.id)}`;
    };
    card.addEventListener('click', (e) => {
      if (!e.target.closest('a')) {
        openHandler();
      }
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openHandler();
      }
    });

    return card;
  }

  // --- Modal Dialog System ---

  function openSiteModal(site) {
    state.activeSite = site;
    const antiquity = calculateAntiquity(site.year_built);
    const visiting = evaluateVisitingStatus(site.opening_time, site.closing_time, site.timezone);

    elements.modalBody.innerHTML = `
      <img 
        src="${escapeHTML(site.image_url)}" 
        alt="${escapeHTML(site.name)}" 
        class="modal-hero-image"
      >
      <div class="modal-content-inner">
        <header class="modal-header">
          <h2 id="modalTitle" class="modal-title">${escapeHTML(site.name)}</h2>
          <div class="modal-location-str">
            📍 ${escapeHTML(site.city)}, ${escapeHTML(site.country)} • ${site.unesco_world_heritage ? '🏛️ UNESCO World Heritage Site' : 'Monument of Cultural Significance'}
          </div>
        </header>

        <p class="modal-desc-full">${escapeHTML(site.description)}</p>

        <div class="modal-grid">
          <!-- Antiquity & Chronology Card -->
          <div class="modal-section-card">
            <h3 class="modal-section-title">⏳ Antiquity & Origins</h3>
            <div class="key-value-list">
              <div class="key-value-row">
                <span class="kv-label">Total Age</span>
                <span class="kv-value" style="color: var(--accent-gold);">${antiquity.formattedAge}</span>
              </div>
              <div class="key-value-row">
                <span class="kv-label">Construction Year</span>
                <span class="kv-value">${antiquity.formattedBuiltYear}</span>
              </div>
              <div class="key-value-row">
                <span class="kv-label">Historical Era</span>
                <span class="kv-value">${escapeHTML(site.historical_era)}</span>
              </div>
              <div class="key-value-row">
                <span class="kv-label">Era Period</span>
                <span class="kv-value">${antiquity.eraCentury}</span>
              </div>
              <div class="key-value-row">
                <span class="kv-label">Architectural Style</span>
                <span class="kv-value">${escapeHTML(site.architectural_style || 'Monumental Architecture')}</span>
              </div>
            </div>
          </div>

          <!-- Visiting Hours & Logistics Card -->
          <div class="modal-section-card">
            <h3 class="modal-section-title">🕒 Visiting & Operations</h3>
            <div class="key-value-list">
              <div class="key-value-row">
                <span class="kv-label">Current Status</span>
                <span class="kv-value badge-status ${visiting.cssClass}" style="display:inline-flex;">
                  <span class="status-pulse" aria-hidden="true"></span>
                  ${visiting.label}
                </span>
              </div>
              <div class="key-value-row">
                <span class="kv-label">Visiting Hours</span>
                <span class="kv-value">${escapeHTML(site.opening_time)} – ${escapeHTML(site.closing_time)} Daily</span>
              </div>
              <div class="key-value-row">
                <span class="kv-label">Site Timezone</span>
                <span class="kv-value">${escapeHTML(site.timezone)}</span>
              </div>
              <div class="key-value-row">
                <span class="kv-label">Admission Fee</span>
                <span class="kv-value">${escapeHTML(site.ticket_price || 'Inquire on entry')}</span>
              </div>
              <div class="key-value-row">
                <span class="kv-label">Live Notice</span>
                <span class="kv-value" style="font-size:0.8rem; color:var(--text-secondary);">${visiting.detail}</span>
              </div>
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:flex-end; gap:0.75rem; margin-top:1.5rem;">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.name + ' ' + site.city + ' ' + site.country)}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-primary"
          >
            🗺️ View on Google Maps
          </a>
        </div>
      </div>
    `;

    if (typeof elements.siteDetailModal.showModal === 'function') {
      elements.siteDetailModal.showModal();
    } else {
      elements.siteDetailModal.setAttribute('open', '');
    }

    elements.modalCloseBtn.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeSiteModal() {
    if (typeof elements.siteDetailModal.close === 'function') {
      elements.siteDetailModal.close();
    } else {
      elements.siteDetailModal.removeAttribute('open');
    }
    state.activeSite = null;
    document.body.style.overflow = '';
  }

  // --- Theme Management ---

  function initTheme() {
    const savedTheme = localStorage.getItem('chronos_theme');
    // Default to dark theme for authentic historical atmosphere
    const initialTheme = savedTheme || 'dark';

    setTheme(initialTheme);

    elements.themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('chronos_theme', theme);

    const icon = elements.themeToggleBtn.querySelector('.theme-icon');
    const label = elements.themeToggleBtn.querySelector('.theme-label');

    if (theme === 'dark') {
      icon.textContent = '☀️';
      label.textContent = 'Light Mode';
      elements.themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      icon.textContent = '🌙';
      label.textContent = 'Dark Mode';
      elements.themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
    }
  }

  // --- Helper Utilities ---

  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  function resetAllFilters() {
    state.searchQuery = '';
    state.selectedEra = 'all';
    state.selectedCountry = 'all';
    state.selectedSort = 'oldest';
    state.onlyOpenNow = false;

    elements.searchInput.value = '';
    elements.eraFilter.value = 'all';
    elements.countryFilter.value = 'all';
    elements.sortSelect.value = 'oldest';
    elements.openNowToggle.checked = false;

    applyFiltersAndRender();
  }

  // --- Event Listeners Setup ---

  function registerEvents() {
    // Explicit Search Button & Form Submission
    const performSearch = () => {
      state.searchQuery = elements.searchInput.value;
      applyFiltersAndRender();
    };

    if (elements.searchBtn) {
      elements.searchBtn.addEventListener('click', performSearch);
    }

    if (elements.searchForm) {
      elements.searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        performSearch();
      });
    }

    // Live search input with debounce
    elements.searchInput.addEventListener('input', debounce((e) => {
      state.searchQuery = e.target.value;
      applyFiltersAndRender();
    }, 250));

    // Era Filter
    elements.eraFilter.addEventListener('change', (e) => {
      state.selectedEra = e.target.value;
      applyFiltersAndRender();
    });

    // Country Filter
    elements.countryFilter.addEventListener('change', (e) => {
      state.selectedCountry = e.target.value;
      applyFiltersAndRender();
    });

    // Sort Selector
    elements.sortSelect.addEventListener('change', (e) => {
      state.selectedSort = e.target.value;
      applyFiltersAndRender();
    });

    // Open Now Toggle
    elements.openNowToggle.addEventListener('change', (e) => {
      state.onlyOpenNow = e.target.checked;
      applyFiltersAndRender();
    });

    // Reset Buttons
    elements.resetFiltersBtn.addEventListener('click', resetAllFilters);
    elements.emptyResetBtn.addEventListener('click', resetAllFilters);

    // Modal Events
    elements.modalCloseBtn.addEventListener('click', closeSiteModal);
    elements.modalBackdrop.addEventListener('click', closeSiteModal);
    elements.siteDetailModal.addEventListener('cancel', (e) => {
      e.preventDefault();
      closeSiteModal();
    });

    // Periodic live hours refresh every 60 seconds
    setInterval(() => {
      updateLiveMetrics();
      applyFiltersAndRender();
    }, 60000);
  }

  // --- Application Bootstrap ---
  function init() {
    initTheme();
    registerEvents();
    loadData();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

