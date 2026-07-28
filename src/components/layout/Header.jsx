import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-accent font-bold' : 'text-text hover:text-accent';
  };

  return (
    <header className="bg-white shadow-sm z-50 relative border-b-2 border-accent">
      {/* Header Top - Hidden on mobile */}
      <div className="hidden lg:block border-b border-gray-100 bg-surface py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Social Icons */}
            <div className="flex items-center space-x-4 text-gray-500 text-sm">
              <a href="https://www.linkedin.com/company/cdcrciiitp/" target="_blank" rel="noreferrer" className="hover:text-accent transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <a href="mailto:placements@iiitp.ac.in" className="hover:text-primary transition flex items-center space-x-2">
                <i className="fas fa-envelope"></i>
                <span>placements@iiitp.ac.in</span>
              </a>
              <a href="tel:+919326479440" className="hover:text-primary transition flex items-center space-x-2">
                <i className="fas fa-phone"></i>
                <span>+91 9326479440</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="https://www.iiitp.ac.in" target="_blank" rel="noreferrer" className="flex items-center gap-3">
              <img src="/assets/img/logo/1.png" alt="IIIT Pune Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold text-primary hidden md:block">IIIT Pune</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`font-semibold uppercase text-sm tracking-wider transition ${isActive('/')}`}>Home</Link>
            <Link to="/placement" className={`font-semibold uppercase text-sm tracking-wider transition ${isActive('/placement')}`}>Placement Statistics</Link>
            <Link to="/recruiters" className={`font-semibold uppercase text-sm tracking-wider transition ${isActive('/recruiters')}`}>Our Recruiters</Link>
            <Link to="/contact" className={`font-semibold uppercase text-sm tracking-wider transition ${isActive('/contact')}`}>Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-2xl text-primary focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 z-50">
          <nav className="flex flex-col py-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`px-6 py-3 border-b border-surface uppercase text-sm font-semibold ${isActive('/')}`}>Home</Link>
            <Link to="/placement" onClick={() => setIsMenuOpen(false)} className={`px-6 py-3 border-b border-surface uppercase text-sm font-semibold ${isActive('/placement')}`}>Placement Statistics</Link>
            <Link to="/recruiters" onClick={() => setIsMenuOpen(false)} className={`px-6 py-3 border-b border-surface uppercase text-sm font-semibold ${isActive('/recruiters')}`}>Our Recruiters</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={`px-6 py-3 uppercase text-sm font-semibold ${isActive('/contact')}`}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
