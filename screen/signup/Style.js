import { windowHeight, windowWidth } from '@enum/size';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  //Signup
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  informView: {
    width: windowWidth * 320,
    height: windowHeight * 18,
    justifyContent: 'center',
  },
  informText: { fontSize: 15 },
  inputContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  inputText: {
    width: windowWidth * 250,
    height: windowHeight * 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: windowWidth * 1,
    borderRadius: windowWidth * 7,
    marginRight: windowWidth * 5,
    fontSize: windowWidth * 15,
    padding: windowWidth * 10,
  },
  checkBox: {
    width: windowWidth * 70,
    height: windowHeight * 35,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: windowWidth * 7,
    borderColor: 'white',
  },
  checkBoxText: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  passwordBoxView: {
    width: windowWidth * 70,
    height: windowHeight * 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: windowWidth * 7,
    borderColor: 'white',
    padding: windowWidth * 10,
  },
  passwordCheckText: {
    fontSize: windowWidth * 15,
    textAlign: 'center',
  },
  signupView: {
    width: '100%',
    height: windowHeight * 50,
    bottom: windowHeight * 0,
    backgroundColor: 'green',
    justifyContent: 'flex-end',
    position: 'absolute',
  },
  signupBtn: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: windowWidth * 20,
  },
  //SignupProfile
  defineView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputProfileText: {
    width: windowWidth * 340,
    height: windowHeight * 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: windowWidth * 1,
    borderRadius: windowWidth * 7,
    marginRight: windowWidth * 5,
    fontSize: windowWidth * 15,
    padding: windowWidth * 10,
    margin: windowWidth * 10,
  },
  photoView: {
    flex: 0.6,
    width: windowWidth * 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: windowWidth * 10,
    borderWidth: windowWidth * 0.5,
    marginBottom: windowHeight * 40,
  },
  photoImage: {
    width: windowWidth * 50,
    height: windowWidth * 50,
  },
  assignBtn: {
    width: '100%',
    height: windowHeight * 50,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  assignBtnText: {
    fontSize: windowWidth * 20,
  },
});

export default styles;
