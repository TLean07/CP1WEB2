import React, { useState } from 'react';
import { FaUserAlt, FaEnvelope, FaPenFancy } from 'react-icons/fa';

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen text-gray-200 py-20 flex items-center justify-center animate-fade-in">
        <div className="bg-dark-card p-12 rounded-2xl shadow-card-hover text-center">
          <h2 className="text-4xl font-bold text-accent-green mb-4">Obrigado!</h2>
          <p className="text-lg text-gray-300">Sua mensagem foi enviada. O Bat-Sinal foi recebido.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-200 py-12 md:py-20 animate-fade-in">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-dark-card p-8 md:p-12 rounded-2xl shadow-card-hover border border-dark-border">
          <h1 className="text-5xl font-display font-bold text-center mb-2 text-gradient-purple-yellow">
            Entre em Contato
          </h1>
          <p className="text-lg text-center text-gray-400 mb-10">
            Tem uma sugestão, crítica ou encontrou um erro? Use o Bat-Fone abaixo.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FaUserAlt className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500" />
              <input 
                type="text" 
                name="name" 
                placeholder="Seu nome de herói"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-dark-lighter border border-dark-border rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all" 
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500" />
              <input 
                type="email" 
                name="email" 
                placeholder="Seu melhor e-mail"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-dark-lighter border border-dark-border rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all" 
              />
            </div>
            <div className="relative">
              <FaPenFancy className="absolute top-5 left-4 text-gray-500" />
              <textarea 
                name="message" 
                placeholder="Sua mensagem..."
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-dark-lighter border border-dark-border rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all resize-y" 
              />
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-accent-yellow text-gray-900 font-bold text-lg rounded-lg shadow-glow-yellow hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;