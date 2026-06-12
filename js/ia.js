import { createRecipeCardHtml, openRecipeModal, imageMap } from './app.js';

let selectedIngredients = [];
let weeklyMenu = JSON.parse(localStorage.getItem('weekly_menu')) || null;
let currentRecetas = []; // Will be populated with local recipes on init

/* ==========================================================================
   INIT FUNCTIONS
   ========================================================================== */
export function initNevera(recetasList) {
  currentRecetas = recetasList;

  const ingChips = document.querySelectorAll('.ing-chip');
  const selectedContainer = document.getElementById('selected-ingredients-list');
  const customIngInput = document.getElementById('custom-ing-input');
  const addCustomIngBtn = document.getElementById('add-custom-ing-btn');
  const buscarCoincidenciasBtn = document.getElementById('buscar-coincidencias-btn');
  const generarIaBtn = document.getElementById('generar-ia-btn');

  // Ingredient Chips Click
  ingChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const ingName = chip.getAttribute('data-name');
      toggleIngredient(ingName, chip);
    });
  });

  // Custom Ingredient Add
  addCustomIngBtn.addEventListener('click', () => {
    const ingName = customIngInput.value.trim();
    if (ingName) {
      addCustomIngredientChip(ingName);
      customIngInput.value = '';
    }
  });

  customIngInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addCustomIngBtn.click();
    }
  });

  // Action Buttons
  buscarCoincidenciasBtn.addEventListener('click', () => {
    buscarCoincidencias();
  });

  generarIaBtn.addEventListener('click', () => {
    generarRecetaIA();
  });
}

/* ==========================================================================
   INGREDIENTS CONTROLLER
   ========================================================================== */
function toggleIngredient(name, chipElement = null) {
  const index = selectedIngredients.indexOf(name);
  
  if (index > -1) {
    selectedIngredients.splice(index, 1);
    if (chipElement) chipElement.classList.remove('selected');
  } else {
    selectedIngredients.push(name);
    if (chipElement) chipElement.classList.add('selected');
  }

  renderSelectedIngredientsSummary();
}

function addCustomIngredientChip(name) {
  if (selectedIngredients.includes(name)) return;
  
  selectedIngredients.push(name);

  // Add a chip dynamically to the custom category
  const customChipsContainer = document.querySelector('.ingredients-chips[data-category="despensa"]');
  const newChip = document.createElement('button');
  newChip.className = 'ing-chip selected';
  newChip.setAttribute('data-name', name);
  newChip.textContent = name;
  newChip.addEventListener('click', () => {
    toggleIngredient(name, newChip);
  });
  
  customChipsContainer.appendChild(newChip);
  renderSelectedIngredientsSummary();
}

function renderSelectedIngredientsSummary() {
  const container = document.getElementById('selected-ingredients-list');
  const buscarCoincidenciasBtn = document.getElementById('buscar-coincidencias-btn');
  const generarIaBtn = document.getElementById('generar-ia-btn');

  if (selectedIngredients.length === 0) {
    container.innerHTML = `<span class="no-ingredients-text">Ninguno. Haz clic en los ingredientes de la izquierda para seleccionarlos.</span>`;
    buscarCoincidenciasBtn.disabled = true;
    generarIaBtn.disabled = true;
    return;
  }

  buscarCoincidenciasBtn.disabled = false;
  generarIaBtn.disabled = false;

  container.innerHTML = selectedIngredients.map(ing => {
    return `
      <span class="selected-badge">
        ${ing}
        <span class="selected-badge-close" data-name="${ing}">&times;</span>
      </span>
    `;
  }).join('');

  // Hook remove event on selected badges
  container.querySelectorAll('.selected-badge-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const name = closeBtn.getAttribute('data-name');
      
      // Find original chip if it exists in the UI to deselect it
      const origChip = document.querySelector(`.ing-chip[data-name="${name}"]`);
      toggleIngredient(name, origChip);
    });
  });
}

/* ==========================================================================
   MATCHER ENGINE (BUSCAR COINCIDENCIAS)
   ========================================================================== */
