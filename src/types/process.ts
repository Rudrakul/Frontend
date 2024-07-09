import type { User } from "./user";

export interface ProcessDTO extends ProcessUpdateDTO {
    processId?: string;
}

export interface ProcessUpdateDTO {
    processName?: string;
    coverImage?: string;
    cardImage?: string;
    description?: string;
}

export interface Process {
    "id": "string",
    "processName": "string",
    "coverImage": "string",
    "cardImage": "string",
    "description": "string",
    "createdAt": "string",
    "updatedAt": "string",
    "createdBy": "string",
    "lastUpdatedBy": "string",
    "experiences": [
        {
            "id": "string",
            "user": User,
            "processes": "string",
            "experience": "string",
            "createdAt": "string"
        }
    ]
}