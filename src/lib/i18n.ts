export const locales = ["es", "en", "de", "fr", "it", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeMeta: Record<Locale, { label: string; nativeLabel: string }> = {
  de: { label: "German", nativeLabel: "Deutsch" },
  en: { label: "English", nativeLabel: "English" },
  es: { label: "Spanish", nativeLabel: "Español" },
  fr: { label: "French", nativeLabel: "Français" },
  it: { label: "Italian", nativeLabel: "Italiano" },
  pt: { label: "Portuguese", nativeLabel: "Português" },
};

const dictionaries = {
  es: {
    about: {
      description:
        "Descubre la visión de GEORGIAN: lujo accesible, diseño táctil, raíz sevillana y una filosofía de armario construida sobre la seguridad contemporánea.",
      futureCardBody:
        "Menos interrupciones decorativas, más aire entre bloques y un universo de marca que se siente intencionado antes que cargado.",
      futureCardEyebrow: "Dirección",
      futureCardTitle:
        "Una identidad de moda sólida con espacio para convertirse en una plataforma comercial seria.",
      futureDescription:
        "GEORGIAN nace con la ambición de unir la agilidad del comercio contemporáneo con el rigor estético de la alta moda. Un punto de vista claro: crear un ecosistema donde el diseño inteligente sea el estándar",
      futureEyebrow: "Mirando hacia delante",
      futureTitle:
        "Una firma emergente con el pulido de una casa madura.",
      heroDescription:
        "GEORGIAN existe en la intersección del arte y la permanencia. No diseñamos para el momento, sino para el rastro que dejas al pasar. Cada pieza es un ejercicio de arquitectura textil: minimalismo radical que otorga autoridad a quien lo viste. Aquí, la elegancia no se explica; se impone a través de la calidad absoluta y el vacío de lo innecesario.",
      heroEyebrow: "Sobre GEORGIAN",
      heroStats: [
        { label: "Origen", value: "Sevilla" },
      ],
      heroTitle:
        "La forma definitiva del silencio. Estética pura que trasciende el tiempo.",
      principlesDescription:
        "Estos principios mantienen la marca alineada mientras escala desde una primera cápsula fuerte hacia un ecosistema completo de moda y comercio.",
      principlesEyebrow: "Principios de marca",
      principlesTitle: "El diseño como identidad, no como decoración.",
    },
    aboutChapters: [
      {
        eyebrow: "Origen",
        text: "Nuestra estética se define por la claridad. Inspirados por el rigor arquitectónico de Sevilla, creamos piezas que trascienden las tendencias temporales. No diseñamos ropa, construimos un legado visual basado en la pureza de las líneas y la excelencia de los materiales",
        title: "Nacida en Sevilla, pensada para un mundo más amplio.",
      },
      {
        eyebrow: "Filosofía",
        text: "La marca no se construye desde el espectáculo. Se construye desde la proporción, la textura y ese tipo de pulido discreto que funciona entre día, trabajo, cena y viaje.",
        title: "Premium sin teatralidad excesiva.",
      },
      {
        eyebrow: "Comunidad",
        text: "GEORGIAN es el punto de encuentro para quienes entienden que vestir bien es una forma de respeto propio. Nuestra comunidad no busca tendencias efímeras, sino una identidad sólida que equilibra el carácter necesario para destacar con la discreción necesaria para perdurar.",
        title: "La elegancia de la intención.",
      },
    ],
    collection: {
      allPieces: "Todas las piezas",
      description:
        "Un catálogo limpio y editorial, diseñado para sentirse premium sin saturar. Explora por categoría, afina el punto de vista y entra directamente en la historia de cada prenda.",
      editorialBody:
        "La nota lateral se mantiene como contexto, pero la imagen deja de competir con el grid para que la lectura del catálogo resulte más serena y clara.",
      editorialEyebrow: "Curaduría editorial",
      editorialTitle:
        "Un catálogo más claro, con el producto en primer plano y la marca acompañando.",
      filterByCategory: "Filtrar por categoría",
      focus: "Foco",
      heroEyebrow: "Colección",
      readyBody:
        "Inventario, wishlist, lógica de filtros y checkout pueden crecer sobre esta estructura sin volver a romper la jerarquía visual.",
      readyEyebrow: "Preparada para escalar",
      sort: "Orden",
      sortCollection: "Ordenar colección",
      title:
        "Un catálogo premium con la disciplina de una edición de armario.",
      visible: "Visible",
    },
    contact: {
      description:
        "Contacta con GEORGIAN para pedidos privados, colaboraciones, showroom o acceso a la newsletter y a la comunidad de marca.",
      formDescription:
        "Mantén el mensaje claro y responderemos con el siguiente paso adecuado, ya sea una respuesta directa, una nota de showroom o una conversación posterior.",
      formEyebrow: "Enviar una consulta",
      formTitle:
        "Pedidos privados, colaboraciones o conversaciones wholesale.",
      heroDescription:
        "Una capa de contacto y comunidad pensada para crecer: consultas privadas, colaboraciones, peticiones editoriales y una newsletter que convierte el interés en relación continuada.",
      heroEyebrow: "Contacto / Comunidad",
      heroStats: [
        { label: "Respuesta", value: "En 1 día" },
        { label: "Enfoque", value: "Privado + editorial" },
        { label: "Tono", value: "Cercano, cuidado" },
      ],
      heroTitle: "Una línea directa hacia el universo de la marca.",
      newsletterDescription:
        "El canal de comunidad es donde la marca deja de ser solo una tienda. Espera previews, direcciones de styling, notas de lanzamiento e invitaciones privadas antes de hacerse públicas.",
      newsletterEyebrow: "Newsletter",
      newsletterTitle:
        "Mantente dentro del ritmo de nuevas ediciones y lanzamientos editoriales.",
    },
    contactMoments: [
      {
        eyebrow: "Newsletter",
        title: "Acceso anticipado a nuevas ediciones, notas de styling y previews privadas.",
      },
      {
        eyebrow: "Citas",
        title: "Una vía más cercana para colaboraciones, showroom y wholesale.",
      },
      {
        eyebrow: "Mood social",
        title: "Un feed concebido como diario editorial, no como un muro de producto.",
      },
    ],
    footer: {
      connect: "Conectar",
      description:
        "GEORGIAN construye un armario sereno para quienes buscan elegancia sin rigidez y diseño premium sin la distancia del lujo antiguo.",
      location: "Sevilla, España",
      navigate: "Navegar",
      newsletter: "Newsletter",
    },
    forms: {
      contact: {
        emailPlaceholder: "Email",
        idleReply: "Normalmente respondemos en un día laborable.",
        messagePlaceholder:
          "Cuéntanos qué necesitas: pedido privado, colaboración, petición editorial, wholesale o consulta general.",
        namePlaceholder: "Nombre",
        sending: "Enviando",
        subjectPlaceholder: "Asunto",
        submit: "Enviar consulta",
        successReply:
          "Mensaje recibido. El estudio responderá con una respuesta cuidada.",
        defaultSubject: "Pedido privado",
      },
      newsletter: {
        idle:
          "Previews privadas, avisos de nuevas cápsulas y notas editoriales del estudio.",
        join: "Unirme",
        placeholder: "Tu correo electrónico",
        sending: "Enviando",
        success:
          "Ya estás dentro. Recibirás previews privadas, notas de styling y acceso anticipado.",
      },
    },
    general: {
      backToCollection: "Volver a la colección",
      connect: "Conectar",
      delivery: "Envío",
      explore: "Explorar",
      materialFocus: "Materiales",
      navigate: "Navegar",
      newsletter: "Newsletter",
      productDetails: "Detalles del producto",
      relatedEyebrow: "También te puede gustar",
      relatedTitle:
        "Piezas relacionadas elegidas por el mismo ánimo y la misma silueta.",
      storytelling: "Historia de la pieza",
      viewPiece: "Ver pieza",
    },
    header: {
      cta: "Nueva edición",
      language: "Idioma",
      nav: {
        about: "Marca",
        collection: "Colección",
        contact: "Comunidad",
        home: "Inicio",
      },
      mobileText:
        "Explora Chapter 01, previews privadas y el universo editorial de GEORGIAN.",
      mobileTitle: "Lujo accesible, destilado.",
    },
    heroStats: [
      { label: "Diseñado en", value: "Sevilla" },
      { label: "Foco de armario", value: "Sastrería + esenciales" },
      { label: "Cadencia", value: "Ediciones mensuales limitadas" },
    ],
    home: {
      categoriesEyebrow: "Comprar por foco",
      categoriesTitle:
        "Familias de producto pensadas como armario, no como un feed de tendencia.",
      communityDescription:
        "Pensado para una marca que crece más allá de las páginas de producto: editoriales, previews de lanzamiento, comunidad y futuras capas de commerce ya tienen una base clara.",
      communityEyebrow: "Comunidad / newsletter",
      communityTitle:
        "Únete al círculo para acceder antes a nuevas cápsulas, notas de styling y el lado privado de la marca.",
      featuredDescription:
        "Chapter 01 se construye sobre capas exteriores nítidas, esenciales fluidos y knitwear que hace que la sastrería se sienta natural, no rígida.",
      featuredEyebrow: "Nueva colección",
      featuredNoteBody:
        "Cada pieza está pensada para integrarse en un armario real: fácil de combinar, elevada en sensación y premium sin resultar preciosa de más.",
      featuredNoteEyebrow: "Nota de colección",
      featuredNoteCta: "Ver todas las piezas",
      featuredTitle:
        "Una primera edición con claridad, carácter y espacio real para vivirla.",
      heroDescription:
        "GEORGIAN construye un deseo más silencioso: sastrería moderna, esenciales táctiles y un armario diseñado para sentirse intencional desde la primera luz hasta la última copa.",
      heroEyebrow: "Lujo accesible, destilado.",
      heroPrimaryCta: "Explorar colección",
      heroSecondaryCta: "Descubrir la marca",
      heroTitle: "Un armario sereno para las horas que importan.",
      imageCaption:
        "Esenciales contemporáneos con un punto de vista más afilado.",
      imageNote:
        "Jerarquía limpia, contraste táctil y una atmósfera que se siente cara sin perder disciplina comercial.",
      manifestoButton: "Leer la filosofía",
      manifestoEyebrow: "Manifiesto",
      manifestoTitle:
        "La sofisticación debe sentirse cercana, ponible e instintivamente deseable.",
      materialCardEyebrow: "Lenguaje material",
      materialCardText:
        "Texturas mate, contraste deliberado y un acento dorado usado con contención.",
      materialDescription:
        "El sistema visual busca menos ruido: más aire, menos capas compitiendo y una relación más clara entre storytelling y producto.",
      materialEyebrow: "Estilo, materiales, diseño",
      materialTitle:
        "Un mood premium construido desde el control, no desde el exceso.",
      noteBody:
        "Jerarquía limpia, contraste táctil y una atmósfera cinematográfica sin perder la disciplina del commerce.",
      noteEyebrow: "Nota de colección",
    },
    homePillars: [
      {
        label: "Estilo",
        text: "Diseñamos bajo un instinto de equilibrio. Siluetas limpias, contrastes en calma y una dirección creativa que prioriza el espacio y la forma sobre el ruido.",
        title: "Estética de la proporción",
      },
      {
        label: "Materiales",
        text: "La calidad se siente antes de verse. Seleccionamos lanas de alta densidad, sedas fluidas y algodones de tacto técnico para asegurar que cada prenda sea una experiencia sensorial de confort y durabilidad.",
        title: "Nobleza en la materia",
      },
      {
        label: "Diseño",
        text: "Piezas elevadas que no requieren explicación. Nuestra sastrería está pensada para integrarse en la vida real, ofreciendo un estándar de lujo que se disfruta en el uso diario, sin caer en el disfraz.",
        title: "Distinción sin artificios",
      },
      {
        label: "Visión",
        text: "DNo creemos en la caducidad. Concebimos cada cápsula como una capa adicional para un armario en constante evolución, donde la versatilidad y la arquitectura de la prenda vencen al paso de las temporadas.",
        title: "Vocación de permanencia",
      },
    ],
    legal: {
      privacy: "Privacidad",
      shipping: "Envíos",
      terms: "Términos",
    },
    localeName: "Español",
    notFound: {
      body:
        "Vuelve a la colección o regresa al universo de marca para seguir explorando.",
      eyebrow: "No encontrado",
      primary: "Volver a colección",
      secondary: "Ir al inicio",
      title: "La pieza que buscas ya no está en escena.",
    },
    product: {
      addToBag: "Añadir a la bolsa",
      addedToBag: "Añadido a la bolsa",
      adding: "Añadiendo",
      chapter: "Capítulo 01",
      colour: "Color",
      deliveryCopy:
        "Envío gratuito en pedidos superiores a €250. Devoluciones dentro de catorce días.",
      productDetails: "Detalles del producto",
      readyMessage:
        "{name} en {color}, talla {size}, está listo para finalizar la compra.",
      selected: "Seleccionada",
      size: "Talla",
    },
    productCommon: {
      chapterLabel: "Capítulo 01",
    },
    products: {
      "athena-belted-blazer": {
        colors: ["Tinta medianoche", "Caliza suave"],
        description:
          "Un blazer con cinturón diseñado para aportar forma, facilidad y una línea refinada en la cintura.",
        details: [
          "Hombro de estructura suave",
          "Cinturón propio con trabillas discretas",
          "Interior completamente forrado",
          "Bolsillos ribeteados dobles limpios",
        ],
        editorialNote: "Para entradas que no necesitan anunciarse en voz alta.",
        fit: "Relajado en el cuerpo con definición controlada en la cintura.",
        materials: ["65 % lana virgen", "30 % viscosa", "5 % elastano"],
        mood: "Esculpido",
        name: "Blazer Athena con cinturón",
        story:
          "El blazer Athena equilibra autoridad y suavidad. Está pensado para afilar denim, elevar pantalones de sastrería y aportar estructura intencionada a básicos más silenciosos.",
      },
      "atelier-rib-polo": {
        colors: ["Piedra cálida", "Medianoche"],
        description:
          "Un polo de punto canalé que se mueve entre la influencia deportiva y un styling más elegante.",
        details: [
          "Estructura canalé compacta",
          "Tapeta mínima",
          "Cuello de apertura refinada",
          "Bajo limpio",
        ],
        editorialNote:
          "Una referencia sutil a códigos clásicos, reinterpretada con más contención.",
        fit: "Se adapta al cuerpo con una proporción moderna ligeramente recortada.",
        materials: ["83 % viscosa", "17 % nailon"],
        mood: "Refinado",
        name: "Polo Atelier de canalé",
        story:
          "El polo Atelier toma códigos conocidos y los depura, creando una pieza que puede leerse más elegante que casual según el styling.",
      },
      "duoro-trench-coat": {
        colors: ["Beige guijarro", "Azul marino ennegrecido"],
        description:
          "Una gabardina larga con frontal limpio, solapa amplia y caída firme pero fluida.",
        details: [
          "Acabado resistente al agua",
          "Cinturón desmontable",
          "Storm flap",
          "Interior medio forrado",
        ],
        editorialNote:
          "La capa protagonista para un armario que prefiere presencia antes que ruido.",
        fit: "Larga y relajada, pensada para caer sobre sastrería o knitwear.",
        materials: ["62 % algodón", "38 % nailon técnico"],
        mood: "Contundente",
        name: "Gabardina Duoro",
        story:
          "La gabardina Duoro se concibe como una edición final. Aporta longitud, contraste y seguridad al armario sin caer en la rigidez.",
      },
      "marais-fluid-shirt": {
        colors: ["Marfil mate", "Pizarra oscura"],
        description:
          "Una camisa fluida con caída limpia, diseñada para verse pulida incluso con styling relajado.",
        details: [
          "Tapeta oculta",
          "Detalle de puño prolongado",
          "Cuello suave de punta",
          "Acabado de tacto satinado",
        ],
        editorialNote:
          "Un esencial que se comporta como una pieza de acento cuando la luz acompaña.",
        fit: "Recta en el cuerpo con un movimiento elegante en el bajo.",
        materials: ["68 % lyocell", "32 % algodón"],
        mood: "Pulido",
        name: "Camisa fluida Marais",
        story:
          "Mínima, nítida y muy versátil, la camisa Marais está pensada para pasar de la sastrería al denim sin perder compostura.",
      },
      "nocturne-pleated-skirt": {
        colors: ["Obsidiana", "Arena tostada"],
        description:
          "Una falda midi plisada con cintura limpia y el movimiento justo para atrapar la luz.",
        details: [
          "Construcción de pliegue cuchilla",
          "Cremallera lateral invisible",
          "Bajo suavemente lastrado",
          "Forro satinado",
        ],
        editorialNote:
          "Una silueta compuesta con un movimiento casi cinematográfico.",
        fit: "Tiro medio con caída recta desde la cadera.",
        materials: ["58 % poliéster reciclado", "42 % viscosa"],
        mood: "Lineal",
        name: "Falda plisada Nocturne",
        story:
          "La falda Nocturne busca aportar precisión más que drama, con una línea larga que funciona con knitwear, camisería y outerwear limpio.",
      },
      "seville-column-trouser": {
        colors: ["Noir", "Bruma piedra"],
        description:
          "Un pantalón de pinzas fluido, con caída limpia y espacio suficiente para moverse durante el día.",
        details: [
          "Doble pinza frontal",
          "Cinturilla prolongada",
          "Raya planchada",
          "Interior de cinturilla medio forrado",
        ],
        editorialNote:
          "Precisión fácil de llevar, de la mañana a la cena tardía.",
        fit: "Tiro alto con una pierna larga y suavemente afinada.",
        materials: ["54 % lana", "44 % poliéster", "2 % elastano"],
        mood: "Fluido",
        name: "Pantalón columna Sevilla",
        story:
          "Este pantalón ancla la colección con movimiento y claridad. Está cortado para sentar con nitidez en el cuerpo manteniendo suavidad al caminar.",
      },
      "sierra-wool-overshirt": {
        colors: ["Carbón musgo", "Concha pálida"],
        description:
          "Una overshirt ligera con presencia de abrigo y una actitud más suave para el día a día.",
        details: [
          "Bolsillos de pecho sobredimensionados",
          "Botones efecto cuerno",
          "Superficie de lana cepillada",
          "Bajo recto",
        ],
        editorialNote: "Capas resueltas con arquitectura.",
        fit: "Relajada y ligeramente boxy para superponer sobre camisas o knitwear.",
        materials: ["72 % lana", "24 % poliamida", "4 % otras fibras"],
        mood: "Por capas",
        name: "Overshirt Sierra de lana",
        story:
          "La Sierra se sitúa entre camisa y chaqueta, aportando un acabado más direccional a armarios por lo demás sencillos.",
      },
      "valencia-merino-knit": {
        colors: ["Arena avena", "Noche"],
        description:
          "Un knit de merino fino con tacto compacto y un cuello pensado para asentarse limpio bajo la sastrería.",
        details: [
          "Punto merino de galga 12",
          "Cuello y puño compactos",
          "Costura de hombro refinada",
          "Largo fácil para superponer",
        ],
        editorialNote:
          "La capa silenciosa que hace que las piezas más nítidas se sientan naturales.",
        fit: "Se ajusta al cuerpo sin pegarse.",
        materials: ["100 % lana merino extrafina"],
        mood: "Silencioso",
        name: "Knit merino Valencia",
        story:
          "Diseñado como pieza conectora, el Valencia aporta suavidad bajo las chaquetas y pulido cuando se lleva solo.",
      },
    },
    seo: {
      homeDescription:
        "GEORGIAN es una firma de lujo accesible que construye un armario más sereno y sofisticado a través de esenciales elevados, sastrería precisa y acabados táctiles.",
      homeTitle: "GEORGIAN | Lujo accesible, destilado.",
    },
    socialMoodboard: [
      {
        detail: "Estudios de producto en bodegón, texturas monocromas y luz dura.",
        title: "Notas de estudio",
      },
      {
        detail: "Sastrería silenciosa, acentos dorados y minimalismo para la noche.",
        title: "After hours",
      },
      {
        detail: "Primeros planos de tejido, etiquetas, tags y arquitectura de armario.",
        title: "Lenguaje material",
      },
      {
        detail: "Siluetas limpias que se mueven entre códigos masculinos y femeninos.",
        title: "Uniforme urbano",
      },
    ],
    sortLabels: {
      featured: "Destacados",
      newest: "Novedades",
      "price-asc": "Precio: menor a mayor",
      "price-desc": "Precio: mayor a menor",
    },
  },
  en: {
    about: {
      description:
        "Discover the GEORGIAN vision: accessible luxury, tactile design, Seville roots, and a wardrobe philosophy shaped around modern confidence.",
      futureCardBody:
        "Fewer decorative interruptions, stronger spacing, and a brand world that feels intentional before it feels busy.",
      futureCardEyebrow: "Direction",
      futureCardTitle:
        "A strong fashion identity with room to become a serious commerce platform.",
      futureDescription:
        "The ambition is clear: a premium emerging label with the polish of a mature house, the usability of modern retail, and a brand world that continues beyond the product grid through editorial stories, community, and strong visual codes.",
      futureEyebrow: "Looking forward",
      futureTitle:
        "Built to grow into a real commerce brand with a distinct point of view.",
      heroDescription:
        "GEORGIAN is built around the idea that elegance should feel instinctive. The brand sits between clean modernity, tactile refinement, and pieces that make getting dressed easier rather than more complicated.",
      heroEyebrow: "About GEORGIAN",
      heroStats: [
        { label: "Origin", value: "Seville" },
        { label: "Positioning", value: "Accessible luxury" },
        { label: "Audience", value: "For everyone" },
      ],
      heroTitle:
        "A contemporary fashion house shaped by restraint, allure, and clarity.",
      principlesDescription:
        "These principles keep the brand aligned as it grows from a strong first edit into a complete fashion and commerce system.",
      principlesEyebrow: "Brand principles",
      principlesTitle: "Design as identity, not decoration.",
    },
    aboutChapters: [
      {
        eyebrow: "Origin",
        text: "GEORGIAN draws from southern light, architectural rhythm, and the confidence of dressing with intent. The result is a wardrobe language that feels clean, sensual, and grounded.",
        title: "Born in Seville, built for a wider world.",
      },
      {
        eyebrow: "Philosophy",
        text: "The brand is not built on spectacle. It is built on proportion, texture, and a kind of quiet polish that moves easily between day, work, dinner, and travel.",
        title: "Premium without theatrical excess.",
      },
      {
        eyebrow: "Community",
        text: "Men and women between eighteen and fifty come to GEORGIAN for design that feels elevated yet wearable, with enough character to stay memorable and enough restraint to remain timeless.",
        title: "For people who want to look composed quickly.",
      },
    ],
    collection: {
      allPieces: "All pieces",
      description:
        "A clean editorial catalogue designed to feel premium without overload. Explore by category, refine the point of view, and move directly into each product story.",
      editorialBody:
        "The side note remains as context, but the imagery no longer competes with the grid, so the catalogue feels calmer and more deliberate.",
      editorialEyebrow: "Editorial curation",
      editorialTitle:
        "A clearer catalogue, with product first and brand language in support.",
      filterByCategory: "Filter by category",
      focus: "Focus",
      heroEyebrow: "Collection",
      readyBody:
        "Inventory, wishlist, filtering logic, and checkout can grow on top of this structure without breaking the visual hierarchy again.",
      readyEyebrow: "Ready to scale",
      sort: "Sort",
      sortCollection: "Sort collection",
      title: "A premium catalogue with the discipline of a wardrobe edit.",
      visible: "Visible",
    },
    contact: {
      description:
        "Contact GEORGIAN for private orders, collaborations, showroom requests, or newsletter access to the brand community.",
      formDescription:
        "Keep the message concise and we will respond with the right next step, whether that is a direct reply, a showroom note, or a follow-up conversation.",
      formEyebrow: "Send an enquiry",
      formTitle: "Private orders, collaborations, or wholesale conversations.",
      heroDescription:
        "A contact and community layer designed to grow with the brand: private enquiries, collaborations, editorial requests, and a newsletter that turns interest into an ongoing relationship.",
      heroEyebrow: "Contact / Community",
      heroStats: [
        { label: "Response", value: "Within 1 day" },
        { label: "Focus", value: "Private + editorial" },
        { label: "Mood", value: "Close, considered" },
      ],
      heroTitle: "A direct line into the brand world.",
      newsletterDescription:
        "The community channel is where the brand becomes more than a shop. Expect previews, styling directions, release notes, and private invitations before they move public.",
      newsletterEyebrow: "Newsletter",
      newsletterTitle:
        "Stay inside the rhythm of new edits and editorial releases.",
    },
    contactMoments: [
      {
        eyebrow: "Newsletter",
        title: "Early access to new edits, styling notes, and private previews.",
      },
      {
        eyebrow: "Appointments",
        title: "A closer line for collaborations, showroom requests, and wholesale interest.",
      },
      {
        eyebrow: "Social mood",
        title: "A feed designed like an editorial diary rather than a product wall.",
      },
    ],
    footer: {
      connect: "Connect",
      description:
        "GEORGIAN builds a composed wardrobe for people who want elegance without stiffness and premium design without the distance of old luxury.",
      location: "Seville, Spain",
      navigate: "Navigate",
      newsletter: "Newsletter",
    },
    forms: {
      contact: {
        defaultSubject: "Private order",
        emailPlaceholder: "Email",
        idleReply: "Replies are typically handled within one business day.",
        messagePlaceholder:
          "Tell us what you need: private order, collaboration, editorial request, wholesale, or general enquiry.",
        namePlaceholder: "Name",
        sending: "Sending",
        subjectPlaceholder: "Subject",
        submit: "Send enquiry",
        successReply:
          "Message received. The studio will reply with a considered response.",
      },
      newsletter: {
        idle:
          "Private previews, new chapter alerts, and editorial notes from the studio.",
        join: "Join",
        placeholder: "Email address",
        sending: "Sending",
        success:
          "You are in. Expect private drop notes, styling edits, and early access.",
      },
    },
    general: {
      backToCollection: "Back to collection",
      connect: "Connect",
      delivery: "Delivery",
      explore: "Explore",
      materialFocus: "Material focus",
      navigate: "Navigate",
      newsletter: "Newsletter",
      productDetails: "Product details",
      relatedEyebrow: "You may also like",
      relatedTitle:
        "Related pieces chosen for the same mood and silhouette.",
      storytelling: "Storytelling",
      viewPiece: "View piece",
    },
    header: {
      cta: "New chapter",
      language: "Language",
      nav: {
        about: "Brand",
        collection: "Collection",
        contact: "Community",
        home: "Home",
      },
      mobileText:
        "Explore Chapter 01, private previews, and the editorial world of GEORGIAN.",
      mobileTitle: "Accessible luxury, distilled.",
    },
    heroStats: [
      { label: "Designed in", value: "Seville" },
      { label: "Wardrobe focus", value: "Tailoring + essentials" },
      { label: "Drop cadence", value: "Limited monthly edits" },
    ],
    home: {
      categoriesEyebrow: "Shop by focus",
      categoriesTitle:
        "Product families shaped like a wardrobe, not a trend feed.",
      communityDescription:
        "Built for a brand that grows beyond product pages: editorial dispatches, launch previews, community moments, and future commerce layers already have a clean foundation here.",
      communityEyebrow: "Community / newsletter",
      communityTitle:
        "Join the circle for early drops, styling notes, and the private side of the brand.",
      featuredDescription:
        "Chapter 01 is built around sharper outer layers, fluid essentials, and knitwear that makes tailoring feel natural rather than rigid.",
      featuredEyebrow: "New collection",
      featuredNoteBody:
        "Each piece is designed to integrate into a real wardrobe: easy to combine, elevated in feel, and premium without becoming precious.",
      featuredNoteEyebrow: "Collection note",
      featuredNoteCta: "View all pieces",
      featuredTitle:
        "A first edit with clarity, character, and room to live in.",
      heroDescription:
        "GEORGIAN builds a quieter kind of desirability: modern tailoring, tactile essentials, and a wardrobe designed to feel intentional from first light to last call.",
      heroEyebrow: "Accessible luxury, distilled.",
      heroPrimaryCta: "Explore collection",
      heroSecondaryCta: "Discover the brand",
      heroTitle: "A composed wardrobe for the hours that matter.",
      imageCaption:
        "Modern essentials with a sharper point of view.",
      imageNote:
        "Clean hierarchy, tactile contrast, and an atmosphere that feels expensive without losing commercial discipline.",
      manifestoButton: "Read the philosophy",
      manifestoEyebrow: "Manifesto",
      manifestoTitle:
        "Sophistication should feel close, wearable, and instinctively desirable.",
      materialCardEyebrow: "Material language",
      materialCardText:
        "Matte textures, deliberate contrast, and a gold accent used with restraint.",
      materialDescription:
        "The visual system now aims for less noise: more air, fewer competing layers, and a clearer relationship between storytelling and product.",
      materialEyebrow: "Style, materials, design",
      materialTitle:
        "A premium mood built on control rather than excess.",
      noteBody:
        "Clean hierarchy, tactile contrast, and a cinematic atmosphere that still respects commerce.",
      noteEyebrow: "Collection note",
    },
    homePillars: [
      {
        label: "Style",
        text: "Large-format compositions, quiet contrasts, and a clear instinct for proportion.",
        title: "Editorial clarity",
      },
      {
        label: "Materials",
        text: "Wool blends, fluid shirting, and dense knitwear with a genuinely premium hand feel.",
        title: "Tactile confidence",
      },
      {
        label: "Design",
        text: "Pieces that feel elevated from the first wear without turning into costume.",
        title: "Accessible luxury",
      },
      {
        label: "Vision",
        text: "Seasonal drops conceived as layers of a broader and longer-lasting wardrobe.",
        title: "A lasting wardrobe",
      },
    ],
    legal: {
      privacy: "Privacy",
      shipping: "Shipping",
      terms: "Terms",
    },
    localeName: "English",
    notFound: {
      body:
        "Return to the collection or step back into the brand world to continue exploring.",
      eyebrow: "Not found",
      primary: "Back to collection",
      secondary: "Go home",
      title: "The piece you are looking for is no longer in view.",
    },
    product: {
      addToBag: "Add to bag",
      addedToBag: "Added to bag",
      adding: "Adding",
      chapter: "Chapter 01",
      colour: "Colour",
      deliveryCopy:
        "Complimentary delivery on orders above €250. Returns within fourteen days.",
      productDetails: "Product details",
      readyMessage:
        "{name} in {color}, size {size}, is ready for checkout.",
      selected: "Selected",
      size: "Size",
    },
    productCommon: {
      chapterLabel: "Chapter 01",
    },
    products: {
      "athena-belted-blazer": {
        colors: ["Midnight Ink", "Soft Limestone"],
        description:
          "A belted blazer designed to deliver shape, ease, and a refined line through the waist.",
        details: [
          "Soft-structured shoulder",
          "Self belt with discreet loops",
          "Fully lined interior",
          "Clean double welt pockets",
        ],
        editorialNote: "For entrances that do not need to announce themselves loudly.",
        fit: "Relaxed through the body with controlled definition at the waist.",
        materials: ["65% virgin wool", "30% viscose", "5% elastane"],
        mood: "Sculpted",
        name: "Athena Belted Blazer",
        story:
          "The Athena blazer balances authority with softness. It is designed to sharpen denim, elevate tailored trousers, and bring intentional structure to quieter basics.",
      },
      "atelier-rib-polo": {
        colors: ["Warm Stone", "Midnight"],
        description:
          "A ribbed polo knit that moves between sport influence and dressier styling.",
        details: [
          "Compact rib structure",
          "Minimal placket",
          "Refined collar spread",
          "Clean hem finish",
        ],
        editorialNote:
          "A subtle nod to classic codes, re-edited with more restraint.",
        fit: "Skims the body with a slightly cropped modern proportion.",
        materials: ["83% viscose", "17% nylon"],
        mood: "Refined",
        name: "Atelier Rib Polo",
        story:
          "The Atelier polo pares familiar codes back, producing a piece that can feel more elegant than casual depending on the styling.",
      },
      "duoro-trench-coat": {
        colors: ["Pebble Beige", "Blackened Navy"],
        description:
          "A full-length trench with a clean front, broad lapel, and strong but fluid drape.",
        details: [
          "Water-resistant finish",
          "Detachable belt",
          "Storm flap detail",
          "Half-lined interior",
        ],
        editorialNote:
          "The hero layer for a wardrobe that prefers presence over noise.",
        fit: "Long and relaxed, designed to sit over tailoring or knitwear.",
        materials: ["62% cotton", "38% technical nylon"],
        mood: "Commanding",
        name: "Duoro Trench Coat",
        story:
          "The Duoro trench is conceived as a final edit. It brings length, contrast, and confidence to the wardrobe without tipping into stiffness.",
      },
      "marais-fluid-shirt": {
        colors: ["Ivory Matter", "Dark Slate"],
        description:
          "A fluid shirt with a crisp drape, designed to feel polished even when styled loosely.",
        details: [
          "Hidden placket",
          "Extended cuff detail",
          "Soft point collar",
          "Satin-touch finish",
        ],
        editorialNote:
          "An essential that behaves like a statement in the right light.",
        fit: "Straight through the body with elegant movement at the hem.",
        materials: ["68% lyocell", "32% cotton"],
        mood: "Polished",
        name: "Marais Fluid Shirt",
        story:
          "Minimal, sharp, and highly versatile, the Marais shirt moves from tailoring to denim without losing its composed finish.",
      },
      "nocturne-pleated-skirt": {
        colors: ["Obsidian", "Burnished Sand"],
        description:
          "A pleated midi skirt with a clean waist and just enough movement to catch light.",
        details: [
          "Knife pleat construction",
          "Invisible side zip",
          "Softly weighted hem",
          "Satin backing",
        ],
        editorialNote: "A composed silhouette with cinematic movement.",
        fit: "Mid-rise with a straight fall from the hip.",
        materials: ["58% recycled polyester", "42% viscose"],
        mood: "Linear",
        name: "Nocturne Pleated Skirt",
        story:
          "The Nocturne skirt is designed to add precision rather than drama, offering a longer line that works with knits, shirting, and clean outerwear.",
      },
      "seville-column-trouser": {
        colors: ["Noir", "Stone Mist"],
        description:
          "Fluid pleated trousers with a clean fall and enough room to move through the day.",
        details: [
          "Double front pleat",
          "Extended waistband tab",
          "Pressed crease",
          "Half-lined waistband interior",
        ],
        editorialNote: "Precision made easy, from morning meetings to late dinners.",
        fit: "High-rise with a long, softly tapered leg.",
        materials: ["54% wool", "44% polyester", "2% elastane"],
        mood: "Fluid",
        name: "Seville Column Trouser",
        story:
          "This trouser anchors the collection with movement and clarity. It sits sharply on the body while preserving softness in motion.",
      },
      "sierra-wool-overshirt": {
        colors: ["Mossed Charcoal", "Pale Shell"],
        description:
          "A lightweight overshirt with coat-like presence and a softer everyday attitude.",
        details: [
          "Oversized chest pockets",
          "Horn-effect buttons",
          "Brushed wool surface",
          "Straight hem finish",
        ],
        editorialNote: "Layering made architectural.",
        fit: "Relaxed and slightly boxy for layering over shirts or knits.",
        materials: ["72% wool", "24% polyamide", "4% other fibers"],
        mood: "Layered",
        name: "Sierra Wool Overshirt",
        story:
          "The Sierra overshirt sits between shirt and jacket, bringing a more directional finish to otherwise simple wardrobes.",
      },
      "valencia-merino-knit": {
        colors: ["Oat Sand", "Night"],
        description:
          "A fine merino knit with a compact hand feel and a neckline designed to sit cleanly under tailoring.",
        details: [
          "12-gauge merino knit",
          "Compact rib neck and cuff",
          "Refined shoulder seam",
          "Easy-to-layer length",
        ],
        editorialNote: "The quiet layer that makes sharper pieces feel effortless.",
        fit: "Close to the body without clinging.",
        materials: ["100% extrafine merino wool"],
        mood: "Quiet",
        name: "Valencia Merino Knit",
        story:
          "Designed as a connector piece, the Valencia knit brings softness under jackets and polish when worn on its own.",
      },
    },
    seo: {
      homeDescription:
        "GEORGIAN is an accessible luxury fashion house shaping a quieter, more composed wardrobe through elevated essentials, precise tailoring, and tactile finishing.",
      homeTitle: "GEORGIAN | Accessible luxury, distilled.",
    },
    socialMoodboard: [
      {
        detail: "Still-life product studies, monochrome textures, and sharp daylight.",
        title: "Studio notes",
      },
      {
        detail: "Quiet tailoring, gold accents, and a night-ready minimalism.",
        title: "After hours",
      },
      {
        detail: "Fabric close-ups, labels, tags, and wardrobe architecture.",
        title: "Material language",
      },
      {
        detail: "Clean silhouettes moving between masculine and feminine codes.",
        title: "City uniform",
      },
    ],
    sortLabels: {
      featured: "Featured",
      newest: "Newest",
      "price-asc": "Price: low to high",
      "price-desc": "Price: high to low",
    },
  },
  de: {
    about: {
      description:
        "Entdecke die Vision von GEORGIAN: zugänglicher Luxus, taktiles Design, Wurzeln in Sevilla und eine Garderobenphilosophie mit moderner Sicherheit.",
      futureCardBody:
        "Weniger dekorative Unterbrechungen, stärkere Abstände und eine Markenwelt, die zuerst bewusst und nicht überladen wirkt.",
      futureCardEyebrow: "Ausrichtung",
      futureCardTitle:
        "Eine starke Modeidentität mit Raum, zu einer ernsthaften Commerce-Plattform zu werden.",
      futureDescription:
        "Das Ziel ist klar: ein aufstrebendes Premium-Label mit dem Schliff eines etablierten Hauses, der Nutzbarkeit modernen Retails und einer Markenwelt, die über das Produktgrid hinaus weiterlebt.",
      futureEyebrow: "Ausblick",
      futureTitle:
        "Darauf ausgelegt, zu einer echten Commerce-Marke mit klarer Haltung zu wachsen.",
      heroDescription:
        "GEORGIAN basiert auf der Idee, dass Eleganz instinktiv wirken sollte. Die Marke bewegt sich zwischen klarer Modernität, taktiler Raffinesse und Teilen, die das Anziehen leichter statt komplizierter machen.",
      heroEyebrow: "Über GEORGIAN",
      heroStats: [
        { label: "Herkunft", value: "Sevilla" },
        { label: "Positionierung", value: "Zugänglicher Luxus" },
        { label: "Zielgruppe", value: "Für alle" },
      ],
      heroTitle:
        "Ein zeitgenössisches Modehaus, geprägt von Zurückhaltung, Anziehung und Klarheit.",
      principlesDescription:
        "Diese Prinzipien halten die Marke auf Kurs, während sie von einem starken ersten Edit zu einem vollständigen Mode- und Commerce-System wächst.",
      principlesEyebrow: "Markenprinzipien",
      principlesTitle: "Design als Identität, nicht als Dekoration.",
    },
    aboutChapters: [
      {
        eyebrow: "Herkunft",
        text: "GEORGIAN schöpft aus südlichem Licht, architektonischem Rhythmus und dem Selbstvertrauen, sich mit Absicht zu kleiden. Das Ergebnis ist eine Garderobensprache, die sauber, sinnlich und geerdet wirkt.",
        title: "In Sevilla entstanden, für eine größere Welt gebaut.",
      },
      {
        eyebrow: "Philosophie",
        text: "Die Marke entsteht nicht aus Spektakel, sondern aus Proportion, Textur und jener stillen Politur, die sich mühelos zwischen Tag, Arbeit, Dinner und Reise bewegt.",
        title: "Premium ohne theatralischen Überschuss.",
      },
      {
        eyebrow: "Community",
        text: "Frauen und Männer zwischen achtzehn und fünfzig kommen zu GEORGIAN für Design, das erhöht wirkt und trotzdem tragbar bleibt, mit genug Charakter, um in Erinnerung zu bleiben, und genug Zurückhaltung, um zeitlos zu sein.",
        title: "Für Menschen, die schnell souverän wirken wollen.",
      },
    ],
    collection: {
      allPieces: "Alle Pieces",
      description:
        "Ein klares, editoriales Katalogbild, das hochwertig wirkt, ohne zu überladen. Nach Kategorie filtern, den Blick schärfen und direkt in die Geschichte jedes Produkts eintreten.",
      editorialBody:
        "Die Seitennotiz bleibt als Kontext, aber die Bildsprache konkurriert nicht mehr mit dem Grid, sodass der Katalog ruhiger und bewusster wirkt.",
      editorialEyebrow: "Editoriale Kuratierung",
      editorialTitle:
        "Ein klarerer Katalog, in dem das Produkt zuerst kommt und die Markenwelt begleitet.",
      filterByCategory: "Nach Kategorie filtern",
      focus: "Fokus",
      heroEyebrow: "Kollektion",
      readyBody:
        "Inventar, Wishlist, Filterlogik und Checkout können auf dieser Struktur wachsen, ohne die visuelle Hierarchie erneut zu beschädigen.",
      readyEyebrow: "Bereit zum Skalieren",
      sort: "Sortierung",
      sortCollection: "Kollektion sortieren",
      title: "Ein Premium-Katalog mit der Disziplin eines Garderoben-Edits.",
      visible: "Sichtbar",
    },
    contact: {
      description:
        "Kontaktiere GEORGIAN für private Bestellungen, Kooperationen, Showroom-Anfragen oder Newsletter-Zugang zur Marken-Community.",
      formDescription:
        "Halte die Nachricht präzise und wir antworten mit dem passenden nächsten Schritt, ob direkte Antwort, Showroom-Notiz oder Folgegespräch.",
      formEyebrow: "Anfrage senden",
      formTitle: "Private Orders, Kooperationen oder Wholesale-Gespräche.",
      heroDescription:
        "Ein Kontakt- und Community-Layer, der mit der Marke wächst: private Anfragen, Kooperationen, redaktionelle Anfragen und ein Newsletter, der Interesse in Beziehung verwandelt.",
      heroEyebrow: "Kontakt / Community",
      heroStats: [
        { label: "Antwort", value: "Innerhalb 1 Tages" },
        { label: "Fokus", value: "Privat + editorial" },
        { label: "Ton", value: "Nah, bedacht" },
      ],
      heroTitle: "Eine direkte Linie in die Markenwelt.",
      newsletterDescription:
        "Hier wird die Marke mehr als nur ein Shop. Freue dich auf Previews, Styling-Richtungen, Release-Notes und private Einladungen, bevor sie öffentlich werden.",
      newsletterEyebrow: "Newsletter",
      newsletterTitle:
        "Bleibe im Rhythmus neuer Edits und editorialer Veröffentlichungen.",
    },
    contactMoments: [
      {
        eyebrow: "Newsletter",
        title: "Früher Zugang zu neuen Edits, Styling-Notizen und privaten Previews.",
      },
      {
        eyebrow: "Termine",
        title: "Ein näherer Draht für Kooperationen, Showroom-Anfragen und Wholesale-Interesse.",
      },
      {
        eyebrow: "Social Mood",
        title: "Ein Feed wie ein Editorial-Tagebuch statt einer Produktwand.",
      },
    ],
    footer: {
      connect: "Verbinden",
      description:
        "GEORGIAN baut eine gefasste Garderobe für Menschen, die Eleganz ohne Steifheit und Premium-Design ohne die Distanz alten Luxus suchen.",
      location: "Sevilla, Spanien",
      navigate: "Navigation",
      newsletter: "Newsletter",
    },
    forms: {
      contact: {
        defaultSubject: "Private Bestellung",
        emailPlaceholder: "E-Mail",
        idleReply: "Antworten erfolgen in der Regel innerhalb eines Werktages.",
        messagePlaceholder:
          "Teile uns mit, was du brauchst: private Bestellung, Kooperation, Editorial-Anfrage, Wholesale oder allgemeine Anfrage.",
        namePlaceholder: "Name",
        sending: "Wird gesendet",
        subjectPlaceholder: "Betreff",
        submit: "Anfrage senden",
        successReply:
          "Nachricht erhalten. Das Studio meldet sich mit einer sorgfältigen Antwort.",
      },
      newsletter: {
        idle:
          "Private Previews, neue Kapitel-Updates und editoriale Notizen aus dem Studio.",
        join: "Beitreten",
        placeholder: "E-Mail-Adresse",
        sending: "Wird gesendet",
        success:
          "Du bist dabei. Freue dich auf private Drop-Notizen, Styling-Edits und frühen Zugang.",
      },
    },
    general: {
      backToCollection: "Zurück zur Kollektion",
      connect: "Verbinden",
      delivery: "Versand",
      explore: "Entdecken",
      materialFocus: "Materialfokus",
      navigate: "Navigation",
      newsletter: "Newsletter",
      productDetails: "Produktdetails",
      relatedEyebrow: "Das könnte dir auch gefallen",
      relatedTitle:
        "Verwandte Pieces mit derselben Stimmung und Silhouette.",
      storytelling: "Erzählung",
      viewPiece: "Piece ansehen",
    },
    header: {
      cta: "Neues Kapitel",
      language: "Sprache",
      nav: {
        about: "Marke",
        collection: "Kollektion",
        contact: "Community",
        home: "Start",
      },
      mobileText:
        "Entdecke Chapter 01, private Previews und die editoriale Welt von GEORGIAN.",
      mobileTitle: "Zugänglicher Luxus, destilliert.",
    },
    heroStats: [
      { label: "Entworfen in", value: "Sevilla" },
      { label: "Wardrobe-Fokus", value: "Tailoring + Essentials" },
      { label: "Rhythmus", value: "Limitierte monatliche Edits" },
    ],
    home: {
      categoriesEyebrow: "Nach Fokus shoppen",
      categoriesTitle:
        "Produktfamilien wie eine Garderobe gedacht, nicht wie ein Trend-Feed.",
      communityDescription:
        "Gebaut für eine Marke, die über Produktseiten hinaus wächst: Editorials, Launch-Previews, Community-Momente und künftige Commerce-Layer haben hier bereits eine klare Grundlage.",
      communityEyebrow: "Community / Newsletter",
      communityTitle:
        "Werde Teil des Kreises für frühen Zugang, Styling-Notizen und die private Seite der Marke.",
      featuredDescription:
        "Chapter 01 basiert auf schärferen Outer Layers, fließenden Essentials und Knitwear, die Tailoring natürlich statt starr wirken lässt.",
      featuredEyebrow: "Neue Kollektion",
      featuredNoteBody:
        "Jedes Piece ist so entworfen, dass es in eine reale Garderobe passt: leicht kombinierbar, hochwertig im Gefühl und premium, ohne überkostbar zu wirken.",
      featuredNoteEyebrow: "Kollektion-Notiz",
      featuredNoteCta: "Alle Pieces ansehen",
      featuredTitle:
        "Ein erster Edit mit Klarheit, Charakter und echtem Raum zum Leben.",
      heroDescription:
        "GEORGIAN baut eine ruhigere Form von Begehrlichkeit: modernes Tailoring, taktile Essentials und eine Garderobe, die sich von der ersten Stunde bis spät am Abend bewusst anfühlt.",
      heroEyebrow: "Zugänglicher Luxus, destilliert.",
      heroPrimaryCta: "Kollektion entdecken",
      heroSecondaryCta: "Marke entdecken",
      heroTitle: "Eine ruhige Garderobe für die Stunden, die zählen.",
      imageCaption:
        "Moderne Essentials mit einem schärferen Blick.",
      imageNote:
        "Klare Hierarchie, taktiler Kontrast und eine Atmosphäre, die teuer wirkt, ohne die Handelsdisziplin zu verlieren.",
      manifestoButton: "Philosophie lesen",
      manifestoEyebrow: "Manifest",
      manifestoTitle:
        "Sophistikation sollte nahbar, tragbar und instinktiv begehrenswert wirken.",
      materialCardEyebrow: "Materialsprache",
      materialCardText:
        "Matte Texturen, bewusster Kontrast und ein Goldakzent, der mit Zurückhaltung eingesetzt wird.",
      materialDescription:
        "Das visuelle System zielt jetzt auf weniger Lärm: mehr Luft, weniger konkurrierende Ebenen und eine klarere Beziehung zwischen Storytelling und Produkt.",
      materialEyebrow: "Stil, Materialien, Design",
      materialTitle:
        "Eine Premium-Stimmung, die auf Kontrolle statt auf Exzess aufbaut.",
      noteBody:
        "Klare Hierarchie, taktiler Kontrast und eine fast filmische Atmosphäre, die Commerce dennoch respektiert.",
      noteEyebrow: "Kollektion-Notiz",
    },
    homePillars: [
      {
        label: "Stil",
        text: "Großformatige Kompositionen, ruhige Kontraste und ein klares Gefühl für Proportion.",
        title: "Editoriale Klarheit",
      },
      {
        label: "Materialien",
        text: "Wollmischungen, fließende Shirting-Qualitäten und dichtes Knitwear mit wirklich hochwertiger Haptik.",
        title: "Taktile Sicherheit",
      },
      {
        label: "Design",
        text: "Pieces, die vom ersten Tragen an elevated wirken, ohne kostümhaft zu werden.",
        title: "Zugänglicher Luxus",
      },
      {
        label: "Vision",
        text: "Saisonale Drops als Schichten einer breiteren und langlebigeren Garderobe.",
        title: "Eine Garderobe mit Bestand",
      },
    ],
    legal: {
      privacy: "Datenschutz",
      shipping: "Versand",
      terms: "AGB",
    },
    localeName: "Deutsch",
    notFound: {
      body:
        "Kehre zur Kollektion zurück oder betrete die Markenwelt erneut, um weiter zu entdecken.",
      eyebrow: "Nicht gefunden",
      primary: "Zur Kollektion",
      secondary: "Zur Startseite",
      title: "Das Piece, das du suchst, ist nicht mehr im Blick.",
    },
    product: {
      addToBag: "In die Tasche",
      addedToBag: "Zur Tasche hinzugefügt",
      adding: "Wird hinzugefügt",
      chapter: "Kapitel 01",
      colour: "Farbe",
      deliveryCopy:
        "Kostenloser Versand bei Bestellungen über €250. Rückgabe innerhalb von vierzehn Tagen.",
      productDetails: "Produktdetails",
      readyMessage:
        "{name} in {color}, Größe {size}, ist bereit für den Checkout.",
      selected: "Ausgewählt",
      size: "Größe",
    },
    productCommon: {
      chapterLabel: "Kapitel 01",
    },
    products: {
      "athena-belted-blazer": {
        colors: ["Mitternachtstinte", "Weicher Kalkstein"],
        description:
          "Ein Blazer mit Gürtel, entworfen für Form, Leichtigkeit und eine raffinierte Linie an der Taille.",
        details: [
          "Weich strukturierte Schulter",
          "Eigener Gürtel mit dezenten Schlaufen",
          "Komplett gefüttertes Innenleben",
          "Saubere doppelte Paspeltaschen",
        ],
        editorialNote:
          "Für Auftritte, die sich nicht laut ankündigen müssen.",
        fit: "Locker im Körper mit kontrollierter Definition in der Taille.",
        materials: ["65 % Schurwolle", "30 % Viskose", "5 % Elastan"],
        mood: "Skulptural",
        name: "Athena Blazer mit Gürtel",
        story:
          "Der Athena Blazer balanciert Autorität und Weichheit. Er schärft Denim, hebt Tailoring hervor und bringt bewusste Struktur in leisere Basics.",
      },
      "atelier-rib-polo": {
        colors: ["Warmer Stein", "Mitternacht"],
        description:
          "Ein geripptes Polo-Strickteil zwischen sportlicher Referenz und eleganterem Styling.",
        details: [
          "Kompakte Rippenstruktur",
          "Minimale Knopfleiste",
          "Raffinierte Kragenöffnung",
          "Sauberer Abschluss",
        ],
        editorialNote:
          "Ein subtiler Verweis auf klassische Codes, mit mehr Zurückhaltung neu geschnitten.",
        fit: "Liegt nah am Körper mit leicht verkürzter moderner Proportion.",
        materials: ["83 % Viskose", "17 % Nylon"],
        mood: "Raffiniert",
        name: "Atelier Rippen-Polo",
        story:
          "Das Atelier Polo nimmt vertraute Codes auf und reduziert sie, sodass je nach Styling ein eleganterer als lässiger Eindruck entsteht.",
      },
      "duoro-trench-coat": {
        colors: ["Kieselbeige", "Geschwärztes Navy"],
        description:
          "Ein langer Trenchcoat mit sauberer Front, breitem Revers und kräftigem, aber fließendem Fall.",
        details: [
          "Wasserabweisendes Finish",
          "Abnehmbarer Gürtel",
          "Storm-Flap-Detail",
          "Halb gefüttertes Innenleben",
        ],
        editorialNote:
          "Die Hero-Layer für eine Garderobe, die Präsenz über Lautstärke stellt.",
        fit: "Lang und entspannt, gedacht für Tailoring oder Knitwear.",
        materials: ["62 % Baumwolle", "38 % technisches Nylon"],
        mood: "Prägnant",
        name: "Duoro Trenchcoat",
        story:
          "Der Duoro Trench ist als finales Edit gedacht. Er bringt Länge, Kontrast und Selbstvertrauen in die Garderobe, ohne steif zu wirken.",
      },
      "marais-fluid-shirt": {
        colors: ["Mattes Elfenbein", "Dunkler Schiefer"],
        description:
          "Ein fließendes Hemd mit klarer Drapierung, das selbst in lockerer Styling-Sprache poliert wirkt.",
        details: [
          "Verdeckte Leiste",
          "Verlängertes Manschettendetail",
          "Weicher Spitzkragen",
          "Finish mit satinartigem Griff",
        ],
        editorialNote:
          "Ein Essential, das im richtigen Licht wie ein Statement funktioniert.",
        fit: "Gerade durch den Körper mit elegantem Bewegungsverhalten am Saum.",
        materials: ["68 % Lyocell", "32 % Baumwolle"],
        mood: "Poliert",
        name: "Marais Fließhemd",
        story:
          "Minimal, scharf und äußerst vielseitig, bewegt sich das Marais Hemd von Tailoring zu Denim, ohne seine Ruhe zu verlieren.",
      },
      "nocturne-pleated-skirt": {
        colors: ["Obsidian", "Gebrannter Sand"],
        description:
          "Ein plissierter Midirock mit sauberem Bund und genau genug Bewegung, um Licht einzufangen.",
        details: [
          "Messerfalten-Konstruktion",
          "Unsichtbarer Seitenreißverschluss",
          "Sanft beschwerter Saum",
          "Satinfutter",
        ],
        editorialNote:
          "Eine gefasste Silhouette mit fast filmischer Bewegung.",
        fit: "Mittlere Taille mit geradem Fall ab der Hüfte.",
        materials: ["58 % recyceltes Polyester", "42 % Viskose"],
        mood: "Linear",
        name: "Nocturne Faltenrock",
        story:
          "Der Nocturne Rock bringt Präzision statt Drama und funktioniert mit Knitwear, Shirting und klaren Outer Layers.",
      },
      "seville-column-trouser": {
        colors: ["Noir", "Stein-Nebel"],
        description:
          "Fließende Bundfaltenhose mit klarem Fall und genügend Raum für Bewegung durch den Tag.",
        details: [
          "Doppelte Vorderfalte",
          "Verlängerter Bundverschluss",
          "Gebügelte Bügelfalte",
          "Halb gefütterter Bund innen",
        ],
        editorialNote:
          "Präzision, die morgens genauso leicht wirkt wie spät am Abend.",
        fit: "Hohe Taille mit langem, sanft zulaufendem Bein.",
        materials: ["54 % Wolle", "44 % Polyester", "2 % Elastan"],
        mood: "Fließend",
        name: "Seville Column Hose",
        story:
          "Diese Hose verankert die Kollektion mit Bewegung und Klarheit. Sie sitzt präzise am Körper und bleibt im Gehen weich.",
      },
      "sierra-wool-overshirt": {
        colors: ["Moosgrau", "Pale Shell"],
        description:
          "Ein leichtes Overshirt mit Mantelpräsenz und weicherer Haltung für den Alltag.",
        details: [
          "Übergroße Brusttaschen",
          "Knöpfe in Hornoptik",
          "Gebürstete Wolloberfläche",
          "Gerader Saum",
        ],
        editorialNote: "Layering mit architektonischer Klarheit.",
        fit: "Locker und leicht boxy, zum Layern über Hemden oder Knitwear.",
        materials: ["72 % Wolle", "24 % Polyamid", "4 % weitere Fasern"],
        mood: "Geschichtet",
        name: "Sierra Overshirt aus Wolle",
        story:
          "Das Sierra Overshirt liegt zwischen Hemd und Jacke und gibt sonst schlichten Garderoben ein gerichteteres Finish.",
      },
      "valencia-merino-knit": {
        colors: ["Hafer-Sand", "Nacht"],
        description:
          "Ein feiner Merino-Strick mit kompaktem Griff und Ausschnitt, der sauber unter Tailoring sitzt.",
        details: [
          "12-Gauge-Merino-Strick",
          "Kompakter Rippkragen und Rippbündchen",
          "Raffinierte Schulternaht",
          "Layer-freundliche Länge",
        ],
        editorialNote:
          "Die ruhige Layer, die schärfere Pieces mühelos wirken lässt.",
        fit: "Nah am Körper, ohne anzukleben.",
        materials: ["100 % extrafeine Merinowolle"],
        mood: "Still",
        name: "Valencia Merino Knit",
        story:
          "Als verbindendes Piece gedacht, bringt Valencia Weichheit unter Jacken und Politur, wenn es allein getragen wird.",
      },
    },
    seo: {
      homeDescription:
        "GEORGIAN ist ein Modehaus für zugänglichen Luxus und formt eine ruhigere, gefasstere Garderobe durch erhöhte Essentials, präzises Tailoring und taktile Oberflächen.",
      homeTitle: "GEORGIAN | Zugänglicher Luxus, destilliert.",
    },
    socialMoodboard: [
      {
        detail: "Stillleben von Produkten, monochrome Texturen und hartes Tageslicht.",
        title: "Studio Notes",
      },
      {
        detail: "Leises Tailoring, Goldakzente und Minimalismus für die Nacht.",
        title: "After Hours",
      },
      {
        detail: "Nahaufnahmen von Stoff, Labels, Tags und Wardrobe-Architektur.",
        title: "Materialsprache",
      },
      {
        detail: "Saubere Silhouetten zwischen maskulinen und femininen Codes.",
        title: "City Uniform",
      },
    ],
    sortLabels: {
      featured: "Highlights",
      newest: "Neueste",
      "price-asc": "Preis: aufsteigend",
      "price-desc": "Preis: absteigend",
    },
  },
  fr: {
    about: {
      description:
        "Découvrez la vision de GEORGIAN : luxe accessible, design tactile, racines sévillanes et philosophie de vestiaire construite autour d'une assurance contemporaine.",
      futureCardBody:
        "Moins d'interruptions décoratives, plus de respiration et un univers de marque qui paraît intentionnel avant de paraître chargé.",
      futureCardEyebrow: "Direction",
      futureCardTitle:
        "Une identité mode forte avec l'espace nécessaire pour devenir une vraie plateforme e-commerce.",
      futureDescription:
        "L'ambition est nette : une marque premium émergente avec le poli d'une maison mature, l'usage du retail moderne et un univers qui continue au-delà de la grille produit grâce à l'éditorial, la communauté et des codes visuels affirmés.",
      futureEyebrow: "Perspectives",
      futureTitle:
        "Conçue pour grandir comme une vraie marque de commerce avec un point de vue distinct.",
      heroDescription:
        "GEORGIAN repose sur l'idée que l'élégance doit se ressentir instinctivement. La marque se place entre modernité nette, raffinement tactile et pièces qui rendent l'habillement plus simple, jamais plus compliqué.",
      heroEyebrow: "À propos de GEORGIAN",
      heroStats: [
        { label: "Origine", value: "Séville" },
        { label: "Positionnement", value: "Luxe accessible" },
        { label: "Public", value: "Pour tous" },
      ],
      heroTitle:
        "Une maison de mode contemporaine façonnée par la retenue, l'allure et la clarté.",
      principlesDescription:
        "Ces principes maintiennent la marque alignée tandis qu'elle passe d'un premier edit fort à un système mode et commerce complet.",
      principlesEyebrow: "Principes de marque",
      principlesTitle: "Le design comme identité, pas comme décoration.",
    },
    aboutChapters: [
      {
        eyebrow: "Origine",
        text: "GEORGIAN s'inspire de la lumière du Sud, du rythme architectural et de la confiance de s'habiller avec intention. Le résultat : un langage de vestiaire propre, sensuel et ancré.",
        title: "Née à Séville, pensée pour un monde plus large.",
      },
      {
        eyebrow: "Philosophie",
        text: "La marque n'est pas construite sur le spectacle, mais sur la proportion, la texture et ce poli discret qui traverse le jour, le travail, le dîner et le voyage.",
        title: "Premium sans excès théâtral.",
      },
      {
        eyebrow: "Communauté",
        text: "Femmes et hommes de dix-huit à cinquante ans viennent chez GEORGIAN pour un design élevé mais portable, avec assez de caractère pour marquer et assez de retenue pour durer.",
        title: "Pour celles et ceux qui veulent paraître composés rapidement.",
      },
    ],
    collection: {
      allPieces: "Toutes les pièces",
      description:
        "Un catalogue éditorial épuré conçu pour sembler premium sans être surchargé. Explorez par catégorie, affinez le point de vue et entrez directement dans l'histoire de chaque pièce.",
      editorialBody:
        "La note latérale reste comme contexte, mais l'image ne concurrence plus la grille ; l'ensemble paraît ainsi plus calme et plus net.",
      editorialEyebrow: "Curation éditoriale",
      editorialTitle:
        "Un catalogue plus clair, où le produit passe d'abord et la marque accompagne.",
      filterByCategory: "Filtrer par catégorie",
      focus: "Focus",
      heroEyebrow: "Collection",
      readyBody:
        "Inventaire, wishlist, logique de filtres et checkout peuvent se greffer sur cette structure sans casser à nouveau la hiérarchie visuelle.",
      readyEyebrow: "Prêt à évoluer",
      sort: "Tri",
      sortCollection: "Trier la collection",
      title: "Un catalogue premium avec la discipline d'un edit de vestiaire.",
      visible: "Visible",
    },
    contact: {
      description:
        "Contactez GEORGIAN pour commandes privées, collaborations, showroom ou accès à la newsletter et à la communauté de marque.",
      formDescription:
        "Gardez le message concis et nous répondrons avec l'étape adaptée : réponse directe, note showroom ou échange de suivi.",
      formEyebrow: "Envoyer une demande",
      formTitle: "Commandes privées, collaborations ou échanges wholesale.",
      heroDescription:
        "Une couche contact et communauté pensée pour grandir avec la marque : demandes privées, collaborations, sollicitations éditoriales et newsletter qui transforme l'intérêt en relation.",
      heroEyebrow: "Contact / Communauté",
      heroStats: [
        { label: "Réponse", value: "Sous 1 jour" },
        { label: "Focus", value: "Privé + éditorial" },
        { label: "Ton", value: "Proche, soigné" },
      ],
      heroTitle: "Une ligne directe vers l'univers de la marque.",
      newsletterDescription:
        "C'est ici que la marque devient plus qu'une boutique. Attendez-vous à des previews, des directions de style, des notes de lancement et des invitations privées avant leur diffusion publique.",
      newsletterEyebrow: "Newsletter",
      newsletterTitle:
        "Restez dans le rythme des nouveaux edits et des sorties éditoriales.",
    },
    contactMoments: [
      {
        eyebrow: "Newsletter",
        title: "Accès anticipé aux nouveaux edits, notes de styling et previews privées.",
      },
      {
        eyebrow: "Rendez-vous",
        title: "Un canal plus direct pour collaborations, showroom et wholesale.",
      },
      {
        eyebrow: "Mood social",
        title: "Un feed pensé comme un journal éditorial plutôt qu'un mur produit.",
      },
    ],
    footer: {
      connect: "Connexion",
      description:
        "GEORGIAN construit un vestiaire posé pour celles et ceux qui veulent de l'élégance sans rigidité et du design premium sans la distance de l'ancien luxe.",
      location: "Séville, Espagne",
      navigate: "Navigation",
      newsletter: "Newsletter",
    },
    forms: {
      contact: {
        defaultSubject: "Commande privée",
        emailPlaceholder: "Email",
        idleReply: "Les réponses sont généralement traitées sous un jour ouvré.",
        messagePlaceholder:
          "Dites-nous ce dont vous avez besoin : commande privée, collaboration, demande éditoriale, wholesale ou demande générale.",
        namePlaceholder: "Nom",
        sending: "Envoi",
        subjectPlaceholder: "Sujet",
        submit: "Envoyer",
        successReply:
          "Message reçu. Le studio reviendra vers vous avec une réponse soignée.",
      },
      newsletter: {
        idle:
          "Previews privées, alertes des nouveaux chapitres et notes éditoriales du studio.",
        join: "Rejoindre",
        placeholder: "Adresse email",
        sending: "Envoi",
        success:
          "Vous en faites partie. Attendez-vous à des notes de drop, des edits de style et un accès anticipé.",
      },
    },
    general: {
      backToCollection: "Retour à la collection",
      connect: "Connexion",
      delivery: "Livraison",
      explore: "Explorer",
      materialFocus: "Focus matière",
      navigate: "Navigation",
      newsletter: "Newsletter",
      productDetails: "Détails du produit",
      relatedEyebrow: "Vous aimerez aussi",
      relatedTitle:
        "Pièces associées choisies pour la même humeur et la même silhouette.",
      storytelling: "Narration",
      viewPiece: "Voir la pièce",
    },
    header: {
      cta: "Nouvel edit",
      language: "Langue",
      nav: {
        about: "Marque",
        collection: "Collection",
        contact: "Communauté",
        home: "Accueil",
      },
      mobileText:
        "Explorez Chapter 01, les previews privées et le monde éditorial de GEORGIAN.",
      mobileTitle: "Luxe accessible, distillé.",
    },
    heroStats: [
      { label: "Conçu à", value: "Séville" },
      { label: "Focus vestiaire", value: "Tailoring + essentiels" },
      { label: "Cadence", value: "Edits mensuels limités" },
    ],
    home: {
      categoriesEyebrow: "Acheter par focus",
      categoriesTitle:
        "Des familles de produit pensées comme un vestiaire, pas comme un flux de tendance.",
      communityDescription:
        "Pensé pour une marque qui grandit au-delà des pages produit : éditoriaux, previews de lancement, moments communautaires et futures couches e-commerce ont déjà ici une base propre.",
      communityEyebrow: "Communauté / newsletter",
      communityTitle:
        "Rejoignez le cercle pour l'accès anticipé, les notes de style et la part privée de la marque.",
      featuredDescription:
        "Chapter 01 s'articule autour d'outerwear plus net, d'essentiels fluides et de knitwear qui rend le tailoring naturel plutôt que rigide.",
      featuredEyebrow: "Nouvelle collection",
      featuredNoteBody:
        "Chaque pièce est conçue pour s'intégrer à un vrai vestiaire : facile à combiner, élevée dans la sensation, premium sans devenir précieuse.",
      featuredNoteEyebrow: "Note de collection",
      featuredNoteCta: "Voir toutes les pièces",
      featuredTitle:
        "Un premier edit avec clarté, caractère et espace réel pour vivre dedans.",
      heroDescription:
        "GEORGIAN construit un désir plus silencieux : tailoring moderne, essentiels tactiles et vestiaire pensé pour paraître intentionnel du premier rayon jusqu'au dernier verre.",
      heroEyebrow: "Luxe accessible, distillé.",
      heroPrimaryCta: "Explorer la collection",
      heroSecondaryCta: "Découvrir la marque",
      heroTitle: "Un vestiaire posé pour les heures qui comptent.",
      imageCaption:
        "Des essentiels modernes avec un point de vue plus affûté.",
      imageNote:
        "Hiérarchie nette, contraste tactile et atmosphère premium sans perdre la discipline du commerce.",
      manifestoButton: "Lire la philosophie",
      manifestoEyebrow: "Manifeste",
      manifestoTitle:
        "La sophistication doit sembler proche, portable et instinctivement désirable.",
      materialCardEyebrow: "Langage matière",
      materialCardText:
        "Textures mates, contraste délibéré et accent doré utilisé avec retenue.",
      materialDescription:
        "Le système visuel vise désormais moins de bruit : plus d'air, moins de couches concurrentes et une relation plus claire entre storytelling et produit.",
      materialEyebrow: "Style, matières, design",
      materialTitle:
        "Une humeur premium construite sur le contrôle plutôt que sur l'excès.",
      noteBody:
        "Hiérarchie nette, contraste tactile et atmosphère presque cinématographique qui respecte encore le commerce.",
      noteEyebrow: "Note de collection",
    },
    homePillars: [
      {
        label: "Style",
        text: "Compositions grand format, contrastes silencieux et sens clair de la proportion.",
        title: "Clarté éditoriale",
      },
      {
        label: "Matières",
        text: "Mélanges de laine, chemiserie fluide et knitwear dense avec une vraie main premium.",
        title: "Confiance tactile",
      },
      {
        label: "Design",
        text: "Des pièces élevées dès le premier porter, sans tomber dans le costume.",
        title: "Luxe accessible",
      },
      {
        label: "Vision",
        text: "Des drops saisonniers pensés comme des couches d'un vestiaire plus large et plus durable.",
        title: "Un vestiaire qui dure",
      },
    ],
    legal: {
      privacy: "Confidentialité",
      shipping: "Livraison",
      terms: "Conditions",
    },
    localeName: "Français",
    notFound: {
      body:
        "Revenez à la collection ou replongez dans l'univers de la marque pour continuer à explorer.",
      eyebrow: "Introuvable",
      primary: "Retour à la collection",
      secondary: "Retour à l'accueil",
      title: "La pièce que vous cherchez n'est plus en vue.",
    },
    product: {
      addToBag: "Ajouter au panier",
      addedToBag: "Ajouté au panier",
      adding: "Ajout",
      chapter: "Chapitre 01",
      colour: "Couleur",
      deliveryCopy:
        "Livraison offerte au-delà de €250. Retours sous quatorze jours.",
      productDetails: "Détails du produit",
      readyMessage:
        "{name} en {color}, taille {size}, est prêt pour le checkout.",
      selected: "Sélectionnée",
      size: "Taille",
    },
    productCommon: {
      chapterLabel: "Chapitre 01",
    },
    products: {
      "athena-belted-blazer": {
        colors: ["Encre de minuit", "Calcaire doux"],
        description:
          "Un blazer ceinturé conçu pour apporter forme, aisance et ligne raffinée à la taille.",
        details: [
          "Épaule souplement structurée",
          "Ceinture avec passants discrets",
          "Intérieur entièrement doublé",
          "Poches passepoilées doubles nettes",
        ],
        editorialNote:
          "Pour des entrées qui n'ont pas besoin de s'annoncer à voix haute.",
        fit: "Aisé dans le corps avec une définition contrôlée à la taille.",
        materials: ["65 % laine vierge", "30 % viscose", "5 % élasthanne"],
        mood: "Sculpté",
        name: "Blazer Athena ceinturé",
        story:
          "Le blazer Athena équilibre autorité et douceur. Il affine le denim, élève le pantalon de tailoring et apporte une structure intentionnelle aux essentiels plus silencieux.",
      },
      "atelier-rib-polo": {
        colors: ["Pierre chaude", "Minuit"],
        description:
          "Un polo en maille côtelée entre influence sportive et styling plus habillé.",
        details: [
          "Structure côtelée compacte",
          "Patte minimale",
          "Ouverture de col raffinée",
          "Bas net",
        ],
        editorialNote:
          "Un clin d'œil subtil aux codes classiques, réédité avec plus de retenue.",
        fit: "Épouse le corps avec une proportion moderne légèrement raccourcie.",
        materials: ["83 % viscose", "17 % nylon"],
        mood: "Raffiné",
        name: "Polo côtelé Atelier",
        story:
          "Le polo Atelier prend des codes familiers et les épure pour créer une pièce plus élégante que casual selon le styling.",
      },
      "duoro-trench-coat": {
        colors: ["Beige galet", "Marine noircie"],
        description:
          "Un trench long à front net, large revers et tombé fort mais fluide.",
        details: [
          "Finition déperlante",
          "Ceinture amovible",
          "Storm flap",
          "Intérieur semi-doublé",
        ],
        editorialNote:
          "La couche héro pour un vestiaire qui préfère la présence au bruit.",
        fit: "Long et relâché, pensé pour tomber sur du tailoring ou du knitwear.",
        materials: ["62 % coton", "38 % nylon technique"],
        mood: "Assuré",
        name: "Trench Duoro",
        story:
          "Le trench Duoro est conçu comme un edit final. Il apporte longueur, contraste et confiance au vestiaire sans raideur.",
      },
      "marais-fluid-shirt": {
        colors: ["Ivoire mat", "Ardoise foncée"],
        description:
          "Une chemise fluide à la tombée nette, conçue pour rester polie même avec un styling relâché.",
        details: [
          "Patte cachée",
          "Détail de poignet allongé",
          "Col souple à pointe",
          "Finition au toucher satiné",
        ],
        editorialNote:
          "Un essentiel qui se comporte comme une pièce statement sous la bonne lumière.",
        fit: "Droite dans le corps avec un mouvement élégant au bas.",
        materials: ["68 % lyocell", "32 % coton"],
        mood: "Poli",
        name: "Chemise fluide Marais",
        story:
          "Minimale, nette et très polyvalente, la chemise Marais passe du tailoring au denim sans perdre sa tenue.",
      },
      "nocturne-pleated-skirt": {
        colors: ["Obsidienne", "Sable bruni"],
        description:
          "Une jupe midi plissée à la taille nette et au mouvement juste suffisant pour accrocher la lumière.",
        details: [
          "Construction à plis couteau",
          "Zip latéral invisible",
          "Ourlet légèrement lesté",
          "Doublure satinée",
        ],
        editorialNote:
          "Une silhouette composée avec un mouvement presque cinématographique.",
        fit: "Taille mi-haute avec tombé droit depuis la hanche.",
        materials: ["58 % polyester recyclé", "42 % viscose"],
        mood: "Linéaire",
        name: "Jupe plissée Nocturne",
        story:
          "La jupe Nocturne apporte de la précision plutôt que du drame et fonctionne avec knitwear, chemiserie et outerwear épuré.",
      },
      "seville-column-trouser": {
        colors: ["Noir", "Brume pierre"],
        description:
          "Un pantalon fluide à pinces, à la chute nette et avec assez d'aisance pour traverser la journée.",
        details: [
          "Double pince avant",
          "Ceinture prolongée",
          "Pli marqué",
          "Intérieur de ceinture semi-doublé",
        ],
        editorialNote:
          "Une précision facile à porter du matin jusqu'au dîner tardif.",
        fit: "Taille haute avec jambe longue et doucement fuselée.",
        materials: ["54 % laine", "44 % polyester", "2 % élasthanne"],
        mood: "Fluide",
        name: "Pantalon colonne Seville",
        story:
          "Ce pantalon ancre la collection avec mouvement et clarté. Il pose net sur le corps tout en gardant de la douceur en mouvement.",
      },
      "sierra-wool-overshirt": {
        colors: ["Charbon mousse", "Coquille pâle"],
        description:
          "Une surchemise légère avec présence de manteau et une attitude plus douce pour le quotidien.",
        details: [
          "Poches poitrine oversize",
          "Boutons effet corne",
          "Surface en laine brossée",
          "Bas droit",
        ],
        editorialNote: "Le layering rendu architectural.",
        fit: "Relâchée et légèrement boxy pour se porter sur chemises ou mailles.",
        materials: ["72 % laine", "24 % polyamide", "4 % autres fibres"],
        mood: "Superposé",
        name: "Surchemise Sierra en laine",
        story:
          "La Sierra se situe entre chemise et veste, apportant une finition plus directionnelle aux vestiaires les plus simples.",
      },
      "valencia-merino-knit": {
        colors: ["Sable d'avoine", "Nuit"],
        description:
          "Une maille fine en mérinos au toucher compact et à l'encolure pensée pour se poser net sous le tailoring.",
        details: [
          "Maille mérinos jauge 12",
          "Col et poignets côtelés compacts",
          "Couture d'épaule raffinée",
          "Longueur facile à superposer",
        ],
        editorialNote:
          "La couche silencieuse qui rend les pièces les plus nettes naturelles.",
        fit: "Près du corps sans coller.",
        materials: ["100 % laine mérinos extra-fine"],
        mood: "Silencieux",
        name: "Maille mérinos Valencia",
        story:
          "Pensée comme une pièce de liaison, la Valencia apporte douceur sous les vestes et tenue lorsqu'elle est portée seule.",
      },
    },
    seo: {
      homeDescription:
        "GEORGIAN est une maison de luxe accessible qui compose un vestiaire plus calme et plus posé grâce à des essentiels élevés, un tailoring précis et des finitions tactiles.",
      homeTitle: "GEORGIAN | Luxe accessible, distillé.",
    },
    socialMoodboard: [
      {
        detail: "Études produit en nature morte, textures monochromes et lumière franche.",
        title: "Notes studio",
      },
      {
        detail: "Tailoring silencieux, accents dorés et minimalisme de nuit.",
        title: "After hours",
      },
      {
        detail: "Gros plans matière, labels, tags et architecture de vestiaire.",
        title: "Langage matière",
      },
      {
        detail: "Silhouettes propres entre codes masculins et féminins.",
        title: "Uniforme urbain",
      },
    ],
    sortLabels: {
      featured: "À la une",
      newest: "Nouveautés",
      "price-asc": "Prix croissant",
      "price-desc": "Prix décroissant",
    },
  },
  it: {
    about: {
      description:
        "Scopri la visione di GEORGIAN: lusso accessibile, design tattile, radici sivigliane e una filosofia di guardaroba costruita sulla sicurezza contemporanea.",
      futureCardBody:
        "Meno interruzioni decorative, più respiro e un universo di marca che appare intenzionale prima ancora che carico.",
      futureCardEyebrow: "Direzione",
      futureCardTitle:
        "Un'identità moda forte con spazio per diventare una vera piattaforma commerciale.",
      futureDescription:
        "L'ambizione è chiara: un'etichetta premium emergente con il polish di una maison matura, l'usabilità del retail moderno e un mondo di marca che continua oltre la griglia prodotto attraverso editoriale, comunità e codici visivi forti.",
      futureEyebrow: "Sguardo avanti",
      futureTitle:
        "Pensata per crescere come un vero brand commerce con un punto di vista distinto.",
      heroDescription:
        "GEORGIAN nasce dall'idea che l'eleganza debba sentirsi istintiva. Il brand vive tra modernità pulita, raffinatezza tattile e capi che rendono il vestirsi più semplice, non più complicato.",
      heroEyebrow: "About GEORGIAN",
      heroStats: [
        { label: "Origine", value: "Siviglia" },
        { label: "Posizionamento", value: "Lusso accessibile" },
        { label: "Pubblico", value: "Per tutti" },
      ],
      heroTitle:
        "Una casa di moda contemporanea plasmata da misura, fascino e chiarezza.",
      principlesDescription:
        "Questi principi mantengono il brand allineato mentre passa da una prima capsule forte a un ecosistema completo di moda e commerce.",
      principlesEyebrow: "Principi del brand",
      principlesTitle: "Il design come identità, non come decorazione.",
    },
    aboutChapters: [
      {
        eyebrow: "Origine",
        text: "GEORGIAN prende da Siviglia la luce del sud, il ritmo architettonico e la sicurezza del vestirsi con intenzione. Il risultato è un linguaggio di guardaroba pulito, sensuale e radicato.",
        title: "Nato a Siviglia, costruito per un mondo più ampio.",
      },
      {
        eyebrow: "Filosofia",
        text: "Il brand non è costruito sullo spettacolo, ma su proporzione, texture e quella lucidità discreta che si muove tra giorno, lavoro, cena e viaggio.",
        title: "Premium senza eccesso teatrale.",
      },
      {
        eyebrow: "Comunità",
        text: "Uomini e donne tra i diciotto e i cinquanta anni arrivano da GEORGIAN per un design elevato ma indossabile, con abbastanza carattere da restare memorabile e abbastanza misura da durare.",
        title: "Per chi vuole apparire composto in fretta.",
      },
    ],
    collection: {
      allPieces: "Tutti i capi",
      description:
        "Un catalogo editoriale pulito, progettato per sembrare premium senza risultare carico. Esplora per categoria, affina il punto di vista ed entra direttamente nella storia di ogni capo.",
      editorialBody:
        "La nota laterale resta come contesto, ma l'immagine non compete più con la griglia e il catalogo appare più calmo e più chiaro.",
      editorialEyebrow: "Curatela editoriale",
      editorialTitle:
        "Un catalogo più chiaro, con il prodotto al centro e il linguaggio di marca a supporto.",
      filterByCategory: "Filtra per categoria",
      focus: "Focus",
      heroEyebrow: "Collezione",
      readyBody:
        "Inventario, wishlist, logica filtri e checkout possono crescere su questa struttura senza rompere di nuovo la gerarchia visiva.",
      readyEyebrow: "Pronto a crescere",
      sort: "Ordina",
      sortCollection: "Ordina collezione",
      title: "Un catalogo premium con la disciplina di un edit di guardaroba.",
      visible: "Visibili",
    },
    contact: {
      description:
        "Contatta GEORGIAN per ordini privati, collaborazioni, showroom o accesso alla newsletter e alla community del brand.",
      formDescription:
        "Mantieni il messaggio essenziale e risponderemo con il passo successivo più adatto: risposta diretta, nota showroom o conversazione successiva.",
      formEyebrow: "Invia una richiesta",
      formTitle: "Ordini privati, collaborazioni o conversazioni wholesale.",
      heroDescription:
        "Uno strato di contatto e community pensato per crescere con il brand: richieste private, collaborazioni, esigenze editoriali e newsletter che trasforma l'interesse in relazione continua.",
      heroEyebrow: "Contatto / Community",
      heroStats: [
        { label: "Risposta", value: "Entro 1 giorno" },
        { label: "Focus", value: "Privato + editoriale" },
        { label: "Tono", value: "Vicino, curato" },
      ],
      heroTitle: "Una linea diretta dentro il mondo del brand.",
      newsletterDescription:
        "È qui che il brand diventa più di un negozio. Aspettati preview, direzioni di styling, note di lancio e inviti privati prima che diventino pubblici.",
      newsletterEyebrow: "Newsletter",
      newsletterTitle:
        "Rimani dentro il ritmo di nuovi edit e uscite editoriali.",
    },
    contactMoments: [
      {
        eyebrow: "Newsletter",
        title: "Accesso anticipato a nuovi edit, note di styling e preview private.",
      },
      {
        eyebrow: "Appuntamenti",
        title: "Un canale più vicino per collaborazioni, showroom e wholesale.",
      },
      {
        eyebrow: "Mood social",
        title: "Un feed pensato come diario editoriale, non come muro prodotto.",
      },
    ],
    footer: {
      connect: "Connetti",
      description:
        "GEORGIAN costruisce un guardaroba composto per chi cerca eleganza senza rigidità e design premium senza la distanza del lusso antico.",
      location: "Siviglia, Spagna",
      navigate: "Naviga",
      newsletter: "Newsletter",
    },
    forms: {
      contact: {
        defaultSubject: "Ordine privato",
        emailPlaceholder: "Email",
        idleReply: "Le risposte arrivano di solito entro un giorno lavorativo.",
        messagePlaceholder:
          "Dicci di cosa hai bisogno: ordine privato, collaborazione, richiesta editoriale, wholesale o richiesta generale.",
        namePlaceholder: "Nome",
        sending: "Invio",
        subjectPlaceholder: "Oggetto",
        submit: "Invia richiesta",
        successReply:
          "Messaggio ricevuto. Lo studio risponderà con una risposta curata.",
      },
      newsletter: {
        idle:
          "Preview private, nuovi capitoli e note editoriali dallo studio.",
        join: "Iscriviti",
        placeholder: "Indirizzo email",
        sending: "Invio",
        success:
          "Sei dentro. Aspettati note private, edit di styling e accesso anticipato.",
      },
    },
    general: {
      backToCollection: "Torna alla collezione",
      connect: "Connetti",
      delivery: "Consegna",
      explore: "Esplora",
      materialFocus: "Focus materiali",
      navigate: "Naviga",
      newsletter: "Newsletter",
      productDetails: "Dettagli prodotto",
      relatedEyebrow: "Potrebbe piacerti anche",
      relatedTitle:
        "Capi correlati scelti per lo stesso mood e la stessa silhouette.",
      storytelling: "Racconto",
      viewPiece: "Vedi capo",
    },
    header: {
      cta: "Nuovo edit",
      language: "Lingua",
      nav: {
        about: "Brand",
        collection: "Collezione",
        contact: "Community",
        home: "Home",
      },
      mobileText:
        "Esplora Chapter 01, preview private e il mondo editoriale di GEORGIAN.",
      mobileTitle: "Lusso accessibile, distillato.",
    },
    heroStats: [
      { label: "Disegnato a", value: "Siviglia" },
      { label: "Focus guardaroba", value: "Sartoria + essenziali" },
      { label: "Cadenza", value: "Edit mensili limitati" },
    ],
    home: {
      categoriesEyebrow: "Acquista per focus",
      categoriesTitle:
        "Famiglie di prodotto pensate come guardaroba, non come trend feed.",
      communityDescription:
        "Pensato per un brand che cresce oltre le pagine prodotto: editoriali, preview di lancio, momenti community e future layer commerce hanno già qui una base pulita.",
      communityEyebrow: "Community / newsletter",
      communityTitle:
        "Entra nel cerchio per accessi anticipati, note di styling e il lato privato del brand.",
      featuredDescription:
        "Chapter 01 si costruisce su outerwear più nitido, essenziali fluidi e knitwear che rende la sartoria naturale, non rigida.",
      featuredEyebrow: "Nuova collezione",
      featuredNoteBody:
        "Ogni capo è pensato per integrarsi in un guardaroba reale: facile da combinare, elevato nella percezione e premium senza diventare prezioso.",
      featuredNoteEyebrow: "Nota di collezione",
      featuredNoteCta: "Vedi tutti i capi",
      featuredTitle:
        "Un primo edit con chiarezza, carattere e spazio reale per viverlo.",
      heroDescription:
        "GEORGIAN costruisce un desiderio più silenzioso: sartoria moderna, essenziali tattili e un guardaroba pensato per sentirsi intenzionale dalla prima luce all'ultimo drink.",
      heroEyebrow: "Lusso accessibile, distillato.",
      heroPrimaryCta: "Esplora collezione",
      heroSecondaryCta: "Scopri il brand",
      heroTitle: "Un guardaroba composto per le ore che contano.",
      imageCaption:
        "Essenziali moderni con un punto di vista più affilato.",
      imageNote:
        "Gerarchia pulita, contrasto tattile e un'atmosfera premium senza perdere disciplina commerciale.",
      manifestoButton: "Leggi la filosofia",
      manifestoEyebrow: "Manifesto",
      manifestoTitle:
        "La sofisticazione deve sembrare vicina, indossabile e istintivamente desiderabile.",
      materialCardEyebrow: "Linguaggio materiale",
      materialCardText:
        "Texture opache, contrasto deliberato e un accento dorato usato con misura.",
      materialDescription:
        "Il sistema visivo punta ora a meno rumore: più aria, meno strati in competizione e un rapporto più chiaro tra storytelling e prodotto.",
      materialEyebrow: "Stile, materiali, design",
      materialTitle:
        "Un mood premium costruito sul controllo invece che sull'eccesso.",
      noteBody:
        "Gerarchia pulita, contrasto tattile e un'atmosfera quasi cinematografica che rispetta comunque il commerce.",
      noteEyebrow: "Nota di collezione",
    },
    homePillars: [
      {
        label: "Stile",
        text: "Composizioni ampie, contrasti silenziosi e un chiaro istinto per la proporzione.",
        title: "Chiarezza editoriale",
      },
      {
        label: "Materiali",
        text: "Miscele di lana, camiceria fluida e knitwear denso con una mano davvero premium.",
        title: "Fiducia tattile",
      },
      {
        label: "Design",
        text: "Capi elevati fin dal primo utilizzo senza scivolare nel costume.",
        title: "Lusso accessibile",
      },
      {
        label: "Visione",
        text: "Drop stagionali concepiti come strati di un guardaroba più ampio e duraturo.",
        title: "Un guardaroba che resta",
      },
    ],
    legal: {
      privacy: "Privacy",
      shipping: "Spedizioni",
      terms: "Termini",
    },
    localeName: "Italiano",
    notFound: {
      body:
        "Torna alla collezione o rientra nel mondo del brand per continuare a esplorare.",
      eyebrow: "Non trovato",
      primary: "Torna alla collezione",
      secondary: "Vai alla home",
      title: "Il capo che stai cercando non è più in vista.",
    },
    product: {
      addToBag: "Aggiungi al carrello",
      addedToBag: "Aggiunto al carrello",
      adding: "Aggiunta",
      chapter: "Capitolo 01",
      colour: "Colore",
      deliveryCopy:
        "Consegna gratuita per ordini oltre €250. Resi entro quattordici giorni.",
      productDetails: "Dettagli del prodotto",
      readyMessage:
        "{name} in {color}, taglia {size}, è pronto per il checkout.",
      selected: "Selezionata",
      size: "Taglia",
    },
    productCommon: {
      chapterLabel: "Capitolo 01",
    },
    products: {
      "athena-belted-blazer": {
        colors: ["Inchiostro di mezzanotte", "Calcare morbido"],
        description:
          "Un blazer con cintura pensato per dare forma, facilità e una linea raffinata in vita.",
        details: [
          "Spalla morbidamente strutturata",
          "Cintura con passanti discreti",
          "Interno completamente foderato",
          "Tasche a doppio filetto pulite",
        ],
        editorialNote:
          "Per ingressi che non hanno bisogno di annunciarsi ad alta voce.",
        fit: "Morbido sul corpo con definizione controllata in vita.",
        materials: ["65 % lana vergine", "30 % viscosa", "5 % elastan"],
        mood: "Scolpito",
        name: "Blazer Athena con cintura",
        story:
          "Il blazer Athena bilancia autorità e morbidezza. È pensato per affinare il denim, elevare il pantalone sartoriale e dare struttura intenzionale ai basic più silenziosi.",
      },
      "atelier-rib-polo": {
        colors: ["Pietra calda", "Mezzanotte"],
        description:
          "Una polo in maglia a coste che si muove tra influenza sportiva e styling più elegante.",
        details: [
          "Struttura a coste compatta",
          "Paramontura minima",
          "Apertura del collo raffinata",
          "Fondo pulito",
        ],
        editorialNote:
          "Un cenno sottile ai codici classici, rieditato con più misura.",
        fit: "Segna il corpo con una proporzione moderna leggermente cropped.",
        materials: ["83 % viscosa", "17 % nylon"],
        mood: "Raffinato",
        name: "Polo Atelier a coste",
        story:
          "La polo Atelier prende codici familiari e li asciuga, creando un capo che può leggere più elegante che casual a seconda dello styling.",
      },
      "duoro-trench-coat": {
        colors: ["Beige ciottolo", "Blu navy annerito"],
        description:
          "Un trench lungo con davanti pulito, rever ampio e caduta forte ma fluida.",
        details: [
          "Finitura idrorepellente",
          "Cintura removibile",
          "Dettaglio storm flap",
          "Interno semi foderato",
        ],
        editorialNote:
          "Lo strato protagonista per un guardaroba che preferisce presenza al rumore.",
        fit: "Lungo e rilassato, pensato per cadere su sartoria o knitwear.",
        materials: ["62 % cotone", "38 % nylon tecnico"],
        mood: "Deciso",
        name: "Trench Duoro",
        story:
          "Il trench Duoro è concepito come un edit finale. Porta lunghezza, contrasto e sicurezza al guardaroba senza irrigidirlo.",
      },
      "marais-fluid-shirt": {
        colors: ["Avorio opaco", "Ardesia scura"],
        description:
          "Una camicia fluida dalla caduta pulita, progettata per sembrare curata anche con styling rilassato.",
        details: [
          "Abbottonatura nascosta",
          "Dettaglio polso allungato",
          "Collo morbido a punta",
          "Finitura dal tocco satinato",
        ],
        editorialNote:
          "Un essenziale che si comporta come un pezzo statement quando la luce lo permette.",
        fit: "Dritta sul corpo con movimento elegante sul fondo.",
        materials: ["68 % lyocell", "32 % cotone"],
        mood: "Pulito",
        name: "Camicia fluida Marais",
        story:
          "Minima, nitida e molto versatile, la camicia Marais passa dalla sartoria al denim senza perdere compostezza.",
      },
      "nocturne-pleated-skirt": {
        colors: ["Ossidiana", "Sabbia brunita"],
        description:
          "Una gonna midi plissettata con vita pulita e il movimento giusto per catturare la luce.",
        details: [
          "Costruzione a piega knife",
          "Zip laterale invisibile",
          "Orlo leggermente appesantito",
          "Fodera satinata",
        ],
        editorialNote:
          "Una silhouette composta con un movimento quasi cinematografico.",
        fit: "Vita media con caduta dritta dai fianchi.",
        materials: ["58 % poliestere riciclato", "42 % viscosa"],
        mood: "Lineare",
        name: "Gonna plissé Nocturne",
        story:
          "La gonna Nocturne porta precisione invece di dramma e funziona con knitwear, camiceria e outerwear pulito.",
      },
      "seville-column-trouser": {
        colors: ["Noir", "Nebbia pietra"],
        description:
          "Un pantalone fluido con pinces e caduta pulita, con spazio sufficiente per muoversi durante la giornata.",
        details: [
          "Doppia pince frontale",
          "Cintura allungata",
          "Piega stirata",
          "Interno cintura semi foderato",
        ],
        editorialNote:
          "Precisione facile da indossare, dal mattino alla cena tardi.",
        fit: "Vita alta con gamba lunga e leggermente affusolata.",
        materials: ["54 % lana", "44 % poliestere", "2 % elastan"],
        mood: "Fluido",
        name: "Pantalone colonna Seville",
        story:
          "Questo pantalone ancora la collezione con movimento e chiarezza. Si posa con precisione sul corpo mantenendo morbidezza nel movimento.",
      },
      "sierra-wool-overshirt": {
        colors: ["Carbone muschiato", "Conchiglia chiara"],
        description:
          "Una overshirt leggera con presenza da cappotto e un'attitudine più morbida per ogni giorno.",
        details: [
          "Tasche petto oversize",
          "Bottoni effetto corno",
          "Superficie in lana spazzolata",
          "Orlo dritto",
        ],
        editorialNote: "Layering reso architettonico.",
        fit: "Rilassata e leggermente boxy per sovrapporsi a camicie o knitwear.",
        materials: ["72 % lana", "24 % poliammide", "4 % altre fibre"],
        mood: "A strati",
        name: "Overshirt Sierra in lana",
        story:
          "La Sierra si colloca tra camicia e giacca, portando un finish più direzionale a guardaroba altrimenti semplici.",
      },
      "valencia-merino-knit": {
        colors: ["Sabbia avena", "Notte"],
        description:
          "Una maglia fine in merino con mano compatta e scollo pensato per stare pulito sotto la sartoria.",
        details: [
          "Maglia merino gauge 12",
          "Collo e polsi a coste compatti",
          "Cucitura spalla raffinata",
          "Lunghezza facile da sovrapporre",
        ],
        editorialNote:
          "Lo strato silenzioso che rende naturali i capi più affilati.",
        fit: "Vicino al corpo senza aderire.",
        materials: ["100 % lana merino extrafine"],
        mood: "Silenzioso",
        name: "Maglia merino Valencia",
        story:
          "Pensata come pezzo connettore, la Valencia porta morbidezza sotto le giacche e pulizia quando viene indossata da sola.",
      },
    },
    seo: {
      homeDescription:
        "GEORGIAN è una casa di lusso accessibile che costruisce un guardaroba più calmo e composto attraverso essenziali elevati, sartoria precisa e finiture tattili.",
      homeTitle: "GEORGIAN | Lusso accessibile, distillato.",
    },
    socialMoodboard: [
      {
        detail: "Still life di prodotto, texture monocrome e luce netta.",
        title: "Note di studio",
      },
      {
        detail: "Sartoria silenziosa, accenti dorati e minimalismo da sera.",
        title: "After hours",
      },
      {
        detail: "Close-up di tessuti, etichette, tag e architettura del guardaroba.",
        title: "Linguaggio materiale",
      },
      {
        detail: "Silhouette pulite che attraversano codici maschili e femminili.",
        title: "Uniforme urbano",
      },
    ],
    sortLabels: {
      featured: "In evidenza",
      newest: "Novità",
      "price-asc": "Prezzo crescente",
      "price-desc": "Prezzo decrescente",
    },
  },
  pt: {
    about: {
      description:
        "Descobre a visão da GEORGIAN: luxo acessível, design tátil, origem sevilhana e uma filosofia de guarda-roupa construída sobre confiança contemporânea.",
      futureCardBody:
        "Menos interrupções decorativas, mais respiro entre blocos e um universo de marca que parece intencional antes de parecer carregado.",
      futureCardEyebrow: "Direção",
      futureCardTitle:
        "Uma identidade de moda forte com espaço para se tornar uma plataforma de commerce séria.",
      futureDescription:
        "A ambição é clara: uma marca premium emergente com o polimento de uma casa madura, a usabilidade do retalho moderno e um universo de marca que continua para lá da grelha de produto.",
      futureEyebrow: "Olhar em frente",
      futureTitle:
        "Construída para crescer como uma verdadeira marca de commerce com ponto de vista próprio.",
      heroDescription:
        "A GEORGIAN nasce da ideia de que a elegância deve parecer instintiva. A marca vive entre modernidade limpa, refinamento tátil e peças que tornam vestir-se mais simples, nunca mais complicado.",
      heroEyebrow: "Sobre a GEORGIAN",
      heroStats: [
        { label: "Origem", value: "Sevilha" },
        { label: "Posicionamento", value: "Luxo acessível" },
        { label: "Público", value: "Para todos" },
      ],
      heroTitle:
        "Uma casa de moda contemporânea moldada por contenção, atração e clareza.",
      principlesDescription:
        "Estes princípios mantêm a marca alinhada enquanto evolui de um primeiro edit forte para um ecossistema completo de moda e commerce.",
      principlesEyebrow: "Princípios da marca",
      principlesTitle: "Design como identidade, não como decoração.",
    },
    aboutChapters: [
      {
        eyebrow: "Origem",
        text: "A GEORGIAN recolhe de Sevilha a luz do sul, o ritmo arquitetónico e a confiança de se vestir com intenção. O resultado é uma linguagem de guarda-roupa limpa, sensual e assente.",
        title: "Nascida em Sevilha, construída para um mundo mais amplo.",
      },
      {
        eyebrow: "Filosofia",
        text: "A marca não se constrói sobre espetáculo, mas sobre proporção, textura e aquele polimento discreto que atravessa dia, trabalho, jantar e viagem.",
        title: "Premium sem excesso teatral.",
      },
      {
        eyebrow: "Comunidade",
        text: "Homens e mulheres entre dezoito e cinquenta anos chegam à GEORGIAN à procura de design elevado mas usável, com caráter suficiente para marcar e contenção suficiente para durar.",
        title: "Para quem quer parecer composto rapidamente.",
      },
    ],
    collection: {
      allPieces: "Todas as peças",
      description:
        "Um catálogo editorial limpo, pensado para parecer premium sem ficar sobrecarregado. Explora por categoria, afina o ponto de vista e entra diretamente na história de cada peça.",
      editorialBody:
        "A nota lateral mantém-se como contexto, mas a imagem já não compete com a grelha, por isso o catálogo parece mais calmo e mais claro.",
      editorialEyebrow: "Curadoria editorial",
      editorialTitle:
        "Um catálogo mais claro, com o produto em primeiro plano e a marca em apoio.",
      filterByCategory: "Filtrar por categoria",
      focus: "Foco",
      heroEyebrow: "Coleção",
      readyBody:
        "Inventário, wishlist, lógica de filtros e checkout podem crescer sobre esta estrutura sem voltar a quebrar a hierarquia visual.",
      readyEyebrow: "Pronto para escalar",
      sort: "Ordenar",
      sortCollection: "Ordenar coleção",
      title: "Um catálogo premium com a disciplina de um edit de guarda-roupa.",
      visible: "Visíveis",
    },
    contact: {
      description:
        "Contacta a GEORGIAN para pedidos privados, colaborações, showroom ou acesso à newsletter e à comunidade da marca.",
      formDescription:
        "Mantém a mensagem concisa e responderemos com o passo seguinte adequado, seja resposta direta, nota de showroom ou conversa posterior.",
      formEyebrow: "Enviar pedido",
      formTitle: "Pedidos privados, colaborações ou conversas wholesale.",
      heroDescription:
        "Uma camada de contacto e comunidade pensada para crescer com a marca: pedidos privados, colaborações, pedidos editoriais e uma newsletter que transforma interesse em relação contínua.",
      heroEyebrow: "Contacto / Comunidade",
      heroStats: [
        { label: "Resposta", value: "Em 1 dia" },
        { label: "Foco", value: "Privado + editorial" },
        { label: "Tom", value: "Próximo, cuidado" },
      ],
      heroTitle: "Uma linha direta para o universo da marca.",
      newsletterDescription:
        "É aqui que a marca se torna mais do que uma loja. Espera previews, direções de styling, notas de lançamento e convites privados antes de se tornarem públicos.",
      newsletterEyebrow: "Newsletter",
      newsletterTitle:
        "Fica dentro do ritmo de novos edits e lançamentos editoriais.",
    },
    contactMoments: [
      {
        eyebrow: "Newsletter",
        title: "Acesso antecipado a novos edits, notas de styling e previews privados.",
      },
      {
        eyebrow: "Appointments",
        title: "Uma linha mais próxima para colaborações, showroom e wholesale.",
      },
      {
        eyebrow: "Mood social",
        title: "Um feed pensado como diário editorial, e não como parede de produto.",
      },
    ],
    footer: {
      connect: "Ligar",
      description:
        "A GEORGIAN constrói um guarda-roupa composto para quem procura elegância sem rigidez e design premium sem a distância do luxo antigo.",
      location: "Sevilha, Espanha",
      navigate: "Navegar",
      newsletter: "Newsletter",
    },
    forms: {
      contact: {
        defaultSubject: "Pedido privado",
        emailPlaceholder: "Email",
        idleReply: "As respostas chegam normalmente em um dia útil.",
        messagePlaceholder:
          "Diz-nos o que precisas: pedido privado, colaboração, pedido editorial, wholesale ou pedido geral.",
        namePlaceholder: "Nome",
        sending: "A enviar",
        subjectPlaceholder: "Assunto",
        submit: "Enviar pedido",
        successReply:
          "Mensagem recebida. O estúdio responderá com uma resposta cuidada.",
      },
      newsletter: {
        idle:
          "Previews privados, novos capítulos e notas editoriais do estúdio.",
        join: "Entrar",
        placeholder: "Endereço de email",
        sending: "A enviar",
        success:
          "Já estás dentro. Espera notas privadas, edits de styling e acesso antecipado.",
      },
    },
    general: {
      backToCollection: "Voltar à coleção",
      connect: "Ligar",
      delivery: "Entrega",
      explore: "Explorar",
      materialFocus: "Foco material",
      navigate: "Navegar",
      newsletter: "Newsletter",
      productDetails: "Detalhes do produto",
      relatedEyebrow: "Também podes gostar",
      relatedTitle:
        "Peças relacionadas escolhidas pelo mesmo mood e pela mesma silhueta.",
      storytelling: "Narrativa",
      viewPiece: "Ver peça",
    },
    header: {
      cta: "Novo edit",
      language: "Idioma",
      nav: {
        about: "Marca",
        collection: "Coleção",
        contact: "Comunidade",
        home: "Início",
      },
      mobileText:
        "Explora o Chapter 01, previews privados e o mundo editorial da GEORGIAN.",
      mobileTitle: "Luxo acessível, destilado.",
    },
    heroStats: [
      { label: "Desenhado em", value: "Sevilha" },
      { label: "Foco de guarda-roupa", value: "Sartoria + essenciais" },
      { label: "Cadência", value: "Edits mensais limitados" },
    ],
    home: {
      categoriesEyebrow: "Comprar por foco",
      categoriesTitle:
        "Famílias de produto pensadas como guarda-roupa, não como feed de tendência.",
      communityDescription:
        "Pensado para uma marca que cresce para lá das páginas de produto: editoriais, previews de lançamento, momentos de comunidade e futuras camadas de commerce já têm aqui uma base limpa.",
      communityEyebrow: "Comunidade / newsletter",
      communityTitle:
        "Entra no círculo para acesso antecipado, notas de styling e o lado privado da marca.",
      featuredDescription:
        "Chapter 01 constrói-se sobre outerwear mais definido, essenciais fluidos e knitwear que faz a sartoria parecer natural, e não rígida.",
      featuredEyebrow: "Nova coleção",
      featuredNoteBody:
        "Cada peça foi pensada para integrar um guarda-roupa real: fácil de combinar, elevada na sensação e premium sem se tornar preciosa.",
      featuredNoteEyebrow: "Nota de coleção",
      featuredNoteCta: "Ver todas as peças",
      featuredTitle:
        "Um primeiro edit com clareza, caráter e espaço real para viver dentro dele.",
      heroDescription:
        "A GEORGIAN constrói um desejo mais silencioso: sartoria moderna, essenciais táteis e um guarda-roupa pensado para parecer intencional da primeira luz ao último copo.",
      heroEyebrow: "Luxo acessível, destilado.",
      heroPrimaryCta: "Explorar coleção",
      heroSecondaryCta: "Descobrir a marca",
      heroTitle: "Um guarda-roupa sereno para as horas que importam.",
      imageCaption:
        "Essenciais modernos com um ponto de vista mais afiado.",
      imageNote:
        "Hierarquia limpa, contraste tátil e uma atmosfera premium sem perder disciplina comercial.",
      manifestoButton: "Ler a filosofia",
      manifestoEyebrow: "Manifesto",
      manifestoTitle:
        "A sofisticação deve parecer próxima, usável e instintivamente desejável.",
      materialCardEyebrow: "Linguagem material",
      materialCardText:
        "Texturas mate, contraste deliberado e um acento dourado usado com contenção.",
      materialDescription:
        "O sistema visual procura agora menos ruído: mais ar, menos camadas a competir e uma relação mais clara entre storytelling e produto.",
      materialEyebrow: "Estilo, materiais, design",
      materialTitle:
        "Um mood premium construído a partir do controlo, e não do excesso.",
      noteBody:
        "Hierarquia limpa, contraste tátil e uma atmosfera quase cinematográfica que continua a respeitar o commerce.",
      noteEyebrow: "Nota de coleção",
    },
    homePillars: [
      {
        label: "Estilo",
        text: "Composições amplas, contrastes silenciosos e um instinto claro para a proporção.",
        title: "Clareza editorial",
      },
      {
        label: "Materiais",
        text: "Misturas de lã, camiseria fluida e knitwear denso com mão realmente premium.",
        title: "Confiança tátil",
      },
      {
        label: "Design",
        text: "Peças elevadas desde a primeira utilização sem cair no disfarce.",
        title: "Luxo acessível",
      },
      {
        label: "Visão",
        text: "Drops sazonais concebidos como camadas de um guarda-roupa mais amplo e duradouro.",
        title: "Um guarda-roupa que permanece",
      },
    ],
    legal: {
      privacy: "Privacidade",
      shipping: "Envios",
      terms: "Termos",
    },
    localeName: "Português",
    notFound: {
      body:
        "Volta à coleção ou regressa ao universo da marca para continuar a explorar.",
      eyebrow: "Não encontrado",
      primary: "Voltar à coleção",
      secondary: "Ir para o início",
      title: "A peça que procuras já não está em cena.",
    },
    product: {
      addToBag: "Adicionar ao carrinho",
      addedToBag: "Adicionado ao carrinho",
      adding: "A adicionar",
      chapter: "Capítulo 01",
      colour: "Cor",
      deliveryCopy:
        "Entrega gratuita em encomendas acima de €250. Devoluções dentro de catorze dias.",
      productDetails: "Detalhes do produto",
      readyMessage:
        "{name} em {color}, tamanho {size}, está pronto para checkout.",
      selected: "Selecionada",
      size: "Tamanho",
    },
    productCommon: {
      chapterLabel: "Capítulo 01",
    },
    products: {
      "athena-belted-blazer": {
        colors: ["Tinta da meia-noite", "Calcário suave"],
        description:
          "Um blazer com cinto pensado para dar forma, facilidade e uma linha refinada na cintura.",
        details: [
          "Ombro suavemente estruturado",
          "Cinto próprio com presilhas discretas",
          "Interior totalmente forrado",
          "Bolsos duplos embutidos limpos",
        ],
        editorialNote:
          "Para entradas que não precisam de se anunciar em voz alta.",
        fit: "Solto no corpo com definição controlada na cintura.",
        materials: ["65 % lã virgem", "30 % viscose", "5 % elastano"],
        mood: "Esculpido",
        name: "Blazer Athena com cinto",
        story:
          "O blazer Athena equilibra autoridade e suavidade. Foi pensado para afiar o denim, elevar a alfaiataria e trazer estrutura intencional a básicos mais silenciosos.",
      },
      "atelier-rib-polo": {
        colors: ["Pedra quente", "Meia-noite"],
        description:
          "Um polo em malha canelada que se move entre influência desportiva e styling mais elegante.",
        details: [
          "Estrutura canelada compacta",
          "Carcela mínima",
          "Abertura de gola refinada",
          "Baínha limpa",
        ],
        editorialNote:
          "Uma referência subtil a códigos clássicos, reeditada com mais contenção.",
        fit: "Acompanha o corpo com uma proporção moderna ligeiramente curta.",
        materials: ["83 % viscose", "17 % nylon"],
        mood: "Refinado",
        name: "Polo Atelier canelado",
        story:
          "O polo Atelier pega em códigos familiares e depura-os, criando uma peça que pode parecer mais elegante do que casual consoante o styling.",
      },
      "duoro-trench-coat": {
        colors: ["Bege seixo", "Navy escurecido"],
        description:
          "Um trench comprido com frente limpa, lapela larga e queda forte mas fluida.",
        details: [
          "Acabamento repelente à água",
          "Cinto removível",
          "Detalhe storm flap",
          "Interior semi-forrado",
        ],
        editorialNote:
          "A camada protagonista para um guarda-roupa que prefere presença a ruído.",
        fit: "Comprido e relaxado, pensado para cair sobre alfaiataria ou knitwear.",
        materials: ["62 % algodão", "38 % nylon técnico"],
        mood: "Marcante",
        name: "Trench Duoro",
        story:
          "O trench Duoro foi concebido como um edit final. Traz comprimento, contraste e confiança ao guarda-roupa sem o tornar rígido.",
      },
      "marais-fluid-shirt": {
        colors: ["Marfim mate", "Ardósia escura"],
        description:
          "Uma camisa fluida com queda limpa, desenhada para parecer polida mesmo em styling descontraído.",
        details: [
          "Carcela escondida",
          "Detalhe de punho alongado",
          "Gola suave de ponta",
          "Acabamento de toque acetinado",
        ],
        editorialNote:
          "Um essencial que se comporta como peça statement na luz certa.",
        fit: "Direita no corpo com movimento elegante na bainha.",
        materials: ["68 % lyocell", "32 % algodão"],
        mood: "Polido",
        name: "Camisa fluida Marais",
        story:
          "Minimal, nítida e muito versátil, a camisa Marais passa da alfaiataria ao denim sem perder compostura.",
      },
      "nocturne-pleated-skirt": {
        colors: ["Obsidiana", "Areia brunida"],
        description:
          "Uma saia midi plissada com cintura limpa e o movimento certo para captar a luz.",
        details: [
          "Construção de plissado faca",
          "Fecho lateral invisível",
          "Bainha suavemente pesada",
          "Forro acetinado",
        ],
        editorialNote:
          "Uma silhueta composta com movimento quase cinematográfico.",
        fit: "Cintura média com queda reta desde a anca.",
        materials: ["58 % poliéster reciclado", "42 % viscose"],
        mood: "Linear",
        name: "Saia plissada Nocturne",
        story:
          "A saia Nocturne traz precisão em vez de drama e funciona com knitwear, camisas e outerwear limpo.",
      },
      "seville-column-trouser": {
        colors: ["Noir", "Bruma pedra"],
        description:
          "Umas calças fluidas com pregas e queda limpa, com espaço suficiente para se mover ao longo do dia.",
        details: [
          "Duas pregas frontais",
          "Cintura alongada",
          "Vinco passado a ferro",
          "Interior da cintura meio forrado",
        ],
        editorialNote:
          "Precisão fácil de usar do início do dia até ao jantar tardio.",
        fit: "Cintura subida com perna longa e suavemente afunilada.",
        materials: ["54 % lã", "44 % poliéster", "2 % elastano"],
        mood: "Fluido",
        name: "Calça coluna Seville",
        story:
          "Estas calças ancoram a coleção com movimento e clareza. Assentam com precisão no corpo enquanto mantêm suavidade em movimento.",
      },
      "sierra-wool-overshirt": {
        colors: ["Carvão musgo", "Concha pálida"],
        description:
          "Uma overshirt leve com presença de casaco e uma atitude mais suave para o dia a dia.",
        details: [
          "Bolsos de peito oversize",
          "Botões efeito chifre",
          "Superfície em lã escovada",
          "Bainha reta",
        ],
        editorialNote: "Camadas resolvidas com arquitetura.",
        fit: "Relaxada e ligeiramente boxy para usar sobre camisas ou knitwear.",
        materials: ["72 % lã", "24 % poliamida", "4 % outras fibras"],
        mood: "Em camadas",
        name: "Overshirt Sierra em lã",
        story:
          "A Sierra situa-se entre camisa e casaco, trazendo um acabamento mais direcional a guarda-roupas por outro lado simples.",
      },
      "valencia-merino-knit": {
        colors: ["Areia de aveia", "Noite"],
        description:
          "Uma malha fina de merino com mão compacta e decote pensado para assentar limpo sob alfaiataria.",
        details: [
          "Malha merino gauge 12",
          "Gola e punhos canelados compactos",
          "Costura de ombro refinada",
          "Comprimento fácil para sobreposição",
        ],
        editorialNote:
          "A camada silenciosa que faz com que peças mais definidas pareçam naturais.",
        fit: "Próxima ao corpo sem colar.",
        materials: ["100 % lã merino extrafina"],
        mood: "Silencioso",
        name: "Malha merino Valencia",
        story:
          "Pensada como peça conectora, a Valencia traz suavidade sob casacos e polimento quando é usada sozinha.",
      },
    },
    seo: {
      homeDescription:
        "A GEORGIAN é uma casa de luxo acessível que constrói um guarda-roupa mais calmo e mais composto através de essenciais elevados, alfaiataria precisa e acabamentos táteis.",
      homeTitle: "GEORGIAN | Luxo acessível, destilado.",
    },
    socialMoodboard: [
      {
        detail: "Estudos de produto em natureza-morta, texturas monocromáticas e luz marcada.",
        title: "Notas de estúdio",
      },
      {
        detail: "Alfaiataria silenciosa, acentos dourados e minimalismo pronto para a noite.",
        title: "After hours",
      },
      {
        detail: "Close-ups de tecido, etiquetas, tags e arquitetura de guarda-roupa.",
        title: "Linguagem material",
      },
      {
        detail: "Silhuetas limpas que se movem entre códigos masculinos e femininos.",
        title: "Uniforme urbano",
      },
    ],
    sortLabels: {
      featured: "Em destaque",
      newest: "Novidades",
      "price-asc": "Preço crescente",
      "price-desc": "Preço decrescente",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[typeof defaultLocale];

export function resolveLocale(value?: string): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}

export function getDictionary(locale: Locale) {
  return dictionaries[resolveLocale(locale)];
}

export function getLocaleFromSearchParams(
  searchParams?: Record<string, string | string[] | undefined>,
) {
  const lang = searchParams?.lang;
  const value = typeof lang === "string" ? lang : undefined;

  return resolveLocale(value);
}

export function buildLocalizedHref(
  path: string,
  locale: Locale,
  extraParams?: Record<string, string | undefined>,
) {
  const [pathname, queryString] = path.split("?");
  const params = new URLSearchParams(queryString ?? "");

  if (extraParams) {
    Object.entries(extraParams).forEach(([key, value]) => {
      if (!value) {
        params.delete(key);
        return;
      }

      params.set(key, value);
    });
  }

  if (locale === defaultLocale) {
    params.delete("lang");
  } else {
    params.set("lang", locale);
  }

  const query = params.toString();
  return query ? `${pathname}?${query}` : pathname;
}

export function formatLocalizedMessage(
  template: string,
  replacements: Record<string, string>,
) {
  return Object.entries(replacements).reduce(
    (current, [key, value]) => current.replaceAll(`{${key}}`, value),
    template,
  );
}
