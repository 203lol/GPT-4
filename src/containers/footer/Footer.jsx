
import React from 'react';
import gpt4Logo from '../../assets/logo.jpg';
import './footer.css';

const Footer = () => (
  <div className="gpt4__footer section__padding">
    <div className="gpt4__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt4__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt4__footer-links">
      <div className="gpt4__footer-links_logo">
        <img src={gpt4Logo} alt="gpt4_logo" />
        <p>Kathmandu, Nepal <br /> All Rights Reserved</p>
      </div>
      <div className="gpt4__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt4__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt4__footer-links_div">
        <h4>Get in touch</h4>
        <p>Kathmandu, Nepal</p>
        <p>977-9812360360</p>
        <p>goatyalokesh@gmail.com</p>
      </div>
    </div>

    <div className="gpt4__footer-copyright">
      <p>@2023 GPT-4. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;