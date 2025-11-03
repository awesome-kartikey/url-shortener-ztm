import React, { useState } from 'react';
import styles from './URLShortenerForm.module.css';

const URLShortenerForm = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setError('');
    setShortUrl('');
    setOriginalUrl('');

    try {
      const response = await fetch('/api/public/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: url,
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        if (jsonResponse.success && jsonResponse.data) {
          setShortUrl(jsonResponse.data.shortened_url);
          setOriginalUrl(jsonResponse.data.original_url);
        } else {
          setError(`Failed to shorten URL: ${jsonResponse.message || 'Unknown error'}`);
        }
      } else {
        const errorResponse = await response.json();
        setError(`Failed to shorten URL: ${errorResponse.message || 'Unknown error occurred'}`);
      }
    } catch (err) {
      setError(`Network error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const clearResults = () => {
    setShortUrl('');
    setError('');
  };

  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={`${styles.heroContent} container`}>
          <h1 id="hero-heading">
            <span>Shorten links and track</span>
            <span>every click.</span>
          </h1>

          <form onSubmit={handleSubmit} className={styles.urlForm} aria-label="URL Shortener Form">
            <label htmlFor="urlInput">Add your link</label>
            <div className={styles.inputGroup}>
              <input
                type="url"
                id="urlInput"
                name="url"
                placeholder="https://enter-your-long-url-here.com/..."
                required
                autoComplete="url"
                aria-describedby="url-help"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button type="submit" id="submitBtn" className="btn btn-primary" aria-describedby="submit-help" disabled={loading}>
                <span className="btn-text">{loading ? '' : 'Shrink it'}</span>
                {loading && (
                  <span className="btn-loading" aria-hidden="true">
                    <span className="spinner"></span>
                  </span>
                )}
              </button>
            </div>
            <div id="url-help" className="visually-hidden">
              Enter a valid URL starting with http:// or https://
            </div>
            <div id="submit-help" className="visually-hidden">
              Click to generate a short URL
            </div>
          </form>
        </div>
      </section>

      <div className="modal-container container">
        {shortUrl && (
          <div className="result" role="status" aria-live="polite">
            <h3>🎉 Your Short URL is Ready!</h3>
            <button onClick={clearResults} className="close-btn" aria-label="Close">×</button>
            <div className="short-url-container">
              <label htmlFor="shortUrl" className="visually-hidden">Short URL</label>
              <input type="text" id="shortUrl" value={shortUrl} readOnly className="short-url-input" aria-label="Generated short URL" />
              <button onClick={copyToClipboard} id="copyBtn" className="btn btn-secondary copy-btn" aria-label="Copy short URL to clipboard">
                <span className="copy-text">{copySuccess ? '✓ Copied!' : 'Copy'}</span>
              </button>
            </div>
            <div className="original-url">
              <strong>Original URL:</strong> <span>{originalUrl}</span>
            </div>
          </div>
        )}

        {error && (
          <div className="error" role="alert" aria-live="assertive">
            <h3>⚠️ Error</h3>
            <button onClick={clearResults} className="close-btn" aria-label="Close">×</button>
            <p>{error}</p>
            <button onClick={clearResults} className="btn btn-secondary">Try Again</button>
          </div>
        )}
      </div>
    </>
  );
};

export default URLShortenerForm;
