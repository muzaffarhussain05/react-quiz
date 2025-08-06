import React from "react";
import reactLogo from "../assets/logo512.png";

function Navbar() {
  return (
    <header className="flex items-center justify-center gap-3 sm:gap-6 py-4 sm:py-7 px-4">
      <img 
        src={reactLogo || "/placeholder.svg"} 
        alt="React logo" 
        className="w-16 sm:w-[8.7rem] flex-shrink-0" 
      />
      <h1 className="font-codystar text-2xl sm:text-[3.7rem] font-bold text-white text-center leading-tight">
        THE REACT QUIZ
      </h1>
    </header>
  );
}

export default Navbar;
