import React from "react";
import PropTypes from "prop-types";

const NewsItem = ({ title, text }) => (
  <div className="card" style={{ marginBottom: 20 }}>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </div>
  </div>
);

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NewsItem;
