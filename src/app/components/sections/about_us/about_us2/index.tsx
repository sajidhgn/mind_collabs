"use client";
import Counter from "./counter";
import JoinTherapist from "./join_therapist";
import OurMission from "./our_mission";
import OurValues from "./our_values";
import data from "./data.json";

const Components = () => {

    return (
        <>
            <OurMission 
            about={data?.our_mission.about} 
            heading={data?.our_mission.heading} 
            mission_title={data?.our_mission.mission_title} 
            mission_sub_title={data?.our_mission.mission_sub_title} 
            mission_content={data?.our_mission.mission_content} 
            mission_img={data?.our_mission.mission_img} 
            quote_title={data?.our_mission.quote_title} 
            quote_content={data?.our_mission.quote_content} />

            <Counter counterList={data?.counter_list} />

            <OurValues 
            heading={data?.our_values.heading} 
            value_img={data?.our_values.value_img} 
            valuesList={data?.our_values.valuesList} />

            <JoinTherapist 
            heading={data?.join_therapist.heading} 
            content={data?.join_therapist.content} 
            join_img={data?.join_therapist.join_img} />
        </>
    )
}

export default Components;