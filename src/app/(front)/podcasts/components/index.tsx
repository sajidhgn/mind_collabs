"use client";
import Episodes from "./episodes";
import Podcast from "./podcast";
import data from "../data.json";

const Components = () => {

    return (
        <>
        <Podcast 
        podcast_bg={data?.podcasts.podcast_bg} 
        headphone_img={data?.podcasts.headphone_img} 
        latest={data?.podcasts.latest} 
        heading={data?.podcasts.heading} 
        join_community_list={data?.podcasts.join_community_list} />

           <Episodes heading={data?.episodes_list.heading} episodes_list={data?.episodes_list.episodes_list} />
           
        </>
    )
}

export default Components;