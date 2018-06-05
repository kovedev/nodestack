import React, { Component } from 'react';

class CustomerItem extends Component {

  deleteCustomer(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Customer"> 
        <strong>{this.props.customer.firstName} {this.props.customer.lastName}</strong> - <a href="#" onClick={this.deleteCustomer.bind(this, this.props.customer._id)}>Delete</a>
      </li>
    );
  }
}

export default CustomerItem;
