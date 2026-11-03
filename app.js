/**
 * Kingsford British Chemical Industries - Official Web Application Logic (Multi-Page Version)
 * Features: Product catalog filter & search, Specs Modal,
 * Dark/Light Theme Switcher, Contact integration, FAQ Accordions,
 * Animated Stats Counters, Toast Notifications.
 */

// 1. Comprehensive Product Catalog Data (All 6 Products)
const PRODUCTS_DATA = [
  {
    id: 'kbci-01',
    name: 'Multi-Surface Disinfectant Pro',
    category: 'disinfectant',
    badge: 'Hospital Grade',
    image: 'images/product-1-disinfectant.jpg',
    shortDesc: 'Broad-spectrum commercial antibacterial & antiviral disinfectant. Eliminates 99.99% of hospital pathogens, enveloped viruses, and fungi with a fresh lemon aqua scent.',
    longDesc: 'Engineered for medical centers, schools, corporate facilities, and high-traffic public spaces. Our 4th-generation quaternary ammonium compound formula neutralizes pathogens on contact without harsh bleach fumes or surface pitting.',
    dilution: '1:64 (Concentrate yields 64 Gallons)',
    ph: '7.2 (Neutral Surface Safe)',
    packSize: '1 Gal Jug / 5 Gal Pail / 55 Gal Drum',
    activeAgent: 'Quaternary Ammonium Type IV',
    applications: 'Hospitals, Clinics, Gyms, Classrooms, Restrooms',
    sdsCode: 'SDS-KBCI-DIS-01',
    basePricePerGal: 28.50
  },
  {
    id: 'kbci-02',
    name: 'Heavy-Duty Industrial Degreaser',
    category: 'degreaser',
    badge: 'Ultra Strength',
    image: 'images/product-2-degreaser.jpg',
    shortDesc: 'Powerful solvent-emulsion degreaser formulated to dissolve crude petroleum, baked-on grease, motor oils, and industrial machinery soils effortlessly.',
    longDesc: 'Formulated with advanced citrus-terpene fortified surfactants. Delivers fast penetration through thick grease layers on concrete shop floors, engine bays, manufacturing rigs, and commercial kitchen hoods.',
    dilution: '1:10 (Heavy Grease) / 1:30 (Maintenance)',
    ph: '12.5 (High Alkaline Action)',
    packSize: '5 Gal Pail / 55 Gal Drum / 275 Gal Tote',
    activeAgent: 'D-Limonene & Alkaline Surfactants',
    applications: 'Machine Shops, Garages, Heavy Equipment, Oil Rigs',
    sdsCode: 'SDS-KBCI-DEG-02',
    basePricePerGal: 32.00
  },
  {
    id: 'kbci-03',
    name: 'Ultra Glass & Stainless Polish',
    category: 'janitorial',
    badge: 'Streak-Free Shine',
    image: 'images/product-3-glass-polish.jpg',
    shortDesc: 'Rapid-evaporation streak-free cleaner & protective polish for architectural glass, commercial mirrors, acrylic screens, and brushed stainless steel.',
    longDesc: 'Features an anti-static hydrophobic polymer shield that repels dust, water spots, and oily finger smudges. Evaporates cleanly with zero clouding or rainbow haze even under intense sunlight.',
    dilution: 'Ready-to-Use (RTU) / 1:4 Bulk Refill',
    ph: '6.8 (Neutral Balanced)',
    packSize: '750ml Spray / 1 Gal / 5 Gal Dispenser',
    activeAgent: 'Deionized Alcohol-Polymer Complex',
    applications: 'Showrooms, Glass Facades, Elevators, Atriums',
    sdsCode: 'SDS-KBCI-GLS-03',
    basePricePerGal: 19.50
  },
  {
    id: 'kbci-04',
    name: 'Eco Floor Cleaner Pro',
    category: 'eco-friendly',
    badge: '100% Biodegradable',
    image: 'images/product-4-floor-cleaner.jpg',
    shortDesc: 'Neutral pH eco-certified daily floor washing concentrate. Restores gloss on waxed VCT, epoxy, polished concrete, and terrazzo without residue.',
    longDesc: 'Formulated from renewable plant-derived botanical surfactants infused with natural pine and citrus oils. Completely safe for automatic ride-on scrubbers and manual damp mopping. EPA Safer Choice compliant.',
    dilution: '1:128 (1 oz per Gallon of Water)',
    ph: '7.0 (Strictly Neutral Wax-Safe)',
    packSize: '1 Gal Jug / 5 Gal Pail / 55 Gal Drum',
    activeAgent: 'Plant-Based Glucosides & Botanicals',
    applications: 'Supermarkets, Corporate Lobbies, Warehouses',
    sdsCode: 'SDS-KBCI-FLR-04',
    basePricePerGal: 24.00
  },
  {
    id: 'kbci-05',
    name: 'Bio-Enzymatic Drain & Odor Pro',
    category: 'specialty',
    badge: 'Enzyme Digesting',
    image: 'images/product-5-drain-cleaner.jpg',
    shortDesc: 'High-potency biological bacterial culture that digests fats, oils, grease (FOG), hair, and organic waste while permanently neutralizing odors.',
    longDesc: 'Contains over 200 billion active microbial spores per gallon. These bacteria colonize drain lines and grease traps, converting stubborn organics into harmless water and carbon dioxide. Eliminates noxious odors at the biological source.',
    dilution: 'Ready-to-Use (Drains) / 1:20 (Odor Spray)',
    ph: '7.5 (Non-Corrosive Biological)',
    packSize: '32 oz Bottle / 1 Gal Jug / 5 Gal Pail',
    activeAgent: 'Proprietary Multi-Strain Bacterial Blend',
    applications: 'Commercial Kitchens, Grease Traps, Restrooms',
    sdsCode: 'SDS-KBCI-ENZ-05',
    basePricePerGal: 36.50
  },
  {
    id: 'kbci-06',
    name: 'High-Foam Pressure Wash Pro',
    category: 'automotive',
    badge: 'Super Concentrated',
    image: 'images/product-6-pressure-wash.jpg',
    shortDesc: 'Ultra-dense clinging snow-foam wash detergent for commercial vehicle fleets, trucks, buses, trailers, and heavy exterior pressure washing.',
    longDesc: 'Designed for touchless pressure washer injection systems and foam cannons. Generates thick shaving-cream foam blankets that encapsulate road grime, diesel soot, and bug residue, lifting them safely away from vehicle finishes without scratching.',
    dilution: '1:50 (Foam Cannon) / 1:100 (Pressure Washer)',
    ph: '8.5 (Clear-Coat Safe)',
    packSize: '5 Gal Pail / 55 Gal Drum / 275 Gal Tote',
    activeAgent: 'High-Lubricity Synthetic Foamers',
    applications: 'Logistics Fleets, Bus Terminals, Car Washes',
    sdsCode: 'SDS-KBCI-AUT-06',
    basePricePerGal: 27.50
  }
];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavigation();
  initProductCatalog();
  initFAQAccordion();
  initContactForm();
  initStatsCounter();
  checkUrlParamsForInquiry();
});

