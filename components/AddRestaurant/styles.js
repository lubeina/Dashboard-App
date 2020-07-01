import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authButton: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "black",
    marginTop: 30,
  },
  authButtonText: {
    color: "snow",
    fontWeight: "bold",
    fontSize: 18,
  },
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "snow",
    paddingRight: 60,
    paddingLeft: 60,
  },
  authOther: {
    color: "black",
    marginTop: 15,
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    color: "black",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  authTitle: {
    color: "black",
    fontSize: 24,
    marginBottom: 40,
    borderBottomColor: "black",
  },
  profileImage: {
    height: 75,
    width: 150,
    flex: 0.5,
    marginBottom: 10,
  },
  profiletext: {
    textAlign: "left",
    color: "black",
    fontSize: 16,
  },
});

export default styles;
