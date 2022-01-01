import './component.css';
import CalendarEvent from '../calendar-event/component.js';
import events from '../../data/calendarEvents';

function Calendar(){
    return <div class="event-container pb-5">
    <div className="heading">Upcoming Events</div>
    {events.map(event => {
        return <CalendarEvent event={event}/>
    })} 
    </div>
}

export default Calendar