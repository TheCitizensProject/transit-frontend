import { Activity } from "@/app/page";
import "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { TbTriangleFilled } from "react-icons/tb";

describe("Activity Component - UI", () => {
  const activity = {
    title: "Bridge to Queens closed",
    icon: <TbTriangleFilled data-testid="activityIcon" />,
    description: "lorem",
    elapsedTime: "11 minutes",
  };
  it("should have an icon with id: activityIcon", () => {
    render(<Activity activity={activity} />);

    expect(screen.getByTestId("activityIcon")).toBeInTheDocument();
  });

  it("should have a heading", () => {
    render(<Activity activity={activity} />);

    expect(screen.getByTestId("title")).toHaveTextContent(/.+/i);
  });

  it("should have a paragraph with id: elapsedTime", () => {
    render(<Activity activity={activity} />);

    expect(screen.getByTestId("elapsedTime")).toHaveTextContent(/.+/i);
  });

  it("should have a div with id: desc", () => {
    render(<Activity activity={activity} />);

    expect(screen.getByTestId("desc")).toHaveTextContent(/.+/i);
  });
});
