import Home from '../components/Home'
import path from "path"
import fs from "fs"
const index = ({blogs,reviews,courses,faqs, experiences}) => {
  return (
    <div>
      <Home blogs={blogs[0].blogs} experiences={experiences[0].experiences} reviews={reviews[0].reviews} courses={courses[0].courses} faqs={faqs[0].faqs} />
    </div>
  )
}

export default index

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const coursesDirectory = path.join(process.cwd(), 'courses')
  const courseNames = fs.readdirSync(coursesDirectory)
  const reviewsDirectory = path.join(process.cwd(), 'reviews')
  const reviewNames = fs.readdirSync(reviewsDirectory)
  const blogsDirectory = path.join(process.cwd(), 'blogs')
  const blogNames = fs.readdirSync(blogsDirectory)
  const faqsDirectory = path.join(process.cwd(), 'faqs')
  const faqNames = fs.readdirSync(faqsDirectory)
  const experiencesDirectory = path.join(process.cwd(), 'experiences')
  const experienceNames = fs.readdirSync(experiencesDirectory)


  const faqs = faqNames.map((filename) => {
    const filePath = path.join(faqsDirectory, filename)
    const faqs = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
   faqs,
    }
  })

  
  const experiences = experienceNames.map((filename) => {
    const filePath = path.join(experiencesDirectory, filename)
    const experiences = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
   experiences,
    }
  })


  const courses = courseNames.map((filename) => {
    const filePath = path.join(coursesDirectory, filename)
    const courses = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
   courses,
    }
  })

    const reviews = reviewNames.map((filename) => {
    const filePath = path.join(reviewsDirectory, filename)
    const reviews = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
   reviews,
    }
  })

    const blogs = blogNames.map((filename) => {
    const filePath = path.join(blogsDirectory, filename)
    const blogs = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
   blogs,
    }
  })
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      reviews,
      blogs,
      courses,
      faqs,
      experiences
    },
  }
}