import React from "react";
import Model from "./components";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

function Page({ params }: { params: { id: string } }) {
  return (
    <>
    <Header/>
      <Model data={params} />
      <Footer/>
    </>
  );
}

export default Page;
