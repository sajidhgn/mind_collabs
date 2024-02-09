"use client";
import React , {useState, useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "next/navigation";
import getBlogs from "../../components/data.json";
import CustomImage from "@/app/components/CustomImage";
import Link from "next/link";
import { routes } from "@/app/routes";
import parse from "html-react-parser";


const Components = ({ data }: any) => {
  const [filteredData, setFilteredData] = useState<any>([]);
  const params = useSearchParams();

  useEffect(()=>{
    const filteredResults = getBlogs?.blogs_slider?.blogs_list?.filter((item:any) => {
      if(item.id == params.get("slug")){
       return item;
      }
     });
   
     setFilteredData(filteredResults);
  },[])



  return (
    <>

  <section className="blog-detail-banner-section bg-white p70 mt-102">
    <div className="blog-detail-header">
      <CustomImage src={filteredData[0]?.featured_img} style={{width:"100%", height:"auto", objectFit:"cover"}} />
    </div>
    <div className="blog-details p70 pb-0">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
           
              <div className="blog-meta p70 pt-0">
                <span className="date-box">{filteredData[0]?.duration} | {filteredData[0]?.date}</span>
                <h4>{filteredData[0]?.heading}</h4>
                <span className="blog-category date-box">By {filteredData[0]?.post_by}</span>
              </div>
              <div className="blog-detail-content">
              <div className="blog-paragraphs-1">
              {parse(`${filteredData[0]?.long_description}`)}
              </div>
              <div className="blog-paragraphs-1">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                  {parse(`${filteredData[0]?.long_description}`)}
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <CustomImage src={filteredData[0]?.blog_img} style={{width:"100%", height:"auto", objectFit:"cover"}} />
                  </div>
                </div>
              </div>
              <div className="blog-paragraphs-1">
              {parse(`${filteredData[0]?.long_description}`)}
              </div>
              </div>
            </Col>
            <div className="blog-back">
              <Link href={routes.blogs} className="btn dbtn black"> <div className="d-flex align-items-center gap-4"><CustomImage src="/images/left-long-arrow.svg" width={32} height={14} /> Back to Blog Index</div></Link>
            </div>
          </Row>
        </Container>
      </div>
  </section>
      
    </>

  )
};

export default Components;
