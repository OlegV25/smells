import React, { Component } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import _ from 'lodash';

import PropTypes from 'prop-types';
import moment from 'moment';
import Post from './Post';
import styles from './styles.scss';

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

  levelColor = {
    1: 'green',
    2: 'green',
    3: 'orange',
    4: 'orange',
    5: 'red',
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
        <div className={styles.allPosts}>
          {_.map(groups, (data, groupName) => <div key={groupName}>
              <div className={styles.groupName}>{groupName}</div>
              {data.map((post, key) =>
                <Post
                  index={key}
                  allCounts={data.length}
                  levelColor={this.levelColor[post.level]}
                  data={post}
                  key={key} />)}
            </div>)}
        </div>
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
