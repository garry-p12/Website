import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [screenLines, setScreenLines] = useState<string[]>([]);
  const [screenSize, setScreenSize] = useState({ width: 620, height: 380 });
  const [viewportWidth, setViewportWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1440));
  const screenRef = useRef<HTMLDivElement>(null);
  const fullText = 'Smart Models, Lean Systems, Big Ambitions';

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

  useEffect(() => {
    const commandLines = [
      'class GuruprasadParasnis {',
      '    private static final String ROLE =',
      '        "Software Engineer and Data Scientist";',
      '    private static final List<String> SPECIALTIES =',
      '        List.of(',
      '            "Computer Vision",',
      '            "Software Development",',
      '            "LLMs",',
      '            "Agents"',
      '        );',
      '',
      '    public static void main(String[] args) {',
      '        introduce();',
      '    }',
      '',
      '    private static void introduce() {',
      '        System.out.println(',
      '            """',
      '            I build fast, learn faster, and ship before the coffee cools',
      '            """',
      '        );',
      '    }',
      '}',
      '',
      '',
    ];

    const timers: number[] = [];
    let lineIndex = 0;
    let charIndex = 0;

    const typeLine = () => {
      if (lineIndex >= commandLines.length) {
        timers.push(
          window.setTimeout(() => {
            setScreenLines([]);
            lineIndex = 0;
            charIndex = 0;
            timers.push(window.setTimeout(typeLine, 400));
          }, 800),
        );
        return;
      }

      if (charIndex === 0) {
        setScreenLines((prev) => [...prev, '']);
      }

      const currentLine = commandLines[lineIndex];

      if (charIndex < currentLine.length) {
        setScreenLines((prev) => {
          const updated = [...prev];
          updated[lineIndex] = currentLine.slice(0, charIndex + 1);
          return updated;
        });
        charIndex++;
        timers.push(window.setTimeout(typeLine, 18));
      } else {
        lineIndex++;
        charIndex = 0;
        timers.push(window.setTimeout(typeLine, 160));
      }
    };

    timers.push(window.setTimeout(typeLine, 200));

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (!screenRef.current) return;

      const content = screenRef.current;
      const widthPadding = 210;
      const heightPadding = 220;
      const minWidth = 520;
      const maxWidth = 820;
      const minHeight = 320;
      const maxHeight = 700;

      const nextWidth = Math.max(minWidth, Math.min(maxWidth, content.scrollWidth + widthPadding));
      const nextHeight = Math.max(minHeight, Math.min(maxHeight, content.scrollHeight + heightPadding));

      setScreenSize((prev) => (prev.width === nextWidth && prev.height === nextHeight ? prev : { width: nextWidth, height: nextHeight }));
    };

    const frame = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(frame);
  }, [screenLines, viewportWidth]);

  const socialLinks = [
    { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/guruprasad-parasnis-592479213/' },
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/deatheater_gp/' },
    { icon: 'fas fa-graduation-cap', href: 'https://scholar.google.com/citations?user=4iBhqOkAAAAJ&hl=en' },
    { icon: 'fab fa-github', href: 'https://github.com/garry-p12' },
    { icon: 'fa fa-envelope', href: 'mailto:gparasnis@ucsd.edu' },
  ];

  const computedWidth = Math.min(screenSize.width, Math.max(320, viewportWidth * 0.92));
  const computedHeight = screenSize.height;

  return (
    <section className="hero-section">
      <div className="hero-overlay" />

      <div className="hero-container">
        <div className="hero-grid">
          <motion.div
            className="hero-content"
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
                className="hero-cursor"
              >
                ▌
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
                href="/Website/Fulltime_Resume_Guruprasad.pdf"
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

          <motion.div
            className="hero-showcase"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.div
              className="laptop"
              animate={{ width: computedWidth, height: computedHeight }}
              transition={{ type: 'spring', stiffness: 220, damping: 28 }}
              style={{ maxWidth: '96vw' }}
            >
              <div className="laptop-screen">
                <div className="screen-header">
                  <span className="screen-dot dot-red" />
                  <span className="screen-dot dot-yellow" />
                  <span className="screen-dot dot-green" />
                  <span className="screen-title">Main.java</span>
                </div>
                <div className="screen-body" ref={screenRef}>
                  {screenLines.map((line, index) => {
                    const lineNumber = String(index + 1).padStart(2, '0');
                    const content = line.length ? line : '\u00A0';

                    return (
                      <div
                        key={`${line}-${index}`}
                        className={`screen-line ${index === screenLines.length - 1 ? 'active' : ''}`}
                      >
                        <span className="line-number">{lineNumber}</span>
                        <span className="screen-text">{content}</span>
                        {index === screenLines.length - 1 && <span className="screen-cursor" />}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="laptop-base" />
            </motion.div>
          </motion.div>
        </div>
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
