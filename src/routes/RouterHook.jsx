import { createBrowserRouter } from "react-router-dom";
import { ChurchFrontApp } from "../components/ChurchFrontApp";
import { TablesViewer } from "../components/TablesViewer";
import { MonthTable } from "../components/MonthTable";

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
    {
        path: "/monthTable",
        element: <MonthTable/>,
      },
  ]);
}
