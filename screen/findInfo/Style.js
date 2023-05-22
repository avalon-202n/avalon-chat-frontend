import { StyleSheet } from 'react-native';
import { windowWidth, windowHeight } from '@enum/size';

const styles = StyleSheet.create({
  findContainer: {
    display: 'flex',
    marginTop: windowHeight * 50,
  },

  // 페이지 제목
  title: {
    textAlign: 'center',
    fontSize: windowWidth * 20,
    fontWeight: 'bold',
  },

  // Input만 있는 경우
  textField: {
    margin: windowWidth * 15,
  },
  textInput: {
    borderBottomWidth: windowWidth * 1,
    paddingBottom: windowHeight * 5,
    borderColor: 'gray',
  },

  // 한줄에 input 과 버튼 두개 가 있는 경우
  DualField: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: windowWidth * 15,
  },
  DualInput: {
    width: '70%',
    borderBottomWidth: windowWidth * 1,
    paddingBottom: windowHeight * 5,
    borderColor: 'gray',
  },
  DualButton: {
    width: '25%',
    marginLeft: windowWidth * 10,
    padding: windowHeight * 5,
    borderRadius: windowWidth * 5,
    backgroundColor: '#fee631',
    textAlign: 'center',
  },
  DualButtonText: {
    textAlign: 'center',
  },
  // 하단 버튼
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

  // 안내 문구
  guideBox: {
    margin: windowWidth * 15,
    backgroundColor: '#C5C5C5',
    padding: windowWidth * 16,
    borderRadius: windowWidth * 5,
  },
  guideTitle: {
    fontWeight: 'bold',
    fontSize: windowWidth * 12,
    color: '#514F4F',
    marginBottom: windowHeight * 5,
  },
  guideContent: {
    fontSize: windowWidth * 12,
    color: '#787878',
  },
});

export default styles;