function buscarCoincidencias() {
  const resultsGrid = document.getElementById('nevera-results-grid');
  const resultsTitle = document.getElementById('nevera-results-title');

  resultsTitle.textContent = "Recetas sugeridas según tu nevera";

  const matches = currentRecetas.map(recipe => {
    // Count matches of ingredients in recipe
    let matchedCount = 0;
    let totalPrincipalCount = recipe.ingredientes.filter(i => i.principal).length;
    let matchedPrincipalCount = 0;

    recipe.ingredientes.forEach(ing => {
      // Direct substring match to capture plurals or slight name differences
      const isMatch = selectedIngredients.some(sel => {
        return ing.nombre.toLowerCase().includes(sel.toLowerCase()) || 
               sel.toLowerCase().includes(ing.nombre.toLowerCase());
      });

      if (isMatch) {
        matchedCount++;
        if (ing.principal) {
          matchedPrincipalCount++;
        }
      }
    });

    // Match percentage is calculated primarily based on principal ingredients
    // with a bonus for secondary matches
    const mainWeight = totalPrincipalCount > 0 ? (matchedPrincipalCount / totalPrincipalCount) * 80 : 0;
    const secondaryWeight = recipe.ingredientes.length > totalPrincipalCount ? 
      ((matchedCount - matchedPrincipalCount) / (recipe.ingredientes.length - totalPrincipalCount)) * 20 : 20;

    const percentage = Math.round(mainWeight + secondaryWeight);

    return {
      recipe,
      percentage,
      matchedCount
    };
  })
  .filter(item => item.percentage > 15) // Only show recipes with some matches
  .sort((a, b) => b.percentage - a.percentage); // Order by match percent

  if (matches.length === 0) {
    resultsGrid.innerHTML = `
      <div class="info-card-empty">
        <p>No encontramos ninguna receta que coincida con tus ingredientes seleccionados. ¡Prueba a seleccionar más ingredientes o haz clic en "Generar Receta por IA" para crear una receta única!</p>
      </div>
    `;
  } else {
    resultsGrid.innerHTML = matches.map(item => {
      return createRecipeCardHtml(item.recipe, false, item.percentage);
    }).join('');

    // Attach click handlers to open details
    resultsGrid.querySelectorAll('.recipe-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const matchItem = matches.find(m => m.recipe.id === id);
        if (matchItem) {
          openRecipeModal(matchItem.recipe);
        }
      });
    });
  }
}

/* ==========================================================================
   AI GENERATOR SIMULATION
   ========================================================================== */
function generarRecetaIA() {
  const loadingDiv = document.getElementById('nevera-loading');
  const resultsGrid = document.getElementById('nevera-results-grid');
  const loadingText = document.getElementById('nevera-loading-text');

  // Show loading
  loadingDiv.classList.remove('hidden');
  resultsGrid.innerHTML = '';

  const steps = [
    "Analizando los ingredientes seleccionados...",
    "Buscando combinaciones factibles de cocina tradicional española...",
    "Optimizando para supermercados (Mercadona, Lidl, Aldi)...",
    "Redactando instrucciones paso a paso paso sencillas...",
    "¡Emplatando receta generada!"
  ];

  let stepIdx = 0;
  loadingText.textContent = steps[stepIdx];

  const interval = setInterval(() => {
    stepIdx++;
    if (stepIdx < steps.length) {
      loadingText.textContent = steps[stepIdx];
    } else {
      clearInterval(interval);
      loadingDiv.classList.add('hidden');
      renderGeneratedRecipe();
    }
  }, 900);
}

