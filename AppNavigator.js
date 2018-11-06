import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Locations from './src/screens/Locations';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  Locations: { screen: Locations }
});

export default AppNavigator;
