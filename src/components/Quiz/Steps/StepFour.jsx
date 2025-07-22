import { useState } from "react";
import hotImage from "../../../assets/hot-image.png";
import trendyImage from "../../../assets/trendy-image.png";
import arrowRight from "../../../assets/arrow-right.svg";

const StepFour = ({ onNext }) => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    content: "",
  });

  const handleSelect = (content) => {
    setSelectedContent(content);
    setErrors((prev) => ({ ...prev, content: "" }));
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: "" }));
  };

const handleContinue = () => {
  const emailTrimmed = email.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(emailTrimmed);

  const newErrors = {
    email: emailTrimmed === ""
      ? "Email is required"
      : !isEmailValid
      ? "Please enter a valid email"
      : "",
    content: !selectedContent ? "Please select an option" : "",
  };

  setErrors(newErrors);

  const isValid = Object.values(newErrors).every((err) => err === "");

  if (isValid) {
    onNext();
  }
};

  return (
    <div className="quiz-step">
      <h2 className="quiz-title">What kind of content do you enjoy? 👀</h2>

      <div className="quiz-options">
        <div
          className={`quiz-option-card ${selectedContent === "hot" ? "active" : ""}`}
          onClick={() => handleSelect("hot")}
        >
          <img src={hotImage} alt="Hot" />
          <div className="quiz-option-title">Hot</div>
        </div>

        <div
          className={`quiz-option-card ${selectedContent === "trendy" ? "active" : ""}`}
          onClick={() => handleSelect("trendy")}
        >
          <img src={trendyImage} alt="Trendy" />
          <div className="quiz-option-title">Trendy</div>
        </div>
      </div>

      {errors.content && (
        <div className="form-control-error-message">{errors.content}</div>
      )}

      <div className="quiz-subtitle">What is your email address?</div>
      <div className="form-control">
        <label htmlFor="email" className="form-control-label sr-only">
          Type your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Type your email"
          autoComplete="on"
          className={`form-control-input ${errors.email ? "form-control-error" : ""}`}
        />
        {errors.email && (
          <div className="form-control-error-message">{errors.email}</div>
        )}
      </div>
      <div className="quiz-text">Email is required for registration.</div>

      <button type="button" className="button button-primary" onClick={handleContinue}>
        Continue
        <img src={arrowRight} className="icon-arrow" />
      </button>
    </div>
  );
};

export default StepFour;