function renderGeneratedRecipe() {
  const resultsGrid = document.getElementById('nevera-results-grid');
  const resultsTitle = document.getElementById('nevera-results-title');

  resultsTitle.textContent = "Receta generada por Inteligencia Artificial";

  // Synthesize a realistic recipe based on selected ingredients
  const generated = synthesizeRecipe(selectedIngredients);

  resultsGrid.innerHTML = `
    <div class="recipe-card generated-card" style="grid-column: 1 / -1; border-color: #a855f7; box-shadow: 0 8px 30px rgba(168, 85, 247, 0.15)">
      <div class="recipe-card-header" style="height: 180px;">
        <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(135deg, #a855f7 0%, #ff5a2b 100%); display:flex; align-items:center; justify-content:center; flex-direction:column; padding: 2rem;">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="white" stroke-width="2" style="margin-bottom:0.5rem; filter: drop-shadow(0 0 8px rgba(255,255,255,0.4));"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          <span style="font-size: 0.75rem; color: #f3e8ff; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; background:rgba(0,0,0,0.2); padding: 0.2rem 0.6rem; border-radius:4px; margin-bottom:0.5rem;">Cocinada por IA</span>
          <h2 style="font-size: 1.6rem; color: white; text-align:center; text-shadow:0 2px 4px rgba(0,0,0,0.3); font-family:'Outfit', sans-serif;">${generated.titulo}</h2>
        </div>
      </div>
      <div class="recipe-card-body" style="padding: 1.5rem;">
        <p style="font-size:0.95rem; line-height:1.5; color: var(--text-primary); margin-bottom:1.5rem;">${generated.descripcion}</p>
        
        <div style="display:flex; gap:1.5rem; margin-bottom:1.5rem; flex-wrap:wrap; background:rgba(255,255,255,0.02); padding:0.75rem; border-radius:8px; border: 1px solid var(--border-light);">
          <div><span style="color:var(--text-muted); font-size:0.8rem;">Tiempo:</span> <strong style="display:block; font-size:1.05rem; color:var(--warning);">${generated.tiempo} min</strong></div>
          <div><span style="color:var(--text-muted); font-size:0.8rem;">Coste aprox:</span> <strong style="display:block; font-size:1.05rem; color:var(--success);">${generated.coste.toFixed(2)}€</strong></div>
          <div><span style="color:var(--text-muted); font-size:0.8rem;">Dificultad:</span> <strong style="display:block; font-size:1.05rem; color:var(--text-primary);">${generated.dificultad}</strong></div>
          <div><span style="color:var(--text-muted); font-size:0.8rem;">Cocción:</span> <strong style="display:block; font-size:1.05rem; color:var(--accent);">${generated.metodo}</strong></div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-bottom:1.5rem;">
          <div>
            <h4 style="color:var(--accent); margin-bottom:0.5rem; font-size:1.05rem;">Ingredientes necesarios:</h4>
            <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:0.4rem;">
              ${generated.ingredientes.map(ing => `<li style="font-size:0.9rem; color:var(--text-secondary);"><span style="color:var(--accent); margin-right:0.4rem;">•</span> <strong>${ing.cantidad}</strong> ${ing.nombre}</li>`).join('')}
            </ul>
          </div>
        </div>

        <button id="view-generated-steps-btn" class="primary-btn" style="width:100%; justify-content:center;">
          Ver Preparación Paso a Paso 🍳
        </button>
      </div>
    </div>
  `;

  // Listener to open in details modal
  document.getElementById('view-generated-steps-btn').addEventListener('click', () => {
    openRecipeModal(generated);
  });
}

