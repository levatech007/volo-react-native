import React, { Component } from 'react';
import { Text } from 'react-native';
import { alertStyles } from './assets/AlertStyles';

class Alert extends Component {

  render() {
    return(
        <Text style={ alertStyles.alertStyle }>Message here!</Text>
    )
  }
}

export default Alert;
