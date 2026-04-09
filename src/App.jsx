import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faDice,
  faHeart,
  faBolt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import charImg from "./assets/char_generate.png";
import coolImg from "./assets/cool_char.jpg";
import gokuImg from "./assets/Goku.jpg";

function App() {
  return (
    <>
      <Container className="frame rounded-4 min-vh-100 d-flex flex-column align-items-center justify-content-evenly">
        <Navbar />

        <div className="row g-0 align-items-center pt-5 pt-lg-3 w-100">
          <div className="col-2">
            <div>
              <h1 className="position-relative d-inline-block">
                crypko
                <span>
                  <FontAwesomeIcon
                    className="heart position-absolute"
                    icon={faHeart}
                    color="red"
                  />
                </span>
              </h1>
            </div>
          </div>

          <div className="col-2 d-flex justify-content-end offset-8">
            <Buttons />
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-xl-5 order-xl-1 text-center text-lg-start">
            <div>
              <h1 className="heading">ANIME CHARACTER GENERATION</h1>
            </div>
          </div>

          <div className="col-xl-4 col-md-5 offset-md-1 offset-xl-0 order-xl-3 mt-5 d-flex justify-content-center">
            <Character />
          </div>

          <div className="col-xl-2 col-md-5 order-xl-2 offset-xl-1 d-flex flex-column justify-content-end mt-4">
            <div className="d-flex justify-content-center justify-content-lg-start">
              <img className="charImg" src={charImg} alt="img" />
            </div>
          </div>

          <div className="col-xl-4 order-xl-4 offset-xl-1 mt-5 d-flex justify-content-center">
            <Anime />
          </div>

          <div className="col-xl-5 order-xl-5 offset-xl-2 my-5 d-flex justify-content-center">
            <Platform />
          </div>
        </div>
        
      </Container>
    </>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={`mobile-overlay ${isOpen ? "open" : ""}`}>
        <div className="overlay-content w-100 h-100">
          <div
            className="close-btn"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon className='pop-on-hover' icon={faTimes} />
          </div>
          <Nav className="flex-column text-center">
            <Nav.Link className='text-dark pop-on-hover' href="#" onClick={() => setIsOpen(false)}>
              Guideline
            </Nav.Link>
            <Nav.Link className='text-dark pop-on-hover' href="#" onClick={() => setIsOpen(false)}>
              Faq
            </Nav.Link>
            <Nav.Link className='text-dark pop-on-hover' href="#" onClick={() => setIsOpen(false)}>
              Contact Us
            </Nav.Link>
            <Nav.Link className='text-dark pop-on-hover' href="#" onClick={() => setIsOpen(false)}>
              Discord
            </Nav.Link>
            <Nav.Link className='text-dark pop-on-hover' href="#" onClick={() => setIsOpen(false)}>
              Twitter
            </Nav.Link>
          </Nav>
        </div>
      </div>

      <Container className="rounded-4 navbar fixed-top text-center p-1">
        <Row className="w-100 d-md-none">
          <Col
            onClick={() => setIsOpen(true)}
            style={{ cursor: "pointer" }}
            
          >
            <FontAwesomeIcon icon={faBolt} className="bolt pop-on-hover" />
          </Col>
        </Row>

        <Row className="justify-content-center w-100 d-none d-md-flex" style={{cursor:'pointer'}}>
          <Col className='link-on-hover' md={{ span: 2, offset: 1 }}>Guideline</Col>
          <Col className='link-on-hover' md={2}>Faq</Col>
          <Col className='link-on-hover' md={2}>Contact Us</Col>
          <Col className='link-on-hover' md={2}>Discord</Col>
          <Col className='link-on-hover' md={2}>Twitter</Col>
        </Row>
      </Container>
    </>
  );
}

function Character() {
  return (
    <>
      <div className="character pop-on-hover">
        <img src={coolImg} className="ani-img" alt="Goku" />
      </div>
    </>
  );
}

function Anime() {
  return (
    <>
      <div className="anime-wrapper position-relative">
        <div className="anime pop-on-hover">
          <img src={gokuImg} className="ani-img" alt="JJK" />
        </div>
        <div className="capsule position-absolute top-50 start-100 translate-middle">
          <div className="dice pop-on-hover rounded-pill d-flex flex-column justify-content-end align-items-center text-center gap-1">
            <FontAwesomeIcon icon={faDice} size="lg" />
            <p className="lh-1">Create Anime</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Buttons() {
  return (
    <button className="button rounded-pill pop-on-hover">Join Us</button>
  );
}

function Platform() {
  return (
    <>
      <div className="platform p-3 px-4 d-flex flex-column justify-content-center">
        <h3 className="flex-shrink-1">SMARTPHONE APP MEMES</h3>
        <p className="flex-shrink-1">
          The smartphone application MEMES, where Crypko serves as the core
          technology behind, is now available in Apple App Store & google Play.
        </p>
        <div className="d-flex align-items-center">
          <div className="d-flex">
            <div className="logo pop-on-hover rounded-circle d-flex justify-content-center align-items-center p-3">
              <FontAwesomeIcon icon={faApple} size="lg" />
            </div>
            <div className="logo apple pop-on-hover rounded-circle d-flex justify-content-center align-items-center p-3">
              <FontAwesomeIcon className='' icon={faGooglePlay} size="lg" />
            </div>
          </div>

          <div className="download d-flex align-items-center justify-content-center ms-auto">
            <span className="mx-auto">DOWNLOAD </span>
            <FontAwesomeIcon className="icon ms-auto pop-on-hover" icon={faDownload} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