function synthesizeRecipe(ingredients) {
  // Simple heuristic recipe builder based on chosen ingredients
  const has = (item) => ingredients.some(i => i.toLowerCase().includes(item.toLowerCase()));
  
  let titulo = "Receta de Aprovechamiento de la Casa";
  let descripcion = "Una receta improvisada combinando de forma sabrosa y sencilla tus ingredientes.";
  let metodo = "Vitrocerámica";
  let tiempo = 15;
  let coste = 3.50;
  let dificultad = "Fácil";
  let supermercados = ["Mercadona", "Lidl"];
  let ingredientesNecesarios = [];
  let pasos = [];

  // Categorize selected elements
  let protein = ingredients.find(i => ["pollo", "salmón", "merluza", "dorada", "lubina", "atún", "solomillo", "bacon", "jamón", "gulas", "gambas", "langostinos", "chorizo", "albóndigas"].some(p => i.toLowerCase().includes(p))) || "";
  let veg = ingredients.find(i => ["patata", "cebolla", "ajo", "espárrago", "calabacín", "zanahoria", "berenjena", "pimiento", "setas", "limón"].some(v => i.toLowerCase().includes(v))) || "";
  let base = ingredients.find(i => ["huevo", "pasta", "arroz", "lentejas", "garbanzos", "tomate", "pisto", "pita", "quebrada"].some(b => i.toLowerCase().includes(b))) || "";

  // 1. Egg-based / Revuelto template
  if (has("Huevo") && (veg || protein)) {
    metodo = "Vitrocerámica";
    tiempo = 10;
    coste = 1.90;
    dificultad = "Muy fácil";
    
    let nombrePlato = "Revuelto";
    if (protein && veg) nombrePlato = `Revuelto Jugoso de ${veg} con ${protein}`;
    else if (protein) nombrePlato = `Revuelto de ${protein} Exprés`;
    else if (veg) nombrePlato = `Revuelto Cremosito de ${veg}`;
    
    titulo = nombrePlato;
    descripcion = "Un revuelto tierno y jugoso para preparar una cena rápida sin complicaciones.";
    
    ingredientesNecesarios = [
      { nombre: "Huevos", cantidad: "2 unidades", principal: true },
      { nombre: "Aceite de oliva virgen extra", cantidad: "1 cucharada", principal: true },
      { nombre: "Sal y pimienta negra", cantidad: "al gusto", principal: false }
    ];
    if (veg) ingredientesNecesarios.unshift({ nombre: veg, cantidad: "100g", principal: true });
    if (protein) ingredientesNecesarios.unshift({ nombre: protein, cantidad: "80g", principal: true });

    pasos = [
      `Prepara y trocea en dados pequeños el ${veg || ''} ${protein ? 'y el/la ' + protein : ''}.`,
      `Pon una sartén a fuego medio con la cucharada de aceite de oliva. Sofríe los ingredientes troceados durante 4-5 minutos hasta que estén dorados y tiernos.`,
      `En un cuenco pequeño, casca los dos huevos, sazona con una pizca de sal y pimienta, y bátelos ligeramente con un tenedor.`,
      `Baja el fuego al mínimo. Vierte los huevos batidos sobre la sartén con el salteado de ingredientes.`,
      `Remueve de forma continua con una espátula de madera. Cuando el huevo empiece a cuajar pero siga húmedo y brillante (aprox. 1 minuto), retira la sartén del fuego.`,
      `Sirve el revuelto templado inmediatamente para que no se pase. ¡Riquísimo con tostadas!`
    ];
  }
  // 2. Pasta / Rice template
  else if ((has("Pasta") || has("Arroz")) && (protein || veg)) {
    metodo = "Vitrocerámica";
    tiempo = 15;
    coste = 2.20;
    dificultad = "Fácil";
    
    const cereal = has("Pasta") ? "Pasta" : "Arroz";
    let nombrePlato = `${cereal} Salteado estilo Wok`;
    if (protein && veg) nombrePlato = `${cereal} con ${protein} y ${veg} Salteados`;
    else if (protein) nombrePlato = `${cereal} Exprés con ${protein}`;
    else if (veg) nombrePlato = `${cereal} con Verduras de la Huerta`;

    titulo = nombrePlato;
    descripcion = `Plato de ${cereal.toLowerCase()} saciante y sabroso, cocinado de forma exprés en una sola sartén.`;

    ingredientesNecesarios = [
      { nombre: cereal === "Pasta" ? "Macarrones o Spaghetti" : "Arroz de grano largo", cantidad: "100g", principal: true },
      { nombre: "Tomate frito o aceite", cantidad: "3 cucharadas", principal: false },
      { nombre: "Queso rallado", cantidad: "al gusto", principal: false },
      { nombre: "Ajo y sal", cantidad: "al gusto", principal: false }
    ];
    if (veg) ingredientesNecesarios.unshift({ nombre: veg, cantidad: "1 unidad", principal: true });
    if (protein) ingredientesNecesarios.unshift({ nombre: protein, cantidad: "100g", principal: true });

    pasos = [
      `Cuece el/la ${cereal.toLowerCase()} en agua hirviendo con sal durante los minutos indicados en el paquete. Luego escurre y reserva.`,
      `Mientras tanto, corta en dados o tiras finas el ${protein || ''} y el/la ${veg || ''}.`,
      `Calienta una sartén con un chorrito de aceite de oliva a fuego medio-alto. Saltea primero el/la ${veg || 'ajo'} por 3 minutos.`,
      `Añade el ${protein || ''} y sofríe otros 3 minutos hasta que todo esté cocinado y dorado.`,
      `Vierte el/la ${cereal.toLowerCase()} cocido en la sartén junto con el sofrito. Remueve bien para saltear todo junto.`,
      `Opcionalmente, añade tomate frito o salsa de soja si tienes, espolvorea queso rallado y orégano, cocina 1 minuto más y sirve caliente.`
    ];
  }
  // 3. Airfryer Protein template (Pollo / Pescado / Bacon)
  else if (has("Airfryer") || (protein && ["pollo", "salmón", "merluza", "lubina", "dorada"].some(p => protein.toLowerCase().includes(p)))) {
    metodo = "Airfryer";
    tiempo = 15;
    coste = 4.20;
    dificultad = "Muy fácil";
    
    const ingredienteBase = protein || "Pollo";
    titulo = `${ingredienteBase} Asado Crujiente en Airfryer`;
    descripcion = `Una forma limpísima de preparar un ${ingredienteBase.toLowerCase()} súper jugoso por dentro y dorado por fuera en freidora de aire.`;

    ingredientesNecesarios = [
      { nombre: ingredienteBase, cantidad: "150-200g", principal: true },
      { nombre: "Aceite de oliva en spray", cantidad: "2 pulverizaciones", principal: false },
      { nombre: "Ajo en polvo y perejil", cantidad: "al gusto", principal: false },
      { nombre: "Sal y pimienta", cantidad: "al gusto", principal: false }
    ];
    if (veg) ingredientesNecesarios.push({ nombre: veg, cantidad: "100g para guarnición", principal: true });

    pasos = [
      `Precalienta la freidora de aire a 190°C por 3 minutos.`,
      `Sazona el/la ${ingredienteBase} con sal, pimienta negra, ajo en polvo y perejil por ambas caras.`,
      `Si utilizas ${veg || ''}, córtalo en dados medianos y sazónalo también con una cucharadita de aceite.`,
      `Introduce el ${ingredienteBase.toLowerCase()} y el/la ${veg || ''} en la cesta de la freidora, intentando que no se amontonen.`,
      `Cocina a 190°C durante 12-14 minutos. A mitad de cocción, abre la cesta y dales la vuelta para un dorado uniforme.`,
      `Retira del cesto y sirve caliente con unas gotas de zumo de limón si te apetece.`
    ];
  }
  // 4. Default / Mixed skillet
  else {
    metodo = "Vitrocerámica";
    tiempo = 12;
    coste = 2.80;
    dificultad = "Fácil";

    let ingredientesNombres = ingredients.slice(0, 3).join(" y ");
    titulo = `Sartén de ${ingredientesNombres || 'Aprovechamiento'}`;
    descripcion = "Una receta improvisada y creativa para combinar de forma apetitosa lo que te queda en la nevera.";

    ingredientesNecesarios = ingredients.map(ing => {
      return { nombre: ing, cantidad: "al gusto", principal: true };
    });
    ingredientesNecesarios.push({ nombre: "Aceite de oliva y sal", cantidad: "para cocinar", principal: false });

    pasos = [
      "Trocea finamente todos tus ingredientes seleccionados.",
      "Calienta una sartén mediana con una cucharada de aceite de oliva a fuego medio.",
      "Rehoga primero las verduras si tienes, hasta que estén blandas (aprox. 5 minutos).",
      "Añade las carnes, embutidos o pescados que hayas elegido y cocina todo junto 4 minutos.",
      "Salpimienta al gusto. Si tienes huevos, puedes cuajarlos encima haciendo un revuelto o un huevo a la plancha.",
      "Sirve bien caliente directamente desde la sartén. ¡Combina de maravilla con pan crujiente!"
    ];
  }

  // Generate a random temporary ID for modal hookup
  const tempId = `temp-${Math.random().toString(36).substr(2, 9)}`;

  return {
    id: tempId,
    titulo,
    descripcion,
    tiempo,
    coste,
    dificultad,
    porciones: 1,
    metodo,
    supermercados,
    ingredientes: ingredientesNecesarios,
    pasos,
    categorias: ["IA Generada", "Cenas rápidas"]
  };
}

