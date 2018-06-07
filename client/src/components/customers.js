import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomerItem from './customeritem.js'
import { connect } from 'react-redux';
import { fetchCustomers } from '../actions/customerActions';
import { deleteCustomer } from '../actions/customerActions';

class Customers extends Component {

  componentWillMount(){
    this.props.fetchCustomers();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.createCustomer){
      this.props.customers.unshift(nextProps.createCustomer);
    }
  }

  deleteCustomer(customer){
    this.props.deleteCustomer(customer);
  }

  updateCustomer(customer){
    alert
  }

  render() {
    const customers = this.props.customers.map(customer => (
      <div key={customer._id}>
        <label>{customer.firstName} {customer.lastName} <a href="#" onClick={this.deleteCustomer.bind(this, customer)}>Delete</a> <a href="#" onClick={this.updateCustomer.bind(this, customer)}>Update</a> </label>
      </div>
    ));
    return (
      <div>
        <h3>Customers</h3>
        {customers}
      </div>
    );
  }
/*
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
  }*/
}

postMessage.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
  newCustomer: PropTypes.object
};

const mapStateToProps = state => ({
  customers: state.customers.customers,
  newCustomer: state.customers.customers
});

export default connect(mapStateToProps, { fetchCustomers, deleteCustomer })(Customers);