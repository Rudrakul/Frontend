export interface OtpRequest {
    email: string;
    otp: number;
}

// AuthRequest interface
export interface AuthRequest {
    email: string;
    password: string;
}

// LoginResponse interface
export interface LoginResponse {
    id: string;
    jwt: string;
    refreshToken: string;
}

// ResetPasswordDTO interface
export interface ResetPasswordDTO {
    email: string;
    password: string;
}