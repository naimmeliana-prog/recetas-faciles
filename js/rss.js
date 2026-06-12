// RSS Feeds Configuration
const RSS_SOURCES = {
  directoalpaladar: {
    name: "Directo al Paladar",
    url: "https://www.directoalpaladar.com/feed",
    class: "dap"
  },
  recetasgratis: {
    name: "RecetasGratis",
    url: "https://www.recetasgratis.net/rss/recetas.xml",
    class: "rg"
  },
  petitchef: {
    name: "PetitChef España",
    url: "https://www.petitchef.es/recipe.xml",
    class: "pc"
  },
  eladerezo: {
    name: "El Aderezo",
    url: "https://www.eladerezo.com/feed",
    class: "ad"
  },
  webosfritos: {
    name: "Webos Fritos",
    url: "https://webosfritos.es/feed",
    class: "wf"
  }
};

// Fallback Cache List - Initial harvested entries to seed the database
const RSS_INITIAL_RECIPES = [
  {
    id: "rss-dap-patatas-horno",
    titulo: "Patatas al horno súper crujientes: la guarnición definitiva",
    descripcion: "Te explicamos cómo conseguir unas patatas asadas con costra por fuera y tiernas como puré por dentro con tres sencillos trucos de cocina.",
    tiempo: 25,
    coste: 1.50,
    dificultad: "Fácil",
    porciones: 4,
    metodo: "Horno",
    supermercados: ["Mercadona", "Lidl"],
    ingredientes: [
      { nombre: "Ver ingredientes en la web original", cantidad: "Consultar", principal: true }
    ],
    pasos: [
      "Esta es una receta importada de Directo al Paladar.",
      "Para ver las cantidades exactas y el paso a paso de preparación, pulsa el botón de abajo."
    ],
    categorias: ["Económicas", "Novedades RSS"],
    esRSS: true,
    link: "https://www.directoalpaladar.com/recetas-de-patatas/patatas-al-horno-super-crujientes-receta-guarnicion-definitiva",
    fuente: "Directo al Paladar",
    imagen: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop&q=60",
    pubDate: "Fri, 12 Jun 2026 09:30:00 +0200"
  },
  {
    id: "rss-rg-arroz-pollo",
    titulo: "Arroz con pollo y verduras a la cazuela fácil",
    descripcion: "Receta tradicional de arroz con contramuslos de pollo, guisantes, zanahoria y un toque de pimentón de la Vera dulce.",
    tiempo: 20,
    coste: 3.20,
    dificultad: "Fácil",
    porciones: 3,
    metodo: "Vitrocerámica",
    supermercados: ["Consum", "Mercadona"],
    ingredientes: [
      { nombre: "Ver ingredientes en la web original", cantidad: "Consultar", principal: true }
    ],
    pasos: [
      "Esta es una receta importada de RecetasGratis.",
      "Para ver las cantidades exactas y el paso a paso de preparación, pulsa el botón de abajo."
    ],
    categorias: ["Pollo", "Arroz, sopas, cremas", "Novedades RSS"],
    esRSS: true,
    link: "https://www.recetasgratis.net/receta-de-arroz-con-pollo-y-verduras-a-la-cazuela-facil-75382.html",
    fuente: "RecetasGratis",
    imagen: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=60",
    pubDate: "Thu, 11 Jun 2026 18:15:00 +0200"
  },
  {
    id: "rss-pc-merluza-horno",
    titulo: "Merluza al horno con ajos tiernos y guindilla",
    descripcion: "Una merluza al estilo vasco, abierta y horneada con un refrito crujiente de dientes de ajo y guindilla cayena.",
    tiempo: 18,
    coste: 4.50,
    dificultad: "Fácil",
    porciones: 2,
    metodo: "Horno",
    supermercados: ["Mercadona", "Carrefour"],
    ingredientes: [
      { nombre: "Ver ingredientes en la web original", cantidad: "Consultar", principal: true }
    ],
    pasos: [
      "Esta es una receta importada de PetitChef España.",
      "Para ver las cantidades exactas y el paso a paso de preparación, pulsa el botón de abajo."
    ],
    categorias: ["Pescado", "Novedades RSS"],
    esRSS: true,
    link: "https://www.petitchef.es/recetas/plato/merluza-al-horno-con-ajos-tiernos-y-guindilla",
    fuente: "PetitChef España",
    imagen: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60",
    pubDate: "Wed, 10 Jun 2026 14:00:00 +0200"
  }
];

let harvestedRssRecipes = JSON.parse(localStorage.getItem('harvested_rss_recipes')) || [];
let rssChangeCallback = null;

// Initialize harvested recipes with initial data if empty
if (harvestedRssRecipes.length === 0) {
  harvestedRssRecipes = [...RSS_INITIAL_RECIPES];
  localStorage.setItem('harvested_rss_recipes', JSON.stringify(harvestedRssRecipes));
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
export function initRSS(onRssChanged) {
  rssChangeCallback = onRssChanged;

  const sourceSelect = document.getElementById('rss-source-select');
  const refreshBtn = document.getElementById('refresh-rss-btn');

  sourceSelect.addEventListener('change', () => {
    renderRssGrid(sourceSelect.value);
  });

  refreshBtn.addEventListener('click', () => {
    fetchLiveRssFeeds();
  });

  // Render initial grid from harvested cache
  renderRssGrid('all');
  
  // Fetch new live recipes in background
  fetchLiveRssFeeds();
}

/* ==========================================================================
   EXPORTER FOR APP ACCESS
   ========================================================================== */
export function getHarvestedRssRecipes() {
  return harvestedRssRecipes;
}

/* ==========================================================================
   LIVE HARVESTER (PROXY + LOCAL STORAGE CACHE)
   ========================================================================== */
async function fetchLiveRssFeeds() {
  const loadingDiv = document.getElementById('rss-loading');
  const sourceSelect = document.getElementById('rss-source-select');
  
  if (loadingDiv) loadingDiv.classList.remove('hidden');

  const proxyUrl = "https://api.allorigins.win/get?url=";
  let newAdded = false;

  const fetchPromises = Object.keys(RSS_SOURCES).map(async (key) => {
    const source = RSS_SOURCES[key];
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);
      
      const response = await fetch(`${proxyUrl}${encodeURIComponent(source.url)}`, { signal: controller.signal });
      clearTimeout(timeoutId);
      
      if (!response.ok) throw new Error("CORS Proxy Error");
      
      const data = await response.json();
      if (!data.contents) throw new Error("Empty XML");

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data.contents, "text/xml");
      const items = xmlDoc.querySelectorAll("item");

      const limit = Math.min(items.length, 6);
      
      for (let i = 0; i < limit; i++) {
        const item = items[i];
        const title = item.querySelector("title")?.textContent || "";
        const link = item.querySelector("link")?.textContent || "";
        let description = item.querySelector("description")?.textContent || "";
        const pubDate = item.querySelector("pubDate")?.textContent || "";
        
        // Strip HTML tags
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = description;
        let shortDesc = tempDiv.textContent || tempDiv.innerText || "";
        if (shortDesc.length > 200) {
          shortDesc = shortDesc.substring(0, 200).trim() + "...";
        }

        // Image extraction
        let image = "";
        const imgTag = tempDiv.querySelector("img");
        if (imgTag && imgTag.src) {
          image = imgTag.src;
        }

        if (!image) {
          const enclosure = item.querySelector("enclosure");
          if (enclosure && enclosure.getAttribute("type")?.startsWith("image/")) {
            image = enclosure.getAttribute("url");
          }
        }

        if (!image) {
          const mediaContent = item.getElementsByTagName("media:content")[0] || item.getElementsByTagName("content")[0];
          if (mediaContent && mediaContent.getAttribute("url")) {
            image = mediaContent.getAttribute("url");
          }
        }

        // Check if this recipe link is already saved to avoid duplicates
        const alreadySaved = harvestedRssRecipes.some(r => r.link === link || r.titulo === title);
        
        if (!alreadySaved && title && link) {
          // Auto-generate attributes for compliance and uniformity
          const titleLower = title.toLowerCase();
          const descLower = shortDesc.toLowerCase();
          
          let category = "Recetas de Aprovechamiento";
          if (titleLower.includes("pollo") || descLower.includes("pollo")) category = "Pollo";
          else if (titleLower.includes("carne") || titleLower.includes("cerdo") || titleLower.includes("ternera") || titleLower.includes("bacon") || titleLower.includes("chorizo")) category = "Carne";
          else if (titleLower.includes("pescado") || titleLower.includes("salmón") || titleLower.includes("merluza") || titleLower.includes("dorada") || titleLower.includes("lubina") || titleLower.includes("atún") || titleLower.includes("gulas") || titleLower.includes("gamba") || titleLower.includes("langostino")) category = "Pescado";
          else if (titleLower.includes("arroz") || titleLower.includes("sopa") || titleLower.includes("crema") || titleLower.includes("lenteja") || titleLower.includes("garbanzo")) category = "Arroz, sopas, cremas";
          else if (titleLower.includes("bizcocho") || titleLower.includes("tarta") || titleLower.includes("postre") || titleLower.includes("chocolate") || titleLower.includes("dulce")) category = "Económicas";

          let method = "Vitrocerámica";
          if (titleLower.includes("airfryer") || titleLower.includes("freidora de aire")) method = "Airfryer";
          else if (titleLower.includes("microondas") || titleLower.includes("estuche de silicona")) method = "Microondas";
          else if (titleLower.includes("horno") || titleLower.includes("asado")) method = "Horno";

          let time = 20;
          if (titleLower.includes("rápido") || titleLower.includes("exprés") || titleLower.includes("fácil") || method === "Microondas") time = 12;
          else if (method === "Horno" || titleLower.includes("asado")) time = 35;

          // Convert RSS item to unified recipe structure
          const cleanTitleSlug = title.toLowerCase().replace(/[^a-z0-9]/g, '-').substring(0, 15);
          const newRecipe = {
            id: `rss-${key}-${cleanTitleSlug}`,
            titulo: title,
            descripcion: shortDesc,
            tiempo: time,
            coste: 3.20, // baseline average Spanish dish cost
            dificultad: "Fácil",
            porciones: 2,
            metodo: method,
            supermercados: ["Mercadona", "Lidl", "Consum"],
            ingredientes: [
              { nombre: "Ver ingredientes completos en la web original", cantidad: "Consultar", principal: true }
            ],
            pasos: [
              `Esta receta ha sido importada automáticamente desde ${source.name}.`,
              "Para respetar los derechos de autor, las cantidades detalladas y la preparación completa paso a paso se encuentran en su web oficial. Pulsa el botón de abajo para leerla."
            ],
            categorias: [category, "Novedades RSS"],
            esRSS: true,
            link: link,
            fuente: source.name,
            imagen: image || "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&auto=format&fit=crop&q=60",
            pubDate: pubDate || new Date().toUTCString()
          };

          harvestedRssRecipes.unshift(newRecipe);
          newAdded = true;
        }
      }
    } catch (err) {
      console.warn(`Error fetching ${source.name}:`, err);
    }
  });

  await Promise.all(fetchPromises);
  
  if (loadingDiv) loadingDiv.classList.add('hidden');

  if (newAdded) {
    // Keep a maximum of 100 harvested RSS recipes to keep local storage clean
    if (harvestedRssRecipes.length > 100) {
      harvestedRssRecipes = harvestedRssRecipes.slice(0, 100);
    }
    
    // Save updated list
    localStorage.setItem('harvested_rss_recipes', JSON.stringify(harvestedRssRecipes));

    // Notify the main application to re-render and merge the new harvested recipes
    if (rssChangeCallback) {
      rssChangeCallback(harvestedRssRecipes);
    }
  }

  // Refresh RSS tab view
  renderRssGrid(sourceSelect ? sourceSelect.value : 'all');
}

