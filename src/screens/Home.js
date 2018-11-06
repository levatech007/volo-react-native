import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { homeStyles } from './assets/HomeStyles';
import { generalStyles } from './assets/GeneralStyles';
import Logo from './images/Volo-logo.png';

type Props = {};
class App extends Component<Props> {
  constructor() {
    super();
    this.state= {
      user: ''
    }
    this.goToLogin = this.goToLogin.bind(this);
    this.goToLocations = this.goToLocations.bind(this);
  }

  goToLogin() {
    this.props.navigation.navigate('Login');
  }

  goToLocations() {
    this.props.navigation.navigate('Locations');
  }


  render() {
    return (
      <View style={[generalStyles.container, homeStyles.container]}>
          <Image source={ Logo } resizeMode='contain' style={homeStyles.logo}/>
          <TouchableOpacity style={generalStyles.submitButton} title='Locations' onPress={ this.goToLocations } >
            <Text style={generalStyles.submitButtonText}>See Locations</Text>
          </TouchableOpacity>
          <TouchableOpacity style={generalStyles.submitButton} title='Login' onPress={ this.goToLogin } >
            <Text style={generalStyles.submitButtonText}>Login</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default App;
