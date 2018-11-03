import React, {Component} from 'react';
import AppNavigator from './AppNavigator';

class App extends Component {
  constructor() {
    super();
    this.state={
      user: 'Sam'
    }
  }


  render() {
    return (
      <AppNavigator user={ this.state.user }/>
    );
  }
}

export default App;
