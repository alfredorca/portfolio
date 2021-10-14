import { Col, Container, Image, Row } from "react-bootstrap"
import pic from '../images/Icon1.png'

const Thumbnails = () => {
 return (
   <Row>
     <Col md={{ span: 2, offset: 1 }} xs={{ span: 9, offset: 2 }}>
       <Container id="thumbnailContainer">
         <i class="bi bi-journal-code codeJournal"></i>
         <p>About Me</p>
       </Container>
     </Col>
     <Col md={{ span: 2, offset: 2 }} xs={{ span: 9, offset: 2 }}>
       <Container id="thumbnailContainer2">
         <Image src={pic} roundedCircle className="firstIcon" />
         <p>Projects</p>
       </Container>
     </Col>
     <Col md={{ span: 2, offset: 2 }} xs={{ span: 9, offset: 2 }}>
       <Container id="thumbnailContainer3">
         <i class="bi bi-person-lines-fill codeJournal"></i>
         <p>Contact</p>
       </Container>
     </Col>
   </Row>
 );
}

export default Thumbnails
