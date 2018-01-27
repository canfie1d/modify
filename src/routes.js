import React from 'react';
import { Route, Switch } from 'react-router';

// PAGES
import Home from './Pages/Home';
import LoadableServices from './Containers/LoadableServices';
import ProductProfile from './Containers/ProductProfile';
import LoadableStylists from './Containers/LoadableStylists';
import StylistProfile from './Containers/StylistProfile';
import LoadableContact from './Containers/LoadableContact';
import NotFound from './Pages/NotFound';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={LoadableServices} />
        <Route exact path="/services/:id" component={ProductProfile} />
        <Route exact path="/stylists" component={LoadableStylists} />
        <Route exact path="/stylists/:name" component={StylistProfile} />
        <Route exact path="/contact" component={LoadableContact} />
        <Route component={NotFound} />
      </Switch>
    );
  }
};
