import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = (props) => {
    return (
        <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary bg-secondary">
            <Container fluid>
                <Navbar.Brand className="text-light" href="#">
                    EpiBook
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-left'>
                        <Nav.Link className="text-light" href="#">Home</Nav.Link>
                        <Nav.Link className="text-light" href="#">About</Nav.Link>
                        <Nav.Link className="text-light" href="#">Browse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;