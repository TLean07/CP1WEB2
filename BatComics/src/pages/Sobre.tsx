import React from 'react';
import { FaBookReader, FaFeatherAlt } from 'react-icons/fa';

const Sobre: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-200 py-12 md:py-20 animate-fade-in">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-dark-card p-8 md:p-12 rounded-2xl shadow-card-hover border border-dark-border">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-center mb-6 text-gradient-purple-yellow">
            Sobre o BatComics
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-400 mb-10">
            O santuário digital para todos os fãs do maior detetive do mundo.
          </p>
          
          <div className="space-y-8 text-gray-300 leading-relaxed text-base md:text-lg">
            <div className="flex items-start gap-4">
              <FaBookReader className="text-accent-purple text-4xl mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-100 mb-2">Nossa Missão</h2>
                <p>
                  BatComics nasceu da paixão pelas narrativas complexas e pela arte atemporal que definem o universo do Batman. Nossa missão é criar um espaço onde fãs, novos e antigos, possam explorar, discutir e celebrar as histórias em quadrinhos que moldaram o Cavaleiro das Trevas por mais de 80 anos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaFeatherAlt className="text-accent-yellow text-4xl mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-100 mb-2">O Que Você Encontrará Aqui</h2>
                <p>
                  Este é um projeto em constante evolução. Começamos com um catálogo das HQs mais icônicas, permitindo que você marque suas leituras e deixe suas avaliações. No futuro, planejamos expandir com biografias de personagens, análises aprofundadas e muito mais. Este é um trabalho de fã para fãs, construído com as mais modernas tecnologias web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;