import { Route, Switch } from 'react-router-dom';

import ChurchFrontApp from '../ChurchFrontApp.jsx';

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={ChurchFrontApp} />
    </Switch>
  );
}

export default Routes;
