import React, { Component } from 'react';
import { View, Image, Button, Text } from 'react-native';
import { homeStyles } from './HomeStyles';
import Logo from './Volo-logo.png'

type Props = {};
class App extends Component<Props> {
  constructor() {
    super();
    this.state= {
      user: ''
    }
    this.goToLogin = this.goToLogin.bind(this);
  }

  goToLogin() {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={homeStyles.container}>
          <Image source={ Logo } resizeMode='contain' style={homeStyles.logo}/>
          <Text style={homeStyles.welcome}>{ this.props.user }</Text>
          <Button title='Login' onPress={ this.goToLogin } />
      </View>
    );
  }
}

export default App;
