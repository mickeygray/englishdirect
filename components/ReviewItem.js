import parse from "html-react-parser"

const ReviewItem = ({reviewa}) => {

    const{reviewer, date, review} = reviewa
    return (
        <div className='bg-secondary p-2' >
           
          <i>{parse(review)}</i> <br/>
          -<b>{reviewer}</b> {'  '} 
           <b>{date}</b>
            
        </div>
    )
}

export default ReviewItem
