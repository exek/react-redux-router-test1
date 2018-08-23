import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { auth, clearErrors } from "../../../actions/";
import ErrorMessage from "../../../components/ErrorMessage";
import InputControl from "./InputControl";

import isEmail from "validator/lib/isEmail";

class LoginForm extends Component {
  static propTypes = {
    //connect
    auth: PropTypes.func.isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool,
    clearErrors: PropTypes.func
  };

  state = {
    fields: {
      email: {
        name: "email",
        value: "",
        type: "email",
        label: "Email",
        touched: false,
        validation: {
          isRequired: true,
          isEmail: true
        }
      },
      password: {
        name: "password",
        value: "",
        type: "password",
        label: "Password",
        touched: false,
        validation: {
          isRequired: true
        }
      }
    }
  };

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(prevState => ({
      ...prevState,
      fields: {
        ...prevState.fields,
        [name]: { ...prevState.fields[name], value, touched: true }
      }
    }));
  };

  handlesSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state.fields;
    this.props.auth(email.value, password.value).then(success => {
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

  validate = (value, rules) => {
    const trimmedValue = value.trim();
    if (rules.isRequired && !trimmedValue.length) {
      return "Should be non empty";
    }
    if (rules.isEmail && !isEmail(value)) {
      return "Should be valid email address";
    }
    return null;
  };

  getErrors = () => {
    const { fields } = this.state;
    return Object.keys(fields).reduce((acc, key) => {
      const error = this.validate(fields[key].value, fields[key].validation);
      if (error) acc[key] = error;
      return acc;
    }, {});
  };

  render() {
    const { error, loading } = this.props;
    const { fields } = this.state;

    const fieldsErrors = this.getErrors();
    const isFormValid = !Object.keys(fieldsErrors).length;
    console.log(isFormValid);

    const formControls = Object.keys(fields).map(key => (
      <InputControl
        key={key}
        {...fields[key]}
        onChange={this.handleChange}
        error={fields[key].touched ? fieldsErrors[key] : ""}
      />
    ));

    return (
      <form onSubmit={this.handlesSubmit} noValidate>
        {error && <ErrorMessage error={error} />}
        {formControls}
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading || !isFormValid}
          >
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

const mapDispatchToProps = {
  auth,
  clearErrors
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);
