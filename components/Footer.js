import ScrollIntoView from 'react-scroll-into-view'

const Footer = () => {
    return (
        <div className='bg-dark navbar footer'>
          <h5>English Direct 2021</h5>
     <ul>
              <li><ScrollIntoView selector="#courses">
  <button className="btn btn-primary btn-sm">
   Courses
  </button>
</ScrollIntoView></li>
              <li><ScrollIntoView selector="#questions">
  <button className="btn btn-primary btn-sm">
   Questions
  </button>
</ScrollIntoView></li>
              <li><ScrollIntoView selector="#reviews">
  <button className="btn btn-primary btn-sm">
   Reviews
  </button>
</ScrollIntoView></li>
            
              <li><ScrollIntoView selector="#about">
  <button className="btn btn-primary btn-sm">
   About
  </button>
</ScrollIntoView></li>
              <li><ScrollIntoView selector="#experiences">
  <button className="btn btn-primary btn-sm">
   Experience
  </button>
</ScrollIntoView></li>
              <li><ScrollIntoView selector="#blogs">
  <button className="btn btn-primary btn-sm">
   Blog
  </button>
</ScrollIntoView></li>
     
              </ul>   
        </div>
    )
}

export default Footer
