// react
import React from 'react';
import { View } from 'react-native';
// custom
// screen
import { ChatScreen } from '@screen/chat';
import { FriendScreen } from '@screen/friend';
import { SettingScreen } from '@screen/setting';

// enum
import { contents } from '@enum/state';
const MidView = ({ bottomContents }) => {
  return (
    <View style={{ flex: 1 }}>
      {bottomContents === contents.friend && <FriendScreen />}
      {bottomContents === contents.chat && <ChatScreen />}
      {bottomContents === contents.setting && <SettingScreen />}
    </View>
  );
};
export default MidView;
