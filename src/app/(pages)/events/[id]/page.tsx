import EventComponent from "../component/EventDetailsComponent";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return <EventComponent id={parseInt(id)} />;
}
