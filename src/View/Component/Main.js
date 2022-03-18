import React, { useEffect } from "react";
import "../style/Main.css";
import img1 from "../../Assets/Images/Sun cloud mid rain.png";

const Main = ({ Data }) => {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="glass">
        <div className="m-2">
          <div class="d-flex bd-highlight justify-content-center align-items-center">
            <div class="bd-highlight">
              <img src={img1} alt="" width={130} height={130} />
            </div>
            <div class="mt-4 p-2  bd-highlight fs-3">
              {Data == null ? "" : Data.name}
              <br />
              {Data == null ? "" : (Data.main.temp - 273.15).toFixed(0) + "C°"}
            </div>
          </div>
          <div className="p-4">
            <div class="pt-5 d-flex flex-row bd-highlight mb-3">
              <div class="p-1 bd-highlight">Flex item 1</div>
              <div class="p-1 bd-highlight">Flex item 2</div>
              <div class="p-1 bd-highlight">Flex item 3</div>
              <div class="p-1 bd-highlight">Flex item 4</div>
              <div class="p-1 bd-highlight">Flex item 5</div>
              <div class="p-1 bd-highlight">Flex item 6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
