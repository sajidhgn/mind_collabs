"use client";
import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../Logo';
import { routes } from '@/app/routes';

const Header = () => {
    const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect will only run once (on mount)

  const headerClassName = scrolling ? 'scrolled' : '';
    return (
        <section className={`header-section ${headerClassName}`}>
            <Navbar expand="lg" className="fixed-top">
                <Container fluid>
                    <Navbar.Brand href={routes.home}><div> <Logo /> Mind Collab Collective</div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href={routes.home}>Events</Nav.Link>
                            <Nav.Link href={routes.blogs}>Blogs</Nav.Link>
                            <Nav.Link href={routes.services}>Services</Nav.Link>
                            <Nav.Link href={routes.aboutus1}>About us 1</Nav.Link>
                            <Nav.Link href={routes.aboutus2}>About us 2</Nav.Link>
                            <Nav.Link href={routes.contactus}>Contact us</Nav.Link>
                            <Nav.Link href={routes.contactus} className='dbtn'>Join Therapist Directory</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    )
}

export default Header;