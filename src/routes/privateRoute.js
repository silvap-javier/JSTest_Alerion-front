import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {isLogged} from '../repository'

function PrivateRoute({ component: Component, ...rest }) {    
  let authorized = isLogged();

  return <Route {...rest} render={props => (authorized ? <Component {...props} /> : <Redirect to="/" />)} />;
}

export default PrivateRoute;
