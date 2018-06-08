import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomerItem from './customeritem.js'
import { connect } from 'react-redux';
import { fetchCustomers } from '../actions/customerActions';
import { deleteCustomer } from '../actions/customerActions';
// import './customers.css';

import Modal from 'react-modal';
const customStyles = {
  content : {
    top                   : '25%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Customers extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

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

  handleSubmit(event) {
    console.log(`A name was Updated: ${this.firstName.value} ${this.lastName.value}`);

    //update 
    event.preventDefault();
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const customers = this.props.customers.map(customer => (
      <div key={customer._id}>
        <label>
          {customer.firstName} {customer.lastName}<a> </a> 
          <a href="#" onClick={this.deleteCustomer.bind(this, customer)}>Delete</a><a> </a>
          <a href="#" onClick={this.openModal}>Update</a>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Update Modal"
            style={customStyles}>
            <button onClick={this.closeModal}>close</button>
            <div>
            <h3>Update Customer</h3>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>First Name: </label>
                <input type="text" ref={(firstName) => this.firstName = firstName}/><br/>
              </div>
              <div>
                <label>Last Name: </label>
                <input type="text" ref={(lastName) => this.lastName = lastName}/><br/><br/>
              </div>
              <input type="submit" value="submit" />
            </form>
          </div>
          </Modal>
        </label>
      </div>
    ));
    return (
      <div className="Customers">
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