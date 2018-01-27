import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../Components/Loading';

const LoadableComponent = Loadable({
  loader: () => import('../Pages/Services'),
  loading: Loading,
  delay: 300,
})

export default class LoadableServices extends React.Component {
  render() {
    return <LoadableComponent {...this.props} />;
  }
}
