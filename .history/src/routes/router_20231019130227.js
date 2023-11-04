import { createBrowserRouter } from "react-router-dom";
import { ChurchFrontApp } from "../ChurchFrontApp";

const router = createBrowserRouterouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
        path: "/login",
        element: <ChurchFrontAppontApp/>,
      },
  ]);