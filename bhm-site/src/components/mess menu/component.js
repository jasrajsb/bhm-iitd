import './component.css'
import { Link } from 'react-router-dom';
var marker=document.querySelector('#marker');
var item=document.querySelectorAll('.menu a');
function indicator(e){
    marker.style.left=e.offsetLeft+"px";
    marker.style.width=e.offsetWidth+"px";
    e.style.color="#000";
}
item.forEach(link => {
    link.addEventListener('click',(e)=>{
        indicator(e.target);
    })
});
function Messmenu(){
    
    return <div id="mess-menu" className="container-fluid">
        <div className="heading" id="mess-heading">Mess Menu</div>
        <div class="menu">
    <div id="marker"></div>
    <Link to="#">Sunday</Link>
    <Link to="#">Monday</Link>
    <Link to="#">Tuesday</Link>
    <Link to="#">Wednesday</Link>
    <Link to="#">Thursday</Link>
    <Link to="#">Friday</Link>
    <Link to="#">Saturday</Link>
</div>
<div id="menu-container" className="container">
        <div class="box">
            <h3>Lunch</h3>
            <p>This is the lunch menu for respective hostel</p>
        </div>
        <div class="box">
            <h3>Lunch</h3>
            <p>This is the lunch menu for respective hostel</p>
        </div>
        <div class="box">
            <h3>Lunch</h3>
            <p>This is the lunch menu for respective hostel</p>
        </div>
    </div>
</div>

}

export default Messmenu;