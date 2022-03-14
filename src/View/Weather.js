import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Component/Footer.js";
import Nav from "./Component/Nav.js";

const Weather = () => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#F18989" }}>
        <header className="row">
          <Nav />
          <div className="row">
            <input type="text" name="" id="" />
          </div>
        </header>
        <main className="row d-flex justify-content-center align-items-center">
          c
        </main>
        <footer className="row">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Weather;
