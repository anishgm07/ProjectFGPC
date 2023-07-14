import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../Images/bg/Clouds2.jpg";
import Image2 from "../Images/bg/Clouds3.jpg";
import Image3 from "../Images/bg/Clouds4.jpg";
import "../styles/components/CarouselSlider.css";

const CarouselSlider: React.FC = () => {
  const images = [Image1, Image2, Image3];

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      stopOnHover={true}
      showIndicators={false}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;
