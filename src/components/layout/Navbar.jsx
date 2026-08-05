import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
} from "../shared/SocialIcons";

const links = [
  { name: "Home", path: "/", end: true },
  { name: "Placement Statistics", path: "/placement" },
  { name: "Our Recruiters", path: "/recruiters" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  ["Facebook", "https://www.facebook.com/iiitpune/", FacebookIcon],
  ["Twitter", "https://twitter.com/iiitpune", TwitterIcon],
  ["LinkedIn", "https://www.linkedin.com/in/training-and-placement-cell-iiit-pune-1224b9296", LinkedinIcon],
  ["Instagram", "https://www.instagram.com/iiitpune/", InstagramIcon],
  ["YouTube", "https://www.youtube.com/@iiitpune", YoutubeIcon],
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("darkMode") === "true",
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("darkMode", String(isDark));
  }, [isDark]);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
    setSearchQuery("");
  }, [location.pathname]);

  const submitSearch = (event) => {
    event.preventDefault();
    const match = links.find((link) =>
      link.name.toLowerCase().includes(searchQuery.trim().toLowerCase()),
    );
    if (match) navigate(match.path);
  };

  const changeLanguage = (language) => {
    const host = window.location.hostname;
    if (language === "en") {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      if (host !== "localhost" && host !== "127.0.0.1") {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${host}; path=/;`;
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${host}; path=/;`;
      }
      sessionStorage.removeItem("langSet");
    } else {
      document.cookie = `googtrans=/en/${language}; path=/`;
      if (host !== "localhost" && host !== "127.0.0.1") {
        document.cookie = `googtrans=/en/${language}; domain=${host}; path=/`;
        document.cookie = `googtrans=/en/${language}; domain=.${host}; path=/`;
      }
      sessionStorage.setItem("langSet", "true");
    }
    window.location.reload();
  };
  const changeTextSize = (nextSize) => {
    const value =
      nextSize === "reset"
        ? 16
        : Math.max(14, Math.min(20, fontSize + nextSize));
    setFontSize(value);
    document.documentElement.style.fontSize = `${value}px`;
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-primary dark:bg-surface-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-blue-800/50 dark:border-gray-800">
        <div className="flex justify-between items-center py-1 md:py-2 gap-4">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 md:space-x-3 shrink-0 min-w-0 max-w-[calc(100vw-88px)] sm:max-w-none"
            aria-label="IIIT Pune home"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex items-center justify-center shrink-0 bg-white">
              <img
                src="/logo/iiitp_logo.png"
                alt="IIIT Pune Logo"
                className="w-full h-full object-contain mix-blend-multiply scale-[1.6]"
              />
            </div>
            <div className="text-white dark:text-text-dark leading-tight min-w-0 overflow-hidden">
              <h1 className="text-center text-[10px] sm:text-xl md:text-xl lg:text-2xl font-bold font-serif">
                भारतीय सूचना प्रौद्योगिकी संस्थान, पुणे
              </h1>
              <h2 className="text-center text-[8px] sm:text-xs md:text-sm lg:text-base font-medium opacity-90 font-serif mt-0.5">
                Indian Institute of Information Technology Pune
              </h2>
              <p className="text-center text-[7px] sm:text-[9px] md:text-[13px] opacity-80 mt-0.5">
                (An Institute of National Importance by an Act of Parliament)
              </p>
              <p className="text-center text-[7px] sm:text-[10px] md:text-[14px] opacity-70 mt-0.5">
                Talegaon, Pune, Maharashtra - 410507
              </p>
            </div>
          </Link>

          <div className="flex flex-col items-end gap-1 md:gap-1.5">
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-1.5 rounded-lg text-white hover:bg-blue-700 dark:hover:bg-gray-700"
                aria-label="Toggle dark mode"
                title={isDark ? "Light mode" : "Dark mode"}
              >
                {isDark ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
              <span className="hidden md:block h-5 w-px bg-blue-700 dark:bg-gray-600" />
              <div className="hidden md:flex items-center gap-2">
                {socialLinks.map(([name, href, Icon]) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="opacity-80 hover:opacity-100 transition-opacity text-white p-1.5"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <span className="hidden md:block h-5 w-px bg-blue-700 dark:bg-gray-600" />
              <div translate="no" className="notranslate hidden md:flex items-center bg-blue-900/40 dark:bg-gray-800/40 rounded-lg px-1.5 py-1 gap-0.5">
                <button
                  onClick={() => changeLanguage("en")}
                  className="px-1.5 py-0.5 rounded text-xs text-white hover:bg-blue-700"
                >
                  EN
                </button>
                <span className="text-gray-400 text-xs">|</span>
                <button onClick={() => changeLanguage("hi")} className="px-1.5 py-0.5 rounded text-xs text-white hover:bg-blue-700">
                  हिं
                </button>
              </div>
              <span className="hidden md:block h-5 w-px bg-blue-700 dark:bg-gray-600" />
              <div translate="no" className="notranslate hidden md:flex items-center bg-blue-900/40 dark:bg-gray-800/40 rounded-lg px-1.5 py-1 gap-0.5">
                <button
                  onClick={() => changeTextSize(-1)}
                  className="px-1.5 py-0.5 text-xs text-white"
                >
                  A-
                </button>
                <button
                  onClick={() => changeTextSize("reset")}
                  className="px-1.5 py-0.5 text-xs text-white"
                >
                  A
                </button>
                <button
                  onClick={() => changeTextSize(1)}
                  className="px-1.5 py-0.5 text-sm font-bold text-white"
                >
                  A+
                </button>
              </div>
              <button
                className="md:hidden p-1.5 text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-white p-1.5 hover:text-brand-red"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              {searchOpen && (
                <form onSubmit={submitSearch} className="flex">
                  <input
                    autoFocus
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search pages"
                    className="w-36 px-2 py-1 text-xs rounded-l-md border-0 bg-white text-gray-900 dark:bg-gray-100 dark:text-gray-900 placeholder:text-gray-500 focus:outline-none"
                    aria-label="Search pages"
                  />
                  <button
                    className="bg-brand-red text-white px-2 rounded-r-md"
                    aria-label="Submit search"
                  >
                    <Search className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <nav
        className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex justify-center items-center py-2 gap-x-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.end}
              className={({ isActive }) =>
                `relative py-1 px-2.5 text-xs md:text-sm font-medium transition-colors duration-200 group flex items-center text-white hover:text-brand-red dark:text-gray-200 dark:hover:text-brand-red-dark ${isActive ? "text-brand-red dark:text-brand-red-dark" : ""}`
              }
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red dark:bg-brand-red-dark transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100 group-[.text-brand-red]:scale-x-100" />
            </NavLink>
          ))}
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden overflow-hidden bg-primary dark:bg-surface-dark border-t border-blue-800/50 dark:border-gray-800 shadow-xl">
          <div className="px-4 py-4 space-y-2">
            <div className="flex items-center justify-center gap-5 px-3 py-3 border-b border-white/10">
              {socialLinks.map(([name, href, Icon]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="text-white p-1.5"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <form onSubmit={submitSearch} className="flex w-full pt-2" role="search">
              <input
                autoFocus
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search pages"
                className="min-w-0 flex-1 px-3 py-2 text-sm rounded-l-md border-0 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none"
                aria-label="Search pages"
              />
              <button type="submit" className="bg-brand-red text-white px-3 rounded-r-md" aria-label="Submit search">
                <Search className="w-4 h-4" />
              </button>
            </form>
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-semibold text-white ${isActive ? "bg-brand-red" : "hover:bg-blue-800/50"}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
