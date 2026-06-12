import { recetas } from '../data/recetas.js';
import { initNevera } from './ia.js';
import { initWeeklyMenu } from './ia.js';
import { initRSS, getHarvestedRssRecipes } from './rss.js';

export const imageMap = {
  "tortilla-patatas-microondas": "https://images.unsplash.com/photo-1574969884448-fe5bce3d0d51?w=600&auto=format&fit=crop&q=80",
  "salmon-esparragos-airfryer": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&auto=format&fit=crop&q=80",
  "pechuga-pollo-limon-vitro": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&auto=format&fit=crop&q=80",
  "pasta-atun-tomate-rapida": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80",
  "gnocchi-queso-bacon-airfryer": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80",
  "patatas-hasselback-airfryer": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80",
  "arroz-tres-delicias-micro": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80",
  "merluza-papillote-micro": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80",
  "crema-calabacin-quesitos": "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&auto=format&fit=crop&q=80",
  "lentejas-chorizo-bote": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop&q=80",
  "alitas-pollo-crujientes-airfryer": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop&q=80",
  "berenjenas-rellenas-atun-horno": "https://images.unsplash.com/photo-1590137876181-2a5a7e340308?w=600&auto=format&fit=crop&q=80",
  "solomillo-cerdo-pimienta-vitro": "https://images.unsplash.com/photo-1602881917760-7379db593981?w=600&auto=format&fit=crop&q=80",
  "garbanzos-crujientes-especias": "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?w=600&auto=format&fit=crop&q=80",
  "mac-and-cheese-facil": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&auto=format&fit=crop&q=80",
  "mug-cake-chocolate-micro": "https://images.unsplash.com/photo-1586985289688-ca9acf2f550c?w=600&auto=format&fit=crop&q=80",
  "fajitas-pollo-rapidas": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=80",
  "lubina-espalda-horno": "https://images.unsplash.com/photo-1534080391025-097b03b2afac?w=600&auto=format&fit=crop&q=80",
  "gulas-al-ajillo-gambas": "https://images.unsplash.com/photo-1535401991746-da3d9055713e?w=600&auto=format&fit=crop&q=80",
  "mini-pizzas-pita": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
  "sopa-picadillo-rapida": "https://images.unsplash.com/photo-1547592165-e1d17fed6005?w=600&auto=format&fit=crop&q=80",
  "albondigas-pollo-cebolla": "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&auto=format&fit=crop&q=80",
  "pisto-huevo-cuajado": "https://images.unsplash.com/photo-1598214886806-c87b2c37076b?w=600&auto=format&fit=crop&q=80",
  "dorada-horno-patatas": "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&auto=format&fit=crop&q=80",
  "quiche-jamon-queso-rapida": "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&auto=format&fit=crop&q=80",
  "langostinos-al-ajillo-micro": "https://images.unsplash.com/photo-1559737607-a3782c17de9a?w=600&auto=format&fit=crop&q=80",
  "revuelto-setas-gulas": "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&auto=format&fit=crop&q=80",
  "contramuslos-pollo-horno": "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=600&auto=format&fit=crop&q=80",
  "garbanzos-espinacas-bacon": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
  "pollo-curry-rapido": "https://images.unsplash.com/photo-1631292780214-c2e8d3509618?w=600&auto=format&fit=crop&q=80",
  "pescadilla-patatas-micro": "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600&auto=format&fit=crop&q=80",
  "patatas-bacon-queso-horno": "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&auto=format&fit=crop&q=80",
  "brocoli-gratinado-airfryer": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
  "arroz-caldoso-marisco": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80",
  "empanadillas-atun-airfryer": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
  "champinones-al-ajillo-vitro": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80",
  "crema-verduras-temporada": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop&q=80",
  "lomo-cerdo-sal-micro": "https://images.unsplash.com/photo-1602881917760-7379db593981?w=600&auto=format&fit=crop&q=80",
  "huevos-rellenos-atun": "https://images.unsplash.com/photo-1598215437240-887fbd0cd0e6?w=600&auto=format&fit=crop&q=80",
  "gnocchi-bolonesa-rapida": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80",
  "salmon-teriyaki-sarten": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&auto=format&fit=crop&q=80",
  "pollo-cajun-airfryer": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop&q=80",
  "sopa-ajo-castellana": "https://images.unsplash.com/photo-1547592165-e1d17fed6005?w=600&auto=format&fit=crop&q=80",
  "quesadillas-jamon-queso": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=80",
  "merluza-salsa-verde": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80",
  "mug-cake-vainilla": "https://images.unsplash.com/photo-1586985289688-ca9acf2f550c?w=600&auto=format&fit=crop&q=80",
  "salchichas-vino-blanco": "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&auto=format&fit=crop&q=80",
  "patatas-bolsa-mejillones": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80"
};

