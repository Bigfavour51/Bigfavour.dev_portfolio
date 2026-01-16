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
      title: 'Robotics & Autonomous Systems',
      skills: [
        { name: 'Mobile Robots Design & Control', level: 90 },
        { name: 'Sensor Fusion (IMU, Ultrasonic, Encoders, Cameras)', level: 85 },
        { name: 'Motor Drivers & Kinematics', level: 88 },
        { name: 'Navigation Logic', level: 85 },
        { name: 'Raspberry Pi & BeagleBone Black', level: 90 }
      ],
      color: 'primary'
    },
    {
      title: 'Embedded Systems & Firmware',
      skills: [
        { name: 'STM32, ESP32, AVR, PIC', level: 95 },
        { name: 'C/C++ Real-time Firmware', level: 95 },
        { name: 'Peripheral Drivers (UART, SPI, I2C, ADC, PWM)', level: 90 },
        { name: 'Embedded Linux Driver Development', level: 85 },
        { name: 'Buildroot & Yocto Project', level: 88 }
      ],
      color: 'secondary'
    },
    {
      title: 'Edge AI & Computing',
      skills: [
        { name: 'Edge AI Model Deployment', level: 85 },
        { name: 'Device-level Inference', level: 85 },
        { name: 'Data Acquisition & Preprocessing', level: 88 },
        { name: 'System-level Optimization for Low-power Devices', level: 82 }
      ],
      color: 'purple'
    },
    {
      title: 'IoT, Web & Mobile Platforms',
      skills: [
        { name: 'TypeScript & JavaScript', level: 90 },
        { name: 'React', level: 88 },
        { name: 'Backend & APIs for IoT', level: 85 },
        { name: 'Supabase (Auth, DB, Storage)', level: 85 },
        { name: 'Real-time Device Monitoring Dashboards', level: 88 },
        { name: 'OTA-ready Architectures', level: 80 }
      ],
      color: 'orange'
    },
    {
      title: 'Cloud & DevOps (IoT-Focused)',
      skills: [
        { name: 'AWS IoT Core', level: 88 },
        { name: 'API Gateway, Lambda, DynamoDB, S3', level: 85 },
        { name: 'Linux & Shell Scripting', level: 90 },
        { name: 'Version Control (Git)', level: 92 },
        { name: 'Supabase', level: 85 }
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