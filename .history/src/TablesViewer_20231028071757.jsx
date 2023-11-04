import { useEffect, useState } from "react";
import { useResponse } from "./hooks/useResponse";
import { useNavigate } from "react-router-dom";

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
  "#3399FF",
  "#FF3333",
];

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
          <div
            className="card"
            key={index}
            style={{
              backgroundColor:
                colors[Math.floor(Math.random() * colors.length)],
            }}
          >
            <div className="card-content">{item}</div>
          </div>
        ))}
      </div>
    );
  }
};
