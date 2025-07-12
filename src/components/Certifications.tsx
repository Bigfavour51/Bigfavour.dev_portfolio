import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const certifications = [
    {
      title: 'Professional PCB Design using EASYEDA',
      issuer: 'UDEMY',
      date: '2024',
      description: 'Advance lectures on designing printed circuit boards',
      credentialId: 'EASYEDA01-CM-2024-001',
      category: 'Electronics',
      logo: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'AWS Certified IoT Core',
      issuer: 'Amazon Web Services',
      date: '2023',
      description: 'Cloud-based IoT solutions, device management, and data processing',
      credentialId: 'AWS-IOT-2023-456',
      category: 'Cloud & IoT',
      logo: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'Certified LabVIEW Developer',
      issuer: 'National Instruments',
      date: '2023',
      description: 'Advanced data acquisition, instrument control, and automated testing',
      credentialId: 'NI-CLD-2023-789',
      category: 'Instrumentation',
      logo: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'Professional Scrum Master',
      issuer: 'Scrum.org',
      date: '2022',
      description: 'Agile project management and team leadership methodologies',
      credentialId: 'PSM-2022-321',
      category: 'Project Management',
      logo: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'STM32 Advanced Development',
      issuer: 'STMicroelectronics',
      date: '2022',
      description: 'Advanced STM32 microcontroller programming and system optimization',
      credentialId: 'STM-ADV-2022-654',
      category: 'Embedded Systems',
      logo: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2021',
      description: 'Container orchestration, deployment, and microservices architecture',
      credentialId: 'DCA-2021-987',
      category: 'DevOps',
      logo: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering - Electrical/Electronics Engineering',
      institution: 'University of Abuja',
      location: 'FCT, Nigeria',
      year: '2026 - 2028',
      gpa: '4.2/5.0',
      achievements: [
        'First Class Honours',
        'Best Graduating Student - Electronics Department',
        'Outstanding Project Award for IoT-based Smart Grid System'
      ]
    },
    {
      degree: 'Higher National Diploma - Computer Engineering',
      institution: 'Federal Polytechnic, Ilaro',
      location: 'Ilaro, Nigeria',
      year: '2023',
      achievements: [
        'Distinction Grade',
        'Smart Irrigation using Variable Rate Technology '
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Embedded Systems': 'from-primary-500 to-primary-600',
      'Cloud & IoT': 'from-secondary-500 to-secondary-600',
      'Instrumentation': 'from-purple-500 to-purple-600',
      'Project Management': 'from-orange-500 to-orange-600',
      'DevOps': 'from-green-500 to-green-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="certifications" className="py-20 section-padding bg-dark-800/50">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Certifications & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-semibold mb-8 text-white"
          >
            Professional Certifications
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-dark-800 p-6 rounded-xl border border-dark-700 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-dark-700 flex items-center justify-center">
                      <FiAward className="text-primary-400" size={24} />
                    </div>
                    <div>
                      <div className={`px-2 py-1 rounded-full text-xs text-white bg-gradient-to-r ${getCategoryColor(cert.category)}`}>
                        {cert.category}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <FiCalendar size={14} className="mr-1" />
                    {cert.date}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-primary-400 font-medium mb-3">
                  {cert.issuer}
                </p>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-mono">
                    ID: {cert.credentialId}
                  </span>
                  <button className="text-primary-400 hover:text-primary-300 transition-colors">
                    <FiExternalLink size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-semibold mb-8 text-white"
          >
            Education
          </motion.h3>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-dark-800 p-6 rounded-xl border border-dark-700"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-400">
                      <span className="text-primary-400 font-medium">
                        {edu.institution}
                      </span>
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end mt-2 lg:mt-0">
                    <span className="text-gray-300 font-medium">{edu.year}</span>
                    {edu.gpa && (
                      <span className="text-sm text-secondary-400">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>
                
                {edu.achievements && (
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-gray-300 mb-2">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="text-primary-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;