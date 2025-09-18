import React, {useState, useEffect} from "react";
import './index.scss'

const Top = () => {
  const [time, setTime] = useState(new Date());
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

  return(
    <div className='layout-top'>
        <div className='top-content'>
          <p>October Pub</p>
          <p>{formattedHours}:{formattedMinutes}</p>
        </div>
      </div>
  )
}

export default Top;