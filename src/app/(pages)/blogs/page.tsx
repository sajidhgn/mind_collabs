import React from "react";
import Components from "../../components/sections/blogs/blog_main";
import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";


export default function blogs() {
  return (
    <>
    <Header/>
      <Components />
      <Footer/>
    </>
  );
}