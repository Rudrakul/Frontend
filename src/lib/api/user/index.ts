import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
    getUserDetails,
    getUserByUsername,
    disableUser,
    restoreUser,
    deleteUserById,
    getUsersByIds,
    updateUserAvatar,
    updateUser,
    updateUsername
} from './endpoints';
import type { User, getUsersDTO, UserUpdateDTO } from '@/types/user';

// Queries
export const useGetUserDetails = (userId: string) => {
    return useQuery(['user', userId], () => getUserDetails(userId));
};

export const useGetUserByUsername = (userName: string) => {
    return useQuery(['user', userName], () => getUserByUsername(userName));
};

export const useGetUsersByIds = (userIds: string[]) => {
    return useQuery(['users', userIds], () => getUsersByIds(userIds));
};

// Mutations
const queryClient = useQueryClient();

export const useDisableUser = () => {
    return useMutation((userId: string) => disableUser(userId), {
        onSuccess: () => {
            queryClient.invalidateQueries('user');
        },
    });
};

export const useRestoreUser = () => {
    return useMutation((userId: string) => restoreUser(userId), {
        onSuccess: () => {
            queryClient.invalidateQueries('user');
        },
    });
};

export const useDeleteUserById = () => {
    return useMutation((userId: string) => deleteUserById(userId), {
        onSuccess: () => {
            queryClient.invalidateQueries('user');
        },
    });
};

export const useUpdateUserAvatar = () => {
    return useMutation((file: string) => updateUserAvatar(file), {
        onSuccess: () => {
            queryClient.invalidateQueries('user');
        },
    });
};

export const useUpdateUser = () => {
    return useMutation(({ userId, data }: { userId: string; data: UserUpdateDTO }) => updateUser(userId, data), {
        onSuccess: () => {
            queryClient.invalidateQueries('user');
        },
    });
};

export const useUpdateUsername = () => {
    return useMutation(({ userId, newUsername }: { userId: string; newUsername: string }) => updateUsername(userId, newUsername), {
        onSuccess: () => {
            queryClient.invalidateQueries('user');
        },
    });
};
