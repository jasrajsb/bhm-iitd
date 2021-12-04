import './component.css';
import {useParams} from 'react-router-dom';

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
  </div>
}

export default Hostel