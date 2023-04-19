import React, { useEffect, useState } from "react";
import "./index.css";
import casaValoresImage from "./casaValoresImage.png";
import comedoreVidaImage from "./comedoresVidaImage.png";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardSelectionProgram({ image, numberCard }) {
  return (
    <>
      <div className="card-container">
        <img
          clasName="card-container-image"
          src={comedoreVidaImage}
          alt="Imagen programa fundacion social oasis"
        />
        <div className="card-container-text">
          <div className="card-container-text-number">
            <span>{numberCard}</span>
          </div>
          <div className="card-container-text-title">
            <span>Casa de valores</span>
          </div>
          <div className="card-container-text-redirection">
            <a href="">Ver Más</a>
            <a href="">
              <FontAwesomeIcon
                icon={faArrowRightLong}
                style={{
                  backgroundColor: "#ffff",
                  color: "#158768",
                  marginLeft: "10%",
                }}
                size="1x"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
