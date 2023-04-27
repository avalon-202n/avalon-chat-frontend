import { API_URL } from '@enum/server';

export const APIfetch = async (path, body) => {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
