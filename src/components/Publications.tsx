import { motion } from 'framer-motion';
import '../styles/Publications.css';

const Publications = () => {
  const publications = [
    {
      image: '/Portfolio/images/fingerprint.jpg',
      title: 'VerifNet-A Novel Score Fusion-Based Method Leveraging Wavelets with Deep Learning and Minutiae Matching for Contactless Fingerprint Recognition',
      publisher: 'Published in: IEEE Transactions on Biometrics, Behaviour and Identity Science',
      link: 'https://www.techrxiv.org/doi/full/10.36227/techrxiv.23906391.v1'
    },
    {
      image: '/Portfolio/images/mri.jpg',
      title: 'PIXIE: A Novel Loss Function for Binary Semantic Segmentation',
      publisher: 'Under Review: IEEE Transactions on Pattern Analysis and Machine Intelligence',
      link: 'https://www.techrxiv.org/doi/full/10.36227/techrxiv.24204780.v1'
    },
    {
      image: '/Portfolio/images/ctscan.jpg',
      title: 'Advancing Diagnostic Precision: Leveraging Machine Learning Techniques for Accurate Detection of Covid-19, Pneumonia, and Tuberculosis in Chest X-Ray Images',
      publisher: 'Springer Nature',
      link: 'https://www.techrxiv.org/doi/full/10.36227/techrxiv.24204780.v1'
    },
    {
      image: '/Portfolio/images/pothole.jpg',
      title: 'RoadScan: A Novel and Robust Transfer Learning Framework for Autonomous Pothole Detection in Roads',
      publisher: 'Published in: IEEE 7th International Conference on Communication and Information Technology',
      link: 'https://ieeexplore.ieee.org/abstract/document/10455143'
    },
    {
      image: '/Portfolio/images/satellite.png',
      title: 'GARP - A Hybrid Preprocessing Technique for Semantic Segmentation of Satellite Images with U-Net Architecture',
      publisher: 'Published in: IEEE 2nd International Conference on Futuristic Technologies',
      link: 'https://ieeexplore.ieee.org/abstract/document/10425502'
    },
    {
      image: '/Portfolio/images/gan.jpeg',
      title: 'L-WaveBlock: A Novel Feature Extractor Leveraging Wavelets for Generative Adversarial Networks',
      publisher: 'Published in: IEEE 2nd International Conference on Futuristic Technologies',
      link: 'https://ieeexplore.ieee.org/abstract/document/10425499'
    }
  ];

  return (
    <section id="publications" className="publications-section">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          Publications
        </motion.h2>
        <div className="publications-grid">
          {publications.map((pub, index) => (
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
                <img src={pub.image} alt={pub.title} className="publication-image" />
                <div className="publication-overlay" />
              </div>
              <div className="publication-content">
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-title">
                  {pub.title}
                </a>
                <p className="publication-publisher">{pub.publisher}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