/* ==========================================================================
   TAB 3: MENÚ SEMANAL GENERATOR & SHOPPING LIST
   ========================================================================== */
export function initWeeklyMenu(recetasList) {
  currentRecetas = recetasList;
  const generateMenuBtn = document.getElementById('generate-menu-btn');
  const shoppingListBtn = document.getElementById('shopping-list-btn');

  // Load and render existing menu on start
  if (weeklyMenu) {
    renderWeeklyMenu();
    shoppingListBtn.disabled = false;
  }

  generateMenuBtn.addEventListener('click', () => {
    generateNewWeeklyMenu();
  });

  shoppingListBtn.addEventListener('click', () => {
    openShoppingListModal();
  });
}

function generateNewWeeklyMenu() {
  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  weeklyMenu = {};

  // Separate recipes by types to balance meals
  const comidasFiltro = currentRecetas.filter(r => 
    r.categorias.includes("Arroz, sopas, cremas") || 
    r.categorias.includes("Batch cooking") ||
    r.metodo === "Horno" || 
    ["pollo", "solomillo", "merluza", "lentejas", "dorada"].some(k => r.titulo.toLowerCase().includes(k))
  );

  const cenasFiltro = currentRecetas.filter(r => 
    r.categorias.includes("Cenas rápidas") || 
    r.metodo === "Microondas" || 
    r.metodo === "Airfryer" ||
    ["tortilla", "revuelto", "gulas", "fajitas", "mini-pizzas", "langostinos", "salmón"].some(k => r.titulo.toLowerCase().includes(k))
  );

  days.forEach(day => {
    // Pick unique dishes
    const randomComida = comidasFiltro[Math.floor(Math.random() * comidasFiltro.length)];
    const randomCena = cenasFiltro[Math.floor(Math.random() * cenasFiltro.length)];

    weeklyMenu[day] = {
      comida: randomComida,
      cena: randomCena
    };
  });

  // Save to storage
  localStorage.setItem('weekly_menu', JSON.stringify(weeklyMenu));

  // Render weekly grid
  renderWeeklyMenu();
  
  // Enable shopping list button
  document.getElementById('shopping-list-btn').disabled = false;
}

