import EventComponent from "../component/EventDetailsComponent";

export default function EventDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  return <EventComponent id={parseInt(id)} />;
}
