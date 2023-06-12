import React from "react";
import logo from "../../assets/images/LogoMaster.png";
import { Link } from "react-router-dom";
const Header = ({ headerBg }) => {
  return (
    <header className={`header ${headerBg}`}>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid flex-md-column">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link to="/" className="d-block mx-auto">
            <img src={logo} alt="Logo" className="logo" />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/espionage-challenge">
                  Espionage Challenge
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/desert-challenge">
                  Desert Challenge
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
