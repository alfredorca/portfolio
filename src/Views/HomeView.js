import { Col, Container, Row } from "react-bootstrap";
import HomeTitle from "../components/HomeTitle";
import Thumbnails from "../components/Thumbnails";

const HomeView = () => {
  return (
    <Container fluid>
      <Row className="alfredosCard">
        <Col md={{ span: 10, offset: 1 }} xs={{ span: 11, offset: 1 }}>
          <Container fluid>
            <p className="alfredosCardText">Alfredo Cedeno </p>
            <HomeTitle />
          </Container>
        </Col>
        <Col>
        <Container>
          <Thumbnails/>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeView;
