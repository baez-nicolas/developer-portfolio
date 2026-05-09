import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      skills: 'Stack Tecnológico',
      education: 'Formación',
      projects: 'Proyectos',
      certificates: 'Certificados',
    },
    hero: {
      greeting: 'Hola, soy',
      contact: 'Contacto',
    },
    about: {
      title: 'Acerca de Mí',
      p1: 'Desarrollador Full Stack Jr con sólida formación académica en la <strong>Universidad Tecnológica Nacional (UTN)</strong>. Especializado en arquitecturas modernas web, diseño y desarrollo de aplicaciones completas desde la interfaz de usuario hasta la lógica de negocio y gestión de datos.',
      p2: 'Experiencia comprobable en <strong>Angular, TypeScript, Java Spring Boot y .NET</strong> con múltiples proyectos desplegados en producción. Dominio de patrones de diseño, desarrollo de APIs RESTful, integración con bases de datos relacionales y gestión de control de versiones.',
      p3: 'Enfocado en código limpio, buenas prácticas y metodologías ágiles. Capacidad analítica para resolver problemas complejos, compromiso con la mejora continua y colaboración efectiva en entornos de trabajo profesionales.',
      highlightsTitle: 'Lo que aporto a tu equipo:',
      h1title: 'Desarrollo Full Stack:',
      h1desc: 'Experiencia real construyendo aplicaciones completas de principio a fin',
      h2title: 'Trabajo colaborativo:',
      h2desc: 'Metodologías ágiles Scrum, versionado con Git y comunicación efectiva',
      h3title: 'Aprendizaje rápido:',
      h3desc: 'Adaptación a nuevas tecnologías y frameworks según necesidades del proyecto',
      h4title: 'Profesionalismo:',
      h4desc: 'Responsabilidad, organización y cumplimiento de plazos establecidos',
    },
    skills: {
      title: 'Stack Tecnológico',
      databases: 'Bases de Datos',
    },
    education: {
      title: 'Formación',
      academicTitle: 'Formación Académica',
      ongoing: 'En curso',
      continuousDev: 'Desarrollo Continuo',
      continuousDevDesc: 'Actualización constante en tecnologías y mejores prácticas',
      profileTitle: 'Perfil Profesional',
      profile1:
        'Desarrollador orientado a resultados, buscando incorporarse a equipos que valoren la calidad del código, el crecimiento profesional y el impacto real en productos tecnológicos. Disponibilidad <strong>Full Time</strong> para proyectos desafiantes que impulsen mi carrera en la industria del desarrollo de software.',
      profile2:
        'Abierto a aprender nuevos lenguajes, frameworks y tecnologías según las necesidades del proyecto. Mi capacidad de adaptación y pasión por el aprendizaje continuo me permiten integrarme rápidamente a diferentes stacks tecnológicos.',
    },
    projects: {
      title: 'Mis Proyectos',
      featured: 'Destacado',
      live: 'En vivo',
      codeOnly: 'Solo código',
      modalDescription: 'Descripción del Proyecto',
      modalTech: 'Tecnologías Utilizadas',
      modalLiveDemo: 'Ver Demo en Vivo',
      modalSourceCode: 'Ver Código Fuente',
      modalVideos: 'Videos del Proyecto',
      modalDemo: 'Demostración',
      modalPresentation: 'Presentación',
    },
    certificates: {
      title: 'Certificados',
      verify: 'Ver Certificado',
      inProgress: 'Título en trámite',
    },
    footer: {
      developed: 'Desarrollado con',
      by: 'por',
      educational: 'Fines educativos',
    },
    heroDesc:
      'Angular, JavaScript | Java (Spring Boot) & C# .NET | REST APIs | SQL | Deploy: Railway, Render, Vercel, GitHub Pages',
    location: 'Córdoba, Argentina',
    presentationVideoTitle: 'Presentación Personal',
    educationEntries: [
      {
        institution: 'Centro Educativo Santo Domingo',
        degree: 'Bachiller en Informática',
        location: 'Ciudad de Córdoba',
        period: 'Marzo 2019 – Diciembre 2021',
      },
      {
        institution: 'Coderhouse',
        degree: 'Carrera Frontend (Angular)',
        location: '',
        period: 'Abril 2025 – Noviembre 2025',
      },
      {
        institution: 'Universidad Tecnológica Nacional (UTN)',
        degree: 'Tecnicatura Universitaria en Programación',
        location: '',
        period: 'Marzo 2022 – Diciembre 2025',
      },
      {
        institution: 'Coderhouse',
        degree: 'Carrera Backend',
        location: '',
        period: 'Febrero 2026 – En curso',
      },
    ],
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      skills: 'Tech Stack',
      education: 'Education',
      projects: 'Projects',
      certificates: 'Certificates',
    },
    hero: {
      greeting: "Hi, I'm",
      contact: 'Contact',
    },
    about: {
      title: 'About Me',
      p1: 'Full Stack Jr Developer with a strong academic background at <strong>Universidad Tecnológica Nacional (UTN)</strong>. Specialized in modern web architectures, design and development of complete applications from the user interface to business logic and data management.',
      p2: 'Proven experience with <strong>Angular, TypeScript, Java Spring Boot and .NET</strong> with multiple projects deployed in production. Proficient in design patterns, RESTful API development, relational database integration and version control.',
      p3: 'Focused on clean code, best practices and agile methodologies. Analytical ability to solve complex problems, commitment to continuous improvement and effective collaboration in professional environments.',
      highlightsTitle: 'What I bring to your team:',
      h1title: 'Full Stack Development:',
      h1desc: 'Real experience building complete applications from start to finish',
      h2title: 'Team collaboration:',
      h2desc: 'Agile Scrum methodologies, Git versioning and effective communication',
      h3title: 'Fast learner:',
      h3desc: 'Adapting to new technologies and frameworks based on project needs',
      h4title: 'Professionalism:',
      h4desc: 'Responsibility, organization and meeting established deadlines',
    },
    skills: {
      title: 'Tech Stack',
      databases: 'Databases',
    },
    education: {
      title: 'Education',
      academicTitle: 'Academic Background',
      ongoing: 'Ongoing',
      continuousDev: 'Continuous Development',
      continuousDevDesc: 'Constant updates on technologies and best practices',
      profileTitle: 'Professional Profile',
      profile1:
        'Results-driven developer looking to join teams that value code quality, professional growth and real impact on technology products. <strong>Full Time</strong> availability for challenging projects that advance my career in the software industry.',
      profile2:
        'Open to learning new languages, frameworks and technologies based on project needs. My adaptability and passion for continuous learning allow me to quickly integrate into different tech stacks.',
    },
    projects: {
      title: 'My Projects',
      featured: 'Featured',
      live: 'Live',
      codeOnly: 'Code only',
      modalDescription: 'Project Description',
      modalTech: 'Technologies Used',
      modalLiveDemo: 'View Live Demo',
      modalSourceCode: 'View Source Code',
      modalVideos: 'Project Videos',
      modalDemo: 'Demo',
      modalPresentation: 'Presentation',
    },
    certificates: {
      title: 'Certificates',
      verify: 'View Certificate',
      inProgress: 'Degree in process',
    },
    footer: {
      developed: 'Developed with',
      by: 'by',
      educational: 'Educational purposes',
    },
    heroDesc:
      'Angular, JavaScript | Java (Spring Boot) & C# .NET | REST APIs | SQL | Deploy: Railway, Render, Vercel, GitHub Pages',
    location: 'Córdoba, Argentina',
    presentationVideoTitle: 'Personal Presentation',
    educationEntries: [
      {
        institution: 'Centro Educativo Santo Domingo',
        degree: 'IT High School Diploma',
        location: 'Córdoba City',
        period: 'March 2019 – December 2021',
      },
      {
        institution: 'Coderhouse',
        degree: 'Frontend Career (Angular)',
        location: '',
        period: 'April 2025 – November 2025',
      },
      {
        institution: 'Universidad Tecnológica Nacional (UTN)',
        degree: 'University Technician in Programming',
        location: '',
        period: 'March 2022 – December 2025',
      },
      {
        institution: 'Coderhouse',
        degree: 'Backend Career',
        location: '',
        period: 'February 2026 – Ongoing',
      },
    ],
  },
} as const;

