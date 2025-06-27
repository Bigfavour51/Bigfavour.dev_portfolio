"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const fi_1 = require("react-icons/fi");
const Navbar = () => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [scrolled, setScrolled] = (0, react_1.useState)(false);
    const [darkMode, setDarkMode] = (0, react_1.useState)(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'light' ? false : true;
        }
        return true;
    });
    (0, react_1.useEffect)(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    (0, react_1.useEffect)(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
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
    return (<framer_motion_1.motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          <framer_motion_1.motion.a href="#home" className="text-xl font-bold gradient-text" whileHover={{ scale: 1.05 }}>
            Bigfavour.dev
          </framer_motion_1.motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (<framer_motion_1.motion.a key={item.href} href={item.href} className="text-gray-300 hover:text-primary-400 transition-colors duration-300" whileHover={{ y: -2 }}>
                {item.label}
              </framer_motion_1.motion.a>))}
            <button onClick={() => setDarkMode((prev) => !prev)} className="ml-4 p-2 rounded-full bg-dark-700 hover:bg-dark-600 text-gray-300 hover:text-primary-400 transition-colors" aria-label="Toggle dark mode">
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-primary-400 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <fi_1.FiX size={24}/> : <fi_1.FiMenu size={24}/>}
          </button>
        </div>

        {/* Mobile Navigation */}
        <framer_motion_1.motion.div initial={{ opacity: 0, height: 0 }} animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
        }} className="md:hidden overflow-hidden bg-dark-800 rounded-lg mt-2">
          <div className="py-4 space-y-2">
            {navItems.map((item) => (<a key={item.href} href={item.href} className="block px-4 py-2 text-gray-300 hover:text-primary-400 hover:bg-dark-700 transition-colors" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>))}
            <button onClick={() => setDarkMode((prev) => !prev)} className="mt-2 p-2 rounded-full bg-dark-700 hover:bg-dark-600 text-gray-300 hover:text-primary-400 transition-colors w-full" aria-label="Toggle dark mode">
              {darkMode ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
        </framer_motion_1.motion.div>
      </div>
    </framer_motion_1.motion.nav>);
};
exports.default = Navbar;
