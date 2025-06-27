import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    {
      icon: FiGithub,
      href: 'https://github.com/Bigfavour51',
      label: 'GitHub'
    },
    {
      icon: FiLinkedin,
      href: 'https://www.linkedin.com/in/aina-favour-olalekan-776a36257',
      label: 'LinkedIn'
    },
    {
      icon: FaWhatsapp,
      href: '#contact',
      label: 'WhatsApp'
    },
    {
      icon: FiMail,
      href: '#contact',
      label: 'Email'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2 text-gray-400"
              >
                <FiMapPin className="text-primary-400" />
                <span>Abuja, Nigeria</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl font-bold"
              >
                Hi, I'm{' '}
                <span className="gradient-text">Aina Favour Olalekan</span>
                <span className="text-base text-gray-400 font-normal ml-2">(Bigfavour)</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-300 font-medium"
              >
                Embedded Systems Engineer | Web & Mobile App Developer | Tech Innovator | SaaS Enthusiast
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-400 leading-relaxed max-w-2xl"
            >
              Passionate about creating innovative solutions through embedded systems, 
              IoT technologies, and modern software development. I bridge the gap between 
              hardware and software to build the future of technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex space-x-6"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                  aria-label={link.label}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                    '0 0 40px rgba(59, 130, 246, 0.8)',
                    '0 0 20px rgba(59, 130, 246, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-2"
              >
                <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="/IMG_1032.jpeg"
                    alt="Aina Favour Olalekan - Embedded Systems Engineer, Web & Mobile App Developer"
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              
              {/* Floating Tech Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-primary-500 p-3 rounded-full shadow-lg"
              >
                <span className="text-white font-mono text-sm">STM32</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-secondary-500 p-3 rounded-full shadow-lg"
              >
                <span className="text-white font-mono text-sm">IoT</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;