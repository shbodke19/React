import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comments: "",
      topic: "",
    };
  }

  handlerUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic} `);
    event.preventDefault();
  };

  render() {
    const { userName, comments, topic } = this.state;
    return (
      <div>
        <h1>Form Componenet</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>UserName </label>
            <input
              type="text"
              //   value={this.state.userName}
              value={userName}
              onChange={this.handlerUserNameChange}
            />
          </div>
          <br></br>
          <div>
            <label> Comments </label>
            <textarea
              //   value={this.state.comments}
              value={comments}
              onChange={this.handleCommentsChange}
            ></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select
              // value={this.state.topic}
              value={topic}
              onChange={this.handleTopicChange}
            >
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Form;
