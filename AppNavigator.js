import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import AuthLoadingScreen from './src/screens/AuthLoading';
import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import LocationsScreen from './src/screens/Locations';
// import ProfileScreen from './src/screens/Profile';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Locations: LocationsScreen,
  // Profile: ProfileScreen,
});
const AuthStack = createStackNavigator({
  Login: LoginScreen
});

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
