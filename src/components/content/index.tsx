import React, { useState, useContext } from "react";
import "./index.scss";
import CupCell from "../cupcell";
import ContentList from "../contentList";
import headerImg from "../../image/header.png";
import endtotoalbeerImg from "../../image/endbeer1.png";
import { BeerContext } from "../../context/beer";
import { BeerI } from "../../types";


const ContentComponents: React.FC = () => {
  const [bet, setBet] = useState(1);
  const [balance, setBalance] = useState(5000);
  const [win, setWin] = useState(0);
  const { beers, setBeers } = useContext(BeerContext)!;

  const addBetButtonClick = (symbol: string) => {
    if (symbol === "+") {
      if (bet < 10) {
        if (bet !== 5) {
          bet + 1 > balance ? setBet(bet) : setBet(bet + 1);
        } else {
          10 > balance ? setBet(5) : setBet(10);
        }
      } else if (
        bet < 5 * Math.pow(10, Math.floor(Math.log10(bet))) &&
        bet < balance
      ) {
        bet + Math.pow(10, Math.floor(Math.log10(bet))) > balance
          ? setBet(bet)
          : setBet(bet + Math.pow(10, Math.floor(Math.log10(bet))));
      } else if (
        bet === 5 * Math.pow(10, Math.floor(Math.log10(bet))) &&
        bet <= balance
      ) {
        7.5 * Math.pow(10, Math.floor(Math.log10(bet))) > balance
          ? setBet(bet)
          : setBet(7.5 * Math.pow(10, Math.floor(Math.log10(bet))));
      } else if (
        bet === 7.5 * Math.pow(10, Math.floor(Math.log10(bet))) &&
        bet <= balance
      ) {
        Math.pow(10, Math.floor(Math.log10(bet) + 1)) > balance
          ? setBet(bet)
          : setBet(Math.pow(10, Math.floor(Math.log10(bet) + 1)));
      }
    } else if (symbol === "-") {
      if (bet > 1) {
        if (bet < 10) {
          setBet(bet - 1);
        } else if (bet === 10) {
          setBet(5);
        } else if (bet === Math.pow(10, Math.floor(Math.log10(bet)))) {
          setBet(7.5 * Math.pow(10, Math.floor(Math.log10(bet)) - 1));
        } else if (bet === 7.5 * Math.pow(10, Math.floor(Math.log10(bet)))) {
          setBet(5 * Math.pow(10, Math.floor(Math.log10(bet))));
        } else if (bet <= 5 * Math.pow(10, Math.floor(Math.log10(bet)))) {
          setBet(bet - Math.pow(10, Math.floor(Math.log10(bet))));
        }
      }
    }
  };
  return (
    <div className="contnet-components">
      <img className="headerImg" src={headerImg} alt="headerImg" />
      <div className="content-component">
        <ContentList />
        <div className="content-body">
          <div className="cups">
            <div className="cup-cells">
              {beers.map((value: BeerI, index: number) => (
                <CupCell key={index} activate={value} balance = {balance} bet={bet} setBalance={setBalance} />
              ))}
            </div>
          </div>
          <div className="content-bottom">
            <div className="content-bet">
              <div className="content-bet-sell">
                <div className="content-bet-control">
                  <p onClick={() => addBetButtonClick("-")}>-</p>
                  <p>DEM {bet}</p>
                  <p onClick={() => addBetButtonClick("+")}>+</p>
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
              {win <= 0 ? (
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
