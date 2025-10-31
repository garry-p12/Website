import { motion } from 'framer-motion';
import '../styles/Education.css';

const Education = () => {
  const educationItems = [
    {
      logo: '/modern-portfolio/images/UCSD-Seal-Logo.png',
      school: 'University of California San Diego',
      degree: 'Master of Science in Data Science (2024 - Present)',
      details: [
        'Upcoming DS grad student from Fall 2024'
      ]
    },
    {
      logo: '/modern-portfolio/images/LogoSPIT.png',
      school: 'Sardar Patel Institute of Technology',
      degree: 'Bachelor of Technology in Electronics and Telecommunication (2020 - 2024)',
      details: [
        'CGPA : 9.02/10 (3.85/4)',
        'Important courses : Linear Algebra, Probability and Stochastic Processes, Computer Architecture and Organization, Microcontrollers, Signals and Systems, Digital Signal Processing, Principles of Soft Computing, Artificial Intelligence and Machine Learning, Data Analytics, Speech and Audio Processing',
        'Minor in Computer Engineering'
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-header">Education</h2>
          <div className="timeline">
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-icon">
                  <img src={item.logo} alt={item.school} />
                </div>
                <motion.div
                  className="timeline-content"
                  whileHover={{ x: 10, boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)' }}
                >
                  <h3>{item.school}</h3>
                  <span>{item.degree}</span>
                  <ul>
                    {item.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

