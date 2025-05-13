import { useParams } from "react-router-dom";

function EventDetailPage() {
    const { eventId } = useParams();
  return (
    <div>
      <h1>Event ID: {eventId}</h1>
    </div>
  );
}

export default EventDetailPage;
