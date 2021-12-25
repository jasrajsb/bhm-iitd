import './component.css';
function CalendarEvent(props) {
  return <div className="container">
    <div class="event">
      <div class="event-left">
        <div class="event-date">
          <div class="date">{props.event.date.getDate()}</div>
          <div class="month">{props.event.date.toDateString().split(" ")[1] + " " + props.event.date.toDateString().split(" ")[3]}</div>
        </div>
      </div>

      <div class="event-right">
        <h3 class="event-title">{props.event.heading}</h3>

        <div class="event-description text-left">
          {props.event.description}
        </div>

        <div class="event-timing px-2">
          <i class="fas fa-clock mr-1"></i> {props.event.date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
        </div>
      </div>
    </div>
  </div>
    
}

export default CalendarEvent;