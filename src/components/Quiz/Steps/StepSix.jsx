import { useState } from "react";
import confetti from "../../../assets/confetti.png";
import arrowRight from "../../../assets/arrow-right.svg";

const StepSix = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="quiz-step">
      <div className="quiz-image-wrapper">
        <img src={confetti} alt="Confetti" />
      </div>
      <h2 className="quiz-title">Thanks for your answers!</h2>
      <div className="quiz-subtitle">
        Please check the box below to accept our rules. You’re all set!
      </div>
      <div className="quiz-terms-wrapper">
        <label className="custom-checkbox" htmlFor="acceptTerms">
          <input
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="checkbox-mark" />
        </label>
        <div className="quiz-text">
          I have read, understand and agree to Terms of Use, Privacy
          Policy, Cookie Policy, Billing & Refund Policy, Disclosures &
          Disclaimers
        </div>
      </div>
      <button type="button" className="button button-primary">
        Join Now
        <img src={arrowRight} className="icon-arrow" />
      </button>
    </div>
  );
};

export default StepSix;
