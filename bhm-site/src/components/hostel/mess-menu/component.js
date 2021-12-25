import './component.css'
import { Link } from 'react-router-dom';

function Messmenu(props) {

    return <div id="mess-menu" className="container-fluid">
        <div className="heading pb-4">
                Mess Menu
            </div>
        <div class="menu my-4">
            <div id="marker"></div>
            <Link class="link1" to="#">Monday</Link>
            <Link class="link1" to="#">Tuesday</Link>
            <Link class="link1" to="#">Wednesday</Link>
            <Link class="link1" to="#">Thursday</Link>
            <Link class="link1" to="#">Friday</Link>
            <Link class="link1" to="#">Saturday</Link>
            <Link class="link1" to="#">Sunday</Link>

        </div>
        <div id="menu-container" className="container">
            <div className="row full-width">
                {props.mess.map(meal =>
                    <div className="col-4">
                        <div class="box m-3 px-4 py-3">
                            {/* <h3>Lunch</h3> */}
                            <div>
                                <i class="fas fa-utensils pr-2"></i>
                                <div className="meal-name d-inline">{meal.name}</div>
                            </div>
                            <div className="meal-time mt-2">{meal.time}</div>
                            <div className='mess-items mt-2 font-size-smaller'>{meal.menu}</div>
                        </div>
                    </div>
                )}
            </div>




        </div>
    </div>

}

export default Messmenu;