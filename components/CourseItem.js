import VideoModal from "./VideoModal"
import QuizModal from "./QuizModal"
import Image from "next/image" 
const CourseItem = ({course}) => {
    return (
        <div>
            {course.title}
        </div>
    )
}

export default CourseItem
