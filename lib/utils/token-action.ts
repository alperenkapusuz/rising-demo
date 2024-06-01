import Cookies from 'js-cookie';

//This is the section where the token is stored in the cookie. If you say Remember me in this section,
// it is stored in the cookie for 10 days
export const setToken = (token: string, rememberMeStatus?: boolean) => {
  Cookies.set('token', token, { expires: rememberMeStatus ? 10 : 5, secure: true, sameSite: 'strict' });
};

export const deleteToken = () => {
  Cookies.remove('token');
};

export const getToken = () => {
  return Cookies.get('token');
};
