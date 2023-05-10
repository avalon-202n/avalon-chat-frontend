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

// export const emailState = atom({
//   key: 'emailState',
//   default: '',
// }); // 이메일

// export const isPhotoState = atom({
//   key: 'isPhotoState',
//   default: '',
// }); // 프로필 사진 여부

// export const photoPathState = atom({
//   key: 'photoPathState',
//   default: '',
// }); // 프로필 사진 경로

export const userInfo = atom({
  key: 'userInfo',
  default: '',
});
