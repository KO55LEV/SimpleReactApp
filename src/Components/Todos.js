import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {



  render() {

    let todoItems;
    if (this.props.todos)
    {
    //  projectItems = this.props.projects.map(project => {console.log(project)});
      todoItems = this.props.todos.map(todo => {
        return (<TodoItem key={todo.title} todo={todo} />);
      });
    }

    return (
      <div className="Todos">

      <h3>Todo List </h3>
        {todoItems}
      </div>
    );
  }
}

//validation recommended to use
//had an error it use to be in React.PropTypes  now I had to import PropTypes module

 Todos.propTypes = {
   todos : PropTypes.array
 }

export default Todos;
