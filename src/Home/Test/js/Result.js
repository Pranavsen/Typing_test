import React from "react";
import "../css/Result.css";
function Result(props) {
  const { correctWord, wrongWord, speed, keyStroke } = props;

  return (
    <div className="result">
      <div className="result_heading">Results</div>
      <div className="result_speed_section">{speed} WPM</div>
      <hr />
      <div className="result_description">
        <div style={{ color: "green" }}>
          <div className="result_description_col">Correct Word</div>
          <div className="result_description_col">Wrong Word</div>
          <div className="result_description_col">speed</div>
          <div className="result_description_col">keyStroke</div>
        </div>
        <div className="result_answer">
          <div className="result_description_col">{correctWord}</div>
          <div className="result_description_col">{wrongWord}</div>
          <div className="result_description_col">{speed}</div>
          <div className="result_description_col">{keyStroke}</div>
        </div>
      </div>
    </div>
  );
}

export default Result;

{
}
