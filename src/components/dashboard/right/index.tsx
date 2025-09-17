import React, {useState, useEffect} from 'react';
import './index.scss';
import bodyImage from '../../../image/body.png';
import playbutton from '../../../image/but.png';
import check from '../../../image/check.png';

const Right = () => {
  const [time, setTime] = useState(new Date());
  const [checkboxFlag, setCheckboxFlag] = useState(false);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 6000);
    return () => clearInterval(timerId);
  }, []); 

  const checkboxClick = (() =>  {
    setCheckboxFlag(!checkboxFlag);
  })

  return (
    <div className='right'>
      <div className='right-top'>
        <div className='top-content'>
          <p>October Pub</p>
          <p>{formattedHours}:{formattedMinutes}</p>
        </div>
      </div>
      <div className='right-body'>
        <img src={bodyImage} alt='body'/>
      </div>
      <div className='right-letter'>
        <div className='right-letter-contain'>
          <p className='right-letter-contain1'>
            Activate up to 5 glasses, place
            your bet, and join the Beer
            Festival at our bar!
          </p>
          <p className='right-letter-contain2'>
            At any point, you can collect your
            winnings or continue the game to
            achieve the maximum multiplier!
          </p>
        </div>
      </div>
      <div className='right-bottom'>
        <img src={playbutton} alt='but'/>
        <div className='check' onClick={() => checkboxClick()}>
          <div className='checkbox' >
            {checkboxFlag ? <img src={check} alt='check'/> : ""}
          </div>
          <p>Don't show next time</p>
        </div>
      </div>
    </div>
  )
}

export default Right;