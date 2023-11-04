import { useEffect, useState } from "react";
import { useResponse } from "../hooks/useResponse";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

export const TablesViewer = () => {
  const navigate = useNavigate();
  const [months, setMonths] = useState(useResponse().response?.availableMonths);
  const [selectedItem, setSelectedItem] = useState();

  const changeSelectedItem = (item) => {
    setSelectedItem(item);
  }

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
          <Card item={item} index ={index} key={index} updateSelectedItem={changeSelectedItem}/>
        ))}
      </div>
    );
  }
};
