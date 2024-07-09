export interface User {
    id?: string;
    email: string;
    password?: string;
    role?: string;
    name?: string;
    username?: string;
    userImage?: string;
    about?: string;
    provider?: string;
    providerId?: string;
    isCredentialsNonExpired?: boolean;
    isAccountNonLocked?: boolean;
    createdAt?: string;
    updatedAt?: string;
    lastLogin?: string;
    saadhakSince?: number;
    followers?: number;
    following?: number;
    processesCount?: number;
    enabled?: boolean;
    accountNonLocked?: boolean;
    updatingFields?: boolean;
    credentialsNonExpired?: boolean;
}


export interface UserUpdateDTO {
    name?: string;
    userImage?: string;
    about?: string;
}