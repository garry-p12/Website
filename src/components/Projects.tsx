import { motion } from 'framer-motion';
import '../styles/Publications.css';

const Projects = () => {
  const projects = [
    {
      image: '/Website/images/ai-ta-banner.png',
      title: 'AI Assistant StudyPat for Children',
      tech: 'Technologies used: TensorFlow, PyTorch, React.js',
      link: 'https://github.com/garry-p12/StudyPat'
    },
    {
      image: '/Website/images/creditcard.jpg',
      title: 'Credit Card Customer Segmentation',
      tech: 'Technologies used: Scikit Learn, Numpy, Seaborn, Pandas',
      link: 'https://www.kaggle.com/code/guruprasadparasnis/credit-card-dataset-using-kmeans-clustering'
    },
    {
      image: '/Website/images/employee.png',
      title: 'Employee Attrition Predictor',
      tech: 'Technologies used: Scikit Learn, Numpy, Seaborn, Pandas',
      link: 'https://github.com/garry-p12/Attrition-Streamlit'
    }
  ];

  return (
    <section id="projects" className="publications-section">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          Projects
        </motion.h2>
        <div className="publications-grid">
          {projects.map((project, index) => (
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
                <img src={project.image} alt={project.title} className="publication-image" />
                <div className="publication-overlay" />
              </div>
              <div className="publication-content">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="publication-title">
                  {project.title}
                </a>
                <p className="publication-publisher">{project.tech}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

