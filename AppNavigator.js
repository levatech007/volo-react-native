import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/Home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
});

export default AppNavigator;
