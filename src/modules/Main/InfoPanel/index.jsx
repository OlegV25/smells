import React, { Component } from 'react';

import styles from './styles.scss';
import { PollutionSvg } from '@/assets/icons';

export default class Main extends Component {
  render() {
    return (
      <div className={styles.page}>
        <div className={styles.header}>
          <PollutionSvg className={styles.logo} />
          <div className={styles.logoText}>SMORID.LUTSK</div>
        </div>
        <div className={styles.content}>
          <div className={styles.infoPanel}>

          </div>
          <div className={styles.map}>

          </div>
        </div>
      </div>
    );
  }
}
