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
    { icon: FiCode, label: 'Projects Completed', value: '50+' },
    { icon: FiAward, label: 'Certifications', value: '15+' },
    { icon: FiUsers, label: 'Clients Served', value: '25+' },
    { icon: FiTrendingUp, label: 'Years Experience', value: '5+' }
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
            Transforming ideas into reality through cutting-edge technology and innovative engineering solutions. I am an Embedded Systems Engineer, Web & Mobile App Developer, and Tech Innovator based in Abuja, Nigeria.
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
                Engineering Excellence in Every Solution
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                As an Embedded Systems Engineer with a passion for innovation, I specialize in 
                developing robust, scalable solutions that bridge the gap between hardware and software. 
                My expertise spans from low-level firmware development to modern SaaS applications.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Based in Nigeria's vibrant tech ecosystem, I've had the privilege of working on 
                diverse projects ranging from IoT devices and industrial automation systems to 
                cloud-based applications that serve thousands of users globally.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-secondary-400">My Journey</h4>
              <p className="text-gray-400 leading-relaxed">
                My journey began with a curiosity about how things work, which led me to pursue 
                embedded systems engineering. Over the years, I've evolved from writing my first 
                "Hello World" program to architecting complex systems that solve real-world problems. 
                I believe in continuous learning and staying at the forefront of technological innovation.
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