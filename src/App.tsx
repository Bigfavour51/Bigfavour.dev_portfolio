import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
const Projects = React.lazy(() => import('./components/Projects'));
import Certifications from './components/Certifications';
import Now from './components/Now';
const Blog = React.lazy(() => import('./components/Blog'));
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      
      <main id="main-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Skills />
          <Suspense fallback={<div className="text-center py-10">Loading Projects...</div>}>
            <Projects />
          </Suspense>
          <Certifications />
          <Now />
          <Suspense fallback={<div className="text-center py-10">Loading Blog...</div>}>
            <Blog />
          </Suspense>
          <Contact />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;