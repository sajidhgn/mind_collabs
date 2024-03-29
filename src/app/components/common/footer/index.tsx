"use client";
import Logo from "../logo";
import Link from "next/link";
import CustomImage from "../custom_image";
import { Container, Row, Col } from "react-bootstrap";
import { routes } from "@/app/routes";
import faceBookIcon from "@/app/assets/icons/facebook.svg";
import twitterIcon from "@/app/assets/icons/twitter.svg";
import linkedinIcon from "@/app/assets/icons/linkedin.svg";
import instagramIcon from "@/app/assets/icons/instagram.svg";

const Footer = () => {
    return (
        <section className="footer-section p70">
            <Container>
                <Row>
                    <Col lg={5} md={5} sm={12} xs={12}>
                        <div className="footer-logo">
                            <Link href={routes.home}>
                                <Logo />
                                Mind Collab Collective
                            </Link>
                            <p>We are an online community of mental health professionals seeking to make the experience of finding a
                                therapist easy.</p>
                            <ul className="footer-social">
                                <li><Link href="#"> <CustomImage src={faceBookIcon} alt="facebook" /></Link></li>
                                <li><Link href="#"> <CustomImage src={twitterIcon} alt="twitter" /></Link></li>
                                <li><Link href="#"> <CustomImage src={linkedinIcon} alt="linkedin" /></Link></li>
                                <li><Link href="#"> <CustomImage src={instagramIcon} alt="instagram" /></Link></li>
                              
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Row className="justify-content-end">
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className="footer-list">
                                    <ul>
                                        <li><Link href={routes.contactus}>Find a therapist</Link></li>
                                        <li><Link href="#">Services</Link></li>
                                        <li><Link href="#">Locations</Link></li>
                                        <li><Link href={routes.contactus}>Contact us</Link></li>
                                        <li><Link href={routes.blogs}>Blogs</Link></li>
                                        <li><Link href={routes.podcasts}>Podcasts</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className="footer-list">
                                    <ul>
                                        <li><Link href="#">Privacy policy</Link></li>
                                        <li><Link href="#">Term & Conditions</Link></li>
                                        <li><Link href="#">Help and support</Link></li>
                                        <li><Link href="#">Disclaimer</Link></li>
                                        <li><Link href="#">Donate</Link></li>
                                        <li><Link href="#">Resouces</Link></li>
                                        <li><Link href={routes.userprofile}>User Profile</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Footer;