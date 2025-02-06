import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Github, Linkedin, Mail, ArrowRight, Calendar, MessageSquare } from 'lucide-react';
import About from './pages/About';
import Contact from './pages/Contact';

// Define the Project type
interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const location = useLocation();

  const projects: Project[] = [
    {
      title: "Selene AI",
      description: "Mejora de experiencia de usuario para tienda online. Implementación de nuevas funcionalidades y optimización del flujo de compra para aumentar la conversión y satisfacción del usuario.",
      image: "./src/img/Selene compress.png",
      category: "UX Research",
      tags: ["UX/UI", "E-commerce", "User Research", "Wireframing"]
    },
    {
      title: "Banking App",
      description: "Diseño de aplicación móvil para servicios financieros. Desarrollo de una interfaz intuitiva y segura para operaciones bancarias diarias.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
      category: "Mobile Design",
      tags: ["Mobile", "Fintech", "UI Design", "Prototyping"]
    },
    {
      title: "Healthcare Platform",
      description: "Plataforma web para servicios médicos. Diseño centrado en la accesibilidad y la facilidad de uso para pacientes y profesionales de la salud.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
      category: "Web Design",
      tags: ["Healthcare", "Web Design", "Accessibility", "UX Writing"]
    },
    {
      title: "Social Media App",
      description: "Diseño de red social innovadora. Creación de una experiencia única que fomenta conexiones significativas entre usuarios.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000",
      category: "Mobile Design",
      tags: ["Social Media", "Mobile", "Interaction Design", "User Testing"]
    },
    {
      title: "Educational Platform",
      description: "Plataforma de aprendizaje en línea con enfoque en la experiencia del estudiante y el profesor. Diseño intuitivo para facilitar la enseñanza virtual.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
      category: "Web Design",
      tags: ["Education", "UX Design", "Learning Platform", "Responsive"]
    },
    {
      title: "Fitness Tracking App",
      description: "Aplicación móvil para seguimiento de ejercicios y hábitos saludables. Interfaz motivadora y fácil de usar para mantener un estilo de vida activo.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1000",
      category: "Mobile Design",
      tags: ["Health", "Mobile App", "UI Design", "Analytics"]
    },
    {
      title: "Smart Home Dashboard",
      description: "Panel de control para dispositivos domésticos inteligentes. Diseño centrado en la simplicidad y el control eficiente del hogar.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000",
      category: "UX Research",
      tags: ["IoT", "Dashboard", "Smart Home", "User Testing"]
    },
    {
      title: "Travel Planning App",
      description: "Aplicación para planificación de viajes con integración social. Experiencia personalizada para descubrir y organizar aventuras.",
      image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&q=80&w=1000",
      category: "Mobile Design",
      tags: ["Travel", "Social", "Mobile App", "Maps Integration"]
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openResume = () => {
    window.open('/path/to/your/resume.pdf', '_blank');
  };

  const handleProjectsClick = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              GA
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link
                to="/"
                className={`text-gray-700 hover:text-[#4761E2] transition-colors duration-300 ${location.pathname === '/' ? 'text-[#4761E2]' : ''}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-gray-700 hover:text-[#4761E2] transition-colors duration-300 ${location.pathname === '/about' ? 'text-[#4761E2]' : ''}`}
              >
                Who I Am
              </Link>
              <button
                onClick={handleProjectsClick}
                className={`text-gray-700 hover:text-[#4761E2] transition-colors duration-300 ${location.hash === '#projects' ? 'text-[#4761E2]' : ''}`}
              >
                Projects
              </button>
              <Link
                to="/contact"
                className={`text-gray-700 hover:text-[#4761E2] transition-colors duration-300 ${location.pathname === '/contact' ? 'text-[#4761E2]' : ''}`}
              >
                Contact me
              </Link>
              <button
                onClick={openResume}
                className="bg-[#4761E2] text-white px-4 py-2 rounded-full hover:bg-[#3a4fb5] transition-colors duration-300"
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
                Who I Am
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
              <section id="home" className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <div className="pt-8 relative">
                    {/* Polaroid ajustada para móviles */}
                    <div className="md:hidden absolute right-4 top-12 z-0">
                      <div className="relative w-[100px] h-[130px] bg-white shadow-xl transform -rotate-12 overflow-hidden">
                        <div className="absolute inset-0 p-2">
                          <div className="w-[90px] h-[90px] overflow-hidden">
                            <img 
                              src="./src/img/my-photo.png"
                              alt="Gus Alonso"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="mt-1 text-gray-600 text-xs">
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-medium text-gray-700 mb-4">
                      Hi, I'm Gus Alonso
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
                            src="./src/img/my-photo.png"
                            alt="Gus Alonso"
                            className="w-full h-full object-cover"
                          />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <button 
                    onClick={handleProjectsClick}
                    className="flex flex-col items-center gap-2 mx-auto text-gray-600 hover:text-purple-600 transition-colors duration-300"
                  >
                    <span className="text-lg">discover my works</span>
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
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                          activeCategory === category
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredProjects.map((project, index) => (
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
                        <span className="absolute top-2 right-2 text-sm bg-white/20 text-white px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <div className="mt-2">
                        <h3 className="text-xl font-semibold text-gray-700">{project.title}</h3>
                      </div>
                    </div>
                  ))}
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
                          href="mailto:your.email@example.com"
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
                          href="https://linkedin.com/in/yourusername"
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
                          href="#"
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
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div 
      className="absolute inset-0 bg-black/30 backdrop-blur-md"
      onClick={() => setSelectedProject(null)}
    ></div>
    <div className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
      <button 
        className="absolute top-4 right-4 z-50 p-2 bg-white/50 backdrop-blur-md hover:bg-white/70 rounded-full transition-colors duration-300 text-gray-800"
        onClick={() => setSelectedProject(null)}
      >
        <X className="w-6 h-6" />
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Imagen del proyecto */}
        <div className="lg:col-span-7 h-[250px] lg:h-[400px] relative">
          <img 
            src={selectedProject.image} 
            alt={selectedProject.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }} // Asegura que la imagen esté centrada
          />
        </div>
        {/* Detalles del proyecto */}
        <div className="lg:col-span-5 h-auto lg:h-[400px] overflow-y-auto p-6 lg:p-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">{selectedProject.title}</h2>
          <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">{selectedProject.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedProject.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs lg:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="w-full lg:w-auto flex items-center justify-center gap-2 bg-[#4761E2] hover:bg-[#3a4fb5] text-white px-6 py-3 rounded-lg transition-all duration-300 group">
            <span className="text-base lg:text-lg">View Project</span>
            <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform duration-300" />
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
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                GA
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
                    Who I Am
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
                  href="https://github.com/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-colors duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:tuemail@example.com"
                  className="text-gray-200 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Derechos de autor */}
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>© {new Date().getFullYear()} Gus Alonso. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;