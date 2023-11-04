import { useState } from 'react';
import './styles/Login.css';

export const ChurchFrontApp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Add your login logic here
      console.log(`Logged in with username: ${username} and password: ${password}`);
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
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
}
