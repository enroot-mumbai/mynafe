import { postRequest } from ".";
import { API_URL } from "../config/environment";

interface SignupDataProps {
    email?: string;
    phone?: string;
    password: string;
}

export async function userSignup(data: SignupDataProps) {
    const response = await postRequest(`${API_URL}/auth/signup`, data);
    return response;
}