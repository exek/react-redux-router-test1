import React from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <div className="alert alert-info" role="alert">
        A sample user: Admin, password: 123456
      </div>
      <LoginForm />
    </div>
  );
};

Login.propTypes = {};

export default Login;