interface Project {
  id: number;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  technologies: string[];
  image: string;
  logo: string;
  videoDemo?: string;
  videoMarketing?: string;
  githubLink: string;
  deployLink?: string;
  featured: boolean;
  priority: number;
}

interface Certificate {
  id: number;
  title: string;
  titleEn?: string;
  institution: string;
  date: string;
  dateEn?: string;
  image: string;
  verifyLink?: string;
  status?: string;
  statusEn?: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('Nicolás Báez | Full Stack Developer Jr');
  protected readonly currentYear = new Date().getFullYear();

  protected lang = signal<'es' | 'en'>((localStorage.getItem('lang') as 'es' | 'en') ?? 'es');
  protected t = computed(() => translations[this.lang()]);

  toggleLanguage(): void {
    const next = this.lang() === 'es' ? 'en' : 'es';
    this.lang.set(next);
    localStorage.setItem('lang', next);
  }

  protected selectedProject = signal<Project | null>(null);
  protected selectedCertificate = signal<Certificate | null>(null);

  protected videoDemoUrl = computed(() => {
    const project = this.selectedProject();
    if (project?.videoDemo) {
      return this.getYouTubeEmbedUrl(project.videoDemo);
    }
    return null;
  });

  protected videoMarketingUrl = computed(() => {
    const project = this.selectedProject();
    if (project?.videoMarketing) {
      return this.getYouTubeEmbedUrl(project.videoMarketing);
    }
    return null;
  });

