import React from "react";
import HomePage from "./Components/HomePage";
import "./App.css"
import ProgramPage from "./Components/ProgramPage";
import ProyectPage from "./Components/ProyectPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Foorter from "./Components/Footer";
import HelpPage from "./Components/HelpPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/proyect"  element={<ProyectPage />} />
          <Route  path="/help" element={<HelpPage/>}/>
          <Route path="/*" element={null}/>
        </Routes>
        <Foorter/>
      </BrowserRouter>
    </div>
  );
}


export default App;