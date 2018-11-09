import { StyleSheet } from 'react-native';

const locationStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
  flex: 1,
  width: 300,
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

export { locationStyles }
