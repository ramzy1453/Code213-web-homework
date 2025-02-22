import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Country from "./pages/Country/CountryPage";
import { createBrowserRouter, RouterProvider } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/country/:nameOfCountry",
    element: <Country />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={router}>
    <Home />
  </RouterProvider>
);
