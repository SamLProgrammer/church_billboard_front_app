import { useResponse } from "./hooks/useResponse";

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
  let response = null;

  response = useResponse();

  if (response != null) {
    localStorage.setItem("months", response);
  } else {
    response = localStorage.getItem("response");
  }
  return (
    <div className="card-container">
      {response.map((item, index) => (
        <div
          className="card"
          key={index}
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          }}
        >
          <div className="card-content">{item}</div>
        </div>
      ))}
    </div>
  );
};
