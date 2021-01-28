import BlogItem from "./BlogItem"
import ReviewItem from "./ReviewItem"
import FaqItem from "./FaqItem"
import ExperienceItem from "./ExperienceItem"
import CourseItem from "./CourseItem"
import Hero from "./Hero"
import Image from "next/image"
import fetch from "isomorphic-fetch"
import {useEffect, useState} from "react"
import {useAppContext} from "../contexts/state.js"

const Home = ({blogs, courses, reviews,faqs, experiences}) => {
useEffect(()=>{
  fetch('https://api.ipify.org?format=jsonp?callback=?', {
      method: 'GET',
      headers: {},
    })
    .then(res => {
      return res.text()
    }).then(ip => {
      
	    console.log(typeof ip)
    setIp({ipadd:ip, startTime:(new Date()).getTime(),});  
    })
 
},[])


const [ip1,setIp]=useState({ipadd:'', startTime:''})
const {sharedState} = useAppContext()
const {clicks,routes} = sharedState	
const {ipadd, startTime} = ip1	

const siteJoin = Intl.DateTimeFormat(
      "fr-CA",
      {
        timeZone: "America/Los_Angeles",
      },
      {
        year: "numeric",
        month: "numeric",
        day: "numeric",
	hour: "numeric",
	minute:"numeric"      
      }
    ).format(new Date(Date.now()))
	
console.log(routes)
const packet = {ipadd,siteJoin,startTime,clicks}

if (process.browser) {
  window.onbeforeunload = () => {
  //setIp({ ...ipadd, startTime, endTime, clicks, routes})


   fetch('/api/lookup', {
	   method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(packet),
      keepalive:true
    }).then((res) => {
      res.status === 200 ? console.log('gotcha!') : ''
    })

  }
}


    return (
        <div>
        <Hero />
        
        <div className='container'>
        <div>
        {courses.map(course => (<CourseItem key={course.key} course={course}/>))}
        </div>
        {blogs.map(blog => (<BlogItem key={blog.key} blog={blog}/>))}
        <div>
        {reviews.map(review => (<ReviewItem key={review.key} review={review}/>))}
        </div>
    <div className="grid-2">
       <div>
        <h1>À Propos</h1>
        <h3>Who Am I?</h3>
        <h4>Tailor-made Online English Classes to Meet Your Needs</h4>
        <p>
          For seven years, I've offered quality English language classes to students across the world. I've worked exclusively online since 2018 
          and incorporate current events, engaging videos and content, and a variety of dynamic exercises to help students achieve their goals. 
          I love working with motivated adult students and professionals and adapt myself to individual needs and fields. I'm proud to work with 
          students who want to gain confidence to showcase their talents and abilities. My services are affordable, challenging yet fun, 
          and tailored to your needs. Contact me and we'll see what we can do for you. 
        </p>
       </div>
       <div>
          <h1>Accueil: </h1>
          <h3>Qui suis-je?</h3>
          <h4>Fournir un service exceptionnel aux élèves</h4>
          <p>Je reconnais le potentiel de chacun de mes élèves. Grâce à une approche personnalisable, les résultats de mes élèves en France 
              n'ont fait que s'améliorer. Je suis une professeure de langue patiente, dynamique, professionnelle et je sais m'adapter pour 
              vous aider à atteindre vos objectifs. Contactez-moi, et mettons-nous au travail. </p>
       </div>
  </div>


        <div>
        {faqs.map(faq => (<FaqItem key={faq.key} faq={faq}/>))}
        </div> 
        <div>
            <h3>Mon Éxperience</h3>
            <div className="grid-2">
                <div className="">
            <h3>A Professional Teacher at Your Service</h3>
            <h4>At Your Service For All Your Professional English Related Needs</h4>
                </div>
                <div className="">
                    <Image src="/rwarne1.jpg" height='400' width='400' alt="English Direct Rebecca Warner"/>
                </div>
        </div>
          
        {experiences.map(experience => (<ExperienceItem key={experience.key} experience={experience}/>))}
        </div>

        </div>    
        </div>
    )
}

export default Home
