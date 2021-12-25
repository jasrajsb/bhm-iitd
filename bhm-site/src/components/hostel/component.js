import './component.css';
import {useParams} from 'react-router-dom';
import Introduction from './hostel-page-introduction/component';
import Vision from './hostel-page-vision/component';
import ContactUs from './hostel-page-contact-us/component';
// import Alumni from './hostel-alumni/component'
import StudentTeam from './hostel-student-team/component';
import Hero from './hostel-hero/component';
import hostels from '../../data/hostel/hostel';
import MessMenu from './mess-menu/component'
// function capitalize(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

function Hostel(props) {
  const {hostel} = useParams();
  return <div>
    <div className="my-3">&nbsp;</div>
    <div className="container">
      {/* {capitalize(hostel)} Hostel Page */}
    </div>
    <Hero hostel={hostel} logo = {hostels[hostel]['logo']} hero = {hostels[hostel]['hero']}/>
    <Introduction text={hostels[hostel]['introduction']}/>
    <Vision text={hostels[hostel]['vision']}/>
    <ContactUs contact={hostels[hostel]['contact']}/>
    {/* <Alumni/> */}
    <StudentTeam secys={hostels[hostel]['secys']}/>
    <MessMenu mess={hostels[hostel]['mess']}/>

  </div>

}

export default Hostel;
