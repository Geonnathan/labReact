import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function NavBar() {
    let idUser = sessionStorage.getItem('idUser');
    const navigate = useNavigate();

    function logout (){ 
        sessionStorage.clear();
        navigate("/login");
    }

    return(
        <div>
            <Navbar className="nav-2" expand = "lg">
                    <Navbar.Brand href="http://localhost:5173">
                        <p className="mb-1">Lab-react</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        {idUser ? (
                            <Nav.Link onClick={logout}>logout</Nav.Link>
                        ): (
                            <Nav.Link href="/login">login</Nav.Link>
                        )}
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    );
    
}

export default NavBar;