import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {

    return(
        <div>
            <Navbar className="nav-2" expand = "lg">
                    <Navbar.Brand href="http://localhost:5173">
                        <p className="mb-1">Page-name</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/login">login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    );
    
}

export default NavBar;