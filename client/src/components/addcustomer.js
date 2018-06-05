import React, { Component } from 'react';
import uuid from 'uuid';

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
      this.setState({newCustomer:{
        _id: uuid.v4(),
        firstName: this.refs.firstName.value,
        lastName: this.refs.lastName.value
      }}, function(){
            this.props.addcustomer(this.state.newCustomer);
      });
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

export default AddCustomer;  
