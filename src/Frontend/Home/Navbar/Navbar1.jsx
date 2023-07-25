import {
  Container,
  Navbar,
  // Button,
  Form,
  Nav,
  NavDropdown,
  Col,
  Row
  
} from "react-bootstrap";
import  "./Navbar.css"
import { FaShoppingCart,FaUserTie } from 'react-icons/fa';
const Navbar1 = () => {
return(
  <>
  <div>
    <Row >
      <Col>
    <img className="logo ms-2" sm={1} src={require("../../../image/logo1.png")} alt="" />
  </Col>
    <Col sm={9} className="mt-2 "> <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          
        </Form>
    </Col>
    <Col className="mt-2 icon1 ">
      <Row>
        <Col>
        <FaShoppingCart className="icon1 "/></Col>
        <Col><FaUserTie className="icon1 "/></Col>
      </Row>
      
      
      {/* </Col>
      <Col className="mt-2"> */}
      {/* <FaUserTie className="icon1 ms-3"/> */}

    </Col>
  </Row></div>
    <Navbar className="Navcss"    expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1">About</Nav.Link>
          <Nav.Link href="#action2">Contect</Nav.Link>
          <NavDropdown title="Categories" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Mobile</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Electronic
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Computer Ac
            </NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
)
};
export default Navbar1;