import ProfileCard from "../profile-card/component"
import bhmp from './../../assets/bhmp.webp';
import bhmgs from './../../assets/bhmgs.webp';

function Chiefs(){
    return <div className="chiefs">
        <div className="container py-5 ">
            <div className="heading">
                BHM Chiefs
            </div>
            <div className="row">
                <div className="col">
                    <ProfileCard name="Prof. Deepti Gupta" designation="Associate Dean Hostel Management" image={bhmp} phone='+91-11-2659 1417' mail='adhm@admin.iitd.ac.in'/>
                </div>
                <div className="col">
                    <ProfileCard name="Utkarsh Kr. Choudhary" designation="BHM General Secretary" image={bhmgs} mail='bhmgsec@admin.iitd.ac.in' linkedin='https://www.linkedin.com/in/utkarsh-kumar-choudhary/'/>
                </div>
            </div>
        </div>
    </div>
}

export default Chiefs