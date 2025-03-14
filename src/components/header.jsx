import React from "react";
import { Link } from "react-router-dom"; 
import logo_small from "../assets/logo_small.png";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 px-2 py-2 z-10">
      <div className="bg-[var(--color-background)]/60 shadow-md px-5 py-3 flex justify-between items-center rounded-lg backdrop-blur-md">
        <Link to="/" className="text-xl font-semibold text-gray-900">
          <img src={logo_small} alt="Logo" className="w-32 h-auto rounded-lg" />
        </Link>
        <nav className="flex items-center space-x-4">
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
      </div>
    </header>
  );
};

export default Header;