// 2. Theme Management (Dark / Light)
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('kbci-theme') || localStorage.getItem('wcw-theme') || 'dark';

  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      if (isLight) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('kbci-theme', 'dark');
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        showToast('Switched to Dark Industrial Mode', 'info');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('kbci-theme', 'light');
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        showToast('Switched to Clean Light Mode', 'info');
      }
    });
  }
}

// 3. Navigation & Mobile Drawer
function initNavigation() {
  const header = document.querySelector('.header-main');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Sticky header scrolled state
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Create or retrieve backdrop overlay
  let backdrop = document.querySelector('.nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);
  }

  // Inject Mobile Drawer Top Bar & Footer inside .nav-menu
  if (navMenu && !navMenu.querySelector('.drawer-header')) {
    const drawerHeader = document.createElement('div');
    drawerHeader.className = 'drawer-header';
    drawerHeader.innerHTML = `
      <div class="drawer-brand">
        <div class="logo-badge mini">K</div>
        <div class="drawer-brand-text">
          <span class="d-title">Kingsford British</span>
          <span class="d-sub">Chemical Industries</span>
        </div>
      </div>
      <button class="drawer-close-btn" aria-label="Close Menu">
        <i class="fas fa-times"></i>
      </button>
    `;
    navMenu.insertBefore(drawerHeader, navMenu.firstChild);

    const drawerFooter = document.createElement('div');
    drawerFooter.className = 'drawer-footer';
    drawerFooter.innerHTML = `
      <a href="contact.html" class="btn btn-primary drawer-cta">
        <i class="fas fa-file-signature"></i> Request Commercial Quote
      </a>
      <div class="drawer-contact-info">
        <div class="drawer-phone">
          <i class="fas fa-phone-volume"></i>
          <div>
            <strong>1-800-555-0929</strong>
            <span>24/7 Emergency Hazmat Hotline</span>
          </div>
        </div>
      </div>
    `;
    navMenu.appendChild(drawerFooter);

    // Setup icons for mobile nav items
    const linkIcons = {
      'index.html': 'fa-house',
      'products.html': 'fa-flask-vial',
      'about.html': 'fa-building',
      'industries.html': 'fa-industry',
      'faq.html': 'fa-circle-question',
      'contact.html': 'fa-envelope-open-text'
    };

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href') || '';
      const matchedKey = Object.keys(linkIcons).find(k => href.includes(k));
      if (matchedKey && !link.querySelector('.nav-link-icon')) {
        const iconClass = linkIcons[matchedKey];
        const iconEl = document.createElement('i');
        iconEl.className = `fas ${iconClass} nav-link-icon`;
        link.insertBefore(iconEl, link.firstChild);
      }
    });
  }

  function openMenu() {
    navMenu?.classList.add('open');
    backdrop?.classList.add('active');
    document.body.classList.add('menu-open');
    mobileToggle?.setAttribute('aria-expanded', 'true');
    const icon = mobileToggle?.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    }
  }

  function closeMenu() {
    navMenu?.classList.remove('open');
    backdrop?.classList.remove('active');
    document.body.classList.remove('menu-open');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    const icon = mobileToggle?.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu?.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  backdrop?.addEventListener('click', closeMenu);

  navMenu?.querySelector('.drawer-close-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeMenu();
  });

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu?.classList.contains('open')) {
      closeMenu();
    }
  });

  // Close on mobile when link is clicked
  navMenu?.querySelectorAll('.nav-link, .drawer-cta').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1040) {
        closeMenu();
      }
    });
  });

  // Auto-close if resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1040 && navMenu?.classList.contains('open')) {
      closeMenu();
    }
  });
}

// 4. Products Rendering (Both on Homepage Preview & Products Page)
function initProductCatalog() {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;

  const isHomePreview = productsGrid.classList.contains('home-preview-grid');
  const itemsToRender = isHomePreview ? PRODUCTS_DATA.slice(0, 3) : PRODUCTS_DATA;

  renderProducts(itemsToRender);
  initProductFilters();
  initProductSearch();
}

function renderProducts(items) {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <i class="fas fa-flask" style="font-size: 3rem; color: var(--accent-cyan); margin-bottom: 1rem; opacity: 0.5;"></i>
        <h3 style="font-size: 1.4rem; margin-bottom: 0.5rem;">No chemical products found</h3>
        <p style="color: var(--text-muted);">Try adjusting your search query or filter tags.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(prod => `
    <article class="product-card" data-category="${prod.category}" id="${prod.id}">
      <div class="product-img-wrap">
        <img src="${prod.image}" alt="${prod.name}" class="product-img" loading="lazy">
      </div>
      <div class="product-content">
        <h3 class="product-title">${prod.name}</h3>
        <p class="product-desc">${prod.shortDesc}</p>
      </div>
    </article>
  `).join('');
}

function formatCategory(cat) {
  const map = {
    'disinfectant': 'Disinfection',
    'degreaser': 'Industrial',
    'janitorial': 'Janitorial',
    'eco-friendly': 'Eco-Friendly',
    'specialty': 'Bio-Enzymatic',
    'automotive': 'Fleet Wash'
  };
  return map[cat] || cat;
}

// 5. Product Filtering & Search
function initProductFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      const searchInput = document.getElementById('productSearchInput');
      const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

      applyFiltersAndSearch(filterValue, searchTerm);
    });
  });
}

function initProductSearch() {
  const searchInput = document.getElementById('productSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    const filterValue = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';

    applyFiltersAndSearch(filterValue, searchTerm);
  });
}

function applyFiltersAndSearch(category, query) {
  let filtered = PRODUCTS_DATA;

  if (category && category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (query) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.shortDesc.toLowerCase().includes(query) ||
      p.applications.toLowerCase().includes(query) ||
      p.sdsCode.toLowerCase().includes(query)
    );
  }

  renderProducts(filtered);
}

// 6. Product Detail & SDS Modal
window.openProductModal = function(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalContent');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-body-grid">
      <div class="modal-img-wrap">
        <img src="${product.image}" alt="${product.name}" class="modal-img">
      </div>
      <div class="modal-details">
        <span class="modal-badge">${product.badge} • ${formatCategory(product.category)}</span>
        <h2 class="modal-title">${product.name}</h2>
        <p class="modal-desc">${product.longDesc}</p>

        <table class="modal-specs-table">
          <tr>
            <td>Safety Data Sheet (SDS)</td>
            <td><strong>${product.sdsCode}</strong> (OSHA & GHS Compliant)</td>
          </tr>
          <tr>
            <td>Standard Dilution Ratio</td>
            <td>${product.dilution}</td>
          </tr>
          <tr>
            <td>Chemical pH Index</td>
            <td>${product.ph}</td>
          </tr>
          <tr>
            <td>Active Ingredients</td>
            <td>${product.activeAgent}</td>
          </tr>
          <tr>
            <td>Primary Applications</td>
            <td>${product.applications}</td>
          </tr>
          <tr>
            <td>Container Options</td>
            <td>${product.packSize}</td>
          </tr>
        </table>

        <div class="modal-actions">
          <a href="contact.html?product=${encodeURIComponent(product.name)}" class="btn btn-primary">
            <i class="fas fa-file-invoice"></i> Request Quote / Sample
          </a>
          <button class="btn btn-outline" onclick="downloadSdsSheet('${product.name}', '${product.sdsCode}')">
            <i class="fas fa-download"></i> Download SDS PDF
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeProductModal = function() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

window.downloadSdsSheet = function(productName, sdsCode) {
  showToast(`Generating certified SDS PDF for ${sdsCode}...`, 'info');
  setTimeout(() => {
    showToast(`SDS Technical Document ${sdsCode} downloaded.`, 'success');
  }, 900);
};

// 7. Auto populate inquiry on contact.html
function checkUrlParamsForInquiry() {
  const urlParams = new URLSearchParams(window.location.search);
  const productParam = urlParams.get('product');

  if (productParam) {
    const productSelect = document.getElementById('inquiryProduct');
    const messageInput = document.getElementById('inquiryMessage');

    if (productSelect) {
      productSelect.value = productParam;
    }
    if (messageInput) {
      messageInput.value = `Hello Kingsford British Chemical Industries Team,\n\nI am requesting commercial pricing, sample delivery, and technical data sheets for: ${productParam}.\n\nPlease contact me with our volume pricing options.`;
    }
  }
}

// 8. Contact Form Submission
function initContactForm() {
  const forms = document.querySelectorAll('#quoteContactForm, #landingContactForm');
  if (forms.length === 0) return;

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('[name="name"], #inquiryName, #landingName')?.value;
      const phone = form.querySelector('[name="phone"], #inquiryPhone, #landingPhone')?.value;
      const city = form.querySelector('[name="city"], #inquiryCity, #landingCity')?.value;
      const requirements = form.querySelector('[name="requirements"], #inquiryRequirements, #landingRequirements, #inquiryMessage')?.value;

      if (!name || !phone) {
        showToast('Please provide your name and phone number.', 'error');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        const origText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.innerHTML = origText;
          submitBtn.disabled = false;
          form.reset();

          showToast(`Thank you, ${name}! Your inquiry has been received. Our team will contact you shortly.`, 'success');
        }, 1200);
      }
    });
  });

  // Newsletter
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Subscribed! You will receive our chemical formulation bulletins.', 'success');
      newsletterForm.reset();
    });
  }
}

// 9. FAQ Accordion
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
}

// 10. Animated Numerical Counters on Scroll
function initStatsCounter() {
  const counters = document.querySelectorAll('.stat-number');
  if (counters.length === 0) return;
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const suffix = counter.getAttribute('data-suffix') || '';
          const isDecimal = target % 1 !== 0;
          let current = 0;
          const increment = target / 60;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = (isDecimal ? target.toFixed(1) : Math.round(target)) + suffix;
              clearInterval(timer);
            } else {
              counter.textContent = (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix;
            }
          }, 25);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-strip');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

// 11. Toast Notifications
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = 'info-circle';
  if (type === 'success') icon = 'check-circle';
  if (type === 'error') icon = 'exclamation-circle';

  toast.innerHTML = `
    <i class="fas fa-${icon}" style="color: ${type === 'success' ? '#10b981' : type === 'error' ? '#f43f5e' : '#06b6d4'}; font-size: 1.1rem;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
