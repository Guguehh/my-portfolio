    import { useState, useEffect } from 'react';
    import { Routes, Route, Link, useLocation } from 'react-router-dom';
    import { Menu, X, ChevronDown, Github, Linkedin, Mail, ArrowRight, Calendar, MessageSquare, Search, Smartphone, Globe, Cpu, Monitor, ChevronLeft, ChevronRight } from 'lucide-react';
    import About from './pages/About';
    import Contact from './pages/Contact';
    
    // Define the Project type
    interface Project {
      title: string;
      description: string;
      image: string;
      category: string;
      tags: string[];
      link: string;
    }
    
    const categoryColors: { [key: string]: string } = {
      "All": "bg-gray-100 text-gray-600 hover:bg-gray-200",
      "UX Research": "bg-purple-100 text-purple-600 hover:bg-purple-200",
      "Mobile Design": "bg-blue-100 text-blue-600 hover:bg-blue-200",
      "Web Design": "bg-green-100 text-green-600 hover:bg-green-200",
      "Web3": "bg-indigo-100 text-indigo-600 hover:bg-indigo-200",
      "Desktop Apps": "bg-yellow-100 text-yellow-600 hover:bg-yellow-200",
    };
    
    const categoryIcons: { [key: string]: JSX.Element } = {
      "All": <Search className="w-4 h-4 mr-2" />,
      "UX Research": <Search className="w-4 h-4 mr-2" />,
      "Mobile Design": <Smartphone className="w-4 h-4 mr-2" />,
      "Web Design": <Globe className="w-4 h-4 mr-2" />,
      "Web3": <Cpu className="w-4 h-4 mr-2" />,
      "Desktop Apps": <Monitor className="w-4 h-4 mr-2" />,
    };
    
    function App() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [activeCategory, setActiveCategory] = useState('All');
      const [selectedProject, setSelectedProject] = useState<Project | null>(null);
      const [currentPage, setCurrentPage] = useState(0); // Estado para la paginación
      const [projectsPerPage, setProjectsPerPage] = useState(4); // Proyectos por página
      const location = useLocation();
    
      // Mis proyectos :)
 
