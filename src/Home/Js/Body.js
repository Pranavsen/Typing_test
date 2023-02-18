import React from "react";
import { Link } from "react-router-dom";
import "../Css/Body.css";
function Body() {
  return (
    <div className="body_container">
      <div className="body_grid">
        <div className="body_grid_object text">Typing Text</div>
        <div className="body_grid_object text">Typing Course</div>
        <div className="body_grid_object text">Typing Keys</div>
        <div className="body_grid_object text">Typing Games</div>
        <div className="body_grid_object text">Typing Race</div>
      </div>
      <div className="typing_test">
        <div className="typing_test_heading text">
          Check your typing skills in a minute
        </div>
        <div style={{ width: "113px", margin: "auto" }}>
          <Link to="/test" style={{ textDecoration: "none" }}>
            <div className="start_test_button">start Test</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Body;
