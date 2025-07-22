import { useState } from "react";
import arrowRight from "../../../assets/arrow-right.svg";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

const StepThree = ({ onNext, selectedGender }) => {
  const [ageFrom, setAgeFrom] = useState("");
  const [ageTo, setAgeTo] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [error, setError] = useState("");

  const ageOptions = Array.from({ length: 83 }, (_, i) => i + 18);

  const handleContinue = () => {
    if (!ageFrom || !ageTo || !birthMonth || !birthDay || !birthYear) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    onNext();
  };

  return (
    <div className="quiz-step">
      <h2 className="quiz-title">
        Select your age preference for{" "}
        {selectedGender === "male" ? "women" : "men"}
      </h2>

      <div className="form-group-wrapper">
        <div className="form-group">
          <label htmlFor="ageFrom" className="sr-only">
            From
          </label>
          <select
            id="ageFrom"
            value={ageFrom}
            onChange={(e) => setAgeFrom(e.target.value)}
            className="form-control-input"
          >
            <option value="">From</option>
            {ageOptions.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="ageTo" className="sr-only">
            To
          </label>
          <select
            id="ageTo"
            value={ageTo}
            onChange={(e) => setAgeTo(e.target.value)}
            className="form-control-input"
          >
            <option value="">To</option>
            {ageOptions
              .filter((age) => !ageFrom || age > ageFrom)
              .map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className="quiz-subtitle">What is your age?</div>

      <div className="form-group-wrapper full-width">
        <div className="form-group">
          <label htmlFor="birthMonth" className="sr-only">
            Month
          </label>
          <select
            id="birthMonth"
            value={birthMonth}
            onChange={(e) => setBirthMonth(e.target.value)}
            className="form-control-input"
          >
            <option value="">Month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="birthDay" className="sr-only">
            Day
          </label>
          <select
            id="birthDay"
            value={birthDay}
            onChange={(e) => setBirthDay(e.target.value)}
            className="form-control-input"
          >
            <option value="">Day</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="birthYear" className="sr-only">
            Year
          </label>
          <select
            id="birthYear"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
            className="form-control-input"
          >
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && <div className="form-control-error-message">{error}</div>}

      <div className="quiz-text">
        By proceeding, you confirm that you are fully legally capable of using
        this website and are at least 18 years old.
      </div>

      <button
        type="button"
        className="button button-primary"
        onClick={handleContinue}
      >
        Continue
        <img src={arrowRight} className="icon-arrow" alt="Continue" />
      </button>
    </div>
  );
};

export default StepThree;
