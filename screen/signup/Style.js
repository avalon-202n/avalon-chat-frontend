import { windowHeight, windowWidth } from '@enum/size';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  //Signup
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_withoutKeyboard: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: windowHeight * 50,
  },
  informView: {
    marginLeft: windowWidth * 10,
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
    backgroundColor: '#ADABE8',
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
    justifyContent: 'flex-end',
    position: 'absolute',
  },
  signupBtn: {
    flex: 1,
    backgroundColor: '#ADABE8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupBtnGray: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: windowWidth * 20,
  },
  //SignupProfile
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
  withoutKeyboard: {
    marginTop: windowHeight * 50,
  },
  photoView: {
    width: windowWidth * 330,
    height: windowHeight * 200,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: windowWidth * 10,
    borderWidth: windowWidth * 0.5,
    marginVertical: windowHeight * 40,
  },
  defaultPhotoImage: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: windowWidth * 50,
    height: windowWidth * 50,
  },
  isPhotoImage: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: windowWidth * 330,
    height: windowWidth * 250,
    borderRadius: 15,
  },
  assignBtn: {
    width: '100%',
    height: windowHeight * 50,
    backgroundColor: '#ADABE8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  assignBtnGray: {
    width: '100%',
    height: windowHeight * 50,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  assignBtnText: {
    fontSize: windowWidth * 20,
  },
});

export default styles;
