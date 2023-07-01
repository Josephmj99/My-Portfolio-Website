import React from 'react';
import styles from '../layouts/layout.module.css';
import Hamburger from '../components/hamburger/hamburger';
import Logo from '../components/logo/Logo';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}><Logo/></div>
      <div className={styles.navlinkContainer}>NavLink</div>
      <div className={styles.hamburgerContainer}><Hamburger/></div>
    </header>
  )
}

export default Header;