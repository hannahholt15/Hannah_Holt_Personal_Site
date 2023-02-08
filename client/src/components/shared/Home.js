import { Container, Row, Col } from "react-bootstrap";
import { cardContainer, cardImageContainer, CardImage, cardText } from "../styles/shared";
import HannahProfile1 from '../../images/HannahProfile1.jpg';
import Footer from "../shared/Footer";

const Home = () => (
    <>
      <Container as={cardContainer}>
        <Row>
            <Col as={cardImageContainer}>
                <CardImage 
                    alt={HannahProfile1.jpg}
                    Img src={HannahProfile1}
                />
            </Col>
            <Col as={cardText} className='main-font'>
                <h3>Hello</h3>
                <p><strong>Who</strong> | Hannah Holt</p>
                <p><strong>What</strong> | Full-Stack Developer</p>
                <p><strong>When</strong> |  2022 - Present</p>
                <p><strong>Where</strong> | Salt Lake City, Utah</p>
                <p><strong>Why</strong> | Personal & Professional growth</p>
            </Col>
        </Row>
    </Container>
    <br/>
    <br/>
    <Footer/>


    </>
  )  
 export default Home;