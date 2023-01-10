import axios, { AxiosRequestHeaders } from 'axios';
import { API_URL, SITE_URL } from '../config/environment';
import { convertObjectToQueryString } from '../helpers/queryStringHandler';
import { getToken } from './auth';

export const login = async (
  type: string,
  formData: {},
  headers: AxiosRequestHeaders = {}
): Promise<{}> => {
  try {
    return await axios.post(`${API_URL}/auth/signin?type=${type}`, formData, {
      headers,
    });
  } catch (error) {
    return {
      isError: true,
      data: error.response && error.response.data,
    };
  }
};

export const updateUserProfile = async (formData: {}): Promise<{}> => {
  try {
    return await axios.post(`${API_URL}/user`, formData, {
      headers: {
        Authorization: getToken(),
      },
    });
  } catch (error) {
    return {
      isError: true,
      data: error.response && error.response.data,
    };
  }
};

export const getProgram = async (programId: string): Promise<{}> => {
  try {
    return await axios.get(
      `${API_URL}/programs/${programId}?include=sku,amount,title,description,mrp,denomenation,currency`
    );
  } catch (error) {
    return {
      isError: true,
      data: error.response && error.response.data,
    };
  }
};

export const resendOtp = async (formData: {}): Promise<{}> => {
  try {
    return await axios.post(`${API_URL}/auth/resendOtp`, formData);
  } catch (error) {
    return {
      isError: true,
      data: error.response && error.response.data,
    };
  }
};

export const forgotPassword = async (formData: {}): Promise<{}> => {
  try {
    return await axios.post(
      `${API_URL}/auth/forgotPassword?redirectUrl=${SITE_URL}`,
      formData
    );
  } catch (error) {
    return {
      isError: true,
      data: error.response && error.response.data,
    };
  }
};

export const signUp = async (
  type: string,
  formData: {},
  headers: AxiosRequestHeaders = {}
): Promise<{}> => {
  try {
    return await axios.post(`${API_URL}/auth/signup?type=${type}`, formData, {
      headers,
    });
  } catch (error) {
    return {
      isError: true,
      data: error.response && error.response.data,
    };
  }
};

export const verifyOtp = async (formData: {}): Promise<{}> => {
  try {
    return await axios.post(`${API_URL}/auth/verifyOtp`, formData);
  } catch (error) {
    return {
      isError: true,
      data: error.response && error.response.data,
    };
  }
};

export const resetPassword = async (
  resetId: string,
  formData: {}
): Promise<{}> => {
  try {
    return await axios.post(
      `${API_URL}/auth/passwordReset/${resetId}`,
      formData
    );
  } catch (error) {
    return {
      isError: true,
      data: error.response && error.response.data,
    };
  }
};

export const createOrder = async (
  formData: {},
  timezone: string
): Promise<{}> => {
  try {
    timezone = timezone || 'Asia/Kolkata';
    return await axios.post(`${API_URL}/order`, formData, {
      headers: {
        timezone,
        Authorization: getToken(),
      },
    });
  } catch (error) {
    return {
      isError: true,
      data: error.response && error.response.data,
    };
  }
};

export const createVerifiedOrder = async (
  formData: {},
  timezone: string
): Promise<{}> => {
  try {
    timezone = timezone || 'Asia/Kolkata';

    return await axios.post(`${API_URL}/order/verification`, formData, {
      headers: {
        timezone,
        Authorization: getToken(),
      },
    });
  } catch (error) {
    return {
      isError: true,
      data: error.response && error.response.data,
    };
  }
};

export const getTransactions = async ({
  queryObject = {},
}: any): Promise<any> => {
  try {
    const queryString = convertObjectToQueryString(queryObject);
    const result = await axios.get(
      `${API_URL}/programs/subscribed?${queryString}`,
      {
        headers: {
          Authorization: getToken(),
        },
      }
    );
    return result?.data || { data: [] };
  } catch (error) {
    return {
      isError: true,
      data: error.response && error.response.data,
    };
  }
};
export const validateCouponCode = async (formData: {}): Promise<{}> => {
  try {
    return await axios.post(`${API_URL}/order/validateCoupons`, formData);
  } catch (error) {
    let isInvalidCoupon = true;
    if (error?.response?.status !== 400) {
      isInvalidCoupon = false;
    }
    return {
      isError: true,
      data: error.response && error.response.data,
      isInvalidCoupon,
    };
  }
};
