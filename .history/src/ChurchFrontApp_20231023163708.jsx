import { useEffect, useState } from "react";
import { validateLogin } from "./hooks/useValidateLogin";
// import { fetchMonths } from "./hooks/useFetchMonths";
import "./styles/Login.css";

export const ChurchFrontApp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if(username != null && username.length > 0) {
      callUseValidateLogin();
    }
  }, [username])
  

  const callUseValidateLogin = async () => {
    await validateLogin(username, password);
    // const response2 = JSON.parse(await fetchMonths());
    console.log('response2');
    // console.log(response2);

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
