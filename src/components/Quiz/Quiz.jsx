import { useState } from "react";
import Step1 from "./Steps/StepOne";
import Step2 from "./Steps/StepTwo";
import Step3 from "./Steps/StepThree";
import Step4 from "./Steps/StepFour";
import Step5 from "./Steps/StepFive";
import Step6 from "./Steps/StepSix";

const Quiz = ({ step, setStep }) => {
  const [gender, setGender] = useState("male");

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            onNext={() => setStep(step + 1)}
            selectedGender={gender}
            onSelectGender={setGender}
          />
        );
      case 2:
        return <Step2 onNext={() => setStep(step + 1)} />;
      case 3:
        return <Step3 onNext={() => setStep(step + 1)} selectedGender={gender} />;
      case 4:
        return <Step4 onNext={() => setStep(step + 1)} />;
      case 5:
        return <Step5 onNext={() => setStep(step + 1)} />;
      default:
        return <Step6 />;
    }
  };

  return (
    <section className="quiz">
      <div className="container">
        {step < 6 && (
          <div className="quiz-progress">
            <div
              className="quiz-progress-bar"
              style={{ width: `${(step / 6) * 100}%` }}
            />
          </div>
        )}

        {renderStep()}
      </div>
    </section>
  );
};

export default Quiz;
