import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchNews } from "../../actions";

import Spinner from "../../components/Spinner";
import NewsList from "./NewsList";

class News extends Component {
  static propTypes = {};

  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    const { loading, error, news } = this.props;
    return (
      <div>
        <h1>Profile Page</h1>
        {loading && <Spinner />}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        {!loading && !error && news && <NewsList news={news} />}
        {news && <p>Total news: {news.length}</p>}
      </div>
    );
  }
}

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
  news: state.news.data,
  loading: state.news.loading,
  error: state.news.error
});

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
