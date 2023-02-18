import "./App.css";
// import { useEffect, useState } from "react";
import Home from "./Home/Js/Home";
import {
  Routes,
  Route,
} from "react-router-dom";
import Test from "./Home/Test/js/Test";
function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </div>
  );
}

export default App;