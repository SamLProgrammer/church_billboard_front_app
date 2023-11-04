import { Link, Route, Router, Switch } from 'react-router-dom';
import { Test } from './test'; // Assuming 'Test' component is in the same directory

function Routes() {
  return (
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
            <Test />
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
}

export default Routes;
