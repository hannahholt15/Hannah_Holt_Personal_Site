import Carousel from 'react-bootstrap/Carousel';
import Footer from "../shared/Footer";


const About = () => (
    <>
    <Carousel className='main-font'>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1583621908511-e082803e3aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1327&q=80"
              alt="My Name is Hannah Holt"
            />
            <Carousel.Caption>
              <h1>Hello! My name is Hannah Holt</h1>
              <h5>I am currently searching for a company to join and further expand my skills. I love to develop projects that make life simpler.</h5>
              <h5>I am highly motivated to expand my skill set and take on new projects.</h5>
              <h5>I work great with other team members and under pressure.</h5>
              <h5> My recently used skills include: React.js, HTML, CSS, JavaScript, Ruby / Ruby on Rails, Microsoft Office,</h5>
              <h5> Time Management, Problem Solving, Multitasking, Self-Modivation, Active Listening.</h5>
            </Carousel.Caption>
          </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1583621908511-e082803e3aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1327&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h1> Education</h1>
            <h3> Cottonwood High School</h3>
            <h5> 05/2016 - High School Diploma</h5>
            <h3> DevPoint Labs </h3>
            <h5>11/2022- 02/2023 - Certificate Full Stack Development</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1583621908511-e082803e3aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1327&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1> Work Experience</h1>
              <h3> Golden Customer Care</h3>
              <h4>Customer Service & Email Support Representitive</h4>
              <h5> 06/2017- 11/2022</h5>
              <h5> Provide information regards to products, place and cancel orders. Answer customers questions about products, prices, availability and product uses. Respond to questions via email. </h5>
              <h3> Discover Financial Services</h3>
              <h4>Customer Service Representitive</h4>
              <h5> 05/2016- 05/2017</h5>
              <h5> Determine charges for services requested, collect payments and arrange billings. Complete balance tansfers. Update customers account information. Locate and notify customers of deliquent accounts by mail or telephone.</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Footer/>
  </>
)
      export default About;