function renderWeeklyMenu() {
  const weeklyGrid = document.getElementById('weekly-grid');
  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  weeklyGrid.innerHTML = days.map(day => {
    const meal = weeklyMenu[day];
    return `
      <div class="day-card" data-day="${day}">
        <div class="day-header">
          <h3>${day}</h3>
          <span>Día completo</span>
        </div>
        <div class="meals-container">
          
          <!-- COMIDA -->
          <div class="meal-slot" data-meal-type="comida">
            <span class="meal-label">Almuerzo ☀️</span>
            <div class="meal-recipe-title" data-recipe-id="${meal.comida.id}">${meal.comida.titulo}</div>
            <div class="meal-footer">
              <div class="meal-meta">
                <span>⏱️ ${meal.comida.tiempo}m</span>
                <span style="color:var(--success)">${meal.comida.coste.toFixed(1)}€</span>
              </div>
              <button class="shuffle-meal-btn" data-day="${day}" data-type="comida" title="Cambiar plato">🔄</button>
            </div>
          </div>
          
          <!-- CENA -->
          <div class="meal-slot" data-meal-type="cena">
            <span class="meal-label">Cena 🌙</span>
            <div class="meal-recipe-title" data-recipe-id="${meal.cena.id}">${meal.cena.titulo}</div>
            <div class="meal-footer">
              <div class="meal-meta">
                <span>⏱️ ${meal.cena.tiempo}m</span>
                <span style="color:var(--success)">${meal.cena.coste.toFixed(1)}€</span>
              </div>
              <button class="shuffle-meal-btn" data-day="${day}" data-type="cena" title="Cambiar plato">🔄</button>
            </div>
          </div>

        </div>
      </div>
    `;
  }).join('');

  // Hook details triggers on meal titles
  weeklyGrid.querySelectorAll('.meal-recipe-title').forEach(title => {
    title.addEventListener('click', () => {
      const id = title.getAttribute('data-recipe-id');
      const recipe = currentRecetas.find(r => r.id === id);
      if (recipe) {
        openRecipeModal(recipe);
      }
    });
  });

  // Hook shuffle buttons
  weeklyGrid.querySelectorAll('.shuffle-meal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const day = btn.getAttribute('data-day');
      const type = btn.getAttribute('data-type');
      shuffleMealSlot(day, type);
    });
  });
}

