import axiosInstance from "@/lib/host";
import type { ExperienceDTO } from "@/types/experience";


//? GET REQUEST =============================================================================================

const getExperiencesByProcessId = async (processId: string): Promise<ExperienceDTO[]> => {
    const response = await axiosInstance.get(`/api/v1/experiences/${processId}`);
    return response.data;
}



//* POST REQUEST =============================================================================================

const createExperience = async (processId: string, userId: string, data: string): Promise<ExperienceDTO> => {
    const response = await axiosInstance.post(`api/v1/experiences?processId=${processId}&userId=${userId}`, data);
    return response.data;
}



//todo PUT REQUEST =============================================================================================

const updateExperience = async (experienceId: string, data: string): Promise<ExperienceDTO> => {
    const response = await axiosInstance.put(`/api/v1/experiences/${experienceId}`, data);
    return response.data;
}



//! DELETE REQUEST =============================================================================================

const deleteExperience = async (experienceId: string) => {
    const response = await axiosInstance.delete(`/api/v1/experiences/${experienceId}`);
    return response.data;
}



export {
    getExperiencesByProcessId,
    createExperience,
    updateExperience,
    deleteExperience
}