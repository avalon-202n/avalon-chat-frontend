import { atom } from "recoil";
// Util
import * as Storage from "@util/Storage.js";
export const idState = atom({
  key: "idState",
  default: "",
}); // 고유 아이디

export const nameState = atom({
  key: "nameState",
  default: "",
}); // 이름

export const emailState = atom({
  key: "emailState",
  default: "",
}); // 이메일

export const isPhotoState = atom({
  key: "isPhotoState",
  default: "",
}); // 프로필 사진 여부

export const photoPathState = atom({
  key: "photoPathState",
  default: "",
}); // 프로필 사진 경로

export const profileMessageState = atom({
  key: "profileMessageState",
  default: "",
}); // 프로필 메시지

export const phoneNumberState = atom({
  key: "phoneNumberState",
  default: "",
}); // 휴대폰 번호
