import './component.css';
import CalendarEvent from '../calendar-event/component.js';
function Calendar(){
    return <div class="event-container">
    <div className="heading">Upcoming Events</div>
    <CalendarEvent/>    
    <CalendarEvent/>    
    <CalendarEvent/>    
    </div>
}

export default Calendar