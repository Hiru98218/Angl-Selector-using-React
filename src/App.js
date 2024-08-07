import React, { useState } from "react";
import "./styles.css";

function App() {
  const [angle, setAngle] = useState(0);

  // Handle changes in the text box
  // validate the numeric number within 0 - 360 range
  const handleTextChange = (e) => {
    let value = Number(e.target.value);
    if (value < 0) value = 0;
    if (value > 360) value = 360;
    setAngle(value);
  };

  // Handle changes in the slider
  const handleSliderChange = (e) => {
    setAngle(Number(e.target.value));
  };

  // Handle changes in the radio buttons
  const handleRadioChange = (e) => {
    setAngle(Number(e.target.value));
  };

  return (
    <div className="App">
      <h1>Angle Selector</h1>
      <div>
        {/* Text Box */}
        <input
          type="number"
          value={angle}
          onChange={handleTextChange}
          min="0"
          max="360"
          style={{ marginRight: "10px" }}
        />

        {/* Slider */}
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={handleSliderChange}
          style={{ marginRight: "10px" }}
        />

        {/* Radio Buttons */}
        <div className="radio-container">
          <label>
            <input
              type="radio"
              name="angle"
              value="0"
              checked={angle === 0}
              onChange={handleRadioChange}
            />
            0°
          </label>
          <label>
            <input
              type="radio"
              name="angle"
              value="45"
              checked={angle === 45}
              onChange={handleRadioChange}
            />
            45°
          </label>
          <label>
            <input
              type="radio"
              name="angle"
              value="60"
              checked={angle === 60}
              onChange={handleRadioChange}
            />
            60°
          </label>
          <label>
            <input
              type="radio"
              name="angle"
              value="90"
              checked={angle === 90}
              onChange={handleRadioChange}
            />
            90°
          </label>
          <label>
            <input
              type="radio"
              name="angle"
              value="180"
              checked={angle === 180}
              onChange={handleRadioChange}
            />
            180°
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
