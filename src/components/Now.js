"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const framer_motion_1 = require("framer-motion");
const react_intersection_observer_1 = require("react-intersection-observer");
const fi_1 = require("react-icons/fi");
const Now = () => {
    const [ref, inView] = (0, react_intersection_observer_1.useInView)({
        triggerOnce: true,
        threshold: 0.1
    });
    const currentFocus = [
        {
            icon: fi_1.FiCode,
            title: 'Advanced Embedded AI',
            description: 'Developing AI-powered embedded systems for edge computing applications, focusing on TinyML and neural network optimization.',
            status: 'In Progress',
            color: 'primary'
        },
        {
            icon: fi_1.FiTrendingUp,
            title: 'SaaS Platform Development',
            description: 'Building a comprehensive IoT device management platform for small to medium enterprises in Nigeria.',
            status: 'MVP Stage',
            color: 'secondary'
        },
        {
            icon: fi_1.FiUsers,
            title: 'Tech Community Building',
            description: 'Leading the Lagos Embedded Systems Meetup and organizing workshops for aspiring engineers.',
            status: 'Ongoing',
            color: 'purple'
        },
        {
            icon: fi_1.FiBookOpen,
            title: 'Research & Publication',
            description: 'Working on research paper about "Energy-Efficient IoT Solutions for Smart Cities in Developing Nations".',
            status: 'Writing Phase',
            color: 'orange'
        }
    ];
    const learningGoals = [
        'Rust for Embedded Systems',
        'Machine Learning on Microcontrollers',
        'Advanced PCB Design (RF/Analog)',
        'Kubernetes & Cloud Native Applications',
        'Blockchain & IoT Security'
    ];
    const getColorClasses = (color) => {
        const colors = {
            primary: 'from-primary-500 to-primary-600',
            secondary: 'from-secondary-500 to-secondary-600',
            purple: 'from-purple-500 to-purple-600',
            orange: 'from-orange-500 to-orange-600'
        };
        return colors[color] || colors.primary;
    };
    const getStatusColor = (status) => {
        const colors = {
            'In Progress': 'text-blue-400 bg-blue-400/20',
            'MVP Stage': 'text-green-400 bg-green-400/20',
            'Ongoing': 'text-purple-400 bg-purple-400/20',
            'Writing Phase': 'text-orange-400 bg-orange-400/20'
        };
        return colors[status] || 'text-gray-400 bg-gray-400/20';
    };
    return (<section id="now" className="py-20 section-padding">
      <div className="container-width">
        <framer_motion_1.motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What I'm <span className="gradient-text">Working On</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Current projects, learning goals, and initiatives I'm passionate about right now
          </p>
        </framer_motion_1.motion.div>

        {/* Current Focus Areas */}
        <div className="mb-16">
          <framer_motion_1.motion.h3 initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="text-2xl font-semibold mb-8 text-white flex items-center">
            <fi_1.FiTarget className="text-primary-400 mr-3"/>
            Current Focus Areas
          </framer_motion_1.motion.h3>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {currentFocus.map((item, index) => (<framer_motion_1.motion.div key={item.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 * index }} className="bg-dark-800 p-6 rounded-xl border border-dark-700 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${getColorClasses(item.color)}`}>
                    <item.icon className="text-white" size={24}/>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </framer_motion_1.motion.div>))}
          </div>
        </div>

        {/* Learning & Development */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Current Learning */}
          <framer_motion_1.motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="bg-dark-800 p-8 rounded-xl border border-dark-700">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <fi_1.FiBookOpen className="text-secondary-400 mr-3"/>
              Currently Learning
            </h3>
            <div className="space-y-4">
              {learningGoals.map((goal, index) => (<framer_motion_1.motion.div key={goal} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }} className="flex items-center space-x-3 p-3 bg-dark-700 rounded-lg">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"/>
                  <span className="text-gray-300">{goal}</span>
                </framer_motion_1.motion.div>))}
            </div>
          </framer_motion_1.motion.div>

          {/* Community Involvement */}
          <framer_motion_1.motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="bg-dark-800 p-8 rounded-xl border border-dark-700">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <fi_1.FiGlobe className="text-purple-400 mr-3"/>
              Community Impact
            </h3>
            <div className="space-y-6">
              <div className="p-4 bg-dark-700 rounded-lg">
                <h4 className="font-semibold text-white mb-2">
                  Lagos Embedded Systems Meetup
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Leading monthly meetups for 200+ engineers, organizing workshops and industry talks.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-primary-400">150+ Members</span>
                  <span className="text-secondary-400">Monthly Events</span>
                </div>
              </div>
              
              <div className="p-4 bg-dark-700 rounded-lg">
                <h4 className="font-semibold text-white mb-2">
                  Tech Mentorship Program
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Mentoring 15+ junior engineers in embedded systems and career development.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-orange-400">15+ Mentees</span>
                  <span className="text-green-400">Weekly Sessions</span>
                </div>
              </div>
              
              <div className="p-4 bg-dark-700 rounded-lg">
                <h4 className="font-semibold text-white mb-2">
                  Open Source Contributions
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Contributing to IoT and embedded systems libraries on GitHub.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-blue-400">25+ PRs</span>
                  <span className="text-purple-400">5 Projects</span>
                </div>
              </div>
            </div>
          </framer_motion_1.motion.div>
        </div>

        {/* Call to Action */}
        <framer_motion_1.motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.8 }} className="text-center mt-16 p-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl border border-primary-500/20">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Interested in Collaborating?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, especially those involving embedded systems, 
            IoT innovation, or tech education initiatives in Nigeria and beyond.
          </p>
          <framer_motion_1.motion.a href="#contact" className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Let's Connect
          </framer_motion_1.motion.a>
        </framer_motion_1.motion.div>
      </div>
    </section>);
};
exports.default = Now;
