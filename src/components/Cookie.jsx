import React from "react";

const Cookie = ({ step }) => {
  if (step !== 1) return null;

  return (
    <div className="cookie">
      <div className="cookie-inner">
        <div className="cookie-text">
          We use cookies to make your experience better! If you continue to use
          this site we will assume you are happy with it.
        </div>
        <button type="button" className="button button-light">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Cookie;
