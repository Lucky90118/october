import React, { useState, useContext } from "react";
import "./index.scss";
import { CheckFlagContext } from "../../context/checkflag";

import { CupCellPropsI } from "../../types";
import FirstStateComponent from "../first";
import SecondStateComponent from "../second";
import ThirdStateComponent from "../third";
import FourthStateComponent from "../fourth";
import FifthStateComponent from "../fifth";
import ZeroStateComponent from "../zero";

const CupCell: React.FC<CupCellPropsI> = ({
  activate,
  bet,
  balance,
  setBalance,
}) => {
  const {checkFlag} = useContext(CheckFlagContext)!;
  console.log(checkFlag, "AAA");
  
  return (
    <div className="cupcell-container">
      {activate.state === "first" && !checkFlag ? (
        <FirstStateComponent id={activate.id} />
      ) : activate.state === "second" ? (
        <SecondStateComponent
          id={activate.id}
          value={activate.value}
          balance={balance}
          bet={bet}
          setBalance={setBalance}
        />
      ) : activate.state === "third" ? (
        <ThirdStateComponent
          id={activate.id}
          value={activate.value}
          balance={balance}
          bet={bet}
          setBalance={setBalance}
        />
      ) : activate.state === "fourth" ? (
        <FourthStateComponent />
      ) : activate.state === "fifth" ? (
        <FifthStateComponent value={activate.value} />
      ) : (
        <ZeroStateComponent />
      )}
    </div>
  );
};

export default CupCell;
