import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
} from "../shared/SocialIcons";

const socialLinks = [
  ["Facebook", "https://www.facebook.com/iiitpune", FacebookIcon],
  ["Twitter", "https://twitter.com/iiitpune", TwitterIcon],
  ["LinkedIn", "https://www.linkedin.com/in/training-and-placement-cell-iiit-pune-1224b9296", LinkedinIcon],
  ["Instagram", "https://www.instagram.com/iiitpune/", InstagramIcon],
  ["YouTube", "https://www.youtube.com/@iiitpune", YoutubeIcon],
];
const footerLinks = [
  ["Home", "/"],
  ["Placement Statistics", "/placement"],
  ["Our Recruiters", "/recruiters"],
  ["Contact", "/contact"],
  ["Alumni", "https://www.iiitp.ac.in/alumni", true],
  ["IIIT Pune Main Website", "https://iiitp.ac.in", true],
];

export default function Footer() {
  return (
    <footer className="bg-footer text-gray-300 border-t border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <h3 className="text-brand-red font-serif text-xl font-bold mb-6 border-b border-gray-700 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 gap-y-3 text-left">
              {footerLinks.map(([label, path, external]) => (
                <li key={path}>
                  {external ? (
                    <a href={path} target="_blank" rel="noreferrer" className="hover:text-brand-red transition-colors flex items-start group">
                      <ExternalLink size={14} className="mr-2 mt-1 shrink-0 text-[#0d6efd]" />
                      <span className="leading-tight">{label}</span>
                    </a>
                  ) : (
                    <Link to={path} className="hover:text-brand-red transition-colors flex items-start group">
                      <ExternalLink size={14} className="mr-2 mt-1 shrink-0 text-[#0d6efd]" />
                      <span className="leading-tight">{label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-brand-red font-serif text-xl font-bold mb-6 border-b border-gray-700 pb-2 inline-block">
              Locate Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-red mr-3 mt-1 shrink-0" />
                <p className="leading-relaxed text-sm">
                  Indian Institute of Information Technology (IIIT) Pune
                  <br />
                  Talegaon, Pune
                  <br />
                  Maharashtra - 410507
                </p>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="w-5 h-5 text-brand-red mr-3 shrink-0" />
                <a href="tel:+919326479440" className="hover:text-brand-red">
                  +91 93264 79440
                </a>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="w-5 h-5 text-brand-red mr-3 shrink-0" />
                <a
                  href="mailto:placements@iiitp.ac.in"
                  className="hover:text-brand-red"
                >
                  placements@iiitp.ac.in
                </a>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                {socialLinks.map(([name, href, Icon]) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-brand-red font-serif text-xl font-bold mb-6 border-b border-gray-700 pb-2 inline-block">
              Map Location
            </h3>
            <a
              href="https://maps.google.com/?q=IIIT+Pune"
              target="_blank"
              rel="noreferrer"
              className="block h-40 w-full rounded-lg overflow-hidden border border-gray-800 relative group shadow-sm"
            >
              <iframe
                title="IIIT Pune Location Map"
                src="https://www.google.com/maps?q=IIIT+Pune&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="absolute inset-0 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
              />
              <div className="absolute bottom-2 right-2 z-10 bg-black/70 group-hover:bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded">
                View Large Map
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black/40 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-400">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center text-center md:text-left">
            <div className="text-xs text-gray-500 md:justify-self-start">
              Designed &amp; Developed by{" "}
              <a
                href="https://www.linkedin.com/in/hardik-jha-a1985b160"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-red transition-colors"
              >
                Hardik Jha
              </a>
            </div>
            <div className="md:justify-self-center">
              © 2026 IIIT Pune. All rights reserved.
            </div>
            <div className="md:justify-self-end md:text-right">
              IIIT Pune Placement Cell
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
