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
  submitButton: {
      backgroundColor: 'gray',
      borderRadius: 3,
      padding: 10,
      margin: 15,
      height: 40,
      alignItems: 'center',
   },
   submitButtonText:{
      color: 'white'
   }
});

export { loginStyles }
