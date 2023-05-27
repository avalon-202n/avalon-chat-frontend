import { windowHeight, windowWidth } from '@enum/size';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  //AddfriendModal
  container: {
    flex: 1,
  },
  containerView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  topContents: {
    flex: 0.7,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: windowHeight * 15,
  },
  topIconBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIconBtn: {
    marginLeft: windowWidth * 5,
    width: windowWidth * 30,
    height: windowWidth * 30,
  },
  backBtnText: {
    fontSize: windowWidth * 18,
  },
  confirmBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: windowWidth * 10,
  },
  confirmText: {
    fontSize: windowWidth * 20,
  },
  typeAddfriendView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  typeAddfriendBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeAddfriendIcon: {
    width: windowWidth * 50,
    height: windowWidth * 50,
  },
  bottomContents: {
    flex: 3.5,
    backgroundColor: 'black',
  },
  //AddfriendPlus
  inputContents: {
    flex: 0.1,
    marginHorizontal: windowWidth * 10,
    marginTop: windowHeight * 30,
    padding: windowWidth * 10,
  },
  inputText: {
    fontSize: windowWidth * 18,
    color: 'white',
    padding: windowWidth * 7,
  },
  lineView: {
    width: '100%',
    height: windowHeight * 1,
    borderStyle: 'solid',
    borderColor: 'white',
    marginTop: windowHeight * 5,
    backgroundColor: 'white',
  },
  descView: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: windowHeight * 5,
    padding: windowWidth * 10,
  },
  descText: {
    color: 'white',
    fontSize: windowWidth * 13,
  },
  //AddfriendSearch
  searchContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: windowHeight * 20,
  },
  searchContents: {
    width: windowWidth * 320,
    height: windowWidth * 320,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: windowWidth * 150,
    height: windowWidth * 150,
    borderRadius: windowWidth * 10,
  },
  profileText: {
    color: 'white',
    marginVertical: windowHeight * 10,
    fontSize: windowWidth * 15,
  },
  addfriendBtn: {
    width: windowWidth * 150,
    height: windowHeight * 30,
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  addfriendText: {
    textAlign: 'center',
    color: 'white',
    fontSize: windowWidth * 15,
    fontWeight: '600',
  },
});

export default styles;
