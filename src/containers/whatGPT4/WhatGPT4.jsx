import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT4.css';

const WhatGPT4 = () => (
  <div className="gpt4__whatgpt4 section__margin" id="wgpt4">
    <div className="gpt4__whatgpt4-feature">
      <Feature title="What is GPT-4" text="GPT-4 is an AI-powered chatbot developed by OpenAI, a research organization dedicated to creating advanced artificial intelligence technologies. GPT-4 is based on the Generative Pre-trained Transformer 4 (GPT-4) language model, which is the latest version of the GPT series." />
    </div>
    <div className="gpt4__whatgpt4-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt4__whatgpt4-container">
      <Feature title="Chatbots" text="Chatbots are computer programs designed to simulate conversations with human users through text or speech interfaces. They leverage natural language processing (NLP) and machine learning techniques to understand user input and generate relevant responses. " />
      <Feature title="Knowledgebase" text="A knowledgebase is a centralized repository of information, data, and knowledge that is organized and easily accessible.OpenAI has developed language models like GPT-4 that can be used to build knowledgebases or enhance existing ones." />
      <Feature title="Education" text="Education is the process of acquiring knowledge, skills, values, and attitudes through various formal and informal means.Educators and developers have explored using OpenAI's language models for tasks such as language learning, intelligent tutoring systems, automated essay grading, and generating educational content." />
    </div>
  </div>
);

export default WhatGPT4;