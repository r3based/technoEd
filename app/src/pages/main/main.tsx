import CourseChooseButtons from "./courseChooseButtons";

const Home = () => {
    return (        
        <div className="flex flex-col h-screen w-screen">
            <CourseChooseButtons />
            <h2>Home Page</h2>
            <p>Welcome to the Home page!</p>
        </div>
    );
};

export default Home;
