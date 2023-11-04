import { Route, Switch } from 'react-router-dom';

import  ChurchFrontApp  from '../ChurchFrontApp';

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={ChurchFrontApp} />
    </Switch>
  );
}

export default Routes;
