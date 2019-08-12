import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import styles from './styles.scss';

const selector = createSelector(
  state => state.posts,
  posts => ({
    allPosts: posts.allPosts,
  }),
)

class Map extends Component {
  map = null;
  colors = {
    5: '#d84417',
    4: '#ffaf00',
    3: '#ffaf00',
    2: '#cfce1b',
    1: '#cfce1b',
  };

  generateMarkers = ({ allPosts }) => {
    const geojson = {
      type: 'FeatureCollection',
      features: allPosts.map(post => ({
        properties: {
          background: this.colors[post.level],
        },
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            post.lat,
            post.long,
          ],
        },
      })),
    };
    geojson.features.forEach((marker) => {
      // create a DOM element for the marker
      const el = document.createElement('div');
      el.className = styles.marker;
      el.style.background = marker.properties.background;

      // add marker to map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(this.map);
    });
  }

  componentWillReceiveProps(nextProps) {
    this.generateMarkers(nextProps);
  }

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoib2xlZ3YyNSIsImEiOiJjano2MWljbTgwNWJ0M2JxOGx1ZGxzc3FpIn0.aYu2mnIBw0zFfQd-NKCB5A';
    this.map = new mapboxgl.Map({
      container: 'map_container',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 13,
      center: [25.325382999999988, 50.74723299999999],
    });
    this.generateMarkers(this.props);
  }

  render() {
    return (<div className={styles.map} id='map_container'></div>);
  }
}

Map.propTypes = {
  allPosts: PropTypes.array.isRequired,
}

Map.defaultProps = {
  allPosts: [],
}

export default connect(selector, {})(Map);
