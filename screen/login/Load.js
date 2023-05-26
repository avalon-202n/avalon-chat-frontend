// react
import { useEffect } from 'react';
// recoil
import { useRecoilValue } from 'recoil';
// store
import { idState } from 'store/User';
const LoadScreen = ({ navigation }) => {
  const id = useRecoilValue(idState);

  useEffect(() => {
    const loadUserInfo = () => {
      // friendList, chatList, etc.. 유저가 설정했던 정보 불러옴
      navigation.reset({ routes: [{ name: 'Home' }] });
    };

    try {
      loadUserInfo();
    } catch (err) {
      navigation.reset({ routes: [{ name: 'LoginSetup' }] });
    }
  }, []);
  return null;
};

export default LoadScreen;
