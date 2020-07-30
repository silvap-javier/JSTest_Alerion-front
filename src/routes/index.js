import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Container from '../pages/container'
//const history = createBrowserHistory();

function Routes() {  
  return (
  <BrowserRouter>
    <Switch>      
      <Route
        path="/"
        render={routeProps => ( 
            <Container {...routeProps} />
          )}
      />      
    </Switch>
  </BrowserRouter>)
}

export default Routes;
