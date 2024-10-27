// src/pages/admin/components/MetricChart.tsx

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from 'chart.js';
import styles from './metricChart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

// Define the UserMetrics interface
export interface UserMetrics {
    leadership: number;
    communicativeness: number;
    customerOrientation: number;
    innovationCreativity: number;
    teamwork: number;
    strategicThinking: number;
    // Add other metrics if needed
}

interface MetricChartProps {
    metrics: UserMetrics;
}

const MetricChart: React.FC<MetricChartProps> = ({ metrics }) => {
    const metricLabels: { [key in keyof UserMetrics]: string } = {
        leadership: 'Лидерство',
        communicativeness: 'Коммуникативность',
        customerOrientation: 'Клиентоориентированность',
        innovationCreativity: 'Креативность',
        teamwork: 'Работа в команде',
        strategicThinking: 'Стратегичность',
        // Add more labels if needed
    };

    const getColor = (score: number): string => {
        if (score >= 8) return 'green';
        if (score >= 5) return 'yellow';
        return 'red';
    };

    const metricsData = Object.keys(metricLabels).map((key) => {
        const metricKey = key as keyof UserMetrics;
        const score = metrics[metricKey];

        // Ensure score is a number
        if (typeof score !== 'number') {
            console.warn(`Metric "${key}" has invalid value: ${score}`);
            return {
                label: metricLabels[metricKey],
                score: 0,
            };
        }

        // Clamp the score between 0 and 10
        const clampedScore = Math.max(0, Math.min(score, 10));

        return {
            label: metricLabels[metricKey],
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
                                    backgroundColor: [getColor(metric.score), '#e5e7eb'],
                                    hoverBackgroundColor: [getColor(metric.score), '#d1d5db'],
                                    borderWidth: 1,
                                },
                            ],
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            cutout: '70%',
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
