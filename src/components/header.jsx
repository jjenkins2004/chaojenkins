import {React, useState} from "react";
import { Link } from "react-router-dom"; 
import logo_small from "../assets/logo_small.png";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full fixed top-0 left-0 px-2 py-2 z-10">
      <div className="bg-[var(--color-background)]/60 shadow-md px-5 py-3 flex justify-between items-center rounded-lg backdrop-blur-md">
        <Link to="/" className="text-xl font-semibold text-gray-900">
          <img src={logo_small} alt="Logo" className="w-24 md:w-32 h-auto rounded-lg" />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/services" className="text-gray-700 hover:text-black">
            Services
          </Link>
          <div className="rounded-lg w-[2px] h-5 bg-[var(--color-primary)]"></div>
          <Link to="/portfolio" className="text-gray-700 hover:text-black">
            Portfolio
          </Link>
          <div className="rounded-lg w-[2px] h-5 bg-[var(--color-primary)]"></div>
          <Link to="/about" className="text-gray-700 hover:text-black">
            About us
          </Link>
          <div className="rounded-lg w-[2px] h-5 bg-[var(--color-primary)]"></div>
          <Link to="/support" className="text-gray-700 hover:text-black">
            Support
          </Link>
        </nav>
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden transform translate-y-1">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[var(--color-background)] shadow-md px-5 py-3 mt-1 rounded-lg backdrop-blur-md">
          <ul className="flex flex-col space-y-3">
            <li>
              <Link to="/services" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-black">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-black">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-black">
                About us
              </Link>
            </li>
            <li>
              <Link to="/support" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-black">
                Support
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
