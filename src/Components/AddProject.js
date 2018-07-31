import React, { Component } from 'react';
import uuid from 'uuid'

class AddProject extends Component {


 constructor()
 {
   super();
   this.state = { newProject:{}};

 }

 static defaultProps = {
   categories : ['Category 1' , 'Category 2' , 'Category 3']
 }


  handleSubmit(e)
  {

    console.log(this.refs.title.value);
    console.log('Submitted');

    if (this.refs.title.value === '')
    {
      alert('Title is requred');
    }
    else
      {
        this.setState({newProject: {
          id: uuid.v4(), 
          title : this.refs.title.value ,
          category : this.refs.category.value }}
        ,
        //callback function
        function() {
          console.log(this.state);
          //this will be availavle in Apps.js !
          this.props.addProject(this.state.newProject);
        });

      }
    e.preventDefault();
  }

  render() {

   let categoryOptions = this.props.categories.map(category => {
     return <option key={category} value={category} >{category}</option>
   });

    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
        <label>Title</label><br/>
        <input type="text" ref="title" />
        </div>

        <div>
        <label>Category</label><br/>
        <select ref="category">
          {categoryOptions}
        </select>
        </div>
        <br/>
        <input type="submit" value="New Project" />
        <br/>
        </form>
      </div>
    );
  }
}

export default AddProject;
