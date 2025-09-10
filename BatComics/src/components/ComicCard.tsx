import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import type { Comic } from '../types';

interface ComicCardProps {
  comic: Comic;
}

const ComicCard: React.FC<ComicCardProps> = ({ comic }) => {
  const [isRead, setIsRead] = useState<boolean>(false);

  const handleReadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsRead(!isRead);
  };

  const cardBorderColor = isRead ? 'border-accent-green' : 'border-dark-border';
  const buttonBgColor = isRead ? 'bg-accent-red hover:bg-red-500' : 'bg-accent-purple hover:bg-purple-700';
  const buttonText = isRead ? 'Lido' : 'Marcar como Lido';

  return (
    <Link to={`/comic/${comic.id}`} className="block no-underline">
      <div className={`relative bg-dark-card rounded-xl shadow-xl overflow-hidden border-2 ${cardBorderColor} transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-card-hover hover:border-accent-yellow transform group flex flex-col h-full`}>
        <div className="w-full aspect-[2/3] overflow-hidden">
          <img src={comic.coverUrl} alt={`Capa de ${comic.title}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" />
        </div>
        
        <div className="p-5 text-white flex flex-col flex-grow">
          <h3 className="text-2xl font-bold mb-2 text-gray-100 leading-tight group-hover:text-accent-yellow transition-colors duration-300 min-h-[60px] flex items-center">
            {comic.title}
          </h3>
          <p className="text-gray-400 text-lg mb-3">Ano: {comic.year}</p>

          {comic.rating !== undefined && (
            <div className="flex items-center text-accent-yellow mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.round(comic.rating || 0) ? 'text-accent-yellow' : 'text-gray-600'} />
              ))}
              <span className="ml-2 text-gray-300 text-sm">({comic.reviews?.length || 0} reviews)</span>
            </div>
          )}

          <button
            onClick={handleReadClick}
            className={`mt-auto w-full py-3 rounded-lg font-semibold text-white uppercase tracking-wider transition-all duration-300 ease-in-out ${buttonBgColor} shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-card ${isRead ? 'focus:ring-accent-red' : 'focus:ring-accent-purple'}`}
          >
            {buttonText}
            {isRead && <span className="ml-2">✓</span>}
          </button>
          {isRead && (
            <div className="absolute top-3 right-3 bg-accent-green text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-bounce-in">
              Lido
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ComicCard;