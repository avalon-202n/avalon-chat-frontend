import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "@enum/size";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  //AddFriendModal
  addFriendContainer: {
    flex: 1,
    backgroundColor: "white",
    marginTop: windowHeight * 15,
  },
  headerBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: windowWidth * 360,
    height: windowHeight * 45,
  },
  confirmText: {
    fontSize: 20,
    marginTop: 10,
  },
  topViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: windowHeight * 5,
    width: windowWidth * 360,
    height: windowHeight * 60,
  },
  topBtnImage: {
    width: 50,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
  },
  middleViewContainer: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    opacity: "80%",
  },
  //ProfileModal
  backgroundImage: { position: "absolute", width: "100%", height: "100%" },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: windowHeight * 10,
  },
  CloseImage: {
    width: windowWidth * 30,
    height: windowWidth * 30,
    marginVertical: windowHeight * 20,
    marginLeft: windowWidth * 10,
  },
  starImage: {
    width: windowWidth * 30,
    height: windowWidth * 30,
    marginTop: windowHeight * 20,
    marginRight: windowWidth * 10,
  },
  instanceMessageBox: {
    backgroundColor: "white",
    marginBottom: windowHeight * 10,
    maxWidth: windowWidth * 260,
    maxHeight: windowHeight * 80,
    padding: windowWidth * 15,
  },
  profileContainer: {
    flex: 11,
    justifyContent: "flex-end",
    margin: 10,
  },
  profileContent: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: 10,
  },
  profileImage: {
    maxWidth: windowWidth * 100,
    maxHeight: windowWidth * 100,
    borderRadius: windowWidth * 25,
  },
  profileName: {
    fontSize: windowWidth * 15,
    fontWeight: "500",
    color: "white",
    marginVertical: windowHeight * 5,
  },
  profileMessage: {
    marginLeft: windowWidth * 5,
    fontSize: windowWidth * 12,
    color: "white",
  },
  bottomContent: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  bottomImages: {
    width: windowWidth * 30,
    height: windowWidth * 30,
    justifyContent: "center",
    alignSelf: "center",
  },
  bottomfont: {
    color: "white",
    fontSize: windowWidth * 12,
    padding: windowWidth * 5,
  },
  settingLineView: {
    width: "100%",
    height: windowHeight * 1,
    backgroundColor: "#f4f4f5",
  },
});

export default styles;
