export const recetas = [
  {
    id: "tortilla-patatas-microondas",
    titulo: "Tortilla de Patatas Rápida en Microondas",
    descripcion: "La forma más limpia, rápida y económica de comer una tortilla de patatas jugosa.",
    tiempo: 12,
    coste: 2.20,
    dificultad: "Fácil",
    porciones: 2,
    metodo: "Microondas",
    supermercados: ["Mercadona", "Consum", "Lidl"],
    ingredientes: [
      { nombre: "Patatas cortadas", cantidad: "300g (3 medianas)", principal: true },
      { nombre: "Huevos", cantidad: "4 grandes", principal: true },
      { nombre: "Aceite de oliva virgen extra", cantidad: "2 cucharadas", principal: true },
      { nombre: "Cebolla picada", cantidad: "1/2 unidad", principal: false },
      { nombre: "Sal", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Pela y corta las patatas en láminas finas (como para tortilla tradicional). Corta también la cebolla en trozos pequeños si decides usarla.",
      "Coloca las patatas y la cebolla en un bol apto para microondas. Añade el aceite de oliva y una pizca de sal, y remueve muy bien para que todo se engrase.",
      "Tapa el bol con film transparente (hazle 3-4 pinchazos con un tenedor) o usa una tapa apta para microondas. Cocina a máxima potencia (800W) durante 8 minutos.",
      "Saca el bol con cuidado de no quemarte, remueve las patatas y comprueba si están blandas. Si les falta un poco, mételas 2 minutos más.",
      "En un bol aparte, bate los huevos con un poco de sal. Incorpora las patatas cocidas al huevo batido y aplástalas ligeramente con un tenedor. Deja reposar 2 minutos para que absorban el huevo.",
      "Calienta una sartén pequeña con media cucharadita de aceite a fuego medio-alto. Vierte la mezcla, cuaja 1-2 minutos por un lado, dale la vuela con un plato y cuaja otro minuto por el otro lado."
    ],
    categorias: ["Económicas", "Cenas rápidas", "Microondas"]
  },
  {
    id: "salmon-esparragos-airfryer",
    titulo: "Salmón con Espárragos al Limón",
    descripcion: "Salmón jugoso por dentro y crujiente por fuera con guarnición saludable en solo 12 minutos.",
    tiempo: 12,
    coste: 4.80,
    dificultad: "Muy fácil",
    porciones: 1,
    metodo: "Airfryer",
    supermercados: ["Mercadona", "Lidl", "Carrefour", "Aldi"],
    ingredientes: [
      { nombre: "Lomo de salmón fresco", cantidad: "1 unidad (aprox. 180g)", principal: true },
      { nombre: "Espárragos trigos finos", cantidad: "1/2 manojo", principal: true },
      { nombre: "Limón", cantidad: "1/2 unidad", principal: false },
      { nombre: "Aceite de oliva en spray", cantidad: "2 pulverizaciones", principal: false },
      { nombre: "Ajo en polvo y pimienta negra", cantidad: "al gusto", principal: false },
      { nombre: "Sal", cantidad: "una pizca", principal: false }
    ],
    pasos: [
      "Precalienta la freidora de aire a 190°C durante 3 minutos.",
      "Lava los espárragos y corta la parte inferior del tallo, que es más dura y leñosa.",
      "Sazona el lomo de salmón y los espárragos con sal, pimienta negra y ajo en polvo al gusto.",
      "Coloca el salmón en el centro de la cesta de la airfryer (con la piel hacia abajo) y los espárragos alrededor.",
      "Pulveriza un poco de aceite de oliva sobre los espárragos y el salmón. Coloca dos rodajas finas de limón encima del pescado.",
      "Cocina a 190°C durante 9-10 minutos. El salmón debe quedar dorado por fuera y jugoso por dentro. ¡Sirve inmediatamente!"
    ],
    categorias: ["Pescado", "Cenas rápidas", "Airfryer"]
  },
  {
    id: "pechuga-pollo-limon-vitro",
    titulo: "Pechugas de Pollo al Limón Jugosas",
    descripcion: "Se acabó el comer pechuga seca. El truco del limón y el fuego medio las deja tiernas y sabrosas.",
    tiempo: 15,
    coste: 3.10,
    dificultad: "Fácil",
    porciones: 2,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Aldi", "Lidl", "Carrefour"],
    ingredientes: [
      { nombre: "Pechuga de pollo en filetes gruesos", cantidad: "400g", principal: true },
      { nombre: "Limón", cantidad: "1 grande (zumo)", principal: true },
      { nombre: "Ajo seco picado", cantidad: "1 cucharadita", principal: false },
      { nombre: "Aceite de oliva virgen extra", cantidad: "1 cucharada", principal: true },
      { nombre: "Perejil picado", cantidad: "1 cucharada", principal: false },
      { nombre: "Sal y pimienta", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Salpimienta los filetes de pechuga de pollo por ambos lados y espolvorea el ajo picado.",
      "Calienta el aceite de oliva en una sartén grande a fuego medio-alto.",
      "Coloca el pollo en la sartén y dóralo durante 3 minutos por un lado sin moverlo para sellar los jugos.",
      "Dale la vuelta a las pechugas y añade el zumo del limón por encima y los restos de pulpa si quieres. Espolvorea el perejil.",
      "Baja el fuego a medio-bajo, tapa la sartén y deja que se cocine durante 5-6 minutos más en el zumo de limón, lo que las mantendrá jugosas.",
      "Sirve el pollo regándolo con la salsa emulsionada de limón y aceite que queda en la sartén."
    ],
    categorias: ["Pollo", "Cenas rápidas", "Vitrocerámica"]
  },
  {
    id: "pasta-atun-tomate-rapida",
    titulo: "Macarrones Exprés con Atún y Tomate",
    descripcion: "El clásico de los estudiantes y de los días sin tiempo. Económico, reconfortante y facilísimo.",
    tiempo: 12,
    coste: 1.80,
    dificultad: "Muy fácil",
    porciones: 2,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Macarrones o plumas", cantidad: "160g", principal: true },
      { nombre: "Atún en conserva en aceite", cantidad: "2 latas", principal: true },
      { nombre: "Tomate frito (estilo casero)", cantidad: "1 bote (250g)", principal: true },
      { nombre: "Queso rallado (mozzarella o gouda)", cantidad: "50g", principal: false },
      { nombre: "Orégano seco", cantidad: "1 cucharadita", principal: false },
      { nombre: "Sal", cantidad: "una cucharada para el agua", principal: false }
    ],
    pasos: [
      "Pon abundante agua con sal a calentar en una olla a fuego fuerte. Cuando rompa a hervir, añade la pasta y cuece los minutos indicados en el paquete (normalmente 8-9 minutos para que quede al dente).",
      "Mientras se cuece la pasta, abre las latas de atún. Puedes escurrir un poco de aceite si lo deseas, pero el aceite del atún aporta mucho sabor al plato.",
      "En una sartén grande a fuego medio, vierte el tomate frito y caliéntalo. Añade el atún desmigado y mezcla bien. Espolvorea el orégano.",
      "Escurre bien la pasta una vez cocida.",
      "Vierte la pasta directamente en la sartén con el tomate y el atún. Remueve a fuego bajo durante 1 minuto para que la pasta absorba la salsa.",
      "Sirve caliente con queso rallado por encima que se derretirá con el propio calor residual."
    ],
    categorias: ["Económicas", "Arroz, sopas, cremas", "Vitrocerámica"]
  },
  {
    id: "gnocchi-queso-bacon-airfryer",
    titulo: "Gnocchi Crujientes con Queso y Bacon",
    descripcion: "Gnocchi sin cocer en agua, directamente a la airfryer para que queden crujientes por fuera y tiernos por dentro.",
    tiempo: 15,
    coste: 2.50,
    dificultad: "Muy fácil",
    porciones: 1,
    metodo: "Airfryer",
    supermercados: ["Mercadona", "Lidl", "Carrefour"],
    ingredientes: [
      { nombre: "Gnocchi de patata frescos (de nevera)", cantidad: "250g (medio paquete)", principal: true },
      { nombre: "Bacon en tiras", cantidad: "50g", principal: true },
      { nombre: "Queso rallado para fundir", cantidad: "40g", principal: true },
      { nombre: "Aceite de oliva en spray", cantidad: "2 pulverizaciones", principal: false },
      { nombre: "Pimienta negra y orégano", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Pon los gnocchi crudos directamente de la bolsa en un bol. Añade las tiras de bacon, una pizca de pimienta y orégano.",
      "Pulveriza con aceite de oliva y mezcla bien con las manos para repartir la grasa del bacon y el aceite.",
      "Vierte todo en la cesta de la freidora de aire previamente precalentada a 200°C.",
      "Cocina a 200°C durante 10-12 minutos, sacudiendo la cesta a mitad de cocción. El bacon debe quedar crujiente y los gnocchi ligeramente dorados.",
      "Abre la cesta, cubre la superficie con el queso rallado y programa 2 minutos más a 200°C para fundir y gratinar el queso.",
      "Saca con cuidado y sirve en caliente."
    ],
    categorias: ["Cenas rápidas", "Airfryer"]
  },
  {
    id: "patatas-hasselback-airfryer",
    titulo: "Patatas Hasselback Crujientes",
    descripcion: "Patatas asadas al estilo sueco con cortes en acordeón. Impresionantes, baratas y facilísimas en freidora de aire.",
    tiempo: 25,
    coste: 1.20,
    dificultad: "Fácil",
    porciones: 2,
    metodo: "Airfryer",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Patatas medianas (de tamaño similar)", cantidad: "2 unidades", principal: true },
      { nombre: "Aceite de oliva virgen extra", cantidad: "1 cucharada", principal: true },
      { nombre: "Ajo en polvo", cantidad: "1/2 cucharadita", principal: false },
      { nombre: "Pimentón dulce", cantidad: "1/2 cucharadita", principal: false },
      { nombre: "Sal y pimienta negra", cantidad: "al gusto", principal: false },
      { nombre: "Queso parmesano rallado (opcional)", cantidad: "1 cucharada", principal: false }
    ],
    pasos: [
      "Lava muy bien las patatas, ya que las comeremos con piel.",
      "Coloca la patata entre dos palillos de madera para brochetas o mangos de cuchara de madera (esto evitará que cortes la patata hasta abajo).",
      "Haz cortes transversales finos y seguidos (de unos 2-3 mm) a lo largo de toda la patata. Los cortes deben llegar hasta donde hacen tope los palillos.",
      "En un vasito, mezcla el aceite de oliva, el ajo en polvo, el pimentón dulce, la sal y la pimienta.",
      "Pinta las patatas con la mezcla usando un pincel o con las manos, intentando que entre un poco de aceite entre las láminas de la patata.",
      "Coloca en la airfryer a 190°C y cocina durante 20-22 minutos. A mitad de cocción puedes pintarlas de nuevo con el aceite que caiga en la cesta.",
      "Si usas queso parmesano, espolvoréalo 2 minutos antes de terminar. Pincha el centro con un cuchillo para confirmar que están tiernas por dentro antes de servir."
    ],
    categorias: ["Económicas", "Airfryer"]
  },
  {
    id: "arroz-tres-delicias-micro",
    titulo: "Arroz Tres Delicias Exprés",
    descripcion: "El arroz frito favorito de todos, cocinado en un solo recipiente y en el microondas sin ensuciar sartenes.",
    tiempo: 15,
    coste: 2.10,
    dificultad: "Muy fácil",
    porciones: 2,
    metodo: "Microondas",
    supermercados: ["Mercadona", "Consum", "Lidl", "Carrefour"],
    ingredientes: [
      { nombre: "Arroz de grano largo o basmati", cantidad: "120g", principal: true },
      { nombre: "Agua", cantidad: "250ml", principal: true },
      { nombre: "Gisantes y zanahorias baby (congelados)", cantidad: "50g", principal: true },
      { nombre: "Taquitos de jamón york o pavo", cantidad: "50g", principal: true },
      { nombre: "Huevo", cantidad: "1 unidad", principal: true },
      { nombre: "Salsa de soja", cantidad: "1 cucharada", principal: false },
      { nombre: "Aceite de oliva y sal", cantidad: "1 cucharada y una pizca", principal: false }
    ],
    pasos: [
      "En un bol apto para microondas grande, añade el arroz, una cucharadita de aceite de oliva, una pizca de sal y los 250ml de agua caliente.",
      "Tapa de manera parcial (dejando un pequeño hueco) y cocina a máxima potencia (800W) durante 6 minutos.",
      "Abre el microondas, añade los guisantes y la zanahoria (que pueden estar congelados directamente). Remueve un poco.",
      "Cocina todo junto otros 4 minutos más a máxima potencia, hasta que el arroz haya absorbido casi todo el agua y esté tierno.",
      "En una taza, bate el huevo con una pizca de sal. Vierte el huevo batido sobre el arroz caliente y remueve enérgicamente con un tenedor. El calor residual del arroz cocinará el huevo al instante, creando hilos finos (como tortilla deshilachada).",
      "Añade los taquitos de jamón york y una cucharada de salsa de soja. Remueve todo bien, déjalo reposar tapado 2 minutos fuera del microondas y sirve."
    ],
    categorias: ["Arroz, sopas, cremas", "Microondas", "Económicas"]
  },
  {
    id: "merluza-papillote-micro",
    titulo: "Merluza al Papillote Saludable",
    descripcion: "Un plato de pescado tierno, jugoso y limpísimo que se cocina al vapor en su propio jugo usando el microondas.",
    tiempo: 8,
    coste: 3.50,
    dificultad: "Fácil",
    porciones: 1,
    metodo: "Microondas",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Lomo de merluza limpio (fresco o descongelado)", cantidad: "1 unidad (150g)", principal: true },
      { nombre: "Calabacín cortado fino", cantidad: "1/4 unidad", principal: true },
      { nombre: "Zanahoria cortada fina", cantidad: "1/2 unidad", principal: true },
      { nombre: "Aceite de oliva virgen extra", cantidad: "1 cucharadita", principal: false },
      { nombre: "Limón", cantidad: "2 rodajas", principal: false },
      { nombre: "Sal y eneldo seco", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Sobre un trozo grande de papel de horno o un estuche de silicona (tipo Lékué), dispón una base con el calabacín y la zanahoria cortados en bastoncillos muy finos (tipo juliana) para que se cocinen rápido.",
      "Coloca el lomo de merluza sazonado con sal y eneldo encima de las verduras.",
      "Coloca las rodajas de limón sobre la merluza y riega todo con la cucharadita de aceite de oliva.",
      "Cierra el papel de horno doblando los bordes hacia dentro de forma hermética para que no se escape el vapor (creando un paquetito), o cierra el estuche de silicona.",
      "Introduce en el microondas a potencia máxima (800W) durante 4 minutos (5 minutos si el lomo es muy grueso).",
      "Abre el paquete con cuidado de no quemarte con el vapor caliente acumulado y sirve directamente en el plato."
    ],
    categorias: ["Pescado", "Cenas rápidas", "Microondas"]
  },
  {
    id: "crema-calabacin-quesitos",
    titulo: "Crema de Calabacín y Quesitos Exprés",
    descripcion: "Súper cremosa, suave y baratísima. La sopa reconfortante perfecta para cenar o de primer plato.",
    tiempo: 20,
    coste: 2.20,
    dificultad: "Muy fácil",
    porciones: 4,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Calabacines verdes", cantidad: "2 grandes (aprox. 700g)", principal: true },
      { nombre: "Patata mediana", cantidad: "1 unidad", principal: true },
      { nombre: "Cebolla", cantidad: "1 grande", principal: true },
      { nombre: "Quesitos en porciones (tipo El Caserío)", cantidad: "4 unidades", principal: true },
      { nombre: "Aceite de oliva virgen extra", cantidad: "2 cucharadas", principal: false },
      { nombre: "Agua o caldo de verduras", cantidad: "500ml", principal: false },
      { nombre: "Sal y pimienta blanca", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Pela la cebolla y córtala en trozos grandes. Pela la patata y cáscala en trozos pequeños (chascar la patata ayuda a espesar la crema).",
      "Lava los calabacines. No los peles del todo; deja tiras de piel verde para que la crema tenga un color verde vivo y más fibra.",
      "En una olla a fuego medio, añade el aceite de oliva y rehoga la cebolla y la patata durante 3 minutos.",
      "Añade el calabacín troceado a la olla y rehoga otros 2 minutos.",
      "Vierte el agua o caldo de verduras (debe cubrir las verduras justo por la mitad, no del todo, ya que el calabacín soltará mucha agua). Añade una cucharadita de sal y pimienta blanca.",
      "Tapa y cuece a fuego medio-alto durante 15 minutos o hasta que la patata esté blanda.",
      "Aparta la olla del fuego, añade los 4 quesitos y tritura todo muy bien con una batidora de mano hasta obtener una textura fina, homogénea y muy cremosa. Ajusta de sal y sirve."
    ],
    categorias: ["Arroz, sopas, cremas", "Económicas", "Batch cooking", "Vitrocerámica"]
  },
  {
    id: "lentejas-chorizo-bote",
    titulo: "Lentejas con Chorizo de Bote en 15 Minutos",
    descripcion: "Un guiso tradicional con sabor a abuela pero hecho en tiempo récord gracias a las lentejas ya cocidas.",
    tiempo: 15,
    coste: 3.20,
    dificultad: "Fácil",
    porciones: 3,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Lentejas cocidas en conserva (frasco grande)", cantidad: "1 bote (400g escurrido)", principal: true },
      { nombre: "Chorizo dulce para cocinar", cantidad: "1 rodaja gruesa o 1/2 pieza en tacos", principal: true },
      { nombre: "Pisto de verduras de bote (Mercadona/Consum)", cantidad: "150g (3-4 cucharadas)", principal: true },
      { nombre: "Caldo de carne o verduras (o agua)", cantidad: "250ml", principal: false },
      { nombre: "Pimentón dulce y sal", cantidad: "1/2 cucharadita y una pizca", principal: false },
      { nombre: "Aceite de oliva", cantidad: "1 cucharadita", principal: false }
    ],
    pasos: [
      "Vuelca las lentejas de bote en un colador y lávalas suavemente bajo el grifo con agua fría para quitarles el líquido de cobertura. Deja escurrir.",
      "En una cazuela pequeña, calienta una cucharadita de aceite de oliva a fuego medio y añade el chorizo cortado en rodajas o tacos pequeños. Deja que se dore y suelte su grasa roja durante 2 minutos.",
      "Añade las cucharadas de pisto de verduras (que sustituye al sofrito tradicional y nos ahorra cortar cebolla, ajo, pimiento y tomate) y mezcla bien.",
      "Espolvorea el pimentón dulce e integra rápido para que no se queme.",
      "Vierte las lentejas escurridas y el caldo (o agua). Sube el fuego hasta que hierva, luego bájalo a medio-bajo, tapa y deja cocer durante 10 minutos para que los sabores se integren.",
      "Prueba el caldo, rectifica de sal si es necesario y sirve caliente. Opcionalmente, puedes añadir una patata cocida cortada en dados."
    ],
    categorias: ["Arroz, sopas, cremas", "Carne", "Vitrocerámica", "Económicas"]
  },
  {
    id: "alitas-pollo-crujientes-airfryer",
    titulo: "Alitas de Pollo Súper Crujientes",
    descripcion: "Consigue unas alitas extremadamente crujientes sin una gota de aceite. La magia de la airfryer.",
    tiempo: 25,
    coste: 2.80,
    dificultad: "Muy fácil",
    porciones: 2,
    metodo: "Airfryer",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi"],
    ingredientes: [
      { nombre: "Alitas de pollo cortadas y limpias", cantidad: "500g", principal: true },
      { nombre: "Ajo en polvo", cantidad: "1 cucharadita", principal: false },
      { nombre: "Cebolla en polvo", cantidad: "1 cucharadita", principal: false },
      { nombre: "Pimentón dulce (o picante)", cantidad: "1/2 cucharadita", principal: false },
      { nombre: "Sal y pimienta negra", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Seca muy bien las alitas de pollo con papel de cocina (la humedad evita que queden crujientes).",
      "En un bol grande, introduce las alitas y añade todas las especias: sal, pimienta negra, ajo en polvo, cebolla en polvo y pimentón.",
      "Mezcla muy bien con las manos para asegurarte de que todas las alitas queden completamente impregnadas con las especias. No añadas aceite.",
      "Precalienta la freidora a 180°C por 3 minutos. Coloca las alitas en la cesta en una sola capa (evita amontonarlas demasiado para que pase bien el aire).",
      "Cocina a 180°C durante 15 minutos. Saca la cesta y dales la vuelta a todas las alitas.",
      "Sube la temperatura a 200°C y cocina durante 5-7 minutos adicionales hasta que veas la piel bien dorada, crujiente y burbujeante. ¡Sirve calientes!"
    ],
    categorias: ["Pollo", "Airfryer", "Cenas rápidas"]
  },
  {
    id: "berenjenas-rellenas-atun-horno",
    titulo: "Berenjenas Rellenas de Atún al Horno",
    descripcion: "Un clásico ligero, sabroso y fácil de preparar. Se hace con atún de lata para mayor practicidad.",
    tiempo: 30,
    coste: 2.90,
    dificultad: "Fácil",
    porciones: 2,
    metodo: "Horno",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Berenjenas grandes", cantidad: "2 unidades", principal: true },
      { nombre: "Atún en conserva (aceite o natural)", cantidad: "2 latas", principal: true },
      { nombre: "Tomate frito casero", cantidad: "150g (6 cucharadas)", principal: true },
      { nombre: "Cebolla", cantidad: "1/2 unidad", principal: false },
      { nombre: "Queso rallado para gratinar", cantidad: "60g", principal: true },
      { nombre: "Aceite de oliva y sal", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Precalienta el horno a 200°C con calor arriba y abajo.",
      "Corta las berenjenas por la mitad a lo largo. Con la punta de un cuchillo, haz cortes en la pulpa en forma de cruz sin traspasar la piel. Añade sal y unas gotas de aceite de oliva.",
      "Hornea las berenjenas a 200°C durante 20 minutos (o mételas en el microondas tapadas durante 8 minutos a máxima potencia) hasta que la pulpa esté blanda.",
      "Mientras tanto, pica la cebolla fina y sofriégala en una sartén con aceite de oliva durante 5 minutos. Añade el atún escurrido y el tomate frito. Cocina a fuego lento 2 minutos.",
      "Saca las berenjenas del horno. Con una cuchara, extrae la pulpa con cuidado de no romper la piel externa. Añade la pulpa picada a la sartén con el atún y mezcla bien.",
      "Rellena las pieles de las berenjenas con la mezcla de la sartén, cubre con el queso rallado y hornea (o usa el grill) durante 5-7 minutos hasta que el queso esté dorado."
    ],
    categorias: ["Pescado", "Cenas rápidas", "Horno"]
  },
  {
    id: "solomillo-cerdo-pimienta-vitro",
    titulo: "Solomillo de Cerdo a la Pimienta Verde",
    descripcion: "Solomillo tierno con una salsa de nata y pimienta verde digna de restaurante pero lista en 15 minutos.",
    tiempo: 15,
    coste: 3.90,
    dificultad: "Fácil",
    porciones: 2,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Carrefour"],
    ingredientes: [
      { nombre: "Solomillo de cerdo", cantidad: "1 unidad (aprox. 400g)", principal: true },
      { nombre: "Nata líquida para cocinar", cantidad: "200ml (1 brik)", principal: true },
      { nombre: "Pimienta verde en grano (o pimienta negra recién molida)", cantidad: "1 cucharadita", principal: true },
      { nombre: "Caldo de carne (o brandy/coñac para desglasar)", cantidad: "2 cucharadas", principal: false },
      { nombre: "Aceite de oliva virgen extra", cantidad: "1 cucharada", principal: false },
      { nombre: "Sal", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Limpia el exceso de grasa del solomillo y córtalo en medallones gruesos (de unos 2 cm).",
      "Salpimienta los medallones por ambos lados.",
      "Calienta el aceite de oliva en una sartén a fuego alto. Dora los medallones de solomillo durante 2 minutos por lado (deben quedar dorados por fuera y ligeramente rosados en el centro para que no se sequen). Retira a un plato.",
      "En la misma sartén, baja el fuego a medio y vierte la nata y los granos de pimienta (y el caldo o brandy si los usas, rascando el fondo con una espátula de madera para recoger los jugos del sellado).",
      "Cocina la nata durante 3 minutos hasta que empiece a espesar.",
      "Devuelve el solomillo y sus jugos del plato a la sartén. Mezcla con la salsa y cocina todo junto a fuego bajo 2 minutos más antes de servir."
    ],
    categorias: ["Carne", "Vitrocerámica"]
  },
  {
    id: "garbanzos-crujientes-especias",
    titulo: "Garbanzos Especiados Crujientes",
    descripcion: "Un snack súper saludable o acompañamiento crujiente para ensaladas hecho en 15 minutos.",
    tiempo: 15,
    coste: 0.90,
    dificultad: "Muy fácil",
    porciones: 2,
    metodo: "Airfryer",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Garbanzos cocidos en conserva (frasco pequeño)", cantidad: "1 bote (200g escurrido)", principal: true },
      { nombre: "Aceite de oliva virgen extra", cantidad: "1 cucharadita", principal: true },
      { nombre: "Ajo en polvo", cantidad: "1/2 cucharadita", principal: false },
      { nombre: "Pimentón dulce", cantidad: "1/2 cucharadita", principal: false },
      { nombre: "Comino en polvo", cantidad: "1/4 cucharadita", principal: false },
      { nombre: "Sal", cantidad: "una pizca", principal: false }
    ],
    pasos: [
      "Enjuaga muy bien los garbanzos bajo el grifo de agua fría para quitar la espuma del bote. Escurre muy bien.",
      "Sécalos concienzudamente con un paño limpio o papel absorbente. Es fundamental que estén bien secos para que queden crujientes.",
      "En un bol, mezcla los garbanzos secos con la cucharadita de aceite de oliva y todas las especias (ajo, pimentón, comino y sal). Mezcla para que se cubran por completo.",
      "Vuelca los garbanzos en la cesta de la freidora de aire y extiéndelos en una sola capa.",
      "Cocina a 200°C durante 12-15 minutos, agitando la cesta cada 4-5 minutos para asegurar un tostado uniforme.",
      "Saca de la freidora y déjalos enfriar 5 minutos antes de consumir, ya que se vuelven más crujientes al templarse."
    ],
    categorias: ["Económicas", "Airfryer", "Cenas rápidas"]
  },
  {
    id: "mac-and-cheese-facil",
    titulo: "Macarrones con Queso (Mac & Cheese) Fáciles",
    descripcion: "La receta de pasta con queso cremosa y gratinada al horno que encanta a pequeños y grandes.",
    tiempo: 20,
    coste: 2.30,
    dificultad: "Fácil",
    porciones: 4,
    metodo: "Horno",
    supermercados: ["Mercadona", "Lidl", "Carrefour", "Consum"],
    ingredientes: [
      { nombre: "Pasta (coditos o macarrones pequeños)", cantidad: "320g", principal: true },
      { nombre: "Queso Cheddar rallado", cantidad: "150g", principal: true },
      { nombre: "Leche entera", cantidad: "400ml", principal: true },
      { nombre: "Harina de trigo", cantidad: "1 cucharada colmada", principal: true },
      { nombre: "Mantequilla", cantidad: "2 cucharadas (30g)", principal: true },
      { nombre: "Sal y nuez moscada", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Cuece la pasta en agua hirviendo con sal durante 2 minutos menos de lo que indique el fabricante (se terminará de cocer en el horno). Escurre y reserva.",
      "Precalienta el horno a 200°C con función grill activada.",
      "En un cazo a fuego medio, funde la mantequilla. Añade la harina y remueve bien durante 1 minuto con unas varillas para que se cocine y pierda el sabor crudo.",
      "Vierte la leche fría poco a poco sin dejar de remover con las varillas para evitar que se formen grumos. Añade sal y una pizca de nuez moscada. Cocina 5 minutos hasta que espese formando una bechamel ligera.",
      "Retira del fuego y añade 100g del queso cheddar rallado. Remueve hasta que se funda por completo con el calor de la bechamel.",
      "Mezcla la pasta cocida con la salsa de queso y viértela en una fuente apta para horno. Cubre con los 50g restantes de queso cheddar y gratina al horno a 200°C durante 5-7 minutos hasta conseguir una costra dorada."
    ],
    categorias: ["Económicas", "Horno", "Batch cooking"]
  },
  {
    id: "mug-cake-chocolate-micro",
    titulo: "Mug Cake de Chocolate Express",
    descripcion: "Un bizcocho de chocolate individual hecho directamente en una taza y listo en 3 minutos en microondas.",
    tiempo: 3,
    coste: 0.80,
    dificultad: "Muy fácil",
    porciones: 1,
    metodo: "Microondas",
    supermercados: ["Mercadona", "Lidl", "Aldi", "Carrefour", "Consum"],
    ingredientes: [
      { nombre: "Harina de trigo", cantidad: "3 cucharadas", principal: true },
      { nombre: "Azúcar", cantidad: "2 cucharadas", principal: true },
      { nombre: "Cacao en polvo (tipo Valor o Nesquik)", cantidad: "1 cucharada colmada", principal: true },
      { nombre: "Leche entera o vegetal", cantidad: "3 cucharadas", principal: true },
      { nombre: "Aceite de girasol u oliva suave", cantidad: "1 cucharada", principal: true },
      { nombre: "Nutella o crema de cacao (opcional)", cantidad: "1 cucharadita", principal: false },
      { nombre: "Levadura química (polvo para hornear)", cantidad: "1/4 cucharadita", principal: false }
    ],
    pasos: [
      "Elige una taza de desayuno de cerámica estándar (que soporte microondas y tenga buena capacidad).",
      "Introduce en la taza los ingredientes secos: la harina, el azúcar, el cacao y la levadura. Mezcla bien con un tenedor pequeño.",
      "Añade los ingredientes líquidos: la leche y el aceite. Remueve todo con el tenedor hasta obtener una masa pastosa, homogénea y sin grumos de harina.",
      "Si deseas un centro cremoso, añade la cucharadita de Nutella justo en el centro de la masa empujándola ligeramente hacia el fondo, sin removerla.",
      "Introduce la taza en el microondas y cocina a máxima potencia (800W) durante 1 minuto y 20 segundos.",
      "Saca con cuidado de no quemarte. El bizcocho subirá bastante y luego bajará un poco. Deja templar 2 minutos antes de comer."
    ],
    categorias: ["Económicas", "Microondas", "Cenas rápidas"]
  },
  {
    id: "fajitas-pollo-rapidas",
    titulo: "Fajitas de Pollo en una sola Sartén",
    descripcion: "Fajitas sabrosas con cebolla y pimiento. Un plato completo y divertido que gusta a todos.",
    tiempo: 20,
    coste: 3.50,
    dificultad: "Fácil",
    porciones: 2,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Carrefour"],
    ingredientes: [
      { nombre: "Pechuga de pollo en tiras", cantidad: "350g", principal: true },
      { nombre: "Pimiento rojo y verde", cantidad: "1/2 unidad de cada uno", principal: true },
      { nombre: "Cebolla", cantidad: "1/2 unidad", principal: true },
      { nombre: "Tortillas de trigo para fajitas", cantidad: "4 unidades", principal: true },
      { nombre: "Sazonador para fajitas (sobre)", cantidad: "1 cucharada colmada", principal: false },
      { nombre: "Aceite de oliva y sal", cantidad: "1 cucharada y una pizca", principal: false }
    ],
    pasos: [
      "Corta los pimientos y la cebolla en tiras finas (estilo juliana). Corta el pollo en tiras medianas.",
      "Calienta el aceite de oliva en una sartén grande a fuego alto.",
      "Añade la cebolla y los pimientos a la sartén y saltéalos durante 5 minutos para que se doren pero queden ligeramente crujientes. Retira de la sartén.",
      "En la misma sartén, añade un hilito de aceite y cocina el pollo a fuego fuerte hasta que esté dorado.",
      "Devuelve las verduras a la sartén con el pollo. Añade la cucharada de sazonador de fajitas (o mezcla de ajo, comino, pimentón y sal) y un chorrito de agua para crear una salsa ligera que una los ingredientes. Cocina todo junto 2 minutos.",
      "Calienta las tortillas de trigo en el microondas durante 20 segundos y sírvelas en la mesa junto al pollo con verduras para que cada uno monte sus fajitas."
    ],
    categorias: ["Pollo", "Cenas rápidas", "Vitrocerámica"]
  },
  {
    id: "lubina-espalda-horno",
    titulo: "Lubina a la Espalda con Ajitos y Guindilla",
    descripcion: "La lubina abierta a la espalda hecha al horno es ligera, nutritiva y se cocina en solo 15 minutos.",
    tiempo: 18,
    coste: 4.90,
    dificultad: "Fácil",
    porciones: 2,
    metodo: "Horno",
    supermercados: ["Mercadona", "Consum", "Lidl", "Carrefour"],
    ingredientes: [
      { nombre: "Lubina fresca abierta en libro (pedir en pescadería)", cantidad: "1 pieza (aprox. 500g)", principal: true },
      { nombre: "Dientes de ajo", cantidad: "4 unidades", principal: true },
      { nombre: "Guindilla seca (cayena)", cantidad: "1 unidad", principal: false },
      { nombre: "Vinagre de vino blanco o de manzana", cantidad: "1 cucharada", principal: false },
      { nombre: "Aceite de oliva virgen extra", cantidad: "3 cucharadas", principal: true },
      { nombre: "Sal", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Precalienta el horno a 200°C con calor arriba y abajo.",
      "Limpia la lubina abierta, sécala con papel de cocina y colócala con la piel hacia abajo sobre una bandeja de horno cubierta con papel de hornear. Sazónala generosamente con sal.",
      "Hornea la lubina a 200°C durante 10-12 minutos (debe quedar blanca y tierna, no la dejes pasar demasiado para que no se reseque).",
      "Mientras tanto, lamina los dientes de ajo. En una sartén pequeña, calienta el aceite de oliva a fuego medio y añade los ajos laminados y la guindilla cortada en aros.",
      "Dora los ajos con cuidado de que no se quemen. Retira la sartén del fuego y añade con cuidado la cucharada de vinagre (cuidado con las salpicaduras).",
      "Saca la lubina del horno y viértele por encima todo el aceite aromatizado caliente con los ajos crujientes de la sartén. Sirve inmediatamente."
    ],
    categorias: ["Pescado", "Horno"]
  },
  {
    id: "gulas-al-ajillo-gambas",
    titulo: "Gulas al Ajillo con Gambas Exprés",
    descripcion: "Una cena ligera, rápida y súper apetecible con un toque picante increíble.",
    tiempo: 10,
    coste: 3.80,
    dificultad: "Muy fácil",
    porciones: 2,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Gulas en bandeja", cantidad: "200g (1 paquete)", principal: true },
      { nombre: "Gambas peladas (frescas o descongeladas)", cantidad: "100g", principal: true },
      { nombre: "Dientes de ajo", cantidad: "3 unidades", principal: true },
      { nombre: "Guindilla cayena seca", cantidad: "1 unidad", principal: false },
      { nombre: "Aceite de oliva virgen extra", cantidad: "3 cucharadas", principal: true },
      { nombre: "Sal", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Pela los ajos y córtalos en láminas finas. Corta la guindilla en 2-3 trozos.",
      "En una sartén mediana, añade el aceite de oliva y ponlo a calentar a fuego medio junto con las láminas de ajo y la guindilla (ponerlos desde frío ayuda a perfumar el aceite sin quemar el ajo).",
      "Cuando los ajos empiecen a bailar y dorarse, añade las gambas bien escurridas y secas. Saltéalas durante 2 minutos hasta que cambien de color.",
      "Incorpora las gulas deshilachadas a la sartén y añade una pizca de sal.",
      "Remueve bien todo durante 2-3 minutos más para que las gulas absorban el aceite aromatizado y se calienten por completo.",
      "Sirve caliente, preferiblemente en una cazuela de barro."
    ],
    categorias: ["Pescado", "Cenas rápidas", "Vitrocerámica"]
  },
  {
    id: "mini-pizzas-pita",
    titulo: "Mini Pizzas Express en Pan de Pita",
    descripcion: "Usa pan de pita como masa de pizza rápida. Crujientes, rápidas y perfectas para una cena improvisada.",
    tiempo: 8,
    coste: 1.50,
    dificultad: "Muy fácil",
    porciones: 2,
    metodo: "Airfryer",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Panes de pita de trigo", cantidad: "2 unidades", principal: true },
      { nombre: "Tomate frito", cantidad: "2 cucharadas", principal: true },
      { nombre: "Queso mozzarella rallado", cantidad: "60g", principal: true },
      { nombre: "Jamón cocido en lonchas (o atún)", cantidad: "2 lonchas cortadas", principal: true },
      { nombre: "Orégano seco", cantidad: "1 cucharadita", principal: false }
    ],
    pasos: [
      "Coloca los dos panes de pita sobre una tabla.",
      "Extiende una cucharada de tomate frito sobre la superficie de cada pan de pita de forma uniforme.",
      "Espolvorea la mitad del queso mozzarella por encima del tomate.",
      "Reparte las tiras de jamón cocido (u otros ingredientes de tu gusto como atún, aceitunas o cebolla) sobre el queso.",
      "Cubre con el resto del queso y espolvorea el orégano seco.",
      "Mete en la freidora de aire a 190°C y cocina durante 5-6 minutos (o en el horno a 200°C por 8 minutos) hasta que el queso esté derretido, burbujeante y los bordes del pan de pita crujientes."
    ],
    categorias: ["Cenas rápidas", "Airfryer", "Económicas"]
  },
  {
    id: "sopa-picadillo-rapida",
    titulo: "Sopa de Picadillo Andaluza Exprés",
    descripcion: "Sopa reconfortante con huevo duro, jamón serrano y fideos finos. Un clásico que entibia el cuerpo.",
    tiempo: 15,
    coste: 2.10,
    dificultad: "Muy fácil",
    porciones: 4,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Carrefour"],
    ingredientes: [
      { nombre: "Caldo de pollo (tetrabrick)", cantidad: "1 litro", principal: true },
      { nombre: "Fideos finos (cabello de ángel)", cantidad: "60g (2 puñados)", principal: true },
      { nombre: "Huevo", cantidad: "1 unidad", principal: true },
      { nombre: "Taquitos de jamón serrano", cantidad: "50g", principal: true },
      { nombre: "Pechuga de pollo cocida (opcional, restos de pollo)", cantidad: "50g", principal: false }
    ],
    pasos: [
      "Pon a cocer el huevo en un cazo pequeño con agua durante 10 minutos desde que hierva para conseguir un huevo duro. Luego, enfríalo en agua fría, pélalo y pícalo finamente.",
      "Mientras tanto, pon a calentar el caldo de pollo en una olla a fuego fuerte.",
      "Cuando el caldo empiece a hervir, echa los fideos finos y cocina durante 3 minutos (o el tiempo indicado en el paquete, al ser finos se cuecen de inmediato).",
      "Apaga el fuego de la olla.",
      "Añade a la sopa el huevo duro picado y los taquitos de jamón serrano (y el pollo cocido deshilachado si decides usarlo).",
      "Remueve y sirve caliente. El jamón soltará su sal y aroma en el caldo caliente al instante."
    ],
    categorias: ["Arroz, sopas, cremas", "Económicas", "Vitrocerámica"]
  },
  {
    id: "albondigas-pollo-cebolla",
    titulo: "Albóndigas de Pollo en Salsa de Cebolla",
    descripcion: "Albóndigas de pollo tiernas en una salsa dulce de cebolla. Ideal para preparar en lote (Batch Cooking).",
    tiempo: 35,
    coste: 3.50,
    dificultad: "Fácil",
    porciones: 4,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Albóndigas de pollo preparadas", cantidad: "12-16 unidades (400g)", principal: true },
      { nombre: "Cebollas medianas", cantidad: "2 unidades", principal: true },
      { nombre: "Caldo de pollo o verduras", cantidad: "250ml", principal: true },
      { nombre: "Harina de trigo", cantidad: "1 cucharada", principal: false },
      { nombre: "Aceite de oliva y sal", cantidad: "3 cucharadas y una pizca", principal: false }
    ],
    pasos: [
      "En una cazuela amplia, calienta el aceite de oliva a fuego medio-alto. Pasa ligeramente las albóndigas por harina (sacudiendo el exceso) y dóralas por fuera durante 3-4 minutos. Retíralas y resérvalas (no deben cocinarse por dentro del todo aún).",
      "Pela las cebollas y córtalas en tiras finas (plumas). Vuelca la cebolla en el mismo aceite de la cazuela.",
      "Baja el fuego a medio-bajo, añade una pizca de sal y cocina la cebolla durante 15 minutos removiendo de vez en cuando, hasta que esté muy blanda, transparente y empiece a caramelizarse con sus propios azúcares.",
      "Añade una cucharadita de harina a la cebolla cocida y remueve durante 1 minuto para cocinarla.",
      "Vierte el caldo caliente y remueve para integrar la harina. Vuelve a introducir las albóndigas de pollo en la cazuela.",
      "Tapa y cocina a fuego lento durante 10-12 minutos para que las albóndigas queden tiernas por dentro y la salsa espese. Sirve con arroz o puré de patatas si lo deseas."
    ],
    categorias: ["Pollo", "Batch cooking", "Vitrocerámica"]
  },
  {
    id: "pisto-huevo-cuajado",
    titulo: "Pisto con Huevo Cuajado Exprés",
    descripcion: "Aprovecha un bote de pisto español de alta calidad para tener una cena nutritiva y reconfortante en minutos.",
    tiempo: 10,
    coste: 1.90,
    dificultad: "Muy fácil",
    porciones: 2,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Pisto de verduras en conserva (de lata o cristal)", cantidad: "1 bote (aprox. 400g)", principal: true },
      { nombre: "Huevos grandes", cantidad: "2 unidades", principal: true },
      { nombre: "Jamón serrano en taquitos", cantidad: "30g", principal: false },
      { nombre: "Aceite de oliva", cantidad: "1 cucharadita", principal: false },
      { nombre: "Pan (para acompañar)", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Vierte el bote de pisto en una sartén mediana con una cucharadita de aceite de oliva caliente.",
      "Calienta el pisto a fuego medio durante 3-4 minutos para que hierva y pierda un poco de humedad residual.",
      "Con una cuchara, haz dos pequeños huecos en la superficie del pisto caliente.",
      "Casca un huevo dentro de cada hueco. Sazona la yema con una pizca de sal.",
      "Espolvorea los taquitos de jamón por encima del pisto alrededor de los huevos.",
      "Baja el fuego a medio-bajo, tapa la sartén y deja cocinar durante 4-5 minutos, hasta que la clara del huevo esté completamente blanca y cuajada, pero la yema siga líquida. ¡Sirve inmediatamente acompañado de buen pan!"
    ],
    categorias: ["Económicas", "Cenas rápidas", "Vitrocerámica"]
  },
  {
    id: "dorada-horno-patatas",
    titulo: "Dorada al Horno con Patatas Panadera",
    descripcion: "Un pescado elegante y delicioso, muy fácil de preparar en bandeja para compartir.",
    tiempo: 30,
    coste: 4.80,
    dificultad: "Fácil",
    porciones: 2,
    metodo: "Horno",
    supermercados: ["Mercadona", "Consum", "Carrefour"],
    ingredientes: [
      { nombre: "Dorada fresca limpia y abierta (pedir para horno)", cantidad: "1 pieza grande (aprox. 600g)", principal: true },
      { nombre: "Patatas medianas", cantidad: "2 unidades", principal: true },
      { nombre: "Cebolla", cantidad: "1/2 unidad", principal: true },
      { nombre: "Aceite de oliva virgen extra", cantidad: "2 cucharadas", principal: true },
      { nombre: "Limón y perejil", cantidad: "1/2 limón en rodajas y perejil picado", principal: false },
      { nombre: "Sal", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Precalienta el horno a 190°C con calor arriba y abajo.",
      "Pela las patatas y córtalas en rodajas finas (de 3-4 mm). Corta la cebolla en tiras finas.",
      "Coloca las patatas y la cebolla en una bandeja apta para horno, añade una cucharada de aceite de oliva y sal. Mezcla bien y extiéndelas en una capa uniforme. Hornea durante 12 minutos (puedes añadir 2 cucharadas de agua para que queden tiernas).",
      "Saca la bandeja del horno, coloca la dorada sazonada con sal sobre la cama de patatas y cebolla.",
      "Haz dos cortes en el lomo superior de la dorada e introduce media rodaja de limón en cada corte. Riega el pescado con la otra cucharada de aceite de oliva.",
      "Hornea todo junto a 190°C durante 15 minutos. Espolvorea con perejil fresco antes de servir."
    ],
    categorias: ["Pescado", "Horno"]
  },
  {
    id: "quiche-jamon-queso-rapida",
    titulo: "Quiche de Jamón y Queso Exprés",
    descripcion: "Una tarta salada jugosa y dorada usando masa quebrada ya preparada. Perfecta templada o fría.",
    tiempo: 35,
    coste: 3.40,
    dificultad: "Fácil",
    porciones: 4,
    metodo: "Horno",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Lámina de masa quebrada fresca", cantidad: "1 unidad", principal: true },
      { nombre: "Jamón cocido en dados", cantidad: "150g", principal: true },
      { nombre: "Queso emmental o gruyère rallado", cantidad: "100g", principal: true },
      { nombre: "Nata para cocinar (o leche evaporada)", cantidad: "200ml (1 brik)", principal: true },
      { nombre: "Huevos grandes", cantidad: "3 unidades", principal: true },
      { nombre: "Sal, pimienta y nuez moscada", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Precalienta el horno a 190°C. Forra un molde desmontable para tartas (de unos 22 cm) con la masa quebrada, manteniendo el papel que viene con la masa.",
      "Pincha el fondo de la masa varias veces con un tenedor para que no suba. Hornéala vacía durante 10 minutos para precocinarla un poco.",
      "En un bol, bate los 3 huevos con una pizca de sal, pimienta negra y nuez moscada. Añade la nata para cocinar y mezcla bien.",
      "Reparte los dados de jamón cocido y el queso rallado sobre el fondo de la masa precocida.",
      "Vierte la mezcla de huevo y nata con cuidado sobre el jamón y el queso.",
      "Hornea a 190°C durante 20-22 minutos, hasta que el relleno esté cuajado (puedes pinchar el centro con un palillo) y la superficie se vea bien dorada. Deja templar 5 minutos antes de desmoldar."
    ],
    categorias: ["Horno", "Batch cooking", "Cenas rápidas"]
  },
  {
    id: "langostinos-al-ajillo-micro",
    titulo: "Langostinos al Ajillo en Microondas",
    descripcion: "Prepara unos langostinos al ajillo espectaculares en solo 4 minutos sin humos ni olores en la cocina.",
    tiempo: 5,
    coste: 4.50,
    dificultad: "Muy fácil",
    porciones: 2,
    metodo: "Microondas",
    supermercados: ["Mercadona", "Consum", "Lidl", "Carrefour"],
    ingredientes: [
      { nombre: "Langostinos pelados (crudos, descongelados)", cantidad: "200g", principal: true },
      { nombre: "Dientes de ajo", cantidad: "3 unidades", principal: true },
      { nombre: "Aceite de oliva virgen extra", cantidad: "2 cucharadas", principal: true },
      { nombre: "Guindilla cayena seca", cantidad: "1 unidad", principal: false },
      { nombre: "Perejil fresco picado y sal", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Pela los ajos y córtalos en láminas finas.",
      "En un recipiente hondo apto para microondas (como un plato hondo grande o bol de vidrio), coloca el aceite de oliva, los ajos laminados y la guindilla cortada.",
      "Introduce en el microondas y cocina a máxima potencia (800W) durante 1 minuto y medio, hasta que veas que el ajo empieza a dorarse levemente y burbujear.",
      "Saca el plato con cuidado, añade los langostinos pelados secos y sazonados con una pizca de sal. Remueve bien para que se impregnen de aceite caliente.",
      "Vuelve a introducir en el microondas tapando el plato con una tapa de microondas o un plato invertido. Cocina a potencia máxima durante 2 minutos. Si a los 2 minutos ves que les falta un poco de color rosado, programa 30 segundos más.",
      "Espolvorea con perejil fresco picado y sirve caliente."
    ],
    categorias: ["Pescado", "Cenas rápidas", "Microondas"]
  },
  {
    id: "revuelto-setas-gulas",
    titulo: "Revuelto Jugoso de Setas y Gulas",
    descripcion: "Cena rápida por excelencia: rica en proteínas, baja en hidratos y con un sabor increíble en 10 minutos.",
    tiempo: 10,
    coste: 2.80,
    dificultad: "Fácil",
    porciones: 1,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi"],
    ingredientes: [
      { nombre: "Setas cultivadas en tiras (frescas)", cantidad: "100g", principal: true },
      { nombre: "Gulas", cantidad: "100g (media bandeja)", principal: true },
      { nombre: "Huevos", cantidad: "2 grandes", principal: true },
      { nombre: "Ajo", cantidad: "1 diente", principal: false },
      { nombre: "Aceite de oliva y sal", cantidad: "1 cucharada y una pizca", principal: false }
    ],
    pasos: [
      "Pica el diente de ajo bien fino.",
      "Calienta una sartén mediana con la cucharada de aceite a fuego medio. Añade el ajo y cuando empiece a dorarse, echa las setas. Saltea durante 4-5 minutos hasta que pierdan su agua y estén hechas.",
      "Añade las gulas a la sartén y mezcla bien con las setas durante 1 minuto.",
      "En un plato, bate ligeramente los huevos con una pizca de sal (no batas en exceso, solo para romper la yema).",
      "Baja el fuego al mínimo. Vierte los huevos en la sartén y remueve constantemente con una espátula de madera o silicona.",
      "Cocina a fuego mínimo removiendo durante 1-2 minutos. Retira la sartén del fuego cuando el huevo empiece a cuajar pero siga cremoso y brillante (el calor residual terminará de cocinarlo en el plato). Sirve sobre una tostada de pan."
    ],
    categorias: ["Cenas rápidas", "Vitrocerámica"]
  },
  {
    id: "contramuslos-pollo-horno",
    titulo: "Contramuslos de Pollo Asados con Patatas",
    descripcion: "La forma clásica de asar pollo al horno para que quede crujiente por fuera y súper tierno por dentro.",
    tiempo: 45,
    coste: 3.80,
    dificultad: "Fácil",
    porciones: 4,
    metodo: "Horno",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Contramuslos de pollo con piel y hueso", cantidad: "4 unidades", principal: true },
      { nombre: "Patatas grandes", cantidad: "2 unidades", principal: true },
      { nombre: "Cebolla", cantidad: "1 unidad", principal: true },
      { nombre: "Aceite de oliva virgen extra", cantidad: "2 cucharadas", principal: true },
      { nombre: "Vino blanco para cocinar (o cerveza)", cantidad: "50ml", principal: false },
      { nombre: "Hierbas provenzales o tomillo, sal y pimienta", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Precalienta el horno a 200°C con calor arriba y abajo.",
      "Pela las patatas y córtalas en rodajas de 1 cm. Pela la cebolla y córtala en juliana gruesa. Colócalas en el fondo de una bandeja de horno grande.",
      "Sazona las patatas y la cebolla con sal y riégalas con una cucharada de aceite de oliva y el vino blanco.",
      "Salpimienta los contramuslos de pollo por ambos lados y colócalos encima de la cama de patatas con la piel hacia arriba (para que quede crujiente).",
      "Pinta los contramuslos con la otra cucharada de aceite de oliva y espolvorea las hierbas provenzales sobre todo el conjunto.",
      "Hornea a 200°C durante 40-45 minutos. A mitad de cocción puedes regar el pollo con los propios jugos del fondo de la bandeja. Estará listo cuando veas la piel bien dorada y crujiente y las patatas tiernas."
    ],
    categorias: ["Pollo", "Horno", "Batch cooking"]
  },
  {
    id: "garbanzos-espinacas-bacon",
    titulo: "Garbanzos Salteados con Espinacas y Bacon",
    descripcion: "Un plato tradicional de legumbres salteadas de forma rápida con espinacas y crujiente bacon.",
    tiempo: 15,
    coste: 2.10,
    dificultad: "Muy fácil",
    porciones: 2,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Garbanzos cocidos en conserva (frasco grande)", cantidad: "1 bote (400g escurrido)", principal: true },
      { nombre: "Espinacas frescas en hojas", cantidad: "150g", principal: true },
      { nombre: "Bacon en tiras", cantidad: "60g", principal: true },
      { nombre: "Dientes de ajo", cantidad: "2 unidades", principal: true },
      { nombre: "Aceite de oliva y sal", cantidad: "1 cucharadita y una pizca", principal: false }
    ],
    pasos: [
      "Enjuaga bien los garbanzos bajo el grifo de agua fría y déjalos escurrir.",
      "En una sartén grande a fuego medio, dora las tiras de bacon en su propia grasa por 3 minutos hasta que estén crujientes. Retíralas a un plato.",
      "En la misma sartén, añade una cucharadita de aceite de oliva si es necesario y sofríe los dientes de ajo laminados por 1 minuto.",
      "Añade las espinacas frescas. Al principio ocuparán mucho volumen, pero en 2 minutos se reducirán a una fracción de su tamaño.",
      "Añade los garbanzos escurridos y las tiras de bacon crujiente a la sartén. Rehoga todo junto a fuego medio por 5 minutos para que se mezclen los sabores.",
      "Sazona con una pizca de sal y pimienta negra al gusto y sirve caliente."
    ],
    categorias: ["Arroz, sopas, cremas", "Económicas", "Vitrocerámica"]
  },
  {
    id: "pollo-curry-rapido",
    titulo: "Pollo al Curry con Leche de Coco Express",
    descripcion: "Pechuga de pollo súper tierna guisada en una salsa de coco y curry exótica lista en 20 minutos.",
    tiempo: 20,
    coste: 3.80,
    dificultad: "Fácil",
    porciones: 2,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Lidl", "Carrefour", "Consum"],
    ingredientes: [
      { nombre: "Pechuga de pollo cortada en dados", cantidad: "400g", principal: true },
      { nombre: "Leche de coco en conserva (lata)", cantidad: "200ml (media lata)", principal: true },
      { nombre: "Cebolla mediana", cantidad: "1/2 unidad", principal: true },
      { nombre: "Curry en polvo dulce", cantidad: "1 cucharada colmada", principal: true },
      { nombre: "Aceite de oliva y sal", cantidad: "1 cucharada y una pizca", principal: false }
    ],
    pasos: [
      "Salpimienta los dados de pechuga de pollo. Pica la cebolla fina.",
      "En una sartén honda o cazuela mediana, calienta una cucharada de aceite a fuego medio-alto y dora el pollo 4 minutos hasta que esté sellado. Retíralo a un plato.",
      "En la misma sartén, baja a fuego medio y sofríe la cebolla picada durante 5 minutos hasta que esté blanda.",
      "Añade el curry en polvo a la cebolla y remueve rápido por 30 segundos para tostarlo un poco sin que se queme.",
      "Vierte la leche de coco y remueve para crear la salsa. Introduce el pollo dorado con sus jugos de nuevo en la sartén.",
      "Baja a fuego lento y deja cocinar todo destapado durante 8-10 minutos, hasta que la salsa espese un poco y el pollo esté tierno. Sirve idealmente con arroz basmati de guarnición."
    ],
    categorias: ["Pollo", "Vitrocerámica"]
  },
  {
    id: "pescadilla-patatas-micro",
    titulo: "Pescadilla al Vapor con Patatas al Microondas",
    descripcion: "Una forma limpísima de comer pescado blanco jugoso con patata cocida en solo 12 minutos.",
    tiempo: 12,
    coste: 3.10,
    dificultad: "Muy fácil",
    porciones: 1,
    metodo: "Microondas",
    supermercados: ["Mercadona", "Consum", "Lidl", "Carrefour"],
    ingredientes: [
      { nombre: "Lomos de pescadilla (o merluza sin espinas)", cantidad: "2 unidades (aprox. 180g)", principal: true },
      { nombre: "Patata mediana", cantidad: "1 unidad", principal: true },
      { nombre: "Cebolla", cantidad: "1/4 unidad", principal: false },
      { nombre: "Aceite de oliva virgen extra", cantidad: "1 cucharada", principal: true },
      { nombre: "Sal, pimienta y limón", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Pela la patata y córtala en rodajas muy finas (de unos 2 mm, estilo panadera para que se cocinen rápido). Corta la cebolla en tiras finas.",
      "Coloca las patatas y la cebolla en un plato o bol apto para microondas. Riega con la cucharada de aceite de oliva y sal. Mezcla bien.",
      "Tapa herméticamente con film transparente (hazle 2-3 pinchazos con tenedor) o una tapa apta. Cocina a máxima potencia (800W) por 6 minutos.",
      "Saca con cuidado, coloca encima los lomos de pescadilla previamente sazonados con sal y pimienta. Añade unas gotas de zumo de limón sobre el pescado.",
      "Vuelve a tapar y cocina en el microondas por otros 3 minutos a máxima potencia (4 minutos si los lomos son muy gruesos).",
      "Comprueba que el pescado esté blanco y cocinado en el centro y las patatas estén tiernas. Sirve con un chorrito adicional de aceite en crudo."
    ],
    categorias: ["Pescado", "Cenas rápidas", "Microondas"]
  },
  {
    id: "patatas-bacon-queso-horno",
    titulo: "Patatas Gratins con Bacon y Queso",
    descripcion: "Patatas crujientes y tiernas horneadas con una costra dorada de queso cheddar y dados de bacon.",
    tiempo: 22,
    coste: 2.10,
    dificultad: "Muy fácil",
    porciones: 2,
    metodo: "Horno",
    supermercados: ["Mercadona", "Lidl", "Aldi", "Carrefour", "Consum"],
    ingredientes: [
      { nombre: "Patatas medianas", cantidad: "3 unidades", principal: true },
      { nombre: "Bacon en dados o tiras", cantidad: "60g", principal: true },
      { nombre: "Queso emmental o mozzarella rallado", cantidad: "80g", principal: true },
      { nombre: "Aceite de oliva y sal", cantidad: "1 cucharada y una pizca", principal: false }
    ],
    pasos: [
      "Lava y pela las patatas. Córtalas en dados medianos (tipo patatas bravas).",
      "Para ahorrar tiempo de horno: coloca las patatas en un bol tapado en el microondas por 5 minutos a máxima potencia para ablandar el centro.",
      "Precalienta el horno a 200°C con grill activo.",
      "Vuelca las patatas semicocidas en una bandeja de horno pequeña. Añade el aceite de oliva, los dados de bacon crudos y sal. Mezcla todo bien.",
      "Hornea a 200°C durante 10 minutos para que el bacon se tueste y las patatas cojan color.",
      "Abre el horno, espolvorea todo el queso rallado por encima y hornea otros 5 minutos hasta que el queso se funda, burbujee y adquiera un color dorado crujiente."
    ],
    categorias: ["Económicas", "Horno"]
  },
  {
    id: "brocoli-gratinado-airfryer",
    titulo: "Brócoli Gratinado Crujiente en Airfryer",
    descripcion: "Aprende a amar el brócoli. En freidora de aire queda crujiente en los bordes y con queso gratinado está brutal.",
    tiempo: 15,
    coste: 1.80,
    dificultad: "Muy fácil",
    porciones: 2,
    metodo: "Airfryer",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Brócoli (arbolitos cortados frescos)", cantidad: "250g", principal: true },
      { nombre: "Queso mozzarella rallado", cantidad: "60g", principal: true },
      { nombre: "Ajo en polvo", cantidad: "1/2 cucharadita", principal: false },
      { nombre: "Aceite de oliva en spray", cantidad: "3 pulverizaciones", principal: true },
      { nombre: "Sal y pimienta negra", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Lava bien los arbolitos de brócoli y sécalos con un paño de cocina.",
      "Ponlos en un bol grande, pulverízalos con aceite de oliva (o añade media cucharadita de aceite normal) y espolvorea el ajo en polvo, sal y pimienta negra.",
      "Precalienta la freidora de aire a 180°C durante 3 minutos.",
      "Vuelca el brócoli sazonado en la cesta y cocina a 180°C durante 8-10 minutos, agitando a mitad de cocción. Las puntas del brócoli deben verse ligeramente tostadas.",
      "Espolvorea el queso mozzarella rallado uniformemente sobre el brócoli cocido.",
      "Cocina otros 2-3 minutos a 200°C en la freidora hasta que el queso quede completamente fundido e hilado. Sirve inmediatamente."
    ],
    categorias: ["Económicas", "Cenas rápidas", "Airfryer"]
  },
  {
    id: "arroz-caldoso-marisco",
    titulo: "Arroz Caldoso de Marisco Express",
    descripcion: "Un arroz marinero increíble usando el preparado de paella congelado. Sabor concentrado de costa.",
    tiempo: 25,
    coste: 4.80,
    dificultad: "Fácil",
    porciones: 4,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Carrefour"],
    ingredientes: [
      { nombre: "Arroz redondo", cantidad: "280g", principal: true },
      { nombre: "Preparado de marisco congelado (paella/sopa)", cantidad: "350g (1 bolsa)", principal: true },
      { nombre: "Pisto de verduras en conserva (bote)", cantidad: "150g (6 cucharadas)", principal: true },
      { nombre: "Caldo de pescado caliente (tetrabrik)", cantidad: "1.1 litros", principal: true },
      { nombre: "Aceite de oliva, pimentón dulce y sal", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Descongela el preparado de marisco (gambas, calamares, mejillones) pasándolo por agua fría unos minutos antes de empezar. Sécalo bien.",
      "En una olla ancha o paellera a fuego medio, calienta 2 cucharadas de aceite de oliva y dora el marisco durante 3 minutos. Retíralo a un plato.",
      "En la misma olla, añade las cucharadas de pisto de bote y cocínalo 1 minuto. Añade media cucharadita de pimentón dulce y remueve rápido.",
      "Añade el arroz y remueve durante 1 minuto para nacararlo (tostarlo ligeramente con la grasa y salsa).",
      "Vierte el caldo de pescado bien caliente. Sube el fuego a medio-alto y cuece durante 15 minutos removiendo de vez en cuando.",
      "Vuelve a incorporar el marisco a la olla y cuece otros 3 minutos. Apaga el fuego (debe quedar con bastante caldo, no seco). Deja reposar 2 minutos y sirve."
    ],
    categorias: ["Arroz, sopas, cremas", "Pescado", "Vitrocerámica"]
  },
  {
    id: "empanadillas-atun-airfryer",
    titulo: "Empanadillas de Atún y Huevo Crujientes",
    descripcion: "Las empanadillas clásicas rellenas de atún pero crujientes y sin una gota de fritura grasienta en la freidora.",
    tiempo: 15,
    coste: 2.10,
    dificultad: "Fácil",
    porciones: 2,
    metodo: "Airfryer",
    supermercados: ["Mercadona", "Consum", "Lidl", "Carrefour"],
    ingredientes: [
      { nombre: "Obleas de masa para empanadillas", cantidad: "8 unidades", principal: true },
      { nombre: "Atún en conserva escurrido", cantidad: "2 latas", principal: true },
      { nombre: "Huevo duro picado", cantidad: "1 unidad", principal: true },
      { nombre: "Tomate frito casero", cantidad: "3 cucharadas", principal: true }
    ],
    pasos: [
      "Prepara el relleno: en un bol pequeño, mezcla el atún desmigado y escurrido, el huevo duro picado y las cucharadas de tomate frito.",
      "Extiende las obleas de masa sobre su papel de protección.",
      "Coloca una cucharada del relleno justo en el centro de cada oblea (no pongas demasiado para que no se salga al cerrarlas).",
      "Dobla la oblea por la mitad formando una media luna y sella los bordes apretando con las puntas de un tenedor.",
      "Pinta la superficie de las empanadillas con unas gotas de aceite de oliva o huevo batido (opcional) para que adquieran brillo dorado.",
      "Coloca las empanadillas en la freidora de aire precalentada a 190°C y cocina durante 8-10 minutos, dándoles la vuelta con cuidado a mitad de cocción."
    ],
    categorias: ["Pescado", "Cenas rápidas", "Airfryer"]
  },
  {
    id: "champinones-al-ajillo-vitro",
    titulo: "Champiñones al Ajillo Tradicionales",
    descripcion: "La clásica tapa española, facilísima de cocinar. Quedan tiernos y con una salsa deliciosa para mojar pan.",
    tiempo: 10,
    coste: 1.70,
    dificultad: "Muy fácil",
    porciones: 2,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Champiñones laminados limpios", cantidad: "300g (1 bandeja)", principal: true },
      { nombre: "Dientes de ajo", cantidad: "4 unidades", principal: true },
      { nombre: "Guindilla seca (cayena)", cantidad: "1 unidad", principal: false },
      { nombre: "Aceite de oliva virgen extra", cantidad: "3 cucharadas", principal: true },
      { nombre: "Sal y perejil fresco picado", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Pela los ajos y córtalos en láminas finas. Pica el perejil fresco.",
      "En una sartén grande, vierte el aceite de oliva y ponlo a fuego medio. Añade el ajo laminado y la guindilla cortada.",
      "Antes de que el ajo tome mucho color (aprox. 1 minuto), añade todos los champiñones laminados. Sube un poco el fuego a medio-alto.",
      "Saltea los champiñones durante 7-8 minutos. Soltarán su agua y luego esta se evaporará, empezando a dorarse levemente.",
      "Añade sal al gusto y espolvorea abundante perejil picado en el último minuto.",
      "Sirve bien calientes con una rodaja de pan."
    ],
    categorias: ["Económicas", "Cenas rápidas", "Vitrocerámica"]
  },
  {
    id: "crema-verduras-temporada",
    titulo: "Crema de Verduras Multiusos",
    descripcion: "La crema perfecta de aprovechamiento. Usa las verduras que te queden en el cajón de la nevera.",
    tiempo: 20,
    coste: 1.90,
    dificultad: "Muy fácil",
    porciones: 4,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Zanahorias medianas", cantidad: "3 unidades", principal: true },
      { nombre: "Calabacín", cantidad: "1 mediano", principal: true },
      { nombre: "Patata mediana", cantidad: "1 unidad", principal: true },
      { nombre: "Cebolla", cantidad: "1 unidad", principal: true },
      { nombre: "Aceite de oliva virgen extra", cantidad: "2 cucharadas", principal: false },
      { nombre: "Sal y pimienta", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Lava y pela las zanahorias, la patata y la cebolla. Trocea todas las verduras en trozos medianos.",
      "En una olla mediana a fuego medio, vierte las dos cucharadas de aceite y rehoga la cebolla y la patata durante 3 minutos.",
      "Añade el calabacín y las zanahorias troceados. Saltea todo junto otros 2 minutos.",
      "Cubre las verduras con agua caliente (justo a ras, no pongas de más para que la crema no te quede caldosa y líquida). Añade sal al gusto.",
      "Tapa y cuece a fuego medio-alto durante 15 minutos o hasta que pinches la zanahoria y esté muy blanda.",
      "Retira del fuego y tritura todo con una batidora de mano durante 2 minutos hasta obtener una textura suave y sedosa. Riega con un hilo de aceite crudo al servir."
    ],
    categorias: ["Arroz, sopas, cremas", "Económicas", "Batch cooking", "Vitrocerámica"]
  },
  {
    id: "lomo-cerdo-sal-micro",
    titulo: "Cinta de Lomo a la Sal Express",
    descripcion: "Lomo de cerdo jugoso cocinado a la sal en microondas en solo 12 minutos. Ideal para embutido casero.",
    tiempo: 15,
    coste: 3.20,
    dificultad: "Fácil",
    porciones: 4,
    metodo: "Microondas",
    supermercados: ["Mercadona", "Consum", "Carrefour"],
    ingredientes: [
      { nombre: "Cinta de lomo de cerdo (en una pieza cilíndrica)", cantidad: "500g", principal: true },
      { nombre: "Sal gorda especial para hornear a la sal", cantidad: "1 kg (1 paquete)", principal: true },
      { nombre: "Hierbas provenzales o pimienta negra", cantidad: "1 cucharadita", principal: false }
    ],
    pasos: [
      "Espolvorea las hierbas provenzales o pimienta negra sobre toda la superficie del trozo de lomo y presiona con las manos para que queden adheridas.",
      "En un recipiente hondo apto para microondas (como un pyrex rectangular), haz una cama con una capa gruesa de sal gorda para hornear.",
      "Coloca el lomo en el centro del plato y cúbrelo por completo con el resto de la sal gorda. Humedece la sal salpicando unas gotas de agua con las manos y presiónala para que se forme una costra compacta.",
      "Introduce en el microondas y cocina a máxima potencia (800W) durante 11-12 minutos.",
      "Saca el plato del microondas con mucho cuidado. Deja reposar templándose 5 minutos sin romper la sal.",
      "Con un cuchillo rompe la costra de sal dura, extrae el lomo y cepilla con un pincel limpio para retirar la sal adherida. Córtalo en lonchas muy finas. Se puede consumir caliente o frío estilo fiambre."
    ],
    categorias: ["Carne", "Batch cooking", "Microondas"]
  },
  {
    id: "huevos-rellenos-atun",
    titulo: "Huevos Rellenos de Atún y Mayonesa",
    descripcion: "El clásico entrante veraniego español. Súper fresco, barato y fácil de preparar con antelación.",
    tiempo: 15,
    coste: 1.80,
    dificultad: "Muy fácil",
    porciones: 2,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Huevos medianos", cantidad: "4 unidades", principal: true },
      { nombre: "Atún en conserva al natural o aceite", cantidad: "2 latas", principal: true },
      { nombre: "Tomate frito casero", cantidad: "2 cucharadas", principal: true },
      { nombre: "Mayonesa comercial (bote)", cantidad: "3 cucharadas", principal: true },
      { nombre: "Sal", cantidad: "una pizca", principal: false }
    ],
    pasos: [
      "Pon a cocer los huevos en una cazuela pequeña con agua hirviendo durante 10 minutos. Pásalos por agua helada para detener la cocción, pélalos con cuidado y córtalos por la mitad a lo largo.",
      "Extrae las yemas cocidas con cuidado de no romper las claras. Coloca las yemas en un plato y reserva una yema entera para decorar al final.",
      "En el mismo plato de las yemas, añade el atún bien escurrido y desmigado y las cucharadas de tomate frito. Chafa todo con un tenedor para crear una pasta homogénea.",
      "Rellena los huecos de las claras de huevo con la mezcla de atún usando una cuchara pequeña o manga pastelera.",
      "Cubre la parte superior de cada huevo relleno con media cucharadita de mayonesa de forma lisa.",
      "Ralla la yema que reservaste previamente por encima de los huevos con un rallador fino para decorarlos. Enfría en la nevera 15 minutos antes de consumir."
    ],
    categorias: ["Económicas", "Cenas rápidas", "Vitrocerámica"]
  },
  {
    id: "gnocchi-bolonesa-rapida",
    titulo: "Gnocchi con Salsa Boloñesa Express",
    descripcion: "Gnocchi de patata con una sabrosa boloñesa de carne picada exprés y queso fundido.",
    tiempo: 15,
    coste: 3.10,
    dificultad: "Fácil",
    porciones: 2,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Carrefour"],
    ingredientes: [
      { nombre: "Gnocchi frescos de patata", cantidad: "400g (1 paquete)", principal: true },
      { nombre: "Carne picada mixta (vacuno/cerdo)", cantidad: "200g", principal: true },
      { nombre: "Tomate frito casero (bote)", cantidad: "200g", principal: true },
      { nombre: "Cebolla picada", cantidad: "1/2 unidad", principal: false },
      { nombre: "Queso parmesano rallado", cantidad: "40g", principal: false },
      { nombre: "Aceite de oliva y sal", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "En una olla grande con agua hirviendo y sal, cuece los gnocchi. Estarán listos cuando suban a la superficie (suele tardar solo 2 minutos). Escurre y reserva.",
      "Mientras tanto, pica la cebolla fina. Calienta una sartén con aceite a fuego medio y sofriégala durante 4 minutos.",
      "Sube el fuego a medio-alto, añade la carne picada sazonada con sal y pimienta y cocínala deshaciéndola con una espátula de madera durante 4 minutos hasta que esté dorada.",
      "Añade el tomate frito a la carne y cocina a fuego lento por 3 minutos.",
      "Vuelca los gnocchi escurridos directamente en la sartén de la salsa boloñesa y mezcla con cuidado durante 1 minuto.",
      "Sirve caliente cubriendo con abundante queso parmesano rallado."
    ],
    categorias: ["Carne", "Cenas rápidas", "Vitrocerámica"]
  },
  {
    id: "salmon-teriyaki-sarten",
    titulo: "Salmón Teriyaki Glaseado en Sartén",
    descripcion: "Lomos de salmón tiernos con salsa teriyaki dulce japonesa hecha de forma exprés en 12 minutos.",
    tiempo: 12,
    coste: 4.90,
    dificultad: "Muy fácil",
    porciones: 2,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Lidl", "Carrefour", "Consum"],
    ingredientes: [
      { nombre: "Lomos de salmón fresco", cantidad: "2 unidades (aprox. 300g)", principal: true },
      { nombre: "Salsa teriyaki embotellada", cantidad: "4 cucharadas", principal: true },
      { nombre: "Aceite de oliva virgen extra", cantidad: "1 cucharadita", principal: false },
      { nombre: "Semillas de sésamo (opcional)", cantidad: "1 cucharadita", principal: false },
      { nombre: "Sal", cantidad: "una pizca", principal: false }
    ],
    pasos: [
      "Seca los lomos de salmón y sazónalos con una pizca muy pequeña de sal por ambos lados (la salsa teriyaki ya es muy salada).",
      "Calienta el aceite de oliva en una sartén mediana a fuego medio-alto.",
      "Coloca el salmón con la piel hacia abajo y cocínalo durante 4 minutos hasta que la piel esté crujiente y tostada.",
      "Dale la vuelta a los lomos con cuidado y cocina otros 3 minutos por el otro lado.",
      "Baja el fuego al mínimo. Vierte las cucharadas de salsa teriyaki directamente sobre los lomos de salmón en la sartén caliente.",
      "Deja que la salsa empiece a burbujear, caramelizarse y espesar durante 1 minuto, bañando el salmón constantemente con la salsa usando una cuchara. ¡Sirve espolvoreando sésamo por encima!"
    ],
    categorias: ["Pescado", "Cenas rápidas", "Vitrocerámica"]
  },
  {
    id: "pollo-cajun-airfryer",
    titulo: "Pechuga de Pollo estilo Cajún",
    descripcion: "Pechuga de pollo súper crujiente y especiada con una mezcla cajún dorada y sabrosa en freidora de aire.",
    tiempo: 15,
    coste: 2.90,
    dificultad: "Muy fácil",
    porciones: 2,
    metodo: "Airfryer",
    supermercados: ["Mercadona", "Lidl", "Aldi", "Consum"],
    ingredientes: [
      { nombre: "Pechugas de pollo enteras cortadas por la mitad", cantidad: "2 piezas (350g)", principal: true },
      { nombre: "Sazonador de especias Cajún (sobre)", cantidad: "1 cucharada colmada", principal: true },
      { nombre: "Aceite de oliva virgen extra", cantidad: "1 cucharadita", principal: true },
      { nombre: "Sal", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Precalienta la freidora de aire a 190°C durante 3 minutos.",
      "Limpia y seca muy bien las pechugas de pollo con papel absorbente.",
      "En un plato, pinta las pechugas con la cucharadita de aceite de oliva por ambos lados para que actúe como pegamento.",
      "Espolvorea generosamente las especias cajún sobre las pechugas hasta que queden completamente cubiertas por una costra roja.",
      "Introduce el pollo en la cesta de la freidora y cocina a 190°C durante 12-14 minutos, dándoles la vuelta a la mitad del proceso.",
      "Corta el pollo en filetes transversales antes de servir para ver lo jugoso que queda por dentro."
    ],
    categorias: ["Pollo", "Cenas rápidas", "Airfryer"]
  },
  {
    id: "sopa-ajo-castellana",
    titulo: "Sopa de Ajo Castellana Tradicional",
    descripcion: "La humilde, barata y reconfortante sopa clásica castellana con huevo hilado y pan duro.",
    tiempo: 15,
    coste: 1.50,
    dificultad: "Fácil",
    porciones: 4,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Pan del día anterior cortado en rodajas", cantidad: "150g", principal: true },
      { nombre: "Dientes de ajo", cantidad: "6 unidades", principal: true },
      { nombre: "Taquitos de jamón serrano", cantidad: "50g", principal: true },
      { nombre: "Huevos grandes", cantidad: "2 unidades", principal: true },
      { nombre: "Caldo de pollo o carne caliente", cantidad: "1 litro", principal: true },
      { nombre: "Pimentón dulce y aceite", cantidad: "1 cucharadita y 3 cucharadas", principal: false }
    ],
    pasos: [
      "Pela los dientes de ajo y córtalos en láminas. Corta el pan duro en rodajas finas.",
      "En una olla a fuego medio-bajo, calienta el aceite de oliva y dora los ajos laminados lentamente sin que se quemen.",
      "Añade los taquitos de jamón y sofríelos 1 minuto.",
      "Añade las rebanadas de pan y remueve para que absorban todo el aceite aromatizado de los ajos.",
      "Retira la olla del fuego un momento, añade la cucharadita de pimentón dulce e integra rápidamente para que no amargue.",
      "Vuelve a poner la olla al fuego y vierte el caldo bien caliente. Sube el fuego, tapa y deja hervir suavemente durante 8 minutos.",
      "Casca los huevos directamente sobre la sopa hirviendo suavemente, remueve con cuidado con una espátula para hilarlos en hilos finos, cocina 1 minuto y sirve caliente."
    ],
    categorias: ["Arroz, sopas, cremas", "Económicas", "Vitrocerámica"]
  },
  {
    id: "quesadillas-jamon-queso",
    titulo: "Quesadillas Crujientes de Jamón y Queso",
    descripcion: "La cena exprés definitiva. Tortillas de trigo tostadas con queso fundido y jamón cocido en 8 minutos.",
    tiempo: 8,
    coste: 1.40,
    dificultad: "Muy fácil",
    porciones: 1,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Tortillas de trigo grandes", cantidad: "2 unidades", principal: true },
      { nombre: "Lonchas de jamón cocido", cantidad: "2 lonchas grandes", principal: true },
      { nombre: "Queso cheddar o mozzarella rallado", cantidad: "50g", principal: true },
      { nombre: "Mantequilla o aceite", cantidad: "1 cucharadita para tostar", principal: false }
    ],
    pasos: [
      "Extiende una tortilla de trigo sobre una tabla. Cubre la mitad de su superficie con la mitad del queso rallado.",
      "Coloca las lonchas de jamón cocido sobre el queso y cubre el jamón con el queso rallado restante.",
      "Dobla la tortilla por la mitad para formar una media luna compacta.",
      "Funde la cucharadita de mantequilla (o añade unas gotas de aceite) en una sartén grande a fuego medio.",
      "Dora la quesadilla durante 3 minutos por un lado presionando con una espátula de cocina para que el queso se funda.",
      "Dale la vuelta con cuidado y dora otros 3 minutos por el otro lado hasta que la tortilla esté bien tostada y crujiente."
    ],
    categorias: ["Cenas rápidas", "Económicas", "Vitrocerámica"]
  },
  {
    id: "merluza-salsa-verde",
    titulo: "Lomos de Merluza en Salsa Verde",
    descripcion: "Una merluza guisada jugosa en una salsa de perejil tradicional española lista en 15 minutos.",
    tiempo: 18,
    coste: 4.20,
    dificultad: "Fácil",
    porciones: 2,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Carrefour"],
    ingredientes: [
      { nombre: "Lomos de merluza sin espinas", cantidad: "2 unidades (300g)", principal: true },
      { nombre: "Dientes de ajo", cantidad: "3 unidades", principal: true },
      { nombre: "Vino blanco para cocinar", cantidad: "50ml", principal: true },
      { nombre: "Caldo de pescado caliente", cantidad: "150ml", principal: true },
      { nombre: "Harina de trigo", cantidad: "1 cucharadita", principal: false },
      { nombre: "Perejil fresco picado y aceite", cantidad: "abundante y 2 cucharadas", principal: false }
    ],
    pasos: [
      "Salpimienta los lomos de merluza. Pica los dientes de ajo bien finos.",
      "En una sartén ancha a fuego medio, calienta las dos cucharadas de aceite y rehoga el ajo picado por 1 minuto sin que coja color.",
      "Añade la cucharadita de harina de trigo a la sartén y remueve con varillas durante 1 minuto para cocinarla.",
      "Vierte el vino blanco y sube el fuego para evaporar el alcohol durante 1 minuto. Añade el caldo de pescado caliente y remueve bien.",
      "Introduce la merluza con la piel hacia abajo. Añade abundante perejil fresco picado que tiña la salsa de verde.",
      "Baja a fuego medio-bajo, tapa y cocina 5-6 minutos por lado moviendo la sartén en vaivén circular para que emulsione la salsa verde."
    ],
    categorias: ["Pescado", "Vitrocerámica"]
  },
  {
    id: "mug-cake-vainilla",
    titulo: "Mug Cake de Vainilla Express",
    descripcion: "Bizcochito individual esponjoso de vainilla con pepitas de chocolate hecho en taza en 3 minutos.",
    tiempo: 3,
    coste: 0.75,
    dificultad: "Muy fácil",
    porciones: 1,
    metodo: "Microondas",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Harina de trigo", cantidad: "3 cucharadas", principal: true },
      { nombre: "Azúcar", cantidad: "2 cucharadas", principal: true },
      { nombre: "Leche entera", cantidad: "3 cucharadas", principal: true },
      { nombre: "Mantequilla derretida", cantidad: "1 cucharada (15g)", principal: true },
      { nombre: "Pepitas de chocolate", cantidad: "1 cucharadita", principal: false },
      { nombre: "Levadura química y vainilla", cantidad: "1/4 cucharadita y unas gotas", principal: false }
    ],
    pasos: [
      "En una taza de desayuno mediana apta para microondas, introduce la harina, el azúcar y la levadura. Mezcla bien con un tenedor.",
      "Añade la leche, la mantequilla derretida y unas gotas de esencia de vainilla líquida. Remueve enérgicamente hasta obtener una mezcla lisa sin grumos.",
      "Incorpora la cucharadita de pepitas de chocolate a la masa y remueve suavemente.",
      "Introduce en el microondas a potencia máxima (800W) durante 1 minuto y 20 segundos.",
      "Saca con cuidado, deja templar 2 minutos y disfruta."
    ],
    categorias: ["Económicas", "Microondas"]
  },
  {
    id: "salchichas-vino-blanco",
    titulo: "Salchichas al Vino Blanco con Cebolla",
    descripcion: "Salchichas frescas guisadas en una salsa espesa de cebolla dulce y vino blanco en sartén.",
    tiempo: 20,
    coste: 2.80,
    dificultad: "Fácil",
    porciones: 2,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Salchichas frescas (cerdo o pollo)", cantidad: "8 unidades (300g)", principal: true },
      { nombre: "Cebolla grande", cantidad: "1 unidad", principal: true },
      { nombre: "Vino blanco para cocinar", cantidad: "80ml", principal: true },
      { nombre: "Caldo de carne", cantidad: "100ml", principal: false },
      { nombre: "Aceite de oliva y sal", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Corta la cebolla en tiras finas (juliana). Pica el ajo fino.",
      "En una sartén con dos cucharadas de aceite a fuego medio-alto, dora las salchichas por fuera durante 4 minutos. Retíralas a un plato.",
      "En el mismo aceite de la sartén, echa la cebolla. Baja a fuego medio y sofriégala durante 8 minutos hasta que se dore y ablande.",
      "Devuelve las salchichas a la sartén. Vierte el vino blanco y deja que evapore el alcohol durante 2 minutos a fuego fuerte.",
      "Añade el caldo de carne (o agua) y cocina tapado a fuego lento otros 6-7 minutos para que la salsa de cebolla reduzca y espese."
    ],
    categorias: ["Carne", "Batch cooking", "Vitrocerámica"]
  },
  {
    id: "patatas-bolsa-mejillones",
    titulo: "Patatas Chips con Mejillones en Escabeche",
    descripcion: "El aperitivo estrella en los hogares españoles: patatas crujientes de bolsa con mejillones en lata en 3 minutos.",
    tiempo: 3,
    coste: 2.30,
    dificultad: "Muy fácil",
    porciones: 2,
    metodo: "Vitrocerámica",
    supermercados: ["Mercadona", "Consum", "Lidl", "Aldi", "Carrefour"],
    ingredientes: [
      { nombre: "Patatas fritas de bolsa estilo churrería", cantidad: "1 bolsa mediana (150g)", principal: true },
      { nombre: "Lata de mejillones en escabeche grandes", cantidad: "1 lata", principal: true },
      { nombre: "Limón", cantidad: "1/2 unidad", principal: false },
      { nombre: "Pimienta negra molida", cantidad: "al gusto", principal: false }
    ],
    pasos: [
      "Abre la bolsa de patatas fritas y repártelas haciendo una montaña generosa en una fuente o plato llano amplio.",
      "Abre la lata de mejillones en escabeche.",
      "Coloca los mejillones esparcidos sobre las patatas chips de forma bonita.",
      "Riega todo el plato de forma uniforme con la salsa de escabeche roja de la propia lata.",
      "Exprime unas gotas de zumo de limón fresco por encima de las patatas y espolvorea una pizca pequeña de pimienta negra molida antes de servir."
    ],
    categorias: ["Económicas", "Cenas rápidas", "Vitrocerámica"]
  }
];
