import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-card text-gray-400 py-8 mt-16 border-t border-dark-border shadow-inner">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold text-gray-200">BatComics</p>
          <p className="text-xs mt-2">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
        <div className="flex space-x-6 text-2xl mb-4 md:mb-0">
          <a href="https://github.com/TLean07" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-yellow transition-colors duration-300">
            <FaGithub />
          </a>
        </div>
        <div className="text-sm">
          <p>Powered by React & TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;