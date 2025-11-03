import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo-dark.png';

const Header = () => {
  return (
    <header className={styles.siteHeader} role="banner">
      <div className="container">
        <nav className={styles.mainNav} role="navigation" aria-label="Main navigation">
          <a href="/" className={styles.navBrand} aria-label="Linkly Homepage">
            <img src={logo} alt="" className={styles.logoIcon} aria-hidden="true" />
            <span className={styles.brandName}>Linkly</span>
          </a>
        </nav>
        <a href="/admin" id="adminNavLink" className={`btn btn-primary ${styles.adminBtn}`}>Admin</a>
      </div>
    </header>
  );
};

export default Header;
