import { Col, Container, Image, Row } from "react-bootstrap"
import pic from '../images/Icon1.png'

const HomeThumbnails = () => {
 return (
  <Container>
   <Row>
    <Col md={{span: 3, offset: 1}} xs={{span: 3, offset: 1}} id='thumbnailsContainer'>
    <Image src={pic} fluid rounded/>
    </Col>
    <Col md={{span: 3, offset: 1}} xs={{span: 3, offset: 1}} id='thumbnailsContainer'>
    Hello
    </Col>
    <Col md={{span: 3, offset: 1}} xs={{span: 3, offset: 1}} id='thumbnailsContainer'>
    Hello
    </Col>
   </Row>
  </Container>
 )
}

export default HomeThumbnails