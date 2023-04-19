import React, { useEffect, useState } from "react";
import "./index.css";
import Logo from "./../../LogoFooter.png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import location from "./../../location.png";

export default function Foorter() {
  return (
    <>
      <div className="footer">
        <div className="footer-firtscontainer">
          <img
            alt="Logotipo fundacion socila oasis"
            src={Logo}
            className="footer-firtscontainer-image"
          />
          <span className="footer-firtscontainer-text">
            ® 2022 Fundación Social Oasis. All rights reserved.
          </span>
        </div>

        <div className="footer-secondcontainer">
          <div className="footer-secondcontainer-central">
          <span className="footer-secondcontainer-title">Encuentranos</span>
          <div className="footer-direction">
            <span className="footer-secondcontainer-direction">
              Cra. 27K N° 71i-28 Sur Paraiso
            </span>
            <span className="footer-secondcontainer-direction">
              Ciudad Bolivar
            </span>
          </div>

          <div className="footer-contact">
            <span className="footer-firtscontainer-contact">
              <b>Tel:</b>792 33 62
            </span>
            <span className="footer-firtscontainer-contact">
              <b>Cel:</b>311 899 19 86
            </span>
          </div>

          <div className="footer-button" role="button">
            <span className="footer-butto-text">Whatsapp</span>
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
        </div>
        <div className="footer-thirdcontainer" color="white">
          <a
            href="https://www.google.com/maps/place/Fundaci%C3%B3n+Social+Oasis/@4.549327,-74.1637669,19z/data=!4m5!3m4!1s0x0:0xf9a066309134c7f6!8m2!3d4.5494224!4d-74.1632202"
            target="_blank"
            className="footer-thirdcontainer-location"
          >
            <img
              alt="Logo tipo fundacion socila oasis"
              src={location}
              className=""
            />
          </a>
        </div>
      </div>
    </>
  );
}
