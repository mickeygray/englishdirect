import Image from "next/image"
import BlogModal from "./BlogModal"
import {useState, useCallback} from "react"
import parse from 'html-react-parser'

const BlogItem = ({blog}) => {

   const [blogState, setBlogState] = useState(false)

   const setBlogView = useCallback(()=>{ setBlogState(prevState => !prevState)},[])

    


    return (
        <div>
        { blogState ? <BlogModal setBlogView={setBlogView} blog={blog}/> : 
        <div style={{width:'700px'}}className='card bg-light grid-2'>
          <div> <h3><a onClick={() => setBlogState(prevState => !prevState)}>{parse(blog.title)}</a></h3> </div>
          <div><Image src={blog.img1} alt='English Direct Rebecca Warner' height='100px' width='100px' /> </div>
       </div>}
       </div>
    )
}


export default BlogItem
