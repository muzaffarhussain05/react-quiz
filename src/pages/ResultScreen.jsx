import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

const ResultScreen = () => {
  const { state, dispatch, maxScore } = useApp();
  const { score } = state;
  const total = maxScore;
  const [highscore, setHighscore] = useState(
    Number(localStorage.getItem("quiz_highscore")) || 0
  );
  const percentage = Math.round((score / total) * 100);
  const navigate = useNavigate();

  const getEmoji = () => {
    if (percentage >= 80) return "🎉"; // Excellent
    if (percentage >= 50) return "🙂"; // Good
    if (percentage >= 30) return "😕"; // Needs improvement
    return "😭"; // Poor
  };
  useEffect(() => {
    if (score > highscore) {
      localStorage.setItem("quiz_highscore", String(score));
      setHighscore(score);
    }
  }, []);
  const handleRestart = () => {
    dispatch({ type: "RESET" });
    navigate("/quiz");
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-10 w-full">
      <div className="bg-cyan-600 md:px-20 md:py-7 px-4 py-2 rounded-full md:text-3xl sm:text-xl flex items-center gap-2 text-[#f1f3f5] ">
        <span>{getEmoji()}</span>
        <span>
          You scored <strong>{score}</strong> out of {total} (
          <strong>{percentage}%</strong>)
        </span>
      </div>

      <p className="text-lg text-[#f1f3f5]  font-semibold">
        (Highscore: {highscore} points)
      </p>

      <div className="w-full flex justify-end md:pr-12 pr-4 mt-6 max-sm:mb-7">
        <button
          onClick={handleRestart}
          className="bg-[#495057] hover:bg-[#333436] text-[#f1f3f5] md:px-10 px-8 py-1 md:py-4 rounded-full md:text-lg md:font-medium  transition duration-300 ml-32"
        >
          Restart quiz
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
