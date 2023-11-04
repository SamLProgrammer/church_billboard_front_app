import { useResponse } from "./hooks/useResponse";

const TablesViewer = () => {
  const { response } = useResponse();

  // Array of image file names (adjust the paths as needed)
  const imageFiles = ["enero.jpg", "febrero.jpg", "marzo.jpg",
                      "abril.jpg", "mayo.jpg", "junio.jpg",
                      "julio.jpg", "agosto.jpg", "septiembre.jpg",
                      "octubre.jpg", "noviembre.jpg", "diciembre.jpg"];

  return (
    <div className="card-container">
      {response.map((item, index) => (
        <div className="card" key={index} style={{ backgroundImage: `url(/resources/${imageFiles[index]})` }}>
          <div className="card-content">
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};

// export default TablesViewer;
