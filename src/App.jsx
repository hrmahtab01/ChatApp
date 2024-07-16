import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";

const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements([
      <Route key="signup" path="/" element={<Signup/>} />,
      <Route key="signin" path="/signin" element={<Signin/>} />,
    ])
  );

  return <RouterProvider router={router} />;
};

export default App;