import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Customers from './components/customers';
import AddCustomer from './components/addcustomer';

/*
import Tictactoe from './components/tictactoe';
import Projects from './components/projects';
import AddProject from './components/addproject';
import Todos from './components/todos';
*/

import store from './store';

class App extends Component {
/*
  handleDeleteCustomer(id){
    console.log(id);
    let customers = this.state.customers;
    let index = customers.findIndex(x => x.id === id);
    customers.splice(index, 1);
    this.setState({customers:customers});
  }

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
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <AddCustomer/> 
            <Customers/>
        </div>
      </Provider>
    );
  }
}
/*
<div className="App">


    <Customers customers={this.state.customers} onDelete={this.handleDeleteCustomer.bind(this)}/>
    <AddCustomer addcustomer={this.handleAddCustomer.bind(this)}/>
    <AddProject addproject={this.handleAddProject.bind(this)}/>
    <Projects projects={this.state.projects} name="Kove" onDelete={this.handleDeleteProject.bind(this)}/>
    <Tictactoe/>
    <Customers/>
    <Todos todos={this.state.todos}/>
</div>
  */
export default App;
