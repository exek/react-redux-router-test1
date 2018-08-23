import React from "react";
import PropTypes from "prop-types";

const InputControl = ({ name, value, label, onChange, type, error }) => {
  return (
    <div className={`form-group ${error ? "text-danger" : ""}`}>
      <label>{label}: </label>
      <input
        className={`form-control ${error ? "is-invalid" : ""}`}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />
      {error && (
        <small id="passwordHelp" className="text-danger">
          {error}
        </small>
      )}
    </div>
  );
};

InputControl.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default InputControl;
