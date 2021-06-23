import React from "react";
import "./styles/sliderButton.css";
export function SliderButton({children, ...restProps}) {
  return (
    <label className="switch">
          <input type="checkbox" {...restProps}/>
      <span className="slider round"></span>
    </label>
  );
}
