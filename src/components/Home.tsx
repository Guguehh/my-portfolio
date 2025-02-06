import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="pt-8">
            <h2 className="text-2xl font-medium text-gray-700 mb-4">
              Hi, I'm Gus Alonso
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              I design impactful products for{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 transform -rotate-40 origin-center">
                  <span className="absolute inset-x-0 top-1/2 h-1 bg-red-500 transform scale-x-125"></span>
                </span>
                <span className="relative">users</span>
              </span>
              {' '}
              <a
                href="https://www.behance.net/guguehh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black hover:bg-[#A0ECFF] transition-colors"
                style={{ WebkitTextStroke: '3px black' }}
              >
                people
              </a>{' '}
              &{' '}
              <a
                href="https://medium.com/@guguehalonso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black hover:bg-[#FFD289] transition-colors"
                style={{ WebkitTextStroke: '3px black' }}
              >
                write
              </a>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              I'm a Product Designer based in Argentina, with experience in delivering end-to-end UX/UI design for software products. I'm passionate about improving the lives of others through design and am constantly looking to learn new things everyday.
            </p>
          </div>
          <div className="flex justify-center md:justify-start -ml-[10%]">
            <div className="relative w-[300px] h-[395px] md:w-[510px] md:h-[670px] bg-white shadow-xl transform -rotate-12 overflow-hidden">
              <div className="absolute inset-0 p-6">
                <div className="w-[275px] h-[275px] md:w-[465px] md:h-[465px] overflow-hidden">
                  <img 
                    src="./src/img/my-photo.png"
                    alt="Gus Alonso"
                    className="w-[120%] h-full object-cover -ml-[10%]"
                  />
                </div>
                <div className="mt-4 text-gray-600 text-sm md:text-base">
                  <p>Product Designer</p>
                  <p>2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 mx-auto text-gray-600 hover:text-purple-600 transition-colors"
          >
            <span className="text-lg">discover my works</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        {/* ... (resto del código de la sección de proyectos) ... */}
      </section>
    </>
  );
}