import axiosInstance from "@/lib/host"
import type { CommentDTO, CommentWithRepliesDTO, ReplyDTO } from "@/types/blog";


//? GET REQUEST =============================================================================================

const getCommentsByBlogId = async (blogId: string): Promise<CommentWithRepliesDTO> => {
    const response = await axiosInstance.get(`/api/v1/comments/blog/${blogId}`);
    return response.data;
}


const getRepliesByCommentId = async (commentId: string): Promise<ReplyDTO[]> => {
    const response = await axiosInstance.get(`/api/v1/comments/replies/${commentId}`);
    return response.data;
}



//* POST REQUEST =============================================================================================

const addComment = async (blogId: string, userId: string, data: string): Promise<CommentDTO> => {
    const response = await axiosInstance.post(`/api/v1/comments?blogId=${blogId}&userId=${userId}`, data);
    return response.data;
}

const replyToComment = async (blogId: string, userId: string, parentId: string, data: string): Promise<CommentDTO> => {
    const response = await axiosInstance.post(`/api/v1/comments?blogId=${blogId}&userId=${userId}&parentId=${parentId}`, data);
    return response.data;
}



//! DELETE REQUEST =============================================================================================

const deleteComment = async (commentId: string) => {
    const response = await axiosInstance.delete(`/api/v1/comments/${commentId}`);
    return response.data;
}



export {
    getCommentsByBlogId,
    getRepliesByCommentId,
    addComment,
    replyToComment,
    deleteComment
} 