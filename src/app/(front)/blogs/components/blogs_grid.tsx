"use client";
import React from "react";
import CustomImage from "@/app/components/CustomImage";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { routes } from "@/app/routes";


const BlogsGrid = (props: any) => {

  const { heading, blogs_list } = props;

  return (
    <>
      <section className="browse-section bg-white p70">
        <Container>
          <Row className="justify-content-between">
            <Col lg={6} md={6} sm={12} xs={12} className="my-auto">
              <div className="header-box">
                <h3>{heading}</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12} className="my-auto">
              <form>
                <div className="form-group mb-0">
                  <div className="input-icon">
                    <input type="text" className="form-control" placeholder="Search" />
                    <CustomImage src="images/search-icon.svg" width={12} height={12} />
                  </div>
                </div>
              </form>
            </Col>
          </Row>
          <Row>
            {
              blogs_list && blogs_list.map((item: any, index: any) => (
                <Col lg={3} md={6} sm={12} xs={12} key={index}>
                  <div className="slide-box">
                    <Link href={{
                      pathname: `${routes.blogs}/` + item?.heading.replace(/\s+/g, '-').toLowerCase(),
                      query: { slug: item.id },
                    }}>
                      <div className="slideimg"><CustomImage src={item?.blog_img} /></div>
                      <div className="slide-detail">
                        <h4>{item?.category}</h4>
                        <p>{item?.short_description}</p>
                      </div>
                    </Link>
                  </div>
                </Col>
              ))
            }


          </Row>
          <Row>
            <div className="col-12 text-center p70 pb-0">
              <Link href={routes.blogs} className="btn dbtn black">Load more blogs</Link>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogsGrid;
