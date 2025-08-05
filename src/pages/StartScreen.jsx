import React from "react";
import { useNavigate } from "react-router-dom";

function StartScreen() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-4 text-center px-4 md:px-0">
      <h2 className="text-3xl md:text-[2.4rem] font-bold mb-2 text-[#f1f3f5]">
        Welcome to The React Quiz!
      </h2>
      <h3 className="text-lg md:text-[1.5rem] font-semibold text-[#f1f3f5]">
        15 questions to test your React mastery
      </h3>
      <button
        className="
          text-lg md:text-[1.3rem]     /* Responsive font size */
          mt-8                         /* Increased margin-top for better spacing */
          px-6 
          py-2 md:py-3                 /* Responsive vertical padding */
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
