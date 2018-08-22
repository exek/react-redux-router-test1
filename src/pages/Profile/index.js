import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserInfo from "./UserInfo";
import Spinner from "../../components/Spinner";

import { fetchUser } from "../../actions";

class Profile extends Component {
  static propTypes = {
    //connect
    userId: PropTypes.number,
    user: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.string
  };

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        {this.props.loading && <Spinner />}
        {this.props.error && (
          <div className="alert alert-danger" role="alert">
            {this.props.error}
          </div>
        )}
        {!this.props.loading &&
          !this.props.error &&
          this.props.user && <UserInfo user={this.props.user} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.auth.user.id,
  user: state.user.user,
  loading: state.user.loading,
  error: state.user.error
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
