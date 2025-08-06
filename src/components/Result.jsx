import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Result = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="bg-white p-8 rounded-xl shadow-md text-center">
      <div className="w-32 h-32 mx-auto mb-6">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathColor: "#4f46e5",        // Indigo color
            textColor: "#1f2937",        // Gray-800
            trailColor: "#e5e7eb",       // Gray-200
          })}
        />
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        You scored {score} out of {total}
      </h2>

      <button
        onClick={onRestart}
        className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
