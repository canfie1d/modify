import React from 'react';
import { Route, Switch } from 'react-router';

// PAGES
import Home from './Pages/Home';
import Services from './Pages/Services';
import ProductProfile from './Containers/ProductProfile';
import Stylists from './Pages/Stylists';
import StylistProfile from './Containers/StylistProfile';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/services/:id" component={ProductProfile} />
        <Route exact path="/stylists" component={Stylists} />
        <Route exact path="/stylists/:name" component={StylistProfile} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    );
  }
};
