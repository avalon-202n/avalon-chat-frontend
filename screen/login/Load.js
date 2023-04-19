// react
import { useEffect } from 'react';
// recoil
import { useRecoilValue } from 'recoil';
// store
import { idState } from 'store/User';
const LoadScreen = ({ navigation }) => {
  const id = useRecoilValue(idState);

  useEffect(() => {
    navigation.reset({ routes: [{ name: 'Home' }] });
  }, []);
  return null;
};

export default LoadScreen;
