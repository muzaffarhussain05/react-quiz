import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export const Layout = () => {
  return (
    <div className="bg-[#343a40] text-[#f1f3f5] min-h-screen flex flex-col items-center justify-start">
      <Navbar />

      <main className="w-full max-w-2xl flex flex-col items-center">
        <Outlet />
      </main>
    </div>
  );
};
