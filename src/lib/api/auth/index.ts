import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { login, logout, register, requestOtp, verifyOtp, resetPassword, getVerifyEmailOtp, verifyEmailOtp } from './endpoints';
import type { AuthRequest, LoginResponse, OtpRequest } from '@/types/auth';

// Queries
export const useLogout = () => {
    return useQuery('auth', logout);
};

export const useRequestOtp = (email: string) => {
    return useQuery('auth', () => requestOtp(email));
}


// Mutations


export const useLogin = () => {
    const queryClient = useQueryClient();

    return useMutation<LoginResponse, Error, AuthRequest>((req: AuthRequest) => login(req), {
        onSuccess: () => {
            queryClient.invalidateQueries(['auth', 'user']);
        },
    });
};

export const useRegister = (requestBody: AuthRequest) => {
    const queryClient = useQueryClient();

    return useMutation((requestBody: AuthRequest) => register(requestBody), {
        onSuccess: () => {
            queryClient.invalidateQueries(['auth', 'user']);
        },
    });
};

export const useVerifyOtp = (requestBody: OtpRequest) => {

    const queryClient = useQueryClient();
    return useMutation((requestBody: OtpRequest) => verifyOtp(requestBody), {
        onSuccess: () => {
            queryClient.invalidateQueries(['auth', 'user']);
        },
    });
};

export const useResetPassword = (requestBody: AuthRequest) => {

    const queryClient = useQueryClient();
    return useMutation((requestBody: AuthRequest) => resetPassword(requestBody), {
        onSuccess: () => {
            queryClient.invalidateQueries(['auth', 'user']);
        },
    });
};

export const useGetVerifyEmailOtp = (email: string) => {

    const queryClient = useQueryClient();
    return useMutation((email: string) => getVerifyEmailOtp(email), {
        onSuccess: () => {
            queryClient.invalidateQueries(['auth', 'user'])
        }
    })
}

export const useVerifyEmailOtp = (data: OtpRequest) => {

    const queryClient = useQueryClient();
    return useMutation((data: OtpRequest) => verifyEmailOtp(data), {
        onSuccess: () => {
            queryClient.invalidateQueries(['auth', 'user'])
        }
    })
}