// State
let favorites = JSON.parse(localStorage.getItem('fav_recipes')) || [];
let activeFilters = {
  searchText: '',
  metodo: '',
  categoria: '',
  porciones: 'todos',
  precio: 'todos',
  favsOnly: false
};
let currentModalRecipe = null;
let currentKitchenStep = 0;

// DOM Elements
const navButtons = document.querySelectorAll('.nav-tab');
const tabContents = document.querySelectorAll('.tab-content');
const recipesGrid = document.getElementById('recipes-grid');
const searchInput = document.getElementById('recipe-search');
const clearSearchBtn = document.getElementById('clear-search-btn');
const filterMetodoGroup = document.getElementById('filter-metodo');
const filterCategoriaGroup = document.getElementById('filter-categoria');
const selectPorciones = document.getElementById('filter-porciones');
const selectPrecio = document.getElementById('filter-precio');
const favsOnlyCheckbox = document.getElementById('filter-favs-only');
const resetFiltersBtn = document.getElementById('reset-filters-btn');
const recipesCountText = document.getElementById('recipes-count-text');
const favBadgeCount = document.getElementById('fav-count');

// Modal Elements
const recipeModal = document.getElementById('recipe-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const toggleKitchenModeBtn = document.getElementById('toggle-kitchen-mode');
const modalFavToggleBtn = document.getElementById('modal-fav-toggle-btn');
const modalFavHeart = document.getElementById('modal-fav-heart');
const modalFavText = document.getElementById('modal-fav-text');

// Kitchen Mode Elements
const kitchenOverlay = document.getElementById('kitchen-overlay');
const kitchenCloseBtn = document.getElementById('kitchen-close-btn');
const kitchenProgressBar = document.getElementById('kitchen-progress-bar');
const kitchenRecipeTitle = document.getElementById('kitchen-recipe-title');
const kitchenStepCounter = document.getElementById('kitchen-step-counter');
const kitchenStepText = document.getElementById('kitchen-step-text');
const kitchenPrevBtn = document.getElementById('kitchen-prev-btn');
const kitchenNextBtn = document.getElementById('kitchen-next-btn');

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initSearchAndFilters();
  initModalEvents();
  initKitchenModeEvents();
  updateFavBadge();
  renderRecipes();

  // Initialize sub-modules
  initNevera(recetas);
  initWeeklyMenu(recetas);
  initRSS(() => {
    // When live RSS feeds finish harvesting, reload the main recipes grid
    renderRecipes();
  });
});

/* ==========================================================================
   TABS / SPA NAVIGATION
   ========================================================================== */
function initTabs() {
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTabId = button.getAttribute('data-tab');

      // Update active nav button
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Update active content section
      tabContents.forEach(tab => {
        tab.classList.remove('active');
        if (tab.id === targetTabId) {
          tab.classList.add('active');
        }
      });

      // Special action: scroll to top when changing tab
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Logo button returns to Recipes home tab
  document.getElementById('logo-btn').addEventListener('click', () => {
    navButtons[0].click();
  });

  // Favorites badge click activates explorer and turns on favorites filter
  document.getElementById('header-favs-btn').addEventListener('click', () => {
    navButtons[0].click();
    favsOnlyCheckbox.checked = true;
    activeFilters.favsOnly = true;
    favsOnlyCheckbox.dispatchEvent(new Event('change'));
  });
}

/* ==========================================================================
   RECIPES RENDER & CARDS
   ========================================================================== */
