import Image from "next/image";
import React, { ReactNode } from "react";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { MdFoodBank, MdOutlineFactory } from "react-icons/md";
import { EventType } from "../events/page";
import EventComponent from "../events/component/EventComponent";
import { ServiceComponent } from "./components/ServiceComponent";

export type ServiceType = {
  icon: ReactNode;
  title: string;
};

const Page = () => {
  const events: EventType[] = [
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
  ];

  const services: ServiceType[] = [
    {
      icon: <MdFoodBank className="w-10 h-10" />,
      title: "FoodTown",
    },
    {
      icon: <MdOutlineFactory className="w-10 h-10" />,
      title: "Wholesome Factory",
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mx-4">Organization A</h1>
      <div className="bg-stone-200 py-2 px-4 text-xl mt-4">Visitor Feedback</div>
      <div className="flex m-4">
        <div className="flex items-center mr-4">
          <FiThumbsUp className="w-8 h-8" />
          <span className="ml-1 text-xl">83%</span>
        </div>
        <div className="flex items-center ">
          <FiThumbsDown className="w-8 h-8" />
          <span className="ml-1 text-xl">17%</span>
        </div>
      </div>
      <div className="relative w-full h-40 mt-4">
        <Image src={"/feedback.png"} alt="feedback" fill />
      </div>
      <div className="bg-stone-200 py-2 px-4 text-xl mt-4">Your Services</div>
      {services.map((service) => (
        <ServiceComponent key={service.title} service={service} />
      ))}
      <div className="bg-stone-200 py-2 px-4 text-xl mt-4">Your Events</div>
      {events.map((event) => (
        <EventComponent key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Page;
