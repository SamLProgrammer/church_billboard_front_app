import { useEffect, useState } from "react";
import { useResponse } from "../hooks/useResponse";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const colors = [
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#FF3399",
  "#33FF99",
  "#9933FF",
  "#FF99FF",
  "#99FF33",
  "#3399FF",
  "#FF3333",
]

const getRandomColorAndRemove = () => {
if (colors.length === 0) {
  return null; // Return null if the array is empty
}

const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];
colors.splice(randomIndex, 1);
return randomColor;
};

export const TablesViewer = () => {
  const navigate = useNavigate();
  const [months, setMonths] = useState(useResponse().response?.availableMonths);

  useEffect(() => {
    if(months == null) {
        navigate("/login");
    }
  }, [months, navigate])
  

  if (months != null) {
    localStorage.setItem("months", months);
  } else {
    if (localStorage.getItem("months") != null) {
      setMonths(localStorage.getItem("months").split(","));
    }
  }

  if (months == null) {
    navigate("/login");
  } else {
    return (
      <div className="card-container">
        {months.map((item, index) => (
          <Card item={item} index ={index} key={index} color ={getRandomColorAndRemove()}/>
        ))}
      </div>
    );
  }
};
