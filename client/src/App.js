import React, { Component } from 'react';
import uuid from 'uuid';

import './App.css';
import Customers from './components/customers';
import AddCustomer from './components/addcustomer';
import Tictactoe from './components/tictactoe';
import Projects from './components/projects';
import AddProject from './components/addproject';
import Todos from './components/todos';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      todos: [],
      customers: [],
    }
  };

  getTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(todos => this.setState({todos}, () => console.log('Todos fetched...', todos)));
  }

  getProjects(){
    this.setState({
      projects: [{
          id: uuid.v4(),
          name: "Tic Tac Toe",
          category: "Game Development"
        },
        {
          id: uuid.v4(),
          name: "Google Maps",
          category: "Web Design"
        },
        {
          id: uuid.v4(),
          name: "Chat room",
          category: "Backend Development"
        },
      ]
    });
  }

  getCustomers(){
    fetch('/api/customers')
    .then(res => res.json())
    .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  componentWillMount(){
    this.getProjects();
    this.getTodos();
    this.getCustomers();
  }

  componentDidMount(){
    this.getTodos();
    this.getCustomers();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

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

  render() {
    return (
      <div className="App">
          <Customers customers={this.state.customers} onDelete={this.handleDeleteCustomer.bind(this)}/>
          <AddCustomer addcustomer={this.handleAddCustomer.bind(this)}/>
      </div>
    );
  }
}
/*
<div className="App">
    <AddProject addproject={this.handleAddProject.bind(this)}/>
    <Projects projects={this.state.projects} name="Kove" onDelete={this.handleDeleteProject.bind(this)}/>
    <Tictactoe/>
    <Customers/>
    <Todos todos={this.state.todos}/>
</div>
  */
export default App;
