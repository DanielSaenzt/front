import React, { useEffect, useState } from "react";
import "./index.css";
import fondo from "./fondo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CardProgram({ image, numberCard }) {
  return (
    <>
      <div className="card-program-container">
        <div clasName="card-program-container-container">
          <Carousel
            showIndicators={true}
            autoPlay={true}
            infiniteLoop={true}
            dynamicHeight={false}
            showThumbs={false}
          >
            <div>
              <img className="card-program-container-container-image" src={fondo} />
            </div>
          </Carousel>
        </div>
        <div className="card-program-container-text">
          <div className="card-program-container-text-title">
            <span>Casa De valores</span>
          </div>
          <div className="card-program-container-text-description">
            <p>
              The Hunton Group values employees and continually invests in their
              growth. Hunton University Leadership Program is just one of the
              many ways we empower, encourage, and support our people.The Hunton Group values employees and continually invests in their
              growth. Hunton University Leadership Program is just one of the
              many ways we empower, encourage, and support our people.
              The Hunton Group values employees and continually invests in their
              growth. Hunton University Leadership Program is just one of the
              many ways we empower, encourage, and support our people.
              The Hunton Group values employees and continually invests in their
              growth. Hunton University Leadership Program is just one of the
              many ways we empower, encourage, and support our people.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
