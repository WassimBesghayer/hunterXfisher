import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './styling/navbar.css'
import { useSelector } from 'react-redux';

function NavBarr() {
    const user = useSelector((state) => state.user.user);
  return (
    <div className='core-navbar'>
    <Navbar expand="lg" className="navbar-body mynav">
      <Container fluid>
        <Navbar.Brand href='/'>hunter &nbsp;
          <img className="img-fluid mb-1 " src="/assets/gun-fishing-rod.png"/> 
          &nbsp; fisher
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 products_group"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Nav.Link><Link className='nav-link' to="/hunting">Hunting</Link></Nav.Link>
            <Nav.Link><Link className='nav-link' to="/fishing">Fishing</Link></Nav.Link> 

            <Nav.Link><Link className='nav-link' to="/camping">Camping</Link></Nav.Link>
          </Nav>

          <Form className="d-flex" id='search-form'>
            <Form.Control
              type="search"
              placeholder="Fetch what you need !"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        { user? <div className='icons'>
            <Link to="/basket"><svg style={{width:"20px"}} fill="#ffad87" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></Link>
            <Link to="/favorates"><svg  style={{width:"20px"}} fill="#ffad87" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></Link>
            <Link to="/profil"><svg style={{width:"20px"}} fill="#ffad87" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg></Link>
          </div>:<div id='sign-in'> <Nav.Link><Link className='nav-link' to="/login">Sign in</Link></Nav.Link></div>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBarr