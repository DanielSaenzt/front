import React from "react";
import HandLogo from "./HandLogo.png";
import TextLogo from "./TextLogo.png";
import "./index.css"
import Navbar from "../Navbar";

export default function Header(){
    return(
        <header>
            <div className="header-first-container">

                <img alt="Logo tipo fundacion socila oasis" src={HandLogo} className="header-hand_logo"/>

                <img alt="Logo tipo fundacion socila oasis" src={TextLogo} className="header-text_logo"/>

                <Navbar/>

            </div>

            <div className="header-second-container">
                
                <div role="button" className="header-second-container-contact">Contactanos</div>
            </div>
            
        </header>
    );
}
