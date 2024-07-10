import axiosInstance from "@/lib/host"
import type { AuthRequest, LoginResponse, ResetPasswordDTO, OtpRequest } from "@/types/auth"
import type { User } from "@/types/user";

//! POST REQUESTS ===========================================================================

export const login = async (req: AuthRequest): Promise<LoginResponse> => {
    const response = await axiosInstance.post('/api/v1/auth/login', req);
    return response.data;
}

export const register = async (req: AuthRequest): Promise<User> => {
    const response = await axiosInstance.post('/api/v1/auth/register', req);
    return response.data;
}


export const verifyOtp = async (req: OtpRequest) => {
    const response = await axiosInstance.post('/api/v1/auth/forgot-password/verify-otp', req);
    return response.data;
}

export const resetPassword = async (req: AuthRequest) => {
    const response = await axiosInstance.post('/api/v1/auth/forgot-password/reset-password', req);
    return response.data;
}

export const getVerifyEmailOtp = async (email: string) => {
    const response = await axiosInstance.post(`/api/v1/auth/verify-email/send-otp/${email}`);
    return response.data;
}

export const verifyEmailOtp = async (data: OtpRequest) => {
    const response = await axiosInstance.post("/api/v1/auth/verify-email/verify-otp", data);
    return response.data;
}



//? GET REQUESTS ==============================================================================

export const logout = async () => {
    const response = await axiosInstance.get('/api/v1/auth/logout');
    return response.data;
}
export const requestOtp = async (email: string) => {
    const response = await axiosInstance.get(`api/v1/auth/forgot-password/request-otp?email=${email}`);
    return response.data;
}
