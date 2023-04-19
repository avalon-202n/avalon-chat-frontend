import { atom } from 'recoil';

export const isPhotoState = atom({
  key: 'isPhotoState',
  default: '',
});
// 프로필 사진 여부
export const photoPathState = atom({
  key: 'photoPathState',
  default: '',
});
// 프로필 사진 경로
export const emailState = atom({
  key: 'emailState',
  default: '',
});
// 프로필 이메일
export const profileMessageState = atom({
  key: 'profileMessageState',
  default: '',
});
// 프로필 메세지
export const phoneNumberState = atom({
  key: 'phoneNumberState',
  default: '',
});
// 휴대폰 번호
