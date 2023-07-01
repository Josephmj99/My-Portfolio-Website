import React from 'react';
import styles from '../layouts/layout.module.css';
import Hamburger from '../components/hamburger/hamburger';
import Logo from '../components/logo/Logo';
import Navlink from '../components/navlink/Navlink';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}><Logo/></div>
      <div className={styles.navlinkContainer}><Navlink/></div>
      <div className={styles.hamburgerContainer}><Hamburger/></div>
    </header>
  )
}

export default Header;