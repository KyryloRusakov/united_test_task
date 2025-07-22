import { useState } from "react";
import arrowRight from "../../../assets/arrow-right.svg";

const StepTwo = ({ onNext }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) setError("");
  };

  const handleConfirmChange = (e) => {
    setConfirmPassword(e.target.value);
    if (error) setError("");
  };

  const handleContinue = () => {
    if (password.trim() === "") {
      setError("Please enter a password.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (confirmPassword.trim() === "") {
      setError("Please confirm your password.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    onNext();
  };

  return (
    <div className="quiz-step">
      <h2 className="quiz-title">Create your password</h2>

      <div className="form-control">
        <label htmlFor="password" className="form-control-label sr-only">
          Your password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Your password"
          className={`form-control-input ${error ? "form-control-error" : ""}`}
        />
      </div>

      <div className="form-control">
        <label htmlFor="confirm-password" className="form-control-label sr-only">
          Confirm password
        </label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmChange}
          placeholder="Confirm password"
          className={`form-control-input ${error ? "form-control-error" : ""}`}
        />
      </div>

      {error && <div className="form-control-error-message">{error}</div>}

      <div className="quiz-text">
        Passwords must be at least 8 characters long. You can recover passwords at any time using the email address you provided.
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
