import { Route, Switch } from 'react-router-dom';
import { Test } from './test'; // Assuming 'Test' component is in the same directory

function Routes() {
  return (
    <Switch>
          <Route path="/">
            <Test/>
          </Route>
        </Switch>
  );
}

export default Routes;
