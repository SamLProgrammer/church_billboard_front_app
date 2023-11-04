import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useResponse } from "./hooks/useResponse";
import { validateLogin } from "./hooks/useValidateLogin";
import { fetchMonths } from "./hooks/useFetchMonths";
import "./styles/Login.css";

export const ChurchFrontApp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const { setResponse } = useResponse();

  // const navigate = useNavigate();
  useEffect(() => {
    if(username != null && username.length > 0) {
      callUseValidateLogin();
    }
  }, [username])
  

  const callUseValidateLogin = async () => {
    // const response = JSON.parse(await validateLogin(username, password));
    await validateLogin(username, password);
    // const {sessionToken, error} = response;
    // console.log('response1');
    // console.log(response);
    const response2 = JSON.parse(await fetchMonths());
    console.log('response2');
    console.log(response2);
    // if (error == null) {
    //   setResponse(sessionToken); 
    //   console.log(JSON.parse(await fetchMonths(sessionToken)));
    // }

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
