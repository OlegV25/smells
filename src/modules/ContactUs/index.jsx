import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ModalWrapper from '@/components/ModalWrapper';
import styles from './styles.scss';


class ContactUs extends Component {

  state = {
    currentRadio: 0,
  }

  goToMain = () => this.props.history.goBack();

  render() {
    return (
      <ModalWrapper onClose={this.goToMain}>

      </ModalWrapper>
    );
  }
}

export default withRouter(ContactUs);
