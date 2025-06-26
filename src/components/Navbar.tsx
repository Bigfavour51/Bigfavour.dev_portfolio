import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'light' ? false : true;
    }
    return true;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#now', label: 'Now' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Bigfavour.dev
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="ml-4 p-2 rounded-full bg-dark-700 hover:bg-dark-600 text-gray-300 hover:text-primary-400 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-primary-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          className="md:hidden overflow-hidden bg-dark-800 rounded-lg mt-2"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-300 hover:text-primary-400 hover:bg-dark-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="mt-2 p-2 rounded-full bg-dark-700 hover:bg-dark-600 text-gray-300 hover:text-primary-400 transition-colors w-full"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;