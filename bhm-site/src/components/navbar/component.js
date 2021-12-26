
import './component.css';
import { Link } from "react-router-dom";
import constitution from '../../assets/bhm_const updated.pdf';
import guest_stay from '../../assets/guest_stay.pdf';
import mess_rebate from '../../assets/mess_rebate.pdf';
import mess_security_refund from '../../assets/mess_security_refund.pdf';
import rail_concession from '../../assets/rail_concession.pdf';
import self_study_course from '../../assets/self_study_course.pdf';
import semester_withdrawal from '../../assets/semester_withdrawal.pdf';



function Navbar() {
  return <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top navbar-fixed-top">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">BHM - IIT Delhi</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa fa-bars toggle-icon m-1"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav navbar-nav-scroll mx-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={()=>{window.scrollTo(0,0)}}>Home</Link>
          </li>

          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Hostel
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/hostel/aravali" onClick={()=>{window.scrollTo(0,0)}}>Aravali </Link>
              <Link className="dropdown-item" to="/hostel/girnar" onClick={()=>{window.scrollTo(0,0)}}>Girnar </Link>
              <Link className="dropdown-item" to="/hostel/himadri" onClick={()=>{window.scrollTo(0,0)}}>Himadri </Link>
              <Link className="dropdown-item" to="/hostel/jwalamukhi" onClick={()=>{window.scrollTo(0,0)}}>Jwalamukhi </Link>
              <Link className="dropdown-item" to="/hostel/kailash" onClick={()=>{window.scrollTo(0,0)}}>Kailash </Link>
              <Link className="dropdown-item" to="/hostel/karakoram" onClick={()=>{window.scrollTo(0,0)}}>Karakoram </Link>
              <Link className="dropdown-item" to="/hostel/kumaon" onClick={()=>{window.scrollTo(0,0)}}>Kumaon </Link>
              <Link className="dropdown-item" to="/hostel/nilgiri" onClick={()=>{window.scrollTo(0,0)}}>Nilgiri </Link>
              <Link className="dropdown-item" to="/hostel/satpura" onClick={()=>{window.scrollTo(0,0)}}>Satpura </Link>
              <Link className="dropdown-item" to="/hostel/shivalik" onClick={()=>{window.scrollTo(0,0)}}>Shivalik </Link>
              <Link className="dropdown-item" to="/hostel/udaigiri" onClick={()=>{window.scrollTo(0,0)}}>Udaigiri </Link>
              <Link className="dropdown-item" to="/hostel/vindhyachal" onClick={()=>{window.scrollTo(0,0)}}>Vindhyachal </Link>
              <Link className="dropdown-item" to="/hostel/zanskar" onClick={()=>{window.scrollTo(0,0)}}>Zanskar </Link>
            </div>
          </li>



          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Resources
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {/*<a className="dropdown-item" href={self_study_course} target="_blank" rel="noreferrer" >Self Study Course</a>*/}
              {/*<a className="dropdown-item" href={semester_withdrawal} target="_blank" rel="noreferrer" >Semester Withdrawal</a>*/}
              <a className="dropdown-item" href={rail_concession} target="_blank" rel="noreferrer" >Rail Concession</a>
              <a className="dropdown-item" href={mess_security_refund} target="_blank" rel="noreferrer" >Mess Security Refund Form</a>
              <a className="dropdown-item" href={mess_rebate} target="_blank" rel="noreferrer" >Mess Rebate Form</a>
              <a className="dropdown-item" href={guest_stay} target="_blank" rel="noreferrer" >Guest Short Stay</a>
            </div>
          </li>


          <li className="nav-item">
            <Link className="nav-link" to="/faqs">FAQs</Link>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Important Links
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="https://eacademics.iitd.ac.in/" target="_blank" rel="noreferrer" >E Academics</a>
              <a className="dropdown-item" href="https://moodle.iitd.ac.in/" target="_blank" rel="noreferrer" >Moodle</a>
              <a className="dropdown-item" href="https://webmail.iitd.ac.in/roundcube" target="_blank" rel="noreferrer" >IITD Web Mail</a>
              <a className="dropdown-item" href="http://ngu.iitd.ac.in/" target="_blank" rel="noreferrer" >NGU Portal</a>
              <a className="dropdown-item" href="https://infrasla.iitd.ac.in/netserv/" target="_blank" rel="noreferrer" >SLA for Networking Services</a>
              <a className="dropdown-item" href="https://internal.iitd.ernet.in/?q=content/ug-notices" target="_blank" rel="noreferrer" >Online UG Notice Board</a>
            </div>
          </li>

          {/* <li className="nav-item">
            <Link className="nav-link" to="/initiatives">Initiatives</Link>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" target="_blank" rel="noreferrer"  href={constitution}>Constitution</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" target="_blank" rel="noreferrer"  href="https://docs.google.com/spreadsheets/d/1okeMA5gB62KvVrHQQuwZ4vNKg38NBybJE7F7h7HmBU4/edit#gid=0">Off Campus Accommodation</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" target="_blank" rel="noreferrer"  href="https://docs.google.com/spreadsheets/d/1okeMA5gB62KvVrHQQuwZ4vNKg38NBybJE7F7h7HmBU4/edit#gid=0">Hostel Rules</a>
          </li>
        </ul>
        <form className="d-inline-flex search-bar bg-light">
          <button className="btn btn-outline" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" color="rgb(100,100,100)">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg></button>
          <input className="form-control" type="Search" placeholder="Search" aria-label="Search"></input>
        </form>
      </div>
    </div>
  </nav>
}

export default Navbar


