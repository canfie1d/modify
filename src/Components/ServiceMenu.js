import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleNavFixedState } from '../Actions/Nav.js';
import { getServices } from '../Services/Data';

function mapStateToProps (state) {
  return {
    navFixed: state.nav.navFixed,
    routing: state.routing
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    toggleNavFixedState
  }, dispatch);
}

class ServiceMenu extends React.Component {

  renderServices() {
    let servicesDomArr = [];
    let servicesArr = getServices();
    
    for (let i = 0; i < servicesArr.length; i++) {
      servicesDomArr.push (
        <li key={`service-item-${i}`} className='service__item'>
          <span className='service__name'>{servicesArr[i].name}</span>
          <span className='service__cost'>{servicesArr[i].cost}</span>
        </li>
      );
    }

    return servicesDomArr;
  }

  render() {
    return (
      <div className='content-flex'>
        <ul className='service__list'>
          {this.renderServices()}
        </ul>
        <p className='p p--dark p--small p--align-left'>* Hana only</p>
        <p className='p p--dark p--small p--align-left'>** Tina &amp; Alysia only</p>
        <p className='p p--dark'>All of our stylists are independent contractors and prices vary dependent on each individual stylist. To see each stylist specific price details, click on the stylist bio tab.</p>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceMenu);
