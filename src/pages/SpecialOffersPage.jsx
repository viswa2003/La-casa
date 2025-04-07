// 

import React from 'react';
import './SpecialOffersPage.css'; 

const SpecialOffersPage = () => {
  return (
    <div className="special-offers-page">
      <h1>Special Offers</h1>

      <div className="special-offers">
        <div className="offer-card">
          <h2>Offer 1</h2>
          <p>20% off on all appetizers</p>
          <p className="offer-description">Valid on weekdays from 5pm to 7pm</p>
        </div>

        <div className="offer-card">
          <h2>Offer 2</h2>
          <p>Buy one main course, get one dessert free</p>
          <p className="offer-description">Valid for dine-in customers only</p>
        </div>

        <div className="offer-card">
          <h2>Offer 3</h2>
          <p>Family dinner package for $49.99</p>
          <p className="offer-description">Includes 2 main courses, 2 sides, and 4 drinks</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffersPage;
