import { useState } from "react";
import maleIcon from "../../../assets/male.png";
import femaleIcon from "../../../assets/female.png";
import sliderImages from "../../../assets/sliderImages";
import arrowRight from "../../../assets/arrow-right.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StepOne = ({ onNext, selectedGender, onSelectGender  }) => {
  const handleSelect = (gender) => {
    onSelectGender(gender);
  };

  const images = [
    sliderImages.img1,
    sliderImages.img2,
    sliderImages.img3,
    sliderImages.img4,
    sliderImages.img5,
    sliderImages.img6,
    sliderImages.img7,
    sliderImages.img8,
    sliderImages.img9,
  ];

  const sliderSettings = {
    infinite: true,
    centerMode: true,
    centerPadding: "64px",
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerPadding: "44px",
        },
      },
      { 
        breakpoint: 374,
        settings: {
          centerPadding: "14px",
        },
      },
    ],
  };

  return (
    <div className="quiz-step">
      <h2 className="quiz-title">Glad you're here!</h2>
      <Slider {...sliderSettings} className="quiz-slider">
        {images.map((src, index) => (
          <div className="quiz-slider-item" key={index}>
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="quiz-subtitle">Select your sex</div>
      <div className="quiz-options">
        <div
          className={`quiz-option-card ${selectedGender === "male" ? "active" : ""}`}
          onClick={() => handleSelect("male")}
        >
          <img src={maleIcon} alt="Male" />
          <div className="quiz-option-title">Male</div>
        </div>

        <div
          className={`quiz-option-card ${
            selectedGender === "female" ? "active" : ""
          }`}
          onClick={() => handleSelect("female")}
        >
          <img src={femaleIcon} alt="Female" />
          <div className="quiz-option-title">Female</div>
        </div>
      </div>
      <button type="button" className="button button-primary" onClick={onNext}>
        Continue
        <img src={arrowRight} className="icon-arrow" />
      </button>
    </div>
  );
};

export default StepOne;
