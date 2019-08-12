import React, { Component } from 'react';
import {
  EmailSvg,
  PhoneSvg,
} from '@/assets/icons';
import logoImg from '@/assets/images/logo.png';
import { Button } from '@/components';
import {
  validationEmail,
  validationPhone,
} from '@/utils/validation';
import styles from './styles.scss';

export default class Main extends Component {
  state = {
    email: '',
    phone: '',
  }

  handleChange = ({ target: { id, value } }) => {
    this.setState({ [id]: value });
  }

  render() {
    const { email, phone } = this.state;

    return (
      <div className={styles.page}>
        <img className={styles.mainLogo} src={logoImg} alt="logo"/>
        <h1 className={styles.mainTitle}>Test</h1>
        <form className={styles.mainForm}>
          <div className={styles.field}>
            <label htmlFor="email">
              <EmailSvg className={styles.icon} />
              Email
            </label>
            <input
              id="email"
              value={email}
              onChange={this.handleChange}
            />
            <span>
              { validationEmail(email) ? 'Valid' : 'Not valid' }
            </span>
          </div>
          <div className={styles.field}>
            <label htmlFor="phone">
              <PhoneSvg className={styles.icon} />
              phone
            </label>
            <input
              id="phone"
              value={phone}
              onChange={this.handleChange}
            />
            <span>
              { validationPhone(phone) ? 'Valid' : 'Not valid' }
            </span>
          </div>
          <Button className={styles.submitBtn}>Submit</Button>
        </form>
      </div>
    );
  }
}
