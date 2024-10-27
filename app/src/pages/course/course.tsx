import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTheory, CourseInterface } from './api/getTheory';

const Course: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Extract the course ID from the URL
    const [course, setCourse] = useState<CourseInterface | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    // Fetch course data when the component mounts or when the ID changes
    useEffect(() => {
        const fetchCourse = async () => {
            try {
                if (!id) {
                    throw new Error('No course ID provided');
                }
                const data = await getTheory(id);
                if (data && !Array.isArray(data)) {
                    setCourse(data);
                } else {
                    throw new Error('Course not found');
                }
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [id]);

    if (loading) {
        return <div>Loading course...</div>;
    }

    if (error || !course) {
        return (
            <div>
                <h2>Course Not Found</h2>
                <p>The course you're looking for does not exist.</p>
                <Link to="/courses">Back to Courses</Link>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h2>{course.name}</h2>
            {/* Render HTML content safely */}
            <div
                dangerouslySetInnerHTML={{ __html: course.text }}
                style={{ marginBottom: '1rem' }}
            ></div>
            <Link to={`/test/${course.testId}`} style={styles.button}>
                Start Test
            </Link>
        </div>
    );
};

// Simple styling
const styles = {
    container: {
        padding: '1rem',
    },
    button: {
        display: 'inline-block',
        padding: '0.5rem 1rem',
        backgroundColor: '#28a745',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '4px',
    },
};

export default Course;
