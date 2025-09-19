import React from "react";
import EndbeerImg from "../../image/endbeer.png";
import AddbeerImg from "../../image/addbeer.png";
import pipes1IMG from "../../image/pipes1.png";
import { FifthStatePropsI } from "../../types";

const FifthStateComponent: React.FC<FifthStatePropsI> = ({value}) => {
  return (
    <div className="cupcell-container-item">
          <img
            className="cupcell-container-top"
            src={pipes1IMG}
            alt="pipes1IMG"
          />
          <div className="cupcell-container-body">
            <div className="Under">
              <p>{value}</p>
            </div>
            <div className="cupcell-container-control">
              <img
                className="AddbeerImg"
                src={AddbeerImg}
                alt="AddbeerImg"
                style={{ opacity: 0 }}
              />
              <img
                className="EndbeerImg"
                src={EndbeerImg}
                alt="EndbeerImg"
                style={{ opacity: 0 }}
              />
            </div>
          </div>
        </div>
  )
}

export default FifthStateComponent;