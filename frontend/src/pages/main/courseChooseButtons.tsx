import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CourseChooseButtons = () => {
    const location = useLocation();

    return (
        <div className="flex space-x-4 justify-center mt-8">
            <Link to="/">
                <Button
                    className={`${
                        location.pathname === '/' ? 'bg-[#87888D]' : 'bg-[#D9D9D9]'
                    } border-none rounded-[15px] tracking-[10px] w-[200px] h-[50px]`}
                >
                    COURSE
                </Button>
            </Link>
            <Link to="/soft-skills">
                <Button
                    className={`${
                        location.pathname === '/soft-skills' ? 'bg-[#87888D]' : 'bg-[#D9D9D9]'
                    } border-none rounded-[15px] tracking-[10px] w-[200px] h-[50px]`}
                >
                    SOFT SKILLS
                </Button>
            </Link>
        </div>
    );
};

export default CourseChooseButtons;
