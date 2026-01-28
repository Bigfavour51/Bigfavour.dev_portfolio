import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiCode, FiUsers, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { icon: FiCode, label: 'Projects Completed', value: '20+' },
    { icon: FiAward, label: 'Certifications', value: '4+' },
    { icon: FiUsers, label: 'Years Experience', value: '7+' },
    { icon: FiTrendingUp, label: 'Education Level', value: 'HND' }
  ];

  return (
    <section id="about" className="py-20 section-padding">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Aina Favour Olalekan</span>
            <span className="text-base text-gray-400 font-normal ml-2">(Bigfavour)</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Embedded Systems and Electronics Engineer with over 4 years of experience designing PCB-based IoT and robotics systems, embedded Linux platforms, and connected devices that work reliably in real-world environments. Based in Abuja, Nigeria.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary-400">
                Embedded Systems & Hardware Design End-to-End
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                As an Embedded Systems & Hardware Design Engineer, I specialize in taking products from schematic and PCB 
                design through firmware, testing, and deployment. My expertise spans ESP32 and STM32-based systems, 
                multi-layer PCB design, embedded Linux (Buildroot, Yocto), sensor integration, and IoT connectivity for 
                real-world devices.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Currently working at Innov8 Hub as an Embedded Linux and IoT Engineer, I've led teams 
                in designing electrical power stations for micro enterprises and have extensive experience 
                in electronics circuit design, firmware development, PCB design and assembly, and IoT integration.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-secondary-400">My Journey</h4>
              <p className="text-gray-400 leading-relaxed">
                My journey began with a National Diploma in Computer Engineering from Federal Polytechnic Ilaro, 
                where I graduated with Distinction. I continued with a Higher National Diploma, also with Distinction, 
                while building my expertise through freelance embedded systems work since 2018. I've worked with 
                companies like Flexenclosure Technologies Ltd and Innov8 Hub, contributing to projects ranging from 
                telecom Battery Management Systems diagnostics to power monitoring, EdTech hardware, and IoT platforms. 
                I believe in continuous learning and staying at the forefront of embedded systems, hardware design, and IoT technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-secondary-500/20 text-secondary-300 rounded-full text-sm">
                Tech Enthusiast
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                Innovator
              </span>
              <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                Team Player
              </span>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-dark-800 p-6 rounded-xl text-center card-hover border border-dark-700"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-lg mb-4">
                  <stat.icon className="text-primary-400" size={24} />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;