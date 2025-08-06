import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Result from "../components/Result";

const ResultScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total, lastCorrect } = location.state || {};

  // Prevent direct access to /result without quiz
  if (score === undefined || total === undefined) {
    return (
      <div className="text-center p-10">
        <h2 className="text-red-500 text-lg mb-4">Result not available.</h2>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Go to Start
        </button>
      </div>
    );
  }

  const finalScore = score + (lastCorrect ? 1 : 0);

  const handleRestart = () => {
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <Result score={finalScore} total={total} onRestart={handleRestart} />
    </div>
  );
};

export default ResultScreen;
