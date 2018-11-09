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
import { locationStyles } from './assets/LocationStyles';
import { generalStyles } from './assets/GeneralStyles';


class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      selectedLocation: '',
      modalVisible: false,
    }
    this.selectLocation = this.selectLocation.bind(this);
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

  selectLocation() {
    this.setState({
       modalVisible: true
     })
     
  }

  render() {
    return(
      <View style={ generalStyles.container }>
        <Text>Pick your location:</Text>

        <WideButton goToPage={ this.selectLocation } title="Find a location:"/>
        <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
          >
          <TouchableWithoutFeedback
              onPress={() => this.setState({ modalVisible: false })}>
              <View style={locationStyles.modalContainer}>
                <View style={locationStyles.buttonContainer}>
                  <Text
                    style={{ color: "blue" }}
                    onPress={() => this.setState({ modalVisible: false })}
                  >
                    Done
                  </Text>
                </View>
                <View>
                  <Picker
                    selectedValue={this.state.selectedLocation}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectedLocation: itemValue})}>
                    {
                      this.state.locations.map((location, idx) => {
                        return(
                          <Picker.Item label={ location.name } value={ location.name } key={ idx }/>
                        )
                      })
                    }

                  </Picker>
                </View>
              </View>
            </TouchableWithoutFeedback>
        </Modal>
      </View>
    )
  }
}

export default Locations;
