import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import MapboxGeocoder from 'mapbox-gl-geocoder';
import ReCAPTCHA from 'react-google-recaptcha';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ModalWrapper from '@/components/ModalWrapper';
import styles from './styles.scss';


class Main extends Component {
  radioMenu = ['Попахує', 'Лайно', 'Фуууу', 'Блювану', 'Буєєєє']

  state = {
    currentRadio: 0,
  }

  onRadioChange = key => this.setState({ currentRadio: key });

  renderLevelMenu = () => this.radioMenu.map((radio, key) =>
    <div onClick={() => this.onRadioChange(key)} key={key} className={styles.item}>
      <div className={styles.circle}>
        {this.state.currentRadio === key && <div className={styles.active}></div>}
      </div>
      <div className={styles.text}>{radio}</div>
    </div>)

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoib2xlZ3YyNSIsImEiOiJjano2MWljbTgwNWJ0M2JxOGx1ZGxzc3FpIn0.aYu2mnIBw0zFfQd-NKCB5A';
    const map = new mapboxgl.Map({ container: 'map_container' });
    const geocoder = new MapboxGeocoder({
      accessToken: 'pk.eyJ1Ijoib2xlZ3YyNSIsImEiOiJjano2MWljbTgwNWJ0M2JxOGx1ZGxzc3FpIn0.aYu2mnIBw0zFfQd-NKCB5A',
    });
    geocoder.on('result', (results) => { console.log(results); })
    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
  }

  onCaptcha = (e) => {
    console.log(e);
  }

  goToMain = () => this.props.history.goBack();

  render() {
    return (
      <ModalWrapper onClose={this.goToMain}>
        <div className={styles.title}>Кажи де тобі засмерділо сьогодні</div>
        <div className={styles.subTitle}>не бійся, то анонімно</div>
        <div className={styles.label}>Обери населений пункт</div>
        <div id='geocoder' className={styles.geocoder}></div>
        <div id='map_container' className={styles.map}></div>
        <div className={styles.label}>По шкалі від 1 до 5 обери як само смердить.</div>
        <div className={styles.menu}>{this.renderLevelMenu()}</div>
        <div className={styles.label}>Докажи що ти Українець</div>
        <div className={styles.recaptcha}>
          <ReCAPTCHA
            sitekey="6LcMDLMUAAAAAEzx4q9ZEAsAMr32XbxJ5_BBcto5"
            onChange={this.onCaptcha}
          />
        </div>
        <div className={styles.buttonArea}>
          <div className={classnames(styles.btn, styles.cancel)} onClick={this.goToMain}>
            Вже не смердить
          </div>
          <div className={classnames(styles.btn, styles.submit)}>Відправити</div>
        </div>
      </ModalWrapper>
    );
  }
}

Main.propTypes = {
  history: PropTypes.any.isRequired,
}

Main.defaultProps = {
  history: {},
}

export default withRouter(Main);
