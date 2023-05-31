import { StyleSheet } from 'react-native';
import { windowWidth, windowHeight } from '@enum/size';
const styles = StyleSheet.create({
  profileContainer: {
    width: windowWidth * 360,
  },
  profileImg: {
    marginLeft: windowWidth * 10,
    width: windowWidth * 60,
    height: windowWidth * 60,
    maxWidth: 100,
    maxHeight: 100,
    borderRadius: 10,
    margin: 7,
  },
  profileInclude: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  profileName: {
    marginTop: windowHeight * 5,
    marginLeft: windowWidth * 5,
    marginBottom: windowHeight * 5,
    fontSize: windowWidth * 15,
    fontWeight: '500',
  },
  profileMessage: {
    marginLeft: windowWidth * 5,
    fontSize: windowWidth * 12,
  },
  InstanceBox: {
    flex: 1,
    marginVertical: windowHeight * 7,
    width: windowWidth * 150,
    marginLeft: windowWidth * 70,
    backgroundColor: '#cccccc',
    justifyContent: 'center',
  },

  InstanceMessage: {
    marginLeft: windowWidth * 10,
    fontSize: windowWidth * 12,
  },
  contentText: {
    marginLeft: windowWidth * 10,
  },
  settingLineView: {
    width: '100%',
    height: windowHeight * 5,
    backgroundColor: '#f4f4f5',
  },

  friendContainer: {
    width: windowWidth * 320,
    marginTop: windowHeight * 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    fontSize: windowWidth * 18,
    fontWeight: '600',
    marginBottom: windowWidth * 6,
  },
  bio: {
    fontSize: windowWidth * 12,
    color: '#7B6BEE',
  },
});

export default styles;
