import React, { Component } from 'react';
import uuid from'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  static defaultProps = {
    categories: ['Web Design', "Web Development", "Mobile Development"]
  }

  handleSubmit(event){
    if(this.refs.title.value === "") {
      alert("title is required")
    } else {
      this.setState({newProject: {
        id:uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        // console.log(this.state)
        this.props.addProject(this.state.newProject);
      })
    }
    event.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    })

    console.log(this.props)
    return (
      <div className="AddProject">
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
              </select>
          </div>
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
