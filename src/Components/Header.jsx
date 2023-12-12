import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {useContext} from "react";
import {LoggedInContext} from "../contexts/loggedInContext.jsx";
import {Link, useNavigate} from "react-router-dom";

export const Header = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(LoggedInContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false)

    return navigate("/")
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">NC News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Topics</Nav.Link>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <Button variant="outline-success" onClick={handleSignOut}>Sign Out</Button>
            ) : (
              <>
                <Link to={"/login"} className="btn btn-outline-primary me-2">Login</Link>
                <Button variant="outline-secondary" href="/signup" className="ms-2">Sign Up</Button>
              </>
            )}
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}