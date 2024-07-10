import type { CATEGORIES } from "@/constants/categories";
import axiosInstance from "@/lib/host";
import type { Blog, BlogDTO } from "@/types/blog";
import type { User } from "@/types/user";


//? GET REQUEST =============================================================================================

const getBlogById = async (blogId: string): Promise<Blog> => {
    const response = await axiosInstance.get(`/api/v1/blogs/${blogId}`);
    return response.data;
}

const getAllBlogById = async (): Promise<Blog[]> => {
    const response = await axiosInstance.get('/api/v1/blogs');
    return response.data;
}

const getLikesByBlogId = async (blogId: string): Promise<User[]> => {
    const response = await axiosInstance.get(`/api/v1/blogs/${blogId}/likes`);
    return response.data;
}

const getAllBlogsByCategory = async (category: CATEGORIES): Promise<Blog[]> => {
    const response = await axiosInstance.get(`/api/v1/blogs/category/${category}`);
    return response.data;
}



//* POST REQUEST =============================================================================================

const createBlog = async (authorId: string, data: BlogDTO): Promise<Blog> => {
    const response = await axiosInstance.post(`/api/v1/blogs/${authorId}`, data);
    return response.data;
}

const likeBlog = async (blogId: string, data: User) => {
    const response = await axiosInstance.post(`/api/v1/blogs/${blogId}/like`, data);
    return response.data;
}

const unlikeBlog = async (blogId: string, data: User) => {
    const response = await axiosInstance.post(`/api/v1/blogs/${blogId}/unlike`, data);
    return response.data;
}



//todo PUT REQUEST =============================================================================================

const updateBlog = async (blogId: string, data: BlogDTO): Promise<Blog> => {
    const response = await axiosInstance.put(`/api/v1/blogs/${blogId}`, data);
    return response.data;
}



//! DELETE REQUEST =============================================================================================

const deleteBlog = async (blogId: string) => {
    const response = await axiosInstance.delete(`/api/v1/blogs/${blogId}`);
    return response.data;
}



export {
    getBlogById,
    getAllBlogById,
    getLikesByBlogId,
    getAllBlogsByCategory,
    createBlog,
    likeBlog,
    unlikeBlog,
    updateBlog,
    deleteBlog
}