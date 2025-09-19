import React, { useContext } from "react";
import { BeerContext } from "../../context/beer";
import { BeerI, FirstStatePropsI } from "../../types";

import crossImg from "../../image/cross.png";
import pipes1IMG from "../../image/pipes1.png";
import EndbeerImg from "../../image/endbeer.png";
import AddbeerImg from "../../image/addbeer.png";

const FirstStateComponent: React.FC<FirstStatePropsI> = ({ id }) => {
  const { beers, setBeers } = useContext(BeerContext)!;

  const addGlassClick = (id: string) => {
    const updateBeer = beers.map((value: BeerI) => {
      return value.id === id
        ? { ...value, state: "second"}
        : value;
    });
    setBeers(updateBeer);
  };
  return (
    <div className="cupcell-container-item">
      <img className="cupcell-container-top" src={pipes1IMG} alt="pipes1IMG" />
      <div className="cupcell-container-body">
        <img
          className="AddbeerImg"
          src={crossImg}
          alt="AddbeerImg"
          onClick={() => addGlassClick(id)}
        />
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
  );
};

export default FirstStateComponent;
