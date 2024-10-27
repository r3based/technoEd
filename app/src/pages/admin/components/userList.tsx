// src/pages/admin/components/userList.tsx

import React from 'react';
import styles from './userList.module.css';
import { cn } from '@/lib/utils'; // Убедитесь, что этот утилитный файл существует
import { Card } from '@/components/ui/card'; // Используйте ваш компонент Card из ShadCN/UI или свой собственный

// Импортируем mock данные
import { mockUsers } from './mockData';

interface UserListProps {
    onSelectUser: (userId: string) => void;
    selectedUserId: string | null;
}

const UserList: React.FC<UserListProps> = ({ onSelectUser, selectedUserId }) => {
    // Используем mockUsers вместо состояния и эффекта
    const users = mockUsers;

    return (
        <Card className={styles.userList}>
            <h2 className={styles.title}>Пользователи</h2>
            <ul className={styles.list}>
                {users.map((user) => (
                    <li
                        key={user.id}
                        onClick={() => onSelectUser(user.id)}
                        className={cn(
                            styles.userItem,
                            selectedUserId === user.id ? styles.active : ''
                        )}
                    >
                        {user.name} {user.surname}
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;
