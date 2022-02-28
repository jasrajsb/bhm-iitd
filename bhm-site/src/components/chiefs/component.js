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
            <div className="row">
                {/*<div className="col">
                    <ProfileCard name="Prof. Arvind K. Nema" designation="Dean of Student Affairs" image={dosa} phone='(91)-11-2659-1706' mail='deansa@admin.iitd.ac.in'/>
                </div>*/}
                <div className="col">
                    <ProfileCard name="Prof. Deepti Gupta" designation="Associate Dean Hostel Management" image={bhmp} phone='+91-11-2659 1417' mail='adhm@admin.iitd.ac.in'/>
                </div>
                <div className="col">
                    <ProfileCard name="Utkarsh Kr. Choudhary" designation="BHM General Secretary" image={bhmgs} phone='7979992002' mail='bhmgsec@admin.iitd.ac.in' linkedin='https://www.linkedin.com/in/utkarsh-kumar-choudhary/'/>
                </div>
            </div>
        </div>
    </div>
}

export default Chiefs