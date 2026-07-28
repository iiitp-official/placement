import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-footer text-white pt-12 pb-8 mt-auto border-t-4 border-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/img/logo/1.png" alt="IIIT Pune" className="w-12 h-12 bg-white rounded-full p-1" />
              <h3 className="text-xl font-bold font-serif tracking-wide text-white">IIIT Pune</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Career Development & Corporate Relation Centre (CDCRC). 
              Nurturing industry practices with focus on development, cultivating skills and innovation.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-accent-dark transition">Home</Link></li>
              <li><Link to="/placement" className="hover:text-accent-dark transition">Placement Statistics</Link></li>
              <li><Link to="/recruiters" className="hover:text-accent-dark transition">Our Recruiters</Link></li>
              <li><Link to="/contact" className="hover:text-accent-dark transition">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-1 text-accent-dark"></i>
                <span>Indian Institute of Information Technology Pune,<br/> Talegaon, Pune, Maharashtra - 410507</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-accent-dark"></i>
                <a href="mailto:placements@iiitp.ac.in" className="hover:text-white transition">placements@iiitp.ac.in</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-accent-dark"></i>
                <a href="tel:+919326479440" className="hover:text-white transition">+91 9326479440</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} CDCRC, IIIT Pune. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
