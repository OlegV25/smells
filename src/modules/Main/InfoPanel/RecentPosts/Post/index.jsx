import React, { Component } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import _ from 'lodash';

import styles from './styles.scss';
import PropTypes from 'prop-types';
import moment from 'moment';

const selector = createSelector(
  state => state.posts,
  posts => ({
    allPosts: posts.allPosts,
  }),
)

class RecentPosts extends Component {

  state = {
    groups: {},
  }

  generateGroups = (allPosts) => {
    const groups = {}
    allPosts.forEach((item) => {
      const key = moment(item.date).format('DD.MM.YYYY');
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(item);
    });
    this.setState({ groups });
  }

  componentWillReceiveProps(nextProps) {
    this.generateGroups(nextProps.allPosts);
  }

  componentDidMount() {
    this.generateGroups(this.props.allPosts);
  }

  render() {
    const { groups } = this.state;
    return (
      <div className={styles.recentPosts}>
        <div className={styles.title}>Кому що смерділо</div>
        {_.map(groups, (item, key) => {
          return <div key={key}>{key}</div>;
        })}
      </div>
    );
  }
}

RecentPosts.propTypes = {
  allPosts: PropTypes.array.isRequired,
}

RecentPosts.defaultProps = {
  allPosts: [],
}


export default connect(selector, {})(RecentPosts);
