import React, { useContext } from "react";
import { BeerContext } from "../../context/beer";
import { CheckFlagContext } from "../../context/checkflag";
import pipes1IMG from "../../image/pipes1.png";
import cup0Img from "../../image/cup0.png";
import AddbeerImg from "../../image/addbeer.png";
import EndbeerImg from "../../image/endbeer.png";
import { BeerI } from "../../types";
import { SecondStatePropsI } from "../../types";

const SecondStateComponent: React.FC<SecondStatePropsI> = ({
  id,
  value,
  balance,
  bet,
  setBalance,
}) => {
  const { beers, setBeers } = useContext(BeerContext)!;
  const {setCheckFlag} = useContext(CheckFlagContext)!;

  const addBeerClick = (id: string, value: number) => {
    setCheckFlag(true);
    let beerFlag: any;
    if (value === 0) {
      beerFlag =
        Math.floor(Math.random() * 2) + 1 < 0.48
          ? 2
          : Math.floor(Math.random() * 2) + 1;
    } else if (value === 2) {
      beerFlag =
        Math.floor(Math.random() * 5) + 1 < 0.18
          ? 5
          : Math.floor(Math.random() * 5) + 1;
    } else if (value === 5) {
      beerFlag =
        Math.floor(Math.random() * 12) + 1 < 0.081
          ? 12
          : Math.floor(Math.random() * 12) + 1;
    } else if (value === 12) {
      beerFlag =
        Math.floor(Math.random() * 30) + 1 < 0.031
          ? 30
          : Math.floor(Math.random() * 30) + 1;
    } else if (value === 30) {
      beerFlag =
        Math.floor(Math.random() * 100) + 1 < 0.0098
          ? 100
          : Math.floor(Math.random() * 100) + 1;
    }

    if (
      beerFlag === 2 ||
      beerFlag === 5 ||
      beerFlag === 12 ||
      beerFlag === 30 ||
      beerFlag === 100
    ) {
      const TopMoneyData = beers.map((item: BeerI) => {
        return item.id === id
          ? { ...item, value: beerFlag, state: "fifth", flag: true }
          : { ...item };
      });
      setBeers(TopMoneyData);
    } else {
      setBalance(balance - bet);
    }

    const updateBeerData = beers.map((item: BeerI) => {
      return item.id === id
        ? beerFlag === 2 ||
          beerFlag === 5 ||
          beerFlag === 12 ||
          beerFlag === 30 ||
          beerFlag === 100
          ? { ...item, value: beerFlag, state: "third", flag: true }
          : { ...item, value: 0, state: "fourth", flag: true }
        : { ...item };
    });
    setBeers(updateBeerData);
  };

  return (
    <div className="cupcell-container-item">
      <img className="cupcell-container-top" src={pipes1IMG} alt="pipes1IMG" />
      <div className="cupcell-container-body">
        <img className="emptyGlassImg" src={cup0Img} alt="AddbeerImg" />
        <div className="cupcell-container-control">
          <img
            className="AddbeerImg"
            src={AddbeerImg}
            alt="AddbeerImg"
            onClick={() => addBeerClick(id, value)}
          />
          <img
            className="EndbeerImg"
            src={EndbeerImg}
            alt="EndbeerImg"
            style={{ opacity: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondStateComponent;
