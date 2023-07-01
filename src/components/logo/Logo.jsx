import React from 'react';
import '../logo/logo.css';
import logoIcon from '../../../public/mjw-pics.png';

const Logo = () => {
  return (
    <div className='logo-container'>
        <a href=''>
            <div className='logo-icon-container'><img src={logoIcon} className='logo-icon'/></div>
        </a>
        <span className='logo-name'>
            <a href=''>MichealJoseph</a>
        </span>
    </div>
  )
};

export default Logo;