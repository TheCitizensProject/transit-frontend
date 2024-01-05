import Image from "next/image";
import { ReactNode } from "react";
import { TbTriangleFilled } from "react-icons/tb";

export default function Home() {
  return (
    <main className="h-screen w-full">
      {/* <Header /> */}
      <IslandActivities />
      <AppQR />
    </main>
  );
}

type Activity = {
  title: string;
  icon: ReactNode;
  description: string;
  elapsedTime: string;
};
export function IslandActivities() {
  const activities: Activity[] = [
    {
      title: "Bridge to Queens closed",
      icon: (
        <TbTriangleFilled
          data-testid="activityIcon"
          className="w-12 h-12 mr-4"
        />
      ),
      description:
        "    Lorem, ipsum dolor sit amet consecteturt officiis quam est cum. Deleniti earum delectus ad harum.",
      elapsedTime: "11 minutes",
    },

    {
      title: "Bridge to Queens closed",
      icon: (
        <TbTriangleFilled
          data-testid="activityIcon"
          className="w-12 h-12 mr-4"
        />
      ),
      description:
        "    Lorem, ipsum dolor sit sed libero ratione magnam unde expedita eum quod sequi adipisci nesciunt officiis quam est cum. Deleniti earum delectus ad harum.",
      elapsedTime: "11 minutes",
    },
    {
      title: "Bridge to Queens closed",
      icon: (
        <TbTriangleFilled
          data-testid="activityIcon"
          className="w-12 h-12 mr-4"
        />
      ),
      description:
        "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum delectus ad harum.",
      elapsedTime: "11 minutes",
    },
  ];
  return (
    <div data-testid="islandActivities" className="w-full">
      <div className="bg-stone-100 p-4">
        <h1 className="text-2xl font-bold">{`What's happening on the Island today?`}</h1>
      </div>
      {activities.map((activity) => (
        <Activity key={activity.title} activity={activity} />
      ))}
    </div>
  );
}

export function Activity({
  activity: { icon, title, description, elapsedTime },
}: {
  activity: Activity;
}) {
  return (
    <div
      data-testid="activityComponent"
      className="flex items-start my-4 border-stone-400 border-2 p-4
       border-t-transparent border-r-transparent border-l-transparent"
    >
      <div className="mr-2">{icon}</div>
      <div>
        <h3 data-testid="title" className="font-semibold text-xl mb-2">
          {title}
        </h3>
        <div data-testid="desc" className="mb-2">
          {description}
        </div>
        <div className="flex justify-between pr-8">
          <p data-testid="elapsedTime" className="font-semibold">
            {elapsedTime}
          </p>
          <a href="/" className="font-semibold">
            read more
          </a>
        </div>
      </div>
    </div>
  );
}

export function AppQR() {
  return (
    <div
      data-testid="appQR"
      className="flex gap-4 p-4 bg-stone-100
     
    "
    >
      <div className=" w-1/2 grow">
        <h1 className="text-2xl font-bold">{`Download the Island App to explore the Island`}</h1>
        <div>
          <button className="mt-4 w-24 font-bold  py-2 bg-white border-2 text-center border-black rounded-full">
            ENTER
          </button>
        </div>
      </div>

      <div data-testid="qR" className="w-1/2 relative">
        <Image alt="get the app" src={"/qrcode.jpeg"} fill />
      </div>
    </div>
  );
}
