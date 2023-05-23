import { windowHeight, windowWidth } from '@enum/size';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  //TopView
  topContainer: {
    width: windowWidth * 360,
    height: windowHeight * 50,
    backgroundColor: 'white',
    marginTop: windowHeight * 20,
  },
  topTitleContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  topTitleView: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  topRightView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  topTitleFont: {
    fontSize: windowWidth * 25,
    marginLeft: windowWidth * 20,
  },
  topRightIconView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  topRightIcon: {
    width: windowWidth * 30,
    height: windowWidth * 30,
    marginRight: windowWidth * 3,
  },
  //BottomView
  bottomContent: {
    width: windowWidth * 360,
    height: windowHeight * 50,
    backgroundColor: '#F3F3F3',
  },
  contentsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: windowHeight * 10,
  },
  bottomContentImage: {
    width: windowWidth * 30,
    height: windowWidth * 30,
  },
  //MidView
  profileContainer: {
    flexDirection: 'row',
    width: windowWidth * 360,
  },
  profileImg: {
    marginLeft: windowWidth * 10,
    width: windowWidth * 50,
    height: windowWidth * 50,
    maxWidth: windowWidth * 100,
    maxHeight: windowHeight * 100,
    borderRadius: windowWidth * 10,
    margin: windowWidth * 7,
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
  contentText: {
    marginLeft: windowWidth * 10,
  },
  settingLineView: {
    width: '100%',
    height: windowHeight * 5,
    backgroundColor: '#f4f4f5',
  },
});

export default styles;
