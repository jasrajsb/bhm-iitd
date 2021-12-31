import './component.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Messmenu(props) {

    const [dayname, setDay] = useState('monday');

    return <div id="mess-menu" className="container-fluid my-5">
        <div className="heading pb-4">
            Mess Menu
        </div>
        <div class="container menu my-2 text-center">
            <div id="marker"></div>
            <div className="row text-center">
                <div className="col-0 col-lg-2"></div>
                <div className='col p-0 mb-3'><Link className={"link1" + (dayname === 'monday' ? ' active' : '')} to="#" onClick={() => { setDay('monday') }}>Monday</Link></div>
                <div className='col p-0 mb-3'><Link className={"link1" + (dayname === 'tuesday' ? ' active' : '')} to="#" onClick={() => { setDay('tuesday') }}>Tuesday</Link></div>
                <div className='col p-0 mb-3'><Link className={"link1" + (dayname === 'wednesday' ? ' active' : '')} to="#" onClick={() => { setDay('wednesday') }}>Wednesday</Link></div>
                <div className='col p-0 mb-3'><Link className={"link1" + (dayname === 'thursday' ? ' active' : '')} to="#" onClick={() => { setDay('thursday') }}>Thursday</Link></div>
                <div className='col p-0 mb-3'><Link className={"link1" + (dayname === 'friday' ? ' active' : '')} to="#" onClick={() => { setDay('friday') }}>Friday</Link></div>
                <div className='col p-0 mb-3'><Link className={"link1" + (dayname === 'saturday' ? ' active' : '')} to="#" onClick={() => { setDay('saturday') }}>Saturday</Link></div>
                <div className='col p-0 mb-3'><Link className={"link1" + (dayname === 'sunday' ? ' active' : '')} to="#" onClick={() => { setDay('sunday') }}>Sunday</Link></div>
                <div className="col-0 col-lg-2"></div>
            </div>
        </div>
        <div id="menu-container" className="container mt-4">
            <div className="full-width">
                {props.mess.map(day => {
                    return <div className={"row full-width " + ((day.day.toString().toLowerCase() === dayname) ? '' : 'd-none')}>
                        {
                            day.menu.map(meal =>
                                <div className="col d-flex">
                                    <div class="box mx-0 my-3 px-4 py-3">
                                        {/* <h3>Lunch</h3> */}
                                        <div>
                                            <i class="fas fa-utensils pr-2"></i>
                                            <div className="meal-name d-inline">{meal.name}</div>
                                        </div>
                                        <div className="meal-time mt-2">{meal.time}</div>
                                        <div className='mess-items mt-2 font-size-smaller'>{meal.menu}</div>
                                    </div>
                                </div>)}
                    </div>
                }

                )}
            </div>




        </div>
    </div>

}

export default Messmenu;