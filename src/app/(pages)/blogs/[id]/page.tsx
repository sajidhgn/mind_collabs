import React from "react";
import BlogDetail from "../../../components/sections/blogs/blog_detail";
import Header from "@/app/components/common/header";
import Footer from "@/app/components/common/footer";

function Page({ params }: { params: { id: string } }) {
  return (
    <>
    <Header/>
      <BlogDetail data={params} />
      <Footer/>
    </>
  );
}

export default Page;
