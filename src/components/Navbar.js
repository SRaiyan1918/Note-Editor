import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun, faCloudMoon } from "@fortawesome/free-solid-svg-icons";
import '../theme.css'

function Navbar({ theme, toggleTheme }) {
  return (
    <nav
      className='navbar navbar-expand-lg'
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
        >
          Notes App
        </Link>
        <button onClick={toggleTheme} className="btn">
          <FontAwesomeIcon
            icon={theme === "dark" ? faCloudSun : faCloudMoon}
            size="sm"
          />
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: "inherit" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/editor" style={{ color: "inherit" }}>
                Editor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: "inherit" }}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
