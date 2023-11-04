import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const ResponseContext = createContext();

export const useResponse = () => useContext(ResponseContext);

export const ResponseProvider = ({ children }) => {
  const [response, setResponse] = useState(null);

  return (
    <ResponseContext.Provider value={{ response, setResponse }}>
      {children}
    </ResponseContext.Provider>
  );
};

ResponseProvider.propTypes = {
  children: PropTypes.node.isRequired, // Define PropTypes for 'children'
};
