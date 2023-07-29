import React from 'react';
import loadable from '@loadable/component';

import { Route, Switch, Redirect } from 'react-router-dom';

//알아서 코드 스플릿팅을 한다..?
const Login = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={Login} />
      <Route path="/SignUp" component={SignUp} />
    </Switch>
  );
};

export default App;
