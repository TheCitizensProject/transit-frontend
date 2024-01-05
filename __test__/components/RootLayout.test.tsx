import RootLayout from "@/app/today/layout";
import { render, screen } from "@testing-library/react";

describe("Root Layout", () => {
  describe("Rendering", () => {
    it("should have a header component with id: 'headerComponent'", () => {
      render(<RootLayout>{<div></div>}</RootLayout>);

      const headerComponent = screen.getByTestId("headerComponent");

      expect(headerComponent).toBeInTheDocument();
    });
  });
});
