import { motion } from 'framer-motion';
import '../styles/Publications.css';

const Patents = () => {
  const patents = [
    {
      image: '/Portfolio/images/driving.jpeg',
      title: 'Real-time Obstacle Detection and Response System for Safer Driving',
      publisher: 'Published in: Indian Patent Office',
      link: 'https://drive.google.com/file/d/122ylixphXiJLTEYJUCanwdIzojDNvwu_/view'
    },
    {
      image: '/Portfolio/images/women.jpeg',
      title: 'Lakshman Rekha - An AI and IoT powered Women Safety System',
      publisher: 'Published in: Indian Patent Office',
      link: 'https://drive.google.com/file/d/1hQGSMiPD1n7VqwPBfwkktKtKCdBF4tz-/view'
    },
    {
      image: '/Portfolio/images/cctv.jpg',
      title: 'EyeSpy Analytics - A CCTV Analytics Solution',
      publisher: 'Published in: Indian Patent Office',
      link: 'https://drive.google.com/file/d/1hpNVu-Ppw-AD0L_6LNNnnKUR_gfI1QCG/view?usp=sharing'
    }
  ];

  return (
    <section id="patents" className="publications-section">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          Patents
        </motion.h2>
        <div className="publications-grid">
          {patents.map((patent, index) => (
            <motion.div
              key={index}
              className="publication-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)' }}
            >
              <div className="publication-image-container">
                <img src={patent.image} alt={patent.title} className="publication-image" />
                <div className="publication-overlay" />
              </div>
              <div className="publication-content">
                <a href={patent.link} target="_blank" rel="noopener noreferrer" className="publication-title">
                  {patent.title}
                </a>
                <p className="publication-publisher">{patent.publisher}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patents;

