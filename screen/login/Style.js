import { windowHeight, windowWidth } from '@enum/size';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  //LoginSetup
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
    fontSize: windowWidth * 40,
    fontWeight: 'bold',
    color: '#fff',
  },

  loginTextSetup: {
    marginTop: windowHeight * 200,
    marginBottom: windowHeight * 20,
  },
  loginBtnSetup: {
    marginRight: windowHeight * 10,
  },
  loginButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 330,
    height: windowHeight * 35,
    backgroundColor: '#fff',
    borderRadius: windowWidth * 5,
    marginBottom: windowHeight * 10,
  },
  signUpButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 330,
    height: windowHeight * 35,
    backgroundColor: '#f4f7fa',
    borderRadius: windowWidth * 5,
  },
  loginText: {
    fontSize: windowWidth * 12,
    fontWeight: '500',
  },
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
    backgroundColor: '#5A45F7',
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
  eyeIcon: {
    position: 'absolute',
    top: '25%',
    left: '93%',
  },
  eyeIconImage: { width: windowWidth * 20, height: windowWidth * 20 },
});

export default styles;
