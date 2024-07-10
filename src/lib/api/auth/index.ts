import { useQuery, useMutation, useQueryClient } from 'react-query';
import { login, logout, register, requestOtp, verifyOtp, resetPassword, getVerifyEmailOtp, verifyEmailOtp } from './endpoints';
import type { AuthRequest, OtpRequest } from '@/types/auth';

// Queries
export const useLogout = () => {
    return useQuery('auth', logout);
};

export const useRequestOtp = (email: string) => {
    return useQuery('auth', () => requestOtp(email));
}


// Mutations
const queryClient = useQueryClient();

export const useLogin = (requestBody: AuthRequest) => {

    return useMutation((requestBody: AuthRequest) => login(requestBody), {
        onSuccess: () => {
            queryClient.invalidateQueries(['auth', 'user']);
        },
    });
};

export const useRegister = (requestBody: AuthRequest) => {

    return useMutation((requestBody: AuthRequest) => register(requestBody), {
        onSuccess: () => {
            queryClient.invalidateQueries(['auth', 'user']);
        },
    });
};

export const useVerifyOtp = (requestBody: OtpRequest) => {

    return useMutation((requestBody: OtpRequest) => verifyOtp(requestBody), {
        onSuccess: () => {
            queryClient.invalidateQueries(['auth', 'user']);
        },
    });
};

export const useResetPassword = (requestBody: AuthRequest) => {

    return useMutation((requestBody: AuthRequest) => resetPassword(requestBody), {
        onSuccess: () => {
            queryClient.invalidateQueries(['auth', 'user']);
        },
    });
};

export const useGetVerifyEmailOtp = (email: string) => {

    return useMutation((email: string) => getVerifyEmailOtp(email), {
        onSuccess: () => {
            queryClient.invalidateQueries(['auth', 'user'])
        }
    })
}

export const useVerifyEmailOtp = (data: OtpRequest) => {

    return useMutation((data: OtpRequest) => verifyEmailOtp(data), {
        onSuccess: () => {
            queryClient.invalidateQueries(['auth', 'user'])
        }
    })
}