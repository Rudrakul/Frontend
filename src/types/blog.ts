import type { User } from "./user";

export interface Blog {
    id?: string;
    title: string;
    description: string;
    backgroundImage?: string;
    cardImage?: string;
    authorId?: string;
    createdAt?: string;
    updatedAt?: string;
    category: "SPIRITUAL" | "PERSONAL_DEVELOPMENT";
    comments?: Comment[];
    likedBy?: User[];
}

// BlogDTO interface
export interface BlogDTO {
    title: string;
    description: string;
    backgroundImage?: string;
    cardImage?: string;
    category: "SPIRITUAL" | "PERSONAL_DEVELOPMENT";
}

export interface Comment {
    id?: string;
    blog?: Blog;
    user?: User;
    content: string;
    createdAt?: string;
    parent?: Comment;
    replies?: Comment[];
}

export interface CommentDTO {
    id?: string;
    author: string;
    content: string;
    createdAt?: string;
    userName: string;
}

export interface CommentWithRepliesDTO {
    id?: string;
    author: string;
    content: string;
    createdAt?: string;
    replies: ReplyDTO[];
}

export interface ReplyDTO {
    id?: string;
    author: string;
    content: string;
    createdAt?: string;
    userName: string;
    parentId?: string;
}