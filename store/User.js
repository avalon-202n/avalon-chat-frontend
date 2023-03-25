import { atom } from "recoil";

export const isPhotoState = atom({
  key: "isPhotoState",
  default: "",
}); // 프로필 사진 여부

export const photoPathState = atom({
  key: "photoPathState",
  default: "",
}); // 프로필 사진 경로
