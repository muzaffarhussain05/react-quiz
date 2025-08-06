import React from "react";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import StartScreen from "./pages/StartScreen";
import { Layout } from "./pages/Layout";
import ResultScreen from "./pages/ResultScreen";
import QuizScreen from "./pages/QuizScreen";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<StartScreen />} />
      <Route path="quiz" element={<QuizScreen />} />
      <Route path="result" element={<ResultScreen />} />
     
    </Route>
  )
);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
