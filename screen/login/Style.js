import { StyleSheet } from 'react-native';
import { windowWidth, windowHeight } from '@enum/size';
const styles = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    marginTop: windowHeight * 50,
  },
  loginTitle: {
    fontSize: windowWidth * 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textField: {
    margin: windowWidth * 15,
  },
  textInput: {
    borderBottomWidth: windowWidth * 1,
    paddingBottom: windowHeight * 5,
    borderColor: 'gray',
  },
  buttonField: {
    margin: windowWidth * 15,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 330,
    height: windowHeight * 35,
    backgroundColor: '#fee631',
    borderRadius: windowWidth * 5,
  },
  linkFiled: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: windowWidth * 15,
  },

  link: {
    margin: windowWidth * 5,
  },
  findAccountLink: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default styles;
