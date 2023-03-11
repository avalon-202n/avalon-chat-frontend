import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "@enum/size";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  profileImg: {
    marginLeft: windowWidth * 10,
    width: windowWidth * 50,
    height: windowWidth * 50,
    maxWidth: 100,
    maxHeight: 100,
    borderRadius: 10,
    margin: 7,
  },
  profileInclude: {
    justifyContent: "center",
    alignSelf: "center",
  },
  profileName: {
    marginTop: windowHeight * 5,
    marginLeft: windowWidth * 5,
    marginBottom: windowHeight * 5,
    fontSize: windowWidth * 15,
    fontWeight: "500",
  },
  profileMessage: {
    marginLeft: windowWidth * 5,
    fontSize: windowWidth * 12,
  },
  InstanceBox: {
    flex: 1,
    marginVertical: windowHeight * 7,
    width: windowWidth * 150,
    marginLeft: windowWidth * 70,
    backgroundColor: "#cccccc",
    justifyContent: "center",
  },
  InstanceMessage: {
    marginLeft: windowWidth * 10,
    fontSize: windowWidth * 12,
  },
  contentText: {
    marginLeft: windowWidth * 10,
  },
  settingLineView: {
    width: "100%",
    height: windowHeight * 5,
    backgroundColor: "#f4f4f5",
  },
});

export default styles;
