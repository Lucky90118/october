import React from 'react';
import './index.scss';

import crossImg from '../../image/cross.png';
import emptyGlassImg from '../../image/empty_glass.png.png';
import EndbeerImg from '../../image/endbeer.png';
import AddbeerImg from '../../image/addbeer.png';
import pipes1 from '../../image/pipes1.png';

interface CupCellProps {
  active: boolean;
  onClick?: () => void;
}

const CupCell: React.FC<CupCellProps> = ({ active, onClick }) => {
  return (
    <div
      className="cupcell-container"
      onClick={onClick}
    >
      {active ? (
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
          <img className='add-beer-but' src={crossImg} alt='crossImg'/>
        </div>
      )}
    </div>
  );
};

export default CupCell;