import { Col, Container, Row } from "react-bootstrap";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactView = () => {
  return (
    <Row className="contactMain">
      <Col
        xxl={{ span: 2, offset: 2 }}
        xl={{ span: 3, offset: 1 }}
        lg={2}
        md={{ span: 3, offset: 1 }}
        xs={{ span: 8, offset: 2 }}
      >
        <Container>
          <div className="contactContainer">
            <div className="instagram">
              <InstagramIcon fontSize="large" />
            </div>
          </div>
        </Container>
      </Col>
      <Col
        xxl={{ span: 2, offset: 1 }}
        xl={{ span: 3, offset: 1 }}
        lg={2}
        md={{ span: 8, offset: 2 }}
        xs={{ span: 8, offset: 2 }}
      >
        <Container>
          <div className="contactContainer">
            <div className="gmail">
              <EmailIcon fontSize="large" />
            </div>
          </div>
        </Container>
      </Col>
      <Col
        xxl={{ span: 2, offset: 1 }}
        xl={{ span: 3, offset: 1 }}
        lg={2}
        md={{ span: 8, offset: 2 }}
        xs={{ span: 8, offset: 2 }}
      >
        <Container>
          <div className="contactContainer">
            <div className="github">
              <GitHubIcon fontSize="large" />
            </div>
          </div>
        </Container>
      </Col>
    </Row>
  );
};

export default ContactView;
