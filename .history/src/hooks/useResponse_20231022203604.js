// useResponse.js
import { useContext } from "react";
import { ResponseContext } from "./ResponseContext";

export const useResponse = () => useContext(ResponseContext);
