import { Col, Container, Image, Row } from "react-bootstrap";
import HomeThumbnails from "../components/HomeThumbnails";
import HomeTitle from "../components/HomeTitle";

const HomeView = () => {
  return (
    <Container fluid>
      <Row className='alfredosCard'>
        <Col md={{ span: 9, offset: 1 }} xs={{ span: 9, offset: 1 }}>
          <Container fluid>
            <p className='alfredosCardText'>Alfredo Cedeno </p>
            <HomeTitle />
          </Container>
        </Col>
        <Col md={{ span: 9, offset: 1 }} xs={{ span: 9, offset: 1 }}>
          <HomeThumbnails />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeView;

