import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NewsItem from "./NewsItem";

const News = props => {
  return (
    <div>
      <h1>News</h1>
      {props.news.map(newsProps => (
        <NewsItem key={newsProps.id} {...newsProps} />
      ))}
    </div>
  );
};

News.propTypes = {
  // connect
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  )
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(mapStateToProps)(News);
