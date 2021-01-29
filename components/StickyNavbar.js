import Link from "next/link"
import {useState, useEffect} from "react"
import Image from 'next/image'
import ScrollIntoView from 'react-scroll-into-view'


/*<Image
          onClick={onClick}
            src={style.background=== "black" ? "/logo2.png" : "/logo.png"}
            alt='Find Nationally Rated CPA Firms Near Me'
    
              width= "200px"
              height= "100px"
         
 
          />
*/
const StickyNavbar = () => {
  const [style, setStyle] = useState({});
let position
if (process.browser) {
  position = window.pageYOffset;
}

  const onClick = () => {
    if (process.browser) {  window.scrollTo(0, 0)}
  
  };
  useEffect(() => {
        if (process.browser) {
    window.addEventListener("scroll", onScroll);
    setStyle({
      backgroundColor: "#f4f4f4",
      overflowY: "hidden",
      marginLeft: "100px",
      height:'175px',
      overflowX: "hidden",
        width:'100vw'
    });
  }
  }, []);


  useEffect(() => {
    if (position === 0) {
      setStyle({
        backgroundColor: "rgba(52, 52, 52, 0.1)",
        zIndex: "999999999999999",
        height:'175px',
        width:'100vw'
      });
    }
  }, [position, setStyle]);

  const onScroll = () => {
    setStyle({
      overflowY: "hidden",
      overflowX: "hidden",
      position: "sticky",
      height:'175px',
      width:'100vw',
      top: "0",
      background: "black",
      color:'white',
      zIndex: "999999999999999",
    });
  };

  return (

   

     <div className='navbar'  onScroll={onScroll} style={style}> 
     <h2 style={{paddingTop:'50px'}} onClick={onClick}> <Image src='/logo1.png' height='175px' width='200px' alt='tax relief reviews'/>     </h2> 
            <ul style={{marginBotton:'100px'}}>
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
       

    
 

  );
};

export default StickyNavbar;
