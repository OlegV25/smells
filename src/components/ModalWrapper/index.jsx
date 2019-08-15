import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

import { TimesCircleSvg } from '@/assets/icons';

import './styles.scss';

const ModalWrapper = (props) => {
  const { children, onClose } = props

  return (
    <div className={styles.page}>
      <div className={styles.createForm}>
        <div className={styles.closeBtn} onClick={onClose}>
          <TimesCircleSvg />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

ModalWrapper.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
}

ModalWrapper.defaultProps = {
  children: <></>,
  onClose: () => {},
}

export default ModalWrapper;
