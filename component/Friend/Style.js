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
    marginTop: 15,
  },
  topIconBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIconBtn: {
    marginLeft: 5,
    width: 30,
    height: 30,
  },
  backBtnText: {
    fontSize: 18,
  },
  confirmBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  confirmText: {
    fontSize: 20,
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
    width: 50,
    height: 50,
  },
  bottomContents: {
    flex: 3.5,
    backgroundColor: 'black',
  },
  //AddfriendPlus
  inputContents: {
    flex: 0.1,
    marginHorizontal: 10,
    marginTop: 30,
    padding: 10,
  },
  inputText: {
    fontSize: 18,
    color: 'white',
    padding: 7,
  },
  lineView: {
    width: '100%',
    height: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    marginTop: 5,
    backgroundColor: 'white',
  },
  descView: {
    flex: 1,
    alignSelf: 'flex-start',
    marginHorizontal: 10,
    marginTop: 5,
    padding: 10,
  },
  descText: {
    color: 'white',
    fontSize: 13,
  },
});

export default styles;
