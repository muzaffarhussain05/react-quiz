import React from "react";
import { useNavigate } from "react-router-dom";

function StartScreen() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <h2 className="text-[2.4rem] font-bold mb-2 text-[#f1f3f5]">
        Welcome to The React Quiz!
      </h2>
      <h3 className="text-[1.5rem] font-semibold  text-[#f1f3f5]">
        15 questions to test your React mastery
      </h3>
      <button
        className="
        text-[1.3rem]
          mt-6 
          px-6 py-3           
          bg-[#495057] 
          text-[#f1f3f5] 
          rounded-full 
          border-2             
          border-transparent   
          hover:bg-transparent 
          hover:border-[#495057]
          transition-all 
          duration-300
        "
        onClick={handleStart}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
