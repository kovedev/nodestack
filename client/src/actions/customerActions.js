import { FETCH_CUSTOMERS, NEW_CUSTOMER } from './types';

export const fetchCustomers = () => dispatch => {
  fetch('/api/customers')
  .then(res => res.json())
  .then(customers => 
    dispatch({
      type: FETCH_CUSTOMERS,
      payload: customers
  }));
}

export const createCustomer = (customerData) => dispatch => {
  fetch('/api/customers', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(customerData), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(customer => 
    dispatch({
      type:  NEW_CUSTOMER,
      payload: customer
  }));
}

/*
  handleAddCustomer(customer){
    let customers = this.state.customers;
    customers.push(customer);
    this.setState({customers:customers});

    fetch('/api/customers', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(customer), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }
*/