  protected readonly presentationVideoUrl = computed(() =>
    this.getYouTubeEmbedUrl('https://www.youtube.com/watch?v=y27RnEolsBQ'),
  );

  protected showScrollButton = signal(false);
  protected scrollDirection = signal<'up' | 'down'>('up');
  protected activeSection = signal('home');
  private lastScrollTop = 0;

  private preventScroll = (e: Event) => {
    const target = e.target as HTMLElement;
    const modalContainer = target.closest('.modal-container');
    if (modalContainer) {
      return true;
    }

    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        this.scrollToSection(sectionId);
      }, 100);
    }

    window.addEventListener('scroll', this.handleScroll);
  }

  private handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    this.showScrollButton.set(scrollTop > 300);

    if (scrollTop > this.lastScrollTop) {
      this.scrollDirection.set('down');
    } else {
      this.scrollDirection.set('up');
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    const sections = ['certificates', 'projects', 'formacion', 'skills', 'about', 'home'];
    const offset = 200;

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset) {
          if (this.activeSection() !== sectionId) {
            this.activeSection.set(sectionId);
            history.replaceState(null, '', `#${sectionId}`);
          }
          break;
        }
      }
    }
  };

  handleScrollButtonClick(): void {
    if (this.scrollDirection() === 'up') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  }

  protected readonly projects: Project[] = [
    {
      id: 1,
      title: 'CineBook',
      description:
        'CineBook es una aplicación web full-stack para la reserva de entradas de cine. Explorá películas en cartelera, elegí tu cine favorito, seleccioná asientos y gestioná tus reservas con una interfaz moderna y responsive.',
      descriptionEn:
        'CineBook is a full-stack web app for movie ticket reservations. Browse now-showing films, pick your favorite cinema, choose your seats and manage your bookings with a modern, responsive interface.',
      technologies: [
        'Angular',
        'Spring Boot',
        'PostgreSQL',
        'Docker',
        'TypeScript',
        'Java',
        'Railway',
      ],
      image: 'cinebook/cinebookPortada.png',
      logo: 'cinebook/cinebookLogo.png',
      videoDemo: 'https://www.youtube.com/watch?v=AZTC3kCY1Wg',
      videoMarketing: 'https://www.youtube.com/watch?v=62qrqWJDxLY',
      githubLink: 'https://github.com/baez-nicolas/cinebook-app.git',
      deployLink: 'https://natural-curiosity-production-c1bb.up.railway.app/login',
      featured: true,
      priority: 1,
    },
    {
      id: 2,
      title: 'ZeroPoint',
      description:
        'ZeroPoint es una aplicación web moderna que te permite explorar todo el universo de Fortnite. Desde la tienda diaria hasta el mapa de Battle Royale, accedé a información actualizada de cosméticos, playlists, noticias y más con una interfaz responsive y optimizada.',
      descriptionEn:
        'ZeroPoint is a modern web app that lets you explore the entire Fortnite universe. From the daily item shop to the Battle Royale map — access up-to-date info on cosmetics, playlists, news and more with a responsive, optimized interface.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap', 'Vercel'],
      image: 'zeropoint/zeroPointPortada.png',
      logo: 'zeropoint/fortniteLogo.png',
      videoDemo: 'https://www.youtube.com/watch?v=eULG09u-aXQ',
      githubLink: 'https://github.com/baez-nicolas/ZeroPoint.git',
      deployLink: 'https://zero-point-neon.vercel.app/',
      featured: true,
      priority: 2,
    },
    {
      id: 3,
      title: 'SyncMarket',
      description:
        'Sistema de gestión de marketplace con arquitectura full stack. Backend con Java Spring Boot y frontend con Angular. (Proyecto en desarrollo)',
      descriptionEn:
        'Marketplace management system with a full-stack architecture. Java Spring Boot backend and Angular frontend. (Work in progress)',
      technologies: ['Angular', 'Java', 'Spring Boot', 'TypeScript'],
      image: 'syncmarket/syncMarketPortada.png',
      logo: 'syncmarket/syncMarketLogo.png',
      githubLink: 'https://github.com/baez-nicolas/syncmarket.git',
      featured: true,
      priority: 3,
    },
    {
      id: 4,
      title: 'Dimensión C-137',
      titleEn: 'Dimension C-137',
      description:
        'Dimensión C-137 es una aplicación web que te permite explorar el multiverso de Rick and Morty. Descubrí personajes, locaciones y episodios de todas las dimensiones con una interfaz moderna y responsive.',
      descriptionEn:
        'Dimension C-137 is a web app that lets you explore the Rick and Morty multiverse. Discover characters, locations and episodes from every dimension with a modern, responsive interface.',
      technologies: ['Angular', 'TypeScript', 'CSS3', 'Bootstrap', 'Vercel'],
      image: 'dimensionc137/dimensionc137Portada.png',
      logo: 'dimensionc137/dimensionc137Logo.png',
      videoDemo: 'https://www.youtube.com/watch?v=jOLFHniWK04',
      githubLink: 'https://github.com/baez-nicolas/DimensionC137.git',
      deployLink: 'https://dimension-c137-tan.vercel.app/',
      featured: true,
      priority: 4,
    },
    {
      id: 5,
      title: 'FocusHub',
      description:
        'FocusHub es una app de productividad personal, minimalista y responsive. Organizá tu día, registrá hábitos y leé noticias en tiempo real — todo desde el navegador, sin backend. Integra la API de The Guardian y Spotify.',
      descriptionEn:
        'FocusHub is a minimalist, fully responsive personal productivity app. Organize your day, track habits and read real-time news — all from the browser, no backend required. Integrates The Guardian API and Spotify.',
      technologies: ['Angular', 'TypeScript', 'CSS3', 'Bootstrap', 'Vercel'],
      image: 'focushub/focusHubPortada.png',
      logo: 'focushub/focusHubLogo.png',
      videoDemo: 'https://www.youtube.com/watch?v=aQx8hbWnbgE',
      githubLink: 'https://github.com/baez-nicolas/FocusHub.git',
      deployLink: 'https://focus-hub-gamma.vercel.app/',
      featured: true,
      priority: 5,
    },
    {
      id: 6,
      title: 'LibraryHub',
      description:
        'LibraryHub es una librería online moderna y elegante donde podés explorar, filtrar y comprar libros. Diseño responsive, tema oscuro/claro, carrito funcional con persistencia y gestión de stock en tiempo real.',
      descriptionEn:
        'LibraryHub is a modern, elegant online bookstore where you can browse, filter and buy books. Responsive design, dark/light theme, functional cart with persistence and real-time stock management.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Vercel'],
      image: 'libraryhub/libraryHubPortada.png',
      logo: 'libraryhub/libraryHubLogo.png',
      githubLink: 'https://github.com/baez-nicolas/LibraryHub.git',
      deployLink: 'https://library-hub-phi.vercel.app/',
      featured: false,
      priority: 6,
    },
    {
      id: 7,
      title: 'Moto Center App',
      description:
        'Proyecto final del curso de Desarrollo Web en Coderhouse. Sitio web responsive para Moto Center, empresa dedicada a la venta de motos y asesoramiento personalizado. Incluye estructura escalable usando SCSS, animaciones, formularios funcionales, integración de SEO y Open Graph.',
      descriptionEn:
        'Final project for the Coderhouse Web Development course. Responsive website for Moto Center, a company dedicated to motorcycle sales and personalized advice. Features scalable SCSS architecture, animations, functional forms, SEO and Open Graph integration.',
      technologies: ['HTML5', 'SCSS', 'Vercel'],
      image: 'motocenterfinal/motocenterPortada.jpg',
      logo: 'motocenterfinal/motocenterLogo.png',
      videoDemo: 'https://www.youtube.com/watch?v=vKMiwK6YmE4',
      githubLink: 'https://github.com/baez-nicolas/ProyectoFinal_BaezNicolas.git',
      deployLink: 'https://motocenter-cordoba.vercel.app/',
      featured: false,
      priority: 7,
    },
    {
      id: 8,
      title: 'My Hero Academia Web',
      description:
        'My Hero Academia Web es un sitio web dedicado al universo de Boku no Hero Academia. Explorá información sobre héroes, villanos, quirks y arcos de la historia con un diseño moderno y responsive inspirado en la serie.',
      descriptionEn:
        'My Hero Academia Web is a site dedicated to the Boku no Hero Academia universe. Explore info about heroes, villains, quirks and story arcs with a modern, responsive design inspired by the series.',
      technologies: ['HTML5', 'SCSS', 'JavaScript', 'Bootstrap', 'Vercel'],
      image: 'myheroacademiaWeb/mhaPortada.png',
      logo: 'myheroacademiaWeb/myheroacademiaLogo.png',
      videoDemo: 'https://www.youtube.com/watch?v=XaT3Bp1Gpzs',
      githubLink: 'https://github.com/baez-nicolas/my-hero-academia-web.git',
      deployLink: 'https://plusultra-web.vercel.app/',
      featured: false,
      priority: 8,
    },
    {
      id: 9,
      title: 'Sistema de Gestión Educativa',
      titleEn: 'Academic Management System',
      descriptionEn:
        'Complete academic management web app with Redux (NgRx) architecture, Students & Courses CRUD, role-based authentication (Admin/User), session management with auto-expiry, REST API with JSON Server, full unit testing and Angular Material with light/dark theme.',
      description:
        'Aplicación web completa para administración académica con arquitectura Redux (NgRx), CRUD de Alumnos y Cursos, autenticación con roles (Admin/Usuario), gestión de sesión con expiración automática, API REST con JSON Server, testing unitario completo y Angular Material con tema claro/oscuro.',
      technologies: ['Angular', 'TypeScript', 'NgRx', 'Angular Material'],
      image: 'angular/angularPortada.png',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      videoDemo: 'https://www.youtube.com/watch?v=_AIxtnQBjq4',
      githubLink: 'https://github.com/baez-nicolas/PF-Angular-Baez.git',
      featured: false,
      priority: 9,
    },
    {
      id: 10,
      title: 'Proyecto Sucursales',
      titleEn: 'Branch Management Project',
      description:
        'Proyecto final de Programación 3 de la Tecnicatura Universitaria en Programación (UTN). Sistema de gestión de sucursales con arquitectura full stack, backend desarrollado en C# .NET y frontend con HTML, JavaScript y CSS.',
      descriptionEn:
        'Final project for Programming 3 at UTN. Branch management system with a full-stack architecture — C# .NET backend and HTML, JavaScript & CSS frontend.',
      technologies: ['C#', '.NET', 'HTML5', 'JavaScript', 'CSS3'],
      image: 'csharp/portada.png',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      githubLink: 'https://github.com/baez-nicolas/Proyecto-Sucursales.git',
      featured: false,
      priority: 10,
    },
    {
      id: 11,
      title: 'ObrasParcial2w2',
      description:
        'Proyecto de repaso para parcial de Programación 3 (UTN). Sistema de gestión de obras con arquitectura Database First, backend con C# .NET y frontend con HTML, JavaScript y CSS.',
      descriptionEn:
        'Review project for the Programming 3 exam at UTN. Works management system with Database First architecture, C# .NET backend and HTML, JavaScript & CSS frontend.',
      technologies: ['C#', '.NET', 'HTML5', 'JavaScript', 'CSS3'],
      image: 'csharp/portada.png',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      githubLink: 'https://github.com/baez-nicolas/ObrasParcial2w2.git',
      featured: false,
      priority: 11,
    },
    {
      id: 12,
      title: 'LibraryProject',
      description:
        'Sistema de gestión de librería con arquitectura Code First. Proyecto de repaso para parcial de Programación 3 (UTN). Backend desarrollado en C# .NET y frontend con HTML, JavaScript y CSS.',
      descriptionEn:
        'Library management system with Code First architecture. Review project for the Programming 3 exam at UTN. C# .NET backend and HTML, JavaScript & CSS frontend.',
      technologies: ['C#', '.NET', 'HTML5', 'JavaScript', 'CSS3'],
      image: 'csharp/portada.png',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      githubLink: 'https://github.com/baez-nicolas/LibraryProject.git',
      featured: false,
      priority: 12,
    },
  ];

  protected readonly skills = {
    frontend: [
      { name: 'Angular', icon: 'devicon-angularjs-plain' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'HTML5', icon: 'devicon-html5-plain' },
      { name: 'CSS3', icon: 'devicon-css3-plain' },
      { name: 'SCSS', icon: 'devicon-sass-plain' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
      { name: 'Material', icon: 'devicon-materialui-plain' },
    ],
    backend: [
      { name: 'Java', icon: 'devicon-java-plain' },
      { name: 'Spring Boot', icon: 'devicon-spring-plain' },
      { name: 'C#', icon: 'devicon-csharp-plain' },
      { name: '.NET', icon: 'devicon-dotnetcore-plain' },
    ],
    databases: [
      { name: 'MySQL', icon: 'devicon-mysql-plain' },
      { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
    ],
    deployment: [
      { name: 'Railway', icon: 'devicon-railway-plain' },
      { name: 'Vercel', icon: 'devicon-vercel-plain' },
      { name: 'GitHub Pages', icon: 'devicon-github-plain' },
      { name: 'Render', icon: 'bi bi-cloud-upload-fill' },
    ],
    devops: [
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'GitHub', icon: 'devicon-github-plain' },
      { name: 'Postman', icon: 'devicon-postman-plain' },
      { name: 'Swagger', icon: 'devicon-swagger-plain' },
      { name: 'Jira', icon: 'devicon-jira-plain' },
      { name: 'Taiga', icon: 'bi bi-kanban-fill' },
    ],
    tools: [
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'GitHub', icon: 'devicon-github-plain' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'Postman', icon: 'devicon-postman-plain' },
    ],
  };

  protected readonly certificates: Certificate[] = [
    {
      id: 1,
      title: 'Técnico Universitario en Programación',
      titleEn: 'University Technician in Programming',
      institution: 'Universidad Tecnológica Nacional (UTN)',
      date: '19 de diciembre 2025',
      dateEn: 'December 19, 2025',
      image: 'certificados/utn-nacional.png',
      status: 'Título en trámite',
      statusEn: 'Degree in process',
    },
    {
      id: 2,
      title: 'Carrera de Desarrollo Frontend',
      titleEn: 'Frontend Development Career',
      institution: 'Coderhouse',
      date: '19 de noviembre 2025',
      dateEn: 'November 19, 2025',
      image: 'certificados/carrera-frontend-angular.png',
      verifyLink: 'https://pub.coderhouse.com/legacy-certificates/69493c6c7bae0dc4510b99d8',
    },
    {
      id: 3,
      title: 'Curso de Angular',
      titleEn: 'Angular Course',
      institution: 'Coderhouse',
      date: '21 de diciembre 2025',
      dateEn: 'December 21, 2025',
      image: 'certificados/curso-angular.png',
      verifyLink:
        'https://pub.coderhouse.com/certificates/f57eb4a7-c5aa-4672-9a80-705dca6aa017?v=1',
    },
    {
      id: 4,
      title: 'Curso de JavaScript',
      titleEn: 'JavaScript Course',
      institution: 'Coderhouse',
      date: '2 de septiembre 2025',
      dateEn: 'September 2, 2025',
      image: 'certificados/curso-javascript.png',
      verifyLink:
        'https://pub.coderhouse.com/certificates/1fe2886d-7997-4e73-a80a-f456748ba5de?v=1',
    },
    {
      id: 5,
      title: 'Curso de Desarrollo Web',
      titleEn: 'Web Development Course',
      institution: 'Coderhouse',
      date: '28 de junio 2025',
      dateEn: 'June 28, 2025',
      image: 'certificados/curso-desarrollo-web.png',
      verifyLink:
        'https://pub.coderhouse.com/certificates/2ef861a5-a0ee-45bb-a0df-40f18a823b7d?v=1',
    },
  ];

  openProjectModal(project: Project): void {
    this.selectedProject.set(project);
    const scrollY = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add('modal-open');

    window.addEventListener('wheel', this.preventScroll, { passive: false });
    window.addEventListener('touchmove', this.preventScroll, { passive: false });
    window.addEventListener('keydown', this.preventScrollKeys, { passive: false });
  }

  closeProjectModal(): void {
    this.selectedProject.set(null);
    const scrollY = document.body.style.top;
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    document.documentElement.style.removeProperty('--scrollbar-width');
    window.scrollTo(0, parseInt(scrollY || '0') * -1);

    window.removeEventListener('wheel', this.preventScroll);
    window.removeEventListener('touchmove', this.preventScroll);
    window.removeEventListener('keydown', this.preventScrollKeys);
  }

  openCertificateModal(certificate: Certificate): void {
    this.selectedCertificate.set(certificate);
    const scrollY = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add('modal-open');

    window.addEventListener('wheel', this.preventScroll, { passive: false });
    window.addEventListener('touchmove', this.preventScroll, { passive: false });
    window.addEventListener('keydown', this.preventScrollKeys, { passive: false });
  }

  closeCertificateModal(): void {
    this.selectedCertificate.set(null);
    const scrollY = document.body.style.top;
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    document.documentElement.style.removeProperty('--scrollbar-width');
    window.scrollTo(0, parseInt(scrollY || '0') * -1);

    window.removeEventListener('wheel', this.preventScroll);
    window.removeEventListener('touchmove', this.preventScroll);
    window.removeEventListener('keydown', this.preventScrollKeys);
  }

  private preventScrollKeys = (e: KeyboardEvent) => {
    const target = e.target as HTMLElement;
    const modalContainer = target.closest('.modal-container');
    if (modalContainer) {
      return true;
    }

    const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
    if (keys.includes(e.key)) {
      e.preventDefault();
      return false;
    }
    return true;
  };

  getYouTubeEmbedUrl(url: string): SafeResourceUrl {
    const videoId = url.split('v=')[1]?.split('&')[0];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      history.replaceState(null, '', `#${sectionId}`);

      const navbarHeight = 80;
      const offset = 30;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}
