import React, { useEffect, useState } from "react";
import "./index.css";
import fondo from "./fondo.png";

export default function CardProyect({ image, side }) {
  const classname = side
    ? "card-proyect-container-text-right"
    : "card-proyect-container-text-left";
  return (
    <>
      <div className="card-proyect-container">
        <img className="card-proyect-container-image" src={fondo} />
        <div className={classname}>
          <div className="card-proyect-container-text-title">
            <span>Casa De valores</span>
          </div>
          <div className="card-proyect-container-text-description">
            <p>
              The Hunton Group values employees and continually invests in their
              growth. Hunton University Leadership Program is just one of the
              many ways we empower, encourage, and support our people.The Hunton
              Group values employees and continually invests in their growth.
              Hunton University Leadership Program is just one of the many ways
              we empower, encourage, and support our people. The Hunton Group
              values employees and continually invests in their growth. Hunton
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
