import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
    getAllProcesses,
    getProcessById,
    searchProcessByName,
    addProcess,
    uploadCoverImage,
    uploadCardImage,
    updateProcess,
    deleteProcess
} from './endpoints';
import type { Process, ProcessUpdateDTO } from '@/types/process';

// Queries
export const useGetAllProcesses = () => {
    return useQuery('processes', getAllProcesses);
};

export const useGetProcessById = (processId: string) => {
    return useQuery(['process', processId], () => getProcessById(processId));
};

export const useSearchProcessByName = (name: string) => {
    return useQuery(['process', 'search', name], () => searchProcessByName(name));
};

// Mutations
const queryClient = useQueryClient();

export const useAddProcess = () => {
    return useMutation((data: ProcessUpdateDTO) => addProcess(data), {
        onSuccess: () => {
            queryClient.invalidateQueries('processes');
        },
    });
};

export const useUploadCoverImage = () => {
    return useMutation((file: string) => uploadCoverImage(file), {
        onSuccess: () => {
            queryClient.invalidateQueries('processes');
        },
    });
};

export const useUploadCardImage = () => {
    return useMutation((file: string) => uploadCardImage(file), {
        onSuccess: () => {
            queryClient.invalidateQueries('processes');
        },
    });
};

export const useUpdateProcess = () => {
    return useMutation((data: ProcessUpdateDTO) => updateProcess(data), {
        onSuccess: () => {
            queryClient.invalidateQueries('processes');
        },
    });
};

export const useDeleteProcess = () => {
    return useMutation((processId: string) => deleteProcess(processId), {
        onSuccess: () => {
            queryClient.invalidateQueries('processes');
        },
    });
};
