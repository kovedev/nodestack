import React, { Component } from 'react';
import './projects.css';
import Projectitem from './projectitem.js'

class Projects extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project =>
        <Projectitem onDelete={this.deleteProject.bind(this)} key={project.id} project={project}/>
      );
    };

    // console.log(this.props);    
    return <div className="Projects">
        My projects:
        {projectItems}
      </div>
  }
}

export default Projects;
