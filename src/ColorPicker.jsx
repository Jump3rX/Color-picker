import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");

  const colorChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <div className="container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected color: {color}</p>
      </div>
      <label htmlFor="">Select a color</label>
      <input
        type="color"
        name=""
        id="color"
        value={color}
        onChange={colorChange}
      />
    </div>
  );
};

export default ColorPicker;
