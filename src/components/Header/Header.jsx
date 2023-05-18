import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [activeLink, setActiveLink] = useState('#home');

  const showMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="index.html" className="logo">
          Ahmed
        </a>

        <div className={showMenu ? 'nav__menu show_menu' : 'nav__menu'}>
          <ul className="links grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setActiveLink('#home')}
                className={
                  activeLink === '#home' ? 'nav_link active_link' : 'nav_link'
                }
              >
                <i className="uil uil-estate nav_icon"></i>Home
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#about"
                onClick={() => setActiveLink('#about')}
                className={
                  activeLink === '#about' ? 'nav_link active_link' : 'nav_link'
                }
              >
                <i className="uil uil-user nav_icon"></i>About
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#skills"
                onClick={() => setActiveLink('#skills')}
                className={
                  activeLink === '#skills' ? 'nav_link active_link' : 'nav_link'
                }
              >
                <i className="uil uil-file-alt nav_icon"></i>Skills
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#services"
                onClick={() => setActiveLink('#services')}
                className={
                  activeLink === '#services'
                    ? 'nav_link active_link'
                    : 'nav_link'
                }
              >
                <i className="uil uil-briefcase-alt nav_icon"></i>Services
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#qualification"
                onClick={() => setActiveLink('#qualification')}
                className={
                  activeLink === '#qualification'
                    ? 'nav_link active_link'
                    : 'nav_link'
                }
              >
                <i className="uil uil-scenery nav_icon"></i>Qualification
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#contact"
                onClick={() => setActiveLink('#contact')}
                className={
                  activeLink === '#contact'
                    ? 'nav_link active_link'
                    : 'nav_link'
                }
              >
                <i className="uil uil-message nav_icon"></i>Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={showMenuHandler}></i>
        </div>

        <div className="nav__toggle" onClick={showMenuHandler}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
