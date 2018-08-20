import React from "react";
import { connect } from "react-redux";

const Message = props => <h1>{props.message}</h1>;

export default connect(state => ({
  message: state.message
}))(Message);
