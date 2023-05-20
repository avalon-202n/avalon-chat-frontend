import { windowHeight, windowWidth } from '@enum/size';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  //ProfileModal
  backgroundImage: { position: 'absolute', width: '100%', height: '100%' },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    backgroundColor: 'white',
    marginBottom: windowHeight * 10,
    maxWidth: windowWidth * 260,
    maxHeight: windowHeight * 80,
    padding: windowWidth * 15,
  },
  profileContainer: {
    flex: 11,
    justifyContent: 'flex-end',
    margin: windowWidth * 10,
  },
  profileContent: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: windowHeight * 10,
  },
  profileImage: {
    width: windowWidth * 100,
    height: windowWidth * 100,
    borderRadius: windowWidth * 25,
  },
  profileName: {
    fontSize: windowWidth * 15,
    fontWeight: '500',
    color: 'white',
    marginVertical: windowHeight * 5,
  },
  profileMessage: {
    marginLeft: windowWidth * 5,
    fontSize: windowWidth * 12,
    color: 'white',
  },
  bottomContent: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
  bottomImages: {
    marginLeft: windowWidth * 10,
    width: windowWidth * 35,
    height: windowWidth * 35,
    padding: windowWidth * 5,
  },
  bottomfont: {
    color: 'white',
    fontSize: windowWidth * 12,
    alignSelf: 'center',
  },
  settingLineView: {
    width: '100%',
    height: windowHeight * 1,
    backgroundColor: '#f4f4f5',
  },
  editTopView: {
    marginTop: windowHeight * 25,
  },
  editTopRight: {
    marginRight: windowWidth * 10,
  },
  editTopLeft: {
    marginLeft: windowWidth * 10,
  },
  editTopText: {
    fontSize: windowWidth * 20,
    color: 'white',
  },
  //profileEditModal
  profileEditView: {
    position: 'absolute',
    right: 0,
    top: '92%',
  },
});

export default styles;
