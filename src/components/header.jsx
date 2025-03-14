import React from "react";
import logo_small from "../assets/logo_small.png";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 px-2 py-2 z-10">
      <div className="bg-[var(--color-background)]/60 shadow-md px-5 py-3 flex justify-between items-center rounded-lg backdrop-blur-md">
        <a href="/" className="text-xl font-semibold text-gray-900">
          <img src={logo_small} alt="Logo" className="w-32 h-auto rounded-lg" />
        </a>
        <nav className="flex items-center space-x-4">
          <a href="/services" className="text-gray-700 hover:text-black">
            Services
          </a>
          <div className="rounded-lg w-[2px] h-5 bg-[var(--color-primary)]"></div>
          <a href="/portfolio" className="text-gray-700 hover:text-black">
            Portfolio
          </a>
          <div className="rounded-lg w-[2px] h-5 bg-[var(--color-primary)]"></div>{" "}
          <a href="/about" className="text-gray-700 hover:text-black">
            About us
          </a>
          <div className="rounded-lg w-[2px] h-5 bg-[var(--color-primary)]"></div>
          <a href="/support" className="text-gray-700 hover:text-black">
            Support
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
