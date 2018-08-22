import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ error }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {error}
    </div>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired
};

export default ErrorMessage;
