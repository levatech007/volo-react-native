import React, { Component } from 'react';
import { View, TextInput, Alert, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { loginStyles } from './assets/LoginStyles';
import { generalStyles } from './assets/GeneralStyles';
import Platform from '../../Platform';
import { Dimensions } from 'react-native';
import Home from './Home'


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      orientation: Platform.isPortrait() ? 'portrait' : 'landscape',
    }

    Dimensions.addEventListener('change', () => {
        this.setState({
            orientation: Platform.isPortrait() ? 'portrait' : 'landscape'
        });
    });
  }

  _signInAsync = async () => {
    //get token

    await AsyncStorage.setItem('userToken', 'abc'); //example only
    this.props.navigation.navigate('Home');
  };

  render() {
    return(
      <View style={[loginStyles.container, Platform.isPortrait() ? loginStyles.containerPortrait : loginStyles.containerLandscape]}>
        <TextInput
          style={ loginStyles.textInput}
          placeholder='Email'
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          autoCapitalize = 'none'
        />
        <TextInput
          style={loginStyles.textInput}
          placeholder='Password'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          autoCapitalize='none'
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={ generalStyles.submitButton }
          onPress = { this._signInAsync}>
          <Text style={generalStyles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
