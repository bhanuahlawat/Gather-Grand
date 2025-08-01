import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      window.location.href = "/";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollOrNavigate = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 sticky top-0 w-full z-50 shadow-md">
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={scrollToTop}
        >
          <img
            src="/images/logo.png"
            width={40}
            height={40}
            alt="logo"
            className="rounded-full bg-white p-1"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Gather & Grand
          </h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-6">
          <button
            onClick={() => scrollOrNavigate("features")}
            className="text-white hover:text-yellow-200 transition"
          >
            Features
          </button>
          <button
            onClick={() => scrollOrNavigate("solutions")}
            className="text-white hover:text-yellow-200 transition"
          >
            Event Solutions
          </button>
          <Link
            to="/pricing"
            className="text-white hover:text-yellow-200 transition"
          >
            Pricing
          </Link>
          <button
            onClick={() => scrollOrNavigate("about")}
            className="text-white hover:text-yellow-200 transition"
          >
            About Us
          </button>
          <button
            onClick={() => scrollOrNavigate("footer")}
            className="text-white hover:text-yellow-200 transition"
          >
            Contact
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollOrNavigate("footer")}
            className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold px-4 py-2 rounded-md text-sm md:text-base shadow transition-transform duration-300 hover:scale-105"
          >
            Plan Your Event
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full px-4 pb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
          <nav className="flex flex-col space-y-3 text-white">
            <button
              onClick={() => {
                scrollOrNavigate("features");
                setMenuOpen(false);
              }}
              className="text-left hover:text-yellow-200"
            >
              Features
            </button>
            <button
              onClick={() => {
                scrollOrNavigate("solutions");
                setMenuOpen(false);
              }}
              className="text-left hover:text-yellow-200"
            >
              Event Solutions
            </button>
            <Link
              to="/pricing"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-200"
            >
              Pricing
            </Link>
            <button
              onClick={() => {
                scrollOrNavigate("about");
                setMenuOpen(false);
              }}
              className="text-left hover:text-yellow-200"
            >
              About Us
            </button>
            <button
              onClick={() => {
                scrollOrNavigate("footer");
                setMenuOpen(false);
              }}
              className="text-left hover:text-yellow-200"
            >
              Contact
            </button>
            <button
              onClick={() => {
                scrollOrNavigate("footer");
                setMenuOpen(false);
              }}
              className="mt-3 bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold px-4 py-2 rounded-md shadow w-full"
            >
              Plan Your Event
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
