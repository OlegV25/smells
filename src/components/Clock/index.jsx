import React, { Component } from 'react';
import moment from 'moment';

import styles from './styles.scss';

export default class Clock extends Component {

  state = {
    time: moment().format('HH:MM'),
    date: moment().format('DD.MM.YYYY'),
  }

  componentDidMount() {

  }

  render() {
    const { time, date } = this.state;
    return (
      <div className={styles.clock}>
        <div className={styles.date}>{date}</div>
        <div className={styles.time}>{time}</div>
      </div>
    );
  }
}
