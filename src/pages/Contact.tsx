import React, { useState } from 'react';
import { Mail, Linkedin, Send, User, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-[#F8F9FF] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Let's Create Something Amazing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about design, feel free to
            reach out. I'm always excited to collaborate!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-2xl p-8 relative overflow-visible">
          {/* Efecto de fondo animado */}
          <div className="absolute inset-0 -z-10 overflow-visible">
            <div className="absolute top-0 left-0 w-48 h-48 bg-[#4761E2] opacity-30 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-float z-0"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#4761E2] opacity-30 rounded-full transform translate-x-1/2 translate-y-1/2 animate-float-delay z-0"></div>
          </div>

          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600">
                You can reach me via email or connect with me on social media. I'll get back to you
                as soon as possible!
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:gg_alonso@outlook.com"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-[#4761E2] hover:text-white transition-all duration-300 group"
              >
                <div className="p-3 bg-[#4761E2] text-white rounded-lg group-hover:bg-white group-hover:text-[#4761E2] transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">Email Me</p>
                  <p className="text-sm text-gray-500 group-hover:text-white">gg_alonso@outlook.com</p>
                </div>
              </a>

              {/* Cambiamos GitHub por Behance */}
              <a
                href="https://www.behance.net/guguehh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-[#4761E2] hover:text-white transition-all duration-300 group"
              >
                <div className="p-3 bg-[#4761E2] text-white rounded-lg group-hover:bg-white group-hover:text-[#4761E2] transition-colors duration-300">
                  {/* Ícono de Behance (puedes usar un ícono personalizado o SVG) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.109 2.168h-8.405c.13 2.191 1.28 3.52 3.362 3.52 1.518 0 2.178-.862 2.178-1.646h3.741zm-7.419-5.807h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.307 5.807c1.897 0 2.854-1.328 3.022-3.392h-6.022v3.392zm0-5.807h2.937v-2.193h-2.937v2.193zm-4.5 5.807c1.897 0 2.854-1.328 3.022-3.392h-6.022v3.392zm0-5.807h2.937v-2.193h-2.937v2.193z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Behance</p>
                  <p className="text-sm text-gray-500 group-hover:text-white">behance.net/guguehh</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/gustavo-guillermo-alonso/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-[#4761E2] hover:text-white transition-all duration-300 group"
              >
                <div className="p-3 bg-[#4761E2] text-white rounded-lg group-hover:bg-white group-hover:text-[#4761E2] transition-colors duration-300">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-gray-500 group-hover:text-white">linkedin.com/in/gustavo-guillermo-alonso</p>
                </div>
              </a>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <User className="w-4 h-4" />
                <span>Your Name</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4761E2] focus:border-transparent transition-colors duration-300"
                placeholder="Lionel Messi"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Mail className="w-4 h-4" />
                <span>Your Email</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4761E2] focus:border-transparent transition-colors duration-300"
                placeholder="liomessi@elmejor.com"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <MessageCircle className="w-4 h-4" />
                <span>Your Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4761E2] focus:border-transparent transition-colors duration-300"
                placeholder="Hi Gus, I have a project idea I'd like to discuss..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#4761E2] text-white py-3 px-6 rounded-lg hover:bg-[#3a4fb5] transition-colors duration-300 group"
            >
              <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}