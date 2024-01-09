import { MdOutlineNotificationsActive } from "react-icons/md";

export default function Alert() {
  return (
    <div data-testid="alertComponent" className="ml-4 flex items-center">
      <div className="relative mr-4">
        <MdOutlineNotificationsActive data-testid="alertIcon" className="w-10 h-10" />
        <div
          data-testid="numberOfAlerts"
          className="bg-red-500 w-6 h-6 text-center font-bold rounded-full absolute -top-1 -right-1 text-white"
        >
          2
        </div>
      </div>

      <span>RIOC Alerts</span>
    </div>
  );
}
