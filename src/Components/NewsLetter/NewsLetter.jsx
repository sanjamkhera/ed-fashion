import React from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className = 'news-letter'>
      <h1>Sign-Up for </h1>
      <h1>Exclusive Offers</h1>
      <p>Subscribe and Stay Up to Date</p>
      <div>
        <input type="email" placeholder = 'Email Id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter