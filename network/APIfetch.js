import { S3_URL_PROFILE } from "@enum/cloud";

export const APIfetch = async (path, body, token) => {
  try {
    const res = await fetch(`${API_URL}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const APIfetchMedia = async (path, body, token) => {
  try {
    const res = await fetch(`${S3_URL_PROFILE}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: body,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
