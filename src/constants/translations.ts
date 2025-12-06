export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      stack: "Stack",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Julio Rubio",
      tagline: "Building digital experiences with code and passion.",
      subtitle: "Computer Engineer | Full Stack & Android Developer crafting scalable solutions.",
      cta: "Get in Touch",
      viewWork: "View My Work",
    },
    about: {
      title: "About Me",
      intro: "I don't just write code; I solve complex real-world problems.",
      description:
        "I am a Computer Engineer with over 2 years of experience developing web and mobile software. Specialized in building scalable solutions and optimizing processes using Agile methodologies. I am currently pursuing a Master's in Computer Engineering.",
      description2:
        "I have successfully delivered 8+ diverse projects, from comprehensive ERP systems to AI-driven agricultural tools. My versatility allows me to adapt to different languages like JavaScript, Python, or Kotlin to build efficient architectures.",
      highlights: {
        experience: "2+ Years Experience",
        projects: "8+ Projects Completed",
        clients: "Global & Local Clients",
      },
    },
    stack: {
      title: "My Tech Stack",
      subtitle: "Technologies I work with to bring ideas to life",
    },
    experience: {
      title: "Experience & Education",
      subtitle: "My professional journey and academic background",
      present: "Present",
      visitCompany: "Company",
      visitInstitution: "Institution",
      viewCertificate: "Certificate",
      jobs: [
        {
          title: "Digital Transformation & Dev Lead",
          company: "Tornimaq",
          period: "Jun 2024 - Jun 2025",
          description:
            "Designed and programmed a custom ERP system (billing, inventory, payroll). Implemented IT infrastructure from scratch, including local cloud and secure networks, automating 100% of critical processes.",
          type: "work",
          companyUrl: null,
          certificateUrl: "",
        },
        {
          title: "Full Stack & Android Developer",
          company: "Casa Creativa",
          period: "Oct 2022 - May 2023",
          description:
            "Developed responsive web applications and scalable e-commerce platforms. Implemented secure authentication and payment gateways, achieving a 40% increase in client conversion rates.",
          type: "work",
          companyUrl: "https://www.casacreativa.io",
          certificateUrl: "",
        },
        {
          title: "Master's in Computer Engineering",
          company: "University of Granada",
          period: "In Progress",
          description:
            "Master's degree in computer engineering, with an emphasis on software development, AI, and project management.",
          type: "education",
          companyUrl: "https://www.ugr.es/",
          certificateUrl: "",
        },
        {
          title: "Systems Engineer Degree",
          company: "Universidad del Magdalena",
          period: "Graduated",
          description:
            "Bachelor's degree with a focus on Software Development. Recipient of Artistic Merit Scholarship.",
          type: "education",
          companyUrl: "https://www.unimagdalena.edu.co/",
          certificateUrl: "https://aws-inku-bucket.s3.eu-north-1.amazonaws.com/DIPLOMA+JULIO+RUBIO.png",
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of my recent work",
      viewCode: "View Code",
      liveDemo: "Go to Website",
      googlePlay: "Google Play",
      privateImplementation: "Private Implementation",
      items: [
        {
          title: "Okarina",
          description:
            "Personal music streaming app for Anime soundtracks. Built with Flutter using Clean Architecture and BLoC pattern for robust state management. Integrates Dio for networking, GetIt for dependency injection, and GoRouter for routing, ensuring scalability. Features custom playlists, multi-language support (EN, ES, PT), and a polished UI.",
          tech: ["Flutter", "Dart", "Bloc", "Clean Arch", "GetIt", "Dio"],
          github: null,
          demo: "https://play.google.com/store/apps/details?id=com.animotion.okarina&hl=es_CO&gl=US",
          image: "https://aws-inku-bucket.s3.eu-north-1.amazonaws.com/okarina.jpg",
        },
        {
          title: "AI Agro-Tech Solution",
          description:
            "AI system for phytopathology detection (Cordana, Sigatoka, Pestalotiopsis) via image recognition in banana crops at all growth stages. It significantly reduces economic losses and enables the prediction of future banana stock for exportation.",
          tech: ["Python", "TensorFlow", "Kotlin", "Firebase", "Firebase Auth"],
          github: "https://github.com/Juliorubiodev/Banana-REPO",
          demo: null,
          image: "https://aws-inku-bucket.s3.eu-north-1.amazonaws.com/ia+agro+tech.png",
        },
        {
          title: "Tornimaq ERP & Private Cloud",
          description:
            "Design and development of a custom ERP that centralized inventory, sales, billing, accounting, payroll, and advisor commission calculations, completely replacing manual management. I also implemented the IT infrastructure from scratch: local private cloud, secure network, servers, and POS terminals, ensuring high availability.",
          tech: ["React", "Node.js", "PostgreSQL", "Docker", "Private Cloud", "Windows Server"],
          github: null,
          demo: null,
          isPrivate: true,
          image: "https://aws-inku-bucket.s3.eu-north-1.amazonaws.com/Tornimaqlogo.png",
        },
        {
          title: "Fashion E-Commerce",
          description:
            "High-performance e-commerce platform built on Shopify for a fashion brand. I developed custom Liquid themes and modules to enhance brand identity, integrated secure local payment gateways, and optimized the entire checkout flow, resulting in a significant increase in sales conversion and user retention.",
          tech: ["Shopify", "Liquid", "PHP", "HTML/CSS", "Firebase", "Firebase Auth"],
          github: null,
          demo: "https://laurentina.com.co/",
          image: "https://aws-inku-bucket.s3.eu-north-1.amazonaws.com/laurentina.png",
        },
      ],
    },
    footer: {
      ready: "Ready to start a project?",
      letsTalk: "Let's build something amazing together.",
      contactMe: "Contact Me",
      downloadResume: "Download Resume",
      copyright: "© 2025 Julio Rubio. Built with React & Love.",
      author: "Julio Rubio · Computer Engineer",
      slogan: "Let’s turn ideas into scalable software.",
      builtWith: "Built with",
    },
    emailCopy: {
      success: "Email copied to clipboard!",
      error: "Failed to copy email",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      stack: "Tecnologías",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Julio Rubio",
      tagline: "Construyendo experiencias digitales con código y pasión.",
      subtitle: "Ingeniero Informático | Desarrollador Full Stack y Android creando soluciones escalables.",
      cta: "Contáctame",
      viewWork: "Ver Mi Trabajo",
    },
    about: {
      title: "Sobre Mí",
      intro: "No solo escribo código; resuelvo problemas reales.",
      description:
        "Soy Ingeniero Informático con más de 2 años de experiencia desarrollando software web y móvil. Me especializo en crear soluciones tecnológicas escalables y optimizar procesos mediante metodologías ágiles. Actualmente me encuentro cursando la Maestría en Ingeniería Informática.",
      description2:
        "He liderado y completado más de 8 proyectos diversos, desde sistemas ERP complejos hasta herramientas de IA para el agro. Mi versatilidad me permite adaptarme a distintos lenguajes como JavaScript, Python o Kotlin para construir arquitecturas eficientes.",
      highlights: {
        experience: "2+ Años de Experiencia",
        projects: "8+ Proyectos Completados",
        clients: "Clientes Globales y Locales",
      },
    },
    stack: {
      title: "Mi Stack Tecnológico",
      subtitle: "Tecnologías que uso para dar vida a las ideas",
    },
    experience: {
      title: "Experiencia y Educación",
      subtitle: "Mi trayectoria profesional y formación académica",
      present: "Presente",
      visitCompany: "Empresa",
      visitInstitution: "Institución",
      viewCertificate: "Certificado",
      jobs: [
        {
          title: "Líder de Desarrollo y Transformación Digital",
          company: "Tornimaq",
          period: "Jun 2024 - Jun 2025",
          description:
            "Diseñé y programé un ERP a medida (facturación, inventario, nómina). Implementé infraestructura IT desde cero, nube local y redes seguras, automatizando el 100% de los procesos críticos.",
          type: "work",
          companyUrl: null,
          certificateUrl: "",
        },
        {
          title: "Desarrollador Full Stack & Android",
          company: "Casa Creativa",
          period: "Oct 2022 - May 2023",
          description:
            "Desarrollo de aplicaciones web responsivas y plataformas de comercio electrónico escalables. Implementación de pasarelas de pago y optimización SEO (+40% conversión).",
          type: "work",
          companyUrl: "https://www.casacreativa.io",
          certificateUrl: "",
        },
        {
          title: "Maestría en Ingeniería Informática",
          company: "Universidad de Granada",
          period: "En Curso",
          description:
            "Maestría en ingeniería informática, con enfasis en desarrollo de software, IA y gestión de proyectos.",
          type: "education",
          companyUrl: "https://www.ugr.es/",
          certificateUrl: "",
        },
        {
          title: "Grado en Ingeniería de Sistemas",
          company: "Universidad del Magdalena",
          period: "Graduado",
          description: "Título profesional con enfoque en desarrollo de software. Ganador de Beca al Mérito Artístico.",
          type: "education",
          companyUrl: "https://www.unimagdalena.edu.co/",
          certificateUrl: "https://aws-inku-bucket.s3.eu-north-1.amazonaws.com/DIPLOMA+JULIO+RUBIO.png",
        },
      ],
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Una selección de mi trabajo reciente",
      viewCode: "Ver Código",
      liveDemo: "Ve al Sitio Web",
      googlePlay: "Google Play",
      privateImplementation: "Implementación Privada",
      items: [
        {
          title: "Okarina",
          description:
            "App de streaming de música anime. Construida en Flutter aplicando Clean Architecture y patrón BLoC para gestión de estado. Integra Dio para peticiones, GetIt para inyección de dependencias y GoRouter para navegación escalable. Cuenta con playlists personalizadas, soporte multi-idioma (ES, EN, PT) y una interfaz optimizada.",
          tech: ["Flutter", "Dart", "Bloc", "Clean Arch", "GetIt", "Dio"],
          github: null,
          demo: "https://play.google.com/store/apps/details?id=com.animotion.okarina&hl=es_CO&gl=US",
          image: "https://aws-inku-bucket.s3.eu-north-1.amazonaws.com/okarina.jpg",
        },
        {
          title: "Solución IA Agro-Tech",
          description:
            "Sistema de Inteligencia Artificial para la detección de fitopatologías (cordana, sigatoka, pestalotiopsis) por reconocimiento de imágenes en cultivos de plátano en todas las etapas de crecimiento, reduciendo pérdidas económicas significativas y permitiendo predecir las existencias futuras de plátanos de cara a la exportación.",
          tech: ["Python", "TensorFlow", "Kotlin", "Firebase", "Firebase Auth"],
          github: "https://github.com/Juliorubiodev/Banana-REPO",
          demo: null,
          image: "https://aws-inku-bucket.s3.eu-north-1.amazonaws.com/ia+agro+tech.png",
        },
        {
          title: "Tornimaq ERP & Nube Privada",
          description:
            "Diseño y desarrollo de un ERP a medida que centralizó inventario, ventas, facturación, contabilidad, nómina y cálculo de comisiones por asesor, reemplazando por completo la gestión manual y mejorando la trazabilidad de la información. También implementé la infraestructura IT desde cero: nube privada local, red segura, servidores y múltiples terminales (POS), con control de accesos y respaldos para asegurar alta disponibilidad y continuidad operativa.",
          tech: ["React", "Node.js", "PostgreSQL", "Docker", "Nube Privada", "Windows Server"],
          github: null,
          demo: null,
          isPrivate: true,
          image: "https://aws-inku-bucket.s3.eu-north-1.amazonaws.com/Tornimaqlogo.png",
        },
        {
          title: "E-Commerce de Moda",
          description:
            "Plataforma de e-commerce de alto rendimiento construida en Shopify para marca de moda. Desarrollé temas y módulos Liquid personalizados para potenciar la identidad de marca, integré pasarelas de pago locales seguras y optimicé todo el flujo de checkout, logrando un aumento significativo en la conversión de ventas y retención de usuarios.",
          tech: ["Shopify", "Liquid", "PHP", "HTML/CSS", "Firebase", "Firebase Auth"],
          github: null,
          demo: "https://laurentina.com.co/",
          image: "https://aws-inku-bucket.s3.eu-north-1.amazonaws.com/laurentina.png",
        },
      ],
    },
    footer: {
      ready: "¿Listo para comenzar un proyecto?",
      letsTalk: "Construyamos algo increíble juntos.",
      contactMe: "Contáctame",
      downloadResume: "Descargar CV",
      copyright: "© 2025 Julio Rubio. Hecho con React y Amor.",
      author: "Julio Rubio · Ingeniero Informático",
      slogan: "Convirtamos tus ideas en software escalable.",
      builtWith: "Construido con",
    },
    emailCopy: {
      success: "¡Email copiado al portapapeles!",
      error: "Error al copiar el email",
    },
  },
} as const;

export type Language = "en" | "es";
export type Translations = typeof translations;
