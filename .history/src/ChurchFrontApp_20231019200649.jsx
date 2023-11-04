import { useState } from 'react';
import './styles/Login.css';
import {validateLogin} from './hooks/useValidateLogin';

const callUseValidateLogin = (userName, password) => {
    validateLogin(userName, password);
}
//nothing
export const ChurchFrontApp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
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
            <button className="login-button" onClick={callUseValidateLogin()}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
}
