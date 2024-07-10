import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
    getCommentsByBlogId,
    getRepliesByCommentId,
    addComment,
    replyToComment,
    deleteComment
} from './endpoints';
import type { CommentWithRepliesDTO, ReplyDTO } from '@/types/blog';

// Queries
export const useGetCommentsByBlogId = (blogId: string) => {
    return useQuery<CommentWithRepliesDTO>(['comments', blogId], () => getCommentsByBlogId(blogId));
};

export const useGetRepliesByCommentId = (commentId: string) => {
    return useQuery<ReplyDTO[]>(['replies', commentId], () => getRepliesByCommentId(commentId));
};

// Mutations
const queryClient = useQueryClient();

export const useAddComment = () => {
    return useMutation(({ blogId, userId, data }: { blogId: string; userId: string; data: string }) => addComment(blogId, userId, data), {
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries(['comments', variables.blogId]);
        },
    });
};

export const useReplyToComment = () => {
    return useMutation(({ blogId, userId, parentId, data }: { blogId: string; userId: string; parentId: string; data: string }) => replyToComment(blogId, userId, parentId, data), {
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries(['comments', variables.blogId]);
            queryClient.invalidateQueries(['replies', variables.parentId]);
        },
    });
};

export const useDeleteComment = () => {
    return useMutation((commentId: string) => deleteComment(commentId), {
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries('comments');
            queryClient.invalidateQueries('replies');
        },
    });
};
