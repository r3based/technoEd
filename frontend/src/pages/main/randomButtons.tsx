import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const RandomButtons = () => {
    const buttonIds = [1, 2, 3, 4];

    return (
        <div className="flex flex-col gap-4 mt-8 items-center">
            {buttonIds.map(id => (
                <Link key={id} to={`/courses/${id}`} className={`${id % 2 === 0 ? 'ml-64' : 'mr-64'}`}>
                    <Button className="w-[100px] h-[100px] bg-[#87888D] flex items-center justify-center">
                    <span className="text-white text-3xl font-extrabold">{id}</span>
                    </Button>
                </Link>
            ))}

                <Link key={7} to={`/courses/${7}`} className={`${'mr-64'}`}>
                    <Button className="w-[200px] h-[100px] bg-[#87888D] flex items-center justify-center">
                    <span className="text-white text-3xl font-extrabold tracking-widest">FINAL</span>
                    </Button>
                </Link>
        </div>
    );
};

export default RandomButtons;
