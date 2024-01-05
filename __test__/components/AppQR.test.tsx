import { AppQR } from "@/app/(pages)/today/page";
import "@testing-library/react";
import { render, screen } from "@testing-library/react";

describe("Download App Component - UI", () => {
  it('should have the text: "Download the Island App to explore the Island"', () => {
    render(<AppQR />);

    expect(
      screen.getByText("Download the Island App to explore the Island")
    ).toBeInTheDocument();
  });

  it('should have a button with text "Enter"', () => {
    render(<AppQR />);

    expect(screen.getByRole("button", { name: "Enter" })).toBeInTheDocument();
  });

  it('should have a QR code image with id  "qR"', () => {
    render(<AppQR />);

    expect(screen.getByTestId("qR")).toBeInTheDocument();
  });
});
