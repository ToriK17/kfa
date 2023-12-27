import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const saLogo = require('../../assets/icons/sa-logo.png');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className="nav-container">
        <Link to="/gallery" className="home-button">
          Kafati Art Studio
        </Link>
        <div className="inner-container">
          {isSmallScreen ? (
            <div className="hamburger-icon" onClick={toggleMobileMenu}>
              <MenuIcon sx={{ color: 'white' }} 
			  />
            </div>
          ) : (
            <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu mobile-menu-open' : ''}`}>
              <Link to="/gallery" className="nav-link">
                Gallery
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/videos" className="nav-link">
                Videos
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              <a className="media-links" href="https://www.instagram.com/kafati_art_studio/?hl=en">
                <InstagramIcon sx={{ color: 'white' }} />
              </a>
              <a className="media-links" href="https://www.facebook.com/jaime.kafati.5">
                <FacebookIcon sx={{ color: 'white' }} />
              </a>
              <a className="media-links" href="https://www.youtube.com/channel/UCzz1Z-gsHb9w4bvj3Xh9REg">
                <YouTubeIcon sx={{ color: 'red' }} />
              </a>
              <a className="media-links" href="https://www.saatchiart.com/kafati">
                <img src={saLogo} className="sa-art" alt="saatchi art logo" />
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
