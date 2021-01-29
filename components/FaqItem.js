import {useState} from 'react'
import parse from "html-react-parser"
const FaqItem = ({faq}) => {

    const [qState,setQState] = useState(true)

    const onClick = e =>{
        setQState(prevState => !prevState)

    }

    const {question, answer} = faq
    return (
<div>
        {qState ? 
        (<div className='card bg-light' onClick={onClick}>
            
           <a> <h3><i className="far fa-question-circle"></i>Question:</h3>
            {parse(question)}</a>
        </div>) : 
        <div className='card bg-secondary' onClick={onClick}>
            <a><h3><i className="far fa-hand-point-right"></i>Answer:</h3>
            {parse(answer)}</a>
        </div>}
    </div>
    )
}

export default FaqItem
