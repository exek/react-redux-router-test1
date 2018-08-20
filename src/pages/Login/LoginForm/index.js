import React, { Component } from "react";

export class index extends Component {
  static propTypes = {};

  state = {
    name: "",
    password: ""
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handlesSubmit = event => {
    console.log(this.state.name, this.state.password);
    this.setState({
      name: "",
      password: ""
    });
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handlesSubmit}>
        <p>
          <label>
            Name: <input type="text" name="name" onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Password:{" "}
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form>
    );
  }
}

export default index;
