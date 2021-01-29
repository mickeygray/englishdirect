import VideoModal from "./VideoModal"
import QuizModal from "./QuizModal"
import Image from "next/image" 
import {useState,useCallback} from 'react'
const CourseItem = ({course}) => {

    const [vidState, setVidState] = useState(false)

    const setClass = useCallback(()=>{
        setVidState(prevState => !prevState)
    },[])
    const {title, cost, experienceLevel, description, img1, video} = course
    return (
        <div>
     
        <div className='card bg-secondary'>
            <div className="grid-2a">
         <div >
            <a></a>
        </div>
         <div style={{marginLeft:'25px'}}>
           <span className='card bg-success' style={{ borderRadius:'10px', color:'#333'}}><b>{cost}</b></span>
         </div>
         </div>
         <br/>
         <div>
           <h3 className='text-primary'>{title}</h3> 
           <h4 className='text-center'>{description}</h4>
      {vidState ? <VideoModal setClass={setClass} video={video}/> : <Image src={img1} height ='800px' width='800px' alt='English Direct Rebecca Warner' />}
           Experience Level: {experienceLevel}
           <ul>
               <li><a onClick={()=>setVidState(prevState => !prevState)}>Sample Lecture</a></li>
               <li><a onClick={()=>setVidState(prevState => !prevState)}>Sample Quiz</a></li>
          
            </ul>
            </div>
        </div>
        </div>
    )
}

export default CourseItem
