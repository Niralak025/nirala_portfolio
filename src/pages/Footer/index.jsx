import React from 'react';
import './index.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-style">
      <p className="footer-title-style">
        &copy; {currentYear} <strong>Nirala Kumar</strong>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;