import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00f260',
    justifyContent: 'center',
  },
  containerPortrait: {
    padding: 15,
  },
  containerLandscape: {
    padding: 100,
  },
  textInput: {
    margin: 15,
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export { loginStyles }
