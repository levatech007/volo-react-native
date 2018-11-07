import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { homeStyles } from './assets/HomeStyles';
import { generalStyles } from './assets/GeneralStyles';
import Logo from './images/Volo-logo.png';
import WideButton from '../components/WideButton';
import Alert from '../components/Alert';

type Props = {};
class Home extends Component<Props> {
  constructor() {
    super();
    this.state= {
      user: 'Sam',
      buttonNames: ["Locations", "Profile","Logout"],
    }
    this.goToPage = this.goToPage.bind(this);
  }

  goToPage(selection) {
    this.props.navigation.navigate(selection);
  }

  render() {
    return (
      <View style={[generalStyles.container, homeStyles.container]}>
        <Alert />
          <Image source={ Logo } resizeMode='contain' style={homeStyles.logo}/>
          {
            this.state.buttonNames.map((title, idx) => {
              return(
                <WideButton title={ title } key={ idx } goToPage={ this.goToPage }></WideButton>
              )
            })
          }
      </View>
    );
  }
}

export default Home;
