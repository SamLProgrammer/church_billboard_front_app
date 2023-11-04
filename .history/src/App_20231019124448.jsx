import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/Routes';
import { ChurchFrontApp } from './ChurchFrontApp';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { Test } from './routes/test';

ReactDOM.createRoot( document.getElementById('root')).render(

    <Router>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Test/>
          </Route>
          <Route path="/users">
            <Test />
          </Route>
          <Route path="/">
            <Test />
          </Route>
        </Switch>
      </div>
    </Router>
    
);