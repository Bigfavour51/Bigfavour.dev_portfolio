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
      title: 'PCB Design & Electronics',
      skills: [
        { name: 'Schematic Capture & Multi-layer PCB Layout (EasyEDA, KiCad/Eagle-ready)', level: 95 },
        { name: 'DFM & DFA (Design for Manufacturing & Assembly)', level: 90 },
        { name: 'Power Management & Signal Integrity', level: 88 },
        { name: 'Sensor Interfacing & Analog Front-Ends', level: 85 },
        { name: 'PCB Bring-up, Validation & Revision Control', level: 90 }
      ],
      color: 'primary'
    },
    {
      title: 'Embedded Systems & Firmware',
      skills: [
        { name: 'ESP32, STM32, AVR, Arduino', level: 95 },
        { name: 'C/C++ Firmware Development', level: 95 },
        { name: 'Peripheral Drivers (UART, SPI, I²C, ADC, PWM)', level: 92 },
        { name: 'Embedded Linux (Buildroot, Yocto)', level: 88 }
      ],
      color: 'secondary'
    },
    {
      title: 'IoT & Connectivity',
      skills: [
        { name: 'Wi-Fi, MQTT & HTTP-based IoT Devices', level: 90 },
        { name: 'AWS IoT Core & Cloud-connected Devices', level: 88 },
        { name: 'Secure Device Communication & Remote Monitoring', level: 88 },
        { name: 'OTA-ready System Architectures', level: 85 },
        { name: 'LoRa, GSM, Bluetooth (Integration & Expansion)', level: 80 }
      ],
      color: 'purple'
    },
    {
      title: 'Testing & Debugging',
      skills: [
        { name: 'Oscilloscope, Logic Analyzer, Multimeter', level: 92 },
        { name: 'Bench Power Supply & Hardware Bring-up', level: 90 },
        { name: 'Hardware Fault Isolation & Root-cause Analysis', level: 90 },
        { name: 'Functional Testing of PCB Assemblies', level: 88 }
      ],
      color: 'orange'
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Linux, Git & Shell Scripting', level: 92 },
        { name: 'Technical Documentation & Test Reports', level: 88 },
        { name: 'Microsoft Word, Excel & PowerPoint', level: 85 }
      ],
      color: 'green'
    }
  ];

  const tools = [
    'STM32CubeIDE', 'PlatformIO', 'EasyEDA', 'KiCad', 'EEZ Studio',
    'Buildroot', 'Yocto Project', 'Raspberry Pi', 'BeagleBone Black',
    'Git/GitHub', 'Linux', 'Shell Scripting', 'AWS IoT Core',
    'Supabase', 'TypeScript', 'React', 'DGUS DWIN', 'Arduino',
    'ThingSpeak', 'Blynk', 'Fritzing', 'MATLAB/Simulink'
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: 'from-primary-500 to-primary-600',
      secondary: 'from-secondary-500 to-secondary-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      green: 'from-green-500 to-green-600'
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
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
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