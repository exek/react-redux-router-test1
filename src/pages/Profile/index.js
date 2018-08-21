import React from "react";
import { connect } from "react-redux";

const Login = props => {
  return (
    <div>
      <h1>Profile Page</h1>
      <h2>Hello {props.user}</h2>
    </div>
  );
};

Login.propTypes = {};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Login);
