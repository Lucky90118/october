import React, { useState, useContext } from "react";
import "./index.scss";
import CupCell from "../cupcell";
import ContentList from "../contentList";
import headerImg from "../../image/header.png";
import endtotoalbeerImg from "../../image/endbeer1.png";
import { BeerContext } from "../../context/beer";
import { BeerI } from "../../types";

const ContentComponents: React.FC = () => {
  const [bet, setBet] = useState(10);
  const [balance, setBalance] = useState(5000);
  const [win, setWin] = useState(10);
  const { beers, setBeers } = useContext(BeerContext)!;

 

  return (
    <div className="contnet-components">
      <img className="headerImg" src={headerImg} alt="headerImg" />
      <div className="content-component">
        <ContentList />
        <div className="content-body">
          <div className="cups">
            <div className="cup-cells">
              {beers.map((value: BeerI, index: number) => (
                <CupCell
                  key={index}
                  activate={value}
                />
              ))}
            </div>
          </div>
          <div className="content-bottom">
            <div className="content-bet">
              <div className="content-bet-sell">
                <div className="content-bet-control">
                  <p>-</p>
                  <p>DEM {bet}</p>
                  <p>+</p>
                </div>
                <p>BET</p>
              </div>
            </div>
            <div className="end-beer-control">
              <img src={endtotoalbeerImg} alt="endtotalbeerImg" />
            </div>
            <div className="content-balance">
              <div className="content-balance-sell">
                <div className="content-balance-control">
                  <p>DEM {balance}</p>
                </div>
                <p>BALANCE</p>
              </div>
              {win < 0 ? (
                ""
              ) : (
                <div className="content-balance-sell">
                  <div className="content-balance-control">
                    <p>DEM {win}</p>
                  </div>
                  <p>WIN</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentComponents;
