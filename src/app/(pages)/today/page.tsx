import { ReactNode } from "react";
import { IslandActivities } from "./components/IslandActivities";
import { AppQR } from "./components/AppQR";

export default function Home() {
  return (
    <main className="h-screen w-full">
      {/* <Header /> */}
      <IslandActivities />
      <AppQR />
    </main>
  );
}

export type TActivity = {
  title: string;
  icon: ReactNode;
  description: string;
  elapsedTime: string;
};
