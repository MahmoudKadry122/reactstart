import React from "react";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import LayOut from "./components/LayOut/LayOut";
import NotFound from "./components/notFound/NotFound";
import Home from "./components/Home/Home";
import ContactUS from "./components/ContactUs/ContactUs";

export default function App() {
  let routes = createHashRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "contact-us",
          element: <ContactUS />,
        },

        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes}> </RouterProvider>;
}
