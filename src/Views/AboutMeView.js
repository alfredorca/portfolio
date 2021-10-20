import { Container, Image, Row } from "react-bootstrap"
import pic from '../images/unnamed-modified.png'

const AboutMeView = () => {
 return (
  <Container fluid>
  <Row className='aboutMain'>
   <Container>
   <div className="aboutCard">
    <Image  className='aboutImage' src={pic}/>
    <p>Alfredo Cedeno</p>
   </div>
   </Container>
  </Row>
  </Container>
 )
}

export default AboutMeView
