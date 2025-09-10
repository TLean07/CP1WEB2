import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header 
      className="bg-gotham-city bg-cover bg-center bg-no-repeat text-white py-20 md:py-32 text-center relative"
    >
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 container mx-auto px-6 animate-fade-in">
        <Link to="/" className="inline-block no-underline">
          <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-wider text-gradient-yellow-purple drop-shadow-lg transition-transform hover:scale-105 duration-300">
            BatComics
          </h1>
        </Link>
        <p className="text-gray-300 mt-4 text-xl md:text-2xl font-light animate-slide-up max-w-2xl mx-auto">
          Um mergulho profundo no universo dos quadrinhos do Cavaleiro das Trevas.
        </p>
      </div>
    </header>
  );
}

export default Header;