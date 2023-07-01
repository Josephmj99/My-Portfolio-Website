import React, { useState } from 'react';
import '../hamburger/hamburger.css';

const Hamburger = () => {

  const [hamburger, setHamburger] = useState('bar');

  const handleHamburgerClick  = () => {
    if(hamburger !== 'bar') {
      setHamburger('bar');
    }
    else {
      setHamburger('barTransform');
    };
  };

  return (
    <div className='hamburger-container' onClick={handleHamburgerClick}>
      <div className={`${hamburger} ${hamburger}-1`}></div>
      <div className={`${hamburger} ${hamburger}-2`}></div>
      <div className={`${hamburger} ${hamburger}-3`}></div>
    </div>
  )
};

export default Hamburger;