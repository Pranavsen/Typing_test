import React, { useEffect, useState } from "react";
import Navbar from "../../Js/Navbar";
import "../css/Test.css";

import Result from "./Result";
import Timer from "./Timer";
import restartPng from "../css/restart.png";
const sentences = [
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the `,
  `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout`,
  `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed`,
  `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour`,
  `randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum`,
  `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet`,
  `orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e`,
  `orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e`,
  `orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e`,
  `orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e`,
  `orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e`,
  `orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e`,
  `orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e`,
  `orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e`,
  `orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e`,
  `orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e`,
  `orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e`,
];
let i = Math.abs(Math.floor(Math.random() * 10)) - 3;
console.log(i);
function Word(props) {
  const { text, active, correct} = props;
  if (active) return <span className="active"> {text} </span>;
  if (correct === true) {
    return <span className="correct"> {text} </span>;
  }
  if (correct === false) return <span className="incorrect"> {text} </span>;

  return <span> {text} </span>;
}

Word = React.memo(Word);

var typed = sentences[i].split(" ").sort(() => (Math.random() > 0.5 ? 1 : -1));
function Test() {
  // variable declaring section

  const [userInput, setUserInput] = useState("");
  const [activeWord, setActiveWord] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);
  // const typed = useRef(getCloud());
  const [startCounting, setCounting] = useState(false);
  const [hide, setHide] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [keyStroke, setKeyStroke] = useState(0);
  const [currTime, setCurrTime] = useState(0);
  const [correctWord, setCorrectWord] = useState({ first: 0, second: 0 });
  // function declaring section
  // console.log("curr time is " + currTime);
  let finished = 10;

  useEffect(() => {
    if (currTime === finished) {
      console.log("ur time has finished");
      // overflow
      // setCorrectWord(first :'1',)
      if (startCounting) {
        // setRestartPressed(true);
        let temp = correctWordArray.filter(Boolean).length + correctWord.first;
        let temp2 =
          correctWordArray.length -
          correctWordArray.filter(Boolean).length +
          correctWord.second;
        setCorrectWord({ first: temp, second: temp2 });
      }
      setCounting(false);
      setHide(true);
      setUserInput("time has completed");
      // return;
    }
  });

  const processInput = (value) => {
    // console.log(co)
    if (hide === false) setCounting(true);
    if (startCounting === true) setKeyStroke(keyStroke + 1);
    // setRestartPressed(false);
    if (value.endsWith(" ")) {
      //user has finished the word

      if (activeWord === typed.length) {
        i = (i + 1) % 6;
        console.log("ur value is " + i);
        if (i > 6) i = 0;
        typed = sentences[i]
          .split(" ")
          .sort(() => (Math.random() > 0.5 ? 1 : -1));
        // console.log("the last word of the string ");
        setActiveWord(0);
        let temp = correctWordArray.filter(Boolean).length + correctWord.first;
        let temp2 =
          correctWordArray.length -
          correctWordArray.filter(Boolean).length +
          correctWord.second;
        setCorrectWord({ first: temp, second: temp2 });
        setCorrectWordArray([]);
        return;
      } else {
        setActiveWord(activeWord + 1);

        setUserInput("");
        setCorrectWordArray((data) => {
          const word = value.trim();
          const newResult = [...data];
          newResult[activeWord] = word === typed[activeWord];
          // console.log("curr word is " + typed.current[activeWord]);
          return newResult;
        });
      }
    } else {
      setUserInput(value);
    }
  };
  const [restartPressed, setRestartPressed] = useState(false);
  const restart = () => {
    console.log("u just presssed restart butt");
    setHide(false);
    setUserInput("");
    setRestartPressed(true);
    setActiveWord(0);
    setCorrectWordArray([]);
    setCounting(false);
    setCurrTime(0);
    setSpeed(0);
    setKeyStroke(0);
    setCorrectWord({ first: 0, second: 0 });
    console.log(hide);
  };
  return (
    <div className="test_container">
      <Navbar />
      <hr />

      <div className="typing_test_box">
        <div
          className="typing_content"
          style={{ display: hide ? "none" : "block" }}
        >
          <div>
            {typed.map((char, index) => {
              // let color;
              // if (index === activeWord) color = "brown";
              // else if(index<activeWord) color = ;
              return (
                <Word
                  text={char}
                  active={index === activeWord}
                  correct={correctWordArray[index]}
                />
              );
              // return <span style={{: color }}>{char} </span>;
            })}
          </div>
        </div>
        <div className="typing_box">
          <input
            className="typing_input"
            value={userInput}
            placeholder="Start Typing...."
            onChange={(e) => processInput(e.target.value)}
          />
          <div className="timeCount">{60 - currTime}</div>
          <div className="timeCount timeRestart" onClick={restart}>
            <img src={restartPng} className="restartPng" />
          </div>
        </div>
        <Timer
          startCounting={startCounting}
          correctWord={correctWord.first}
          setSpeed={setSpeed}
          setCurrTime={setCurrTime}
          restartPressed={restartPressed}
        />
        {/* <button onClick={restart}> restart</button> */}
        <div
          style={{
            justifyContent: "center",
            display: !hide ? "none" : "flex",
          }}
        >
          <Result
            correctWord={correctWord.first}
            wrongWord={correctWord.second}
            speed={correctWord.first / (currTime / 60)}
            keyStroke={keyStroke}
          />
        </div>
      </div>
    </div>
  );
}

export default Test;
