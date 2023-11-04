import { createBrowserRouter } from "react-router-dom";
import { ChurchFrontApp } from "../ChurchFrontApp";

export const RouterHook = () => {

return createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
        path: "/login",
        element: <ChurchFrontApp/>,
      },
  ]);
}
