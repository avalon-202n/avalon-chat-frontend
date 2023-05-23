import { atom } from 'recoil';
// Util
export const idState = atom({
  key: 'idState',
  default: '',
}); // 고유 아이디

export const nameState = atom({
  key: 'nameState',
  default: '',
}); // 이름

export const userInfo = atom({
  key: 'userInfo',
  default: '',
});
// 유저정보
