import React from "react";
import colunmOne from "../../../images/columnone.png";
import colunmTwo from "../../../images/columntwo.png";
import colunmThree from "../../../images/columnthree.png";
import colunmFour from "../../../images/columnfour.png";
import colunmFive from "../../../images/columnfive.png";
import colunmSix from "../../../images/columnsix.png";

const ColumnImg = () => {
  return (
    <section id="columnImg">
      <div className="container">
        <div className="columnImg">
          <img className="first" src={colunmOne} alt="colunmOne" />
          <div className="columnImg__first">
            <img src={colunmTwo} alt="colunmTwo" />
            <div>
              <div className="second">
                <img src={colunmThree} alt="colunmThree" />
                <img src={colunmFour} alt="colunmFour" />
              </div>
              <div className="last">
                <img src={colunmFive} alt="colunmFive" />
                <img src={colunmSix} alt="colunmSix" />
              </div>
            </div>
          </div>
          <h1>
            Приближает вас к людям, <br /> и вещам которые вы любите
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ColumnImg;
