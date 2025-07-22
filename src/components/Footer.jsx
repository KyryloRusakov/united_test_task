import React from 'react';

const Footer = ({ step }) => {
  if (step !== 1) return null;

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-links">
          <a href="#" className="footer-link">Terms of Use</a>
          <a href="#" className="footer-link">Billing policy</a>
          <a href="#" className="footer-link">Cookie Policy</a>
          <a href="#" className="footer-link">Refund Policy</a>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Risks Notice</a>
          <a href="#" className="footer-link">Disclosures and Disclaimers</a>
          <a href="#" className="footer-link">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
