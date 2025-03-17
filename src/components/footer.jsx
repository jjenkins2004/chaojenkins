import React from "react";
import { Link } from "react-router-dom"; // <-- Import Link
import logo from "../assets/logo.png";
import { MapPin, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center text-white py-6">
      <div className="flex px-6 flex-col items-center w-full max-w-[1250px]">
        <div className="flex w-full border-t border-[var(--color-primary)] py-4 md:py-8 px-2">
          <div className="flex items-center w-1/2">
            <Link to="/" className="h-fit text-xl font-semibold text-gray-900">
              <img
                src={logo}
                alt="Logo"
                className=" w-24 md:w-56 h-auto rounded-lg"
              />
            </Link>
          </div>

          <div className="w-1/2 flex flex-col items-start md:items-center justify-between py-2 md:py-12 text-sm md:text-base gap-2 md:gap-4">
            <div className="flex items-center space-x-2 text-blue-500">
              <MapPin size={24} />
              <span>123 Main St, City, Country</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone size={24} />
              <span>(123) 456-7890</span>
            </div>

            <div className="flex space-x-4 text-2xl text-gray-600">
              <Link to="/">
                <FaInstagram className="hover:text-pink-500" />
              </Link>
              <Link to="/">
                <FaLinkedin className="hover:text-blue-700" />
              </Link>
              <Link to="/">
                <FaFacebook className="hover:text-blue-600" />
              </Link>
              <Link to="/">
                <FaYoutube className="hover:text-red-500" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-primary)] w-full px-3 py-2">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <nav className="grid mt-3 md:mt-0 justify-items-center grid-cols-2 gap-2 md:flex md:items-center md:space-x-12">
              <Link to="/services" className="text-gray-700 hover:text-black">
                Services
              </Link>
              <Link to="/portfolio" className="text-gray-700 hover:text-black">
                Portfolio
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-black">
                About us
              </Link>
              <Link to="/support" className="text-gray-700 hover:text-black">
                Support
              </Link>
            </nav>
            <div className="mt-5 text-center text-gray-500 font-light text-sm md:mt-0">
              Copyright © 2024 • Chao Jenkins Tech
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
