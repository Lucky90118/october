import React from "react";
import './index.scss';
import saveImg from '../../image/save.png';
import rulesImg from '../../image/rules.png';
import listImg from '../../image/list.png';


const ContentList = () => {
  return(
    <div className="content-list">
      <img src={saveImg} alt="saveImg"/>
      <img src={rulesImg} alt="rulesImg"/>
      <img src={listImg} alt="listImg"/>
    </div>
  )
}

export default ContentList;