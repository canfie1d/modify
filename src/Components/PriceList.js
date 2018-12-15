import React from 'react';

export default class PriceList extends React.Component {
  renderRows() {
    const serviceList = [];

    for (let i = 0; i < this.props.pricing.length; i++) {
      serviceList.push(
        <div key={i} className='pricing-table__service'>
          <p className='p p--dark p--small bold pricing-table__service-description'>{this.props.pricing[i].desc}</p>
          <p className='p p--small pricing-table__service-cost'>{this.props.pricing[i].cost}</p>
        </div>
      );
    }

    return serviceList;
  }

  render() {
    return (
      <div className='pricing-table m-b-50'>
        {this.renderRows()}
      </div>
    );
  }
}
