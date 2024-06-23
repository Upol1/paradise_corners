import React from "react";
import { Carousel } from "antd";
import "../styles/CarouselItems.css";
import "../styles/Carousel.css";

const CarouselItems = (props) => {
  const objectImage = [];

  const addCollageItems = () => {
    for (let index = 0; index < 6; index++) {
      objectImage.push(<img src={props.src} alt="" width="100px" />);
    }
  };
  addCollageItems();
  return (
    <Carousel autoplay dotPosition="top">
      {objectImage.map((item) => {
        return (
          <div key={Math.random()}>
            <img src={item.props.src} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselItems;
