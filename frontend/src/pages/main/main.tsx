import CourseChooseButtons from "./courseChooseButtons";
import RandomButtons from "./randomButtons";
import backGroundSVG from './Frame 8.svg';

const Home = () => {
    return (        
        <div 
    className="flex flex-col h-screen w-screen  bg-top bg-center bg-no-repeat"
    style={{
        backgroundImage: `url(${backGroundSVG})`
    }} >
            <CourseChooseButtons />
            <div className="mt-16">
            <RandomButtons />
        </div>
        </div>
    );
};

export default Home;
