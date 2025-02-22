import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router"; // 1 - First step
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Sourates from "./pages/Sourates/Sourates";
// 2 - Second step
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/Sourates",
    element: <Sourates />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* 3 - Third step */}
  </React.StrictMode>
);
