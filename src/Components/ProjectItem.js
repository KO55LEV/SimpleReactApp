import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ProjectItem extends Component {


deleteProject(id) {
  console.log('delete fired on product level');
  this.props.onDelete(id);
}

  render() {

    console.log(this.props);
    return (
      <li className="ProjectItem">
        <strong>{this.props.project.title}</strong> - {this.props.project.category}  <a href="#" onClick={this.deleteProject.bind(this , this.props.project.id )}>X</a>
      </li>
    );
  }
}

//validation recommended to use
//had an error it use to be in React.PropTypes  now I had to import PropTypes module

ProjectItem.propTypes = {
  project : PropTypes.object,
  onDelete : PropTypes.func
}



export default ProjectItem;
