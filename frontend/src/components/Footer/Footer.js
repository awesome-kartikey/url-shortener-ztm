import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logo-light.png';
import x from '../../assets/x.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className={styles.siteFooter} role="contentinfo">
        <div className="container">
          <div className={`${styles.footerBrand} ${styles.navBrand}`}>
            <img src={logo} alt="Linkly logo" className={styles.logoIcon} />
            <span className={`${styles.brandName} ${styles.brandNameLight}`}>Linkly</span>
          </div>
          <div className={styles.footerGrid}>
            <div className={styles.footerColumn}>
              <h3>About</h3>
              <p>
                Linkly is a high-performance URL shortener built with Rust, designed for speed, security, and reliability.
                Our mission is to provide a fast and elegant way to shorten, share, and track your links.
              </p>
            </div>
            <div className={styles.footerColumn}>
              <h3>Contact</h3>
              <ul className={styles.socialLinks}>
                <li>
                  <a href="https://x.com" target="_blank" aria-label="Linkly on X" className={styles.socialIcon}><img src={x} alt="X logo" /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank" aria-label="Linkly on Instagram" className={styles.socialIcon}><img src={instagram}
                      alt="Instagram logo" /></a>
                </li>
                <li>
                  <a href="https://www.facebook.com" target="_blank" aria-label="Linkly on Facebook" className={styles.socialIcon}><img src={facebook}
                      alt="Facebook logo" /></a>
                </li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h3>Privacy Policy</h3>
              <p>
                Your privacy is important to us. We collect minimal data necessary for service operation and do not sell
                your information. Our service is designed to be privacy-conscious by default.
              </p>
            </div>
            <div className={styles.footerColumn}>
              <h3>Terms of Service</h3>
              <p>
                By using Linkly, you agree not to use the service for illegal activities, spam, or phishing. We reserve the
                right to disable links that violate our terms to protect all users and maintain service integrity.
              </p>
            </div>
          </div>
          <div className={styles.footerCopyright}>
            <p>
              &copy; <span id="year">{year}</span> Linkly | All
              Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
