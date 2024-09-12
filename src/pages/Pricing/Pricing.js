import React from 'react'
import "./Pricing.css"

const Pricing = () => {
  return (
    <div className="pricing-page">
      <h1>Select your preferred plan</h1>
      <div className="pricing-options">
        {/* Monthly Plan */}
        <div className="pricing-card">
          <h2>Monthly</h2>
          <p>$10 billed monthly</p>
          <div className="price">$10<span>/month</span></div>
          <p>Or billed yearly <b>$8.32</b>/month</p>
          <button className="btn">Upgrade to Premium</button>
        </div>

        {/* Yearly Plan */}
        <div className="pricing-card highlighted">
          <div className="label">2 months free!</div>
          <h2>Yearly</h2>
          <p><span className="original-price">$120</span> $99.90 billed yearly.</p>
          <div className="price">$99.90<span>/year</span></div>
          <p>$8.32/month</p>
          <button className="btn highlighted-btn">Upgrade to Premium</button>
        </div>
      </div>

      <p className="disclaimer">Price are exclusives of taxes. The applicable tax amounts will be shown on the checkout page.</p>
    </div>
  );
}

export default Pricing
