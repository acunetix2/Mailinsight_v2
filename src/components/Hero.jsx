import React from 'react';

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="welcome">
        <div className="welcome-text">
          <h1>Welcome to <span>MailInsight® : Email Defence</span></h1>
          <h2>where we protect your data</h2>
          <p className="subtext">
            An AI-powered browser extension designed to protect users from phishing and email scams as they happen.
            MailInsight scans your emails in real-time, providing instant alerts and recommendations to keep your inbox safe.
            With advanced threat detection, it identifies suspicious links, verifies sender authenticity, and offers personalized security tips.
            Whether you're using Gmail, Outlook, or any other email service, MailInsight seamlessly integrates to enhance your email security.
          </p>
        </div>
        <div className="welcome-image">
          <img src="/placeholder.svg" alt="Scanning Email Screenshot" className="image-flex"/>
          <div className="status-box">
            <p>youremail@example.com</p>
            <p>MailInsight is analyzing your inbox</p>
            <p>Protection Status: <strong>Active</strong></p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <div className="icon">🛡️</div>
          <h3>Real-time Protection</h3>
          <p>Continuously scans emails and web pages for phishing attempts and malicious content.</p>
        </div>
        <div className="feature-card">
          <div className="icon">⚠️</div>
          <h3>Threat Alerts</h3>
          <p>Instant notifications when suspicious activity is detected in your email communication.</p>
        </div>
        <div className="feature-card">
          <div className="icon">📧</div>
          <h3>Email Security</h3>
          <p>Advanced AI algorithms that learn and adapt to new phishing techniques as they evolve.</p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;