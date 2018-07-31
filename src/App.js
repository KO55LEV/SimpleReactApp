import React, { Component } from 'react';
import PropTypes from 'prop-types'
import uuid from 'uuid'
import $ from 'jquery'
import Projects from './Components/Projects';
import AddProject from './Components/AddProject'
import Todos from  './Components/Todos'
import './App.css';

class App extends Component {

 constructor()
 {
   super();
   this.state = {projects : [] }
 }

  getProjects()  {
    this.setState({projects: [
           {id: uuid.v4(), title:"Item 1" , category: "Category 1"},
           {id: uuid.v4(), title:"Item 2" , category: "Category 2"},
           {id: uuid.v4(), title:"Item 3" , category: "Category 3"}
         ]});
  }

  getTodos(){
      //get data from outside
      //many ways to get data jquery, axios (nice for react) , superagent, fetch, etc
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos' ,
        dataType: 'json',
        cache : false,
        success : function(data){ this.setState({todos:data} ,
          //call back funcion for setState
          function(){console.log(this.state)}
         )}.bind(this),
        error: function(xhr, status,err) {console.log(err);}
      });
  }

 // set Initial variales via LiveCicle method fire each time when component render
 componentWillMount(){

    console.log('this is componentWillMount ');
    this.getProjects();
    this.getTodos();
 }

 componentDidMount()
 {
   console.log('this is componentDidMount ');
   this.getTodos();
 }

 handleAddProject(project)
 {
   console.log(project);
   let projects = this.state.projects;
   projects.push(project);
   this.setState({projects:projects});
 }

 handleDeleteProject(id)
 {
   console.log('we are on root level delete')
   let projects = this.state.projects;
   let index = projects.findIndex( x => x.id === id);
   projects.splice(index,1);
   this.setState({projects:projects});
 }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}  />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />

          <hr/>

          <Todos todos={this.state.todos} />
      </div>
    );
  }
}


//validation recommended to use
//had an error it use to be in React.PropTypes  now I had to import PropTypes module

App.propTypes = {
  category : PropTypes.array,
  AddProject : PropTypes.func
}



export default App;
