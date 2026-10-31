/**
 * ChronosSites — Landmark Detail Page Controller
 */

(function () {
  'use strict';

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
      "description": "The oldest and only substantially intact monument of the Seven Wonders of the Ancient World, constructed as a monumental tomb for Pharaoh Khufu. For over 3,800 years, it was the tallest human-built structure on Earth.",
      "architectural_style": "Ancient Egyptian Monumental Ashlar",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=85"
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
      "description": "A masterpiece of Byzantine architecture featuring a colossal pendentive dome, intricate golden Christian mosaics, and majestic Islamic calligraphy. Originally built under Emperor Justinian I, it stood as the world's largest cathedral for nearly a thousand years.",
      "architectural_style": "Byzantine / Ottoman Imperial",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85"
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
      "description": "The largest ancient amphitheatre ever built, constructed of travertine limestone, tuff, and brick-faced concrete under the Flavian emperors. It held an estimated 50,000 to 80,000 spectators for gladiatorial contests and public dramas.",
      "architectural_style": "Classical Roman Imperial Arcaded",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=85"
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
      "description": "Famed rock-cut architecture carved directly into vibrant pink-red sandstone desert cliffs by the Nabataean Kingdom. Known as the Rose City, Petra was an essential trading hub connecting Arabia, Egypt, and Syria.",
      "architectural_style": "Nabataean Rock-Cut Hellenistic",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1579606032822-7f7f0e74f179?auto=format&fit=crop&w=1200&q=85"
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
      "description": "An immense ivory-white marble mausoleum commissioned by Mughal Emperor Shah Jahan in memory of his favorite wife Mumtaz Mahal. Recognized as the jewel of Muslim art in India and a universally admired masterpiece of world heritage.",
      "architectural_style": "Mughal Architecture (Persian & Indian)",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
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
      "description": "A 15th-century Inca citadel situated on an Andean mountain ridge 2,430 meters above sea level. Its dry-stone walls fuse colossal polished stones together without mortar, resisting severe seismic activity.",
      "architectural_style": "Classical Inca Ashlar Masonry",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=85"
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
      "description": "A prehistoric megalithic stone circle standing in the middle of a dense Neolithic ceremonial landscape. Its monumental sarsen stones and bluestones are precisely aligned with the summer and winter solstices.",
      "architectural_style": "Neolithic Megalithic Post-and-Lintel",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1599833975787-5c143f373c30?auto=format&fit=crop&w=1200&q=85"
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
      "description": "An ancient citadel crowning a rocky precipice above Athens, epitomizing the Golden Age of Athenian democracy. The Parthenon, dedicated to goddess Athena, showcases refined Doric architectural proportions.",
      "architectural_style": "Classical Greek Doric & Ionic",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1200&q=85"
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
      "description": "The largest religious monument in the world, spanning over 400 acres. Built by Khmer King Suryavarman II as his state temple and eventual mausoleum, it transitioned from Hindu devotion to a Buddhist sanctuary.",
      "architectural_style": "Khmer Temple Mountain",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=85"
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
      "description": "A palace and fortress complex that served as the royal court of the Nasrid Dynasty. Celebrated for its intricate plaster arabesques, serene fountain courtyards, and reflections of classical Islamic Andalusian refinement.",
      "architectural_style": "Moorish / Mudéjar Islamic",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1568285563390-1c5c464c8d5a?auto=format&fit=crop&w=1200&q=85"
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
      "description": "A pre-Columbian city built by the Maya civilization. The central pyramid of Kukulkan is an astronomical marvel; during the equinoxes, the late afternoon sun casts shadows resembling a serpent slithering down its stairs.",
      "architectural_style": "Maya-Toltec Monumental",
      "unesco_world_heritage": true,
      "image_url": "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=85"
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
      "description": "A 330-meter puddle iron lattice tower erected on the Champ de Mars for the 1889 Exposition Universelle. An international cultural icon and a testament to industrial metallurgy.",
      "architectural_style": "19th Century Structural Puddle Iron",
      "unesco_world_heritage": false,
      "image_url": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=85"
    }
  ];

  function calculateAntiquity(yearBuilt) {
    const currentYear = new Date().getFullYear();
    let ageYears = 0;
    let formattedBuiltYear = '';

    if (yearBuilt < 0) {
      const bceYear = Math.abs(yearBuilt);
      ageYears = currentYear + bceYear - 1;
      formattedBuiltYear = `${bceYear.toLocaleString()} BCE`;
    } else {
      ageYears = currentYear - yearBuilt;
      formattedBuiltYear = `${yearBuilt} CE`;
    }

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

  function evaluateVisitingStatus(openingTime, closingTime, timezone) {
    try {
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

      const isOpen = currentTotalMins >= openTotalMins && currentTotalMins < closeTotalMins;

      if (isOpen) {
        const minutesToClose = closeTotalMins - currentTotalMins;
        if (minutesToClose <= 60 && minutesToClose > 0) {
          return {
            status: 'closing',
            cssClass: 'status-closing',
            label: `Closing Soon (in ${minutesToClose}m)`,
            detail: `Currently open until ${closingTime} (Local site time: ${siteTimeString})`
          };
        }
        return {
          status: 'open',
          cssClass: 'status-open',
          label: 'Open Now for Visitors',
          detail: `Operating until ${closingTime} today (Local site time: ${siteTimeString})`
        };
      } else {
        return {
          status: 'closed',
          cssClass: 'status-closed',
          label: 'Currently Closed',
          detail: `Opens daily at ${openingTime} (Local site time: ${siteTimeString})`
        };
      }
    } catch (err) {
      return {
        status: 'unknown',
        cssClass: 'status-closed',
        label: `${openingTime} - ${closingTime}`,
        detail: `Operating hours: ${openingTime} to ${closingTime}`
      };
    }
  }

  async function initDetailPage() {
    // Sync theme
    const savedTheme = localStorage.getItem('chronos_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const params = new URLSearchParams(window.location.search);
    const siteId = params.get('id');

    let allSites = FALLBACK_SITES;
    try {
      const res = await fetch('data/sites.json');
      if (res.ok) {
        const json = await res.json();
        if (Array.isArray(json) && json.length > 0) {
          allSites = json;
        }
      }
    } catch (e) {
      // offline/file fallback
    }

    // Default to the first site if none specified in URL
    const site = allSites.find(s => s.id === siteId) || allSites[0];

    if (!site) {
      document.getElementById('detailName').textContent = 'Landmark Not Found';
      return;
    }

    // Render fields
    document.title = `${site.name} — Antiquity & Visiting Information`;
    document.getElementById('pageTitle').textContent = `${site.name} — Antiquity & Visiting Information`;

    const heroImg = document.getElementById('detailHeroImg');
    heroImg.src = site.image_url;
    heroImg.alt = `Photography of ${site.name}`;

    document.getElementById('detailName').textContent = site.name;
    document.getElementById('detailLocation').textContent = `📍 ${site.city}, ${site.country}`;
    document.getElementById('detailEraTag').textContent = site.historical_era;

    if (site.unesco_world_heritage) {
      document.getElementById('detailUnescoTag').style.display = 'inline-block';
    }

    document.getElementById('detailDescription').textContent = site.description;
    document.getElementById('detailArchStyle').textContent = site.architectural_style || 'Monumental Architecture';

    // Antiquity Calculations
    const antiquity = calculateAntiquity(site.year_built);
    document.getElementById('detailAgeYears').textContent = antiquity.formattedAge;
    document.getElementById('currentYearDisplay').textContent = new Date().getFullYear();
    document.getElementById('detailBuiltYear').textContent = antiquity.formattedBuiltYear;
    document.getElementById('detailEra').textContent = site.historical_era;
    document.getElementById('detailCentury').textContent = antiquity.eraCentury;

    // Visiting Status
    const visiting = evaluateVisitingStatus(site.opening_time, site.closing_time, site.timezone);
    const badge = document.getElementById('detailBadgeStatus');
    badge.className = `badge-status ${visiting.cssClass}`;
    document.getElementById('detailStatusText').textContent = visiting.label;

    document.getElementById('detailHours').textContent = `${site.opening_time} – ${site.closing_time} Daily`;
    document.getElementById('detailTimezone').textContent = site.timezone;
    document.getElementById('detailPrice').textContent = site.ticket_price || 'Free / Inquiry at Gate';
    document.getElementById('detailLiveNotice').textContent = visiting.detail;

    // Map Link
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.name + ' ' + site.city + ' ' + site.country)}`;
    document.getElementById('detailMapLink').href = mapUrl;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDetailPage);
  } else {
    initDetailPage();
  }

})();
