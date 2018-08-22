import React from "react";
import { connect } from "react-redux";

const Profile = props => {
  return (
    <div>
      <h1>Profile Page</h1>
      <h2>Hello {props.user}</h2>
    </div>
  );
};

Profile.propTypes = {};

const mapStateToProps = state => ({
  //TODO use selector
  user: "state.auth.user"
});

export default connect(mapStateToProps)(Profile);