// Mis proyectos :)
const projects: Project[] = [
  {
    title: "Bookstar AI",
    description: "As a Product Designer, I had the opportunity to craft the user experience for Bookstar, an innovative app for exchanging books and building your own digital library. With an intuitive, user-centered design, this app connects readers around the world. Coming soon!",
    image: "/img/Bookstar.png",
    category: "UX Research",
    tags: ["UX/UI", "Product Design", "UX Research", "Wireframing"],
    link: "https://www.behance.net/gallery/201054261/Selene-AI-Mobile-App-UXUI"
  },
  {
    title: "Selene AI",
    description: "Selene Student Organizational Assistant is an app focused on the specific needs of students regarding organization and time management. Using AI, Selene provides a personalized experience to simplify student life, assisting in task organization, schedule management, and staying up to date with responsibilities.",
    image: "/img/Selene compress.png",
    category: "UX Research",
    tags: ["UX/UI", "Organization", "UX Research", "Wireframing"],
    link: "https://www.behance.net/gallery/201054261/Selene-AI-Mobile-App-UXUI"
  },
  {
    title: "Laohu, Esports Manager",
    description: "Laohu is a unified gaming platform that connects all your games in one place, offering easy access to news, stats, and live esports streams. It lets you record, edit, and share epic gaming clips, discover highlights and strategies from other players, and track your personal stats across all connected games—all designed to create a seamless experience for true gaming fans.",
    image: "/img/Laohu.png",
    category: "Mobile Design",
    tags: ["Mobile", "Gaming", "UI Design", "Prototyping"],
    link: "https://www.behance.net/gallery/217032375/Laohu-Esports-Management-UX-UI"
  },
  {
    title: "TogetThere",
    description: "As CCO and UX/UI Designer, I joined to this Startup project with a mission to reduce traffic congestion, lower carbon emissions, and promote sustainable urban transportation through an intuitive and impactful app. ToGetThere isn’t just about getting from point A to point B; it’s about building a smarter, greener future for urban mobility.",
    image: "/img/ToGetThere.png",
    category: "UX Research",
    tags: ["Mobile App", "EcoFriendly App", "UX Research", "UX Design"],
    link: "https://medium.com/@guguehalonso/c%C3%B3mo-constru%C3%AD-una-soluci%C3%B3n-de-movilidad-sostenible-para-empresas-y-universidades-26d95eebe23c"
  },
  {
    title: "Gerty",
    description: "Diseño de red social innovadora. Creación de una experiencia única que fomenta conexiones significativas entre usuarios.",
    image: "/img/Gerty.png",
    category: "Mobile Design",
    tags: ["Healthcare", "Mobile", "UX Research", "User Testing"],
    link: "https://www.behance.net/gallery/209086875/Gerty-Clinical-Medical-Assistant-UX-UI-Design"
  },
  {
    title: "SalaryAr",
    description: "The SalaryAr project involved designing and developing an app to simplify a critical yet often confusing process: calculating payroll settlements. With a focus on clarity and ease of use, SalaryAr makes payroll calculations accessible for everyone. Check out the full UX design process in my Medium post!",
    image: "/img/SalaryAr.png",
    category: "UX Research",
    tags: ["Education", "UX Design", "Fintech", "UX Research"],
    link: "https://medium.com/@guguehalonso/dise%C3%B1ando-una-app-para-calcular-liquidaciones-de-sueldo-r%C3%A1pidas-262cdeb61da8"
  },
  {
    title: "Fliyng Tracking App",
    description: "Flyng is an app designed to simplify real-time flight tracking. With accurate information and personalized alerts, Flyng helps you plan your trips better and avoid surprises.",
    image: "/img/FlyApp.png",
    category: "Mobile Design",
    tags: ["Flyng App", "Mobile App", "UI Design", "Glassmorphism"],
    link: "https://www.behance.net/gallery/160218725/FlyApp-Design-Concept"
  },
  {
    title: "UniteStats",
    description: "UniteStats is an app for tracking stats, guides, and rankings for Pokémon Unite. Designed for players looking to up their game, it delivers clear, actionable insights all in one place. Check out the UX design process!",
    image: "/img/UniteStats.png",
    category: "Mobile Design",
    tags: ["Gaming App", "Mobile App", "UI Design", "Analytics"],
    link:""
  },
  {
    title: "FuturaCam",
    description: "Panel de control para dispositivos domésticos inteligentes. Diseño centrado en la simplicidad y el control eficiente del hogar.",
    image: "/img/FuturaCam.png",
    category: "UX Research",
    tags: ["Mobile App", "UI Design", "Camera App"],
    link: "https://www.behance.net/gallery/156148867/FuturaCam-Camera-App"
  },
  {
    title: "SIME Gestion Estudiantil",
    description: "Diseño de una billetera digital para criptomonedas. Enfoque en la seguridad y la facilidad de uso.",
    image: "/img/SIME.png",
    category: "UX Research",
    tags: ["School App", "Management", "UX Research","UX Writing", "UI Design"],
    link: "https://www.behance.net/gallery/178581609/UX-Case-Study-School-Management-SIME"
  },
  {
    title: "VisionOS Concept",
    description: "Game-ow is a concept created for VisionOS for gamers, combining the ability to play games with the ability to enjoy streams and chat with friends in one place.",
    image: "/img/GameMeow - VisionOS.png",
    category: "Desktop Apps",
    tags: ["VisionOs", "Desktop", "UI Design", "App Management"],
    link: ""
  },
  ];

    
      const categories = ['All', ...new Set(projects.map(project => project.category))];
      const filteredProjects = activeCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category === activeCategory);
    
      // Lógica de paginación
      const totalPages = Math.ceil(filteredProjects.length / projectsPerPage); // Total de páginas
      const startIndex = currentPage * projectsPerPage; // Índice inicial
      const endIndex = startIndex + projectsPerPage; // Índice final
      const currentProjects = filteredProjects.slice(startIndex, endIndex); // Proyectos de la página actual
    
      const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      const handlePrevPage = () => {
        if (currentPage > 0) {
          setCurrentPage(currentPage - 1);
        }
      };
    
      const openResume = () => {
        window.open('/GustavoG_Alonso_CV.pdf', '_blank');
      };
    
      const handleProjectsClick = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      };
    
      // Efecto para ajustar el número de proyectos por página según el tamaño de la pantalla
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 768) { // 768px es el breakpoint para md en Tailwind
            setProjectsPerPage(filteredProjects.length); // Mostrar todos los proyectos en desktop
          } else {
            setProjectsPerPage(4); // Mostrar 4 proyectos por página en mobile
          }
        };
    
        handleResize(); // Llamar a la función al montar el componente
        window.addEventListener('resize', handleResize); // Escuchar cambios en el tamaño de la pantalla
    
        return () => {
          window.removeEventListener('resize', handleResize); // Limpiar el event listener al desmontar el componente
        };
      }, [filteredProjects.length]);
    
      return (
        <div className="min-h-screen bg-[#F8F9FF] overflow-x-hidden">
          {/* Navigation */}
          <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  <img 
                    src="/img/logo.png"
                    className="w-12 h-10 md:w-16 md:h-12" // Ajusta el tamaño del logo
                  />
                </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link
                to="/"
                onClick={() => {
                  if (location.pathname === '/') {
                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`text-base text-gray-700 hover:text-[#4761E2] transition-colors duration-300 ${
                  location.pathname === '/' ? 'text-[#4761E2] font-medium' : ''
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-base text-gray-700 hover:text-[#4761E2] transition-colors duration-300 ${
                  location.pathname === '/about' ? 'text-[#4761E2] font-medium' : ''
                }`}
              >
                Who Am I
              </Link>
              <button
                onClick={handleProjectsClick}
                className={`text-base text-gray-700 hover:text-[#4761E2] transition-colors duration-300 ${
                  location.hash === '#projects' ? 'text-[#4761E2] font-medium' : ''
                }`}
              >
                Projects
              </button>
              <Link
                to="/contact"
                className={`text-base text-gray-700 hover:text-[#4761E2] transition-colors duration-300 ${
                  location.pathname === '/contact' ? 'text-[#4761E2] font-medium' : ''
                }`}
              >
                Contact me
              </Link>
              <button
                onClick={openResume}
                className="text-base bg-[#4761E2] text-white px-4 py-2 rounded-full hover:bg-[#3a4fb5] transition-colors duration-300"
              >
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <Link
                to="/"
                className={`block px-3 py-2 text-gray-700 hover:text-[#4761E2] transition-colors duration-300 ${location.pathname === '/' ? 'text-[#4761E2]' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 text-gray-700 hover:text-[#4761E2] transition-colors duration-300 ${location.pathname === '/about' ? 'text-[#4761E2]' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Who Am I
              </Link>
              <button
                onClick={handleProjectsClick}
                className={`block px-3 py-2 text-gray-700 hover:text-[#4761E2] transition-colors duration-300 ${location.hash === '#projects' ? 'text-[#4761E2]' : ''}`}
              >
                Projects
              </button>
              <Link
                to="/contact"
                className={`block px-3 py-2 text-gray-700 hover:text-[#4761E2] transition-colors duration-300 ${location.pathname === '/contact' ? 'text-[#4761E2]' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact me
              </Link>
              <button
                onClick={() => {
                  openResume();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left block px-3 py-2 bg-[#4761E2] text-white rounded-full hover:bg-[#3a4fb5] transition-colors duration-300"
              >
                Resume
              </button>
            </div>
          </div>
        )}
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Hero Section */}
              <section id="home" className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto relative min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <div className="pt-8 relative">
                    {/* Polaroid ajustada para móviles */}
                    <div className="md:hidden absolute right-4 top-12 z-0">
                      <div className="relative w-[100px] h-[130px] bg-white shadow-xl transform -rotate-12 overflow-hidden">
                        <div className="absolute inset-0 p-2">
                          <div className="w-[90px] h-[90px] overflow-hidden">
                            <img 
                              src="/img/my-photo.png"
                              alt="Gus Alonso"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="mt-1 text-gray-600 text-xs"></div>
                        </div>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-medium text-gray-700 mb-4">
                      Hi, I'm Gus G. Alonso
                    </h2>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                      I design impactful products for{' '}
                      <span className="relative inline-block">
                        <span className="absolute inset-0 transform -rotate-12 origin-center">
                          <span className="absolute inset-x-0 top-1/2 h-1 sm:h-2 bg-red-500 transform scale-x-110"></span>
                        </span>
                        <span className="relative">users</span>
                      </span>
                      {' '}
                      <a
                        href="https://www.behance.net/guguehh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black lg:text-white lg:hover:text-black bg-[#A0ECFF] lg:bg-transparent lg:hover:bg-[#A0ECFF] no-underline transition-all duration-300"
                        style={{ WebkitTextStroke: '2px black' }}
                      >
                        people 
                      </a>{' '}
                      &{' '}
                      <a
                        href="https://medium.com/@guguehalonso"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black lg:text-white lg:hover:text-black bg-[#FFD289] lg:bg-transparent lg:hover:bg-[#FFD289] no-underline transition-all duration-300"
                        style={{ WebkitTextStroke: '2px black' }}
                      >
                        write.
                      </a>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                      I'm a Product Designer based in Argentina, with experience in delivering end-to-end UX/UI design for software products. I'm passionate about improving the lives of others through design and am constantly looking to learn new things everyday.
                    </p>
                  </div>

                  {/* Polaroid para desktop */}
                  <div className="hidden md:flex justify-center md:justify-end items-start">
                    <div className="relative w-[120px] h-[160px] md:w-[300px] md:h-[390px] bg-white shadow-xl transform -rotate-12 overflow-hidden">
                      <div className="absolute inset-0 p-2 md:p-4">
                        <div className="w-[100px] h-[100px] md:w-[270px] md:h-[270px] overflow-hidden">
                          <img 
                            src="/img/my-photo.png"
                            alt="Gus Alonso"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botón "discover my works" */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                  <button 
                    onClick={handleProjectsClick}
                    className="flex flex-col items-center gap-2 mx-auto text-gray-600 hover:text-purple-600 transition-colors duration-300"
                  >
                    <span className="text-lg font-medium hover:font-semibold">discover my works</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                  </button>
                </div>
              </section>
              
              {/* Projects Section */}
              <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
                <div className="text-left mb-8">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Filter by category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          setCurrentPage(0); // Reiniciar la paginación al cambiar de categoría
                        }}
                        className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 flex items-center ${
                          activeCategory === category
                            ? `${categoryColors[category]} font-semibold`
                            : `${categoryColors[category]}`
                        }`}
                      >
                        {categoryIcons[category]}
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Proyectos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {currentProjects.map((project, index) => (
                    <div 
                      key={index} 
                      className="group overflow-hidden cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="relative overflow-hidden rounded-[6px]">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className={`absolute top-2 right-2 text-sm px-3 py-1 rounded-full ${
                          categoryColors[project.category]
                        }`}>
                          {project.category}
                        </span>
                      </div>
                      <div className="mt-2">
                        <h3 className="text-xl font-semibold text-gray-700">{project.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Controles de paginación (solo en móvil) */}
                <div className="md:hidden flex justify-center items-center mt-8 gap-4">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 0}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <span className="text-gray-700">
                    Página {currentPage + 1} de {totalPages}
                  </span>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages - 1}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </section>

              {/* Contact Section */}
              <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute top-1/2 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative">
                  <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#4761E2] via-purple-600 to-pink-500 bg-clip-text text-transparent">
                      Let's Work Together
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      Ready to bring your ideas to life? Choose how you'd like to connect with me
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Email Card */}
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative h-full bg-white px-8 py-12 rounded-2xl flex flex-col items-center text-center">
                        <div className="mb-6 relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <MessageSquare className="w-10 h-10 text-[#4761E2] relative" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Drop me an email</h3>
                        <p className="text-gray-600 mb-8">Let's discuss your project and bring your ideas to life</p>
                        <a
                          href="mailto:gg_alonso@outlook.com"
                          className="mt-auto inline-flex items-center gap-2 text-white bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-300"
                        >
                          <span>Send email</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* LinkedIn Card */}
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative h-full bg-white px-8 py-12 rounded-2xl flex flex-col items-center text-center">
                        <div className="mb-6 relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <Linkedin className="w-10 h-10 text-[#4761E2] relative" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Connect on LinkedIn</h3>
                        <p className="text-gray-600 mb-8">Stay in touch and follow my professional journey</p>
                        <a
                          href="https://www.linkedin.com/in/gustavo-guillermo-alonso/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-flex items-center gap-2 text-white bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-300"
                        >
                          <span>Connect</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Calendar Card */}
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative h-full bg-white px-8 py-12 rounded-2xl flex flex-col items-center text-center">
                        <div className="mb-6 relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <Calendar className="w-10 h-10 text-[#4761E2] relative" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">Book a Call</h3>
                        <p className="text-gray-600 mb-8">Schedule a free 30-minute consultation</p>
                        <a
                          href="https://www.linkedin.com/in/gustavo-guillermo-alonso/"
                          className="mt-auto inline-flex items-center gap-2 text-white bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-300"
                        >
                          <span>Book time</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

{/* Project Modal */}
{selectedProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 lg:p-6">
    <div 
      className="absolute inset-0 bg-black/50 backdrop-blur-md"
      onClick={() => setSelectedProject(null)}
    ></div>
    <div className="relative w-full max-w-[95vw] md:max-w-3xl lg:max-w-7xl mx-2 md:mx-4 lg:mx-8 bg-white rounded-2xl shadow-2xl overflow-hidden h-auto md:h-[60vh] lg:h-[80vh]">
      <button 
        className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-50 p-2 md:p-3 lg:p-4 bg-white/50 backdrop-blur-md hover:bg-white/70 rounded-full transition-colors duration-300 text-gray-800"
        onClick={() => setSelectedProject(null)}
      >
        <X className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 h-full">
        {/* Imagen del proyecto */}
        <div className="md:col-span-1 lg:col-span-8 h-[200px] md:h-[300px] lg:h-full relative">
          <img 
            src={selectedProject.image} 
            alt={selectedProject.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
        </div>
        {/* Detalles del proyecto */}
        <div className="md:col-span-1 lg:col-span-4 h-auto md:h-[60vh] lg:h-[80vh] overflow-y-auto p-4 md:p-6 lg:p-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6 lg:mb-8">{selectedProject.title}</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 lg:mb-10 leading-relaxed">{selectedProject.description}</p>
          <div className="flex flex-wrap gap-2 mb-6 md:mb-8 lg:mb-10">
            {selectedProject.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm lg:text-base"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="w-full lg:w-auto flex items-center justify-center gap-2 bg-[#4761E2] hover:bg-[#3a4fb5] text-white px-6 py-3 md:px-8 md:py-4 lg:px-8 lg:py-4 rounded-lg transition-all duration-300 group">
            <span className="text-base md:text-lg lg:text-xl">View Project</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  </div>
)}

{/* Footer */}
<footer className="py-12 bg-[#0320CB] text-white">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Columna 1: Logo y descripción */}
      <div className="space-y-4">
        <Link to="/">
          <img 
            src="/img/logo-light.png" // Ruta a tu logo
            alt="Gus Alonso Logo"
            className="w-12 h-10 md:w-16 md:h-12" // Ajusta el tamaño del logo
          />
        </Link>
        <p className="text-gray-200">
          I'm a Product Designer passionate about creating meaningful experiences through design.
        </p>
      </div>

      {/* Columna 2: Enlaces rápidos */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="text-gray-200 hover:text-white transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-200 hover:text-white transition-colors duration-300">
              Who Am I
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-200 hover:text-white transition-colors duration-300">
              Contact me
            </Link>
          </li>
        </ul>
      </div>

      {/* Columna 3: Redes sociales */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Follow Me</h3>
        <div className="flex space-x-4">
          <a
            href="https://github.com/Guguehh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-guillermo-alonso/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:gg_alonso@outlook.com"
            className="text-gray-200 hover:text-white transition-colors duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>

    {/* Derechos de autor */}
    <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-300">
      <p>© {new Date().getFullYear()} Gus G. Alonso. All rights reserved. ❤️</p>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;