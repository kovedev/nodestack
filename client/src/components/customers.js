import React, { Component } from 'react';
import './customers.css';
import CustomerItem from './customeritem.js'

class Customers extends Component {

  deleteCustomer(id){
    this.props.onDelete(id);
  }

  render() {
    let customerItems;
    if(this.props.customers){
      customerItems = this.props.customers.map(customer =>
        <CustomerItem onDelete={this.deleteCustomer.bind(this)} key={customer._id} customer={customer}/>
      );
    };

    // console.log(this.props);    
    return <div className="Customers">
        Customers:
        {customerItems}
      </div>
  }
}

export default Customers;