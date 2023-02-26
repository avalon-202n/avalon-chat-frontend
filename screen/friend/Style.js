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
  },
  profileInclude: {
    justifyContent: "center",
    alignSelf: "center",
  },
  profileNameStyle: {
    marginTop: windowHeight * 5,
    marginLeft: windowWidth * 5,
    marginBottom: windowHeight * 5,
    fontSize: windowWidth * 15,
    fontWeight: "500",
  },
  profileMessageStyle: {
    marginLeft: windowWidth * 5,
    fontSize: windowWidth * 12,
  },
  InstanceBox: {
    flex: 1,
    marginVertical: windowHeight * 7,
    marginLeft: windowWidth * 50,
    marginRight: windowWidth * 10,
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
