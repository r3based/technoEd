// src/pages/admin/components/mockData.tsx

import { User, UserInfo } from '../utils/api';

// Mock список пользователей
export const mockUsers: User[] = [
    { id: '1', name: 'Иван', surname: 'Иванов' },
    { id: '2', name: 'Мария', surname: 'Петрова' },
    { id: '3', name: 'Алексей', surname: 'Сидоров' },
];

// Mock информация о пользователе
export const mockUserInfo: { [key: string]: UserInfo } = {
    '1': {
        id: '1',
        name: 'Иван',
        surname: 'Иванов',
        leadership: 9,
        communicativeness: 7,
        customerOrientation: 8,
        innovationCreativity: 6,
        teamwork: 10,
        strategicThinking: 5,
        testPoints: [85, 90, 78],
        socialTestPoints: [80, 75, 88],
    },
    '2': {
        id: '2',
        name: 'Мария',
        surname: 'Петрова',
        leadership: 4,
        communicativeness: 6,
        customerOrientation: 5,
        innovationCreativity: 7,
        teamwork: 3,
        strategicThinking: 6,
        testPoints: [70, 65, 80],
        socialTestPoints: [60, 75, 68],
    },
    '3': {
        id: '3',
        name: 'Алексей',
        surname: 'Сидоров',
        leadership: 5,
        communicativeness: 8,
        customerOrientation: 9,
        innovationCreativity: 10,
        teamwork: 7,
        strategicThinking: 8,
        testPoints: [90, 85, 88],
        socialTestPoints: [92, 89, 95],
    },
};
