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

export const createCustomer = customerData => dispatch => {
  fetch('/api/customers', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(customerData)
  })
    .then(res => res.json())
    .then(customers =>
      dispatch({
        type: NEW_CUSTOMER,
        payload: customers
      })
  );
};

export const deleteCustomer = customerToDelete => dispatch => {
  fetch('/api/customers', {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(customerToDelete)
  })
    .then(res => res.json())
    .then(customers =>
      dispatch({
        type: NEW_CUSTOMER,
        payload: customers
      })
  );
};

export const updateCustomer = customerData => dispatch => {
  fetch('/api/customers', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(customerData)
  })
    .then(res => res.json())
    .then(customers =>
      dispatch({
        type: NEW_CUSTOMER, // UPDATE_CUSTOMER
        payload: customers
      })
  );
};