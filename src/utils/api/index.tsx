import axios from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { nanoid } from 'nanoid';
import { API_URL } from '../config/environment';
import { getToken } from '../services/auth';

// creates and axios instance with base url
const axiosInstance = axios.create({
  baseURL: `${API_URL}`,
});

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('employee');
  localStorage.removeItem('sessionId');
  window.location.replace('/');
};

// Add a request interceptor which adds the configuration in all the requests
axiosInstance.interceptors.request.use(
  async (config) => {
    // const { timezone } = useContext(UserPropsContext);

    // stores the session id present in localStorage
    let sessionId: any = localStorage.getItem('sessionId');

    // if session ID is empty in localStorage then creates a new unique session ID and and sores in localStorage
    if (!sessionId) {
      sessionId = nanoid();
      localStorage.setItem('sessionId', sessionId);
    }

    // if there's session id then adds the same into the header
    if (sessionId) {
      config.headers['X-SESSION-ID'] = sessionId;
    }
    // sets the content type to json
    config.headers['Content-Type'] = 'application/json';
    // config.headers['timezone'] = timezone;
    return config;
  },
  (error) => {
    console.error('Error while setting up axios request interceptor,', error);
  }
);

// Add a response interceptor which checks for error code for all the requests
axiosInstance.interceptors.response.use(undefined, async (err) => {
  //   // stores the original request (later used to retry the request)
  //   let originalRequest = err.config;

  //   // retries if err is 401 or 403 and if request is already not tried once
  //   if ((err?.response?.status === 403 || err?.response?.status === 401) && !originalRequest._retry) {
  //     originalRequest._retry = true;

  //   } else {
  //     // checkErrorCode(err);
  //     return Promise.reject(err);
  //   }
  if (err?.response?.status === 401) {
    return logout();
    // localStorage.removeItem('token');
    //   localStorage.removeItem('employee');
    //   if (ACCESS_MODE === 'admin') {
    //     window.location.replace('/dashboard/login');
    //   } else {
    //     window.location.replace('/');
    //   }
  }
  return Promise.reject(err);
});

interface RequestParams {
  url: string;
  method?: string;
  isAuthenticated?: boolean;
  data?: any;
  header?: object;
}

const request = async ({
  url,
  method = 'GET',
  isAuthenticated = false,
  data = undefined,
  header = {},
}: RequestParams) => {
  return new Promise((resolve, reject) => {
    //  sets the options which is passed to axios to make the request
    const options: any = {
      method,
      url,
    };

    // if the method is either POST, PUT or DELETE and data is present then adds data property to options
    if (['POST', 'PUT', 'DELETE'].includes(method) && data) {
      options.data = data;
    }

    // if request needs to be authenticated the Authorization is added in headers.
    // if access token is not present then throws error for the same
    if (isAuthenticated) {
      const token = getToken();

      // const accessToken = await getUserDetails();
      if (!token) {
        throw new Error('Access token is not available.');
      }
      const isTokenExpired =
        getCurrentUnixTimestamp() >= getExpirationTimeStamp(token);

      // if token is expired then logs out or continues
      if (isTokenExpired) {
        return logout();
      }

      // adds Authorization to headers in options
      options.headers = {
        Authorization: token,
        ...header,
      };

      // returns a promise with axios instance
      axiosInstance(options).then(resolve).catch(reject);
    } else {
      // returns a promise with axios instance
      axiosInstance(options).then(resolve).catch(reject);
    }
  }).catch((err) => {
    // console.error(`Error while making ${method} request,`, {
    //   url,
    //   isAuthenticated,
    //   err,
    // });
    return Promise.reject(err);
  });
};

export const getCurrentUnixTimestamp = () => Math.floor(Date.now() / 1000);

export const getExpirationTimeStamp = (token: string) => {
  const decodedToken: JwtPayload = jwtDecode(token);

  const { exp } = decodedToken;
  return exp;
};

// calls the [request] function with [url]
export const getRequest = (url: string, header: object = {}) =>
  request({ url, header });

// calls the [request] function with [url] and [isAuthenticated = true]
export const getAuthenticatedRequest = (url: string, header: object = {}) =>
  request({ url, isAuthenticated: true, header });

// calls the [request] function with [url], [data], [method = 'POST'] and [isAuthenticated = false]
export const postRequest = (url: string, data:any  = null, header: object = {}) =>
  request({ url, method: 'POST', isAuthenticated: false, data, header });

// calls the [request] function with [url], [data], [method = 'POST'] and [isAuthenticated = true]
export const postAuthenticatedRequest = (
  url: string,
  data = null,
  header: object = {}
) => request({ url, method: 'POST', isAuthenticated: true, data, header });

// calls the [request] function with [url], [data], [method = 'PUT'] and [isAuthenticated = false]
export const putRequest = (url: string, data = null, header: object = {}) =>
  request({ url, method: 'PUT', isAuthenticated: false, data, header });

// calls the [request] function with [url], [data], [method = 'PUT'] and [isAuthenticated = true]
export const putAuthenticatedRequest = (
  url: string,
  data = null,
  header: object = {}
) => request({ url, method: 'PUT', isAuthenticated: true, data, header });

// calls the [request] function with [url], [data], [method = 'DELETE'] and [isAuthenticated = false]
export const deleteRequest = (url: string, data = null, header: object = {}) =>
  request({ url, method: 'DELETE', isAuthenticated: false, data, header });

// calls the [request] function with [url], [data], [method = 'DELETE'] and [isAuthenticated = true]
export const deleteAuthenticatedRequest = (
  url: string,
  data = null,
  header: object = {}
) => request({ url, method: 'DELETE', isAuthenticated: true, data, header });