function shuffleMealSlot(day, type) {
  // Select a random recipe that isn't the current one
  const currentId = weeklyMenu[day][type].id;
  
  let candidates = [];
  if (type === 'comida') {
    candidates = currentRecetas.filter(r => r.id !== currentId && 
      (r.categorias.includes("Arroz, sopas, cremas") || r.categorias.includes("Batch cooking") || r.metodo === "Horno" || r.tiempo > 15)
    );
  } else {
    candidates = currentRecetas.filter(r => r.id !== currentId && 
      (r.categorias.includes("Cenas rápidas") || r.metodo === "Microondas" || r.metodo === "Airfryer" || r.tiempo <= 15)
    );
  }

  if (candidates.length > 0) {
    const randomNew = candidates[Math.floor(Math.random() * candidates.length)];
    weeklyMenu[day][type] = randomNew;
    
    // Save
    localStorage.setItem('weekly_menu', JSON.stringify(weeklyMenu));
    
    // Re-render
    renderWeeklyMenu();
  }
}

/* ==========================================================================
   SHOPPING LIST COMPILER
   ========================================================================== */
function openShoppingListModal() {
  const modal = document.getElementById('shopping-list-modal');
  const closeBtn = document.getElementById('shopping-close-btn');
  const copyBtn = document.getElementById('copy-shopping-list');
  const printBtn = document.getElementById('print-shopping-list');
  const container = document.getElementById('shopping-list-categories');

  if (!weeklyMenu) return;

  // Compile ingredients
  const shoppingList = compileShoppingList(weeklyMenu);

  // Render shopping list items
  const categoriesMap = {
    frescos: "🥦 Verdulería y Frescos",
    proteinas: "🥩 Carnicería y Pescadería",
    lacteos: "🧀 Lácteos, Huevos y Fríos",
    despensa: "🥫 Despensa y Básicos"
  };

  container.innerHTML = Object.keys(shoppingList).map(catKey => {
    const items = shoppingList[catKey];
    if (items.length === 0) return '';

    const itemsHtml = items.map((item, idx) => {
      const isCheckedKey = `shop_${catKey}_${idx}`;
      const sourceSúper = item.supermercados.slice(0, 2).join('/');
      return `
        <li data-key="${isCheckedKey}">
          <input type="checkbox" id="${isCheckedKey}">
          <label for="${isCheckedKey}">
            <span><strong>${item.cantidad}</strong> ${item.nombre}</span>
          </label>
          <span class="shopping-item-source">${sourceSúper || 'Súper'}</span>
        </li>
      `;
    }).join('');

    return `
      <div class="shopping-category">
        <h3>${categoriesMap[catKey]}</h3>
        <ul class="shopping-list-items">
          ${itemsHtml}
        </ul>
      </div>
    `;
  }).join('');

  // Hook check events
  container.querySelectorAll('.shopping-list-items li').forEach(li => {
    const checkbox = li.querySelector('input[type="checkbox"]');
    
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

  // Open modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Copy to clipboard
  copyBtn.onclick = () => {
    copyShoppingListToClipboard(shoppingList);
  };

  // Print list
  printBtn.onclick = () => {
    window.print();
  };

  closeBtn.onclick = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  modal.onclick = (e) => {
    if (e.target === modal) {
      closeBtn.click();
    }
  };
}

function compileShoppingList(menu) {
  const rawIngredients = [];
  const days = Object.keys(menu);

  // Gather all ingredients
  days.forEach(day => {
    const meals = [menu[day].comida, menu[day].cena];
    meals.forEach(meal => {
      if (meal && meal.ingredientes) {
        meal.ingredientes.forEach(ing => {
          rawIngredients.push({
            nombre: ing.nombre,
            cantidad: ing.cantidad,
            supermercados: meal.supermercados || []
          });
        });
      }
    });
  });

  // Consolidate/Deduplicate ingredients by simplified name
  const consolidated = {};

  rawIngredients.forEach(item => {
    const normalized = item.nombre.toLowerCase().replace(/[^a-záéíóúñ]/g, ' ').trim();
    // Simple grouping key using the first word or main term
    let key = normalized;
    if (normalized.includes("patata")) key = "patatas";
    else if (normalized.includes("cebolla")) key = "cebollas";
    else if (normalized.includes("ajo")) key = "ajos";
    else if (normalized.includes("huevo")) key = "huevos";
    else if (normalized.includes("queso")) key = "queso";
    else if (normalized.includes("limón")) key = "limones";
    else if (normalized.includes("pollo")) key = "pollo";
    else if (normalized.includes("atún")) key = "atún de lata";
    else if (normalized.includes("gulas")) key = "gulas";
    else if (normalized.includes("gambas") || normalized.includes("langostinos")) key = "marisco pelado";
    else if (normalized.includes("salmón")) key = "salmón";
    else if (normalized.includes("merluza")) key = "merluza";
    else if (normalized.includes("tomate frito")) key = "tomate frito";
    else if (normalized.includes("aceite")) key = "aceite de oliva";
    else if (normalized.includes("sal")) key = "sal común";
    else if (normalized.includes("pimienta")) key = "pimienta negra";

    if (!consolidated[key]) {
      consolidated[key] = {
        nombre: item.nombre,
        cantidades: [item.cantidad],
        supermercados: new Set(item.supermercados)
      };
    } else {
      consolidated[key].cantidades.push(item.cantidad);
      item.supermercados.forEach(s => consolidated[key].supermercados.add(s));
    }
  });

  // Categorize for Spanish supermarket aisles
  const categorizedList = {
    frescos: [],
    proteinas: [],
    lacteos: [],
    despensa: []
  };

  const categoryChecks = {
    frescos: ["patata", "cebolla", "ajo", "espárrago", "calabacín", "zanahoria", "berenjena", "pimiento", "setas", "limón", "perejil"],
    proteinas: ["pollo", "salmón", "merluza", "dorada", "lubina", "solomillo", "gambas", "langostinos", "albóndigas"],
    lacteos: ["huevo", "queso", "quesitos", "nata", "bacon", "jamón", "chorizo", "gulas"],
    despensa: ["pasta", "macarrones", "fideos", "arroz", "lentejas", "garbanzos", "tomate", "pisto", "pan", "pita", "quebrada", "aceite", "sal", "pimienta", "pimentón", "comino", "orégano", "nuez", "levadura", "cacao", "azúcar", "harina"]
  };

  Object.keys(consolidated).forEach(key => {
    const item = consolidated[key];
    const nameLower = item.nombre.toLowerCase();

    // Format consolidated quantities (e.g. "4 unidades, 1 unidad" -> "4 un. + 1 un." or just keep list)
    // For simplicity, just list unique quantities or clean formatting
    const uniqQuantities = [...new Set(item.cantidades)];
    const qtyStr = uniqQuantities.join(" / ");

    const finalItem = {
      nombre: item.nombre,
      cantidad: qtyStr,
      supermercados: [...item.supermercados]
    };

    // Assign to category based on keywords
    let assigned = false;
    for (const catKey of Object.keys(categoryChecks)) {
      if (categoryChecks[catKey].some(keyword => nameLower.includes(keyword))) {
        categorizedList[catKey].push(finalItem);
        assigned = true;
        break;
      }
    }

    if (!assigned) {
      // Fallback default
      categorizedList.despensa.push(finalItem);
    }
  });

  return categorizedList;
}

function copyShoppingListToClipboard(list) {
  let text = "# LISTA DE LA COMPRA SEMANAL\n\n";

  const categoriesMap = {
    frescos: "🥦 Verdulería y Frescos",
    proteinas: "🥩 Carnicería y Pescadería",
    lacteos: "🧀 Lácteos, Huevos y Fríos",
    despensa: "🥫 Despensa y Básicos"
  };

  Object.keys(list).forEach(catKey => {
    const items = list[catKey];
    if (items.length > 0) {
      text += `## ${categoriesMap[catKey]}\n`;
      items.forEach(item => {
        const supers = item.supermercados.join("/");
        text += `- [ ] ${item.cantidad} ${item.nombre} (${supers || 'Súper'})\n`;
      });
      text += "\n";
    }
  });

  text += "Generado por *Recetas fáciles para gente normal*";

  navigator.clipboard.writeText(text).then(() => {
    alert("¡Lista de la compra copiada al portapapeles! Puedes pegarla en WhatsApp, Telegram o Notas.");
  }).catch(err => {
    console.error("Error al copiar: ", err);
  });
}
