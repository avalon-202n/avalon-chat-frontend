import { windowHeight, windowWidth } from '@enum/size';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noticeView: {
    width: windowWidth * 320,
    height: windowHeight * 15,
  },
  inputContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  inputText: {
    width: windowWidth * 250,
    height: windowHeight * 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    marginRight: 5,
    fontSize: 15,
    padding: 10,
  },
  checkBox: {
    width: windowWidth * 70,
    height: windowWidth * 50,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 7,
    borderColor: 'white',
  },
  checkBoxText: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  passwordBoxView: {
    width: windowWidth * 70,
    height: windowWidth * 50,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'white',
  },
  passwordCheckText: {
    fontSize: 15,
    textAlign: 'center',
  },
  signupView: {
    width: '100%',
    height: 50,
    bottom: 0,
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
});

export default styles;
