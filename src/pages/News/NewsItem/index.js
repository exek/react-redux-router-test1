import React from "react";
import PropTypes from "prop-types";

const NewsItem = ({ title, description }) => (
  <div className="card" style={{ marginBottom: 20 }}>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
  </div>
);

NewsItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default NewsItem;
