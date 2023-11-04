import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    RouterProvider,
  } from "react-router-dom";
import { RouterHook } from './routes/RouterHook';
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={RouterHook()} />
    </React.StrictMode>
  );