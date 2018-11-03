import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { homeStyles } from './HomeStyles';

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={homeStyles.container}>
          <Text style={homeStyles.welcome}>Welcome!</Text>
          <Text style={homeStyles.instructions}>React Native app for Volo</Text>
      </View>
    );
  }
}

export default App;
