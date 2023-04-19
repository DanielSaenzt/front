import React, { useEffect, useState } from "react";
import Footer from "../Footer"
import "./index.css";
import CardSelectionProgram from "../CardSelecctionProgram";
import CardProgram from "../CardProgram";


export default function ProgramPage() {
  return (
    <>
    <section className="first-container">  
            <div className="first-container-title">
              <span className="first-container-title-principal">Programas</span>
            </div>

            <div className="first-container-programs">
              <CardSelectionProgram image={"casaValoresImege"} numberCard={"01"}/>
              <CardSelectionProgram image={"comedoreVidaImage"} numberCard={"02"}/>
            </div>

    </section>


    <section className="second-container">
        <CardProgram/>
    </section>

    <section className="third-container">
      <CardProgram/>
    </section>
    </>
  );
}
