import { Button } from "@/components/ui/button";
const CourseChooseButtons = () => {
    return (
        <div className="flex space-x-4 justify-center mt-8">
            <Button className="bg-[#87888D] border-none rounded-[15px] tracking-[10px] w-[200px] h-[50px]">КУРС</Button>
            <Button className="bg-[#D9D9D9] border-none rounded-[15px] tracking-[10px] w-[200px] h-[50px]">SOFT SKILLS</Button>
        </div>
    );
};

export default CourseChooseButtons;
