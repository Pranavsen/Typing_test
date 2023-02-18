import React, { useEffect, useState } from "react";

function Timer(props) {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const { startCounting, correctWord, setSpeed, setCurrTime, restartPressed } =
    props;
  useEffect(() => {
    let id;
    if (restartPressed) setTimeElapsed(0);
    if (startCounting) {
      id = setInterval(() => {
        setTimeElapsed((oldTime) => oldTime + 1);
        setCurrTime((oldTime) => oldTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(id);
    };
  }, [startCounting]);

  const minute = timeElapsed / 60;
  setSpeed((correctWord / minute || 0).toFixed(0));
  return (
    <div>
      <div>Time:{timeElapsed}</div>
      {/* <div>speed:{(correctWord / minute || 0).toFixed(0)} WPM</div>  */}
    </div>
  );
}

export default Timer;
