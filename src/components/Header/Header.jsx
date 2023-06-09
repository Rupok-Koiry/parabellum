import React from "react";
import logo from "../../assets/images/LogoMaster.png";

const Header = () => {
  return (
    <header className="header">
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

          <a href="/" className="d-block mx-auto">
            <img src={logo} alt="Logo" className="logo" />
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Espionage Challenge
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Desert Challenge
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Member Login
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
