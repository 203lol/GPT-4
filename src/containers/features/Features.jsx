import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: ' ChatGPT-4 can address end user distrust by improving transparency, accountability, and bias mitigation. By providing clearer indications of AI-generated responses, explaining reasoning, offering source attribution, and actively addressing biases, ChatGPT-4 can help build trust and reliability in its interactions with users.',
  },
  {
    title: 'Become the tended active',
    text: 'ChatGPT-4 aims to become more attentive, responsive, and user-centric. Through continuous improvements in understanding context, generating accurate responses, and actively adapting to user needs, ChatGPT-4 strives to be a reliable and proactive conversational partner, enhancing the overall user experience.',
  },
  {
    title: 'Message or am nothing',
    text: 'ChatGPT-4 acknowledges that even a simple message can hold value. Whether its providing information, support, or engaging in meaningful conversation, ChatGPT-4 understands the importance of each interaction and aspires to make a positive impact, striving to be more than "nothing" to its users.',
  },
  
];

const Features = () => (
  <div className="gpt4__features section__padding" id="features">
    <div className="gpt4__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt4__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;