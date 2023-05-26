import { windowHeight, windowWidth } from '@enum/size';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  //Signup
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: windowWidth * 20,
    fontWeight: 'bold',
    marginBottom: windowHeight * 5,
  },
  profileTitle: {
    fontSize: windowWidth * 20,
    marginTop: windowHeight * 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: windowHeight * 5,
  },
  container_withoutKeyboard: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: windowHeight * 10,
  },
  informView: {
    marginLeft: windowWidth * 10,
    width: windowWidth * 320,
    height: windowHeight * 12,
    justifyContent: 'center',
  },
  informText: {
    fontSize: 12,
    color: '#5c5c5c',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: windowHeight * 6,
  },
  inputText: {
    width: windowWidth * 250,
    height: windowHeight * 40,
    padding: windowWidth * 10,
    borderColor: 'gray',
    marginRight: windowWidth * 5,
    fontSize: windowWidth * 12,
    borderBottomWidth: windowWidth * 1,
    paddingBottom: windowHeight * 5,
    borderColor: 'gray',
  },
  checkBox: {
    width: windowWidth * 70,
    height: windowHeight * 25,
    backgroundColor: '#ADABE8',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: windowWidth * 7,
    borderColor: 'white',
  },
  checkBoxText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: windowWidth * 12,
    color: '#f0f0f0',
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
    fontSize: windowWidth * 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#514F4F',
  },
  signupView: {
    width: '100%',
    height: windowHeight * 50,
    bottom: windowHeight * 0,
    justifyContent: 'flex-end',
    position: 'absolute',
  },
  timerView: {
    marginTop: 20,
    position: 'absolute',
    top: '-5%',
    left: '60%',
  },

  signupBtn: {
    flex: 1,
    backgroundColor: '#5A45F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupBtnGray: {
    flex: 1,
    backgroundColor: '#ADABE8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: windowWidth * 16,
    color: '#fff',
  },
  //SignupProfile
  inputProfileText: {
    width: windowWidth * 340,
    height: windowHeight * 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    marginRight: windowWidth * 5,
    fontSize: windowWidth * 15,
    padding: windowWidth * 10,
    marginBottom: windowHeight * 8,
    borderBottomWidth: windowWidth * 1,
    paddingBottom: windowHeight * 5,
    borderColor: 'gray',
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
  photoImageView: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  photoImage: {
    width: windowWidth * 330,
    height: windowWidth * 250,
    borderRadius: 15,
  },
  nonPhotoImage: {
    width: windowWidth * 100,
    height: windowWidth * 100,
  },
  signBtn: {
    width: '100%',
    height: windowHeight * 50,
    backgroundColor: '#5A45F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signBtnGray: {
    width: '100%',
    height: windowHeight * 50,
    backgroundColor: '#ADABE8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signBtnText: {
    fontSize: windowWidth * 16,
    color: '#fff',
  },
});

export default styles;
