import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Thumbnails = () => {
  return (
    <Row>
      <Col
        xl={{ span: 3, offset: 1 }}
        lg={{ span: 9, offset: 2 }}
        md={{ span: 9, offset: 2 }}
        xs={{ span: 9, offset: 2 }}
      >
        <Link to='/about' style={{textDecoration: 'none'}}>
        <Container id="thumbnailContainer" fluid>
          <i class="bi bi-journal-code codeJournal"></i>
          <p>About</p>
        </Container>
        </Link>
      </Col>
      <Col
        xl={{ span: 3, offset: 1 }}
        lg={{ span: 9, offset: 2 }}
        md={{ span: 9, offset: 2 }}
        xs={{ span: 9, offset: 2 }}
      >
        <Container id="thumbnailContainer2">
          <i class="bi bi-briefcase-fill codeJournal"></i>
          <p>Projects</p>
        </Container>
      </Col>
      <Col
        xl={{ span: 3, offset: 1 }}
        lg={{ span: 9, offset: 2 }}
        md={{ span: 9, offset: 2 }}
        xs={{ span: 9, offset: 2 }}
      >
        <Container id="thumbnailContainer3">
          <i class="bi bi-person-lines-fill codeJournal"></i>
          <p>Contact</p>
        </Container>
      </Col>
    </Row>
  );
};

export default Thumbnails;
