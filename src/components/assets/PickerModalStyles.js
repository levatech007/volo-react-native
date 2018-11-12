import { StyleSheet } from 'react-native';

const modalStyles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: "gray",
    borderBottomWidth: 1
  },
  input: {
    height: 40
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end"
  },
  buttonContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
    padding: 4,
    backgroundColor: "#ececec"
  }
});

export { modalStyles }
