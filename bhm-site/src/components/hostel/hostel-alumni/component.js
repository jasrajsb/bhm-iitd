import ProfileCard from "../../profile-card/component"
import dosa from '../../../assets/dosa.jpg';
function Alumni(){
    return <div className="chiefs">
        <div className="container py-5 ">
            <div className="heading">
               Alumni
            </div>
            <div className="row pt-">
                <div className="col-12 col-md-4">
                    <ProfileCard name="Prof. Aravind K. Nema" designation="Dean of Student Affairs" image={dosa}/>
                </div>
                <div className="col-12 col-md-4">
                    <ProfileCard name="Prof. Aravind K. Nema" designation="Dean of Student Affairs" image={dosa}/>
                </div>
                <div className="col-12 col-md-4">
                    <ProfileCard name="Prof. Aravind K. Nema" designation="Dean of Student Affairs" image={dosa}/>
                </div>
            </div>
        </div>
    </div>
}

export default Alumni