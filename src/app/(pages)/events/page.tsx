"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { IoIosArrowForward } from "react-icons/io";

export type EventType = {
  id: number;
  eventDate: Date;
  title: string;
  img: string;
  description: string;
};

export const events: EventType[] = [
  {
    id: 1,
    title: "Halloween Extravaganza",
    img: "/halloween.jpeg",
    eventDate: new Date(),
    description: `Costume party extravaganza including: carnival games,
     rides, giveaways, food, contests, music, and more!`,
  },
  {
    id: 2,
    title: "The Sanctuary",
    img: "/island-holiday.png",
    eventDate: new Date(2024, 2, 12),
    description: `A series of films to be shown on a 40 foot screen at Southpoint Park;
     includes trivia contests, food vendors, and music!`,
  },

  {
    id: 3,
    title: "Roosevelt Island Day",
    img: "/plaza.jpg",
    eventDate: new Date(2024, 1, 23),
    description: `  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, ratione quibusdam reiciendis possimus incidunt sit vitae autem voluptate provident voluptas ipsa at qui,
     sequi error aliquid? Est consequuntur molestias ut?`,
  },
  {
    id: 4,
    title: "Roosevelt Island Day",
    img: "/island-day.jpg",
    eventDate: new Date(),
    description: `A series of films to be shown on a 40 foot screen at Southpoint Park;
     includes trivia contests, food vendors, and music!`,
  },
  {
    id: 5,
    title: "Roosevelt Island Film Festival",
    img: "/film.webp",
    eventDate: new Date(2024, 2, 12),
    description: `Costume party extravaganza including: carnival games,
     rides, giveaways, food, contests, music, and more!`,
  },
  {
    id: 6,
    title: "Fall for Arts Festival",
    img: "/art-day.jpeg",
    eventDate: new Date(2024, 1, 10),
    description: `A much-loved tradition featuring live mural painting, hands-on arts and crafts workshops for children and adults, and live entertainment.
    `,
  },
  {
    id: 7,
    title: "Roosevelt Island Hike",
    img: "/hike.jpeg",
    eventDate: new Date(2024, 2, 8),
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quae architecto ab aut dolorem obcaecati autem, veniam cum veritatis, fuga repellat culpa 
    incidunt libero maiores fugiat voluptatum necessitatibus similique at.!`,
  },
];

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
        <div className="py-2 px-2 bg-stone-200 font-semibold">
          {id === new Date().toDateString() ? "Today" : id}
        </div>
        {eves.map((ev) => (
          <EventComponent event={ev} />
        ))}
      </div>
    );
  });
  return <div>{nodes.map((n) => n)}</div>;
};

export default Page;

export function EventComponent({ event }: { event: EventType }) {
  const router = useRouter();
  return (
    <div
      className="p-4"
      onClick={() => {
        router.push(`/events/${event.id}`);
      }}
    >
      <h1 className="font-bold text-xl text-center">{event.title}</h1>
      <div className="flex items-start gap-4">
        <Image
          alt={event.description}
          src={event.img}
          width={50}
          height={50}
          className="w-2/12 grow rounded-full max-h-12"
        />
        <div className="w-10/12 grow flex items-center justify-between">
          {event.description}
        </div>
        <div className="w-1/12">
          <IoIosArrowForward
            className="w-8 h-8"
            onClick={() => {
              router.push(`/events/${event.id}`);
            }}
          />
        </div>
      </div>
    </div>
  );
}
