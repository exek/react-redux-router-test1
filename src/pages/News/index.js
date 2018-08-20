import React from "react";
import { connect } from "react-redux";

const Login = props => {
  return (
    <div>
      {props.news.map(({ title, description }) => (
        <h2>{title}</h2>
      ))}
    </div>
  );
};

Login.propTypes = {};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(mapStateToProps)(Login);
