import React, { Component } from 'react';
import uuid from 'uuid';

import './App.css';
import Customers from './components/customers';
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

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
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

  render() {
    return (
      <div className="App">
          <AddProject addproject={this.handleAddProject.bind(this)}/>
          <Projects projects={this.state.projects} name="Kove" onDelete={this.handleDeleteProject.bind(this)}/>
          <Tictactoe/>
          <Customers/>
          <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
