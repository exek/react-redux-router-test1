import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { auth as authAction } from "../../../actions/";

class LoginForm extends Component {
  static propTypes = {
    //connect
    error: PropTypes.string,
    auth: PropTypes.func.isRequired
  };

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
    this.props.auth(this.state.name, this.state.password, this.redirect);
  };

  redirect = () => {
    const redirectTo =
      this.props.location.state && this.props.location.state.from
        ? this.props.location.state.from
        : "/";
    this.props.history.push(redirectTo);
  };

  render() {
    return (
      <form onSubmit={this.handlesSubmit}>
        {this.props.error && (
          <div className="alert alert-danger" role="alert">
            {this.props.error}
          </div>
        )}
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  auth: (name, password, cb) => dispatch(authAction(name, password, cb))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);
