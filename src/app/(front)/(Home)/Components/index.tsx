import Banner from "./Banner";
import JoinTherapist from "./JoinTherapist";
import Services from "./Services";

const services_list = [
    {
        "title" :"Wellness Resources",
        "detail" :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
    },
    {
        "title" :"Shop",
        "detail" :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
    },
    {
        "title" :"Events/Trainings",
        "detail" :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
    }
]

const Components=()=>{

    return(
        <>
        <Banner heading="Mental Health, The Unseen Power of Success." subHeading="Find the right therapist for you" content="Search for therapists specialized in helping others" />
       <JoinTherapist join="join" our="our" heading="THERAPIST <br/> DIRECTORY" content="Advertise your services to people looking for therapy, or counsellors wanting supervision or training" mainBackgroundImage="images/join_bg.png" subBackgroundImage="images/join_1.png"  buttonText="Join therapist directory" buttonLink="/" />
       <Services our="our" heading="Services" servicesList={services_list} resoureceHeading="Wellness Resources" resourceContent="Taking care of our bodies through physical activity, good nutrition, adequate sleep, and regular preventive care appointments is critical for optimal functioning and overall health. Making even modest changes to these habits can have major effects on your functioning and help you feel your best." buttonText="Book a consultation" buttonLink="/" />
        </>
    )
}

export default Components;