// src/pages/admin/admin.tsx

import React, { useState } from 'react';
import UserList from './components/userList';
import UserDetail from './components/userDetail';
import styles from './admin.module.css';

const Admin: React.FC = () => {
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

    const handleSelectUser = (userId: string) => {
        setSelectedUserId(userId);
    };

    return (
        <div className={styles.adminContainer}>
            <UserList onSelectUser={handleSelectUser} selectedUserId={selectedUserId} />
            <UserDetail userId={selectedUserId} />
        </div>
    );
};

export default Admin;
