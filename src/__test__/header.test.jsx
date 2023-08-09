import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/Header";

// Test the Header component
describe("Header component", () => {
  // Test the rendering of the Header component with default props
  it("renders with default props", () => {
    const { getByText } = render(<Header />);

    // Check if the default text is rendered
    const defaultText = getByText("Fairway Finds");
    expect(defaultText).toBeInTheDocument();

    // Check if the default background color is applied
    const headerElement = getByText("Fairway Finds");
    expect(headerElement).toHaveStyle("background-color: var(--primary-color)");

    // Check if the default text color is applied
    expect(headerElement).toHaveStyle("color: var(--secondary-color)");
  });

  // Test the rendering of the Header component with custom props
  it("renders with custom props", () => {
    const customProps = {
      text: "Custom Header",
      bgColor: "red",
      textColor: "white",
      className: "custom-header",
    };

    const { getByText } = render(<Header {...customProps} />);

    // Check if the custom text is rendered
    const customText = getByText("Custom Header");
    expect(customText).toBeInTheDocument();

    // Check if the custom background color is applied
    const customHeaderElement = getByText("Custom Header");
    expect(customHeaderElement).toHaveStyle("background-color: red");

    // Check if the custom text color is applied
    expect(customHeaderElement).toHaveStyle("color: white");
  });
});
