import React from "react";

const Font = (props) =>
  <div>
    <select name="font" onChange={props.change} defaultValue="3">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
    </select>
  </div>

export default Font;
