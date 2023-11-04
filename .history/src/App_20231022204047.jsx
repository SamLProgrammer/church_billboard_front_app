import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RouterHook } from "./routes/RouterHook";
import { ResponseProvider } from "./contexts/ResponseProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResponseProvider>
      <RouterProvider router={RouterHook()} />
    </ResponseProvider>
  </React.StrictMode>
);
