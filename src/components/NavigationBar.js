import { Navbar, Container, Nav } from "react-bootstrap";
import "../style/landingpage.css";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>Movie Alone</Navbar.Brand>
          <Nav>
            <Nav.Link>Popular</Nav.Link>
            <Nav.Link>Upcoming</Nav.Link>
            <Nav.Link>Series</Nav.Link>
            <Nav.Link>Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
