import { Route, Switch } from 'react-router-dom';

import Login from './Login';

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default Routes;
