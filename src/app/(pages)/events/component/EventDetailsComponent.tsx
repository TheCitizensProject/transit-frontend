"use client";

import Image from "next/image";
import { events } from "../page";

export default function EventDetailsComponent({ id }: { id: number }) {
  const event = events.find((ev) => ev.id === id);
  if (!event) return <div>No Data for this event</div>;
  return (
    <div className=" mt-6">
      <div className="flex justify-end mr-4">
        <button
          className="rounded-full bg-black text-white w-32
      py-1"
        >
          Notify me
        </button>
      </div>
      <div className="border-stone-400 border-b py-2 mt-4 mb-4">
        <div className="mx-4 text-xl font-semibold">
          {event.eventDate.toDateString()}
        </div>
      </div>
      <div className="relative w-full h-[600px] ">
        <Image alt={event.title} src={event.img} fill />
      </div>
    </div>
  );
}
