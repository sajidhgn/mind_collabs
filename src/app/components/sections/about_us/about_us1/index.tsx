"use client";
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
            mission_subtitle={data?.our_mission.mission_subtitle} 
            mission_img={data?.our_mission.mission_img} 
            mission_detail={data?.our_mission.mission_detail} />
            
            <OurValues 
            heading={data?.our_values.heading} 
            valuesList={data?.our_values.valuesList} 
            value_img={data?.our_values.value_img} />
        </>
    )
}

export default Components;