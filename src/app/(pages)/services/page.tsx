import React from "react";

import Image from "next/image";
import SearchBox from "./components/SearchBox";

type Service = {
  img: string;
  label: string;
};
type ServiceType = {
  title: string;
  services: Service[];
};

const services: ServiceType[] = [
  {
    title: "Restaurants",
    services: [
      {
        img: "/e-letter.png",
        label: "Oleato",
      },
      {
        img: "/e-letter.png",
        label: "Hot Coffees",
      },
      {
        img: "/e-letter.png",
        label: "Hot Teas",
      },
      {
        img: "/e-letter.png",
        label: "Hot Drinks",
      },
      {
        img: "/e-letter.png",
        label: "Frappucino* Blended Beverages",
      },
      {
        img: "/e-letter.png",
        label: "Cold Coffees",
      },
      {
        img: "/e-letter.png",
        label: "Iced Teas",
      },
      {
        img: "/e-letter.png",
        label: "Cold Drinks",
      },
    ],
  },
  {
    title: "Groceries",
    services: [
      {
        img: "/e-letter.png",
        label: "Oleato",
      },
      {
        img: "/e-letter.png",
        label: "Hot Coffees",
      },
      {
        img: "/e-letter.png",
        label: "Hot Teas",
      },
      {
        img: "/e-letter.png",
        label: "Hot Drinks",
      },
      {
        img: "/e-letter.png",
        label: "Frappucino* Blended Beverages",
      },
      {
        img: "/e-letter.png",
        label: "Cold Coffees",
      },
      {
        img: "/e-letter.png",
        label: "Iced Teas",
      },
      {
        img: "/e-letter.png",
        label: "Cold Drinks",
      },
    ],
  },
];

const page = () => {
  return (
    <div>
      <SearchBox />
      <div className="mt-4">
        {services.map((service) => (
          <ServiceComponent key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
};

export default page;

function ServiceComponent({ service }: { service: ServiceType }) {
  return (
    <div className="ml-4">
      <h6 className="font-bold mb-4 mt-4">{service.title}</h6>
      <div className="flex flex-wrap">
        {service.services.map((serv) => (
          <div className="flex items-center mb-4 w-1/2 pr-1" key={serv.label}>
            <Image
              alt={serv.label}
              src={serv.img}
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
            <span>{serv.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
