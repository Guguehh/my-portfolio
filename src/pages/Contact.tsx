import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Let's Connect</h1>
            <p className="text-gray-600 mb-8">
              I'm always open to discussing product design work or partnership opportunities.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-gray-600 hover:text-[#4761E2] transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>your.email@example.com</span>
              </a>
              
              <a 
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-[#4761E2] transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
                <span>github.com/yourusername</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-[#4761E2] transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/yourusername</span>
              </a>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4761E2] focus:border-transparent transition-colors duration-300"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4761E2] focus:border-transparent transition-colors duration-300"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4761E2] focus:border-transparent transition-colors duration-300"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#4761E2] text-white py-2 px-6 rounded-lg hover:bg-[#3a4fb5] transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}