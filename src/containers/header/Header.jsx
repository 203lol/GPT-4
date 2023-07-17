import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-4 OpenAI</h1>
      <p>Together with GPT-4, we can create an interactive and immersive virtual storytelling experience. By leveraging GPT-4's advanced language generation capabilities, we can develop a platform that allows users to engage in dynamic and personalized narratives. Users can interact with virtual characters, shape the storyline, and experience branching paths based on their choices. GPT-4's improved contextual understanding and natural language processing will enable more realistic and coherent interactions.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt= 'people'/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt= 'ai'/>
    </div>
  </div>
);
export default Header