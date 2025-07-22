import { useState } from "react";
import arrowRight from "../../../assets/arrow-right.svg";

const StepTwo = ({ onNext }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
    if (error) setError("");
  };

  const handleContinue = () => {
    const trimmed = username.trim();
    
    if (username.trim() === "") {
      setError("Please enter a username.");
      return;
    }

    if (trimmed.length < 2) {
      setError("Username must be at least 2 characters long.");
      return;
    }

    setError("");
    onNext();
  };

  return (
    <div className="quiz-step">
      <h2 className="quiz-title">What name should users call you?</h2>
      <div className="form-control">
        <label htmlFor="username" className="form-control-label sr-only">
          Type your username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Type your username"
          autoComplete="on"
          className={`form-control-input ${error ? "form-control-error" : ""}`}
        />
        {error && <div className="form-control-error-message">{error}</div>}
      </div>
      <div className="quiz-text">
        You don’t have to use your real name – feel free to use a nickname. You
        can change it anytime.
      </div>
      <button
        type="button"
        className="button button-primary"
        onClick={handleContinue}
      >
        Continue
        <img src={arrowRight} className="icon-arrow" />
      </button>
    </div>
  );
};

export default StepTwo;
