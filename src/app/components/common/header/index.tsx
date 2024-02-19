"use client";
import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../logo';
import { routes } from '@/app/routes';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
    const [scrolling, setScrolling] = useState(false);
    const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 0);
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClassName = scrolling ? 'scrolled' : '';
    return (
        <section className={`header-section ${headerClassName}`}>
            <Navbar expand="lg" className={`fixed-top ${pathname==="/podcasts"||pathname==="/contact-us"?scrolling?"":"blk":""} ${pathname.includes("/blogs")||pathname==="/aboutus1"?scrolling?"":"orange":""}`}>
                <Container fluid>
                    <Navbar.Brand as={Link} href={routes.home}><div> {pathname.includes("/blogs")||pathname==="/aboutus1"?<Logo fill="#E1906C" />:<Logo fill={scrolling?"#E1906C":""} />} Mind Collab Collective</div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link href={routes.home} className='nav-link'>Events</Link>
                            <Link href={routes.blogs} className='nav-link'>Blogs</Link>
                            <Link href={routes.services} className='nav-link'>Services</Link>
                            <Link href={routes.aboutus1} className='nav-link'>About us 1</Link>
                            <Link href={routes.aboutus2} className='nav-link'>About us 2</Link>
                            <Link href={routes.contactus} className='nav-link'>Contact us</Link>
                            <Link href={routes.contactus} className='dbtn' style={{ backgroundColor: `${scrolling?'#E1906C':""}`}}>Join Therapist Directory</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    )
}

export default Header;


