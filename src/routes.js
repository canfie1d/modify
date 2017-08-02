import React from 'react';
import { Route, Switch } from 'react-router';

// PAGES
import Home from './Pages/Home';
import Services from './Pages/Services';
import Stylists from './Pages/Stylists';
import StylistProfile from './Pages/StylistProfile';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

export default class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" render={(props) => { return <Home {...this.props} {...props} /> }} />
        <Route exact path="/services" render={(props) => { return <Services {...this.props} {...props} /> }} />
        <Route exact path="/stylists" render={(props) => { return <Stylists {...this.props} {...props} /> }} />
        <Route path={`/stylists/:name`} render={(props) => { return <StylistProfile {...this.props} {...props} /> }} />
        <Route exact path="/contact" render={(props) => { return <Contact {...this.props} {...props} /> }} />
        <Route component={NotFound} />
      </Switch>
    );
  }
};
