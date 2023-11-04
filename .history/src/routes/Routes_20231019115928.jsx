import { Route, Switch } from 'react-router-dom';

import Login from './Login';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/tables" component={Tables} />
      <Route path="/users" component={Users} />
    </Switch>
  );
}

export default Routes;
