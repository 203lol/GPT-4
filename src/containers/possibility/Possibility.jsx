import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt4__possibility section__padding" id="possibility">
    <div className="gpt4__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt4__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>ChatGPT-4 has limitations in imagination compared to human creativity. However, it can still assist in exploring possibilities, generating ideas, and providing valuable insights to push the boundaries of innovation and envision a future that surpasses our current imagination.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;

