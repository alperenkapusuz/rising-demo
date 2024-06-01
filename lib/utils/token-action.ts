import Cookies from 'js-cookie';

export const setToken = (token: string, rememberMeStatus?: boolean) => {
  Cookies.set('token', token, { expires: rememberMeStatus ? 10 : 5, secure: true, sameSite: 'strict' });
};

export const deleteToken = () => {
  Cookies.remove('token');
};

export const getToken = () => {
  return Cookies.get('token');
};
