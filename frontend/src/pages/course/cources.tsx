// src/components/Courses.tsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTheory, CourseInterface } from './api/getTheory';

const Courses: React.FC = () => {
    const [courses, setCourses] = useState<CourseInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    // Fetch all courses when the component mounts
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getTheory();
                if (Array.isArray(data)) {
                    setCourses(data);
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) {
        return <div>Loading courses...</div>;
    }

    if (error) {
        return <div>Error loading courses. Please try again later.</div>;
    }

    return (
        <div style={styles.container}>
            <h2>All Courses</h2>
            <ul style={styles.courseList}>
                {courses.map((course) => (
                    <li key={course.id} style={styles.courseItem}>
                        <Link to={`/courses/${course.id}`} style={styles.courseLink}>
                            {course.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Simple styling
const styles = {
    container: {
        padding: '1rem',
    },
    courseList: {
        listStyle: 'none' as const,
        padding: 0,
    },
    courseItem: {
        marginBottom: '0.5rem',
    },
    courseLink: {
        textDecoration: 'none',
        color: '#007bff',
    },
};

export default Courses;
