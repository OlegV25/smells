import React, { Component } from 'react';
import Clock from '@/components/Clock';

import styles from './styles.scss';

export default class InfoPanel extends Component {
  render() {
    return (
      <div className={styles.info}>
        <div className={styles.infoPanel}>
          <Clock />
          <div className={styles.line}></div>
          <div className={styles.actionBtn}>Скажи де смердить</div>
          <a href="oleg" className={styles.link}> Як та принада працює?</a>
          <div className={styles.line}></div>
        </div>
      </div>
    );
  }
}
