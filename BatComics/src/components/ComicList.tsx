import ComicCard from './ComicCard';
import type { Comic } from '../types';

interface ComicListProps {
  comics: Comic[];
}

const ComicList: React.FC<ComicListProps> = ({ comics }) => {
  return (
    <main className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12">
        {comics.map((comic) => (
          <ComicCard
            key={comic.id}
            comic={comic} 
          />
        ))}
      </div>
      {comics.length === 0 && (
        <p className="text-center text-gray-500 text-xl mt-12 animate-fade-in">Nenhum quadrinho encontrado. 😢</p>
      )}
    </main>
  );
}

export default ComicList;