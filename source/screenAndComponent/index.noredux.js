/*
 * app/{{path}}/{{name}}
 */

// import react and react-native elements
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

// import screens styles
import styles from './styles';

class {{name}} extends Component {
  static propTypes = {};

  /**
   * Construct component class
   * @param {object} props
   */
  constructor (props: {}) {
    super(props);
  }

  /**
   * Render component
   */
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from {{path}}/{{name}}!</Text>
      </View>
    );
  }
}

export default {{name}};
