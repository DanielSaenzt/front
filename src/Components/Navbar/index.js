import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="nav-principal-menu">
          <li>
            <div class="nav-dropdown">
              <div className="nav-dropdown-principal-text">
                <Link to="/" className="nav-dropdown-principal-text-link">
                  <span>Conócenos</span>
                </Link>
              </div>
              <div className="nav-dropdown-container" style={{ height: "90%" }}>
                <div className="nav-dropdown-container-whitespace"></div>
                <div className="nav-dropdown-content">
                  <Link to="/" className="nav-dropdown-options">
                    <span>Quienes somos</span>
                  </Link>
                  <Link to="/" className="nav-dropdown-options">
                    <span>Equipo de trabajo</span>
                  </Link>
                </div>
              </div>
            </div>
          </li>

          <div className="nav-principal-menu-line"></div>

          <li>
            <div className="nav-principal-menu-item">
              <Link to="/program" className="nav-dropdown-principal-text-link">
                <span>Programas</span>
              </Link>
            </div>
          </li>

          <div className="nav-principal-menu-line"></div>

          <li>
            <div class="nav-dropdown">
              <div className="nav-dropdown-principal-text">
                <Link to="/proyect" className="nav-dropdown-principal-text-link">
                  <span>Proyectos</span>
                </Link>
              </div>
              <div className="nav-dropdown-container" style={{ height: "90%" }}>
                <div className="nav-dropdown-container-whitespace"></div>
                <div className="nav-dropdown-content">
                  <Link to="/proyect" className="nav-dropdown-options">
                    <span>Oasis gourmet</span>
                  </Link>
                  <Link to="/proyect" className="nav-dropdown-options">
                    <span>Finca eco-social</span>
                  </Link>
                </div>
              </div>
            </div>
          </li>

          <div className="nav-principal-menu-line"></div>

          <li>
            <div class="nav-dropdown">
              <div className="nav-dropdown-principal-text">
                <Link to="/help" className="nav-dropdown-principal-text-link">
                  <span>Cómo ayudar</span>
                </Link>
              </div>
              <div className="nav-dropdown-container">
                <div className="nav-dropdown-container-whitespace"></div>
                <div className="nav-dropdown-content">
                  <Link to="/help" className="nav-dropdown-options">
                    <span>Donaciones</span>
                  </Link>
                  <Link to="/help" className="nav-dropdown-options">
                    <span>Plan padrino</span>
                  </Link>
                  <Link to="/help" className="nav-dropdown-options">
                    <span>Voluntariado</span>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
