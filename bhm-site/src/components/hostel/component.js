import {useParams} from 'react-router-dom';
import Introduction from './hostel-page-introduction/component';
import Vision from './hostel-page-vision/component';
import ContactUs from './hostel-page-contact-us/component';
import StudentTeam from './hostel-student-team/component';
import Hero from './hostel-hero/component';
import hostels from '../../data/hostel/hostel';
import MessMenu from './mess-menu/component';

function Hostel(props) {
  const {hostel} = useParams();
  return <div>
    <div className="my-3">&nbsp;</div>
    <Hero hostel={hostel} logo = {hostels[hostel]['logo']} hero = {hostels[hostel]['hero']} insta={hostels[hostel]['insta']} fb={hostels[hostel]['fb']} complaint={hostels[hostel]['complaint']} location={hostels[hostel]['location']}/>
    <Introduction text={hostels[hostel]['introduction']}/>
    <Vision text={hostels[hostel]['vision']}/>
    <ContactUs contact={hostels[hostel]['contact']}/>
    <StudentTeam secys={hostels[hostel]['secys']}/>
    <MessMenu mess={hostels[hostel]['mess'] } hostel={hostel} mess_sheet = {hostels[hostel]['mess_sheet']}/>
  </div>

}

export default Hostel;
