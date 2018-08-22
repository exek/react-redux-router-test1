import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { auth as authAction } from "../../../actions/";
import ErrorMessage from "../../../components/ErrorMessage";

class LoginForm extends Component {
  static propTypes = {
    //connect
    auth: PropTypes.func.isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool
  };

  state = {
    email: "",
    password: ""
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handlesSubmit = event => {
    event.preventDefault();
    this.props.auth(this.state.email, this.state.password).then(success => {
      if (success) this.onSuccessLogin();
      else this.onFailLogin();
    });
  };

  onSuccessLogin = () => {
    const redirectTo =
      this.props.location.state && this.props.location.state.from
        ? this.props.location.state.from
        : "/";
    this.props.history.push(redirectTo);
  };

  onFailLogin = () => {
    this.setState({
      password: ""
    });
  };

  render() {
    const { error, loading } = this.props;
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handlesSubmit} noValidate>
        {error && <ErrorMessage error={error} />}
        <div className="form-group">
          <label>Email: </label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading && <i className="fa fa-spinner fa-spin " />}
            Login
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.auth.loading
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
