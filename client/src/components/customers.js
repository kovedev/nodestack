import React, { Component } from 'react';
import './customers.css';
import PropTypes from 'prop-types';
import CustomerItem from './customeritem.js'
import { connect } from 'react-redux';
import { fetchCustomers } from '../actions/customerActions'

class Customers extends Component {

  componentWillMount(){
    this.props.fetchCustomers();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newCustomer){
      console.log('Hello there!');
      this.props.customers.unshift(nextProps.newCustomer);
    }
  }

  deleteCustomer(id){
    this.props.onDelete(id);
  }

  render() {
    const customers = this.props.customers.map(customer => (
      <div key={customer._id}>
        <h3>{customer.firstName} {customer.lastName}</h3>
      </div>
    ));
    return (
      <div>
        <h1>Customers</h1>
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
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newCustomer: PropTypes.object
};

const mapStateToProps = state => ({
  customers: state.customers.customers,
  newCustomer: state.customers.customer
});


export default connect(mapStateToProps, { fetchCustomers })(Customers);