import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Hero.css'; 
import logo from '../Assets/Images/logo.png';
import HeroImg from '../Assets/Images/Hero.png';
import Exclusive from '../Assets/Images/Exclusive.png';

const Hero = () => {
  return (
    <div className='hero'>
      <Carousel showThumbs={false} showStatus={false} autoPlay={false} infiniteLoop={true}>

          <div className='hero-top'>
            <img src={logo} alt="Logo Image" />
          </div>

          <div className="hero-middle">
            <div className="hero-left-middle">
            <h2>Behind the Elegance</h2>
              <p>A mother-daughter team dedicates their passion for elegance into each luxury Indian clothing, bags, and jewelry. Our collection blends traditional craftsmanship with modern style, reflecting a deep reverence for India's rich artistic heritage. Every item is a piece of a shared dream, crafted to bring a touch of luxury and timeless beauty to your wardrobe. From intricate embroidery to bold, modern cuts, every detail is a testament to the skill and creativity that defines our brand. Embrace the blend of tradition and innovation in your style, and carry a piece of history with every step.</p>
              <div className='hero-button'><button>Shop</button></div>
            </div>
            <div className="hero-right-middle">
              <img src={HeroImg} alt="Hero Image" />
            </div>
          </div>

        <div className='hero-bottom'>
          <div className='hero-left-bottom'>
            <h2>Exclusive Offers</h2>
            <p>Elegantly Selected with You in Mind</p>
          <div className='hero-button'><button>Explore</button></div>
        </div>
          <div className="hero-right-bottom">
          <img src={Exclusive} alt="Offers Image" />
          </div>
        </div>

      </Carousel>
    </div>
  );
}

export default Hero;