import { createBrowserRouter } from "react-router-dom";
import { ChurchFrontApp } from "../ChurchFrontApp";
import { TablesViewer } from "../TablesViewer";

export const RouterHook = () => {

return createBrowserRouter([
    {
      path: "/months",
      element: <TablesViewer/>,
    },
    {
        path: "/login",
        element: <ChurchFrontApp/>,
      },
  ]);
}
