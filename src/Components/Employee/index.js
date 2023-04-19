import React,{useEffect, useState} from "react";
import "./index.css";
import Logo from "../../superman.jpg"



export default function Employee() {

  return (
    <>
      <div className="employee">    
          <div className="employee-image" style={{backgroundImage:  `url(${Logo})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center"}}></div>      
          <div className="employee-name" >
              <p>Cristina Cazorla</p>
          </div>
          <div className="employee-position" >
              <p>Docente</p>
          </div>
      </div>
    </>
  );
}
