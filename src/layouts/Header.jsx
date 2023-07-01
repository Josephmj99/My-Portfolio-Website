import React from 'react';
import styles from '../layouts/layout.module.css';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>Logo</div>
      <div className={styles.navlinkContainer}>NavLink</div>
      <div className={styles.hamburgerContainer}>HM</div>
    </header>
  )
}

export default Header;