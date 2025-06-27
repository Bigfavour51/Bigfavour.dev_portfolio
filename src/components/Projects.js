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
const react_intersection_observer_1 = require("react-intersection-observer");
const fi_1 = require("react-icons/fi");
const Projects = () => {
    const [ref, inView] = (0, react_intersection_observer_1.useInView)({
        triggerOnce: true,
        threshold: 0.1
    });
    const [selectedProject, setSelectedProject] = (0, react_1.useState)(null);
    const projects = [
        {
            title: 'Smart IoT Environmental Monitoring System',
            category: 'Embedded Systems',
            description: 'Real-time environmental monitoring system using STM32 microcontrollers with cloud connectivity for industrial applications.',
            fullDescription: 'A comprehensive IoT solution that monitors temperature, humidity, air quality, and other environmental parameters in real-time. The system uses STM32 microcontrollers for data acquisition, processes sensor data locally, and transmits to cloud platforms for analytics and visualization.',
            technologies: ['STM32', 'FreeRTOS', 'MQTT', 'AWS IoT', 'React Dashboard'],
            image: 'https://images.pexels.com/photos/159613/ghettoblaster-radio-recorder-boombox-old-159613.jpeg?auto=compress&cs=tinysrgb&w=600',
            github: 'https://github.com/Bigfavour51',
            demo: '#',
            featured: true
        },
        {
            title: 'Automated Home Security System',
            category: 'IoT',
            description: 'Advanced home security system with facial recognition, mobile alerts, and remote monitoring capabilities.',
            fullDescription: 'An intelligent home security system that combines computer vision, IoT sensors, and mobile connectivity. Features include facial recognition, motion detection, door/window sensors, and real-time notifications to homeowners via mobile app.',
            technologies: ['Raspberry Pi', 'OpenCV', 'Python', 'Flutter', 'Firebase'],
            image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600',
            github: 'https://github.com/Bigfavour51',
            demo: '#',
            featured: true
        },
        {
            title: 'Industrial Control Dashboard',
            category: 'SaaS',
            description: 'Web-based dashboard for monitoring and controlling industrial equipment with real-time data visualization.',
            fullDescription: 'A modern web application built for industrial automation, providing real-time monitoring, control, and analytics for manufacturing equipment. Features include customizable dashboards, alarm management, and historical data analysis.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Chart.js'],
            image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
            github: 'https://github.com/Bigfavour51',
            demo: '#',
            featured: false
        },
        {
            title: 'Wireless Sensor Network',
            category: 'Embedded Systems',
            description: 'Multi-node wireless sensor network for agricultural monitoring using LoRaWAN technology.',
            fullDescription: 'A scalable wireless sensor network designed for precision agriculture. The system deploys multiple sensor nodes across farm areas to monitor soil moisture, temperature, and crop health, transmitting data via LoRaWAN to a central gateway.',
            technologies: ['STM32', 'LoRaWAN', 'Python', 'PostgreSQL', 'Grafana'],
            image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600',
            github: 'https://github.com/Bigfavour51',
            demo: '#',
            featured: false
        },
        {
            title: 'Smart Energy Management System',
            category: 'IoT',
            description: 'Intelligent energy monitoring and management system for residential and commercial buildings.',
            fullDescription: 'An advanced energy management solution that monitors power consumption patterns, identifies energy waste, and provides automated control over electrical systems. Includes predictive analytics for energy optimization.',
            technologies: ['ESP32', 'MQTT', 'InfluxDB', 'Vue.js', 'Docker'],
            image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600',
            github: 'https://github.com/Bigfavour51',
            demo: '#',
            featured: false
        },
        {
            title: 'Inventory Management SaaS',
            category: 'SaaS',
            description: 'Cloud-based inventory management system with barcode scanning and real-time tracking.',
            fullDescription: 'A comprehensive inventory management platform designed for small to medium businesses. Features include barcode/QR code scanning, automated reorder points, supplier management, and detailed analytics with customizable reports.',
            technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
            image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
            github: 'https://github.com/Bigfavour51',
            demo: '#',
            featured: true
        }
    ];
    const featuredProjects = projects.filter(p => p.featured);
    const allCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
    const [activeCategory, setActiveCategory] = (0, react_1.useState)('All');
    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);
    return (<section id="projects" className="py-20 section-padding">
      <div className="container-width">
        <framer_motion_1.motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions across embedded systems, IoT, and software development
          </p>
        </framer_motion_1.motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (<framer_motion_1.motion.div key={project.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 card-hover cursor-pointer" onClick={() => setSelectedProject(project)}>
              <div className="relative overflow-hidden h-48">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy"/>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"/>
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
                  {project.technologies.slice(0, 3).map((tech) => (<span key={tech} className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded">
                      {tech}
                    </span>))}
                  {project.technologies.length > 3 && (<span className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded">
                      +{project.technologies.length - 3} more
                    </span>)}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors" onClick={(e) => e.stopPropagation()}>
                    <fi_1.FiGithub size={16}/>
                    <span className="text-sm">Code</span>
                  </a>
                  <a href={project.demo} className="flex items-center space-x-2 text-gray-400 hover:text-secondary-400 transition-colors" onClick={(e) => e.stopPropagation()}>
                    <fi_1.FiExternalLink size={16}/>
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </framer_motion_1.motion.div>))}
        </div>

        {/* Category Filter */}
        <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap justify-center gap-4 mb-12">
          {allCategories.map((category) => (<button key={category} onClick={() => setActiveCategory(category)} className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === category
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-gray-300 hover:bg-dark-600'}`}>
              {category}
            </button>))}
        </framer_motion_1.motion.div>

        {/* All Projects Grid */}
        <framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <framer_motion_1.AnimatePresence>
            {filteredProjects.map((project) => (<framer_motion_1.motion.div key={project.title} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.4 }} className="bg-dark-800 rounded-lg overflow-hidden border border-dark-700 card-hover cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="relative h-32">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent"/>
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
                    <fi_1.FiPlay className="text-gray-400" size={14}/>
                  </div>
                </div>
              </framer_motion_1.motion.div>))}
          </framer_motion_1.AnimatePresence>
        </framer_motion_1.motion.div>

        {/* Project Modal */}
        <framer_motion_1.AnimatePresence>
          {selectedProject && (<framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProject(null)}>
              <framer_motion_1.motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} className="bg-dark-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="relative">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover" loading="lazy"/>
                  <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 bg-dark-900/80 p-2 rounded-full text-white hover:bg-dark-900 transition-colors">
                    <fi_1.FiX size={20}/>
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
                      {selectedProject.technologies.map((tech) => (<span key={tech} className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-sm">
                          {tech}
                        </span>))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center space-x-2">
                      <fi_1.FiGithub size={20}/>
                      <span>View Code</span>
                    </a>
                    <a href={selectedProject.demo} className="btn-primary flex items-center space-x-2">
                      <fi_1.FiExternalLink size={20}/>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </framer_motion_1.motion.div>
            </framer_motion_1.motion.div>)}
        </framer_motion_1.AnimatePresence>
      </div>
    </section>);
};
exports.default = Projects;
