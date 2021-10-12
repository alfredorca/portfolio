import { Container, Image, Row } from "react-bootstrap";
import pic from "../images/unnamed-modified.png";

const HomeView = () => {
  return (
    <Container fluid>
      <Row>
        <section className="homeMain">
          <div className="container homeContainer">
            <div className="alfredosPic">
              <Image src={pic} roundedCircle height={"500rem"} />
            </div>
            <div className="homeText">
              <h2>Alfredo Cedeno</h2>
              <p>Web Developer && Software Engineer</p>
            </div>
          </div>
        </section>{" "}
      </Row>
    </Container>
  );
};

export default HomeView;
