import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { locationStyles } from './assets/LocationStyles';
import { generalStyles } from './assets/GeneralStyles';


class Locations extends Component {
  constructor() {
    super();
    this.state = {
      favColor: '',
      items: [
          {
              label: 'Red',
              value: 'red',
          },
          {
              label: 'Orange',
              value: 'orange',
          },
          {
              label: 'Blue',
              value: 'blue',
          },
      ],
    }
    this.selectLocation = this.selectLocation.bind(this);
  }

  selectLocation() {
    Alert.alert(this.state.favColor)
  }

  render() {
    return(
      <View style={ generalStyles.container }>
        <Text>Pick your location</Text>
        <RNPickerSelect
          items={this.state.items}
          placeholder={{}}
          onValueChange={(value) => {
              this.setState({
                  favColor: value,
              });
          }}>
          <TouchableOpacity style={generalStyles.submitButton} title='Locations' onPress={ this.selectLocation }>
            <Text style={generalStyles.submitButtonText}>See Locations</Text>
          </TouchableOpacity>
          </RNPickerSelect>
      </View>
    )
  }
}

export default Locations;
