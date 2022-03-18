import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Component/Footer.js";
import Nav from "./Component/Nav.js";
import Main from "./Component/Main.js";
import {
  getWeatherDataByCity,
  getWeatherDataByCoord,
} from "../Controller/WeatherService.js";
const Weather = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState(false);
  const [Loader, setLoader] = useState(false);

  const [data, setData] = useState();

  function name() {
    setData(null);
    setState(false);
    setLoader(true);

    setTimeout(() => {
      document.title = "List Equipments";
      getWeatherDataByCity(city).then((response) => {
        console.log("response", response);
        setData(response);
      });
      setLoader(false);
      setState(true);
    }, 2000);
  }
  useEffect(() => {});
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#39AEA9", height: "100vh" }}
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
              onChange={(e) => setCity(e.target.value)}
            />

            <lord-icon
              onClick={name}
              src="https://cdn.lordicon.com/msoeawqm.json"
              on
              trigger="click"
              colors="primary:#121331,secondary:#fff"
              style={{
                width: "70px",
                height: "80px",
              }}
            ></lord-icon>
          </div>
        </header>
        {state === false ? (
          Loader === false ? (
            ""
          ) : (
            <div className="row d-flex justify-content-center align-items-center">
              <lord-icon
                src="https://cdn.lordicon.com/xjovhxra.json"
                trigger="loop"
                colors="primary:#ffffff,secondary:#08a88a"
                style={{ width: "150px", height: "150px" }}
              ></lord-icon>
            </div>
          )
        ) : (
          <main className="row m-5">
            <Main Data={data} />
          </main>
        )}
      </div>
    </>
  );
};

export default Weather;
