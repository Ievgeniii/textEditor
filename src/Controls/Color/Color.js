import React from "react";

const Color = (props) => <input
  defaultValue={props.backGround ? '#ffffff' : '#000000'}
  type="color"
  onInput={props.backGround ? props.changeBackGround : props.changeColor}/>

export default Color;
