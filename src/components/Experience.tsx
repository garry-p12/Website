import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Experience.css';

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const experiences = [
    {
      logo: '/Website/images/Amazon-Prime-Video-Icon.png',
      company: 'Amazon Prime Video',
      role: 'Software Development Engineer Intern (June 2025 – Sept 2025)',
      details: [
        "Built a production-grade Artwork Analysis API and its AI agent for Prime Video's agentic platform Reacher, automating moderation of metadata and images to ensure safe content delivery for kids",
        'Developed scalable backend services using Java Spring Boot, adhering to SDLC best practices, modular code design, Git-based workflows, and CI/CD pipelines for automated testing and deployment',
        'Integrated Claude 4 Sonnet via Amazon Bedrock with advanced prompting, cutting manual QA effort by 60%',
        'Provisioned scalable, fault-tolerant infrastructure on AWS ECS Fargate using TypeScript CDK, incorporating Smithy-defined APIs, load-balanced service definitions, and full unit and integration test coverage'
      ]
    },
    {
      logo: '/Website/images/sdsc_logo.webp',
      company: 'San Diego Supercomputer Center (SDSC)',
      role: 'Data Science Intern (Apr 2025 – Jun 2025)',
      details: [
        'Designed a hierarchical classification pipeline using supervised learning, achieving 89.7%, 83.3%, and 96.9% accuracy for PFT, Genus, and Species prediction respectively',
        'Optimized end-to-end training and inference pipeline by streamlining data integration, preprocessing, and feature alignment across FIA and TLS sources; research accepted at the 54th ICPP 2025',
        'Optimized ensemble methods (RF, ET, XGBoost) with class-aware loss to improve rare-class performance',
        'Curated a benchmark dataset in collaboration with Los Alamos National Laboratory for large-scale forest biodiversity and fire resilience research'
      ]
    },
    {
      logo: '/Website/images/IITB-500x500.png',
      company: 'Indian Institute of Technology',
      role: 'Research Intern (Jan 2023 - June 2024)',
      details: [
        'Applied multiresolution methods to build a novel deep learning architecture and implemented a contactless fingerprint recognition application with an Equal Error Rate of 2.5%',
        'Authored two technical papers for efficient and economic architectures in state-of-the-art biometric recognition',
        'Introduced a novel shearlet library on Python that can be used inside deep learning models for feature extraction and image pre-processing'
      ]
    },
    {
      logo: '/Website/images/LogoSPIT.png',
      company: 'Sardar Patel Institute of Technology',
      role: 'Undergraduate Student Researcher (June 2023 - Dec 2023)',
      details: [
        'Worked on multiple healthcare related projects involving Chest x-ray CT scans, Brain MRI scans and breast lesions for accurate segmentation using a penalisation technique using deep learning.',
        'Worked specifically on Chest X-Ray scans involving chest diseases like pneumonia, tuberculosis and COVID 19 to create a novel deep learning network producing quality results',
        'Researched various obstacle detection datasets, especially potholes to create a system to detect potholes efficiently using a lightweight deep neural network and achieved a 96% accuracy with published result'
      ]
    },
    {
      logo: '/Website/images/LogoSPIT.png',
      company: 'Sardar Patel Institute of Technology - AIDL Virtual Labs',
      role: 'Deep Learning Intern (Sept 2022 - Dec 2022)',
      details: [
        'Developed and worked with deep learning models such as Autoencoders, PoseNet etc and deployed them on an interactive website as simulations to make AI understandable',
        'Worked on research which focuses on heart and cardiovascular diseases risk predictions and ECG analysis using predictive analysis techniques',
        'Worked on the wine dataset to employ a working Random Forest Regression Model explaining how the model works'
      ]
    },
    {
      logo: '/Website/images/1684165331426.jpeg',
      company: 'Learn Everything AI',
      role: 'Machine Learning Intern (Aug 2022 - Oct 2022)',
      details: [
        'Formulated and reviewed Machine Learning models for tutorials related to Data Science and Machine Learning',
        'Created and worked with analytical tools related to disease prediction on kidney and liver failure datasets, achieving accuracies of more than 95%',
        'Formulated detail SQL tutorials for beginners and intermediates'
      ]
    }
  ];

  const nextExperience = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          Experience
        </motion.h2>
        <div className="experience-carousel">
          <button className="carousel-btn prev" onClick={prevExperience}>
            <i className="fas fa-chevron-left" />
          </button>
          
          <div className="carousel-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="experience-card"
              >
                <div className="experience-logo">
                  <img src={experiences[currentIndex].logo} alt={experiences[currentIndex].company} />
                </div>
                <div className="experience-details">
                  <h3>{experiences[currentIndex].company}</h3>
                  <span>{experiences[currentIndex].role}</span>
                  <ul>
                    {experiences[currentIndex].details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="carousel-btn next" onClick={nextExperience}>
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;

