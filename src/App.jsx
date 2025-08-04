import React from 'react'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      
    </Route>
  )
);
const App = () => {
  return (
    <>
<RouterProvider router={router} />
    </>
  )
}

export default App