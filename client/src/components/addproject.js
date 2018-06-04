import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }


  static defaultProps = {
    categories: ['Game Development','Web Design','Backend Development']
  }

  handleSubmit(e){
    if(this.refs.name.value === ''){
      alert('Name is required');
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        name: this.refs.name.value,
        category: this.refs.category.value
      }}, function(){
            this.props.addproject(this.state.newProject);
      });
    }

    e.preventDefault();
  }

  render() {
    let categoryOption = this.props.categories.map(category =>
        <option key={category} value={category}>{category}</option>  
    );

    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Project Name</label>
            <input type="text" ref="name"/><br/>
          </div>
          <div>
            <label>Category</label>
            <select ref="category">
              {categoryOption}
            </ select><br/>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;  
