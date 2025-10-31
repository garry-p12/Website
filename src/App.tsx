import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Patents from './components/Patents';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import CodeBackground from './components/CodeBackground';
import './styles/App.css';

function App() {
  // Load Font Awesome and Fira Code font
  useEffect(() => {
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);

    const firaCode = document.createElement('link');
    firaCode.rel = 'stylesheet';
    firaCode.href = 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap';
    document.head.appendChild(firaCode);

    return () => {
      if (document.head.contains(fontAwesome)) {
        document.head.removeChild(fontAwesome);
      }
      if (document.head.contains(firaCode)) {
        document.head.removeChild(firaCode);
      }
    };
  }, []);

  return (
    <div className="App">
      <CodeBackground />
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-header">About Me</h2>
            <div className="about-content">
              <motion.img
                src="/modern-portfolio/images/profile_pic-transformed.jpeg"
                alt="Profile"
                className="about-image"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <div className="about-text">
                <p>
                  Hey there! I am Guruprasad Parasnis, a DS masters student at UC San Diego. I am a Data Science and Machine Learning enthusiast with a profound interest in the mathematical, statistical and analytical aspects revolving around these fields. I love researching the interesting algorithms that make up a huge part of these technologies. I have extensive research experience in the field of computer vision and interpretable ML.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Education />
      <Experience />
      <Publications />
      <Patents />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
