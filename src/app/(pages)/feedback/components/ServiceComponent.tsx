import { IoIosArrowForward } from "react-icons/io";
import { ServiceType } from "../page";

export function ServiceComponent({ service }: { service: ServiceType }) {
  return (
    <div className="p-4 flex justify-between items-center border-b border-stone-400  py-8">
      <div className="flex items-center">
        {service.icon}
        <h1 className="font-bold text-xl ml-4">{service.title}</h1>
      </div>
      <IoIosArrowForward className="w-8 h-8" />
    </div>
  );
}
