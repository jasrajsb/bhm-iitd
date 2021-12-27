import './component.css';
import {useParams} from 'react-router-dom';
import Introduction from './hostel-page-introduction/component';
import Vision from './hostel-page-vision/component';
import ContactUs from './hostel-page-contact-us/component';
// import Alumni from './hostel-alumni/component'
import StudentTeam from './hostel-student-team/component';
import Hero from './hostel-hero/component';
import hostels from '../../data/hostel/hostel';
import MessMenu from './mess-menu/component';
import Gallery from '../gallery/component';
import _template_for_gallery from '../gallery/_template_for_gallery';
import girnar_gallery from '../gallery/GirnarImages';

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
    <Hero hostel={hostel} logo = {hostels[hostel]['logo']} hero = {hostels[hostel]['hero']} insta={hostels[hostel]['insta']} fb={hostels[hostel]['fb']} complaint={hostels[hostel]['complaint']} location={hostels[hostel]['location']}/>
    <Introduction text={hostels[hostel]['introduction']}/>
    <Vision text={hostels[hostel]['vision']}/>
    <ContactUs contact={hostels[hostel]['contact']}/>
    {/* <Alumni/> */}
    <StudentTeam secys={hostels[hostel]['secys']}/>
    <Gallery images_json={girnar_gallery} />
    <MessMenu mess={hostels[hostel]['mess']}/>


  </div>

}

export default Hostel;
