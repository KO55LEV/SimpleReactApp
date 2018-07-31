import React, { Component } from 'react';
import ProjectItem from './ProjectItem'
import PropTypes from 'prop-types'

class Projects extends Component {


  deleteProject(id)
  {
    console.log('we are on project level delete');
    this.props.onDelete(id);
  }

  render() {

    console.log(this.props);

    let projectItems;
    if (this.props.projects)
    {
    //  projectItems = this.props.projects.map(project => {console.log(project)});
      projectItems = this.props.projects.map(project => {
        return (<ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />);
      });
    }

    return (
      <div className="Projects">

      <h3>Latest Projects </h3>
        {projectItems}
      </div>
    );
  }
}

//validation recommended to use
//had an error it use to be in React.PropTypes  now I had to import PropTypes module

 Projects.propTypes = {
   projects : PropTypes.array,
   onDelete : PropTypes.func
 }

export default Projects;
