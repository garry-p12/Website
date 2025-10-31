import { motion } from 'framer-motion';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: 'fas fa-code',
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'C++', 'TypeScript', 'R', 'SQL', 'MATLAB']
    },
    {
      icon: 'fas fa-cogs',
      title: 'ML/DL Frameworks',
      skills: ['PyTorch', 'TensorFlow', 'XGBoost', 'Keras', 'Scikit-learn', 'OpenCV']
    },
    {
      icon: 'fas fa-chart-bar',
      title: 'Data Science Tools',
      skills: ['Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Plotly']
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud & Tools',
      skills: ['AWS', 'AWS Bedrock', 'Spring Boot', 'Git', 'Docker', 'CDK', 'Streamlit', 'Linux']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          Technical Skills
        </motion.h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)' }}
            >
              <h4 className="skill-category-title">
                <i className={category.icon}></i>
                {category.title}
              </h4>
              <div className="skill-items">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="skill-badge"
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

