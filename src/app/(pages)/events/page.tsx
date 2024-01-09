"use client";

import React, { ReactNode } from "react";
import EventComponent from "./component/EventComponent";
import { events } from "./data";

export type EventType = {
  id: number;
  eventDate: Date;
  title: string;
  img: string;
  description: string;
};

const Page = () => {
  const mappedArray = (array: EventType[]) => {
    const map = new Map<string, EventType[]>();
    for (let event of array) {
      if (map.has(event.eventDate.toDateString())) {
        const events = map.get(event.eventDate.toDateString());
        events?.push(event);
        map.set(event.eventDate.toDateString(), events as EventType[]);
      } else {
        map.set(event.eventDate.toDateString(), [event]);
      }
    }
    return map;
  };
  const sortedEvents = mappedArray(
    events.sort((a: EventType, b: EventType) => {
      if (a.eventDate > b.eventDate) {
        return 1;
      } else {
        return -1;
      }
    })
  );
  const nodes: ReactNode[] = [];
  sortedEvents.forEach((eves, id) => {
    nodes.push(
      <div>
        <div className="py-2 px-2 bg-stone-200 font-semibold">{id === new Date().toDateString() ? "Today" : id}</div>
        {eves.map((ev) => (
          <EventComponent key={ev.id} event={ev} />
        ))}
      </div>
    );
  });
  return <div>{nodes.map((n) => n)}</div>;
};

export default Page;
