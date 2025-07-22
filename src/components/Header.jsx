import React from "react";
import logo from "../assets/logo.png";

const Header = ({ step }) => {
  return (
    <header className="header">
      <div className={`container header-inner ${step !== 1 ? "center-logo" : ""}`}>
        <div className="header-logo">
          <a href="/">
            <img src={logo} alt="logotype" />
          </a>
        </div>
        {step === 1 && (
          <div className="header-right">
            <button type="button" className="button button-link">
              Already have an account?
            </button>
            <button type="button" className="button button-light">
              Sign in
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
