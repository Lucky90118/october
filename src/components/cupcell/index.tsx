import React, { useContext } from "react";
import "./index.scss";

import crossImg from "../../image/cross.png";
import cup0Img from "../../image/cup0.png";
import cup1Img from "../../image/cup1.png";
import cup2Img from "../../image/cup2.png";
import cup3Img from "../../image/cup3.png";
import EndbeerImg from "../../image/endbeer.png";
import AddbeerImg from "../../image/addbeer.png";
import pipes1IMG from "../../image/pipes1.png";
import nowinIMG from "../../image/nowin.png";
import { BeerContext } from "../../context/beer";
import { BeerI } from "../../types";

interface CupCellProps {
  activate: BeerI;
}

const CupCell: React.FC<CupCellProps> = ({ activate }) => {
  const { beers, setBeers } = useContext(BeerContext)!;

  const addGlassClick = (id: string) => {
    const updateBeer = beers.map((value) => {
      return value.id === id ? { ...value, flag: true } : value;
    });
    setBeers(updateBeer);
  };

  const addBeerClick = (id: string, value: number) => {
    let beerFlag: number = 0;
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

    const updateBeerData = beers.map((item) => {
      return item.id === id
        ? beerFlag === 2 ||
          beerFlag === 5 ||
          beerFlag === 12 ||
          beerFlag === 30 ||
          beerFlag === 100
          ? { ...item, value: beerFlag }
          : { ...item, check: false }
        : { ...item };
    });
    setBeers(updateBeerData);
  };  

  return (
    <div className="cupcell-container">
      {activate.flag ? (
        !activate.check ? (
          <div className="cupcell-container-item">
            <img
              className="cupcell-container-top"
              src={pipes1IMG}
              alt="pipes1IMG"
            />
            <div className="cupcell-container-body">
              <img className="emptyGlassImg" src={nowinIMG} alt="AddbeerImg" />
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
        ) : activate.value === 0 ? (
          <div className="cupcell-container-item">
            <img
              className="cupcell-container-top"
              src={pipes1IMG}
              alt="pipes1IMG"
            />
            <div className="cupcell-container-body">
              <img className="emptyGlassImg" src={cup0Img} alt="AddbeerImg" />
              <div className="cupcell-container-control">
                <img
                  className="AddbeerImg"
                  src={AddbeerImg}
                  alt="AddbeerImg"
                  onClick={() => addBeerClick(activate.id, activate.value)}
                />
                <img className="EndbeerImg" src={EndbeerImg} alt="EndbeerImg" />
              </div>
            </div>
          </div>
        ) : (
          <div className="cupcell-container-item">
            <img
              className="cupcell-container-top"
              src={pipes1IMG}
              alt="pipes1IMG"
            />
            <div className="cupcell-container-body">
              {activate.value === 2 ? (
                <img className="emptyGlassImg" src={cup1Img} alt="AddbeerImg" />
              ) : activate.value === 5 ? (
                <img className="emptyGlassImg" src={cup2Img} alt="AddbeerImg" />
              ) : activate.value === 12 ? (
                <img className="emptyGlassImg" src={cup3Img} alt="AddbeerImg" />
              ) : activate.value === 30 ? (
                <img className="emptyGlassImg" src={cup3Img} alt="AddbeerImg" />
              ) : (
                <img className="emptyGlassImg" src={cup3Img} alt="AddbeerImg" />
              )}
              <div className="cupcell-container-control">
                <img
                  className="AddbeerImg"
                  src={AddbeerImg}
                  alt="AddbeerImg"
                  onClick={() => addBeerClick(activate.id, activate.value)}
                />
                <img className="EndbeerImg" src={EndbeerImg} alt="EndbeerImg" />
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="cupcell-container-item">
          <img
            className="cupcell-container-top"
            src={pipes1IMG}
            alt="pipes1IMG"
          />
          <div className="cupcell-container-body">
            <img
              className="emptyGlassImg"
              src={crossImg}
              alt="AddbeerImg"
              onClick={() => addGlassClick(activate.id)}
            />
            <div className="cupcell-container-control">
              <img className="AddbeerImg" src={AddbeerImg} alt="AddbeerImg" />
              <img className="EndbeerImg" src={EndbeerImg} alt="EndbeerImg" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CupCell;
