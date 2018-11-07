import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from './assets/ButtonStyles';

class WideButton extends Component {
  constructor() {
    super();
    this.goToPage = this.goToPage.bind(this);
  }

  goToPage() {
    this.props.goToPage(this.props.title)
  }

  render() {
    return(
      <TouchableOpacity style={ buttonStyles.buttonStyle } onPress={ this.goToPage }>
        <Text style={ buttonStyles.buttonText }>{ this.props.title }</Text>
      </TouchableOpacity>
    )
  }
}

export default WideButton;
