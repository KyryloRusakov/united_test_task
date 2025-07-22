import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz/Quiz";
import Cookie from "./components/Cookie";

const App = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <Cookie step={step} />
      <Header step={step} />
      <main className="main">
        <Quiz step={step} setStep={setStep} />
      </main>
      <Footer step={step} />
    </>
  );
};

export default App;
