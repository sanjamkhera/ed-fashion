import React from 'react';
import './Footer.css';
import FooterLogo from '../Assets/Images/FooterLogo.png';
import IGIcon from '../Assets/Images/IGIcon.png';
import PInterest from '../Assets/Images/PInterest.png';
import WatSap from '../Assets/Images/WatSap.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo-brand">
        <div className="footer-logo">
          <img src={FooterLogo} alt="" />
        </div>
        <div className="brand-text">
          <p>ED Fashion</p>
          <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="footer-social-icons">
          <div className="footer-icons-container">
            <img src={IGIcon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={PInterest} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={WatSap} alt="" />
          </div>
        </div>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright KurtaTech @ 2023 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer