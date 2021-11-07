import './component.css';
import {useParams} from 'react-router-dom';
import Introduction from './hostel-page-introduction/component';
import Vision from './hostel-page-vision/component';
import ContactUs from './hostel-page-contact-us/component';
import Alumni from './hostel-alumni/component'
import StudentTeam from './hostel-student-team/component';
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Hostel(props) {
  const {hostel} = useParams();
  return <div>
    <div className="my-3">&nbsp;</div>
    <div className="container">
      {capitalize(hostel)} Hostel Page
    </div>
    <Introduction/>
    <Vision/>
    <ContactUs/>
    <Alumni/>
    <StudentTeam/>

  </div>

}

export default Hostel;
