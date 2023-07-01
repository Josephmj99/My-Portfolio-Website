import React from 'react';
import styles from '../layouts/layout.module.css';
import '../layouts/header.css';
import Hamburger from '../components/hamburger/hamburger';
import Logo from '../components/logo/Logo';
import Navlink from '../components/navlink/Navlink';
import Menulink from '../components/menulink/Menulink';
import { useState } from 'react';


const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState('');

  const handleMenuDisplay = () => {
    if(menuDisplay !== '') {
      setMenuDisplay('')
    }
    else {
      setMenuDisplay('menuContainerDisplay')
    }
    
  }
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.logoContainer}><Logo/></div>
        <div className={styles.navlinkContainer}><Navlink/></div>
        <div className={styles.hamburgerContainer} onClick={handleMenuDisplay}><Hamburger/></div>
      </header>

      <div className={`hamburgerMenuContainer ${menuDisplay}`}>
        <div className='hamburgerMenuWrapper'>
          <Menulink/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;