"use client";

import { useRouter } from "next/navigation";
import { EventType } from "../page";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function EventComponent({ event }: { event: EventType }) {
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
        <div className="w-10/12 grow flex items-center justify-between">{event.description}</div>
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
