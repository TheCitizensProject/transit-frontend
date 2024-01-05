"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { GrServices } from "react-icons/gr";
import { MdOutlineDirectionsTransit } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { MdOutlineEventSeat } from "react-icons/md";
export default function PageHeader() {
  return (
    <div className="flex items-center justify-between my-4">
      <IconHeader icon={<GrServices className="w-8 h-8" />} text="Services" />
      <IconHeader
        icon={<MdOutlineDirectionsTransit className="w-8 h-8" />}
        text="Transit"
      />
      <IconHeader
        icon={<MdOutlineFeedback className="w-8 h-8" />}
        text="Feedback"
      />
      <IconHeader
        icon={<MdOutlineEventSeat className="w-8 h-8" />}
        text="Events"
      />
    </div>
  );
}

function IconHeader({ icon, text }: { icon: ReactNode; text: string }) {
  const router = useRouter();
  return (
    <div
      className="mx-4 flex flex-col items-center justify-center"
      onClick={() => {
        router.push(`/${text.toLocaleLowerCase()}`);
      }}
    >
      {icon}
      <span className="font-semibold">{text}</span>
    </div>
  );
}
