import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResponse } from "../hooks/useResponse";
import { validateLogin } from "../hooks/useValidateLogin";
import "../styles/Login.css";
import { fetchMonths } from "../hooks/useFetchMonths";

export const ChurchFrontApp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setResponse } = useResponse();

  const callUseValidateLogin = async () => {
    const response1 = JSON.parse(await validateLogin(username, password));
    console.log(response1);
    const {sessionToken, error} = response1;
    if (error == null) {
      const {availableMonths, error} = JSON.parse(await fetchMonths(sessionToken));
      console.log('availableMonths');
      console.log(availableMonths);
      setResponse({sessionToken, availableMonths});
      if(error == null) {
        navigate("/months");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Log In</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button className="login-button" onClick={callUseValidateLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
