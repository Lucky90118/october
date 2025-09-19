import React from "react";
import "./index.scss";

import FirstStateComponent from "../first";
import { CupCellPropsI } from "../../types";
import SecondStateComponent from "../second";
import ThirdStateComponent from "../third";
import FourthStateComponent from "../fourth";
import FifthStateComponent from "../fifth";

const CupCell: React.FC<CupCellPropsI> = ({
  activate,
  bet,
  balance,
  setBalance,
}) => {

  return (
    <div className="cupcell-container">
      {activate.state === "first" ? (
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
      ) : (
        <FifthStateComponent value={activate.value}/>
      )}
    </div>
  );
};

export default CupCell;
