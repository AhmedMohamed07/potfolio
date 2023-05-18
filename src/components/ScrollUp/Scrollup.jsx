import React from 'react';
import './Scrollup.css';

const Scrollup = () => {
  window.addEventListener('scroll', function () {
    const scrollUp = document.querySelector('.scrollup');

    if (this.scrollY > 560) scrollUp.classList.add('show-scrollup');
    else {
      scrollUp.classList.remove('show-scrollup');
    }
  });

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup-icon"></i>
    </a>
  );
};

export default Scrollup;
