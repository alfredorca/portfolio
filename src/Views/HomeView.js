import { Col, Container, Row } from "react-bootstrap";
import HomeTitle from "../components/HomeTitle";
import Thumbnails from "../components/Thumbnails";

const HomeView = () => {
  return (
    <Container fluid>
      <Row className="alfredosCard">
        <Col
          lg={{ span: 10, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          xs={{ span: 11, offset: 1 }}
        >
          <Container fluid>
            <p className="alfredosCardText">Alfredo Cedeno </p>
            <HomeTitle />
          </Container>
        </Col>
        <Col lg={12} md={12} xs={12}>
          <Container>
            <Thumbnails />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeView;
