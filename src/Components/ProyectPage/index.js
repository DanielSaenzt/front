import React, { useEffect, useState } from "react";
import Footer from "../Footer"
import "./index.css";
import CardProyect from "../CardProyect";


export default function ProyectPage() {
  return (
    <>
    <section className="first-container">  
            <CardProyect side={true}/>
    </section>


    <section className="second-container">
        <CardProyect side={false}/>
    </section>
    </>
  );
}
