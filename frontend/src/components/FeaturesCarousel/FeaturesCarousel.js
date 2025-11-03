import React, { useState, useEffect, useCallback } from 'react';
import styles from './FeaturesCarousel.module.css';

const features = [
  {
    title: 'Lightning Fast',
    icon: '⚡',
    description: 'Built with Rust for blazing-fast performance. Our optimized backend processes millions of redirects per second with sub-millisecond latency, ensuring your users never wait.',
  },
  {
    title: 'Advanced Analytics',
    icon: '📊',
    description: 'Track clicks, geographic locations, devices, browsers, and referrers in real-time. Gain deep insights into your audience with beautiful, interactive dashboards and exportable reports.',
  },
  {
    title: 'Custom Domains',
    icon: '🌐',
    description: 'Use your own branded domain for short links. Build trust with your audience using memorable, professional URLs that reinforce your brand identity on every share.',
  },
  {
    title: 'Secure & Private',
    icon: '🔒',
    description: 'Enterprise-grade security with end-to-end encryption, DDoS protection, and malware scanning. Your data is protected with bank-level security measures and regular audits.',
  },
  {
    title: 'API Access',
    icon: '🔧',
    description: 'Powerful RESTful API for seamless integration with your applications. Automate link creation, retrieve analytics, and manage URLs programmatically with comprehensive documentation.',
  },
];

const FeaturesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
  }, []);

  useEffect(() => {
    const autoRotateInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(autoRotateInterval);
  }, [nextSlide]);

  return (
    <section className={styles.features} aria-labelledby="features-heading">
      <div className="container">
        <h2 id="features-heading">Features</h2>
      </div>
      <div className={styles.featuresCarousel}>
        <div className={styles.featureCardWrapper}>
          <div className={`${styles.featureCardSide} ${styles.featureCardSideLeft}`} onClick={previousSlide} role="button" tabIndex="0" aria-label="Show previous feature">
            <div className={styles.sideCardContent}>
              <div className={styles.sideCardIcon}>{features[(currentIndex - 1 + features.length) % features.length].icon}</div>
              <h4 className={styles.sideCardTitle}>{features[(currentIndex - 1 + features.length) % features.length].title}</h4>
            </div>
          </div>

          {features.map((feature, index) => (
            <article
              key={index}
              className={`${styles.featureCardMain} ${index === currentIndex ? '' : 'hidden'}`}
              data-feature={index}
            >
              <header className={styles.featureHeader}>
                <h3>{feature.title}</h3>
                <div className={styles.featureIcon} aria-hidden="true">{feature.icon}</div>
              </header>
              <div className={styles.featureBody}>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}

          <div className={`${styles.featureCardSide} ${styles.featureCardSideRight}`} onClick={nextSlide} role="button" tabIndex="0" aria-label="Show next feature">
            <div className={styles.sideCardContent}>
              <div className={styles.sideCardIcon}>{features[(currentIndex + 1) % features.length].icon}</div>
              <h4 className={styles.sideCardTitle}>{features[(currentIndex + 1) % features.length].title}</h4>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.carouselDots} role="tablist" aria-label="Features carousel">
            {features.map((_, index) => (
              <button
                key={index}
                role="tab"
                className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                aria-selected={index === currentIndex}
                aria-label={`Show ${features[index].title} feature`}
                data-index={index}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
