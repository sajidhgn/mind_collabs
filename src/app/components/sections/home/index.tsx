"use client";
import Banner from "./banner";
import JoinTherapist from "./join_therapist";
import FeaturedTherapist from "./featured_therapist";
import Services from "./services";
import Blogs from "./blogs";
import PodcastEpisodes from "./podcast_episodes";
import data from "./data.json";


const Components=()=>{

    return(
        <>
        <Banner 
        heading={data?.banner?.heading} 
        subHeading={data.banner.subHeading} 
        content={data.banner.content} />

       <JoinTherapist 
       join={data.join_therapist.join} 
       our={data.join_therapist.our} 
       heading={data.join_therapist.heading} 
       content={data.join_therapist.content} 
       mainBackgroundImage={data.join_therapist.mainBackgroundImage} 
       subBackgroundImage={data.join_therapist.subBackgroundImage}  
       buttonText={data.join_therapist.buttonText} 
       buttonLink={data.join_therapist.buttonLink} />

       <Services 
       our={data.services.our} 
       heading={data.services.heading} 
       servicesList={data.services.servicesList} 
       resoureceHeading={data.services.resoureceHeading} r
       esourceContent={data.services.resourceContent} 
       buttonText={data.services.buttonText} 
       buttonLink={data.services.buttonLink} />

       <FeaturedTherapist 
       heading={data.featured_therapist_list.heading} 
       content={data.featured_therapist_list.content} 
       meet={data.featured_therapist_list.meet} 
       therapiList={data.featured_therapist_list.therapiList} />

        <Blogs 
        featured_bg={data.blogs.featured_bg} 
        read_our={data.blogs.read_our} 
        heading={data.blogs.heading} 
        content={data.blogs.content} 
        featured_blog_img={data.blogs.featured_blog_img} 
        featured_blog_heading={data.blogs.featured_blog_heading} 
        featured_blog_content={data.blogs.featured_blog_content} 
        featured_blog_link={data.blogs.featured_blog_link} 
        blogs_list={data.blogs.blogs_list} />

        <PodcastEpisodes 
        latest={data.podcast_list.latest} 
        heading={data.podcast_list.heading} 
        podcasts_list={data.podcast_list.podcasts_list} 
        podcast_main_image={data.podcast_list.podcast_main_image} />
        </>
    )
}

export default Components;