import { useResponse } from "./hooks/useResponse";

const TablesViewer = () => {
  const { response } = useResponse();

  // Array of image file names (adjust the paths as needed)
  const imageFiles = ["image1.jpg", "image2.jpg", "image3.jpg", /* Add more image filenames here */];

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

export default TablesViewer;
