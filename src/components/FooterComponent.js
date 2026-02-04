import React from 'react';
import { Link } from 'react-router-dom';
import './FooterComponent.css';

function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Student Info App
          </Link>
          <p className="footer-tagline">
            Manage and view student information
          </p>
        </div>
        <div className="footer-links-wrap">
          <p className="footer-links-label">Quick links</p>
          <div className="footer-links">
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/students" className="footer-link">
              Students
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Student Info App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
