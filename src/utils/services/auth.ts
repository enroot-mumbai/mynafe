import jwt_decode from 'jwt-decode';

export const isLoggedIn = (): boolean => {
  if (typeof window === `undefined`) return false;

  if (localStorage.getItem('token')) return true;
  return false;
};

interface User {
  additionalEmail: string;
  additionalMobileNumber: string;
  corporateToken: number;
  country: string;
  countryCode: string;
  countryNameCode: string;
  currencyCode: string;
  currencySymbol: string;
  email: string;
  exp: number;
  freeExpiry: string;
  freeUser: number;
  gender: number;
  iat: number;
  id: number;
  isAnonymousUser: boolean;
  isEmailEnable: number;
  isNotifyEnable: number;
  isSmsEnable: number;
  loginTaken: string;
  password: string;
  resetToken: string;
  resetTokenExpiration: string;
  socialId: string;
  timeZone: string;
  userName: string;
  userToken: number;
  userType: number;
}

export const getUser = (): User | undefined => {
  if (typeof window === `undefined`) return undefined;
  const token = localStorage.getItem('token');
  if (token) {
    const jwt = token.split(' ')[1];
    const decoded  = jwt && jwt_decode(jwt);
    return decoded;
  }
  return undefined;
};

export const getToken = (): string => {
  if (typeof window === `undefined`) return '';
  return localStorage.getItem('token');
};

export const setRoute = (route: string): void => {
  if (typeof window === `undefined`) return;
  localStorage.setItem('stateRoute', route);
};

export const getRoute = (): string => {
  if (typeof window === `undefined`) return '';
  return localStorage.getItem('stateRoute');
};

export const removeRoute = (): void => {
  if (typeof window === `undefined`) return;
  localStorage.removeItem('stateRoute');
};
