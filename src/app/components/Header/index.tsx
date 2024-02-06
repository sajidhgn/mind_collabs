"use client";
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../Logo';
import { routes } from '@/app/routes';

const Header = () => {
    return (
        <section className="header-section">
            <Navbar expand="lg" className="fixed-top">
                <Container fluid>
                    <Navbar.Brand href="#home"><div> <Logo /> Mind Collab Collective</div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href={routes.home}>Events</Nav.Link>
                            <Nav.Link href={routes.blogs}>Blogs</Nav.Link>
                            <Nav.Link href={routes.services}>Services</Nav.Link>
                            <Nav.Link href={routes.aboutus}>About us</Nav.Link>
                            <Nav.Link href={routes.contactus}>Contact us</Nav.Link>
                            <Nav.Link href="#link" className='dbtn'>Join Therapist Directory</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    )
}

export default Header;