export function createRecipeCardHtml(recipe, isExternal = false, matchPercent = 0) {
  const isFav = favorites.includes(recipe.id);
  const imageUrl = isExternal ? (recipe.imagen || '') : (imageMap[recipe.id] || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&auto=format&fit=crop&q=60');
  
  const superTags = (recipe.supermercados || []).map(sup => {
    const supClass = sup.toLowerCase().replace(/[^a-z0-9]/g, '');
    return `<span class="supermarket-tag ${supClass}">${sup}</span>`;
  }).join('');

  return `
    <div class="recipe-card" data-id="${recipe.id}" data-external="${isExternal}">
      ${matchPercent > 0 ? `<div class="match-percentage">Coincidencia: ${matchPercent}%</div>` : ''}
      <div class="recipe-card-header">
        <img src="${imageUrl}" alt="${recipe.titulo}" loading="lazy">
        <span class="card-method-badge">${recipe.metodo}</span>
        ${!isExternal ? `
          <button class="card-fav-btn ${isFav ? 'is-favorite' : ''}" data-id="${recipe.id}" title="${isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        ` : ''}
      </div>
      <div class="recipe-card-body">
        <div class="card-supermarkets">
          ${superTags}
        </div>
        <h3>${recipe.titulo}</h3>
        <p>${recipe.descripcion}</p>
        <div class="recipe-card-meta">
          <div class="meta-val">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>${recipe.tiempo} min</span>
          </div>
          <div class="meta-val price">
            <span class="euro-symbol">€</span>
            <span>${recipe.coste.toFixed(2)}€</span>
          </div>
          <div class="meta-val" style="margin-left: auto;">
            <span>${recipe.porciones} rac.</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderRecipes() {
  const rssRecipes = getHarvestedRssRecipes() || [];
  const allRecipes = [...recetas, ...rssRecipes];

  const filtered = allRecipes.filter(recipe => {
    // 1. Text search
    if (activeFilters.searchText) {
      const q = activeFilters.searchText.toLowerCase();
      const titleMatch = recipe.titulo.toLowerCase().includes(q);
      const descMatch = recipe.descripcion.toLowerCase().includes(q);
      const ingMatch = recipe.ingredientes.some(ing => ing.nombre.toLowerCase().includes(q));
      const catMatch = recipe.categorias.some(cat => cat.toLowerCase().includes(q));
      const metMatch = recipe.metodo.toLowerCase().includes(q);
      
      if (!titleMatch && !descMatch && !ingMatch && !catMatch && !metMatch) {
        return false;
      }
    }

    // 2. Method filter
    if (activeFilters.metodo && recipe.metodo !== activeFilters.metodo) {
      return false;
    }

    // 3. Category filter
    if (activeFilters.categoria) {
      // Special check: "Económicas" refers to cost < 5€, "Cenas rápidas" refers to time < 15 min
      if (activeFilters.categoria === "Económicas") {
        if (recipe.coste >= 5.0) return false;
      } else if (activeFilters.categoria === "Cenas rápidas") {
        if (recipe.tiempo > 15) return false;
      } else if (!recipe.categorias.includes(activeFilters.categoria) && !recipe.titulo.toLowerCase().includes(activeFilters.categoria.toLowerCase())) {
        // Fallback checks for Pollo, Carne, Pescado, etc.
        const matchesCategory = recipe.categorias.some(cat => cat.toLowerCase().includes(activeFilters.categoria.toLowerCase()));
        if (!matchesCategory) return false;
      }
    }

    // 4. Portions filter
    if (activeFilters.porciones !== 'todos') {
      if (recipe.porciones !== parseInt(activeFilters.porciones)) {
        return false;
      }
    }

    // 5. Price filter
    if (activeFilters.precio !== 'todos') {
      if (activeFilters.precio === 'barato' && recipe.coste >= 2.50) return false;
      if (activeFilters.precio === 'medio' && (recipe.coste < 2.50 || recipe.coste >= 4.00)) return false;
    }

    // 6. Favorites filter
    if (activeFilters.favsOnly) {
      if (!favorites.includes(recipe.id)) {
        return false;
      }
    }

    return true;
  });

  // Update counter
  recipesCountText.textContent = `Mostrando ${filtered.length} receta${filtered.length === 1 ? '' : 's'}`;

  // Grid output
  if (filtered.length === 0) {
    recipesGrid.innerHTML = `
      <div class="info-card-empty">
        <p>No se encontraron recetas con los filtros seleccionados. Intenta buscar otra cosa o limpiar los filtros.</p>
      </div>
    `;
  } else {
    recipesGrid.innerHTML = filtered.map(recipe => createRecipeCardHtml(recipe)).join('');
  }

  // Hook details triggers on the grid cards
  attachCardEvents();
}

function attachCardEvents() {
  const rssRecipes = getHarvestedRssRecipes() || [];
  const allRecipes = [...recetas, ...rssRecipes];

  document.querySelectorAll('#recipes-grid .recipe-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // If clicking favorites button on card, prevent detail modal
      if (e.target.closest('.card-fav-btn')) {
        e.stopPropagation();
        const id = e.target.closest('.card-fav-btn').getAttribute('data-id');
        toggleFavorite(id);
        return;
      }
      const id = card.getAttribute('data-id');
      const recipe = allRecipes.find(r => r.id === id);
      if (recipe) {
        openRecipeModal(recipe);
      }
    });
  });
}

/* ==========================================================================
   SEARCH & FILTERS CONTROL
   ========================================================================== */
function initSearchAndFilters() {
  // Search text input
  searchInput.addEventListener('input', (e) => {
    activeFilters.searchText = e.target.value;
    clearSearchBtn.style.display = e.target.value ? 'block' : 'none';
    renderRecipes();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    activeFilters.searchText = '';
    clearSearchBtn.style.display = 'none';
    renderRecipes();
  });

  // Method Chip Filters
  filterMetodoGroup.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const val = chip.getAttribute('data-value');
      if (chip.classList.contains('active')) {
        chip.classList.remove('active');
        activeFilters.metodo = '';
      } else {
        filterMetodoGroup.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeFilters.metodo = val;
      }
      renderRecipes();
    });
  });

  // Category Chip Filters
  filterCategoriaGroup.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const val = chip.getAttribute('data-value');
      if (chip.classList.contains('active')) {
        chip.classList.remove('active');
        activeFilters.categoria = '';
      } else {
        filterCategoriaGroup.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeFilters.categoria = val;
      }
      renderRecipes();
    });
  });

  // Selects
  selectPorciones.addEventListener('change', (e) => {
    activeFilters.porciones = e.target.value;
    renderRecipes();
  });

  selectPrecio.addEventListener('change', (e) => {
    activeFilters.precio = e.target.value;
    renderRecipes();
  });

  // Favorites check
  favsOnlyCheckbox.addEventListener('change', (e) => {
    activeFilters.favsOnly = e.target.checked;
    renderRecipes();
  });

  // Reset Button
  resetFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    
    filterMetodoGroup.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    filterCategoriaGroup.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    
    selectPorciones.value = 'todos';
    selectPrecio.value = 'todos';
    favsOnlyCheckbox.checked = false;
    
    activeFilters = {
      searchText: '',
      metodo: '',
      categoria: '',
      porciones: 'todos',
      precio: 'todos',
      favsOnly: false
    };
    
    renderRecipes();
  });
}

/* ==========================================================================
   FAVORITES CONTROL
   ========================================================================== */
function toggleFavorite(id) {
  const idx = favorites.indexOf(id);
  if (idx > -1) {
    favorites.splice(idx, 1);
  } else {
    favorites.push(id);
  }
  
  localStorage.setItem('fav_recipes', JSON.stringify(favorites));
  updateFavBadge();
  
  // Re-render recipes (in case favorites-only filter is on, or to toggle card icons)
  renderRecipes();
  
  // Update card buttons directly if rendered in dynamic layouts
  document.querySelectorAll(`.card-fav-btn[data-id="${id}"]`).forEach(btn => {
    btn.classList.toggle('is-favorite');
    const svg = btn.querySelector('svg');
    if (btn.classList.contains('is-favorite')) {
      svg.setAttribute('fill', 'currentColor');
    } else {
      svg.setAttribute('fill', 'none');
    }
  });

  // Update detail modal state if currently viewing it
  if (currentModalRecipe && currentModalRecipe.id === id) {
    updateModalFavButtonState(id);
  }
}

function updateFavBadge() {
  favBadgeCount.textContent = favorites.length;
  favBadgeCount.style.display = favorites.length > 0 ? 'flex' : 'none';
}

function updateModalFavButtonState(id) {
  const isFav = favorites.includes(id);
  modalFavHeart.setAttribute('fill', isFav ? 'currentColor' : 'none');
  modalFavHeart.setAttribute('stroke', isFav ? 'currentColor' : 'currentColor');
  if (isFav) {
    modalFavToggleBtn.classList.add('active');
    modalFavText.textContent = "Guardado en favoritos";
  } else {
    modalFavToggleBtn.classList.remove('active');
    modalFavText.textContent = "Añadir a favoritos";
  }
}

/* ==========================================================================
   DETAIL MODAL CONTROLLER
   ========================================================================== */
export function openRecipeModal(recipe) {
  currentModalRecipe = recipe;
  
  // Hero section setup
  const imageUrl = recipe.imagen || imageMap[recipe.id] || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&auto=format&fit=crop&q=80';
  const modalHero = document.getElementById('modal-hero-img');
  modalHero.style.backgroundImage = `url('${imageUrl}')`;
  
  document.getElementById('modal-metodo').textContent = recipe.metodo;
  document.getElementById('modal-title').textContent = recipe.titulo;
  document.getElementById('modal-desc').textContent = recipe.descripcion;
  
  // Meta details
  document.getElementById('modal-tiempo').textContent = `${recipe.tiempo} min`;
  document.getElementById('modal-coste').textContent = `${recipe.coste.toFixed(2)}€`;
  document.getElementById('modal-porciones').textContent = `${recipe.porciones} ${recipe.porciones === 1 ? 'ración' : 'raciones'}`;
  document.getElementById('modal-dificultad').textContent = recipe.dificultad;
  
  // Supermarkets
  const superContainer = document.getElementById('modal-supermercados');
  if (recipe.supermercados && recipe.supermercados.length > 0) {
    superContainer.innerHTML = recipe.supermercados.map(sup => {
      const supClass = sup.toLowerCase().replace(/[^a-z0-9]/g, '');
      return `<span class="supermarket-tag ${supClass}">${sup}</span>`;
    }).join('');
  } else {
    superContainer.innerHTML = `<span class="supermarket-tag desconocido">Supermercados locales</span>`;
  }
  
  // Ingredients checklist
  const ingredientsList = document.getElementById('modal-ingredients-list');
  if (recipe.esRSS) {
    ingredientsList.innerHTML = `
      <li style="color: var(--text-muted); cursor: default; font-size: 0.9rem; padding: 0.5rem 0;">
        <span>Los ingredientes completos se encuentran en la receta original. Ver enlace en la preparación.</span>
      </li>
    `;
  } else {
    ingredientsList.innerHTML = recipe.ingredientes.map((ing, index) => {
      return `
        <li data-index="${index}">
          <input type="checkbox" id="ing-check-${index}">
          <label for="ing-check-${index}">
            <strong>${ing.cantidad}</strong> ${ing.nombre}
            ${ing.principal ? '<span style="color:var(--accent); font-size:1.1rem; line-height:1;" title="Ingrediente principal">*</span>' : ''}
          </label>
        </li>
      `;
    }).join('');
    
    // Add listeners to ingredients checks
    ingredientsList.querySelectorAll('li').forEach(li => {
      const checkbox = li.querySelector('input[type="checkbox"]');
      
      // Toggle checked class on click
      li.addEventListener('click', (e) => {
        if (e.target !== checkbox) {
          checkbox.checked = !checkbox.checked;
        }
        li.classList.toggle('checked', checkbox.checked);
      });
      
      checkbox.addEventListener('change', () => {
        li.classList.toggle('checked', checkbox.checked);
      });
    });
  }

  // Steps list
  const stepsList = document.getElementById('modal-steps-list');
  if (recipe.esRSS) {
    toggleKitchenModeBtn.style.display = 'none';
    stepsList.innerHTML = `
      <div style="background: rgba(255, 90, 43, 0.06); border: 1px solid rgba(255, 90, 43, 0.3); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin-top: 0.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
        <p style="margin-bottom: 1.25rem; font-size: 1.05rem; line-height: 1.5; color: var(--text-primary); font-family: inherit;">
          Esta receta ha sido importada automáticamente desde <strong>${recipe.fuente}</strong>. Para ver las cantidades exactas y la preparación paso a paso, visita el artículo original:
        </p>
        <a href="${recipe.link}" target="_blank" rel="noopener noreferrer" class="primary-btn" style="display: inline-flex; justify-content: center; margin: 0 auto; padding: 0.6rem 1.25rem; font-size: 0.95rem; text-decoration: none;">
          Ver preparación en ${recipe.fuente} ➔
        </a>
      </div>
    `;
  } else {
    toggleKitchenModeBtn.style.display = 'flex';
    stepsList.innerHTML = recipe.pasos.map(step => `<li>${step}</li>`).join('');
  }

  // Favorites button
  if (recipe.id.startsWith('temp-')) {
    // Hide favorites button only for temporary AI generated recipes (not saved on reload)
    modalFavToggleBtn.style.display = 'none';
  } else {
    modalFavToggleBtn.style.display = 'flex';
    updateModalFavButtonState(recipe.id);
  }

  // Open modal
  recipeModal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Lock background scroll
}

