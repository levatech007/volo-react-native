import React, { Component } from 'react';
import { ScrollView, Image, TouchableOpacity, Text } from 'react-native';
import { generalStyles } from './assets/GeneralStyles';
import { profileStyles } from './assets/ProfileStyles';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: 'Sam'
    }
  }

  render() {
    return(
      <ScrollView>
        <Text>Hello { this.state.user }</Text>
      </ScrollView>
    )
  }
}

export default Profile;
