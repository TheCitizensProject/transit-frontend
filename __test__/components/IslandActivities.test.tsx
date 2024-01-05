import Header from "@/app/component/Header";
import { IslandActivities } from "@/app/(pages)/today/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Header Component", () => {
  it("should have a heading with text 'What's happening on the Island today?'", () => {
    render(<IslandActivities />);

    expect(
      screen.getByText("What's happening on the Island today?")
    ).toBeInTheDocument();
  });

  it("should have atlease one Activity component with class: 'activityComponent'", () => {
    render(<IslandActivities />);

    const activityComponent = screen.queryAllByTestId("activityComponent");

    expect(activityComponent[0]).toBeInTheDocument();
  });
});
