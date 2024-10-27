// src/pages/admin/components/metricChart.tsx

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { UserInfo } from '../utils/api';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from 'chart.js';
import styles from './metricChart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface MetricChartProps {
    metrics: UserInfo;
}

const MetricChart: React.FC<MetricChartProps> = ({ metrics }) => {
    const metricLabels: { [key: string]: string } = {
        leadership: 'Лидерство',
        communicativeness: 'Коммуникативность',
        customerOrientation: 'Клиентоориентированность',
        innovationCreativity: 'Креативность',
        teamwork: 'Работа в команде',
        strategicThinking: 'Стратегичность',
    };

    const getColor = (score: number): string => {
        if (score >= 8) return 'green';
        if (score >= 5) return 'yellow';
        return 'red';
    };

    const metricsData = Object.keys(metricLabels).map((key) => {
        const metricKey = key as keyof UserInfo;
        const score = metrics[metricKey];

        // Убедимся, что score - число
        if (typeof score !== 'number') {
            console.warn(`Метрика "${key}" имеет некорректное значение: ${score}`);
            return {
                label: metricLabels[key],
                score: 0, // Устанавливаем 0 по умолчанию или обработать иначе
            };
        }

        // Ограничиваем значение от 0 до 10
        const clampedScore = Math.max(0, Math.min(score, 10));

        return {
            label: metricLabels[key],
            score: clampedScore,
        };
    });

    return (
        <div className={styles.metricCharts}>
            {metricsData.map((metric) => (
                <div key={metric.label} className={styles.chartContainer}>
                    <h3 className={styles.metricLabel}>{metric.label}</h3>
                    <Doughnut
                        data={{
                            labels: ['Баллы', 'Оставшиеся'],
                            datasets: [
                                {
                                    data: [metric.score, 10 - metric.score],
                                    backgroundColor: [getColor(metric.score), '#e5e7eb'], // Tailwind's gray-200
                                    hoverBackgroundColor: [getColor(metric.score), '#d1d5db'], // Tailwind's gray-300
                                    borderWidth: 1, // Ширина границы сегментов
                                },
                            ],
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            cutout: '70%', // Уменьшите процент для толще кольца
                            plugins: {
                                legend: {
                                    display: false,
                                },
                                tooltip: {
                                    callbacks: {
                                        label: function (context) {
                                            const label = context.label || '';
                                            const value = context.parsed || 0;
                                            return `${label}: ${value}/10`;
                                        },
                                    },
                                },
                                title: {
                                    display: false,
                                },
                            },
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default MetricChart;
