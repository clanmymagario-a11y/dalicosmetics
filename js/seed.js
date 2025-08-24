// seed.js
// Datos iniciales del catálogo

import { Producto } from "./models.js";

export const productosSeed = [
  new Producto(
    101,
    "Balsamo Osito de Iman Of Noble",
    "Labios",
    5000,
    3500,
    [
      "assets/img/labios/balsamo-ositos1.jfif",
      "assets/img/labios/balsamo-ositos2.jfif",
    ],
    "Este encantador set incluye 24 bálsamos labiales individuales en adorables envases con forma de osito. Cada bálsamo está diseñado para brindar humectación y un toque de color sutil a tus labios. ¡Perfecto para llevar contigo o para regalar un detalle dulce y útil!",
    "nuevo"
  ),
  new Producto(
    102,
    "Balsamo Animalitos",
    "Labios",
    3000,
    1900,
    [
      "assets/img/labios/balsamo-animalitos1.jfif",
      "assets/img/labios/balsamo-animalitos2.jfif",
    ],
    "Este adorable paquete contiene 24 bálsamos en barra de la marca IMAN OF NOBLE, cada uno con un empaque único y divertido. Con diseños coloridos y vibrantes que incluyen un cerdito, un gatito, un perrito y otras criaturas adorables, son perfectos para darle un toque de alegría a tu rutina de belleza. Ideales para mantener tus labios hidratados y suaves durante todo el día. ¡Lleva uno en cada bolso o compártelos con tus amigas! Son el detalle perfecto para cualquier amante de los productos de belleza creativos.",
    "nuevo"
  ),
  new Producto(
    103,
    "Lip Glow Oil Mágico Pola Aylr",
    "Labios",
    7000,
    4200,
    ["assets/img/labios/gloss-pola.jfif"],
    "Descubre el poder de este aceite labial nutritivo y brillante, diseñado para transformar tus labios y darles un aspecto jugoso y saludable al instante. El Lip Glow Oil de Pola Aylr es más que un simple gloss; es un tratamiento completo que hidrata, nutre y realza tu belleza natural.",
    "nuevo"
  ),
  new Producto(
    104,
    "Gloss Huellita de O'LANNEY",
    "Labios",
    5000,
    3000,
    ["assets/img/labios/gloss-huellita.jfif"],
    "¡Brillo y Ternura en tus Labios!",
    "nuevo"
  ),
  new Producto(
    105,
    "Labial Metalizado de Iman Of Noble",
    "Labios",
    500000,
    50,
    [
      "assets/img/labios/labial-metalizado1.jfif",
      "assets/img/labios/labial-metalizado2.jfif",
    ],
    "Atrae todas las miradas con el labial más glamoroso del momento. Este labial combina un diseño futurista con una fórmula de alto rendimiento para que tus labios luzcan espectaculares. Aparte, con su empaque metálico rosa y su diseño de cápsula, este labial no solo es una joya para tus labios, sino también una pieza de colección en tu cosmetiquera.",
    "nuevo"
  ),
  new Producto(
    106,
    "Lip Goss Matte de Iman Of Noble",
    "Labios",
    6500,
    4000,
    ["assets/img/labios/labial-mate1.jfif"],
    "Descubre el secreto de unos labios perfectamente definidos y con un acabado impecable. Este labial líquido Matte es la herramienta que necesitas para lucir sofisticada, elegante y a la moda. Con un empaque elegante y un display de 24 unidades, es el set perfecto para tener todos los colores que necesitas para cualquier look, ¡o para impulsar tu negocio de belleza!",
    "nuevo"
  ),
  new Producto(
    107,
    "Tinta Juguito 2 Tonos O'LANNEY",
    "Labios",
    5000,
    2950,
    [
      "assets/img/labios/tinta-juguitos1.jfif",
      "assets/img/labios/tinta-juguitos2.jfif",
    ],
    "Dale a tus labios un toque de color duradero con estas adorables tintas labiales inspiradas en tus personajes favoritos. Cada tinta viene en un envase único con forma de juguito, perfecto para llevar contigo. Su fórmula de larga duración no solo hidrata tus labios, sino que también deja un color vibrante y natural que no se desvanece fácilmente.",
    "nuevo"
  ),
  new Producto(
    108,
    "Tintas Hello Kitty O'LANNEY",
    "Labios",
    500000,
    50,
    [
      "assets/img/labios/tinta-kitty1.jfif",
      "assets/img/labios/tinta-kitty2.jfif",
    ],
    "¡Brilla con el Dulce Toque de Hello Kitty! ✨ Exclusivos Tintas Labiales O'LANNEY Professional. ¿Buscas un toque de magia y color para tus labios? ¡Te presentamos el adorable expositor de 24 tintas labiales O'LANNEY Professional, protagonizados por la irresistible Hello Kitty! Cada brillo es una pequeña joya que combina una fórmula hidratante con un diseño encantador que te robará el corazón.",
    "nuevo"
  ),
  new Producto(
    109,
    "Brillo Magico Fruticas O'LANNEY",
    "Labios",
    6000,
    3200,
    [
      "assets/img/labios/brillo-frutas1.jfif",
      "assets/img/labios/brillo-frutas2.jfif",
    ],
    "Imagina un gloss tan divertido como efectivo. Cada uno de estos 24 brillos es una pequeña obra de arte con un diseño único: un lindo conejito y una tapa en forma de fruta. Desde la uva hasta la fresa, cada uno es una aventura. Con su fórmula llena de brillo, tus labios no solo se verán espectaculares, sino que también se sentirán hidratados y ligeros, sin la sensación pegajosa. ¡Es el toque frutal y brillante que tu rutina de belleza necesitaba!",
    "nuevo"
  ),
  new Producto(
    110,
    "Labial liquido DUNUF",
    "Labios",
    3900,
    1900,
    [
      "assets/img/labios/labial-dunuf1.jfif",
      "assets/img/labios/labial-dunuf2.jfif",
    ],
    "Los brillos labiales DUNUF son la mezcla perfecta de estilo y cuidado. Su textura ligera y su fórmula de hidratación suave te permiten lucir un color vibrante sin sacrificar la comodidad. Con una gama de tonos desde el rojo clásico hasta el rosa más dulce, este brillo te da un efecto natural que dura todo el día sin resecar tus labios. ¡Un producto esencial para un look impecable en cualquier momento!",
    "nuevo"
  ),
  new Producto(
    111,
    "Labial Liquido Kevin&Coco",
    "Labios",
    5000,
    2450,
    [
      "assets/img/labios/gloss-kevinycoco1.jfif",
      "assets/img/labios/gloss-kevinycoco2.jfif",
      "assets/img/labios/gloss-kevinycoco3.jfif",
    ],
    "Este exquisito set de brillos labiales KEVIN & COCO viene en una caja de presentación que es tan hermosa como el producto. Con 36 piezas que ofrecen una variedad de colores vibrantes, cada brillo tiene un adorable diseño en la tapa inspirado en deliciosos postres y frutas. Su fórmula suave y ligera te da un acabado brillante y un toque de color sutil, ideal para un look fresco y divertido. ¡Perfecto para coleccionar o como un regalo que encantará!",
    "nuevo"
  ),
  new Producto(
    112,
    "Voluminizador de Labios Karité Lip Maximizer",
    "Labios",
    7000,
    3950,
    [
      "assets/img/labios/voluminizador-karite1.jfif",
      "assets/img/labios/voluminizador-karite2.jfif",
    ],
    "Este innovador gloss voluminizador ha sido creado para potenciar la belleza natural de tus labios. Su fórmula especial con colágeno activo no solo maximiza el volumen, sino que también hidrata profundamente, previniendo la sequedad y las líneas finas. El resultado es una sensación de suavidad, un brillo espejo y unos labios visiblemente más carnosos y atractivos. Es ideal para usarlo solo o como base para tu labial favorito. ¡Prepárate para atraer todas las miradas!",
    "nuevo"
  ),
  new Producto(
    113,
    "Labial Matte Velvet",
    "Labios",
    7000,
    4200,
    [
      "assets/img/labios/labial-velvet1.jfif",
      "assets/img/labios/labial-velvet2.jfif",
    ],
    "Experimenta el confort y el color NUDE con los labiales Matte Velvet. Su textura aterciopelada se desliza suavemente sobre los labios, ofreciendo una cobertura completa y un acabado mate duradero sin sensación de sequedad. Disponibles en una gama de tonos cautivadores, estos labiales son ideales para expresar tu estilo con confianza y sofisticación. ¡Labios irresistibles con un acabado mate de ensueño!",
    "nuevo"
  ),
  new Producto(
    114,
    "Labial Liquido Frutas KEVIN&COCO",
    "Labios",
    7500,
    4500,
    [
      "assets/img/labios/labial-kevinycoco1.jfif",
      "assets/img/labios/labial-kevinycoco2.jfif",
    ],
    "Dale a tus labios un toque de diversión y sabor con los brillos labiales Jelly Bomb de KEVIN&COCO. Inspirados en frutas frescas, estos brillos te ofrecen un acabado irresistiblemente brillante y una textura ligera y no pegajosa. Cada uno con un aroma único, son perfectos para hidratar y dar un toque de color sutil a tus labios en tu día a día.",
    "nuevo"
  ),
  new Producto(
    115,
    "Gloss Stich",
    "Labios",
    500000,
    200000,
    [],
    "Cada gloss es un pequeño tesoro, con destellos vibrantes y una elegante tapa en forma de corazón. Además de dejar tus labios con un acabado brillante y un sutil toque de color, tienen un aroma dulce y agradable. Su fórmula ligera no es pegajosa, lo que los hace ideales para uso diario.",
    "nuevo"
  ),
  new Producto(
    200,
    "Brochas Cola de Sirena",
    "Ojos",
    12000,
    8250,
    [
      "assets/img/ojos/brocha-sirena1.jfif",
      "assets/img/ojos/brocha-sirena2.jfif",
    ],
    "Crea looks de fantasía con nuestro Set de Brochas con Diseño de Sirena. Cada set de 10 brochas presenta un mango de cola de sirena en colores metálicos, ideal para aplicar y difuminar maquillaje en ojos y rostro. ¡Un toque mágico para tu colección de belleza!",
    "nuevo"
  ),
  new Producto(
    201,
    "Delineador Plumón Garrita",
    "Ojos",
    7000,
    4200,
    [
      "assets/img/ojos/delineador-garrita1.jfif",
      "assets/img/ojos/delineador-garrita2.jfif",
    ],
    "¡Un delineado perfecto que dura 24 horas! Este Delineador Líquido a Prueba de Agua de ABZ te da una mirada dramática y definida con un solo trazo. Su punta de alta precisión y su fórmula de larga duración lo convierten en el aliado perfecto para un look impecable de día o de noche. ¡Y el empaque de gatito es irresistible!",
    "nuevo"
  ),
  new Producto(
    203,
    "Brochas Deluxe",
    "Ojos",
    18900,
    12500,
    [
      "assets/img/ojos/brochas-deluxe1.jfif",
      "assets/img/ojos/brochas-deluxe2.jfif",
      "assets/img/ojos/brochas-deluxe3.jfif",
      "assets/img/ojos/brochas-deluxe4.jfif",
      "assets/img/ojos/brochas-deluxe5.jfif",
    ],
    "Lleva tu maquillaje al siguiente nivel con este espectacular set. Los mangos llenos de glitter de cuatro colores espectaculares que se mueve y las cerdas súper suaves no solo hacen que la aplicación sea más fácil, sino también más divertida. El set incluye brochas para base, rubor, sombras y cejas, asegurando que tengas la herramienta perfecta para cada paso de tu maquillaje. ¡Es hora de añadir un poco de magia a tu colección!",
    "nuevo"
  ),
  new Producto(
    204,
    "Delineador en Plumon ABZ",
    "Ojos",
    7000,
    4200,
    ["assets/img/ojos/delineador-abz.jfif"],
    "Define tu mirada con nuestro delineador liquido en plumón ,su punta de alta precisión te permite crear líneas finas o dramáticas con facilidad. Con una fórmula ultra resistente, este delineador se mantiene intacto todo el día, sin correrse ni desvanecerse.",
    "nuevo"
  ),
  new Producto(
    205,
    "Delineador Líquido Mate de Aliddy Beauty",
    "Ojos",
    3000,
    2100,
    [
      "assets/img/ojos/delineador-liquido-aliddy2.jfif",
      "assets/img/ojos/delineador-liquido-aliddy1.jfif",
      
    ],
    "Eleva tu rutina de maquillaje con el Delineador Líquido Mate de Aliddy Beauty. Este delineador ha sido diseñado para ofrecer un control total, permitiéndote trazar líneas finas y elegantes o una linea de gato más dramático y atrevido. Su fórmula de secado rápido y resistente al agua te asegura una mirada definida e impecable desde la mañana hasta la noche, sin desvanecerse. ¡El toque final perfecto para cualquier look!",
    "nuevo"
  ),
  new Producto(
    206,
    "Jabon para Cejas Kuromi",
    "Ojos",
    5000,
    3200,
    [
      "assets/img/ojos/jabon-kuromi1.jfif",
      "assets/img/ojos/jabon-kuromi2.jfif",
    ],
    "Este producto, con un encantador diseño, es ideal para dominar y fijar hasta los vellos más rebeldes, logrando un efecto de \"ceja laminada\" de manera sencilla y rápida. Su fórmula de larga duración asegura que tus cejas se mantengan en su lugar, con una apariencia más densa y definida. Cada jabón incluye un práctico cepillo para una aplicación precisa y sin complicaciones.",
    "nuevo"
  ),
  new Producto(
    207,
    "Jabon para Cejas Melody",
    "Ojos",
    5000,
    3200,
    ["assets/img/ojos/jabon-melody1.jfif"],
    "Este producto, con un encantador diseño, es ideal para dominar y fijar hasta los vellos más rebeldes, logrando un efecto de \"ceja laminada\" de manera sencilla y rápida. Su fórmula de larga duración asegura que tus cejas se mantengan en su lugar, con una apariencia más densa y definida. Cada jabón incluye un práctico cepillo para una aplicación precisa y sin complicaciones.",
    "nuevo"
  ),
  new Producto(
    208,
    "Paleta Dreamer",
    "Ojos",
    14900,
    9900,
    [
      "assets/img/ojos/paleta-dreamer1.jfif",
      "assets/img/ojos/paleta-dreamer2.jfif",
      "assets/img/ojos/paleta-dreamer3.jfif",
    ],
    "Crea looks de ensueño con la paleta de sombras Dreamer de La Catelrra. Inspirada en los cielos nocturnos, esta paleta de 14 tonos te ofrece una mezcla perfecta de mates suaves y brillos intensos. Sus sombras de alta pigmentación se difuminan fácilmente y duran todo el día, permitiéndote pasar de un look natural a uno más atrevido sin esfuerzo.",
    "nuevo"
  ),
  new Producto(
    209,
    "Paleta Libro KEVIN Y COCO",
    "Ojos",
    25900,
    19500,
    [
      "assets/img/ojos/paleta-kyc1.jfif",
      "assets/img/ojos/paleta-kyc2.jfif",
      "assets/img/ojos/paleta-kyc3.jfif",
    ],
    "Una curación de 36 sombras altamente pigmentadas, que van desde los neutros cálidos y fríos para el día a día, hasta una explosión de colores neón y pastel que te permitirán crear looks audaces y creativos.",
    "nuevo"
  ),
  new Producto(
    210,
    "Paleta Mocmallure Nude",
    "Ojos",
    500000,
    2000000,
    [
      "assets/img/ojos/sombra-nude1.jfif",
      "assets/img/ojos/sombra-nude2.jfif",
    ],
    "Maximiza tu kit de maquillaje con esta paleta multifuncional todo en uno. 'Smart Eyes' no solo te da 15 tonos de sombras para crear cualquier look de ojos el empaque elegante y compacto es ideal para llevarlo contigo, asegurando que siempre tengas lo necesario para perfeccionar tu rostro. Los tonos versátiles, con acabados mates y satinados, son perfectos para un maquillaje sofisticado y sin esfuerzo.",
    "nuevo"
  ),
  new Producto(
    211,
    "Perfiladores de cejas x3",
    "Ojos",
    3000,
    1750,
    [
      "assets/img/ojos/perfilador-cejas1.jfif",
      "assets/img/ojos/perfilador-cejas2.jfif",
    ],
    "Mantén tus cejas siempre perfectas esta herramienta es la solución ideal para el retoque diario, permitiéndote eliminar el exceso de vello y dar forma a tus cejas de manera fácil y sin irritaciones. Su hoja de alta calidad y diseño ergonómico garantizan un perfilado suave y un resultado profesional, justo como lo harías en un salón.",
    "nuevo"
  ),
  new Producto(
    212,
    "Pestañina 7D",
    "Ojos",
    7000,
    4500,
    [
      "assets/img/ojos/pestanina-7d1.jfif",
      "assets/img/ojos/pestanina-7d2.jfif",
    ],
    "¿Sueñas con pestañas que roben miradas? La Máscara de Pestañas 7D Fiber Lashes es la solución. Su fórmula avanzada con micro-fibras se adhiere delicadamente a tus pestañas, creando una dimensión 7D que las hace parecer más largas, gruesas y voluminosas al instante. A diferencia de las máscaras tradicionales, esta logra un efecto de pestañas postizas sin el esfuerzo ni los adhesivos. La textura suave y el cepillo especializado aseguran una aplicación sin grumos y una definición impecable que dura todo el día. ¡Atrévete a lucir una mirada irresistible!",
    "nuevo"
  ),
  new Producto(
    213,
    "Serum Para Pestañas",
    "Ojos",
    6000,
    3750,
    [
      "assets/img/ojos/serum-pestanas1.jfif",
      "assets/img/ojos/serum-pestanas2.jfif",
    ],
    "El Sérum Nutritivo para Pestañas con Ácido Hialurónico es la solución que estabas buscando. Este tratamiento intensivo nutre y revitaliza tus pestañas para que luzcan más largas, gruesas y voluminosas de manera natural. Su fórmula transparente y no pegajosa se aplica fácilmente con el cepillo tipo máscara, penetrando para hidratar y fortalecer los folículos pilosos. Es ideal para pestañas que han sido dañadas por extensiones o el uso constante de maquillaje. ¡Inclúyelo en tu rutina de noche y despierta con unas pestañas visiblemente más sanas y espectaculares!",
    "nuevo"
  ),
  new Producto(
    214,
    "Sombra de Ojos KEVIN&COCO",
    "Ojos",
    14900,
    8500,
    [
      "assets/img/ojos/sombra-pelorosadokyc1.jfif",
      "assets/img/ojos/sombra-pelorosadokyc2.jfif",
    ],
    "Esta paleta no es solo hermosa por fuera, también lo es por dentro. Los tonos están diseñados para complementar tu estilo y darte la libertad de crear looks impactantes. Con una mezcla de acabados que incluyen sombras con relieve, esta paleta te ofrece una experiencia de maquillaje única. Las sombras son fáciles de difuminar y se mantienen impecables por horas.",
    "nuevo"
  ),
  new Producto(
    215,
    "Sombra Libro KEVIN&COCO",
    "Ojos",
    20000,
    17000,
    [
      "assets/img/ojos/sombra-librokyc1.jfif",
      "assets/img/ojos/sombra-librokyc2.jfif",
      "assets/img/ojos/sombra-librokyc3.jfif",
    ],
    "¡Conoce tu nueva paleta favorita! Esta versión compacta de 18 sombras es un sueño hecho realidad. El empaque rosa, lleno de diseños divertidos y coloridos, es la introducción perfecta a los tonos femeninos y brillantes que hay en su interior. La combinación de colores te permite crear looks de ensueño, desde un simple toque de brillo hasta un smokey ojo dramático. ¡El regalo ideal para cualquiera que ama el color!",
    "nuevo"
  ),
  new Producto(
    216,
    "Sombra y Pomada Cejas",
    "Ojos",
    12000,
    7000,
    [
      "assets/img/ojos/sombra-pomada1.jfif",
      "assets/img/ojos/sombra-pomada2.jfif",
      "assets/img/ojos/sombra-pomada3.jfif",
      "assets/img/ojos/sombra-pomada4.jfif",
    ],
    "Consigue unas cejas perfectas y a prueba de todo con el Polvo y Crema para Cejas de La Catelrra. Su fórmula 2 en 1 te da la flexibilidad de usar la crema para una definición intensa y precisa o el polvo para un acabado más suave y natural. Ambos productos son de larga duración y resistentes al agua, asegurando que tus cejas se mantengan impecables de la mañana a la noche.",
    "nuevo"
  ),
  new Producto(
    217,
    "Sombras Fashion KEVIN&COCO",
    "Ojos",
    14900,
    9900,
    [
      "assets/img/ojos/sombra-fashionkyc1.jfif",
      "assets/img/ojos/sombra-fashionkyc2.jfif",
    ],
    "Para quienes buscan versatilidad en un formato compacto, esta paleta de KEVIN&COCO es la elección perfecta. Con 9 tonos vibrantes y texturas que incluyen glitter, y satinados, puedes crear looks completos y espectaculares. Su tamaño la hace ideal para llevar en el bolso, y el espejo integrado te asegura que siempre podrás retocar tu maquillaje.",
    "nuevo"
  ),
  new Producto(
    300,
    "Base liquida My Melody en diferentes tonos.",
    "Rostro",
    5000,
    3000,
    [
      "assets/img/rostro/base-melody1.jfif",
      "assets/img/rostro/base-melody2.jfif",
    ],
    "Si buscas un maquillaje perfecto y divertido, esta es la base para ti. Con un adorable empaque de My Melody, esta base de maquillaje te ofrece una cobertura impecable y una fórmula que protege tu piel del sol. Su textura es ligera y fácil de aplicar, dejando tu piel con un acabado sedoso y natural.",
    "nuevo"
  ),
  new Producto(
    301,
    "Base liquida BB",
    "Rostro",
    5000,
    3250,
    [
      "assets/img/rostro/base-bb1.jfif",
      "assets/img/rostro/base-bb2.jfif",
    ],
    "Presentamos la Base de Maquillaje Mocmallure B&B en un práctico formato de tubo. Esta base está diseñada para ofrecer un acabado mate y sin poros, brindando una cobertura de alta definición que dura hasta 24 horas. Es la elección perfecta para quienes buscan un acabado impecable y de larga duración.",
    "nuevo"
  ),
  new Producto(
    302,
    "Base liquida Stich",
    "Rostro",
    5000,
    3500,
    ["assets/img/rostro/base-stich1.jfif"],
    "Esta base líquida viene en un práctico tubo de tamaño pequeño, fácil de llevar a cualquier lugar. Su fórmula combina protección solar con un acabado natural para el día a día, aparte viene en diferentes tonos para todos los tipos de piel.",
    "nuevo"
  ),
  new Producto(
    303,
    "Beauty Blender",
    "Rostro",
    3500,
    1900,
    [
      "assets/img/rostro/beauty-blenderkawaii1.jfif",
      "assets/img/rostro/beauty-blenderkawaii2.jfif",
    ],
    "Dale un toque divertido a tu rutina de maquillaje con estas adorables esponjas. Su material de alta calidad permite una aplicación suave y uniforme de bases, correctores y polvos. Úsalas en seco para una cobertura total o húmedas para un acabado natural y luminoso.",
    "nuevo"
  ),
  new Producto(
    304,
    "Brocha maquillaje profesional",
    "Rostro",
    9000,
    6500,
    [
      "assets/img/rostro/brocha-profesional1.jfif",
      "assets/img/rostro/brocha-profesional2.jfif",
    ],
    "Consigue un acabado impecable con esta Brocha para Maquillaje de Acabado Profesional. Su diseño ergonómico y cerdas densas permiten una aplicación rápida y uniforme de base, polvos o contorno. Ideal para una cobertura sin esfuerzo",
    "nuevo"
  ),
  new Producto(
    305,
    "Brochas unicolor",
    "Rostro",
    3500,
    2750,
    [
      "assets/img/rostro/brocha-unicolor1.jfif",
      "assets/img/rostro/brocha-unicolor2.jfif",
    ],
    "Lleva tu maquillaje al siguiente nivel con nuestro set de brochas en tonos pastel. Cada paquete incluye brochas esenciales para rostro y ojos, con cerdas suaves y un diseño adorable. Elige tu color favorito y crea looks increíbles de forma fácil y divertida.",
    "nuevo"
  ),
  new Producto(
    306,
    "Corrector de ojeras difuminador",
    "Rostro",
    7000,
    4900,
    [
      "assets/img/rostro/corrector-iman1.jfif",
      "assets/img/rostro/corrector-iman2.jfif",
    ],
    "Este corrector es tu aliado perfecto para un acabado impecable. Su diseño innovador con esponja aplicadora facilita la cobertura de ojeras, manchas e imperfecciones. La fórmula ligera y de alta cobertura se difumina sin esfuerzo, dejando la piel con un aspecto radiante y uniforme.",
    "nuevo"
  ),
  new Producto(
    307,
    "Corrector de ojeras Karite diferentes tonos",
    "Rostro",
    7500,
    4500,
    [
      "assets/img/rostro/corrector-karite1.jfif",
      "assets/img/rostro/corrector-karite2.jfif",
      "assets/img/rostro/corrector-karite3.jfif",
    ],
    "Despídete de las ojeras y las imperfecciones con el corrector de Karité. Su fórmula de larga duración no solo cubre, sino que también cuida tu piel. Se siente ligero y cómodo, ofreciendo un acabado natural y sin pliegues que dura desde la mañana hasta la noche. Es tu aliado perfecto para un rostro radiante.",
    "nuevo"
  ),
  new Producto(
    308,
    "Polvo compacto",
    "Rostro",
    12000,
    6850,
    [
      "assets/img/rostro/polvos-cat1.jfif",
      "assets/img/rostro/polvos-cat2.jfif",
      "assets/img/rostro/polvos-cat3.jfif",
    ],
    "Consigue un maquillaje perfecto y duradero con el Polvo de Acabado Karité Cat. Este polvo ligero y fino está diseñado para matificar el rostro, sellar tu base y corrector, y difuminar la apariencia de poros y líneas finas. Su fórmula ayuda a controlar el exceso de grasa y a mantener tu piel fresca y sin brillos durante todo el día. ¡Ideal para un acabado suave y profesional! Además, su empaque adorable es irresistible.",
    "nuevo"
  ),
  new Producto(
    309,
    "Polvo de Hadas",
    "Rostro",
    8000,
    4900,
    [
      "assets/img/rostro/polvos-hadas1.jfif",
      "/assets/img/rostro/polvos-hadas2.jfif",
      "assets/img/rostro/polvos-hadas3.jfif",
    ],
    "Transforma cualquier maquillaje en una obra de arte con la colección Fashion Polvo de Hadas. Este set exclusivo te invita a explorar 6 tonalidades radiantes, desde destellos dorados hasta un sutil brillo perlado. Ya sea que quieras un toque de luz en tus pómulos, un brillo en el escote o un acento en tu cabello, estos polvos sueltos te dan la libertad de crear looks únicos y deslumbrantes. ¡La magia está en tus manos",
    "nuevo"
  ),
  new Producto(
    310,
    "Rubor liquido",
    "Rostro",
    7500,
    4500,
    [
      "assets/img/rostro/rubor-liquido1.jfif",
      "assets/img/rostro/rubor-liquido2.jfif",
    ],
    "Consigue un brillo natural y luminoso con el Blush Líquido de Moocmallure. Su textura ligera y sedosa se desliza suavemente sobre la piel, permitiendo una fácil construcción del color, desde un rubor sutil hasta uno más intenso. Perfecto para mejillas y labios, este producto te da un acabado fresco y jugoso que dura todo el día. ¡Añade un toque de color que ilumina tu rostro!",
    "nuevo"
  ),
  new Producto(
    311,
    "Sérum Facial Antioxidante 'Camellias' de BIOAQUA",
    "Rostro",
    6500,
    4000,
    [
      "assets/img/rostro/serum-camelias1.jfif",
      "assets/img/rostro/serum-camelias2.jfif",
    ],
    "Este sérum facial está diseñado para reparar y nutrir la piel. Su fórmula antioxidante ayuda a proteger la piel del daño ambiental, mientras que los ingredientes nutritivos la mantienen hidratada y con un aspecto fresco. Aplícalo diariamente para obtener una piel más suave, firme y luminosa.",
    "nuevo"
  ),
  new Producto(
    312,
    "Sérum Facial Antioxidante 'Vitamina B5 + Acido Hialurónico de BIOAQUA",
    "Rostro",
    6500,
    4000,
    ["assets/img/rostro/serum-b5.jfif"],
    "Hidrata y repara tu piel con el Sérum de Ácido Hialurónico + Vitamina B5 de BIOAQUA. Su fórmula concentrada calma la piel irritada, reduce la apariencia de los poros y proporciona una hidratación profunda para una barrera cutánea más fuerte y saludable.",
    "nuevo"
  ),
  new Producto(
    400,
    "Mascarilla Facial de Pato de BIOAQUA",
    "Skincare",
    2000,
    1500,
    ["assets/img/skincare/mascarilla-pollo.jfif"],
    "Dale a tu piel un impulso de hidratación con esta divertida mascarilla facial. Su diseño adorable y su fórmula nutritiva trabajan juntos para dejar la piel suave y radiante. Perfecta para una sesión de cuidado personal en casa, esta mascarilla ayuda a rejuvenecer la piel y a darle un aspecto fresco y saludable.",
    "nuevo"
  ),
  new Producto(
    401,
    "Primer Aguacate",
    "Skincare",
    5000,
    3000,
    ["assets/img/skincare/primer-aguacate1.jfif"],
    "Este primer facial de aguacate de Micolor es el primer paso para un maquillaje de larga duración. Su fórmula ligera y nutritiva ilumina y suaviza la piel, creando una base perfecta para la aplicación de la base. Ayuda a difuminar los poros y las líneas finas, asegurando un acabado liso y uniforme que se mantiene fresco durante todo el día.",
    "nuevo"
  ),
  new Producto(
    402,
    "Primer Milk",
    "Skincare",
    5000,
    3500,
    [
      "assets/img/skincare/primer-milk1.jfif",
      "assets/img/skincare/primer-milk2.jfif",
    ],
    "Prepara tu piel para un maquillaje impecable con el primer facial su fórmula ligera y nutritiva alisa la textura de la piel, minimiza la apariencia de los poros y crea una superficie perfecta para la aplicación de la base. Este primer asegura que tu maquillaje se mantenga fresco y en su lugar durante horas. Es la elección ideal para un acabado profesional y de larga duración.",
    "nuevo"
  ),
  new Producto(
    403,
    "Serum Acido Hialuronico",
    "Skincare",
    6500,
    4000,
    ["assets/img/skincare/serum-b5.jfif"],
    "Hidrata y repara tu piel con el Sérum de Ácido Hialurónico + Vitamina B5 de BIOAQUA. Su fórmula concentrada calma la piel irritada, reduce la apariencia de los poros y proporciona una hidratación profunda para una barrera cutánea más fuerte y saludable.",
    "nuevo"
  ),
];