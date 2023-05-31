import { windowHeight, windowWidth } from '@enum/size';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  //TopView
  topContainer: {
    width: windowWidth * 360,
    height: windowHeight * 220,
    backgroundColor: '#F0F1F5',
    marginTop: windowHeight * 20,
  },
  topTitleContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  topTitleView: {
    marginTop: windowHeight * 5,
  },
  topRightView: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: windowHeight * 8,
  },
  topTitleFont: {
    fontWeight: 'bold',
    fontSize: windowWidth * 25,
    marginLeft: windowWidth * 20,
  },
  topRightIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  topRightIcon: {
    width: windowWidth * 26,
    height: windowWidth * 26,
    marginRight: windowWidth * 5,
  },
  myProfileContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    paddingLeft: windowWidth * 20,
    paddingRight: windowWidth * 20,
    marginBottom: windowHeight * 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  myDataContainer: {
    width: '60%',
  },
  myImageContainer: {
    width: '40%',
  },

  activeTap: {
    fontSize: windowHeight * 20,
    color: '#5A45F7',
    borderBottomWidth: windowWidth * 2,
    borderBottomColor: '#5A45F7',
    width: windowWidth * 100,
    textAlign: 'center',
  },
  normalTap: {
    fontSize: windowHeight * 20,
    width: windowWidth * 100,
    textAlign: 'center',
  },
  myName: {
    fontSize: windowHeight * 20,
    paddingBottom: windowHeight * 14,
  },
  myBio: {
    color: '#7B6BEE',
    fontSize: windowHeight * 14,
  },
  myImg: {
    marginLeft: windowWidth * 10,
    width: windowWidth * 100,
    height: windowWidth * 100,
    maxWidth: windowWidth * 100,
    maxHeight: windowHeight * 100,
    borderRadius: windowWidth * 45,
    margin: windowWidth * 7,
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
