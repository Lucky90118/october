import React, { useContext } from "react";
import { BeerContext } from "../../context/beer";
import { CheckFlagContext } from "../../context/checkflag";
import { BeerI, ThirdStatePropsI } from "../../types";
import cup1Img from "../../image/cup1.png";
import cup2Img from "../../image/cup2.png";
import cup3Img from "../../image/cup3.png";
import pipes1IMG from "../../image/pipes1.png";
import EndbeerImg from "../../image/endbeer.png";
import AddbeerImg from "../../image/addbeer.png";

const ThirdStateComponent: React.FC<ThirdStatePropsI> = ({
  id,
  value,
  balance,
  bet,
  setBalance,
}) => {
  const { beers, setBeers } = useContext(BeerContext)!;
  const { allBeerValue, setAllBeerValue } = useContext(CheckFlagContext)!;

  const addBeerClick = (id: string, value: number) => {
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
          ? { ...item, value: beerFlag, state: "fifth" }
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

  const endBeerClick = (id: string, value: number) => {
    setBalance(balance + bet * value);
    setAllBeerValue(allBeerValue - value);
    const endBeerData = beers.map((item) => {
      return item.id === id ? { ...item, state: "fifth", flag: true } : item;
    });
    setBeers(endBeerData);
  };

  return (
    <div className="cupcell-container-item">
      <img className="cupcell-container-top" src={pipes1IMG} alt="pipes1IMG" />
      <div className="cupcell-container-body">
        {value === 2 ? (
          <img className="emptyGlassImg" src={cup1Img} alt="AddbeerImg" />
        ) : value === 5 ? (
          <img className="emptyGlassImg" src={cup2Img} alt="AddbeerImg" />
        ) : value === 12 ? (
          <img className="emptyGlassImg" src={cup3Img} alt="AddbeerImg" />
        ) : value === 30 ? (
          <img className="emptyGlassImg" src={cup3Img} alt="AddbeerImg" />
        ) : (
          <img className="emptyGlassImg" src={cup3Img} alt="AddbeerImg" />
        )}
        <div className="cupcell-container-control">
          <img
            className="AddbeerImg"
            src={AddbeerImg}
            alt="AddbeerImg"
            onClick={() => addBeerClick(id, value)}
          />
          {value === 0 ? (
            <img
              className="EndbeerImg"
              src={EndbeerImg}
              alt="EndbeerImg"
              style={{ opacity: 0.5 }}
            />
          ) : (
            <img
              className="EndbeerImg"
              src={EndbeerImg}
              alt="EndbeerImg"
              onClick={() => endBeerClick(id, value)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThirdStateComponent;
