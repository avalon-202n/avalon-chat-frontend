import { windowHeight } from '@enum/size';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  checkText: {
    fontSize: 15,
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
