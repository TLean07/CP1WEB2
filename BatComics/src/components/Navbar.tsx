import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const linkStyle = "flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 hover:text-accent-yellow hover:bg-white/10";
  const activeLinkStyle = "text-accent-yellow bg-white/10 shadow-glow-yellow";

  return (
    <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-dark-border shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-center items-center">
        <ul className="flex items-center space-x-4 md:space-x-8 text-lg font-semibold text-gray-300">
          <li>
            <NavLink to="/" className={({ isActive }) => `${linkStyle} ${isActive ? activeLinkStyle : ''}`}>
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre" className={({ isActive }) => `${linkStyle} ${isActive ? activeLinkStyle : ''}`}>
              <FaInfoCircle />
              <span>Sobre</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" className={({ isActive }) => `${linkStyle} ${isActive ? activeLinkStyle : ''}`}>
              <FaEnvelope />
              <span>Contato</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;