import React, { useEffect, useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const ind = data.length - 1;
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? ind : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === ind ? 0 : (prev) => prev + 1);
  };

  useEffect(() => {
    const interVal = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(interVal);
  }, [currentSlide]);
  return (
    <div className="slider">
      <div className="container">
        <img src={data[currentSlide]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider;
