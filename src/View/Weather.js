import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Component/Footer.js";
import Nav from "./Component/Nav.js";
import Main from "./Component/Main.js";
const Weather = () => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#F18989" }}>
        <header className="row">
          <Nav />
          <div className="row d-flex justify-content-center align-items-center">
            <input
              style={{ width: "30em", height: "", borderRadius: "10px" }}
              type="text"
              name="text"
              id=""
              placeholder="City"
            />
          </div>
        </header>
        <main className="row m-5">
          <Main />
        </main>
        <footer className="row">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Weather;
