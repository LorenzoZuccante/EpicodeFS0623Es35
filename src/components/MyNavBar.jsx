import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const MyNavbar = (props) => {
    return (
        <Navbar collapseOnSelect expand="md" className="bg-body-dark bg-dark">
            <Container fluid>
                <Navbar.Brand className="text-light" href="#">
                    <img className='img1' src="./assets/logo.png" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='d-flex justify-content-between w-100'>
<div className='d-block d-md-flex'>
                            <Link to="/" className='nav-link text-light'>Home</Link>
                           <Link to="/TvShows" className='nav-link text-light'>TV Shows</Link>
                            <Nav.Link className="text-light" href="#">Movies</Nav.Link>
                            <Nav.Link className="text-light" href="#">Recently Added</Nav.Link>
                            <Nav.Link className="text-light" href="#">My List</Nav.Link>
</div>
<div className='d-none d-md-flex'>
                        <Nav.Link className="text-light" href="#"><i class="bi bi-search"></i></Nav.Link>
                        <Nav.Link className="text-light" href="#">KIDS</Nav.Link>
                        <Nav.Link className="text-light" href="#"><i class="bi bi-bell"></i></Nav.Link>
                        <Nav.Link className="text-light" href="#"><i class="bi bi-person"></i></Nav.Link>
</div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;
