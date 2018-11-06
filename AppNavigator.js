import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/homeScreen/Home';
import Login from './src/screens/loginScreen/Login';



const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login }
});

export default AppNavigator;
