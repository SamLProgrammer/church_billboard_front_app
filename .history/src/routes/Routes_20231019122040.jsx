import { Route, Switch } from 'react-router-dom';

// import {ChurchFrontApp} from '../ChurchFrontApp';
import { Test } from './test';

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={<Test/>} />
    </Switch>
  );
}

export default Routes;
