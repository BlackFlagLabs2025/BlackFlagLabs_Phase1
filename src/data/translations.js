// src/data/translations.js

const translations = {
  en: {
    // ===============================
    // HERO
    // ===============================
    hero: {
      title: "We Build Premium Digital Systems",
      subtitle:
        "High-end web development, automations, AI integrations, and elite digital infrastructure engineered with precision.",
      description:
        "We design next-generation systems for brands that demand identity, performance, and unmatched speed.",
      tech: "Next.js • Motion Design • AI-Ready • API-First • Performance-Driven",
      startProject: "Start Your Project",
      viewServices: "View Services",
    },

    // ===============================
    // SELECTED WORK
    // ===============================
    selectedWork: {
      caseStudy: "Case Study",
      live: "LIVE • IN PRODUCTION",
      noProjects: "No projects added yet.",
      title: "Selected Work",
      subtitle:
        "A curated selection of premium software engineered with cutting-edge cyberpunk aesthetics.",
    },

    // ===============================
    // BUNDLES
    // ===============================
    bundles: {
      title: "Choose Your Bundle",
      subtitle: "Pre-packaged solutions designed for different business needs",

      startingAt: "Starting at",
      laterPrice: "Later",
      selectBundle: "Select Bundle",
      selected: "Selected",

      items: {
        starter: {
          name: "Starter Bundle",
          desc: "Simple site, SEO setup and hosting—everything a small business needs to get online fast.",
          target: "Small business",
          features: [
            "Website Design",
            "SEO Optimization",
            "1 Year Hosting",
            "Mobile Responsive",
            "Contact Forms",
          ],
        },
        pro: {
          name: "Pro Bundle",
          desc: "A complete digital presence for startups and SMEs ready to scale.",
          target: "SMEs / Startups",
          features: [
            "Everything in Starter",
            "CMS Integration",
            "E-commerce Ready",
            "Analytics Setup",
            "Email Marketing",
          ],
        },
        growth: {
          name: "Growth Bundle",
          desc: "Powerful marketing automation and advanced SEO to accelerate growth.",
          target: "Scaling brands",
          features: [
            "Everything in Pro",
            "Marketing Automation",
            "A/B Testing",
            "Advanced SEO",
            "Social Integration",
          ],
        },
        enterprise: {
          name: "Enterprise Bundle",
          desc: "Enterprise-grade full-stack development with custom APIs and AI systems.",
          target: "Companies",
          features: [
            "Everything in Growth",
            "Custom API Development",
            "AI Integration",
            "Multi-language",
            "Priority Support",
          ],
        },
        ai: {
          name: "AI-Driven Bundle",
          desc: "Advanced AI automation, multilingual systems, chatbots, ML models and predictive analytics.",
          target: "Tech-focused",
          features: [
            "AI Chatbot",
            "Content Generation",
            "Voice Assistant",
            "ML Models",
            "Predictive Analytics",
          ],
        },
      },
    },

    // ===============================
    // SERVICES
    // ===============================
    services: {
      title: "Custom Services",
      subtitle:
        "Enhance your project with individual services crafted for precision.",

      buildOwn: {
        title: "Build Your Own Project",
        subtitle:
          "Hand-pick the services you need and build a system tailored to your goals.",
        categories: {
  all: "All Services",
  web: "Web Development",
  design: "Design & Branding",
  ai: "AI Integrations",
  marketing: "Marketing",
  support: "Support",
  automation: "Automations"
},
        addToProject: "Add to Project",
        added: "Added",
        regularPrice: "Regular",
      },

      items: {
        d1: { name: "Web Development", desc: "Modern, fully-responsive websites engineered with today's best frameworks." },
        d2: { name: "E-commerce Integration", desc: "Shop systems using Stripe, Lemon Squeezy or Binance Pay—configured and optimized." },
        d3: { name: "CMS Integration", desc: "Sanity, Strapi or Contentful integrations built for scale." },
        d4: { name: "API Development", desc: "Custom backend logic, endpoints and secure API workflows." },
        d5: { name: "Database Setup", desc: "PostgreSQL / MongoDB setup with clean Prisma schema architecture." },
        d6: { name: "Blog System", desc: "Markdown or CMS-based blog with optimized publishing flow." },
        d7: { name: "Multilingual System", desc: "Multi-language support with seamless detection." },
        d8: { name: "Dark/Light Mode", desc: "Theme toggler with full persistence." },
        d9: { name: "Authentication System", desc: "Secure login with JWT sessions." },
        d10:{ name: "Automations & Webhooks", desc: "Automated triggers using Zapier, n8n or custom APIs." },

        des1:{ name: "Website Design", desc: "UI/UX + responsive layouts designed to convert." },
        des2:{ name: "Mobile App Design", desc: "iOS + Android UI with modern patterns." },
        des3:{ name: "Brand Identity", desc: "Logo, color palette and typography system." },
        des4:{ name: "UI/UX Audit", desc: "Expert interface review and usability improvements." },
        des5:{ name: "Design System", desc: "Figma components and tokenized UI foundations." },
        des6:{ name: "Dual Theme Design", desc: "Light + dark UI creation with full consistency." },
        des7:{ name: "Interactive Prototypes", desc: "Animated UI previews using Lottie or custom motion." },
        des8:{ name: "Landing Page Design", desc: "High-conversion landing page UI optimized for clarity." },
        des9:{ name: "Multi-Language UX", desc: "Layout, spacing and typography optimization per language." },
        des10:{ name: "Rebranding Package", desc: "Logo, identity and full visual overhaul." },

        ai1:{ name: "AI Chatbot", desc: "GPT-powered assistant integrated into your website." },
        ai2:{ name: "AI Content Generator", desc: "Automatic content generation for blogs and products." },
        ai3:{ name: "Machine Learning Model", desc: "Custom ML logic with API integration." },
        ai4:{ name: "AI Voice Assistant", desc: "Speech-to-response system with natural output." },
        ai5:{ name: "AI Image Generator", desc: "DALL·E / SD API setup." },
        ai6:{ name: "AI Translator", desc: "Automatic detection + translation engine." },
        ai7:{ name: "AI Email Reply Bot", desc: "Automated reply system with customizable tone." },
        ai8:{ name: "Recommendation Engine", desc: "Personalized content and product suggestions." },
        ai9:{ name: "Predictive Analytics", desc: "Trend forecasting dashboards and insights." },
        ai10:{ name: "LLM Fine-Tuning", desc: "Domain-specific model fine-tuning." },

        m1:{ name: "SEO Optimization", desc: "Keyword research + ranking improvements." },
        m2:{ name: "Google Analytics Setup", desc: "Traffic and behavior tracking." },
        m3:{ name: "Email Marketing", desc: "Mailchimp / SendGrid setup." },
        m4:{ name: "Social Media Automation", desc: "Automated content posting pipeline." },
        m5:{ name: "Content Strategy", desc: "Tone, SEO and structure planning." },
        m6:{ name: "Google Ads Setup", desc: "Campaign setup with conversion tracking." },
        m7:{ name: "Meta Pixel Integration", desc: "Retargeting-ready pixel configuration." },
        m8:{ name: "Reputation Monitoring", desc: "Alerts for comments and mentions." },
        m9:{ name: "SEO Blog Optimization", desc: "Rewrite optimized for search." },
        m10:{ name: "Marketing Dashboard", desc: "Performance metric dashboard." },

        s1:{ name: "Hosting & Maintenance", desc: "One-year hosting + monitoring." },
        s2:{ name: "Technical Support", desc: "Bug fixes + consulting for 3 months." },
        s3:{ name: "Performance Optimization", desc: "Speed and Lighthouse improvements." },
        s4:{ name: "Security Audit", desc: "Security scan and vulnerability report." },
        s5:{ name: "Backup & Recovery", desc: "Secure, automated backup architecture with restore points." },
        s6:{ name: "Cloud Migration", desc: "Move your system to modern hosting with zero downtime." },
        s7:{ name: "Monthly Maintenance", desc: "Ongoing support and improvements." },
        s8:{ name: "Monitoring Dashboard", desc: "Real-time server + traffic monitoring." },
        s9:{ name: "CMS Updates", desc: "Plugin updates and CMS enhancements." },
        s10:{ name: "Domain & SSL Setup", desc: "Secure DNS + SSL launch setup." },
      },
    },

    // ===============================
    // REVIEWS
    // ===============================
    reviews: {
      title: "Client Reviews",
      subtitle: "Discover what clients say about working with Black Flag Labs.",
    },

    // ===============================
    // FAQ
    // ===============================
    faq: {
      title: "Frequently Asked Questions",
    },

    // ===============================
    // CONTACT SECTION
    // ===============================
    contact: {
      title: "Contact",
      subtitle:
        "We reply within a few hours. Tell us about your project and we’ll build something extraordinary.",

      form: {
        title: "Contact Form",
        name: "Your Name",
        email: "Your Email",
        company: "Company (optional)",

        budget: "Budget",
        budgetOptions: {
          select: "Select a budget",
          under500: "Under $500",
          "500-1k": "$500 – $1,000",
          "1k-2k": "$1,000 – $2,000",
          "2k-5k": "$2,000 – $5,000",
          "5k+": "$5,000+",
        },

        timeline: "Timeline",
        timelineOptions: {
          select: "Select a timeline",
          asap: "ASAP",
          month: "Within 1 month",
          quarter: "Within 1 quarter",
          flexible: "Flexible",
        },

        message: "Describe your project...",
        send: "Send Message",
        sending: "Sending...",
        scheduleMeeting: "Schedule Meeting",
        proceedToCheckout: "Checkout →",
      },

      email: "Or email us directly:",
      schedule: "Schedule a meeting",
    },

    // ===============================
    // CASE STUDIES
    // ===============================
    caseStudies: {
      nexusSentinel: {
        backToWork: "Back to Work",
        challengeTitle: "The Challenge",
        solutionTitle: "The Solution",
        featuresTitle: "Core Features",
        techStackTitle: "Tech Stack",
        galleryTitle: "Gallery",
        viewLiveDemo: "View Live Demo",
        challenge:
          "Organizations lacked real-time visibility into network anomalies and distributed threat vectors across global surfaces.",
        solution:
          "Nexus Sentinel AI was engineered as an autonomous cyber-intelligence platform, capable of simulating global telemetry ingestion and projecting live threat indicators using adaptive heuristics and next-gen UI telemetry.",
        features: [
          "Global threat visualization grid",
          "AI-powered risk scoring",
          "Live threat feed with autonomous event classification",
          "Metrics dashboard with simulated high-frequency data",
          "Holographic cyberpunk interface",
        ],
      },
      aetherCommerce: {
        backToWork: "Back to Work",
        challengeTitle: "The Challenge",
        solutionTitle: "The Solution",
        featuresTitle: "Core Features",
        techStackTitle: "Tech Stack",
        galleryTitle: "Gallery",
        viewLiveDemo: "View Live Demo",
        challenge:
          "E-commerce platforms required dynamic pricing and real-time system responsiveness for modern digital brands.",
        solution:
          "Aether Commerce Engine introduced quantum-responsive UI flows, multi-path checkout logic, and AI-assisted dynamic price matrices within a fluid neon interface designed for peak conversion performance.",
        features: [
          "Intelligent pricing engine",
          "High-performance storefront UI",
          "Instant checkout architecture",
          "Modular commerce components",
          "Adaptive product rendering",
        ],
      },
      helixProtocol: {
        backToWork: "Back to Work",
        challengeTitle: "The Challenge",
        solutionTitle: "The Solution",
        featuresTitle: "Core Features",
        techStackTitle: "Tech Stack",
        galleryTitle: "Gallery",
        viewLiveDemo: "View Live Demo",
        challenge:
          "Create a conceptual futuristic operating interface capable of managing modular AI-driven workflows.",
        solution:
          "Helix Protocol UI was designed as a next-gen cyber operating environment, featuring holographic terminals, protocol execution modules, neural activity metrics, and a modular system control grid.",
        features: [
          "Holographic AI terminal",
          "Modular protocol modules",
          "Real-time system simulation",
          "Neon cyberpunk UX",
          "Fully animated control panels",
        ],
      },
    },

    // ===============================
    // FOOTER
    // ===============================
    footer: {
      tagline: "Premium cyber systems for the future.",
      terms: "Terms",
      privacy: "Privacy",
      copyright: "Made with ⚡ by",
      rights: "All rights reserved.",
    },
  },

  // ==================================================================
  // SPANISH
  // ==================================================================
  es: {
    // ===============================
    // HERO
    // ===============================
    hero: {
      title: "Construimos Sistemas Digitales Premium",
      subtitle:
        "Desarrollo web de alto nivel, automatizaciones, integraciones de IA e infraestructura digital élite diseñada con precisión.",
      description:
        "Diseñamos sistemas de próxima generación para marcas que demandan identidad, rendimiento y velocidad inigualable.",
      tech: "Next.js • Motion Design • AI-Ready • API-First • Performance-Driven",
      startProject: "Iniciar Tu Proyecto",
      viewServices: "Ver Servicios",
    },

    // ===============================
    // SELECTED WORK
    // ===============================
    selectedWork: {
      caseStudy: "Estudio de Caso",
      live: "EN VIVO • EN PRODUCCIÓN",
      noProjects: "Aún no hay proyectos agregados.",
      title: "Trabajos Destacados",
      subtitle:
        "Una selección curada de software premium diseñado con estética cyberpunk de vanguardia.",
    },

    // ===============================
    // BUNDLES
    // ===============================
    bundles: {
      title: "Elige Tu Paquete",
      subtitle: "Soluciones preconstruidas para diferentes necesidades",

      startingAt: "Desde",
      laterPrice: "Luego",
      selectBundle: "Seleccionar Paquete",
      selected: "Seleccionado",

      items: {
        starter: {
          name: "Paquete Starter",
          desc: "Sitio simple, configuración SEO y hosting—todo lo que un pequeño negocio necesita para estar en línea rápido.",
          target: "Pequeños negocios",
          features: [
            "Diseño de Sitio Web",
            "Optimización SEO",
            "1 Año de Hosting",
            "Diseño Responsivo",
            "Formularios de Contacto",
          ],
        },
        pro: {
          name: "Paquete Pro",
          desc: "Una presencia digital completa para startups y pymes listas para escalar.",
          target: "Pymes / Startups",
          features: [
            "Todo en Starter",
            "Integración CMS",
            "Listo para E-commerce",
            "Configuración de Analítica",
            "Email Marketing",
          ],
        },
        growth: {
          name: "Paquete Growth",
          desc: "Potente automatización de marketing y SEO avanzado para acelerar el crecimiento.",
          target: "Marcas en crecimiento",
          features: [
            "Todo en Pro",
            "Automatización de Marketing",
            "Pruebas A/B",
            "SEO Avanzado",
            "Integración Social",
          ],
        },
        enterprise: {
          name: "Paquete Enterprise",
          desc: "Desarrollo full-stack de nivel empresarial con APIs personalizadas y sistemas de IA.",
          target: "Empresas",
          features: [
            "Todo en Growth",
            "API Personalizada",
            "Integración de IA",
            "Multi-idioma",
            "Soporte Prioritario",
          ],
        },
        ai: {
          name: "Paquete AI",
          desc: "Automatización avanzada de IA, sistemas multilenguaje, chatbots, modelos ML y analítica predictiva.",
          target: "Enfoque tecnológico",
          features: [
            "Chatbot IA",
            "Generación de Contenido",
            "Asistente por Voz",
            "Modelos ML",
            "Analítica Predictiva",
          ],
        },
      },
    },

    // ===============================
    // SERVICES (CORREGIDO)
    // ===============================
    services: {
      title: "Servicios Personalizados",
      subtitle:
        "Mejora tu proyecto con servicios individuales creados con precisión.",

      buildOwn: {
        title: "Construye Tu Proyecto",
        subtitle:
          "Selecciona los servicios que necesitas y construye un sistema adaptado a tus objetivos.",
        categories: {
  all: "Todos",
  web: "Desarrollo Web",
  design: "Diseño & Branding",
  ai: "Integraciones de IA",
  marketing: "Marketing",
  support: "Soporte Técnico",
  automation: "Automatizaciones"
},
        addToProject: "Agregar al Proyecto",
        added: "Agregado",
        regularPrice: "Regular",
      },

      items: {
        d1: { name: "Desarrollo Web", desc: "Sitios web modernos y totalmente responsivos diseñados con los mejores frameworks actuales." },
        d2: { name: "Integración E-commerce", desc: "Sistemas de tienda usando Stripe, Lemon Squeezy o Binance Pay—configurados y optimizados." },
        d3: { name: "Integración CMS", desc: "Integraciones de Sanity, Strapi o Contentful construidas para escalar." },
        d4: { name: "Desarrollo de API", desc: "Lógica backend personalizada, endpoints y flujos de API seguros." },
        d5: { name: "Configuración de Base de Datos", desc: "Configuración de PostgreSQL / MongoDB con arquitectura de esquema Prisma limpia." },
        d6: { name: "Sistema de Blog", desc: "Blog basado en Markdown o CMS con flujo de publicación optimizado." },
        d7: { name: "Sistema Multilenguaje", desc: "Soporte multiidioma con detección fluida." },
        d8: { name: "Modo Claro/Oscuro", desc: "Conmutador de tema con persistencia completa." },
        d9: { name: "Sistema de Autenticación", desc: "Login seguro con sesiones JWT." },
        d10:{ name: "Automatizaciones & Webhooks", desc: "Disparadores automáticos usando Zapier, n8n o APIs personalizadas." },

        des1:{ name: "Diseño Web", desc: "UI/UX + diseños responsivos diseñados para convertir." },
        des2:{ name: "Diseño App Móvil", desc: "UI para iOS + Android con patrones modernos." },
        des3:{ name: "Identidad de Marca", desc: "Logo, paleta de colores y sistema de tipografía." },
        des4:{ name: "Auditoría UI/UX", desc: "Revisión experta de interfaz y mejoras de usabilidad." },
        des5:{ name: "Design System", desc: "Componentes Figma y fundamentos UI tokenizados." },
        des6:{ name: "Diseño Dual", desc: "Creación de UI clara + oscura con consistencia total." },
        des7:{ name: "Prototipos Interactivos", desc: "Vistas previas de UI animadas usando Lottie o motion personalizado." },
        des8:{ name: "Landing Page", desc: "UI de página de aterrizaje de alta conversión optimizada para claridad." },
        des9:{ name: "UX Multilenguaje", desc: "Optimización de diseño, espaciado y tipografía por idioma." },
        des10:{ name: "Rebranding Total", desc: "Logo, identidad y renovación visual completa." },

        ai1:{ name: "Chatbot de IA", desc: "Asistente potenciado por GPT integrado en tu sitio web." },
        ai2:{ name: "Generador de Contenido IA", desc: "Generación automática de contenido para blogs y productos." },
        ai3:{ name: "Modelo de Machine Learning", desc: "Lógica ML personalizada con integración API." },
        ai4:{ name: "Asistente de Voz IA", desc: "Sistema de voz a respuesta con salida natural." },
        ai5:{ name: "Generador de Imágenes IA", desc: "Configuración de API DALL·E / SD." },
        ai6:{ name: "Sistema de Traducción IA", desc: "Motor de detección automática + traducción." },
        ai7:{ name: "Bot de Correos Automáticos", desc: "Sistema de respuesta automatizada con tono personalizable." },
        ai8:{ name: "Motor de Recomendaciones", desc: "Sugerencias personalizadas de contenido y productos." },
        ai9:{ name: "Analítica Predictiva", desc: "Dashboards de pronóstico de tendencias e insights." },
        ai10:{ name: "Fine-Tuning LLM", desc: "Ajuste de modelo específico por dominio." },

        m1:{ name: "Optimización SEO", desc: "Investigación de palabras clave + mejoras de ranking." },
        m2:{ name: "Google Analytics", desc: "Seguimiento de tráfico y comportamiento." },
        m3:{ name: "Email Marketing", desc: "Configuración de Mailchimp / SendGrid." },
        m4:{ name: "Automatización Social", desc: "Pipeline de publicación de contenido automatizado." },
        m5:{ name: "Estrategia de Contenido", desc: "Planificación de tono, SEO y estructura." },
        m6:{ name: "Google Ads", desc: "Configuración de campaña con seguimiento de conversión." },
        m7:{ name: "Meta Pixel", desc: "Configuración de píxel lista para retargeting." },
        m8:{ name: "Monitoreo de Reputación", desc: "Alertas para comentarios y menciones." },
        m9:{ name: "Optimización de Blog SEO", desc: "Reescritura optimizada para búsqueda." },
        m10:{ name: "Dashboard de Marketing", desc: "Dashboard de métricas de rendimiento." },

        s1:{ name: "Hosting + Mantenimiento", desc: "Hosting de un año + monitoreo." },
        s2:{ name: "Soporte Técnico", desc: "Corrección de errores + consultoría por 3 meses." },
        s3:{ name: "Optimización de Velocidad", desc: "Mejoras de velocidad y Lighthouse." },
        s4:{ name: "Auditoría de Seguridad", desc: "Escaneo de seguridad y reporte de vulnerabilidades." },
        s5:{ name: "Backups & Recovery", desc: "Arquitectura de respaldo segura y automatizada con puntos de restauración." },
        s6:{ name: "Migración a la Nube", desc: "Mueve tu sistema a hosting moderno con cero tiempo de inactividad." },
        s7:{ name: "Mantenimiento Mensual", desc: "Soporte continuo y mejoras." },
        s8:{ name: "Dashboard de Monitoreo", desc: "Monitoreo de servidor + tráfico en tiempo real." },
        s9:{ name: "Actualización CMS", desc: "Actualizaciones de plugins y mejoras de CMS." },
        s10:{ name: "Dominio + SSL", desc: "Configuración de DNS seguro + SSL para lanzamiento." },
      },
    },

    // ===============================
    // REVIEWS
    // ===============================
    reviews: {
      title: "Reseñas de Clientes",
      subtitle: "Descubre lo que dicen los clientes sobre trabajar con Black Flag Labs.",
    },

    // ===============================
    // CONTACT
    // ===============================
    contact: {
      title: "Contacto",
      subtitle:
        "Respondemos en pocas horas. Cuéntanos sobre tu proyecto y construiremos algo extraordinario.",

      form: {
        title: "Formulario de Contacto",
        name: "Tu Nombre",
        email: "Tu Correo",
        company: "Empresa (opcional)",

        budget: "Presupuesto",
        budgetOptions: {
          select: "Selecciona un presupuesto",
          under500: "Menos de $500",
          "500-1k": "$500 – $1,000",
          "1k-2k": "$1,000 – $2,000",
          "2k-5k": "$2,000 – $5,000",
          "5k+": "$5,000+",
        },

        timeline: "Tiempo de Entrega",
        timelineOptions: {
          select: "Selecciona un tiempo",
          asap: "Lo antes posible",
          month: "Dentro de 1 mes",
          quarter: "Dentro de un trimestre",
          flexible: "Flexible",
        },

        message: "Describe tu proyecto...",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        scheduleMeeting: "Agendar Reunión",
        proceedToCheckout: "Pagar →",
      },

      email: "O escríbenos directamente:",
      schedule: "Agendar reunión",
    },

    // ===============================
    // CASE STUDIES (ESPAÑOL)
    // ===============================
    caseStudies: {
      nexusSentinel: {
        backToWork: "Volver al Trabajo",
        challengeTitle: "El Desafío",
        solutionTitle: "La Solución",
        featuresTitle: "Características Principales",
        techStackTitle: "Stack Tecnológico",
        galleryTitle: "Galería",
        viewLiveDemo: "Ver Demo en Vivo",
        challenge:
          "Las organizaciones carecían de visibilidad en tiempo real sobre anomalías de red y vectores de amenaza distribuidos a través de superficies globales.",
        solution:
          "Nexus Sentinel AI fue diseñado como una plataforma autónoma de ciberinteligencia, capaz de simular la ingesta de telemetría global y proyectar indicadores de amenazas en vivo utilizando heurística adaptativa y telemetría UI de próxima generación.",
        features: [
          "Cuadrícula de visualización de amenazas global",
          "Puntuación de riesgo impulsada por IA",
          "Feed de amenazas en vivo con clasificación autónoma de eventos",
          "Panel de métricas con datos simulados de alta frecuencia",
          "Interfaz holográfica cyberpunk",
        ],
      },
      aetherCommerce: {
        backToWork: "Volver al Trabajo",
        challengeTitle: "El Desafío",
        solutionTitle: "La Solución",
        featuresTitle: "Características Principales",
        techStackTitle: "Stack Tecnológico",
        galleryTitle: "Galería",
        viewLiveDemo: "Ver Demo en Vivo",
        challenge:
          "Las plataformas de comercio electrónico requerían precios dinámicos y capacidad de respuesta del sistema en tiempo real para marcas digitales modernas.",
        solution:
          "Aether Commerce Engine introdujo flujos de UI cuántico-responsivos, lógica de pago multivía y matrices de precios dinámicos asistidos por IA dentro de una interfaz de neón fluida diseñada para un rendimiento de conversión máximo.",
        features: [
          "Motor de precios inteligente",
          "UI de tienda de alto rendimiento",
          "Arquitectura de pago instantáneo",
          "Componentes de comercio modulares",
          "Renderizado adaptativo de productos",
        ],
      },
      helixProtocol: {
        backToWork: "Volver al Trabajo",
        challengeTitle: "El Desafío",
        solutionTitle: "La Solución",
        featuresTitle: "Características Principales",
        techStackTitle: "Stack Tecnológico",
        galleryTitle: "Galería",
        viewLiveDemo: "Ver Demo en Vivo",
        challenge:
          "Crear una interfaz operativa futurista conceptual capaz de gestionar flujos de trabajo modulares impulsados por IA.",
        solution:
          "Helix Protocol UI fue diseñado como un entorno operativo cibernético de próxima generación, con terminales holográficas, módulos de ejecución de protocolos, métricas de actividad neuronal y una cuadrícula de control del sistema modular.",
        features: [
          "Terminal de IA holográfica",
          "Módulos de protocolo modulares",
          "Simulación del sistema en tiempo real",
          "UX cyberpunk de neón",
          "Paneles de control completamente animados",
        ],
      },
    },

    // ===============================
    // FOOTER
    // ===============================
    footer: {
      tagline: "Sistemas cyber premium para el futuro.",
      terms: "Términos",
      privacy: "Privacidad",
      copyright: "Hecho con ⚡ por",
      rights: "Todos los derechos reservados.",
    },
  },
};

export default translations;