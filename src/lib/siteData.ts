/*
  ======================================
  CONFIGURACIÓN GLOBAL DEL SITIO
  ======================================
  TODO lo editable vive aquí.
  Esta estructura permite escalar a múltiples clientes.
*/

export const siteData = {
  /*
  ===============================
  DATOS GENERALES
  ===============================
  */
  name: "Centro Turístico Caviahue",
  domain: "https://tudominio.cl", // cambiar cuando tengas dominio real
  phoneDisplay: "+56 9 6735 4165",
  whatsappNumber: "56967354165",
  email: "contacto@caviahue.cl",

  /*
  ===============================
  SEO
  ===============================
  */
  seo: {
    title:
      "Cabañas en Santa Bárbara | Centro Turístico Caviahue",
    description:
      "Cabañas, Tinyhouse, Glamping y Camping en Santa Bárbara, Región del Biobío. Vive la naturaleza y reserva tu experiencia.",
    keywords: [
      "cabañas en Santa Bárbara",
      "camping Santa Bárbara",
      "tinaja Santa Bárbara",
      "glamping Biobío",
      "alojamiento Región del Biobío",
    ],
    ogImage: "/hero3.png",
  },
  /*
  ===============================
  HERO
  ===============================
  */
  heroTitle: "Vive la naturaleza en Caviahue",
  heroSubtitle: "Cabañas, Tinyhouse, Glamping y Camping",
  /*
  ===============================
  HERO IMAGES
  ===============================
  */
 heroImages: [
  "/hero1.webp",
  "/hero2.webp",
  "/hero3.webp",
  "/hero4.webp"
],

  /*
  ===============================
  UBICACIÓN
  ===============================
  */
  location: {
  address: "Centro Turístico Caviahue, Santa Bárbara, Región del Biobío, Chile",
  embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.422819031621!2d-72.03219318503698!3d-37.53016617981319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966f416e2f9f0e81%3A0x0!2zMzbCsDMxJzQ2LjAiUyA3MsKwMDInMzYuNSJX!5e0!3m2!1ses!2scl!4v1708416123456",
  mapsLink: "https://maps.app.goo.gl/pxuzs1PYsXyNoYew8",
}
,
  /*
  ===============================
  ALOJAMIENTOS
  ===============================
  */
  accommodations: [
    {
      id: "cabana",
      name: "Cabaña",
      image: "/gallery01.png",
      capacity: "5 personas",
      price: "$150.000 (3 días / 2 noches)",
      description:
        "Amplia cabaña completamente equipada para disfrutar en familia o con amigos.",
      features: [
        "Cocina equipada",
        "Baño privado",
        "Terraza",
        "Entorno natural",
      ],
    },
    {
      id: "tinyhouse",
      name: "Tinyhouse",
      image: "/gallery02.png",
      capacity: "2 personas",
      price: "$80.000 (3 días / 2 noches)",
      description:
        "Experiencia moderna y acogedora ideal para parejas.",
      features: [
        "Diseño moderno",
        "Cocina compacta",
        "Baño privado",
        "Vista panorámica",
      ],
    },
    {
      id: "glamping",
      name: "Glamping",
      image: "/gallery03.png",
      capacity: "2 a 4 personas",
      price: "Desde $50.000",
      description:
        "Comodidad y naturaleza combinadas en una experiencia única.",
      features: [
        "Cama cómoda",
        "Iluminación interior",
        "Zona de fogata",
        "Acceso a baños",
      ],
    },
  ],

  /*
  ===============================
  SERVICIOS EXTRA
  ===============================
  */
  extras: [
  {
    id: "camping",
    title: "Camping",
    description:
      "Espacios habilitados para carpas con acceso a servicios básicos.",
    price: "Desde $7.000",
    image: "/camping.png",
  },
  {
    id: "tinaja",
    title: "Tinaja",
    description:
      "Relájate en nuestra tinaja de agua caliente rodeado de naturaleza.",
    price: "Desde $20.000",
    image: "/tinaja.png",
  },
],



  /*
  ===============================
  CÓMO RESERVAR
  ===============================
  */
  bookingSteps: [
    {
      step: "1",
      title: "Contáctanos por WhatsApp",
      description:
        "Indica fechas, tipo de alojamiento y número de personas.",
    },
    {
      step: "2",
      title: "Confirma disponibilidad",
      description:
        "Te enviaremos valores y datos para realizar el abono.",
    },
    {
      step: "3",
      title: "Realiza el abono",
      description:
        "Se solicita abono previo para confirmar reserva.",
    },
    {
      step: "4",
      title: "Recibe confirmación",
      description:
        "Te enviaremos confirmación oficial con todos los detalles.",
    },
  ],

/*
  ===============================
  Contador de disponibilidad (para generar urgencia sutil)
  ===============================
  */
  availability: {
  cabana: 2,
  tinyhouse: 1,
  glamping: 3
},

  /*
  ===============================
  POLÍTICAS
  ===============================
  */
  policies: {
  payment: [
    "Se solicita abono previo mediante transferencia bancaria.",
    "El saldo restante se paga al momento del check-in."
  ],
  cancellation: [
    "Las reservas pueden reprogramarse con 72 horas de anticipación.",
    "En caso contrario, el abono no es reembolsable."
  ]
}
,

  /*
  ===============================
  GALERÍA
  ===============================
  */
gallery: [
  {
    src: "/gallery01.png",
    alt: "Cabaña exterior rodeada de naturaleza",
    description: "Vista exterior de nuestra cabaña completamente equipada en un entorno natural y tranquilo.",
  },
  {
    src: "/gallery02.png",
    alt: "Interior acogedor Tinyhouse",
    description: "Espacio moderno y cálido ideal para parejas que buscan desconexión.",
  },
  {
    src: "/gallery03.png",
    alt: "Zona de tinaja al atardecer",
    description: "Relájate en nuestra tinaja privada rodeada de bosque y naturaleza.",
  },
  {
    src: "/hero4.webp",
    alt: "Vista nocturna del complejo",
    description: "Ambiente nocturno iluminado que invita al descanso y la desconexión.",
  },
],

  /*
  ===============================
  RESEÑAS
  ===============================
  */
 testimonials: [
  {
    name: "María González",
    comment: "Un lugar maravilloso para desconectarse.",
    rating: 5,
    avatar: "/avatar1.jpg",
    date: "Hace 2 meses",
    stay: "Cabaña",
  },
  {
    name: "Carlos Muñoz",
    comment: "Excelente atención y entorno espectacular.",
    rating: 5,
    avatar: "/avatar2.jpg",
    date: "Hace 1 mes",
    stay: "Tinyhouse",
  },
  {
    name: "Valentina Rojas",
    comment: "La tinaja fue una experiencia increíble.",
    rating: 5,
    avatar: "/avatar3.jpg",
    date: "Hace 3 semanas",
    stay: "Glamping",
  },
]
,

  /*
  ===============================
  FOOTER
  ===============================
  */
  footer: {
    description:
      "Disfruta de una experiencia única en contacto con la naturaleza.",
    social: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
    },
  },
};
