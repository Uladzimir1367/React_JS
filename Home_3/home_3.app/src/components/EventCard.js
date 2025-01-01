function EventCard(props) {
  return (
    <div className="event-card">
      <h3>{props.title}</h3>
      <p>{props.date}</p>
      <p>{props.location}</p>
      <p>{props.description}</p>
    </div>
  );
}

export default EventCard;
