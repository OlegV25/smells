import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

import styles from './styles.scss';
import { PollutionSvg } from '@/assets/icons';
import InfoPanel from './InfoPanel';

export default class Main extends Component {

  componentDidMount() {

    var geojson = {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'message': 'Foo',
            'iconSize': [60, 60]
          },
          'geometry': {
            'type': "Point",
            'coordinates': [
              25.325382999999988,
              50.74723299999999
            ]
          }
        },
      ]
    };


    mapboxgl.accessToken = 'pk.eyJ1Ijoib2xlZ3YyNSIsImEiOiJjano2MWljbTgwNWJ0M2JxOGx1ZGxzc3FpIn0.aYu2mnIBw0zFfQd-NKCB5A';
    const map = new mapboxgl.Map({
      container: 'map_container',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 13,
      center: [25.325382999999988, 50.74723299999999],
    });

    geojson.features.forEach(function(marker) {
// create a DOM element for the marker
      var el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
      el.style.width = marker.properties.iconSize[0] + 'px';
      el.style.height = marker.properties.iconSize[1] + 'px';

      el.addEventListener('click', function() {
        window.alert(marker.properties.message);
      });

// add marker to map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    });
  }

  render() {
    return (
      <div className={styles.page}>
        <div className={styles.header}>
          <PollutionSvg className={styles.logo} />
          <div className={styles.logoText}>SMORID.LUTSK</div>
        </div>
        <div className={styles.content}>
          <div className={styles.infoPanel}>
            <InfoPanel />
          </div>
          <div className={styles.map} id='map_container'>


          </div>
        </div>
      </div>
    );
  }
}
