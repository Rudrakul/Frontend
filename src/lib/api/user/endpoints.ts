import axiosInstance from '@/lib/host'
import type { getUsersDTO, User, UserUpdateDTO } from '@/types/user'

//? GET REQUESTS ==============================================================================

const getUserDetails = async (userId: string): Promise<User> => {
    const response = await axiosInstance.get(`/api/v1/user/details?userId=${userId}`);
    return response.data;
}

const getUserByUsername = async (userName: string): Promise<User> => {
    const response = await axiosInstance.get(`/api/v1/user/details/${userName}`);
    return response.data;
}

const disableUser = async (userId: string): Promise<User> => {
    const response = await axiosInstance.get(`/api/v1/user/admin/disable-user?userId=${userId}`);
    return response.data;
}

const restoreUser = async (userId: string): Promise<User> => {
    const response = await axiosInstance.get(`/api/v1/user/admin/restore-user?userId=${userId}`);
    return response.data;
}

const deleteUserById = async (userId: string) => {
    const response = await axiosInstance.get(`api/v1/user/admin/delete-user?userId=${userId}`);
    return response.data;
}



//! POST REQUESTS ===========================================================================

const getUsersByIds = async (userIds: string[]): Promise<getUsersDTO> => {
    const respnose = await axiosInstance.post('/api/v1/user/details/users', userIds);
    return respnose.data;
}

const updateUserAvatar = async (file: string): Promise<User> => {
    const respnose = await axiosInstance.post('/api/v1/user/details/update-avatar', file);
    return respnose.data;
}



//TODO: PUT REQUESTS ======================================================================== 

const updateUser = async (userId: string, data: UserUpdateDTO): Promise<User> => {
    const response = await axiosInstance.put(`/api/v1/user/details/${userId}`, data);
    return response.data;
}

const updateUsername = async (userId: string, newUsername: string): Promise<User> => {
    const response = await axiosInstance.put(`/api/v1/user/update-username/${userId}/${newUsername}`)
    return response.data;
}

export {
    getUserDetails,
    getUserByUsername,
    disableUser,
    restoreUser,
    deleteUserById,
    getUsersByIds,
    updateUserAvatar,
    updateUser,
    updateUsername
}