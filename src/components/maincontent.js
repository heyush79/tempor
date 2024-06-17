import React, { useState } from 'react';
import './maincontent.css';

const MainContent = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showTooltip, setShowTooltip] = useState(true);

  const handleGetOtp = () => {
    // Handle OTP generation
    setShowTooltip(false);
  };

  const handleContinue = () => {
    // Handle form submission
  };

  return (
    <div className="main-content">
      <div className="form-container">
        <h2>We need your mobile number</h2>
        <p>We'll send you a one-time password (OTP) to verify it's you.</p>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter your mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <button onClick={handleGetOtp}>Get OTP</button>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <div className="terms">
          By entering OTP you agree <a href="https://www.termsfeed.com/blog/terms-conditions-url/">Terms of use</a>
        </div>
        <button id="continue" onClick={handleContinue}>Continue</button>
      </div>
      {showTooltip && (
        <div className="tooltip">
          <p>Receive OTP</p>
          <p>You'll receive the OTP on the phone number you provide.</p>
          <button onClick={() => setShowTooltip(false)}>Got it</button>
        </div>
      )}
    </div>
  );
};

export default MainContent;
