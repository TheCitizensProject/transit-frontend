import { TActivity } from "../page";

export function Activity({ activity: { icon, title, description, elapsedTime } }: { activity: TActivity }) {
  return (
    <div
      data-testid="activityComponent"
      className="flex items-start my-4 border-stone-400 border-2 p-4 border-t-transparent border-r-transparent border-l-transparent"
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
