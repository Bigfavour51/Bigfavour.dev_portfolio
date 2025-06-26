import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: 'Embedded Systems',
      skills: [
        { name: 'STM32 Microcontrollers', level: 95 },
        { name: 'ARM Cortex-M', level: 90 },
        { name: 'RTOS (FreeRTOS)', level: 85 },
        { name: 'Hardware Design', level: 80 },
        { name: 'PCB Design', level: 75 }
      ],
      color: 'primary'
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C/C++', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'Assembly', level: 80 },
        { name: 'Rust', level: 70 }
      ],
      color: 'secondary'
    },
    {
      title: 'IoT & Connectivity',
      skills: [
        { name: 'MQTT/CoAP', level: 90 },
        { name: 'WiFi/Bluetooth', level: 85 },
        { name: 'LoRaWAN', level: 80 },
        { name: 'Cellular (4G/5G)', level: 75 },
        { name: 'Edge Computing', level: 85 }
      ],
      color: 'purple'
    },
    {
      title: 'Software Development',
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Cloud Platforms', level: 80 },
        { name: 'Docker/Kubernetes', level: 75 },
        { name: 'CI/CD', level: 80 }
      ],
      color: 'orange'
    }
  ];

  const tools = [
    'Keil MDK', 'STM32CubeIDE', 'PlatformIO', 'Altium Designer',
    'KiCad', 'MATLAB/Simulink', 'LabVIEW', 'Git/GitHub',
    'Jira', 'Docker', 'AWS/Azure', 'Figma'
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: 'from-primary-500 to-primary-600',
      secondary: 'from-secondary-500 to-secondary-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="skills" className="py-20 section-padding bg-dark-800/50">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building innovative solutions from hardware to cloud
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-dark-800 p-6 rounded-xl border border-dark-700"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 
                        }}
                        className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(category.color)}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-white">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                className="px-4 py-2 bg-dark-700 text-gray-300 rounded-full text-sm hover:bg-primary-500/20 hover:text-primary-300 transition-colors duration-300 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;