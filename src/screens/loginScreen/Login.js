import React, { Component } from 'react';
import { View, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';
import { loginStyles } from './LoginStyles';
import Platform from '../../../Platform.js';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
    this.logUserIn = this.logUserIn.bind(this);
  }

  logUserIn() {
    Alert.alert(this.state.password + ' ' + this.state.email)
  }

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
          style={ loginStyles.submitButton }
          onPress = { this.logUserIn}>
          <Text style={loginStyles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
