import React from 'react';
import '../navlink/navlink.css';

const Navlink = () => {
  return (
    <nav className='nav-link'>
        <a href='/about'>
            <li>About</li>
        </a>
        <a href='/portfolio'>
            <li>Portfolio</li>
        </a>
        <a href='/contact'>
            <li>Contact</li>
        </a>
    </nav>
  )
}

export default Navlink