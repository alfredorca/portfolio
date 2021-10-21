import { Col, Container, Image, Row } from "react-bootstrap";
import pic from "../images/unnamed-modified.png";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import GamesIcon from "@mui/icons-material/Games";

const AboutMeView = () => {
  return (
    <Container fluid>
      <Row className="aboutMain">
        <Col xxl={4} xl={4} lg={4} md={4} xs={12}>
          <Container>
            <div className="aboutCard">
              <div className="aboutImageDiv">
                <Image className="img-fluid shadow-4 aboutImage" src={pic} />
              </div>
            </div>
          </Container>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={8} xs={12}>
          <Container>
            <div>
              <div className="aboutText">
                <div className="aboutTitle">
                  <p>Alfredo Cedeno</p>
                </div>
                <div className="aboutBio">
                  <p>
                    I'm a logic-approaching problem solver who thrills under
                    pressure and enjoys a challenging experience. I think about
                    the problem in front of me, examine the situation, sketch a
                    plan, and start working until the problem is solved. I'm a
                    computer science major who appreciates the importance of
                    good teamwork, thinking "outside of the box", and aspires to
                    keep learning every day. I have a background in management,
                    which has prepared to either be a great leader, or good at
                    following orders. I believe organization and good planning
                    is the key to success. Fluent in English and Spanish.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Col>
        <Col
          xl={{ span: 2, offset: 1 }}
          lg={{ span: 2, offset: 1 }}
          md={{ span: 9, offset: 2 }}
          xs={{ span: 9, offset: 2 }}
        >
          <Container className="aboutContainer">
            <CodeIcon />
            Experience
          </Container>
        </Col>
        <Col
          xl={{ span: 2, offset: 1 }}
          lg={{ span: 2, offset: 1 }}
          md={{ span: 9, offset: 2 }}
          xs={{ span: 9, offset: 2 }}
        >
          <Container className="aboutContainer">
            <SchoolIcon />
            Always learning
          </Container>
        </Col>
        <Col
          xl={{ span: 2, offset: 1 }}
          lg={{ span: 2, offset: 1 }}
          md={{ span: 9, offset: 2 }}
          xs={{ span: 9, offset: 2 }}
        >
          <Container className="aboutContainer">
            <EmojiObjectsIcon />
            Skills
          </Container>
        </Col>
        <Col
          xl={{ span: 2, offset: 1 }}
          lg={{ span: 2, offset: 1 }}
          md={{ span: 9, offset: 2 }}
          xs={{ span: 9, offset: 2 }}
        >
          <Container className="aboutContainer">
            <GamesIcon />
            Hobbies
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMeView;
