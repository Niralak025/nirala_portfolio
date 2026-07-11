import React from 'react';
import './index.css';
import { footerContent } from '../../utils/globalConstant';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-style">
      <p className="footer-title-style">
        &copy; {currentYear} <strong>{footerContent.authorName}</strong>. {footerContent.rightsReserved}
      </p>
    </footer>
  );
};

export default Footer;