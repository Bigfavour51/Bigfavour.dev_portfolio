"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const framer_motion_1 = require("framer-motion");
const fi_1 = require("react-icons/fi");
const fa_1 = require("react-icons/fa");
const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        {
            icon: fi_1.FiGithub,
            href: 'https://github.com/Bigfavour51',
            label: 'GitHub',
            color: 'hover:text-gray-300'
        },
        {
            icon: fi_1.FiLinkedin,
            href: 'https://www.linkedin.com/in/aina-favour-olalekan-776a36257',
            label: 'LinkedIn',
            color: 'hover:text-blue-400'
        },
        {
            icon: fa_1.FaWhatsapp,
            href: 'https://wa.me/2347041256378',
            label: 'WhatsApp',
            color: 'hover:text-green-400'
        },
        {
            icon: fi_1.FiMail,
            href: 'mailto:bigfavour51@gmail.com',
            label: 'Email',
            color: 'hover:text-primary-400'
        }
    ];
    const quickLinks = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#now', label: 'Now' },
        { href: '#blog', label: 'Blog' },
        { href: '#contact', label: 'Contact' }
    ];
    return (<footer className="bg-dark-800 border-t border-dark-700">
      <div className="container-width section-padding py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Bigfavour.dev
              </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Embedded Systems Engineer and Tech Innovator based in Lagos, Nigeria. 
                Building the future through innovative hardware and software solutions.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 mb-4">
                <fi_1.FiMapPin className="text-primary-400" size={16}/>
                <span>Abuja, Nigeria</span>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (<framer_motion_1.motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={`text-gray-400 ${link.color} transition-colors duration-300`} whileHover={{ scale: 1.1, y: -2 }} aria-label={link.label}>
                    <link.icon size={20}/>
                  </framer_motion_1.motion.a>))}
              </div>
            </framer_motion_1.motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (<li key={link.href}>
                    <a href={link.href} className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>))}
              </ul>
            </framer_motion_1.motion.div>
          </div>

          {/* Services */}
          <div>
            <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <h4 className="text-lg font-semibold text-white mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>Embedded Systems Development</li>
                <li>IoT Solutions</li>
                <li>SaaS Development</li>
                <li>Technical Consulting</li>
                <li>Firmware Development</li>
                <li>Hardware Design</li>
              </ul>
            </framer_motion_1.motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="border-t border-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Bigfavour Aina. All rights reserved.
          </div>
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <span>Made with</span>
            <framer_motion_1.motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
              <fi_1.FiHeart className="text-red-400" size={14}/>
            </framer_motion_1.motion.div>
            <span>in Lagos, Nigeria</span>
          </div>
        </framer_motion_1.motion.div>

        {/* Back to Top */}
        <framer_motion_1.motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="text-center mt-8">
          <framer_motion_1.motion.a href="#home" className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300" whileHover={{ y: -2 }}>
            <span>Back to Top</span>
            <framer_motion_1.motion.div animate={{ y: [-2, 2, -2] }} transition={{ duration: 2, repeat: Infinity }}>
              ↑
            </framer_motion_1.motion.div>
          </framer_motion_1.motion.a>
        </framer_motion_1.motion.div>
      </div>
    </footer>);
};
exports.default = Footer;
