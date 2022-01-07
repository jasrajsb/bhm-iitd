import ProfileCard from "../profile-card/component"
import dosa from './../../assets/dosa.jpg';
import bhmp from './../../assets/bhmp.jpg';
import bhmgs from './../../assets/bhmgs.jpeg';
function Chiefs(){
    return <div className="chiefs">
        <div className="container py-5 ">
            <div className="heading">
                BHM Chiefs
            </div>
            <div className="row pt-">
                <div className="col-12 col-md-4">
                    <ProfileCard name="Prof. Aravind K. Nema" designation="Dean of Student Affairs" image={dosa} phone='(91)-11-2659-1706' email='deansa@admin.iitd.ac.in'/>
                </div>
                <div className="col-12 col-md-4">
                    <ProfileCard name="Prof. Deepti Gupta" designation="Assosiate Dean Hostel Management" image={bhmp} phone='+91-11-2659 1417' email='adhm@admin.iitd.ac.in'/>
                </div>
                <div className="col-12 col-md-4">
                    <ProfileCard name="Utkarsh Kr. Choudhary" designation="BHM General Secratary" image={bhmgs} phone='7979992002' email='bhmgsec@admin.iitd.ac.in'/>
                </div>
            </div>
        </div>
    </div>
}

export default Chiefs