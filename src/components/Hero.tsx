import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Data Science Enthusiast | Computer Vision | Exploring AI';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/guruprasad-parasnis-592479213/' },
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/deatheater_gp/' },
    { icon: 'fas fa-graduation-cap', href: 'https://scholar.google.com/citations?user=4iBhqOkAAAAJ&hl=en' },
    { icon: 'fab fa-github', href: 'https://github.com/garry-p12' },
    { icon: 'fa fa-envelope', href: 'mailto:gparasnis@ucsd.edu' },
  ];

  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="hero-title"
          >
            Guruprasad Parasnis
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hero-subtitle"
          >
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ marginLeft: '8px' }}
            >
              |
            </motion.span>
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="hero-social"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="hero-social-icon"
              >
                <i className={link.icon} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="hero-resume"
          >
            <motion.a
              href="/modern-portfolio/Fulltime_Resume_Guruprasad.pdf"
              download
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="hero-resume-button"
            >
              <i className="fas fa-download" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="hero-scroll"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="hero-scroll-indicator"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="hero-scroll-dot"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
