import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: 'ABOUT US',
      links: ['Contact', 'Team', 'Branding', 'Careers', 'Press']
    },
    {
      title: 'FEATURES',
      links: ['Email Verification', 'Link & Image Scanning', 'Risk Scoring', 'Alert System', 'Real-time Protection']
    },
    {
      title: 'SOLUTIONS',
      links: ['Individuals', 'Small Businesses', 'Enterprises', 'Remote Teams', 'Education']
    },
    {
      title: 'DOWNLOAD',
      links: [
        { text: 'Chrome Extension', href: 'https://chrome.google.com/webstore/detail/mailinsight-extension-link' },
        { text: 'Outlook Add-in', href: 'https://appsource.microsoft.com/en-us/product/office/WA200005432' },
        { text: 'Android App', href: 'https://play.google.com/store/apps/details?id=mailinsight.android' },
        { text: 'iOS App', href: 'https://apps.apple.com/app/mailinsight-ios' }
      ]
    },
    {
      title: 'RESOURCES',
      links: ['Pricing', 'Blog', 'FAQs', 'Security Tips', 'Support']
    }
  ];

  return (
    <>
      <section className="footer-links">
        {footerSections.map((section, index) => (
          <div key={index} className="footer-col">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, linkIndex) => {
                if (typeof link === 'object') {
                  return (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={linkIndex}>
                    <a href="#">{link}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>
      
      <footer>
        © 2025 MailInsight | All Rights Reserved
      </footer>
    </>
  );
};

export default Footer;