import React, { useState } from 'react';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'FREE',
      price: 0,
      yearlyPrice: 0,
      icon: '🆓',
      features: [
        'Limited email verification',
        'Basic link scanning',
        'Standard risk scoring',
        'Email alerts'
      ],
      current: true,
      type: 'free'
    },
    {
      name: 'STANDARD',
      price: 5,
      yearlyPrice: 50,
      icon: '⭐',
      popular: true,
      features: [
        'Unlimited email verification',
        'Advanced link & image scanning',
        'Detailed risk scoring',
        'Real-time pop-up warnings',
        'Daily security reports',
        'Priority email support'
      ],
      type: 'standard'
    },
    {
      name: 'PREMIUM',
      price: 15,
      yearlyPrice: 150,
      icon: '💎',
      features: [
        'All Standard features',
        'Advanced threat intelligence',
        'Customizable risk scoring',
        'API access',
        'Dedicated account manager',
        '24/7 phone & chat support'
      ],
      type: 'premium'
    }
  ];

  return (
    <section className="pricing-modern">
      <h2 className="pricing-title">Choose the plan that best fits your needs</h2>
      
      {/* Toggle */}
      <div className="pricing-toggle">
        <button 
          className={`toggle-btn ${!isYearly ? 'active' : ''}`}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </button>
        <button 
          className={`toggle-btn ${isYearly ? 'active' : ''}`}
          onClick={() => setIsYearly(true)}
        >
          Yearly <span className="save">save 17%</span>
        </button>
      </div>

      <div className="pricing-cards">
        {plans.map((plan, index) => {
          const price = isYearly ? plan.yearlyPrice : plan.price;
          const duration = isYearly ? '/user/year' : '/user/month';
          
          return (
            <div
              key={index}
              className={`pricing-card ${plan.type}`}
            >
              {plan.popular && (
                <div className="plan-label">
                  {plan.name} <span className="most-popular">Most popular</span>
                </div>
              )}
              {!plan.popular && (
                <div className="plan-label">{plan.name}</div>
              )}
              
              <div className="plan-price">
                ${price} <span className="plan-duration">{duration}</span>
              </div>
              
              {plan.current ? (
                <button className="plan-btn current" disabled>
                  YOUR CURRENT PLAN
                </button>
              ) : (
                <button className="plan-btn">
                  SELECT PLAN
                </button>
              )}
              
              <ul className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingSection;