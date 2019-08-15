import { withRouter } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import Clock from '@/components/Clock';
import RecentPosts from './RecentPosts';

import styles from './styles.scss';

const InfoPanel = ({ history }) => {
  const onCreate = () => history.push('create');

  return (
    <div className={styles.info}>
      <div className={styles.infoPanel}>
        <Clock />
        <div className={styles.line}></div>
        <div className={styles.actionBtn} onClick={onCreate}>Скажи де смердить</div>
        <a href="oleg" className={styles.link}> Як та принада працює?</a>
        <div className={styles.line}></div>
        <RecentPosts />
        <div className={styles.contactUs}>
          ПИШИ НАМ
        </div>
      </div>
    </div>);
}

InfoPanel.propTypes = {
  history: PropTypes.any.isRequired,
}

InfoPanel.defaultProps = {
  history: {},
}

export default withRouter(InfoPanel);
