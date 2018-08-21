import React from "react";
import PropTypes from "prop-types";

const NewsItem = ({ title, description }) => (
  <div class="card" style={{ marginBottom: 20 }}>
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{description}</p>
    </div>
  </div>
);

NewsItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default NewsItem;
