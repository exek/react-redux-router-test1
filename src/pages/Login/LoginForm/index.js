import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { auth as authAction } from "../../../actions/";

class LoginForm extends Component {
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
    event.preventDefault();
    this.props.auth(this.state.name, this.state.password);
    console.log(this.props.history.push("/profile"));
  };

  render() {
    return !this.props.isAuth ? (
      <form onSubmit={this.handlesSubmit}>
        {this.props.error && <h2>{this.props.error}</h2>}
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
    ) : (
      <Redirect to="/profile" />
    );
  }
}

const mapStateToProps = state => ({
  error: state.auth.error,
  isAuth: !!state.auth.token
});

const mapDispatchToProps = dispatch => ({
  auth: (name, password) => dispatch(authAction(name, password))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);
