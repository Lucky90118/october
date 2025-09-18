import React, {useContext} from 'react';
import './index.scss';

import crossImg from '../../image/cross.png';
import emptyGlassImg from '../../image/empty_glass.png.png';
import EndbeerImg from '../../image/endbeer.png';
import AddbeerImg from '../../image/addbeer.png';
import pipes1 from '../../image/pipes1.png';
import { BeerContext } from "../../context/beer";
import { BeerI } from "../../types";

interface CupCellProps {
  activate: BeerI;
}

const CupCell: React.FC<CupCellProps> = ({ activate }) => {
  const { beers, setBeers } = useContext(BeerContext)!;
  console.log(beers);
  

  const addbeerClick = (id: string) => {
    const updateBeer = beers.map((value) => {
      return value.id === id
        ? { id: value.id, value: value.value, check: value.check, flag: true }
        : value;
    });
    setBeers(updateBeer);
  };
  
  return (
    <div
      className="cupcell-container"
    >
      {activate.flag ? (
        <div className='add-beer'>
          <img className='beer-pipes' src={pipes1} alt="pipes" />
          <img className='empty-glass' src={emptyGlassImg} alt='emptyGalssImg'/>
          <div className='cup-under-control'>
            <img className='add-beer-control' src={AddbeerImg} alt='AddbeerImg'/>
            <img className='end-beer-control' src={EndbeerImg} alt='EndbeerImg'/>
          </div>
        </div>
      ) : (
        <div className='add-glass'>
          <img className='beer-pipes' src={pipes1} alt="pipes" />
          <img className='add-beer-but' src={crossImg} alt='crossImg' onClick={() => addbeerClick(activate.id)}/>
        </div>
      )}
    </div>
  );
};

export default CupCell;