function initModalEvents() {
  modalCloseBtn.addEventListener('click', closeModal);
  
  recipeModal.addEventListener('click', (e) => {
    if (e.target === recipeModal) {
      closeModal();
    }
  });

  // Esc key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeKitchenMode();
    }
  });

  // Fav button toggle inside modal
  modalFavToggleBtn.addEventListener('click', () => {
    if (currentModalRecipe) {
      toggleFavorite(currentModalRecipe.id);
    }
  });
}

function closeModal() {
  recipeModal.classList.remove('active');
  document.body.style.overflow = ''; // Release scroll lock
  currentModalRecipe = null;
}

/* ==========================================================================
   KITCHEN MODE SLIDER (MODO COCINA)
   ========================================================================== */
function initKitchenModeEvents() {
  toggleKitchenModeBtn.addEventListener('click', () => {
    if (currentModalRecipe) {
      openKitchenMode(currentModalRecipe);
    }
  });

  kitchenCloseBtn.addEventListener('click', closeKitchenMode);

  kitchenPrevBtn.addEventListener('click', () => {
    if (currentKitchenStep > 0) {
      currentKitchenStep--;
      renderKitchenStep();
    }
  });

  kitchenNextBtn.addEventListener('click', () => {
    if (currentModalRecipe && currentKitchenStep < currentModalRecipe.pasos.length - 1) {
      currentKitchenStep++;
      renderKitchenStep();
    } else {
      // Completed last step
      closeKitchenMode();
    }
  });
}

function openKitchenMode(recipe) {
  currentKitchenStep = 0;
  kitchenRecipeTitle.textContent = recipe.titulo;
  
  // Render step
  renderKitchenStep();
  
  // Open overlay
  kitchenOverlay.classList.add('active');
}

function renderKitchenStep() {
  if (!currentModalRecipe) return;

  const totalSteps = currentModalRecipe.pasos.length;
  const stepText = currentModalRecipe.pasos[currentKitchenStep];

  // Text contents
  kitchenStepCounter.textContent = `Paso ${currentKitchenStep + 1} de ${totalSteps}`;
  kitchenStepText.textContent = stepText;

  // Progress bar
  const progressPercent = ((currentKitchenStep + 1) / totalSteps) * 100;
  kitchenProgressBar.style.width = `${progressPercent}%`;

  // Buttons states
  kitchenPrevBtn.disabled = currentKitchenStep === 0;
  
  if (currentKitchenStep === totalSteps - 1) {
    kitchenNextBtn.textContent = '¡Terminar! 🍽️';
  } else {
    kitchenNextBtn.textContent = 'Siguiente';
  }
}

function closeKitchenMode() {
  kitchenOverlay.classList.remove('active');
}
