import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {


  render() {
    console.log(this.props);
    return (
      <li className="TodoItem">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

//validation recommended to use
//had an error it use to be in React.PropTypes  now I had to import PropTypes module

TodoItem.propTypes = {
  todo : PropTypes.object
}



export default TodoItem;
