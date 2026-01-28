import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiPlay, FiX } from 'react-icons/fi';

interface Project {
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
  featured: boolean;
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Autonomous Mobile Robot Platform (Norah)',
      category: 'Robotics',
      description: 'Designed and built a mobile robot using SBC + microcontroller architecture with integrated sensors for environment awareness and autonomous navigation.',
      fullDescription: 'A complete autonomous mobile robot platform featuring a hybrid SBC + microcontroller architecture. The system integrates multiple sensors (IMU, ultrasonic, encoders, cameras) for comprehensive environment awareness. Implemented motor control, kinematics, and autonomous movement logic with edge intelligence for local decision-making. The robot can navigate autonomously, avoid obstacles, and perform tasks without constant human intervention.',
      technologies: ['Raspberry Pi', 'BeagleBone Black', 'STM32', 'Embedded Linux', 'Sensor Fusion', 'Motor Drivers', 'Edge AI'],
      image: 'https://images.pexels.com/photos/159613/ghettoblaster-radio-recorder-boombox-old-159613.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Bigfavour51',
      demo: '#',
      featured: true
    },
    {
      title: 'End-to-End IoT Platform (Hardware → Cloud → Web)',
      category: 'IoT',
      description: 'Designed custom IoT hardware and built a full-stack platform for device monitoring and control with secure communication and real-time data visualization.',
      fullDescription: 'A comprehensive end-to-end IoT solution from hardware to cloud to web interface. Designed custom IoT hardware with ESP32 microcontrollers, developed firmware for device communication, and built a complete cloud backend using AWS IoT Core. Created a modern web dashboard using React and TypeScript for real-time device monitoring and control. Implemented secure device authentication, OTA updates, and real-time data visualization with Supabase integration for data persistence and user management.',
      technologies: ['ESP32', 'AWS IoT Core', 'TypeScript', 'React', 'Supabase', 'API Gateway', 'Lambda', 'DynamoDB'],
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Bigfavour51',
      demo: '#',
      featured: true
    },
    {
      title: 'Embedded Linux Household Power Monitoring & Control Device',
      category: 'Embedded Linux',
      description: 'Built a custom Embedded Linux system using Buildroot for household power management with touchscreen HMI and real-time electrical parameter monitoring.',
      fullDescription: 'A sophisticated household power monitoring and control device built on a custom Embedded Linux platform. Configured the Linux kernel, root filesystem, and boot process using Buildroot for a lightweight, fast-booting system optimized for low-resource operation. Integrated a touchscreen HMI and developed a touch-based UI with EEZ Studio to monitor electrical parameters (voltage, current, power) in real-time. Implemented hardware communication via UART/SPI/GPIO for reliable load switching, system monitoring, and continuous operation. The device enables users to monitor energy consumption and control household loads efficiently.',
      technologies: ['Buildroot', 'Embedded Linux', 'Yocto Project', 'EEZ Studio', 'UART/SPI/GPIO', 'Touchscreen HMI', 'C/C++'],
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Bigfavour51',
      demo: '#',
      featured: true
    },
    {
      title: 'Electrical Power Station for Micro Enterprises',
      category: 'Embedded Systems',
      description: 'Led the design of an electrical power station targeted for small energy consumers and micro enterprises as part of Innov8 Hub TETFAIR project.',
      fullDescription: 'Led a team in designing a specialized electrical power station solution for micro enterprises and small energy consumers. The system provides reliable power management and monitoring capabilities tailored for small businesses. Integrated embedded systems for power distribution, monitoring, and control with user-friendly interfaces for non-technical users.',
      technologies: ['STM32', 'Embedded Systems', 'Power Electronics', 'PCB Design', 'C/C++'],
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Bigfavour51',
      demo: '#',
      featured: false
    },
    {
      title: 'Telecom Battery Management System Diagnostics',
      category: 'Embedded Systems',
      description: 'Part of a 4-person team involved in diagnostics and repair of faulty telecommunications site Battery Management Systems.',
      fullDescription: 'Worked as part of a specialized team to diagnose and repair Battery Management Systems (BMS) for telecommunications infrastructure. Performed system-level diagnostics, identified faults, and implemented repair solutions to ensure reliable power backup for telecom sites. Gained hands-on experience with industrial embedded systems and power management technologies.',
      technologies: ['BMS', 'System Diagnostics', 'Embedded Electronics', 'Power Systems'],
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Bigfavour51',
      demo: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const allCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 section-padding">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing embedded systems, PCB hardware design, IoT platforms, and robotics projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 card-hover cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-500/90 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-400 hover:text-secondary-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="bg-dark-800 rounded-lg overflow-hidden border border-dark-700 card-hover cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-32">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2 text-white text-sm">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-primary-400">
                      {project.category}
                    </span>
                    <FiPlay className="text-gray-400" size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-dark-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-dark-900/80 p-2 rounded-full text-white hover:bg-dark-900 transition-colors"
                  >
                    <FiX size={20} />
                  </button>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                    <span className="px-3 py-1 bg-primary-500 text-white text-sm rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-white">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center space-x-2"
                    >
                      <FiGithub size={20} />
                      <span>View Code</span>
                    </a>
                    <a
                      href={selectedProject.demo}
                      className="btn-primary flex items-center space-x-2"
                    >
                      <FiExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;