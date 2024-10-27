import axios from 'axios';

// Define the User and UserInfo interfaces
export interface User {
    id: string; // UUID
    name: string;
    surname: string;
}

export interface UserInfo extends User {
    leadership: number; // 0-10
    communicativeness: number;
    customerOrientation: number;
    innovationCreativity: number;
    teamwork: number;
    strategicThinking: number;
    testPoints: number[]; // Array of test scores
    socialTestPoints: number[]; // Array of social test scores
    // Add other user-related fields as needed
}

// Function to fetch all users
export const getAllUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get<User[]>('/api/all_users');
        return response.data;
    } catch (error) {
        console.error('Error fetching all users:', error);
        throw error;
    }
};

// Function to fetch user info by ID
export const getUserInfo = async (userId: string): Promise<UserInfo> => {
    try {
        const response = await axios.get<UserInfo>('/api/user_info', {
            params: { id: userId },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching info for user ${userId}:`, error);
        throw error;
    }
};