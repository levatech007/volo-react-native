import { StyleSheet } from 'react-native';

const generalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00f260',
    padding: 30,
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

export { generalStyles }
