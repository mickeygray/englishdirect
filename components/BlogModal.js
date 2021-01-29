import parse from "html-react-parser"

const BlogModal = ({blog , setBlogView}) => {

    const {p1, p2, p3, p4, img1, title} = blog
    
    return (
        <div className='card bg-secondary text-left'>
            <span className='bg-light' onClick={setBlogView} style={{float:'right'}}><a>X</a></span>
            <br/>
            <br/>

            <h3 className='text-center'>{parse(title)}</h3>
        

            <div>
              {parse(p1)}
            </div>
            <div>
              {parse(p2)}
            </div>
            <div>
              {parse(p3)}
            </div>
            <div>
              {parse(p4)}
            </div>
            
        </div>
    )
}

export default BlogModal
