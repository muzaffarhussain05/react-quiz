import React, { useState, useEffect } from "react";

const Timer = ({ initialTime, onTimeUp }) => {
  const [time, setTIme] = useState(initialTime);
  useEffect(() => {
    if (time === 0) {
      onTimeUp();
      return;
    }
    const interval = setInterval(() => {
      setTIme((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time  , onTimeUp]);

  const timeFormat = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `0${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return <div className="border border-gray-500 w-24 py-3 px-3 rounded-full text-center text-lg ">{timeFormat(time)}</div>;
};

export default Timer;
