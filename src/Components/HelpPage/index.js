import React, { useEffect, useState } from "react";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "react-responsive-carousel";
import fondo from "./fondo.png";
import nequi from "./nequi.png";
import daviPlata from "./daviPlata.png";
import paypal from "./paypal.png";

export default function HelpPage() {
  return (
    <>
      <div className="help-images">
        <Carousel
          showIndicators={true}
          autoPlay={true}
          infiniteLoop={true}
          dynamicHeight={false}
          showThumbs={false}
        >
          <div>
            <img className="" src={fondo} />
          </div>
        </Carousel>
      </div>
      <section className="help-donation">
        <div className="help-donation-firtscontainer">
          <span className="help-donation-firtscontainer-tittle">Donación</span>
          <div className="help-donation-firtscontainer-images">
            <img
              className="help-donation-firtscontainer-images-image"
              src={nequi}
            />
            <img
              className="help-donation-firtscontainer-images-image"
              src={daviPlata}
            />
            <img
              className="help-donation-firtscontainer-images-image"
              src={paypal}
            />
          </div>
        </div>

        <div className="help-donation-secondcontainer">
          <div className="help-donation-firtscontainer-card">
            <div className="help-donation-firtscontainer-card-content">
              <span className="help-donation-firtscontainer-card-tittle">
                Voluntariado
              </span>
              <p className="help-donation-firtscontainer-card-description">
                The Hunton Group values employees and continually invests in
                their growth. Hunton University Leadership Program is just one
                of the many ways we empower, encourage, and support our people.
              </p>
            </div>
            <div className="help-donation-firtscontainer-card-button" role="button">
                <span className="butto-text">Comunicate</span>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{
                    backgroundColor: "#00936E",
                    color: "#ffff",
                    marginLeft: "10%",
                  }}
                  size="2x"
                />
            </div>
          </div>
          <ul type="none">
            <li>
              <div className="help-donation-firtscontainer-card">
                <div className="help-donation-firtscontainer-card-content">
                  <span className="help-donation-firtscontainer-card-tittle">
                    Plan Padrino
                  </span>
                  <p className="help-donation-firtscontainer-card-description">
                    The Hunton Group values employees and continually invests in
                    their growth. Hunton University Leadership Program is just
                    one of the many ways we empower, encourage, and support our
                    people.
                  </p>
                </div>
                <div className="help-donation-firtscontainer-card-image">
                  <Carousel
                    showIndicators={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    dynamicHeight={false}
                    showThumbs={false}
                  >
                    <div>
                      <img className="" src={fondo} />
                    </div>
                  </Carousel>
                </div>
              </div>
            </li>
            <li>
              <div className="help-donation-firtscontainer-card">
                <div className="help-donation-firtscontainer-card-content">
                  <span className="help-donation-firtscontainer-card-tittle">
                    Voluntariado
                  </span>
                  <p className="help-donation-firtscontainer-card-description">
                    The Hunton Group values employees and continually invests in
                    their growth. Hunton University Leadership Program is just
                    one of the many ways we empower, encourage, and support our
                    people.
                  </p>
                </div>
                <div className="help-donation-firtscontainer-card-image">
                  <Carousel
                    showIndicators={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    dynamicHeight={false}
                    showThumbs={false}
                  >
                    <div>
                      <img className="" src={fondo} />
                    </div>
                  </Carousel>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
