import { createBrowserRouter } from "react-router-dom";
import { ChurchFrontApp } from "../components/ChurchFrontApp";
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
