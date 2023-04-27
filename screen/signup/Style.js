import { windowHeight, windowWidth } from '@enum/size';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 3,
    flexDirection: 'row',
  },
  SignupBtnContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  SignupBtn: {
    flex: 1,
    backgroundColor: 'pink',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignupText: {
    fontSize: windowWidth * 20,
  },
  checkText: {
    fontSize: windowWidth * 15,
    marginBottom: windowHeight * 15,
  },
  lineView: {
    width: '90%',
    height: windowHeight * 1,
    backgroundColor: 'gray',
    marginBottom: windowHeight * 15,
  },
});

export default styles;
