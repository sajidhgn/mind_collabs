import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "@/app/components/CustomImage";
import parse from "html-react-parser";
import Link from "next/link";
import { routes } from "@/app/routes";

const Blogs=(props:any)=>{

    const {featured_bg, read_our, heading, content, featured_blog_img, featured_blog_heading, featured_blog_content, featured_blog_link, blogs_list } = props;

    return(
        <section className="blog-section bg-white p70 pt-0">
        <div className="featured-image">

            <CustomImage src={featured_bg} style={{width:"100%", height:"auto"}} />
        </div>
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <div className="blog-feauted-content">
                <div className="header-box">
                  <span>{read_our}</span>
                  <h3>{heading}</h3>
                  <p>{parse(`${content}`)}</p>
                </div>
                <div className="featured-detail">
                  <div className="row">
                    <Col lg={7} md={12} sm={12} xs={12}>
                      <div className="blog-box">
                        <Link href={featured_blog_link}>
                         
                          <CustomImage src={featured_blog_img} style={{width:"100%", height:"auto"}} />
                          <div className="blog-detail">
                            <h5>{featured_blog_heading}</h5>
                            <p>{featured_blog_content}</p>
                            <span className="text-orange">Read More</span>
                          </div>
                        </Link>
                      </div>
                    </Col>
                    <Col lg={5} md={12} sm={12} xs={12}>
                      <div className="blogs-list">
                        {
                            blogs_list&&blogs_list.map((item:any,index:any)=>(
                                <div className="blog-short" key={index}>
                                <Link href={routes.blogs}>
                                  <div className="blog-detail">
                                    <h5>{item?.title}</h5>
                                    <p>{item?.content}</p>
                                    <span className="text-orange">Read More</span>
                                  </div>
                                </Link>
                              </div>
                            ))
                        }
                      </div>
                    </Col>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link href={routes.blogs} className="btn dbtn">Explore all blogs posts</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default Blogs;