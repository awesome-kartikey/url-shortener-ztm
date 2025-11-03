import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import URLShortenerForm from './components/URLShortenerForm/URLShortenerForm';
import FeaturesCarousel from './components/FeaturesCarousel/FeaturesCarousel';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
        <URLShortenerForm />
        <div className="main-content-wrapper">
          <FeaturesCarousel />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
