import React, { Component } from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  Platform,
  View,
  Picker,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import WideButton from '../components/WideButton';
import PickerModal from '../components/PickerModal';
import { locationStyles } from './assets/LocationStyles';
import { generalStyles } from './assets/GeneralStyles';


class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      selectedLocation: '',
      locationIsSelected: false,
      modalVisible: false,
      showLocationComponent: false,
      showWeatherComponent: false,
    }
    this.showLocationInfo=this.showLocationInfo.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8000/locations") //change to process.env['BACKEND_URL']
        .then((res) => {
          return res.json();
        }).then((locations) => {
          this.setState({
            locations: locations,
          });
    });
  }

  showLocationInfo() {
    this.setState({
      locationIsSelected: true,
    });
  }



  render() {
    return(
      <View style={ generalStyles.container }>
        { this.state.locationIsSelected ?
          <Text>{ this.state.selectedLocation }</Text> :
        <PickerModal
            showLocationInfo= { this.showLocationInfo }
            items={ this.state.locations }
            value={ this.state.selectedLocation }
            onValueChange={ (itemValue, itemIndex) =>
              this.setState({ selectedLocation: itemValue }) //move this into its own function!
            }
          />
        }
      </View>
    )
  }
}

export default Locations;
