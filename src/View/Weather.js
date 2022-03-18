import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Component/Footer.js";
import Nav from "./Component/Nav.js";
import Main from "./Component/Main.js";
const Weather = () => {
  function name() {
    console.log("vvv");
  }
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#7dd3fc", height: "100vh" }}
      >
        <header className="pt-5 row">
          <div className="row d-flex justify-content-center align-items-center">
            <input
              style={{
                width: "30em",
                height: "2em",
                borderRadius: "9px",
                border: " solid 1px #fff",
              }}
              type="text"
              name="text"
              id=""
              placeholder="City"
            />

            <lord-icon
              onClick={name}
              src="https://cdn.lordicon.com/msoeawqm.json"
              on
              trigger="click"
              colors="primary:#121331,secondary:#fff"
              style={{
                width: "60px",
                height: "50px",
              }}
            ></lord-icon>
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
