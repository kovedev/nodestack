import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCustomer } from '../actions/customerActions';

class AddCustomer extends Component {
  constructor(){
    super();
    this.state = {
      newCustomer:{}
    }
  }

  handleSubmit(e){
    if(this.refs.firstName.value === ''){
      alert('Name is required');
    } else {
      const customer = {
        firstName: this.refs.firstName.value,
        lastName: this.refs.lastName.value
      }
      this.props.createCustomer(customer);
    }
    e.preventDefault();
  }

  render() {

    return (
      <div>
        <h3>Add Customer</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>First Name: </label>
            <input type="text" ref="firstName"/><br/>
          </div>
          <div>
            <label>Last Name: </label>
            <input type="text" ref="lastName"/><br/><br/>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

AddCustomer.propTypes = {
  createCustomer: PropTypes.func.isRequired
};

export default connect(null, { createCustomer })(AddCustomer);