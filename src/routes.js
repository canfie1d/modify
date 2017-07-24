import React from 'react';
import { Route, Switch } from 'react-router';

// PAGES
import Home from './Containers/Home';
import Stylists from './Containers/Stylists';
import StylistProfile from './Containers/StylistProfile';
import Contact from './Containers/Contact';
import NotFound from './Components/NotFound';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/stylists" component={Stylists} />
    <Route path={`/stylists/:name`} component={StylistProfile} />
    <Route path="/contact" component={Contact} />
    <Route component={NotFound} />
  </Switch>
);
