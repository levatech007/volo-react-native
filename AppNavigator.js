import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/homeScreen/Home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
});

export default AppNavigator;
