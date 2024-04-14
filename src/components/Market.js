import React from 'react';
import '../App.css';
import banking from '../assets/banking.jpeg';
import corporate from '../assets/cooperate.jpeg';
import education from '../assets/education.webp';
import Healthcare from '../assets/healthcare.jpg';
import Entertainment from '../assets/entertain.jpeg';
import government from '../assets/govt.avif';

function MarketsServed() {
  const marketItems = [
    { image: corporate, label: 'Corporate/Enterprise' },
    { image: banking, label: 'Financial/Banking' },
    { image: education, label: 'Education' },
    { image: government, label: 'Government/Public Sector' },
    { image: Healthcare, label: 'Healthcare' },
    { image: Entertainment, label: 'Hospitality & Entertainment' },
  ];

  return (
    <div className="markets-served">
      <h2>MARKETS WE SERVE</h2>
      <p>
        Avidex serves a variety of markets and industries in the US and around
        the world. Our industry-focused teams, commitment to ongoing training,
        and unwavering focus on client success enable us to provide outstanding
        client experiences in every market we serve.
      </p>
      <div className="market-grid">
        {marketItems.map((item, index) => (
          <div
            key={index}
            className="market-item"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <h3>{item.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketsServed;
