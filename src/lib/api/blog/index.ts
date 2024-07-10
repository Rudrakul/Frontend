import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
    getBlogById,
    getAllBlogById,
    getLikesByBlogId,
    getAllBlogsByCategory,
    createBlog,
    likeBlog,
    unlikeBlog,
    updateBlog,
    deleteBlog
} from './endpoints';
import type { BlogDTO } from '@/types/blog';
import type { CATEGORIES } from '@/constants/categories';
import type { User } from '@/types/user';

// Queries
export const useGetBlogById = (blogId: string) => {
    return useQuery(['blog', blogId], () => getBlogById(blogId));
};

export const useGetAllBlogs = () => {
    return useQuery('blogs', getAllBlogById);
};

export const useGetLikesByBlogId = (blogId: string) => {
    return useQuery(['blog', blogId, 'likes'], () => getLikesByBlogId(blogId));
};

export const useGetAllBlogsByCategory = (category: CATEGORIES) => {
    return useQuery(['blogs', 'category', category], () => getAllBlogsByCategory(category));
};

// Mutations
const queryClient = useQueryClient();

export const useCreateBlog = () => {
    return useMutation(({ authorId, data }: { authorId: string; data: BlogDTO }) => createBlog(authorId, data), {
        onSuccess: () => {
            queryClient.invalidateQueries('blogs');
        },
    });
};

export const useLikeBlog = () => {
    return useMutation(({ blogId, data }: { blogId: string; data: User }) => likeBlog(blogId, data), {
        onSuccess: () => {
            queryClient.invalidateQueries(['blog', 'blogId', 'likes']);
        },
    });
};

export const useUnlikeBlog = () => {
    return useMutation(({ blogId, data }: { blogId: string; data: User }) => unlikeBlog(blogId, data), {
        onSuccess: () => {
            queryClient.invalidateQueries(['blog', 'blogId', 'likes']);
        },
    });
};

export const useUpdateBlog = () => {
    return useMutation(({ blogId, data }: { blogId: string; data: BlogDTO }) => updateBlog(blogId, data), {
        onSuccess: () => {
            queryClient.invalidateQueries('blogs');
        },
    });
};

export const useDeleteBlog = () => {
    return useMutation((blogId: string) => deleteBlog(blogId), {
        onSuccess: () => {
            queryClient.invalidateQueries('blogs');
        },
    });
};
