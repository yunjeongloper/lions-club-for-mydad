import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Main from '../pages/main/Main';
import Navigation from '../components/nav/Navigation';

const Routes = () => {
    return (
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" render={() => (<Redirect to="/Main"/>)}/>
              {/* <Route exact path="/Login" component={Login}/> */}
              <Route exact path="/Main" component={Main}/>
              {/* <Route exact path="/Detail/:id" component={Detail}/> */}
            </Switch>
            {/* <LabelBottomNavigation/> */}
          </div>
        </Router>
    )
}

export default Routes;