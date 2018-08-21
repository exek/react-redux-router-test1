import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Login = props => {
  return (
    <div>
      {props.news.map(({ id, title, description }) => (
        <h2 key={id}>{title}</h2>
      ))}
    </div>
  );
};

Login.propTypes = {
  // connect
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  )
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(mapStateToProps)(Login);
