import React from "react";
import './Controls.css';

import Color from "./Color/Color";
import Font from "./Font/Font";

const Controls = (props) =>
  <div className='controls-container'>
    <p>Text Color:</p>
    <Color changeColor={props.changeColor}/>

    <p>Background Color:</p>
    <Color backGround changeBackGround={props.changeBackGround}/>

    <p>Font Size:</p>
    <Font change={props.changeFont}/>
  </div>

export default Controls;
