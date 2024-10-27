// src/pages/admin/components/userDetail.tsx

import React, { useEffect, useState } from 'react';
import { UserInfo } from '../utils/api';
import MetricChart from './metricChart';
import styles from './userDetail.module.css';
import { Card } from '@/components/ui/card'; // Используйте ваш компонент Card из ShadCN/UI или свой собственный

// Импортируем mock данные
import { mockUserInfo } from './mockData';

interface UserDetailProps {
    userId: string | null;
}

const UserDetail: React.FC<UserDetailProps> = ({ userId }) => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        if (!userId) {
            setUserInfo(null);
            return;
        }

        // Используем mockUserInfo вместо API-запроса
        const data = mockUserInfo[userId];
        setUserInfo(data || null);
    }, [userId]);

    if (!userId) {
        return <div className={styles.placeholder}>Выберите пользователя для просмотра деталей.</div>;
    }

    if (!userInfo) {
        return <div className={styles.status}>Информация о пользователе не найдена.</div>;
    }

    // Вычисляем общий балл
    const scores = [
        userInfo.leadership,
        userInfo.communicativeness,
        userInfo.customerOrientation,
        userInfo.innovationCreativity,
        userInfo.teamwork,
        userInfo.strategicThinking,
    ];
    const overallScore = scores.reduce((acc, curr) => acc + curr, 0) / scores.length;

    // Функция для вычисления медианы
    const median = (arr: number[]): number => {
        if (!arr.length) return 0;
        const sorted = [...arr].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0
            ? sorted[mid]
            : (sorted[mid - 1] + sorted[mid]) / 2;
    };

    const medianTestPoints = median(userInfo.testPoints || []);
    const medianSocialTestPoints = median(userInfo.socialTestPoints || []);

    return (
        <Card className={styles.userDetail}>
            <h2 className={styles.userName}>
                {userInfo.name} {userInfo.surname}
            </h2>
            <div className={styles.chartSection}>
                <MetricChart metrics={userInfo} />
            </div>
            <div className={styles.scores}>
                <p>
                    <strong>Общий балл:</strong> {overallScore.toFixed(2)}
                </p>
                <p>
                    <strong>Медиана баллов тестов:</strong> {medianTestPoints}
                </p>
                <p>
                    <strong>Медиана баллов социальных тестов:</strong> {medianSocialTestPoints}
                </p>
            </div>
        </Card>
    );
};

export default UserDetail;
