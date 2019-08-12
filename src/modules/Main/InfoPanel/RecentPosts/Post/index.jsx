import React, { Component } from 'react';
import moment from 'moment';
import classnames from 'classnames';

import PropTypes from 'prop-types';
import styles from './styles.scss';

export default class Post extends Component {
  render() {
    const { location, date, level } = this.props.data;
    const { levelColor, index, allCounts } = this.props;
    return (
      <div className={styles.post}>
        {index === allCounts - 1
        && <div className={classnames(styles.invisibleBorder, styles.invisibleBorderBottom)}></div>}
        {index === 0
        && <div className={styles.invisibleBorder}></div>}
        <div className={styles.leftPoint} />
        <div className={styles.time}>{moment(date).format('HH:MM')}</div>
        <div className={styles.location}>{location}</div>
        <div className={classnames(styles.location, styles.level)}>
          Рівень смороду:
          <div className={classnames(styles.point, styles[levelColor])}>{level}</div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  data: PropTypes.shape({
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  }),
  levelColor: PropTypes.string.isRequired,
  allCounts: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
}

Post.defaultProps = {
  data: {
    location: 'Немає інформації',
    date: '12-12-2012 12:12',
    level: 5,
  },
  levelColor: 'green',
  allCounts: 0,
  index: 0,
}
