import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { ChurchFrontApp } from './ChurchFrontApp';
import { RouterHook } from './routes/RouterHook';
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={RouterHook()} />
    </React.StrictMode>
  );