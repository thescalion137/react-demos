import React, { useState } from "react";
import "./Slider.css";
import styled from "styled-components";
import { sliderItems } from "../../data";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div className="slider-container">
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <IoMdArrowDropleft size={35} />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <div
            className="slide"
            style={{ backgroundColor: `#${item.bg}` }}
            key={item.id}
          >
            <div className="imageContainer">
              <img src={item.img} className="image" alt="" />
            </div>
            <div className="infoContainer">
              <h1 className="title">{item.title}</h1>
              <p className="desc">{item.desc}</p>
              <button className="btn">SHOW NOW</button>
            </div>

            <div />
          </div>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <IoMdArrowDropright size={35} />
      </Arrow>
    </div>
  );
};

export default Slider;