/* ==========================================================================
   RENDER FEED GRID
   ========================================================================== */
function renderRssGrid(sourceFilter = 'all') {
  const grid = document.getElementById('rss-grid');
  if (!grid) return;

  const filtered = harvestedRssRecipes.filter(recipe => {
    if (sourceFilter === 'all') return true;
    const key = recipe.id.split('-')[1]; // Extract source key from ID e.g. "rss-dap-title" -> "dap"
    const matchKeys = {
      directoalpaladar: 'dap',
      recetasgratis: 'rg',
      petitchef: 'pc',
      eladerezo: 'ad',
      webosfritos: 'wf'
    };
    return key === matchKeys[sourceFilter];
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="info-card-empty">
        <p>No hay novedades guardadas para esta fuente gastronómica. Pulsa "Actualizar Feeds" para cargarlas.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(recipe => {
    const key = recipe.id.split('-')[1];
    const sourceKeysMapping = {
      dap: { name: "Directo al Paladar", class: "dap" },
      rg: { name: "RecetasGratis", class: "rg" },
      pc: { name: "PetitChef España", class: "pc" },
      ad: { name: "El Aderezo", class: "ad" },
      wf: { name: "Webos Fritos", class: "wf" }
    };
    const sourceInfo = sourceKeysMapping[key] || { name: "Blog de Cocina", class: "desconocido" };
    const dateFormatted = formatDate(recipe.pubDate);
    const imageUrl = recipe.imagen || "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&auto=format&fit=crop&q=60";

    return `
      <div class="rss-card">
        <div class="rss-card-header">
          <img src="${imageUrl}" alt="${recipe.titulo}" loading="lazy">
          <span class="rss-source-badge ${sourceInfo.class}">${sourceInfo.name}</span>
        </div>
        <div class="rss-card-body">
          <span class="rss-date">${dateFormatted}</span>
          <h3>${recipe.titulo}</h3>
          <p>${recipe.descripcion}</p>
          
          <div class="rss-card-meta">
            <span class="rss-meta-chip category">${recipe.categorias[0]}</span>
            <span class="rss-meta-chip time">⏱️ ${recipe.tiempo} min</span>
            <span class="rss-meta-chip method">${recipe.metodo}</span>
          </div>

          <div class="rss-card-footer">
            <a href="${recipe.link}" target="_blank" class="read-more-link" rel="noopener noreferrer">
              Leer receta completa en ${sourceInfo.name}
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none" style="margin-left:2px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   UTILITY FUNCTIONS
   ========================================================================== */
function formatDate(dateStr) {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "Reciente";
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (e) {
    return "Reciente";
  }
}
