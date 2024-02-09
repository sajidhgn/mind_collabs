"use client";
import BlogsGrid from "./blogs_grid";
import BlogsSlider from "./blogs_slider";
import data from "./data.json";

const Components = () => {

    return (
        <>
            <BlogsSlider 
            our={data?.blogs_slider.our} 
            heading={data?.blogs_slider.heading} 
            content={data?.blogs_slider.content} 
            blogs_list={data?.blogs_slider.blogs_list}  />

            <BlogsGrid 
            heading={data?.blogs_grid.heading} 
            blogs_list={data?.blogs_grid.blogs_list}  />
        </>
    )
}

export default Components;