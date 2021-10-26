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
              <Image className="img-fluid shadow-4 aboutImage" src={pic} />
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
          lg={3}
          md={{ span: 8, offset: 2 }}
          xs={{ span: 8, offset: 2 }}
        >
          <Container className="aboutContainer">
            <CodeIcon fontSize="large" />
            <h5>Experience</h5>
            <p>
              Graduate Full-Stack Developer from Ironhack Miami, AA in Computer
              Science from Miami-Dade College
            </p>
          </Container>
        </Col>
        <Col
          xl={{ span: 2, offset: 1 }}
          lg={3}
          md={{ span: 8, offset: 2 }}
          xs={{ span: 8, offset: 2 }}
        >
          <Container className="aboutContainer">
            <SchoolIcon fontSize="large" />
            <span>Always learning</span>
            <p>
              I love learning new things and taking new challenges. I thrive
              working under pressure and applying recently acquired knowledge
            </p>
          </Container>
        </Col>
        <Col
          xl={{ span: 2, offset: 1 }}
          lg={3}
          md={{ span: 8, offset: 2 }}
          xs={{ span: 8, offset: 2 }}
        >
          <Container className="aboutContainer">
            <EmojiObjectsIcon fontSize="large" />
            <h5>Skills</h5>
            <p>
              Javascript, Bootstrap/Mui, HTML5, CSS, Sass, ES6, React.js,
              Node.js, MongoDB
            </p>
          </Container>
        </Col>
        <Col
          xl={{ span: 2, offset: 1 }}
          lg={3}
          md={{ span: 8, offset: 2 }}
          xs={{ span: 8, offset: 2 }}
        >
          <Container className="aboutContainer">
            <GamesIcon fontSize="large" />
            <h5>Hobbies</h5>
            <p>
              I like playing videogames, hiking, cooking, and of course,
              programming!
            </p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMeView;
