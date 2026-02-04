import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './HeaderComponent.css';

function HeaderComponent({ title, subtitle }) {
  const heroStyle = {
    backgroundColor: '#1b4332',
    backgroundImage: `linear-gradient(160deg, rgba(27, 67, 50, 0.65) 0%, rgba(45, 106, 79, 0.55) 50%, rgba(27, 67, 50, 0.65) 100%), url(${process.env.PUBLIC_URL}/pnc-bg.jpg)`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <header className="header-component">
      <nav className="header-nav">
        <Link to="/" className="header-logo">
          Student Info App
        </Link>
        <div className="header-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `header-link ${isActive ? 'active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/students"
            className={({ isActive }) =>
              `header-link ${isActive ? 'active' : ''}`
            }
          >
            Students
          </NavLink>
        </div>
      </nav>
      <div className="header-content" style={heroStyle}>
        <h1 className="header-title">{title}</h1>
        {subtitle && <p className="header-subtitle">{subtitle}</p>}
      </div>
    </header>
  );
}

export default HeaderComponent;
