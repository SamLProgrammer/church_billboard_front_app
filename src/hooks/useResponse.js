// useResponse.js
import { useContext } from "react";
import { ResponseContext } from "../contexts/ResponseProvider";

export const useResponse = () => useContext(ResponseContext);
