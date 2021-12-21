import './component.css'
import { Link } from 'react-router-dom';

function Messmenu(){
    
    return <div id="mess-menu" className="container-fluid">
        <div className="heading" id="mess-heading">Mess Menu</div>
        <div class="menu">
    <div id="marker"></div>
    <Link class="link1" to="/">Sunday</Link>
    <Link class="link1" to="/">Monday</Link>
    <Link class="link1" to="/">Tuesday</Link>
    <Link class="link1" to="/">Wednesday</Link>
    <Link class="link1" to="/">Thursday</Link>
    <Link class="link1" to="/">Friday</Link>
    <Link class="link1" to="/">Saturday</Link>
</div>
<div id="menu-container" className="container">
        <div class="box">
            {/* <h3>Lunch</h3> */}
            <i class="fas fa-hamburger pr-2">Lunch</i>
            <h6>12:30PM-2:30PM</h6>
            <p>This is the lunch menu for the respective hostel</p>
        </div>
        <div class="box">
            {/* <h3>Lunch</h3> */}
            <i class="fas fa-hamburger pr-2">Lunch</i>
            <h6>12:30PM-2:30PM</h6>
            <p>This is the lunch menu for the respective hostel</p>
        </div>
        <div class="box">
            {/* <h3>Lunch</h3> */}
            <i class="fas fa-hamburger pr-2">Lunch</i>
            <h6>12:30PM-2:30PM</h6>
            <p>This is the lunch menu for the respective hostel</p>
        </div>
    </div>
</div>

}

export default Messmenu;