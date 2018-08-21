import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import PropTypes from 'prop-types'

import { authLogout as logout } from "../actions";

class Logout extends Component {
  static propTypes = {};

  componentWillMount() {
    this.props.logout();
    this.props.history.push("/");
  }

  render() {
    return null;
  }
}

const mapDispathToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(
  connect(
    null,
    mapDispathToProps
  )(Logout)
);
