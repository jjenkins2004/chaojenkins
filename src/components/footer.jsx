import logo from "../assets/logo.png";
import { MapPin, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1250px] text-white py-6">
      <div className="flex px-6 flex-col items-center">
        <div className="flex w-full border-t border-[var(--color-primary)] py-8 px-2">
          <div className="flex w-1/2">
            <a href="/" className="text-xl font-semibold text-gray-900">
              <img src={logo} alt="Logo" className="w-56 h-auto rounded-lg" />
            </a>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-between py-12">
            <div className="flex items-center space-x-2 text-blue-500">
              <MapPin size={24} />
              <span>123 Main St, City, Country</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone size={24} />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex space-x-4 text-2xl text-gray-600">
              <a href="/">
                <FaInstagram className="hover:text-pink-500" />
              </a>
              <a href="/">
                <FaLinkedin className="hover:text-blue-700" />
              </a>
              <a href="/">
                <FaFacebook className="hover:text-blue-600" />
              </a>
              <a href="/">
                <FaYoutube className="hover:text-red-500" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--color-primary)] flex justify-between w-full px-3 py-2">
          <nav className="flex items-center space-x-12">
            <a href="/services" className="text-gray-700 hover:text-black">
              Services
            </a>
            <a href="/portfolio" className="text-gray-700 hover:text-black">
              Portfolio
            </a>
            <a href="/about" className="text-gray-700 hover:text-black">
              About us
            </a>
            <a href="/support" className="text-gray-700 hover:text-black">
              Support
            </a>
          </nav>
          <div className="text-gray-500 font-light text-sm">
            Copyright © 2024 • Chao Jenkins Tech
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
