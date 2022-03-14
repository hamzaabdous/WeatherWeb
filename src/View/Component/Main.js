import React from "react";
import "../style/Main.css";
import img1 from "../../Assets/Images/Sun cloud mid rain.png";
const Main = () => {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="glass">
        <div class=" d-flex bd-highlight">
          <div class="p-2  bd-highlight">
            <img src={img1} alt="" width={130} height={130} />
          </div>
          <div class="m-4 p-2 bd-highlight fs-3">
            RABAT
            <br />
            20*C
          </div>
        </div>
        <div>c</div>
      </div>
    </div>
  );
};

export default Main;
