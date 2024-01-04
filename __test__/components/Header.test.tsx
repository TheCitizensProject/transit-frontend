import Header from "@/app/component/Header";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Header Component", () => {
  it("should have an image with id: 'logo'", () => {
    render(<Header />);

    const logo = screen.getByTestId("logo");

    expect(logo).toBeInTheDocument();
  });
  it("should have a project title component with id: 'projectTitle'", () => {
    render(<Header />);

    const projectTitle = screen.getByTestId("projectTitle");

    expect(projectTitle).toHaveTextContent("ROOSEVELT ISLAND");
  });

  it("should have an Info component with id: 'headerInfo'", () => {
    render(<Header />);

    const headerInfo = screen.getByTestId("headerInfo");

    expect(headerInfo).toBeInTheDocument();
  });
});
