import React from "react";
import reactLogo from "../assets/logo512.png";

function Navbar() {
  return (
    <header className="flex items-center justify-center gap-4 py-5 md:gap-6 md:py-7">
      <img src={reactLogo} alt="React logo" className="w-24 md:w-[8.7rem]" />
      <h1
        className="
          font-codystar 
          font-bold 
          text-white
          text-center
          text-4xl          /* Mobile first: smaller font size for small screens */
          md:text-[3.7rem]   /* Medium screens and up: apply your larger font size */
        "
      >
        THE REACT QUIZ
      </h1>
    </header>
  );
}

export default Navbar;
