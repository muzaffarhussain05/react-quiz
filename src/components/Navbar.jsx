import React from "react";
import reactLogo from "../assets/logo512.png";

function Navbar() {
  return (
    <header className="flex items-center justify-center gap-6 py-7">
      <img src={reactLogo} alt="React logo" className="w-[8.7rem]" />
      <h1 className="font-codystar text-[3.7rem] font-bold text-white">
        THE REACT QUIZ
      </h1>
    </header>
  );
}

export default Navbar;
