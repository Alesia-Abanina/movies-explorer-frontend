export const fetchAsync = async (url, {
  method = 'GET',
  body = null,
  credentials = 'include',
}) => {
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: body && JSON.stringify(body),
    credentials,
  });

  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
};