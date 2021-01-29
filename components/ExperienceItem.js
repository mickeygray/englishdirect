import parse from "html-react-parser"
import {useState} from 'react'


 
const ExperienceItem = ({experience}) => {
     const [credState, setCredState] = useState(true)
    const {credit, date, descrip, key} = experience

    return (
        <div onClick={()=> setCredState(prevState => !prevState)} className='card bg-secondary'>
         
          {credState ? 
          <div>            Title: {parse(credit)}

            <br/>

            Date: {date} 
            <br/>
            <div className='text-right'> Click for more info... </div>
            </div>
      : <div>{parse(descrip)} </div> 

            }
          

           

        </div>
    )
}

export default ExperienceItem
