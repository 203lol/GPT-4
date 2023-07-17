import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css';

const Blog = () => (
  <div className="gpt4__blog section__padding" id="blog">
    <div className="gpt4__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt4__blog-container">
      <div className="gpt4__blog-container_groupA">
        <Article imgUrl={blog01} date="Jul 6, 2023" text="GPT-4 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt4__blog-container_groupB">
        <Article imgUrl={blog02} date="Jul 7, 2023" text="OpenAI unveils GPT-4, a new foundation for ChatGPT" />
        <Article imgUrl={blog03} date="Jul 7, 2023" text="OpenAI’s GPT-4 upgrade will allow users to convert text to video." />
        <Article imgUrl={blog04} date="Jul 9, 2023" text="OpenAI Announces Chat GPT-4, an AI That Can Understand Photos" />
        <Article imgUrl={blog05} date="Jul 14, 2023" text="OpenAI’s ChatGPT and GPT-4 Used as Lure in Phishing Email, Twitter Scams to Promote Fake OpenAI Tokens" />
      </div>
    </div>
  </div>
);

export default Blog;