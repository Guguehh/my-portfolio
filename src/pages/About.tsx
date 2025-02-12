import { Link } from 'react-router-dom';

export default function About() { 
  return (
    <div className="min-h-screen pt-20 bg-[#F8F9FF]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Texto a la izquierda */}
          <div className="pt-8">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Who Am I</h1>

            {/* Primera sección */}
            <p className="text-2xl font-bold text-gray-900 mb-6">
              I’m Gus, a Software Engineer who fell in love with the art of creating meaningful things.
            </p>

            {/* Segunda sección */}
            <p className="text-xl text-gray-600 mb-6">
              Ever since I was a child, I have been fascinated by finding magic in the little things and in those moments that leave a mark on you. This fascination for what really matters has led me to develop my vocation: to create experiences that are not only functional, but that{' '}
              <span className="relative inline-block">
                <span className="relative z-10">
                  {/* Subrayado para "connect" */}
                  <span style={{ color: '#EBA42F' }} className="relative inline-block">
                    connect
                    <svg
                      className="absolute bottom-0 left-0 w-full h-3"
                      viewBox="0 0 500 12"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 6 Q 125 12, 250 6 T 500 6 Q 475 0, 450 6 Q 425 12, 400 6"
                        stroke="#EBA42F" // Color plano #EBA42F
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  ,{' '}
                  {/* Subrayado para "inspire" */}
                  <span style={{ color: '#2FC646' }} className="relative inline-block">
                    inspire
                    <svg
                      className="absolute bottom-0 left-0 w-full h-3"
                      viewBox="0 0 500 12"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 6 Q 125 12, 250 6 T 500 6 Q 475 0, 450 6 Q 425 12, 400 6"
                        stroke="#2FC646" // Color plano #2FC646
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  , and{' '}
                  <span style={{ color: '#A362E4' }} className="relative inline-block">
                    leave a mark
                    <svg
                      className="absolute bottom-0 left-0 w-full h-3"
                      viewBox="0 0 500 12"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 6 Q 125 12, 250 6 T 500 6 Q 475 0, 450 6 Q 425 12, 400 6"
                        stroke="#A362E4" // Color plano #A362E4
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </span>
              </span>{' '}
              on people.
            </p>

            {/* Tercera sección */}
            <p className="text-xl text-gray-600 mb-6 text-center">
              That's why I found my vocation in UX/UI and Product design. It's where creativity meets impact, and it's what truly drives me every day.
            </p>

            {/* Cuarta sección */}
            <p className="text-xl text-gray-600 mb-6">
              Oh, and did I mention that I love writing? I have a blog where I share my thoughts on design, creativity and life in general. Writing has always been my way of reflecting, learning and sharing a little bit about what I think.
            </p>
          </div>

          {/* Polaroid a la derecha */}
          <div className="flex justify-center md:justify-start transform translate-x-[10%] md:translate-x-[20%]">
            <div className="relative w-[200px] h-[320px] md:w-[320px] md:h-[380px] bg-white shadow-xl transform -rotate-12 overflow-hidden">
              <div className="absolute inset-0 p-4">
                <div className="w-full h-[80%] overflow-hidden">
                  <img 
                    src="./src/img/my-photo.png" // Asegúrate de que la imagen esté en esta ubicación
                    alt="Gus Alonso"
                    className="w-full h-full object-cover" // Ajuste para que la imagen ocupe todo el espacio disponible
                  />
                </div>
                <div className="mt-6 text-gray-600 text-sm md:text-base">
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea de texto fuera del grid */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-600">
            If you are interested in my work, feel free to{' '}
            <Link
              to="/contact"
              className="text-[#4761E2] hover:text-[#3a4fb5] underline underline-offset-4"
            >
              contact me
            </Link>
            , together we can create something truly meaningful!
          </p>
        </div>
      </div>
    </div>
  );
}