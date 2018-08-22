import React from "react";
import PropTypes from "prop-types";

const SocialLink = ({ link, label }) => {
  return <a href={link}>{label}</a>;
};

SocialLink.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string
};

export default SocialLink;
