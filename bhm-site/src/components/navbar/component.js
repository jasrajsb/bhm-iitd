
import './component.css';
import { Link } from "react-router-dom";
import constitution from '../../assets/bhm_const updated.pdf';

function Navbar() {
  return <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
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
              <Link className="dropdown-item" to="/hostel/jwalamukhi" onClick={()=>{window.scrollTo(0,0)}}>Jwalamukhi </Link>
              <Link className="dropdown-item" to="/hostel/karakoram" onClick={()=>{window.scrollTo(0,0)}}>Karakoram </Link>
              <Link className="dropdown-item" to="/hostel/nilgiri" onClick={()=>{window.scrollTo(0,0)}}>Nilgiri </Link>
              <Link className="dropdown-item" to="/hostel/shivalik" onClick={()=>{window.scrollTo(0,0)}}>Shivalik </Link>
              <Link className="dropdown-item" to="/hostel/satpura" onClick={()=>{window.scrollTo(0,0)}}>Satpura </Link>
              <Link className="dropdown-item" to="/hostel/udaigiri" onClick={()=>{window.scrollTo(0,0)}}>Udaigiri </Link>
              <Link className="dropdown-item" to="/hostel/vindhyachal" onClick={()=>{window.scrollTo(0,0)}}>Vindhyachal </Link>
              <Link className="dropdown-item" to="/hostel/zanskar" onClick={()=>{window.scrollTo(0,0)}}>Zanskar </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/hostel/kailash" onClick={()=>{window.scrollTo(0,0)}}>Kailash </Link>
              <Link className="dropdown-item" to="/hostel/himadri" onClick={()=>{window.scrollTo(0,0)}}>Himadri </Link>
              <Link className="dropdown-item" to="/hostel/newkailash" onClick={()=>{window.scrollTo(0,0)}}>New Kailash </Link>
            </div>
          </li>



          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/resources" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Resources
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/resources">Resource 1</Link>
              <Link className="dropdown-item" to="/resources">Resource 2</Link>
              <Link className="dropdown-item" to="/resources">Resource 3</Link>
              <Link className="dropdown-item" to="/resources">Resource 4</Link>
              <Link className="dropdown-item" to="/resources">Resource 5</Link>
              <Link className="dropdown-item" to="/resources">Resource 6</Link>
              <Link className="dropdown-item" to="/resources">Resource 7</Link>
            </div>
          </li>


          <li className="nav-item">
            <Link className="nav-link" to="/FAQs">FAQs</Link>
          </li>

          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/important-links" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Important Links
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/important-links">Link 1</Link>
              <Link className="dropdown-item" to="/important-links">Link 2</Link>
              <Link className="dropdown-item" to="/important-links">Link 3</Link>
              <Link className="dropdown-item" to="/important-links">Link 4</Link>
              <Link className="dropdown-item" to="/important-links">Link 5</Link>
            </div>
          </li>

          {/* <li className="nav-item">
            <Link className="nav-link" to="/initiatives">Initiatives</Link>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" target="_blank" href={constitution}>Constitution</a>
          </li>
        </ul>
        <form className="d-inline-flex search-bar">
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


