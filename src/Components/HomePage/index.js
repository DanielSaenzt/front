import React from "react";
import "./index.css";
import Header from "../Header";
import ImagesCarousel from "../ImagesCarousel";
import TeamComponent from "../TeamComponent";
import Logo from "./Logo.png"
import Foorter from "../Footer";

export default function HomePage() {
  return (
    <>
    <section className="home-first-container">

        <div className="home-first-container-title-images">
            
            <div className="home-first-container-title">
              <span className="home-first-container-title-principal">Un Compromiso De Vida</span>
            </div>

            <div className="home-first-container-images">
              <ImagesCarousel/>
            </div>
        </div>

        <div className="home-first-container-none">
          <img className="home-image" alt="Logo fundacion social oasis" src={Logo} />
        </div>
    </section>


    <section className="home-second-container">
        <div className="home-second-container-title">
          <span>Quienes somos</span>
        </div>
        <div className="home-second-container-description">
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores illo minus dolor nulla aliquam eum repudiandae sequi hic cum, numquam eos, ab molestiae tempore dicta voluptates molestias saepe laborum, maiores doloremque sit cumque asperiores iste. Delectus vero corrupti iste praesentium aut omnis ad aperiam sed aliquam repellendus labore enim facilis perferendis impedit error vel dolorum cum, nemo provident saepe dolor quia temporibus non? Totam beatae dignissimos pariatur inventore sapiente, dicta voluptas quod aut sint provident reiciendis assumenda fugit, numquam libero ea quibusdam, praesentium vel! Earum sit voluptas expedita hic temporibus consectetur labore tenetur eligendi distinctio, neque aperiam, 
          </p>
        </div>

        <div className="home-second-container-achievement">

        </div>
    </section>

    <section className="home-third-container">
        <div className="home-third-container-title">
          <span>Equipo de trabajo</span>
        </div>
        <TeamComponent/>
    </section>
    </>
  );
}
