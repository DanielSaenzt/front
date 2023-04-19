import React from 'react';
import Logo from "./Logo.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./index.css"
  
export default function ImagesCarousel() {
  return (
    <>
       <Carousel showIndicators={true} autoPlay={true} infiniteLoop={true} dynamicHeight={false} showThumbs={false}>
                <div>
                    <img src={Logo} />
                </div>
                <div>
                    <img className="first-container-image" src={Logo} />
                </div>
        </Carousel>
    </>
  );
}