import React from 'react';
import { Route, Switch } from 'react-router';

// PAGES
import Home from './Pages/Home';
import Services from './Pages/Services';
import Stylists from './Pages/Stylists';
import StylistProfile from './Pages/StylistProfile';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/stylists" component={Stylists} />
    <Route path={`/stylists/:name`} component={StylistProfile} />
    <Route exact path="/contact" component={Contact} />
    <Route component={NotFound} />
  </Switch>
);
