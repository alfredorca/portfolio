import { Col, Container, Image, Row } from "react-bootstrap";
import HomeTitle from "../components/HomeTitle";
import pic from "../images/unnamed-modified.png";

const HomeView = () => {
  return (
    <Container fluid>
      <Row className='alfredosCard'>
      <Col md={{span: 4, offset: 1}} s={8} xs={6}>
      <Image src={pic} roundedCircle className='alfredosPic' fluid />
      </Col>
      <Col md={{span: 6, offset: 1}} s={8} xs={6} className='alfredosCardText'>
      <HomeTitle/>
      </Col>
      </Row>
    </Container>
  );
};

export default HomeView;

