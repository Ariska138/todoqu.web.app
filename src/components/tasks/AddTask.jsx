import React, { Component } from "react";

class AddTask extends Component {
  state = {
      task: ""
  };

  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
  }

  render() {
    return (
      <div className="container my-5">
        <form 
        autoComplete="off"
        onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="task">Add Task</label>
            <input 
            type="text"
            className="form-control" 
            id="task"
            onChange={this.handleChange}
            />
          </div>
        <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddTask;