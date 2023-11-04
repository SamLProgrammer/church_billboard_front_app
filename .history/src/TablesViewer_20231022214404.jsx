import { useResponse } from "./hooks/useResponse";

// const imageFiles = ["enero.jpg", "febrero.jpg", "marzo.jpg",
//                     "abril.jpg", "mayo.jpg", "junio.jpg",
//                     "julio.jpg", "agosto.jpg", "septiembre.jpg",
//                     "octubre.jpg", "noviembre.jpg", "diciembre.jpg"];
const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF3399", "#33FF99",
                "#9933FF", "#FF99FF", "#99FF33", "#3399FF", "#FF3333", "#3399FF", "#FF3333"];

export const TablesViewer = () => {
  const { response } = useResponse();

  // Array of image file names (adjust the paths as needed)

  return (
    <div className="card-container">
      {response.map((item, index) => (
        <div className="card" key={index} style={{ backgroundColor : colors[Math.floor(Math.random() * colors.length)], textContent: response[index] }}>
          <div className="card-content">
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};