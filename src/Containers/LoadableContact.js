import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../Components/Loading';

const LoadableComponent = Loadable({
  loader: () => import('../Pages/Contact'),
  loading: Loading,
  delay: 300,
})

export default class LoadableContact extends React.Component {
  render() {
    return <LoadableComponent {...this.props} />;
  }
}
