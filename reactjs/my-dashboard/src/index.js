import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

import { createBrowserRouter, RouterProvider } from "react-router"; // 1 - First step

const router = createBrowserRouter([
  // 2 - Second step
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* 3 - Third step */}
  </React.StrictMode>
);
