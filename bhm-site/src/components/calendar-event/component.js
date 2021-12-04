import './component.css';

function CalendarEvent(){
    return <div className="container">
    <div class="event">
    <div class="event-left">
      <div class="event-date">
        <div class="date">8</div>
        <div class="month">Nov 2021</div>
      </div>
    </div>

    <div class="event-right">
      <h3 class="event-title">Some Title Here</h3>

      <div class="event-description">
        This will contain all the necessary details of the upcoming event!
      </div>

      <div class="event-timing">
      <i class="fas fa-clock mr-1"></i> 10:00 AM
      </div>
    </div>
  </div>
    </div>
    ;
}

export default CalendarEvent;