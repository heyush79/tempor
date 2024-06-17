import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="steps">
      Create your Ryvive profile
        <div className="step active">
          <div className="step-number">1</div>
          Basic information
        </div>
        <div className="step">
          <div className="step-number">2</div>
          Personal details
        </div>
        <div className="step">
          <div className="step-number">3</div>
          Get verified instantly
        </div>
      </div>
      <div>
      <div className="help-links">
        <a href="https://www.termsfeed.com/blog/terms-conditions-url/">Help</a>
        <a href="https://www.termsfeed.com/blog/terms-conditions-url/">Privacy</a>
      </div>
      <div className="language-selector">
        <select>
          <option>English</option>
        </select>
      </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
