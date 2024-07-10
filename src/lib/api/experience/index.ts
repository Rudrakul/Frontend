import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
    getExperiencesByProcessId,
    createExperience,
    updateExperience,
    deleteExperience
} from './endpoints';

// Queries
export const useGetExperiencesByProcessId = (processId: string) => {
    return useQuery(['experiences', processId], () => getExperiencesByProcessId(processId));
};

// Mutations
const queryClient = useQueryClient();

export const useCreateExperience = () => {
    return useMutation(({ processId, userId, data }: { processId: string; userId: string; data: string }) => createExperience(processId, userId, data), {
        onSuccess: () => {
            queryClient.invalidateQueries('experiences');
        },
    });
};

export const useUpdateExperience = () => {
    return useMutation(({ experienceId, data }: { experienceId: string; data: string }) => updateExperience(experienceId, data), {
        onSuccess: () => {
            queryClient.invalidateQueries('experiences');
        },
    });
};

export const useDeleteExperience = () => {
    return useMutation((experienceId: string) => deleteExperience(experienceId), {
        onSuccess: () => {
            queryClient.invalidateQueries('experiences');
        },
    });
};
