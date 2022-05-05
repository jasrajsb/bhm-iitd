import ProfileCard from "../../profile-card/component";
import Marquee from "react-fast-marquee";

function StudentTeam(props){

    return <div className="chiefs">
        <div className="container py-5">
            <div className="heading">
               Student Team
            </div>
                <Marquee pauseOnHover={true} speed="100" gradientWidth={20}>
                <div className="d-flex mb-5 mt-3">
                {props.secys.map(secy=>{
                                    return <div className="mx-5">
                                    <ProfileCard name={secy.name} mail={secy.mail} linkedin={secy.linkedin} phone={secy.phone} designation={secy.designation} image={secy.image}/>
                                </div>
                                })}
                </div>
                </Marquee>
  
            </div>
        </div>

}

export default StudentTeam