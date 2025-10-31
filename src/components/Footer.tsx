import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Guruprasad Parasnis. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

