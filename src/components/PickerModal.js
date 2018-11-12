import React, { Component } from "react";
import {
  Modal,
  TouchableWithoutFeedback,
  Text,
  View,
  Picker,
  TouchableOpacity
} from "react-native";
import WideButton from './WideButton';
import { modalStyles } from './assets/PickerModalStyles';


class PickerModal extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false
    }
    this.showPickerModal = this.showPickerModal.bind(this);
    this.hidePickerModal = this.hidePickerModal.bind(this);
  }

  showPickerModal() {
    this.setState({
      modalVisible: true
    })
  }

  hidePickerModal() {
    this.setState({
      modalVisible: false,
    })
    this.props.showLocationInfo();
  }

  render() {
    return (
        <View style={ modalStyles.inputContainer }>

          <WideButton title="Select location" goToPage={ this.showPickerModal } />

          <Modal
            animationType="slide"
            transparent={true}
            visible={ this.state.modalVisible }
          >
            <TouchableWithoutFeedback
              onPress={() => this.setState({ modalVisible: false })}
            >
              <View style={ modalStyles.modalContainer }>
                <View style={ modalStyles.buttonContainer }>
                  <Text
                    onPress={ this.hidePickerModal }
                  >Done</Text>
                </View>
                <View>
                  <Picker
                    selectedValue={ this.props.value }
                    onValueChange={ this.props.onValueChange }
                  >
                    { this.props.items.map((item, idx) => (
                      <Picker.Item
                        key={ idx }
                        label={ item.name }
                        value={ item.name }
                      />
                    ))
                  }
                  </Picker>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      );
  }
};

export default PickerModal;
