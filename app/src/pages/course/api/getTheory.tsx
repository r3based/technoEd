export interface CourseInterface {
    id: string;
    name: string;
    text: string;
    testId: string;
}

const courses: CourseInterface[] = [
    {
        id: '1',
        name: 'Introduction to React',
        text: '<p>This is a comprehensive course on React.</p><h1>Бесперспективняк</h1>',
        testId: 'test1',
    },
    {
        id: '2',
        name: 'Advanced JavaScript',
        text: '<p>Dive deep into JavaScript concepts.</p>',
        testId: 'test2',
    },
];

/**
 * Fetch all courses or a specific course by ID.
 * @param id Optional course ID. If provided, fetches the specific course.
 * @returns Promise<Course[]> if no ID is provided, otherwise Promise<Course | null>
 */
export const getTheory = async (id?: string): Promise<CourseInterface[] | CourseInterface | null> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (id) {
        const course = courses.find((course) => course.id === id);
        return course || null;
    }

    return courses;
};
