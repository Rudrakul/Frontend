import axiosInstance from "@/lib/host"
import type { Process, ProcessDTO, ProcessUpdateDTO } from "@/types/process";


//? GET REQUESTS ==============================================================================

const getAllProcesses = async () => {
    const response = await axiosInstance.get('/api/v1/processes/all');
    return response.data;
}

const getProcessById = async (processId: string): Promise<Process> => {
    const response = await axiosInstance.get(`/api/v1/processes/${processId}`);
    return response.data;
}

const searchProcessByName = async (name: string) => {
    const response = await axiosInstance.get(`api/v1/processes/search?name=${name}`);
    return response.data;
}



//* POST REQUESTS ==============================================================================

const addProcess = async (data: ProcessUpdateDTO): Promise<Process> => {
    const response = await axiosInstance.post('/api/v1/processes/add-process', data);
    return response.data;
}

const uploadCoverImage = async (file: string): Promise<string> => {
    const response = await axiosInstance.post('/api/v1/processes/upload/cover', file);
    return response.data
}

const uploadCardImage = async (file: string): Promise<string> => {
    const response = await axiosInstance.post('/api/v1/processes/upload/card', file);
    return response.data
}



//TODO:PUT REQUESTS ==============================================================================

const updateProcess = async (data: ProcessUpdateDTO): Promise<Process> => {
    const response = await axiosInstance.put('/api/v1/processes/update', data);
    return response.data;
}



//! DELETE REQUEST ===============================================================================

const deleteProcess = async (processId: string): Promise<string> => {
    const response = await axiosInstance.delete(`/api/v1/processes/${processId}`);
    return response.data;
}



export {
    getAllProcesses,
    getProcessById,
    searchProcessByName,
    addProcess,
    uploadCoverImage,
    uploadCardImage,
    updateProcess,
    deleteProcess
}